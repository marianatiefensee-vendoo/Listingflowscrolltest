import { useState, useEffect, useRef, useCallback } from "react";
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

  // Ref for the edit mode scroll container
  const editScrollContainerRef = useRef<HTMLDivElement>(null);

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

        // Expand the appropriate section
        const expandKey = STEP_TO_EXPAND_MAP[state.step];
        if (expandKey === "photos") {
          setIsPhotosCollapsed(false);
        } else if (expandKey === "itemDetails") {
          setShouldExpandItemDetails(true);
        } else if (expandKey === "marketplaces") {
          setShouldExpandMarketplaces(true);
        } else if (expandKey === "pricing") {
          setShouldExpandPricing(true);
        }
      }
    },
    [],
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
    collapseAllExcept("itemDetails");
    setShouldExpandItemDetails(true);
    navigateToSection("details");
  };

  const handleContinueFromItemDetails = () => {
    collapseAllExcept("marketplaces");
    setShouldExpandMarketplaces(true);
    navigateToSection("marketplaces");
  };

  const handleContinueFromMarketplaces = () => {
    collapseAllExcept("pricing");
    setShouldExpandPricing(true);
    navigateToSection("price-shipping");
  };

  const handleContinueFromPricing = () => {
    collapseAllExcept("shipping");
    setShouldExpandShipping(true);
    navigateToSection("price-shipping");
  };

  const handleTogglePhotosExpand = () => {
    const willExpand = isPhotosCollapsed;
    setIsPhotosCollapsed(!isPhotosCollapsed);
    if (willExpand) {
      collapseAllExcept("photos");
      navigateToSection("photos");
    }
  };

  // Handle manual expansion of sections (user clicks chevron to re-expand)
  const handleManualExpandItemDetails = () => {
    collapseAllExcept("itemDetails");
    navigateToSection("details");
  };
  const handleManualExpandMarketplaces = () => {
    collapseAllExcept("marketplaces");
    navigateToSection("marketplaces");
  };
  const handleManualExpandPricing = () => {
    collapseAllExcept("pricing");
    navigateToSection("price-shipping");
  };
  const handleManualExpandShipping = () => {
    collapseAllExcept("shipping");
    navigateToSection("price-shipping");
  };

  const handleGoToMarketplaces = () => {
    collapseAllExcept("marketplaces");
    setShouldExpandMarketplaces(true);
    navigateToSection("marketplaces");
  };

  const handleEditMarketplace = (marketplaceId: string) => {
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
      setIsPublished(true);
      setIsReviewMode(false);
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
    setIsReviewMode(false);
    navigateToSection("photos");
  };

  const handleBackToEditFromReview = () => {
    setIsReviewMode(false);
    navigateToSection("photos");
  };

  const handleListAnother = () => {
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

  const [currentSection, setCurrentSection] =
    useState<ListingSectionMeta["id"]>("photos");

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
      title: "Photos",
      description: isPhotosComplete
        ? `${uploadedPhotos.length} photo${uploadedPhotos.length === 1 ? "" : "s"} added`
        : "Add the photos buyers will see first.",
      status: getSectionStatus(isPhotosComplete, uploadedPhotos.length > 0),
      isCurrent: currentSection === "photos",
    },
    {
      id: "itemDetails",
      title: "Item Details",
      description: isItemDetailsComplete
        ? "Base listing ready to sync across marketplaces."
        : itemDetails
          ? "Shared listing started — finish the remaining required details."
          : "Create the shared title, description, specifics, and condition first.",
      status: getSectionStatus(isItemDetailsComplete, !!itemDetails),
      isCurrent: currentSection === "itemDetails",
    },
    {
      id: "marketplaces",
      title: "Marketplaces",
      description: isMarketplacesComplete
        ? `${selectedMarketplaces.length} marketplace${selectedMarketplaces.length === 1 ? "" : "s"} selected`
        : "Choose where this listing should go.",
      status: getSectionStatus(
        isMarketplacesComplete,
        selectedMarketplaces.length > 0,
      ),
      isCurrent: currentSection === "marketplaces",
    },
    {
      id: "pricing",
      title: "Pricing",
      description: isPricingComplete
        ? `Price set at $${listingPrice}`
        : "Set a listing price before review.",
      status: getSectionStatus(isPricingComplete, listingPrice.trim() !== ""),
      isCurrent: currentSection === "pricing",
    },
    {
      id: "shipping",
      title: "Shipping",
      description: isShippingComplete
        ? "Shipping is selected and ready."
        : "Choose a shipping option to finish prep.",
      status: getSectionStatus(
        isShippingComplete,
        selectedShippingMethod.trim() !== "",
      ),
      isCurrent: currentSection === "shipping",
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
  }, []);

  useEffect(() => {
    const container = editScrollContainerRef.current;
    if (!container || isReviewMode) return;

    const sectionOrder: Array<{
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

      for (const section of sectionOrder) {
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
                  onJumpToSection={scrollToSection}
                  reviewStatus={reviewStatus}
                  shouldExpandItemDetails={shouldExpandItemDetails}
                  shouldExpandMarketplaces={shouldExpandMarketplaces}
                  shouldExpandPricing={shouldExpandPricing}
                  shouldExpandShipping={shouldExpandShipping}
                  onItemDetailsSectionShown={() =>
                    setShouldExpandItemDetails(false)
                  }
                  onMarketplacesSectionShown={() =>
                    setShouldExpandMarketplaces(false)
                  }
                  onPricingSectionShown={() => setShouldExpandPricing(false)}
                  onShippingSectionShown={() => setShouldExpandShipping(false)}
                  children={{
                    photos: (
                      <PhotosStep
                        onContinue={handleContinueFromPhotos}
                        isCollapsed={isPhotosCollapsed}
                        onToggleExpand={handleTogglePhotosExpand}
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
