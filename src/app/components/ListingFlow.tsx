import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { useNavigate, useLocation } from "react-router";
import Header from "../../imports/Header";
import NavigationRail from "./NavigationRail";
import CreateItemLayout, {
  type ListingSectionMeta,
  type ListingSectionStatus,
} from "./CreateItemLayout";
import PhotosStep from "./PhotosStep";
import ItemDetailsContent from "./ItemDetailsContent";
import MarketplacesContent from "./MarketplacesContent";
import PricingContent from "./PricingContent";
import ShippingContent from "./ShippingContent";
import ListingSummaryDynamic from "./ListingSummaryDynamic";
import MarketplaceSideSheet from "./MarketplaceSideSheet";
import ListingSuccessPage from "./ListingSuccessPage";
import MarketplaceListingPreviewDialog from "./MarketplaceListingPreviewDialog";
import { useListingRouteSync } from "../hooks/useListingRouteSync";
import imgEbay from "figma:asset/fc302d572214546f8204178ed8fb7d0af8c7506e.png";
import imgMercari from "figma:asset/818d7c9ebebd26d98ee60737907006a9b258dce3.png";
import imgDepop from "figma:asset/9fc19e9b972ada34a5069710f93ea92cd4258fea.png";
import imgFacebook from "figma:asset/55ad25062cf42038188e8437b6d83a149a822f83.png";

// Vendoo Listing Creation Flow
const LISTING_FLOW_STORAGE_KEY = "vendoo-listing-flow-draft";
const AUTOSAVE_DEBOUNCE_MS = 800;

interface ListingFlowDraft {
  uploadedPhotos: string[];
  itemDetails: ItemDetails | null;
  aiGeneratedDetails: ItemDetails | null;
  selectedMarketplaces: string[];
  listingPrice: string;
  selectedShippingMethod: string;
  marketplaceCustomizations: Record<string, MarketplaceCustomization>;
  wasAIGeneratedFromPhotos: boolean;
}

export interface ItemDetails {
  title: string;
  description: string;
  category: string;
  brand: string;
  condition: string;
  size?: string;
  tags?: string;
  suggestedPrice?: string;
}

export interface Marketplace {
  id: string;
  name: string;
  image: string;
  connected: boolean;
}

export interface MarketplaceCustomization {
  title?: string;
  price?: string;
  category?: string;
  brand?: string;
  size?: string;
  shippingType?: string;
  pricingFormat?: string;
}

const allMarketplaces: Marketplace[] = [
  { id: "ebay", name: "eBay", image: imgEbay, connected: true },
  { id: "mercari", name: "Mercari", image: imgMercari, connected: true },
  { id: "depop", name: "Depop", image: imgDepop, connected: true },
  { id: "facebook", name: "Facebook", image: imgFacebook, connected: true },
];

// Maps step names to the section to expand
const STEP_TO_EXPAND_MAP: Record<string, string> = {
  photos: "photos",
  details: "itemDetails",
  marketplaces: "marketplaces",
  "price-shipping": "pricing",
};

export default function ListingFlow() {
  const navigate = useNavigate();
  const location = useLocation();
  const [uploadedPhotos, setUploadedPhotos] = useState<string[]>([]);
  const [isRailExpanded, setIsRailExpanded] = useState(false);
  const [itemDetails, setItemDetails] = useState<ItemDetails | null>(null);
  // Separate state for AI-generated details from Photos step — set once, never updated by manual edits
  const [aiGeneratedDetails, setAiGeneratedDetails] =
    useState<ItemDetails | null>(null);
  const [selectedMarketplaces, setSelectedMarketplaces] = useState<string[]>(
    [],
  );
  const [shouldExpandItemDetails, setShouldExpandItemDetails] = useState(false);
  const [shouldExpandMarketplaces, setShouldExpandMarketplaces] =
    useState(false);
  const [shouldExpandPricing, setShouldExpandPricing] = useState(false);
  const [shouldExpandShipping, setShouldExpandShipping] = useState(false);
  const [isPhotosCollapsed, setIsPhotosCollapsed] = useState(false);
  const [shouldCollapseItemDetails, setShouldCollapseItemDetails] =
    useState(false);
  const [shouldCollapseMarketplaces, setShouldCollapseMarketplaces] =
    useState(false);
  const [shouldCollapsePricing, setShouldCollapsePricing] = useState(false);
  const [shouldCollapseShipping, setShouldCollapseShipping] = useState(false);
  const [isSideSheetOpen, setIsSideSheetOpen] = useState(false);
  const [selectedMarketplaceForEdit, setSelectedMarketplaceForEdit] = useState<
    string | undefined
  >();
  const [listingPrice, setListingPrice] = useState<string>("");
  const [selectedShippingMethod, setSelectedShippingMethod] =
    useState<string>("");
  const [isPublished, setIsPublished] = useState(false);
  const [isReviewMode, setIsReviewMode] = useState(false);
  // Tracks whether item details were actually AI-generated (from Photos step Gemini call)
  const [wasAIGeneratedFromPhotos, setWasAIGeneratedFromPhotos] =
    useState(false);
  // Marketplace-specific customizations (title, price, etc.)
  const [marketplaceCustomizations, setMarketplaceCustomizations] = useState<
    Record<string, MarketplaceCustomization>
  >({});
  // Lifted marketplace preview dialog state (so dialog renders outside overflow containers)
  const [previewMarketplace, setPreviewMarketplace] =
    useState<Marketplace | null>(null);
  const [activeEditSection, setActiveEditSection] =
    useState<ListingSectionMeta["id"]>("photos");
  const [activeEditContext, setActiveEditContext] = useState<string | null>(null);
  const [autosaveState, setAutosaveState] = useState<"idle" | "saving" | "saved">("idle");
  const [hasRestoredDraft, setHasRestoredDraft] = useState(false);

  // Ref for the edit mode scroll container
  const editScrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    try {
      const savedDraft = window.localStorage.getItem(LISTING_FLOW_STORAGE_KEY);
      if (!savedDraft) {
        setHasRestoredDraft(true);
        return;
      }

      const parsedDraft = JSON.parse(savedDraft) as Partial<ListingFlowDraft>;
      setUploadedPhotos(Array.isArray(parsedDraft.uploadedPhotos) ? parsedDraft.uploadedPhotos : []);
      setItemDetails(parsedDraft.itemDetails ?? null);
      setAiGeneratedDetails(parsedDraft.aiGeneratedDetails ?? null);
      setSelectedMarketplaces(Array.isArray(parsedDraft.selectedMarketplaces) ? parsedDraft.selectedMarketplaces : []);
      setListingPrice(parsedDraft.listingPrice ?? "");
      setSelectedShippingMethod(parsedDraft.selectedShippingMethod ?? "");
      setMarketplaceCustomizations(parsedDraft.marketplaceCustomizations ?? {});
      setWasAIGeneratedFromPhotos(Boolean(parsedDraft.wasAIGeneratedFromPhotos));
      setAutosaveState("saved");
    } catch (error) {
      console.error("Failed to restore listing draft", error);
      window.localStorage.removeItem(LISTING_FLOW_STORAGE_KEY);
    } finally {
      setHasRestoredDraft(true);
    }
  }, []);

  const autosaveDraft = useMemo<ListingFlowDraft>(() => ({
    uploadedPhotos,
    itemDetails,
    aiGeneratedDetails,
    selectedMarketplaces,
    listingPrice,
    selectedShippingMethod,
    marketplaceCustomizations,
    wasAIGeneratedFromPhotos,
  }), [
    uploadedPhotos,
    itemDetails,
    aiGeneratedDetails,
    selectedMarketplaces,
    listingPrice,
    selectedShippingMethod,
    marketplaceCustomizations,
    wasAIGeneratedFromPhotos,
  ]);

  useEffect(() => {
    if (!hasRestoredDraft || isPublished) {
      return;
    }

    setAutosaveState("saving");
    const timeoutId = window.setTimeout(() => {
      try {
        window.localStorage.setItem(
          LISTING_FLOW_STORAGE_KEY,
          JSON.stringify(autosaveDraft),
        );
        setAutosaveState("saved");
      } catch (error) {
        console.error("Failed to autosave listing draft", error);
        setAutosaveState("idle");
      }
    }, AUTOSAVE_DEBOUNCE_MS);

    return () => window.clearTimeout(timeoutId);
  }, [autosaveDraft, hasRestoredDraft, isPublished]);

  // Derive shipping completion from selected method (input-driven, not button-driven)
  const shippingCompleted = selectedShippingMethod !== "";

  // ── Route sync ──
  const handleRestoreState = useCallback(
    (state: {
      step?: string;
      isReview?: boolean;
      isPublished?: boolean;
      marketplaceCustomization?: string;
    }) => {
      if (state.isPublished) {
        setIsPublished(true);
        setIsReviewMode(false);
        return;
      }

      if (state.isReview) {
        setIsReviewMode(true);
        setIsPublished(false);
        if (state.marketplaceCustomization) {
          setSelectedMarketplaceForEdit(state.marketplaceCustomization);
          setIsSideSheetOpen(true);
        }
        return;
      }

      if (state.step) {
        setIsReviewMode(false);
        setIsPublished(false);

        const expandKey = STEP_TO_EXPAND_MAP[state.step] as ListingSectionMeta["id"] | undefined;
        if (expandKey) {
          openSection(expandKey, {
            context:
              "In progress",
            routeStep: state.step as "photos" | "details" | "marketplaces" | "price-shipping",
          });
        }
      }
    },
    [openSection],
  );

  const {
    navigateToSection,
    navigateToReview,
    navigateToSuccess,
    navigateToPhotos,
    navigateToPublish,
  } = useListingRouteSync({
    isReviewMode,
    isPublished,
    isSideSheetOpen,
    selectedMarketplaceForEdit,
    scrollContainerRef: editScrollContainerRef,
    onRestoreState: handleRestoreState,
  });

  // Redirect bare /scroll/listing to /scroll/listing/photos
  useEffect(() => {
    const path = location.pathname;
    if (path === "/scroll/listing" || path === "/scroll/listing/") {
      navigate("/scroll/listing/photos", { replace: true });
    }
  }, [location.pathname, navigate]);

  // Install Maze snippet
  useEffect(() => {
    (function (m: Window, a: Document, z: string, e: string) {
      var s: HTMLScriptElement,
        t: string | null,
        u: HTMLScriptElement | undefined,
        v: string | null;
      try {
        t = m.sessionStorage.getItem("maze-us");
      } catch (err) {}

      if (!t) {
        t = new Date().getTime().toString();
        try {
          m.sessionStorage.setItem("maze-us", t);
        } catch (err) {}
      }

      u =
        (document.currentScript as HTMLScriptElement) ||
        (function () {
          var w = document.getElementsByTagName("script");
          return w[w.length - 1];
        })();
      v = u && u.nonce;

      s = a.createElement("script");
      s.src = z + "?apiKey=" + e;
      s.async = true;
      if (v) s.setAttribute("nonce", v);
      a.getElementsByTagName("head")[0].appendChild(s);
      (m as any).mazeUniversalSnippetApiKey = e;
    })(
      window,
      document,
      "https://snippet.maze.co/maze-universal-loader.js",
      "e35d45f9-20f1-4f2e-bdd5-74d55b9e1eab",
    );
  }, []);

  // Collapse all sections except the one being expanded
  const collapseAllExcept = (
    except: "photos" | "itemDetails" | "marketplaces" | "pricing" | "shipping",
  ) => {
    if (except !== "photos") setIsPhotosCollapsed(true);
    if (except !== "itemDetails") setShouldCollapseItemDetails(true);
    if (except !== "marketplaces") setShouldCollapseMarketplaces(true);
    if (except !== "pricing") setShouldCollapsePricing(true);
    if (except !== "shipping") setShouldCollapseShipping(true);
  };

  const sectionContextMap: Record<ListingSectionMeta["id"], string> = {
    photos: "In progress",
    itemDetails:
      "In progress",
    marketplaces:
      "In progress",
    pricing:
      "In progress",
    shipping:
      "In progress",
  };

  const handleContinueFromPhotos = (
    photos: string[],
    generatedDetails?: ItemDetails,
  ) => {
    setUploadedPhotos(photos);
    if (generatedDetails) {
      setItemDetails(generatedDetails);
      setAiGeneratedDetails(generatedDetails);
      setWasAIGeneratedFromPhotos(true);
      if (generatedDetails.suggestedPrice) {
        const cleanPrice = generatedDetails.suggestedPrice.replace(
          /[^0-9.]/g,
          "",
        );
        if (cleanPrice) {
          setListingPrice(cleanPrice);
        }
      }
    }
    openSection("itemDetails", {
      context:
        "Photos are saved. Item details opened automatically so you can keep momentum without hunting for the next section.",
    });
  };

  const handleContinueFromItemDetails = () => {
    openSection("marketplaces", {
      context:
        "Item details are saved. Marketplaces opened next so you can continue the listing flow smoothly.",
    });
  };

  const handleContinueFromMarketplaces = () => {
    openSection("pricing", {
      context:
        "Marketplaces are set. Pricing opened next so the transition feels continuous, not forced.",
    });
  };

  const handleContinueFromPricing = () => {
    openSection("shipping", {
      context:
        "Pricing is ready. Shipping opened next so you can finish this pass without losing context.",
    });
  };

  const handleTogglePhotosExpand = () => {
    const willExpand = isPhotosCollapsed;
    setIsPhotosCollapsed(!isPhotosCollapsed);
    if (willExpand) {
      openSection("photos", {
        context:
          "In progress",
      });
    }
  };

  // Handle manual expansion of sections (user clicks chevron to re-expand)
  const handleManualExpandItemDetails = () => {
    openSection("itemDetails", {
      context:
        "In progress",
    });
  };
  const handleManualExpandMarketplaces = () => {
    openSection("marketplaces", {
      context:
        "In progress",
    });
  };
  const handleManualExpandPricing = () => {
    openSection("pricing", {
      context:
        "In progress",
    });
  };
  const handleManualExpandShipping = () => {
    openSection("shipping", {
      context:
        "In progress",
    });
  };

  const handleGoToMarketplaces = () => {
    openSection("marketplaces", {
      context:
        "Opened from summary so the marketplace accordion is visible right away and ready for edits.",
    });
  };

  const handleEditMarketplace = (marketplaceId: string) => {
    openSection("marketplaces", {
      context:
        "Opened from review or the right rail so the matching marketplace section is visible behind the override panel.",
    });
    setSelectedMarketplaceForEdit(marketplaceId);
    setIsSideSheetOpen(true);
    // Route sync hook handles URL update for review/marketplace
  };

  const handleCloseSideSheet = () => {
    setIsSideSheetOpen(false);
    setSelectedMarketplaceForEdit(undefined);
    // Route sync hook handles URL update back to /review
  };

  const handlePublish = () => {
    // Navigate to publish route briefly, then success
    navigateToPublish();
    setTimeout(() => {
      window.localStorage.removeItem(LISTING_FLOW_STORAGE_KEY);
      setIsPublished(true);
      setIsReviewMode(false);
      setAutosaveState("idle");
      navigateToSuccess();
    }, 500);
  };

  // Edit mode sidebar "Review & Publish" → navigate to review step
  const handleGoToReview = () => {
    collapseAllExcept("shipping");
    setShouldCollapseShipping(true);
    setIsReviewMode(true);
    navigateToReview();
  };

  const handleContinueFromShipping = () => {
    collapseAllExcept("shipping");
    setShouldCollapseShipping(true);
    setIsReviewMode(true);
    navigateToReview();
  };

  const handleBackFromReview = () => {
    openSection(activeEditSection, {
      context:
        "In progress",
    });
  };

  const handleBackToEditFromReview = () => {
    openSection(activeEditSection, {
      context:
        "Returned from review. Your active accordion is visible again and ready for edits.",
    });
  };

  const handleListAnother = () => {
    window.localStorage.removeItem(LISTING_FLOW_STORAGE_KEY);
    setIsPublished(false);
    setIsReviewMode(false);
    setUploadedPhotos([]);
    setItemDetails(null);
    setAiGeneratedDetails(null);
    setSelectedMarketplaces([]);
    setListingPrice("");
    setSelectedShippingMethod("");
    setShouldExpandItemDetails(false);
    setShouldExpandMarketplaces(false);
    setShouldExpandPricing(false);
    setShouldExpandShipping(false);
    setIsPhotosCollapsed(false);
    setShouldCollapseItemDetails(false);
    setShouldCollapseMarketplaces(false);
    setShouldCollapsePricing(false);
    setShouldCollapseShipping(false);
    setWasAIGeneratedFromPhotos(false);
    setPreviewMarketplace(null);
    setMarketplaceCustomizations({});
    setAutosaveState("idle");
    navigateToPhotos();
  };

  const handleGoToInventory = () => {
    console.log("Navigate to inventory");
  };

  const sectionRefs = {
    photos: "listing-photos",
    itemDetails: "listing-details",
    marketplaces: "listing-marketplaces",
    pricing: "listing-price-shipping",
    shipping: "listing-shipping-section",
  } as const;

  const requiredFieldSummary = [
    { label: "Photos", missing: uploadedPhotos.length === 0 },
    { label: "Title", missing: !(itemDetails?.title?.trim()) },
    { label: "Description", missing: !(itemDetails?.description?.trim()) },
    { label: "Brand", missing: !(itemDetails?.brand?.trim()) },
    { label: "Category", missing: !(itemDetails?.category?.trim()) },
    { label: "Size", missing: !((itemDetails?.size ?? "").trim()) },
    { label: "Condition", missing: !(itemDetails?.condition?.trim()) },
    { label: "Marketplace", missing: selectedMarketplaces.length === 0 },
    { label: "Price", missing: listingPrice.trim() === "" },
    { label: "Shipping", missing: selectedShippingMethod.trim() === "" },
  ];
  const missingRequiredFields = requiredFieldSummary
    .filter((field) => field.missing)
    .map((field) => field.label);

  const isPhotosComplete = uploadedPhotos.length > 0;
  const isItemDetailsComplete = !!(
    itemDetails?.title?.trim() &&
    itemDetails?.description?.trim() &&
    itemDetails?.brand?.trim() &&
    itemDetails?.category?.trim() &&
    itemDetails?.size?.trim() &&
    itemDetails?.condition?.trim()
  );
  const isMarketplacesComplete = selectedMarketplaces.length > 0;
  const isPricingComplete = listingPrice.trim() !== "";
  const isShippingComplete = shippingCompleted;
  const completionBySection: Record<ListingSectionMeta["id"], boolean> = {
    photos: isPhotosComplete,
    itemDetails: isItemDetailsComplete,
    marketplaces: isMarketplacesComplete,
    pricing: isPricingComplete,
    shipping: isShippingComplete,
  };

  const customizedMarketplaceCount = selectedMarketplaces.filter(
    (marketplaceId) =>
      !!marketplaceCustomizations[marketplaceId] &&
      Object.values(marketplaceCustomizations[marketplaceId] ?? {}).some(Boolean),
  ).length;
  const baseListingReady =
    isPhotosComplete &&
    isItemDetailsComplete &&
    isPricingComplete &&
    isShippingComplete;
  const marketplaceReadyCount = baseListingReady ? selectedMarketplaces.length : 0;

  const [currentSection, setCurrentSection] =
    useState<ListingSectionMeta["id"]>("photos");

  const sectionOrder: ListingSectionMeta["id"][] = [
    "photos",
    "itemDetails",
    "marketplaces",
    "pricing",
    "shipping",
  ];
  const firstIncompleteSection =
    sectionOrder.find((sectionId) => !completionBySection[sectionId]) ?? "shipping";
  const getStepStateLabel = (
    sectionId: ListingSectionMeta["id"],
    isComplete: boolean,
    hasStarted: boolean,
  ) => {
    if (isComplete) return "Completed";
    if (sectionId === firstIncompleteSection) {
      return hasStarted ? "Continue" : "Start";
    }
    if (hasStarted) return "Continue";
    return "Upcoming";
  };
  const isSectionLocked = (sectionId: ListingSectionMeta["id"]) =>
    !completionBySection[sectionId] && sectionId !== firstIncompleteSection;

  const getSectionStatus = useCallback(
    (isComplete: boolean, hasStarted: boolean): ListingSectionStatus => {
      if (isComplete) return "completed";
      if (hasStarted) return "in-progress";
      return "not-started";
    },
    [],
  );

  const progressSections: ListingSectionMeta[] = [
    {
      id: "photos",
      stepNumber: 1,
      title: "Photos",
      description: isPhotosComplete
        ? `${uploadedPhotos.length} photo${uploadedPhotos.length === 1 ? "" : "s"} added and ready to lead the listing.`
        : "Add the photos buyers will see first.",
      shortDescription: isPhotosComplete ? "Completed" : "Not started",
      ctaLabel: isPhotosComplete ? "Edit photos" : "Start with photos",
      nextStepLabel: isPhotosComplete
        ? "Next step: finish item details."
        : "Start here so AI or manual details have the right inputs.",
      stateLabel: getStepStateLabel("photos", isPhotosComplete, uploadedPhotos.length > 0),
      connectedLabel: undefined,
      status: getSectionStatus(isPhotosComplete, uploadedPhotos.length > 0),
      isCurrent: currentSection === "photos",
      isLocked: false,
      isAccessible: true,
    },
    {
      id: "itemDetails",
      stepNumber: 2,
      title: "Item Details",
      description: isItemDetailsComplete
        ? "Details complete"
        : itemDetails
          ? "Finish the required fields"
          : "Add the main listing details.",
      shortDescription: isItemDetailsComplete
        ? "Completed"
        : itemDetails
          ? "In progress"
          : "Not started",
      ctaLabel: isItemDetailsComplete ? "Edit details" : "Continue to details",
      nextStepLabel: isItemDetailsComplete
        ? "Next step: choose marketplaces."
        : "Use AI suggestions or finish the shared listing fields manually.",
      stateLabel: getStepStateLabel("itemDetails", isItemDetailsComplete, !!itemDetails),
      sourceOfTruthNote: undefined,
      status: getSectionStatus(isItemDetailsComplete, !!itemDetails),
      isCurrent: currentSection === "itemDetails",
      isLocked: isSectionLocked("itemDetails"),
      isAccessible: !isSectionLocked("itemDetails"),
    },
    {
      id: "marketplaces",
      stepNumber: 3,
      title: "Marketplaces",
      description: isMarketplacesComplete
        ? `${selectedMarketplaces.length} selected`
        : "Choose marketplaces.",
      shortDescription: isMarketplacesComplete
        ? "In progress"
        : "Not started",
      ctaLabel: isMarketplacesComplete
        ? "Edit marketplaces"
        : "Continue to marketplaces",
      nextStepLabel: isMarketplacesComplete
        ? "Next step: set pricing."
        : "Pick destinations now; you can still customize each marketplace later.",
      stateLabel: getStepStateLabel(
        "marketplaces",
        isMarketplacesComplete,
        selectedMarketplaces.length > 0,
      ),
      connectedLabel: undefined,
      status: getSectionStatus(
        isMarketplacesComplete,
        selectedMarketplaces.length > 0,
      ),
      isCurrent: currentSection === "marketplaces",
      isLocked: isSectionLocked("marketplaces"),
      isAccessible: !isSectionLocked("marketplaces"),
    },
    {
      id: "pricing",
      stepNumber: 4,
      title: "Pricing",
      description: isPricingComplete
        ? `$${listingPrice}`
        : "Set a price.",
      shortDescription: isPricingComplete
        ? "Completed"
        : "Not started",
      ctaLabel: isPricingComplete ? "Edit pricing" : "Continue to pricing",
      nextStepLabel: isPricingComplete
        ? "Next step: confirm shipping."
        : "Set the base price before you move to shipping.",
      stateLabel: getStepStateLabel("pricing", isPricingComplete, listingPrice.trim() !== ""),
      connectedLabel: undefined,
      status: getSectionStatus(isPricingComplete, listingPrice.trim() !== ""),
      isCurrent: currentSection === "pricing",
      isLocked: isSectionLocked("pricing"),
      isAccessible: !isSectionLocked("pricing"),
    },
    {
      id: "shipping",
      stepNumber: 5,
      title: "Shipping",
      description: isShippingComplete
        ? "Shipping selected"
        : "Choose shipping.",
      shortDescription: isShippingComplete
        ? "Completed"
        : "Not started",
      ctaLabel: isShippingComplete ? "Edit shipping" : "Continue to shipping",
      nextStepLabel: isShippingComplete
        ? "Next step: review and publish."
        : "Choose the shipping setup that best matches this item.",
      stateLabel: getStepStateLabel(
        "shipping",
        isShippingComplete,
        selectedShippingMethod.trim() !== "",
      ),
      connectedLabel: undefined,
      status: getSectionStatus(
        isShippingComplete,
        selectedShippingMethod.trim() !== "",
      ),
      isCurrent: currentSection === "shipping",
      isLocked: isSectionLocked("shipping"),
      isAccessible: !isSectionLocked("shipping"),
      isPublishReady: isShippingComplete,
    },
  ];

  const completedSectionCount = progressSections.filter(
    (section) => section.status === "completed",
  ).length;
  const reviewStatus: ListingSectionStatus =
    completedSectionCount === progressSections.length
      ? "completed"
      : completedSectionCount >= progressSections.length - 1
        ? "in-progress"
        : "not-started";

  const scrollToSection = useCallback((sectionId: ListingSectionMeta["id"]) => {
    const container = editScrollContainerRef.current;
    const elementId = sectionRefs[sectionId];
    if (!container || !elementId) return;

    const target = container.querySelector(
      `#${elementId}`,
    ) as HTMLElement | null;
    if (!target) return;

    const stickyOffset = 220;
    const nextTop = target.offsetTop - stickyOffset;
    container.scrollTo({ top: Math.max(nextTop, 0), behavior: "smooth" });
    setCurrentSection(sectionId);
    setActiveEditSection(sectionId);
  }, []);

  function openSection(
    section: ListingSectionMeta["id"],
    options?: {
      context?: string;
      routeStep?: "photos" | "details" | "marketplaces" | "price-shipping";
    },
  ) {
    if (isSectionLocked(section)) {
      return;
    }
    setIsReviewMode(false);
    collapseAllExcept(section);
    setActiveEditSection(section);
    setActiveEditContext(options?.context ?? sectionContextMap[section]);

    if (section === "photos") {
      setIsPhotosCollapsed(false);
    }
    if (section === "itemDetails") {
      setShouldExpandItemDetails(true);
    }
    if (section === "marketplaces") {
      setShouldExpandMarketplaces(true);
    }
    if (section === "pricing") {
      setShouldExpandPricing(true);
    }
    if (section === "shipping") {
      setShouldExpandShipping(true);
    }

    const step =
      options?.routeStep ??
      (section === "itemDetails"
        ? "details"
        : section === "marketplaces"
          ? "marketplaces"
          : section === "photos"
            ? "photos"
            : "price-shipping");
    navigateToSection(step);
    window.setTimeout(() => scrollToSection(section), 60);
  }

  useEffect(() => {
    const container = editScrollContainerRef.current;
    if (!container || isReviewMode) return;

    const sectionScrollOrder: Array<{
      id: ListingSectionMeta["id"];
      elementId: string;
    }> = [
      { id: "photos", elementId: "listing-photos" },
      { id: "itemDetails", elementId: "listing-details" },
      { id: "marketplaces", elementId: "listing-marketplaces" },
      { id: "pricing", elementId: "listing-price-shipping" },
      { id: "shipping", elementId: "listing-shipping-section" },
    ];

    const updateCurrentSection = () => {
      const scrollPosition = container.scrollTop + 260;
      let nextSection: ListingSectionMeta["id"] = "photos";

      for (const section of sectionScrollOrder) {
        const element = container.querySelector(
          `#${section.elementId}`,
        ) as HTMLElement | null;
        if (element && element.offsetTop <= scrollPosition) {
          nextSection = section.id;
        }
      }

      if (
        scrollPosition >=
        container.scrollHeight - container.clientHeight - 120
      ) {
        nextSection = isShippingComplete ? "shipping" : nextSection;
      }

      setCurrentSection((prev) => (prev === nextSection ? prev : nextSection));
    };

    updateCurrentSection();
    container.addEventListener("scroll", updateCurrentSection, {
      passive: true,
    });
    return () => container.removeEventListener("scroll", updateCurrentSection);
  }, [isReviewMode, isShippingComplete]);

  useEffect(() => {
    if (isReviewMode || isPublished) {
      return;
    }

    if (currentSection !== firstIncompleteSection && isSectionLocked(currentSection)) {
      setCurrentSection(firstIncompleteSection);
    }
  }, [currentSection, firstIncompleteSection, isPublished, isReviewMode]);

  const selectedMarketplacesData = allMarketplaces.filter((m) =>
    selectedMarketplaces.includes(m.id),
  );

  return (
    <div className="flex h-screen w-screen min-w-[1280px] flex-col">
      {/* Header */}
      <div className="h-[80px] shrink-0 px-[48px] py-[0px] mx-[0px] mt-[12px] mb-[0px]">
        <Header />
      </div>

      {/* Main Content Area */}
      <div className="flex flex-1 overflow-hidden m-[0px] px-[36px] py-[24px]">
        {/* Navigation Rail */}
        <div
          className={`shrink-0 transition-all duration-300 ${isRailExpanded ? "w-[256px]" : "w-[96px]"} mx-[16px] my-[0px]`}
        >
          <NavigationRail
            isExpanded={isRailExpanded}
            onToggle={() => setIsRailExpanded(!isRailExpanded)}
          />
        </div>

        {/* Content Area - Success page unmounts everything; Review/Edit kept mounted */}
        {!isPublished && (
          <div className="absolute right-[24px] top-[12px] z-[20] rounded-full border border-border bg-background/95 px-3 py-2 text-[12px] text-muted-foreground shadow-sm backdrop-blur">
            {autosaveState === "saving"
              ? "Saving draft…"
              : autosaveState === "saved"
                ? "Draft autosaved"
                : "Changes stay on this device until you publish."}
          </div>
        )}

        {isPublished ? (
          <ListingSuccessPage
            photos={uploadedPhotos}
            itemDetails={itemDetails}
            price={listingPrice}
            selectedMarketplaceIds={selectedMarketplaces}
            onListAnother={handleListAnother}
            onGoToInventory={handleGoToInventory}
          />
        ) : (
          <>
            {/* Review Mode - Full-width Listing Summary (hidden when not in review) */}
            <div
              id="listing-review"
              data-step="review"
              className={`flex-1 overflow-y-auto overflow-x-hidden flex flex-col gap-0 border border-border rounded-[12px] relative ml-[-4px] mr-[0px] my-[0px] ${!isReviewMode ? "hidden" : ""}`}
            >
              {/* Back Button Header */}
              <div className="sticky top-0 z-10 bg-background shrink-0 w-full rounded-tl-[12px] rounded-tr-[12px] border-b border-border">
                <div className="content-stretch flex items-center gap-[12px] px-[24px] py-[16px]">
                  <button
                    onClick={handleBackFromReview}
                    className="content-stretch flex items-center gap-[8px] cursor-pointer hover:bg-muted rounded-[var(--radius)] px-[12px] py-[8px] transition-colors"
                  >
                    <div className="overflow-clip relative shrink-0 size-[20px]">
                      <svg
                        className="block size-full"
                        fill="none"
                        viewBox="0 0 20 20"
                      >
                        <path
                          d="M12.5 15L7.5 10L12.5 5"
                          stroke="var(--muted-foreground)"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <p className="font-['Lexend',sans-serif] font-[var(--font-weight-medium)] leading-[20px] text-muted-foreground text-[var(--text-sm)] tracking-[0.1px]">
                      Back to Editing
                    </p>
                  </button>
                  <div className="flex-1" />
                  <p className="font-['Lexend',sans-serif] font-[var(--font-weight-normal)] leading-[28px] text-foreground text-[var(--text-h4)]">
                    Review Listing
                  </p>
                  <div className="flex-1" />
                  {/* Spacer for centering */}
                  <div className="w-[140px]" />
                </div>
              </div>

              {/* Full-width Listing Summary */}
              <div className="flex-1 bg-background rounded-bl-[12px] rounded-br-[12px]">
                <ListingSummaryDynamic
                  selectedMarketplaceIds={selectedMarketplaces}
                  onSelectMarketplaces={handleGoToMarketplaces}
                  onEditMarketplace={handleEditMarketplace}
                  photos={uploadedPhotos}
                  itemDetails={itemDetails}
                  price={listingPrice}
                  shippingCompleted={shippingCompleted}
                  onPublish={handlePublish}
                  isReviewMode={true}
                  missingRequiredFields={missingRequiredFields}
                  autosaveState={autosaveState}
                  onBackToEdit={handleBackToEditFromReview}
                  marketplaceCustomizations={marketplaceCustomizations}
                  onPreviewMarketplace={setPreviewMarketplace}
                />
              </div>
            </div>

            {/* Edit Mode - kept mounted but hidden when in review mode */}
            <div
              ref={editScrollContainerRef}
              className={`flex-1 overflow-y-auto overflow-x-hidden flex gap-0 border border-border rounded-[12px] relative ml-[-4px] mr-[0px] my-[0px] ${isReviewMode ? "hidden" : ""}`}
            >
              {/* Left Panel - Create Item Sections */}
              <div className="flex-1 min-w-0">
                <CreateItemLayout
                  progressSections={progressSections}
                  completionCount={completedSectionCount}
                  onJumpToSection={(sectionId) => openSection(sectionId as ListingSectionMeta["id"])}
                  reviewStatus={reviewStatus}
                  activeSectionId={activeEditSection}
                  activeSectionContext={activeEditContext}
                  children={{
                    photos: (
                      <PhotosStep
                        onContinue={handleContinueFromPhotos}
                        isCollapsed={isPhotosCollapsed}
                        onToggleExpand={handleTogglePhotosExpand}
                        autosaveState={autosaveState}
                        initialPhotos={uploadedPhotos}
                      />
                    ),
                    itemDetails: (
                      <ItemDetailsContent
                        initialData={aiGeneratedDetails}
                        shouldExpand={shouldExpandItemDetails}
                        onExpandChange={() => setShouldExpandItemDetails(false)}
                        onContinue={handleContinueFromItemDetails}
                        onDetailsChange={setItemDetails}
                        shouldCollapse={shouldCollapseItemDetails}
                        onCollapseChange={() =>
                          setShouldCollapseItemDetails(false)
                        }
                        onManualExpand={handleManualExpandItemDetails}
                      />
                    ),
                    marketplaces: (
                      <MarketplacesContent
                        shouldExpand={shouldExpandMarketplaces}
                        onExpandChange={() =>
                          setShouldExpandMarketplaces(false)
                        }
                        onContinue={handleContinueFromMarketplaces}
                        selectedMarketplaces={selectedMarketplaces}
                        onMarketplacesChange={setSelectedMarketplaces}
                        marketplaceCustomizations={marketplaceCustomizations}
                        onEditMarketplace={handleEditMarketplace}
                        shouldCollapse={shouldCollapseMarketplaces}
                        onCollapseChange={() =>
                          setShouldCollapseMarketplaces(false)
                        }
                        onManualExpand={handleManualExpandMarketplaces}
                      />
                    ),
                    pricing: (
                      <PricingContent
                        isAIGenerated={wasAIGeneratedFromPhotos}
                        hasUsedAI={wasAIGeneratedFromPhotos}
                        shouldExpand={shouldExpandPricing}
                        onExpandChange={() => setShouldExpandPricing(false)}
                        onContinue={handleContinueFromPricing}
                        onPriceChange={setListingPrice}
                        initialPrice={
                          itemDetails?.suggestedPrice
                            ? itemDetails.suggestedPrice.replace(/[^0-9.]/g, "")
                            : undefined
                        }
                        shouldCollapse={shouldCollapsePricing}
                        onCollapseChange={() => setShouldCollapsePricing(false)}
                        onManualExpand={handleManualExpandPricing}
                      />
                    ),
                    shipping: (
                      <ShippingContent
                        isAIGenerated={wasAIGeneratedFromPhotos}
                        shouldExpand={shouldExpandShipping}
                        onExpandChange={() => setShouldExpandShipping(false)}
                        shouldCollapse={shouldCollapseShipping}
                        onCollapseChange={() =>
                          setShouldCollapseShipping(false)
                        }
                        onManualExpand={handleManualExpandShipping}
                        onContinue={handleContinueFromShipping}
                        uploadedPhotos={uploadedPhotos}
                        onShippingMethodChange={setSelectedShippingMethod}
                      />
                    ),
                  }}
                />
              </div>

              {/* Vertical Divider */}
              <div
                className="sticky top-0 h-screen w-[1px] bg-border z-[10] mx-[-4px] my-[0px]"
                style={{ left: "calc(100% - 320px)" }}
              />

              {/* Right Panel - Listing Summary with background wrapper */}
              <div className="w-[320px] bg-background shrink-0 rounded-tr-[12px] rounded-br-[12px] h-full flex-col relative z-[1]">
                <ListingSummaryDynamic
                  selectedMarketplaceIds={selectedMarketplaces}
                  onSelectMarketplaces={handleGoToMarketplaces}
                  onEditMarketplace={handleEditMarketplace}
                  photos={uploadedPhotos}
                  itemDetails={itemDetails}
                  price={listingPrice}
                  shippingCompleted={shippingCompleted}
                  onPublish={handleGoToReview}
                  marketplaceCustomizations={marketplaceCustomizations}
                  missingRequiredFields={missingRequiredFields}
                  autosaveState={autosaveState}
                />
              </div>
            </div>
          </>
        )}
      </div>

      {/* Marketplace Side Sheet */}
      <MarketplaceSideSheet
        isOpen={isSideSheetOpen}
        onClose={handleCloseSideSheet}
        marketplaces={selectedMarketplacesData}
        selectedMarketplaceId={selectedMarketplaceForEdit}
        hasItemDetails={!!itemDetails}
        hasPricing={!!listingPrice}
        hasShipping={shippingCompleted}
        itemDetails={itemDetails}
        basePrice={listingPrice}
        marketplaceCustomizations={marketplaceCustomizations}
        onSaveCustomization={(marketplaceId, data) => {
          setMarketplaceCustomizations((prev) => ({
            ...prev,
            [marketplaceId]: { ...prev[marketplaceId], ...data },
          }));
        }}
      />

      {/* Marketplace Preview Dialog - rendered at App level to avoid z-index/overflow issues */}
      {previewMarketplace && (
        <MarketplaceListingPreviewDialog
          isOpen={true}
          onClose={() => setPreviewMarketplace(null)}
          marketplace={previewMarketplace}
          photos={uploadedPhotos}
          itemDetails={itemDetails}
          price={listingPrice}
          shippingCompleted={shippingCompleted}
          onEditMarketplace={(marketplaceId) => {
            setPreviewMarketplace(null);
            handleEditMarketplace(marketplaceId);
          }}
          marketplaceCustomization={
            marketplaceCustomizations[previewMarketplace.id]
          }
        />
      )}
    </div>
  );
}
