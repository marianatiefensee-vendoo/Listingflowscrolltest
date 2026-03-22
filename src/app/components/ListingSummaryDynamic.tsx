import { Marketplace } from "../App";
import { useState, useEffect, useRef } from "react";
import svgPaths from "../../imports/svg-fzcann6m2y";
import publishBtnSvgPaths from "../../imports/svg-dn0w1g9l3a";
import checkSvgPaths from "../../imports/svg-ml7axspn5x";
import placeholderSvgPaths from "../../imports/svg-9qsq56xpmm";
import editIconPaths from "../../imports/svg-zdty8r3biy";
import customizedTagSvgPaths from "../../imports/svg-jgphh8vlc1";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "./ui/tooltip";
import imgEbay from "figma:asset/fc302d572214546f8204178ed8fb7d0af8c7506e.png";
import imgMercari from "figma:asset/818d7c9ebebd26d98ee60737907006a9b258dce3.png";
import imgDepop from "figma:asset/9fc19e9b972ada34a5069710f93ea92cd4258fea.png";
import imgFacebook from "figma:asset/55ad25062cf42038188e8437b6d83a149a822f83.png";

interface ListingSummaryDynamicProps {
  selectedMarketplaceIds: string[];
  onSelectMarketplaces?: () => void;
  onEditMarketplace?: (marketplaceId: string) => void;
  photos?: string[];
  itemDetails?: {
    title: string;
    description?: string;
    category?: string;
    brand: string;
    condition: string;
    size?: string;
    tags?: string;
  } | null;
  price?: string;
  shippingCompleted?: boolean;
  onPublish?: () => void;
  isReviewMode?: boolean;
  onBackToEdit?: () => void; // New prop for navigating back to editing
  marketplaceCustomizations?: Record<string, import("../App").MarketplaceCustomization>; // NEW: marketplace-specific overrides
  onPreviewMarketplace?: (marketplace: Marketplace) => void; // Lifted dialog trigger to App level
}

const allMarketplaces: Marketplace[] = [
  { id: "ebay", name: "eBay", image: imgEbay, connected: true },
  {
    id: "mercari",
    name: "Mercari",
    image: imgMercari,
    connected: true,
  },
  {
    id: "depop",
    name: "Depop",
    image: imgDepop,
    connected: true,
  },
  {
    id: "facebook",
    name: "Facebook",
    image: imgFacebook,
    connected: true,
  },
];

function getCustomizationSummary(
  customization: import("../App").MarketplaceCustomization | undefined,
  itemDetails: ListingSummaryDynamicProps["itemDetails"],
  price: string,
) {
  if (!customization) return [];

  const detailOverrides = [
    customization.title && customization.title !== itemDetails?.title,
    customization.category && customization.category !== itemDetails?.category,
    customization.brand && customization.brand !== itemDetails?.brand,
    customization.size && customization.size !== itemDetails?.size,
  ].filter(Boolean).length;

  const summaries: string[] = [];
  if (customization.price && customization.price !== price) {
    summaries.push("Custom pricing");
  }
  if (detailOverrides > 0) {
    summaries.push(
      `${detailOverrides} custom field${detailOverrides > 1 ? "s" : ""}`,
    );
  }
  if (customization.shippingType) {
    summaries.push("Shipping customized");
  }
  return summaries;
}

export default function ListingSummaryDynamic({
  selectedMarketplaceIds,
  onSelectMarketplaces,
  onEditMarketplace,
  photos = [],
  itemDetails = null,
  price = "",
  shippingCompleted = false,
  onPublish,
  isReviewMode = false,
  onBackToEdit,
  marketplaceCustomizations = {},
  onPreviewMarketplace,
}: ListingSummaryDynamicProps) {
  const selectedMarketplaces = allMarketplaces.filter((m) =>
    selectedMarketplaceIds.includes(m.id),
  );
  const hasSelectedMarketplaces =
    selectedMarketplaces.length > 0;
  const coverPhoto = photos.length > 0 ? photos[0] : null;

  // State for marketplace preview dialog
  const [selectedMarketplaceForPreview, setSelectedMarketplaceForPreview] = useState<Marketplace | null>(null);

  // Calculate progress based on completed sections (5 sections total, each = 20%)
  const isPhotosComplete = photos.length > 0;
  const isItemDetailsComplete =
    itemDetails !== null &&
    itemDetails.title.trim() !== "" &&
    itemDetails.description.trim() !== "" &&
    itemDetails.brand.trim() !== "" &&
    itemDetails.category.trim() !== "" &&
    (itemDetails.size?.trim() ?? "") !== "" &&
    itemDetails.condition.trim() !== "";
  const isMarketplacesComplete =
    selectedMarketplaceIds.length > 0;
  const isPricingComplete = price.trim() !== "";
  const isShippingComplete = shippingCompleted;

  const completedSections = [
    isPhotosComplete,
    isItemDetailsComplete,
    isMarketplacesComplete,
    isPricingComplete,
    isShippingComplete,
  ].filter(Boolean).length;

  const progressPercentage = (completedSections / 5) * 100;

  // Check if all sections are complete to enable publish button
  const allSectionsComplete =
    isPhotosComplete &&
    isItemDetailsComplete &&
    isMarketplacesComplete &&
    isPricingComplete &&
    isShippingComplete;

  const isComplete = progressPercentage === 100;
  const progressBarColor = isComplete
    ? "var(--success)"
    : "var(--primary)";

  // ── Marketplace attention pulse animation ──
  const [shouldPulse, setShouldPulse] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const prevMarketplaceCountRef = useRef(selectedMarketplaceIds.length);

  // Trigger pulse when marketplaces go from 0 → >0
  useEffect(() => {
    const prevCount = prevMarketplaceCountRef.current;
    const newCount = selectedMarketplaceIds.length;
    prevMarketplaceCountRef.current = newCount;

    if (prevCount === 0 && newCount > 0 && !hasInteracted) {
      setShouldPulse(true);
    }
  }, [selectedMarketplaceIds.length, hasInteracted]);

  // Auto-clear the pulse after the animation completes (1.2s)
  useEffect(() => {
    if (!shouldPulse) return;
    const timer = setTimeout(() => setShouldPulse(false), 1200);
    return () => clearTimeout(timer);
  }, [shouldPulse]);

  // Called when user clicks any marketplace tile or the container
  const handleMarketplaceInteraction = (marketplaceId?: string) => {
    setShouldPulse(false);
    setHasInteracted(true);
    if (marketplaceId) {
      onEditMarketplace?.(marketplaceId);
    }
  };

  const sectionStates = [
    {
      id: "photos",
      label: "Photos",
      complete: isPhotosComplete,
      started: photos.length > 0,
      hint: isPhotosComplete
        ? `${photos.length} photo${photos.length === 1 ? "" : "s"} ready to lead the listing.`
        : "Add at least one photo so buyers immediately recognize the item.",
    },
    {
      id: "details",
      label: "Details",
      complete: isItemDetailsComplete,
      started: !!itemDetails,
      hint: isItemDetailsComplete
        ? "Shared details are ready across marketplaces."
        : itemDetails
          ? "Finish the required shared details to strengthen buyer confidence."
          : "Add the shared title, description, condition, and specifics.",
    },
    {
      id: "marketplaces",
      label: "Marketplaces",
      complete: isMarketplacesComplete,
      started: selectedMarketplaceIds.length > 0,
      hint: isMarketplacesComplete
        ? `${selectedMarketplaceIds.length} marketplace${selectedMarketplaceIds.length === 1 ? "" : "s"} selected.`
        : "Choose where this listing should be published.",
    },
    {
      id: "pricing",
      label: "Pricing",
      complete: isPricingComplete,
      started: price.trim() !== "",
      hint: isPricingComplete
        ? `Base price set at $${price}.`
        : "Set the listing price buyers will see first.",
    },
    {
      id: "shipping",
      label: "Shipping",
      complete: isShippingComplete,
      started: shippingCompleted,
      hint: isShippingComplete
        ? "Shipping is selected and ready for review."
        : "Choose the shipping setup before publishing.",
    },
  ];

  const remainingSections = sectionStates.filter((section) => !section.complete);
  const nextSectionToResolve = remainingSections[0];
  const missingRequirementCards = remainingSections;
  const baseListingReady =
    isPhotosComplete &&
    isItemDetailsComplete &&
    isPricingComplete &&
    isShippingComplete;
  const marketplacesReadyCount = selectedMarketplaces.filter((marketplace) => {
    const customization = marketplaceCustomizations[marketplace.id];
    if (!baseListingReady) return false;
    if (!customization) return true;

    const hasBlockingOverride =
      (customization.title !== undefined && customization.title.trim() === "") ||
      (customization.price !== undefined && customization.price.trim() === "") ||
      (customization.category !== undefined && customization.category.trim() === "") ||
      (customization.brand !== undefined && customization.brand.trim() === "") ||
      (customization.size !== undefined && customization.size.trim() === "") ||
      (customization.shippingType !== undefined && customization.shippingType.trim() === "") ||
      (customization.pricingFormat !== undefined && customization.pricingFormat.trim() === "");

    return !hasBlockingOverride;
  }).length;
  const marketplaceReadinessLabel = !hasSelectedMarketplaces
    ? "Choose marketplaces to review channel readiness."
    : baseListingReady
      ? `${marketplacesReadyCount} of ${selectedMarketplaces.length} marketplace${selectedMarketplaces.length === 1 ? '' : 's'} ready with the current listing.`
      : "Finish the base listing first, then each selected marketplace will inherit that readiness.";
  const publishButtonLabel = allSectionsComplete ? 'Review & Publish' : 'Finish required sections';
  const publishButtonSupport = allSectionsComplete
    ? 'Opens the final review with your latest listing details and marketplace setup.'
    : nextSectionToResolve
      ? `Complete ${nextSectionToResolve.label.toLowerCase()} to unlock review & publish.`
      : 'Complete the remaining required sections to unlock review & publish.';
  const previewChecklist = [
    isPhotosComplete ? "Cover photo ready" : "Add a cover photo",
    itemDetails?.title?.trim()
      ? "Title is showing"
      : "Add a descriptive title",
    isPricingComplete ? `Price set at $${price}` : "Set the listing price",
  ];
  const previewStateLabel = isComplete
    ? "Buyer-facing preview"
    : completedSections >= 3
      ? "Taking shape"
      : itemDetails?.title || coverPhoto
        ? "Draft preview"
        : "Preview builds as you fill out the listing";
  const previewDescription = isComplete
    ? "Your base listing now has the key details buyers expect before a final review."
    : nextSectionToResolve
      ? `Keep going — ${nextSectionToResolve.label.toLowerCase()} still needs attention before review.`
      : "A few finishing touches remain before review.";
  const customizedMarketplaceCount = selectedMarketplaces.filter((marketplace) =>
    getCustomizationSummary(
      marketplaceCustomizations[marketplace.id],
      itemDetails,
      price,
    ).length > 0,
  ).length;
  const readinessTone = allSectionsComplete
    ? "ready"
    : remainingSections.length <= 2
      ? "close"
      : "working";

  // ── Review Mode Layout ──
  if (isReviewMode) {
    return (
      <div
        className="content-stretch flex flex-col items-start relative size-full m-[0px] z-[2]"
        data-name="Listing Summary Review"
      >
        {/* Full-width Progress Section */}
        <div
          className="relative shrink-0 w-full border-b border-border m-[0px] px-[0px] pt-[32px] pb-[24px] bg-surface-container"
          data-name="Completeness"
        >
          <div className="overflow-clip size-full">
            <div className="content-stretch flex flex-col gap-[8px] items-start px-[24px] relative w-full">
              <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full whitespace-nowrap">
                <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
                  <p className="font-['Lexend',sans-serif] font-[var(--font-weight-normal)] leading-[20px] relative shrink-0 text-muted-foreground text-[var(--text-sm)] tracking-[0.25px]">
                    {isComplete
                      ? "Ready to list"
                      : "Listing Progress"}
                  </p>
                  {isComplete && (
                    <div
                      className="overflow-clip relative shrink-0 size-[16px]"
                      data-name="Circle Check"
                    >
                      <div
                        className="absolute inset-[12.5%_9.72%_9.72%_12.5%]"
                        data-name="Icon"
                      >
                        <svg
                          className="absolute block size-full"
                          fill="none"
                          preserveAspectRatio="none"
                          viewBox="0 0 12.4446 12.4441"
                        >
                          <g id="Icon">
                            <path
                              d={checkSvgPaths.p16b47300}
                              fill="var(--success)"
                            />
                            <path
                              d={checkSvgPaths.p27dd5190}
                              fill="var(--success)"
                            />
                          </g>
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
                <p
                  className={`font-['Lexend',sans-serif] font-[var(--font-weight-medium)] leading-[16px] relative shrink-0 text-[var(--text-xs)] tracking-[0.5px] ${isComplete ? "text-success" : "text-primary"}`}
                >
                  {progressPercentage.toFixed(0)}%
                </p>
              </div>
              <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full">
                {isComplete ? (
                  <div
                    className="relative shrink-0 w-full"
                    data-name="Linear-determinate progress indicator"
                  >
                    <div className="content-stretch flex items-start px-[2px] relative w-full">
                      <div
                        className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative"
                        data-name="Active indicator"
                      >
                        <div
                          className="flex-[1_0_0] h-[12px] min-h-px min-w-px relative"
                          data-name="Segment"
                        >
                          <div
                            className="absolute inset-[6px_0]"
                            data-name="wave-increment"
                          >
                            <div className="absolute inset-[-2px_-0.5%]">
                              <svg
                                className="block size-full"
                                fill="none"
                                preserveAspectRatio="none"
                                viewBox="0 0 336 4"
                              >
                                <path
                                  d="M2 2H85H251H334"
                                  stroke="var(--success)"
                                  strokeLinecap="round"
                                  strokeWidth="4"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div
                    className="content-stretch flex items-start relative shrink-0 w-full"
                    data-name="Linear-determinate progress indicator"
                  >
                    <div
                      className="flex-[1_0_0] h-[12px] min-h-px min-w-px relative"
                      data-name="track-and-stop"
                    >
                      <div
                        className="absolute h-[12px] left-0 right-0 top-0"
                        data-name="Track"
                      >
                        <div
                          className="-translate-y-1/2 absolute bg-surface-container-high h-[4px] left-0 right-0 rounded-[2px] top-1/2"
                          data-name="Track shape"
                        />
                      </div>
                      <div
                        className="absolute h-[12px] left-0 top-0"
                        data-name="Progress"
                        style={{
                          width: `${progressPercentage}%`,
                        }}
                      >
                        <div
                          className="-translate-y-1/2 absolute h-[4px] left-0 right-0 rounded-[2px] top-1/2"
                          data-name="Progress shape"
                          style={{
                            backgroundColor: progressBarColor,
                          }}
                        />
                      </div>
                      <div
                        className="-translate-y-1/2 absolute h-[8px] top-1/2 w-[6px]"
                        data-name="Stop"
                        style={{
                          left: `calc(${progressPercentage}% - 3px)`,
                        }}
                      >
                        <div
                          className="-translate-y-1/2 absolute rounded-[26px] size-[4px] top-1/2"
                          data-name="Stop shape"
                          style={{
                            left: "1px",
                            backgroundColor: progressBarColor,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Main Content: Listing Preview + Marketplaces side-by-side */}
        <div className="flex-[1_0_0] h-full min-w-px relative mx-[0px] mt-[24px] mb-[0px] p-[0px]">
          <div className="content-stretch flex flex-col gap-[24px] items-start relative w-full max-w-[1000px] mx-auto">
            {/* Side-by-side: Listing Preview + Marketplaces */}
            <div className="content-stretch flex gap-[24px] items-start px-[24px] relative w-full">
              {/* Expanded Listing Preview - Now Clickable */}
              <div className="flex-[1.2_0_0] min-w-0">
                <button
                  onClick={onBackToEdit}
                  className="bg-surface-review relative rounded-[16px] w-full text-left cursor-pointer hover:bg-surface-review-hover transition-colors"
                  data-name="Background+Border"
                >
                  <div
                    aria-hidden="true"
                    className="absolute border border-border border-solid inset-0 pointer-events-none rounded-[16px]"
                  />
                  <div className="content-stretch flex flex-col gap-[16px] items-start p-[20px] relative w-full">
                    <div
                      className="relative shrink-0 w-full"
                      data-name="Heading 3"
                    >
                      <div className="flex items-center justify-between w-full">
                        <div className="flex flex-col font-['Lexend',sans-serif] font-[var(--font-weight-medium)] justify-center leading-[0] relative shrink-0 text-foreground text-[var(--text-sm)] tracking-[0.1px]">
                          <p className="leading-[20px]">
                            Listing Preview
                          </p>
                        </div>
                        {/* Edit Icon Button */}
                        <div className="relative size-[40px]" data-name="Icon Button Standard">
                          <div className="content-stretch flex items-center justify-center overflow-clip rounded-[100px] size-[40px] hover:bg-foreground-dim/8 transition-colors" data-name="State-layer">
                            <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Edit">
                              <div className="absolute h-[18.183px] left-[2.5px] top-[2.91px] w-[19px]" data-name="Icon">
                                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 18.1834">
                                  <g id="Icon">
                                    <path clipRule="evenodd" d={editIconPaths.p1e751200} fill="var(--fill-0, var(--foreground-dim))" fillRule="evenodd" />
                                    <path d={editIconPaths.p3a455080} fill="var(--fill-0, var(--foreground-dim))" />
                                  </g>
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Cover Photo + Title Row */}
                    <div className="content-stretch flex gap-[16px] items-start relative w-full">
                      <div
                        className="bg-neutral-container relative rounded-[8px] shrink-0 size-[96px]"
                        data-name="Image+Background+Border"
                      >
                        <div
                          aria-hidden="true"
                          className="absolute border border-neutral-container border-solid inset-0 pointer-events-none rounded-[8px]"
                        />
                        {coverPhoto ? (
                          <img
                            src={coverPhoto}
                            alt="Cover photo"
                            className="absolute inset-0 size-full object-cover rounded-[8px]"
                          />
                        ) : (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="h-[29.59px] mix-blend-multiply relative shrink-0 w-[37.89px]">
                              <svg
                                className="absolute block size-full"
                                fill="none"
                                preserveAspectRatio="none"
                                viewBox="0 0 52.6196 41.0825"
                              >
                                <g
                                  style={{
                                    mixBlendMode: "multiply",
                                  }}
                                >
                                  <path
                                    d={
                                      placeholderSvgPaths.p6b49300
                                    }
                                    fill="var(--fill-0, var(--neutral-dim))"
                                  />
                                  <path
                                    d={
                                      placeholderSvgPaths.p146f7b80
                                    }
                                    fill="var(--fill-0, var(--neutral-dim))"
                                  />
                                </g>
                              </svg>
                            </div>
                          </div>
                        )}
                      </div>
                      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-0 relative">
                        <div className="flex flex-col font-['Lexend',sans-serif] font-[var(--font-weight-medium)] justify-center leading-[0] relative shrink-0 text-foreground text-[var(--text-base)] tracking-[0.1px] w-full">
                          <p className="leading-[24px] line-clamp-2 overflow-hidden text-ellipsis">
                            {itemDetails?.title || "Title"}
                          </p>
                        </div>
                        {itemDetails?.condition && (
                          <p className="bg-primary/8 rounded-[12px] px-[12px] py-[4px] font-['Lexend',sans-serif] font-[var(--font-weight-medium)] leading-[16px] relative text-muted-foreground text-[var(--text-xs)] tracking-[0.5px] w-fit">
                            {itemDetails.condition}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Additional Photos Row */}
                    {photos.length > 1 && (
                      <div className="content-stretch flex gap-[8px] items-start relative w-full overflow-x-auto">
                        {photos.slice(1).map((photo, idx) => (
                          <div
                            key={idx}
                            className="bg-neutral-container relative rounded-[6px] shrink-0 size-[56px]"
                          >
                            <div
                              aria-hidden="true"
                              className="absolute border border-neutral-container border-solid inset-0 pointer-events-none rounded-[6px]"
                            />
                            <img
                              src={photo}
                              alt={`Photo ${idx + 2}`}
                              className="absolute inset-0 size-full object-cover rounded-[6px]"
                            />
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Divider */}
                    <div className="h-px relative shrink-0 w-full">
                      <div
                        aria-hidden="false"
                        className="absolute border-neutral-container border-solid border-t inset-0 pointer-events-none"
                      />
                    </div>

                    {/* Detail Fields Grid */}
                    <div className="content-stretch flex flex-col gap-[12px] items-start relative w-full">
                      {/* Description */}
                      {itemDetails?.description && (
                        <div className="content-stretch flex flex-col gap-[4px] items-start relative w-full">
                          <p className="font-['Lexend',sans-serif] font-[350] leading-[16px] relative text-foreground-dim text-[var(--text-xs)] tracking-[0.2px]">
                            Description
                          </p>
                          <p className="font-['Lexend',sans-serif] font-[var(--font-weight-normal)] leading-[20px] relative text-foreground text-[var(--text-sm)] tracking-[0.25px] w-full line-clamp-3">
                            {itemDetails.description}
                          </p>
                        </div>
                      )}

                      {/* Two-column row: Brand + Category */}
                      <div className="content-stretch flex gap-[24px] items-start relative w-full">
                        <div className="flex-[1_0_0] min-w-0 flex flex-col gap-[4px]">
                          <p className="font-['Lexend',sans-serif] font-[350] leading-[16px] relative text-foreground-dim text-[var(--text-xs)] tracking-[0.2px]">
                            Brand
                          </p>
                          <p className="font-['Lexend',sans-serif] font-[var(--font-weight-medium)] leading-[20px] relative text-foreground text-[var(--text-sm)] tracking-[0.1px]">
                            {itemDetails?.brand || "--"}
                          </p>
                        </div>
                        {itemDetails?.category && (
                          <div className="flex-[1_0_0] min-w-0 flex flex-col gap-[4px]">
                            <p className="font-['Lexend',sans-serif] font-[350] leading-[16px] relative text-foreground-dim text-[var(--text-xs)] tracking-[0.2px]">
                              Category
                            </p>
                            <p className="font-['Lexend',sans-serif] font-[var(--font-weight-medium)] leading-[20px] relative text-foreground text-[var(--text-sm)] tracking-[0.1px]">
                              {itemDetails.category}
                            </p>
                          </div>
                        )}
                      </div>

                      {/* Two-column row: Size + Condition */}
                      <div className="content-stretch flex gap-[24px] items-start relative w-full">
                        {itemDetails?.size && (
                          <div className="flex-[1_0_0] min-w-0 flex flex-col gap-[4px]">
                            <p className="font-['Lexend',sans-serif] font-[350] leading-[16px] relative text-foreground-dim text-[var(--text-xs)] tracking-[0.2px]">
                              Size
                            </p>
                            <p className="font-['Lexend',sans-serif] font-[var(--font-weight-medium)] leading-[20px] relative text-foreground text-[var(--text-sm)] tracking-[0.1px]">
                              {itemDetails.size}
                            </p>
                          </div>
                        )}
                        <div className="flex-[1_0_0] min-w-0 flex flex-col gap-[4px]">
                          <p className="font-['Lexend',sans-serif] font-[350] leading-[16px] relative text-foreground-dim text-[var(--text-xs)] tracking-[0.2px]">
                            Condition
                          </p>
                          <p className="font-['Lexend',sans-serif] font-[var(--font-weight-medium)] leading-[20px] relative text-foreground text-[var(--text-sm)] tracking-[0.1px]">
                            {itemDetails?.condition || "--"}
                          </p>
                        </div>
                      </div>

                      {/* Tags */}
                      {itemDetails?.tags && (
                        <div className="content-stretch flex flex-col gap-[4px] items-start relative w-full">
                          <p className="font-['Lexend',sans-serif] font-[350] leading-[16px] relative text-foreground-dim text-[var(--text-xs)] tracking-[0.2px]">
                            Tags
                          </p>
                          <p className="font-['Lexend',sans-serif] font-[var(--font-weight-normal)] leading-[20px] relative text-foreground text-[var(--text-sm)] tracking-[0.25px] w-full">
                            {itemDetails.tags}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Divider */}
                    <div className="h-px relative shrink-0 w-full">
                      <div
                        aria-hidden="false"
                        className="absolute border-neutral-container border-solid border-t inset-0 pointer-events-none"
                      />
                    </div>

                    {/* Price */}
                    <div className="bg-background relative rounded-[8px] shrink-0 w-full">
                      <div className="flex flex-row items-center size-full">
                        <div className="content-stretch flex items-center justify-between p-[12px] relative w-full">
                          <div className="flex-[1_0_0] min-h-px min-w-px relative">
                            <div className="content-stretch flex gap-[4px] items-center relative w-full">
                              <Tooltip delayDuration={300}>
                                <TooltipTrigger asChild>
                                  <div
                                    className="overflow-clip relative shrink-0 size-[16px] cursor-help"
                                    data-name="info"
                                  >
                                    <div
                                      className="absolute inset-[4.17%]"
                                      data-name="Icon"
                                    >
                                      <svg
                                        className="absolute block size-full"
                                        fill="none"
                                        preserveAspectRatio="none"
                                        viewBox="0 0 14.6667 14.6667"
                                      >
                                        <g id="Icon">
                                          <path
                                            d={
                                              svgPaths.p1db78340
                                            }
                                            fill="var(--fill-0, var(--border))"
                                          />
                                          <path
                                            d={
                                              svgPaths.p35534c30
                                            }
                                            fill="var(--fill-0, var(--border))"
                                          />
                                          <path
                                            clipRule="evenodd"
                                            d={
                                              svgPaths.p1f296780
                                            }
                                            fill="var(--fill-0, var(--border))"
                                            fillRule="evenodd"
                                          />
                                        </g>
                                      </svg>
                                    </div>
                                  </div>
                                </TooltipTrigger>
                                <TooltipContent side="top">
                                  Base listing price.
                                  Marketplace overrides still
                                  apply.
                                </TooltipContent>
                              </Tooltip>
                              <div className="flex flex-col font-['Lexend',sans-serif] font-[350] justify-center leading-[0] relative shrink-0 text-muted-foreground text-[var(--text-xs)] tracking-[0.2px] whitespace-nowrap">
                                <p className="leading-[16px]">
                                  Listing Price
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="relative shrink-0">
                            <div className="flex flex-col font-['Lexend',sans-serif] font-[var(--font-weight-normal)] justify-center leading-[0] relative shrink-0 text-foreground text-[var(--text-h4)] whitespace-nowrap">
                              <p className="leading-[28px]">
                                {price ? `$${price}` : "$--.--"}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </button>
              </div>

              {/* Marketplaces Card - Side */}
              {hasSelectedMarketplaces && (
                <div className="flex-[1_0_0] min-w-0">
                  <div
                    className="bg-muted relative rounded-[12px] w-full"
                    data-name="Container"
                  >
                    <div
                      aria-hidden="true"
                      className="absolute border border-border border-solid inset-[-1px] pointer-events-none rounded-[13px]"
                    />
                    <div className="flex flex-col items-center size-full">
                      <div className="content-stretch flex flex-col gap-[12px] items-start p-[20px] relative w-full">
                        <div className="flex flex-col font-['Lexend',sans-serif] font-[var(--font-weight-medium)] justify-center leading-[0] relative shrink-0 text-foreground text-[var(--text-sm)] tracking-[0.1px] w-full">
                          <p className="leading-[20px]">
                            Marketplaces
                          </p>
                        </div>

                        {/* Caption */}
                        <p className="font-['Lexend',sans-serif] font-[350] text-[var(--text-xs)] leading-[16px] text-foreground-dim tracking-[0.2px] -mt-[4px]">
                          Base listing applies everywhere unless you customize a marketplace.
                        </p>

                        {/* Marketplace List - Now Clickable */}
                        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                          {selectedMarketplaces.map(
                            (marketplace) => {
                              const customization = marketplaceCustomizations[marketplace.id];
                              const customizationSummary = getCustomizationSummary(customization, itemDetails, price);
                              const isCustomized = customizationSummary.length > 0;
                              const displayTitle = customization?.title || itemDetails?.title || "Untitled";
                              const displayPrice = customization?.price || price || "0.00";

                              return (
                                <button
                                  key={marketplace.id}
                                  onClick={() => onPreviewMarketplace ? onPreviewMarketplace(marketplace) : setSelectedMarketplaceForPreview(marketplace)}
                                  className="bg-card content-stretch flex items-start relative rounded-[8px] shrink-0 w-full cursor-pointer hover:bg-background transition-colors text-left"
                                >
                                  <div
                                    aria-hidden="true"
                                    className="absolute border border-border border-solid inset-0 pointer-events-none rounded-[8px]"
                                  />
                                  <div className="content-stretch flex gap-[10px] items-start p-[12px] relative w-full">
                                    {/* Marketplace Logo */}
                                    <div className="bg-card overflow-clip relative rounded-[4px] shrink-0 size-[36px]">
                                      <img
                                        src={marketplace.image}
                                        alt={marketplace.name}
                                        className="absolute inset-0 object-cover size-full"
                                      />
                                      <div
                                        aria-hidden="true"
                                        className="absolute border border-border border-solid inset-0 pointer-events-none rounded-[4px]"
                                      />
                                    </div>

                                    {/* Marketplace Name + Title/Price + Tag */}
                                    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-h-px min-w-px relative">
                                      {/* Marketplace Name */}
                                      <div className="flex flex-col font-['Lexend',sans-serif] font-[var(--font-weight-normal)] justify-center leading-[0] relative shrink-0 text-foreground text-[var(--text-sm)] tracking-[0.25px]">
                                        <p className="leading-[20px]">
                                          {marketplace.name}
                                        </p>
                                      </div>
                                      
                                      {/* Title (truncated) */}
                                      <p className="font-['Lexend',sans-serif] font-[350] text-[var(--text-xs)] leading-[16px] text-muted-foreground tracking-[0.2px] truncate w-full">
                                        {displayTitle}
                                      </p>

                                      {/* Price + Tag Row */}
                                      <div className="flex items-center gap-[8px] w-full flex-wrap">
                                        <p className="font-['Lexend',sans-serif] font-[var(--font-weight-medium)] text-[var(--text-sm)] leading-[20px] text-foreground tracking-[0.1px]">
                                          ${displayPrice}
                                        </p>
                                        
                                        {/* Tag: Ready to list or Customized */}
                                        {isCustomized ? (
                                          <div className="bg-on-surface-dim content-stretch flex items-center justify-center px-[4px] relative rounded-[4px] shrink-0" data-name="Customized Tag">
                                            <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Content frame">
                                              <div className="overflow-clip relative shrink-0 size-[12px]" data-name="Icon leading">
                                                <div className="absolute inset-[4.17%]" data-name="Icon">
                                                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
                                                    <g id="Icon">
                                                      <path d={customizedTagSvgPaths.p17642500} fill="var(--fill-0, var(--primary-foreground))" />
                                                      <path d={customizedTagSvgPaths.p1beee5c0} fill="var(--fill-0, var(--primary-foreground))" />
                                                      <path clipRule="evenodd" d={customizedTagSvgPaths.p2a586c80} fill="var(--fill-0, var(--primary-foreground))" fillRule="evenodd" />
                                                    </g>
                                                  </svg>
                                                </div>
                                              </div>
                                              <div className="flex flex-col font-['Lexend',sans-serif] font-[350] justify-center leading-[0] relative shrink-0 text-[11px] text-center text-primary-foreground whitespace-nowrap">
                                                <p className="leading-[14px]">Customized</p>
                                              </div>
                                            </div>
                                            <div className="h-[20px] relative shrink-0 w-0" data-name="Min height XSmall" />
                                          </div>
                                        ) : (
                                          <div className="bg-success/20 rounded-[4px] px-[8px] py-[2px] flex items-center gap-[4px] shrink-0">
                                            <p className="font-['Lexend',sans-serif] font-[var(--font-weight-medium)] leading-[16px] text-success text-[11px] tracking-[0.5px] whitespace-nowrap">
                                              Using base listing
                                            </p>
                                          </div>
                                        )}
                                      </div>

                                      <div className="flex flex-wrap gap-[6px] w-full">
                                        {isCustomized ? (
                                          customizationSummary.map((summary) => (
                                            <span
                                              key={summary}
                                              className="bg-muted text-[11px] leading-[14px] tracking-[0.1px] text-foreground-dim px-[8px] py-[2px] rounded-[999px]"
                                            >
                                              {summary}
                                            </span>
                                          ))
                                        ) : (
                                          <span className="text-[11px] leading-[14px] tracking-[0.1px] text-muted-foreground">
                                            No marketplace-specific changes yet
                                          </span>
                                        )}
                                      </div>
                                    </div>
                                  </div>
                                </button>
                              );
                            }
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
              <div
                className="h-[2px] relative shrink-0 w-full"
                data-name="Divider"
              >
                <div
                  className="absolute bottom-0 left-0 right-0 top-full"
                  data-name="horizontal line"
                >
                  <div className="absolute inset-[-1px_0_0_0]">
                    <svg
                      className="block size-full"
                      fill="none"
                      preserveAspectRatio="none"
                      viewBox="0 0 384 1"
                    >
                      <line
                        id="horizontal line"
                        stroke="var(--stroke-0, var(--foreground-dim))"
                        strokeLinecap="square"
                        strokeOpacity="0.16"
                        x1="0.5"
                        x2="383.5"
                        y1="0.5"
                        y2="0.5"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div
                className="relative shrink-0 w-full"
                data-name="Container"
              >
                <div className="content-stretch flex flex-col gap-[12px] items-start p-[24px] relative w-full">
                  <Tooltip delayDuration={300}>
                    <TooltipTrigger asChild>
                      <div
                        className="bg-foreground/10 h-[56px] relative rounded-[8px] shrink-0 w-full cursor-not-allowed"
                        data-name="Button- Outline"
                      >
                        <div
                          aria-hidden="true"
                          className="absolute border border-border border-solid inset-0 pointer-events-none rounded-[8px]"
                        />
                        <div className="flex flex-row items-center justify-center size-full">
                          <div className="content-stretch flex items-center justify-center px-[20px] py-[16px] relative size-full">
                            <div
                              className="content-stretch flex flex-col items-center justify-center relative rounded-[var(--radius)] shrink-0"
                              data-name="Content"
                            >
                              <div
                                className="content-stretch flex gap-[10px] items-center opacity-38 px-[16px] py-[10px] relative shrink-0"
                                data-name="State - Layer"
                              >
                                <div
                                  className="h-[26.399px] overflow-clip relative shrink-0 w-[24px]"
                                  data-name="Tray_Draft"
                                >
                                  <div
                                    className="absolute inset-[19%_7.5%]"
                                    data-name="Icon"
                                  >
                                    <svg
                                      className="absolute block size-full"
                                      fill="none"
                                      preserveAspectRatio="none"
                                      viewBox="0 0 20.4004 16.3661"
                                    >
                                      <path
                                        d={svgPaths.p1d831a00}
                                        fill="var(--fill-0, var(--muted-foreground))"
                                        id="Icon"
                                      />
                                    </svg>
                                  </div>
                                </div>
                                <div
                                  className="content-stretch flex items-center justify-center px-[4px] relative shrink-0"
                                  data-name="Label"
                                >
                                  <div className="flex flex-col font-['Lexend',sans-serif] font-[var(--font-weight-medium)] justify-center leading-[0] relative shrink-0 text-muted-foreground text-[var(--text-base)] text-center tracking-[0.15px] whitespace-nowrap">
                                    <p className="leading-[24px]">
                                      Save Draft
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent side="top">
                      Draft saving is disabled in this
                      prototype.
                    </TooltipContent>
                  </Tooltip>
                  <button
                    onClick={allSectionsComplete ? onPublish : undefined}
                    disabled={!allSectionsComplete}
                    className={`content-stretch flex items-center justify-center relative shrink-0 w-full ${allSectionsComplete ? "cursor-pointer" : "cursor-not-allowed"}`}
                    data-name="Review Publish Button"
                  >
                    <div
                      className={`content-stretch flex flex-col items-center justify-center relative rounded-[var(--radius)] shrink-0 w-full transition-colors ${allSectionsComplete ? "bg-[var(--primary)] hover:bg-primary-dim" : "bg-foreground/10"}`}
                      data-name="Content"
                    >
                      <div
                        className={`content-stretch flex gap-[10px] items-center px-[24px] py-[16px] relative rounded-[var(--radius)] shrink-0 ${!allSectionsComplete ? "opacity-38" : ""}`}
                        data-name="State - Layer"
                      >
                        <div
                          className="overflow-clip relative shrink-0 size-[24px]"
                          data-name="publish"
                        >
                          <div
                            className="absolute inset-[16.67%]"
                            data-name="Icon"
                          >
                            <svg
                              className="absolute block size-full"
                              fill="none"
                              preserveAspectRatio="none"
                              viewBox="0 0 16 16"
                            >
                              <path
                                d={publishBtnSvgPaths.p4913d00}
                                fill={
                                  allSectionsComplete
                                    ? "#FFFFFF"
                                    : "var(--fill-0, var(--muted-foreground))"
                                }
                                id="Icon"
                              />
                            </svg>
                          </div>
                        </div>
                        <div
                          className="content-stretch flex items-center justify-center px-[4px] relative shrink-0"
                          data-name="Label"
                        >
                          <div
                            className={`flex flex-col font-['Lexend',sans-serif] font-[var(--font-weight-medium)] justify-center leading-[0] relative shrink-0 text-[var(--text-base)] text-center tracking-[0.15px] whitespace-nowrap ${allSectionsComplete ? "text-[#FFFFFF]" : "text-[var(--muted-foreground)]"}`}
                          >
                            <p className="leading-[24px]">Publish</p>
                          </div>
                        </div>
                        <div
                          className="overflow-clip relative shrink-0 size-[24px]"
                          data-name="Chevron Right"
                        >
                          <div
                            className="absolute bottom-[8.34%] left-1/4 right-[27.73%] top-[8.33%]"
                            data-name="Icon"
                          >
                            <svg
                              className="absolute block size-full"
                              fill="none"
                              preserveAspectRatio="none"
                              viewBox="0 0 11.3458 19.9993"
                            >
                              <path
                                d={publishBtnSvgPaths.p3cd472c0}
                                fill={
                                  allSectionsComplete
                                    ? "#FFFFFF"
                                    : "var(--fill-0, var(--muted-foreground))"
                                }
                                id="Icon"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </button>
                  <div
                    className="content-stretch flex flex-col items-center relative shrink-0 w-full"
                    data-name="Container"
                  >
                    <div className="flex flex-col font-['Lexend',sans-serif] font-[350] justify-center leading-[0] relative shrink-0 text-foreground-dim text-[var(--text-xs)] text-center tracking-[0.2px] w-full">
                      <p className="leading-[16px]">
                        {allSectionsComplete ? "List now or schedule this listing" : "Complete all sections to publish."}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }

  // ── Default (Sidebar) Layout ──
  return (
    <div
      className="content-stretch flex flex-col items-start relative size-full m-[0px] z-[2]"
      data-name="Listing Summary"
    >
      <div
        className="sticky top-0 z-10 bg-surface-container relative shrink-0 w-full border-b border-border m-[0px] pl-[3px] pr-[0px] pt-[32px] pb-[20px] rounded-tr-[12px]"
        data-name="Completeness"
      >
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[12px] items-start px-[24px] relative w-full">
            <div className="flex w-full items-start justify-between gap-[12px]">
              <div>
                <div className="flex items-center gap-[6px]">
                  <p className="font-['Lexend',sans-serif] font-[var(--font-weight-medium)] leading-[20px] text-foreground text-[var(--text-sm)] tracking-[0.1px]">
                    Listing progress
                  </p>
                  {isComplete && (
                    <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Circle Check">
                      <div className="absolute inset-[12.5%_9.72%_9.72%_12.5%]" data-name="Icon">
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.4446 12.4441">
                          <g id="Icon">
                            <path d={checkSvgPaths.p16b47300} fill="var(--success)" />
                            <path d={checkSvgPaths.p27dd5190} fill="var(--success)" />
                          </g>
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
                <p className="mt-[4px] font-['Lexend',sans-serif] text-[var(--text-xs)] leading-[16px] text-muted-foreground">
                  {allSectionsComplete
                    ? "All sections are ready. You can move into final review with confidence."
                    : nextSectionToResolve
                      ? `${completedSections} of 5 sections ready. Next, finish ${nextSectionToResolve.label.toLowerCase()}.`
                      : `${completedSections} of 5 sections ready.`}
                </p>
              </div>
              <div className="text-right">
                <p className={`font-['Lexend',sans-serif] font-[var(--font-weight-medium)] leading-[16px] text-[var(--text-xs)] tracking-[0.5px] ${isComplete ? 'text-success' : 'text-primary'}`}>
                  {progressPercentage.toFixed(0)}%
                </p>
                <p className="mt-[4px] font-['Lexend',sans-serif] text-[11px] leading-[14px] text-muted-foreground">
                  {remainingSections.length === 0
                    ? 'Ready for review'
                    : `${remainingSections.length} section${remainingSections.length === 1 ? '' : 's'} left`}
                </p>
              </div>
            </div>

            <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="div">
              {isComplete ? (
                <div className="relative shrink-0 w-full" data-name="Linear-determinate progress indicator">
                  <div className="content-stretch flex items-start px-[2px] relative w-full">
                    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative" data-name="Active indicator">
                      <div className="flex-[1_0_0] h-[12px] min-h-px min-w-px relative" data-name="Segment">
                        <div className="absolute inset-[6px_0]" data-name="wave-increment">
                          <div className="absolute inset-[-2px_-0.5%]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 336 4">
                              <path d="M2 2H85H251H334" stroke="var(--success)" strokeLinecap="round" strokeWidth="4" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Linear-determinate progress indicator">
                  <div className="flex-[1_0_0] h-[12px] min-h-px min-w-px relative" data-name="track-and-stop">
                    <div className="absolute h-[12px] left-0 right-0 top-0" data-name="Track">
                      <div className="-translate-y-1/2 absolute bg-surface-container-high h-[4px] left-0 right-0 rounded-[2px] top-1/2" data-name="Track shape" />
                    </div>
                    <div className="absolute h-[12px] left-0 top-0" data-name="Progress" style={{ width: `${progressPercentage}%` }}>
                      <div className="-translate-y-1/2 absolute h-[4px] left-0 right-0 rounded-[2px] top-1/2" data-name="Progress shape" style={{ backgroundColor: progressBarColor }} />
                    </div>
                    <div className="-translate-y-1/2 absolute h-[8px] top-1/2 w-[6px]" data-name="Stop" style={{ left: `calc(${progressPercentage}% - 3px)` }}>
                      <div className="-translate-y-1/2 absolute rounded-[26px] size-[4px] top-1/2" data-name="Stop shape" style={{ left: '1px', backgroundColor: progressBarColor }} />
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="flex w-full flex-col gap-[8px] rounded-[12px] border border-border bg-background/70 px-[12px] py-[12px]">
              {sectionStates.map((section) => {
                const tone = section.complete
                  ? 'border-secondary/30 bg-secondary/10 text-secondary-foreground'
                  : section.started
                    ? 'border-amber-200 bg-amber-50 text-amber-800'
                    : 'border-border bg-background text-muted-foreground';
                return (
                  <div key={section.id} className="flex items-start gap-[10px]">
                    <span className={`mt-[2px] inline-flex min-w-[72px] items-center justify-center rounded-full border px-[8px] py-[4px] font-['Lexend',sans-serif] text-[10px] font-[var(--font-weight-medium)] uppercase tracking-[0.45px] ${tone}`}>
                      {section.complete ? 'Ready' : section.started ? 'Started' : 'Pending'}
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="font-['Lexend',sans-serif] text-[var(--text-xs)] font-[var(--font-weight-medium)] leading-[16px] text-foreground">
                        {section.label}
                      </p>
                      <p className="mt-[2px] font-['Lexend',sans-serif] text-[11px] leading-[15px] text-muted-foreground">
                        {section.hint}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="flex-[1_0_0] h-full min-w-px relative mx-[0px] mt-[20px] mb-[0px] p-[0px]">
        <div className="border-0 border-transparent border-solid content-stretch flex flex-col gap-[20px] items-start relative w-full pb-[20px]">
          <div className="relative shrink-0 w-full">
            <div className="content-stretch flex flex-col items-start px-[24px] relative w-full">
              <div className="bg-surface-review relative rounded-[16px] shrink-0 w-full h-full">
                <div aria-hidden="true" className="absolute border border-border border-solid inset-0 pointer-events-none rounded-[16px]" />
                <div className="content-stretch flex flex-col gap-[12px] items-start p-[17px] relative w-full">
                  <div className="flex w-full items-start justify-between gap-[12px]">
                    <div>
                      <p className="font-['Lexend',sans-serif] font-[var(--font-weight-medium)] leading-[20px] text-foreground text-[var(--text-sm)] tracking-[0.1px]">
                        Listing Preview
                      </p>
                      <p className="mt-[4px] font-['Lexend',sans-serif] text-[11px] leading-[15px] text-muted-foreground">
                        {previewStateLabel}
                      </p>
                    </div>
                    <span className="rounded-full bg-background px-[10px] py-[6px] font-['Lexend',sans-serif] text-[10px] font-[var(--font-weight-medium)] uppercase tracking-[0.45px] text-muted-foreground">
                      {coverPhoto ? `${photos.length} photo${photos.length === 1 ? '' : 's'}` : 'No photo yet'}
                    </span>
                  </div>

                  <div className="relative shrink-0 w-full" data-name="Container">
                    <div className="bg-clip-padding border-0 border-transparent border-solid content-stretch flex gap-[12px] items-start relative w-full">
                      <div className="bg-neutral-container relative rounded-[8px] shrink-0 size-[80px] overflow-hidden" data-name="Image+Background+Border">
                        <div aria-hidden="true" className="absolute border border-neutral-container border-solid inset-0 pointer-events-none rounded-[8px]" />
                        {coverPhoto ? (
                          <img src={coverPhoto} alt="Cover photo" className="absolute inset-0 size-full object-cover rounded-[8px]" />
                        ) : (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="h-[24.66px] mix-blend-multiply relative shrink-0 w-[31.57px]">
                              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 52.6196 41.0825">
                                <g style={{ mixBlendMode: 'multiply' }}>
                                  <path d={placeholderSvgPaths.p6b49300} fill="var(--fill-0, var(--neutral-dim))" />
                                  <path d={placeholderSvgPaths.p146f7b80} fill="var(--fill-0, var(--neutral-dim))" />
                                </g>
                              </svg>
                            </div>
                          </div>
                        )}
                      </div>
                      <div className="flex min-w-0 flex-1 flex-col gap-[8px] self-stretch">
                        <Tooltip delayDuration={300}>
                          <TooltipTrigger asChild>
                            <div className="flex flex-col font-['Lexend',sans-serif] font-[var(--font-weight-medium)] justify-center leading-[0] text-foreground text-[var(--text-sm)] tracking-[0.1px] w-full">
                              <p className="leading-[20px] line-clamp-2 overflow-hidden text-ellipsis">
                                {itemDetails?.title?.trim() || 'Your listing title will appear here'}
                              </p>
                            </div>
                          </TooltipTrigger>
                          {itemDetails?.title && itemDetails.title.length > 60 && (
                            <TooltipContent side="top" className="max-w-[240px]">
                              {itemDetails.title}
                            </TooltipContent>
                          )}
                        </Tooltip>
                        <div className="grid grid-cols-2 gap-[8px]">
                          <div className="rounded-[10px] bg-background px-[10px] py-[8px]">
                            <p className="font-['Lexend',sans-serif] text-[10px] leading-[14px] uppercase tracking-[0.45px] text-muted-foreground">Brand</p>
                            <p className="mt-[2px] font-['Lexend',sans-serif] text-[var(--text-xs)] font-[var(--font-weight-medium)] leading-[16px] text-foreground">{itemDetails?.brand?.trim() || 'Add brand'}</p>
                          </div>
                          <div className="rounded-[10px] bg-background px-[10px] py-[8px]">
                            <p className="font-['Lexend',sans-serif] text-[10px] leading-[14px] uppercase tracking-[0.45px] text-muted-foreground">Condition</p>
                            <p className="mt-[2px] font-['Lexend',sans-serif] text-[var(--text-xs)] font-[var(--font-weight-medium)] leading-[16px] text-foreground">{itemDetails?.condition?.trim() || 'Add condition'}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid w-full gap-[8px]">
                    {previewChecklist.map((item) => (
                      <div key={item} className="flex items-center gap-[8px] rounded-[10px] bg-background px-[10px] py-[8px]">
                        <span className={`inline-flex size-[18px] items-center justify-center rounded-full ${item.startsWith('Add') || item.startsWith('Set') ? 'bg-muted text-muted-foreground' : 'bg-secondary/20 text-secondary-foreground'}`}>
                          {item.startsWith('Add') || item.startsWith('Set') ? '•' : '✓'}
                        </span>
                        <p className="font-['Lexend',sans-serif] text-[11px] leading-[15px] text-foreground">{item}</p>
                      </div>
                    ))}
                  </div>

                  <div className="rounded-[12px] bg-background px-[12px] py-[12px] w-full">
                    <div className="flex items-center justify-between gap-[8px]">
                      <div className="flex items-center gap-[4px]">
                        <Tooltip delayDuration={300}>
                          <TooltipTrigger asChild>
                            <div className="overflow-clip relative shrink-0 size-[16px] cursor-help">
                              <div className="absolute inset-[4.17%]" data-name="Icon">
                                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6667 14.6667">
                                  <g id="Icon">
                                    <path d={svgPaths.p1db78340} fill="var(--fill-0, var(--border))" />
                                    <path d={svgPaths.p35534c30} fill="var(--fill-0, var(--border))" />
                                    <path clipRule="evenodd" d={svgPaths.p1f296780} fill="var(--fill-0, var(--border))" fillRule="evenodd" />
                                  </g>
                                </svg>
                              </div>
                            </div>
                          </TooltipTrigger>
                          <TooltipContent side="top">Base listing price. Marketplace overrides still apply.</TooltipContent>
                        </Tooltip>
                        <p className="font-['Lexend',sans-serif] text-[var(--text-xs)] leading-[16px] text-muted-foreground">Listing price</p>
                      </div>
                      <p className="font-['Lexend',sans-serif] text-[var(--text-h4)] leading-[28px] text-foreground">{price ? `$${price}` : '$--.--'}</p>
                    </div>
                    <p className="mt-[6px] font-['Lexend',sans-serif] text-[11px] leading-[15px] text-muted-foreground">
                      {previewDescription}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative shrink-0 w-full">
            <div className="content-stretch flex flex-col items-start px-[24px] relative w-full">
              <div className={`bg-muted relative rounded-[12px] shrink-0 w-full${shouldPulse ? ' marketplace-attention-pulse' : ''}`} data-name="Container" onClick={() => handleMarketplaceInteraction()}>
                <div aria-hidden="true" className="absolute border border-border border-solid inset-[-1px] pointer-events-none rounded-[13px]" />
                <div className="flex flex-col items-center size-full">
                  <div className="content-stretch flex flex-col gap-[12px] items-start p-[24px] relative w-full">
                    <div className="flex w-full items-start justify-between gap-[12px]">
                      <div>
                        <p className="font-['Lexend',sans-serif] font-[var(--font-weight-medium)] leading-[20px] text-foreground text-[var(--text-sm)] tracking-[0.1px]">Marketplaces</p>
                        <p className="mt-[4px] font-['Lexend',sans-serif] font-[350] text-[12px] leading-[16px] tracking-[0.2px] text-foreground-dim">
                          {hasSelectedMarketplaces
                            ? `${selectedMarketplaces.length} selected • ${customizedMarketplaceCount} customized • ${marketplaceReadinessLabel}`
                            : 'Choose marketplaces and jump back here anytime to fine-tune each one.'}
                        </p>
                      </div>
                      {hasSelectedMarketplaces && (
                        <span className="rounded-full bg-background px-[10px] py-[6px] font-['Lexend',sans-serif] text-[10px] font-[var(--font-weight-medium)] uppercase tracking-[0.45px] text-muted-foreground">
                          {customizedMarketplaceCount > 0 ? 'Overrides added' : 'Using base listing'}
                        </span>
                      )}
                    </div>

                    {hasSelectedMarketplaces ? (
                      <>
                        <div className="grid w-full gap-[8px] rounded-[10px] bg-background px-[12px] py-[12px]">
                          <div className="flex items-start justify-between gap-[8px]">
                            <div>
                              <p className="font-['Lexend',sans-serif] text-[11px] font-[var(--font-weight-medium)] leading-[15px] text-foreground">Base readiness</p>
                              <p className="mt-[2px] font-['Lexend',sans-serif] text-[11px] leading-[15px] text-muted-foreground">
                                {baseListingReady
                                  ? 'Shared photos, details, price, and shipping are ready to flow into every selected marketplace.'
                                  : 'A few shared sections still need attention before every marketplace can be fully ready.'}
                              </p>
                            </div>
                            <span className={`rounded-full px-[8px] py-[4px] font-['Lexend',sans-serif] text-[10px] font-[var(--font-weight-medium)] uppercase tracking-[0.45px] ${baseListingReady ? 'bg-secondary/20 text-secondary-foreground' : 'bg-background text-muted-foreground'}`}>
                              {baseListingReady ? 'Base ready' : 'Base in progress'}
                            </span>
                          </div>
                          <div className="flex items-start justify-between gap-[8px]">
                            <div>
                              <p className="font-['Lexend',sans-serif] text-[11px] font-[var(--font-weight-medium)] leading-[15px] text-foreground">Marketplace readiness</p>
                              <p className="mt-[2px] font-['Lexend',sans-serif] text-[11px] leading-[15px] text-muted-foreground">
                                {marketplaceReadinessLabel}
                              </p>
                            </div>
                            <span className={`rounded-full px-[8px] py-[4px] font-['Lexend',sans-serif] text-[10px] font-[var(--font-weight-medium)] uppercase tracking-[0.45px] ${hasSelectedMarketplaces && marketplacesReadyCount === selectedMarketplaces.length && baseListingReady ? 'bg-secondary/20 text-secondary-foreground' : 'bg-background text-muted-foreground'}`}>
                              {hasSelectedMarketplaces && marketplacesReadyCount === selectedMarketplaces.length && baseListingReady ? 'All ready' : `${marketplacesReadyCount}/${selectedMarketplaces.length}`}
                            </span>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                          {selectedMarketplaces.map((marketplace) => {
                            const customization = marketplaceCustomizations[marketplace.id];
                            const customizationSummary = getCustomizationSummary(customization, itemDetails, price);
                            const isCustomized = customizationSummary.length > 0;

                            return (
                              <button
                                key={marketplace.id}
                                onClick={() => handleMarketplaceInteraction(marketplace.id)}
                                className="bg-card content-stretch flex items-center relative rounded-[8px] shrink-0 w-full cursor-pointer hover:bg-background transition-colors text-left"
                                type="button"
                              >
                                <div aria-hidden="true" className="absolute border border-border border-solid inset-0 pointer-events-none rounded-[8px]" />
                                <div className="content-stretch flex gap-[12px] items-center p-[12px] relative w-full">
                                  <div className="bg-card overflow-clip relative rounded-[4px] shrink-0 size-[40px]">
                                    <img src={marketplace.image} alt={marketplace.name} className="absolute inset-0 object-cover size-full" />
                                    <div aria-hidden="true" className="absolute border border-border border-solid inset-0 pointer-events-none rounded-[4px]" />
                                  </div>
                                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative">
                                    <div className="flex w-full items-center justify-between gap-[8px]">
                                      <p className="font-['Lexend',sans-serif] text-[var(--text-sm)] leading-[20px] text-foreground">{marketplace.name}</p>
                                      <span className={`rounded-full px-[8px] py-[4px] font-['Lexend',sans-serif] text-[10px] font-[var(--font-weight-medium)] uppercase tracking-[0.45px] ${isCustomized ? 'bg-primary/10 text-primary' : 'bg-background text-muted-foreground'}`}>
                                        {isCustomized ? 'Customized' : 'Base listing'}
                                      </span>
                                    </div>
                                    <div className="flex flex-wrap items-center gap-[4px]">
                                      {isCustomized ? (
                                        <>
                                          <div className="overflow-clip relative shrink-0 size-[12px]" data-name="Icon leading">
                                            <div className="absolute inset-[4.17%]" data-name="Icon">
                                              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
                                                <g id="Icon">
                                                  <path d={customizedTagSvgPaths.p17642500} fill="var(--fill-0, var(--primary))" />
                                                  <path d={customizedTagSvgPaths.p1beee5c0} fill="var(--fill-0, var(--primary))" />
                                                  <path clipRule="evenodd" d={customizedTagSvgPaths.p2a586c80} fill="var(--fill-0, var(--primary))" fillRule="evenodd" />
                                                </g>
                                              </svg>
                                            </div>
                                          </div>
                                          {customizationSummary.map((summary) => (
                                            <span key={summary} className="bg-background text-[11px] leading-[14px] tracking-[0.1px] text-foreground-dim px-[8px] py-[2px] rounded-[999px]">
                                              {summary}
                                            </span>
                                          ))}
                                        </>
                                      ) : (
                                        <span className="text-[11px] leading-[14px] tracking-[0.1px] text-muted-foreground">
                                          {baseListingReady
                                            ? 'Ready to publish with shared listing details.'
                                            : 'Will be ready once the shared listing details are complete.'}
                                        </span>
                                      )}
                                    </div>
                                  </div>
                                  <div className="flex flex-col items-end gap-[4px] shrink-0">
                                    <span className="font-['Lexend',sans-serif] text-[11px] font-[var(--font-weight-medium)] leading-[14px] text-primary">Edit</span>
                                    <div className="overflow-clip relative shrink-0 size-[20px]">
                                      <div className="absolute inset-[16.67%]">
                                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                                          <g>
                                            <path clipRule="evenodd" d="M11.3333 2.00003C11.5101 1.82322 11.7513 1.72394 12.0027 1.72394C12.254 1.72394 12.4952 1.82322 12.672 2.00003L14 3.32803C14.1768 3.50484 14.2761 3.74604 14.2761 3.99737C14.2761 4.2487 14.1768 4.4899 14 4.66671L5.33333 13.3334H2V10L10.6667 1.33336L11.3333 2.00003Z" fill="var(--fill-0, var(--muted-foreground))" fillRule="evenodd" />
                                            <path d="M10 2.66669L13.3333 6.00003" stroke="var(--stroke-0, var(--surface-variant))" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                                          </g>
                                        </svg>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </button>
                            );
                          })}
                        </div>

                        <button onClick={onSelectMarketplaces} className="content-stretch flex items-start relative shrink-0 w-full" type="button">
                          <div className="bg-background content-stretch flex h-[48px] items-center justify-center relative rounded-[var(--radius)] shrink-0 w-full cursor-pointer hover:bg-surface-variant transition-colors">
                            <div aria-hidden="true" className="absolute border border-border border-solid inset-0 pointer-events-none rounded-[var(--radius)]" />
                            <div className="content-stretch flex flex-col items-center justify-center relative rounded-[var(--radius)] shrink-0">
                              <div className="content-stretch flex gap-[10px] items-center px-[16px] py-[10px] relative shrink-0">
                                <div className="overflow-clip relative shrink-0 size-[20px]" data-name="plus-circle">
                                  <div className="absolute inset-[4.17%]" data-name="Icon">
                                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3333 18.3333">
                                      <g id="Icon">
                                        <path d={svgPaths.p3af8180} fill="var(--fill-0, var(--muted-foreground))" />
                                        <path clipRule="evenodd" d={svgPaths.p389ffd00} fill="var(--fill-0, var(--muted-foreground))" fillRule="evenodd" />
                                      </g>
                                    </svg>
                                  </div>
                                </div>
                                <div className="content-stretch flex items-center justify-center px-[4px] relative shrink-0">
                                  <div className="flex flex-col font-['Lexend',sans-serif] font-[var(--font-weight-medium)] justify-center leading-[0] relative shrink-0 text-muted-foreground text-[var(--text-sm)] text-center tracking-[0.1px] whitespace-nowrap">
                                    <p className="leading-[20px]">Manage Marketplaces</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </button>
                      </>
                    ) : (
                      <>
                        <button onClick={onSelectMarketplaces} className="content-stretch flex items-start relative shrink-0 w-full" type="button">
                          <div className="bg-background content-stretch flex h-[48px] items-center justify-center relative rounded-[var(--radius)] shrink-0 w-full cursor-pointer hover:bg-surface-variant transition-colors">
                            <div aria-hidden="true" className="absolute border border-border border-solid inset-0 pointer-events-none rounded-[var(--radius)]" />
                            <div className="content-stretch flex flex-col items-center justify-center relative rounded-[var(--radius)] shrink-0">
                              <div className="content-stretch flex gap-[10px] items-center px-[16px] py-[10px] relative shrink-0">
                                <div className="overflow-clip relative shrink-0 size-[20px]" data-name="plus-circle">
                                  <div className="absolute inset-[4.17%]" data-name="Icon">
                                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3333 18.3333">
                                      <g id="Icon">
                                        <path d={svgPaths.p3af8180} fill="var(--fill-0, var(--muted-foreground))" />
                                        <path clipRule="evenodd" d={svgPaths.p389ffd00} fill="var(--fill-0, var(--muted-foreground))" fillRule="evenodd" />
                                      </g>
                                    </svg>
                                  </div>
                                </div>
                                <div className="content-stretch flex items-center justify-center px-[4px] relative shrink-0">
                                  <div className="flex flex-col font-['Lexend',sans-serif] font-[var(--font-weight-medium)] justify-center leading-[0] relative shrink-0 text-muted-foreground text-[var(--text-sm)] text-center tracking-[0.1px] whitespace-nowrap">
                                    <p className="leading-[20px] text-[14px]">Select Marketplaces</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </button>
                        <div className="rounded-[10px] bg-background px-[12px] py-[10px] w-full">
                          <p className="font-['Lexend',sans-serif] text-[11px] leading-[15px] text-muted-foreground">
                            Select at least one marketplace so you can review channel readiness and add customizations from this rail.
                          </p>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
            <div className="h-[2px] relative shrink-0 w-full" data-name="Divider">
              <div className="absolute bottom-0 left-0 right-0 top-full" data-name="horizontal line">
                <div className="absolute inset-[-1px_0_0_0]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 384 1">
                    <line id="horizontal line" stroke="var(--stroke-0, var(--foreground-dim))" strokeLinecap="square" strokeOpacity="0.16" x1="0.5" x2="383.5" y1="0.5" y2="0.5" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="relative shrink-0 w-full" data-name="Container">
              <div className="content-stretch flex flex-col gap-[12px] items-start p-[24px] relative w-full">
                <Tooltip delayDuration={300}>
                  <TooltipTrigger asChild>
                    <div className="bg-foreground/10 h-[56px] relative rounded-[8px] shrink-0 w-full cursor-not-allowed" data-name="Button- Outline">
                      <div aria-hidden="true" className="absolute border border-border border-solid inset-0 pointer-events-none rounded-[8px]" />
                      <div className="flex flex-row items-center justify-center size-full">
                        <div className="content-stretch flex items-center justify-center px-[20px] py-[16px] relative size-full">
                          <div className="content-stretch flex flex-col items-center justify-center relative rounded-[var(--radius)] shrink-0" data-name="Content">
                            <div className="content-stretch flex gap-[10px] items-center opacity-38 px-[16px] py-[10px] relative shrink-0" data-name="State - Layer">
                              <div className="h-[26.399px] overflow-clip relative shrink-0 w-[24px]" data-name="Tray_Draft">
                                <div className="absolute inset-[19%_7.5%]" data-name="Icon">
                                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.4004 16.3661">
                                    <path d={svgPaths.p1d831a00} fill="var(--fill-0, var(--muted-foreground))" id="Icon" />
                                  </svg>
                                </div>
                              </div>
                              <div className="content-stretch flex items-center justify-center px-[4px] relative shrink-0" data-name="Label">
                                <div className="flex flex-col font-['Lexend',sans-serif] font-[var(--font-weight-medium)] justify-center leading-[0] relative shrink-0 text-muted-foreground text-[var(--text-base)] text-center tracking-[0.15px] whitespace-nowrap">
                                  <p className="leading-[24px]">Save Draft</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent side="top">Draft saving is disabled in this prototype.</TooltipContent>
                </Tooltip>

                <div className={`w-full rounded-[12px] border px-[12px] py-[12px] ${allSectionsComplete ? 'border-secondary/30 bg-secondary/10' : readinessTone === 'close' ? 'border-amber-200 bg-amber-50/70' : 'border-border bg-background/80'}`}>
                  <div className="flex items-start justify-between gap-[12px]">
                    <div>
                      <p className="font-['Lexend',sans-serif] text-[var(--text-sm)] font-[var(--font-weight-medium)] leading-[20px] text-foreground">
                        Review & Publish
                      </p>
                      <p className="mt-[4px] font-['Lexend',sans-serif] text-[11px] leading-[15px] text-muted-foreground">
                        {allSectionsComplete
                          ? 'Everything needed for review is in place. Do one final pass, then publish when you are ready.'
                          : readinessTone === 'close'
                            ? 'You are close. A few finishing touches will unlock final review and publishing.'
                            : 'Keep building the shared listing details below to unlock final review and publishing.'}
                      </p>
                    </div>
                    <span className={`rounded-full px-[10px] py-[6px] font-['Lexend',sans-serif] text-[10px] font-[var(--font-weight-medium)] uppercase tracking-[0.45px] ${allSectionsComplete ? 'bg-secondary text-secondary-foreground' : readinessTone === 'close' ? 'bg-amber-100 text-amber-800' : 'bg-muted text-muted-foreground'}`}>
                      {allSectionsComplete ? 'Ready now' : readinessTone === 'close' ? 'Almost ready' : 'Keep building'}
                    </span>
                  </div>
                  {!allSectionsComplete && missingRequirementCards.length > 0 && (
                    <div className="mt-[10px] grid gap-[8px]">
                      {missingRequirementCards.map((section) => (
                        <div key={section.id} className="rounded-[10px] bg-background px-[10px] py-[9px]">
                          <div className="flex items-center justify-between gap-[8px]">
                            <p className="font-['Lexend',sans-serif] text-[11px] font-[var(--font-weight-medium)] leading-[15px] text-foreground">
                              {section.label}
                            </p>
                            <span className="rounded-full bg-muted px-[8px] py-[4px] font-['Lexend',sans-serif] text-[10px] font-[var(--font-weight-medium)] uppercase tracking-[0.45px] text-muted-foreground">
                              Required
                            </span>
                          </div>
                          <p className="mt-[4px] font-['Lexend',sans-serif] text-[11px] leading-[15px] text-muted-foreground">
                            {section.hint}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <button
                  onClick={allSectionsComplete ? onPublish : undefined}
                  disabled={!allSectionsComplete}
                  className={`content-stretch flex items-center justify-center relative shrink-0 w-full ${allSectionsComplete ? 'cursor-pointer' : 'cursor-not-allowed'}`}
                  data-name="Review Publish Button"
                  type="button"
                >
                  <div className={`content-stretch flex flex-col items-center justify-center relative rounded-[var(--radius)] shrink-0 w-full transition-colors ${allSectionsComplete ? 'bg-[var(--primary)] hover:bg-primary-dim' : 'bg-foreground/10'}`} data-name="Content">
                    <div className={`content-stretch flex gap-[10px] items-center px-[24px] py-[16px] relative rounded-[var(--radius)] shrink-0 ${!allSectionsComplete ? 'opacity-38' : ''}`} data-name="State - Layer">
                      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="publish">
                        <div className="absolute inset-[16.67%]" data-name="Icon">
                          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                            <path d={publishBtnSvgPaths.p4913d00} fill={allSectionsComplete ? '#FFFFFF' : 'var(--fill-0, var(--muted-foreground))'} id="Icon" />
                          </svg>
                        </div>
                      </div>
                      <div className="content-stretch flex items-center justify-center px-[4px] relative shrink-0" data-name="Label">
                        <div className={`flex flex-col font-['Lexend',sans-serif] font-[var(--font-weight-medium)] justify-center leading-[0] relative shrink-0 text-[var(--text-base)] text-center tracking-[0.15px] whitespace-nowrap ${allSectionsComplete ? 'text-[#FFFFFF]' : 'text-[var(--muted-foreground)]'}`}>
                          <p className="leading-[24px]">{publishButtonLabel}</p>
                        </div>
                      </div>
                      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Chevron Right">
                        <div className="absolute bottom-[8.34%] left-1/4 right-[27.73%] top-[8.33%]" data-name="Icon">
                          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.3458 19.9993">
                            <path d={publishBtnSvgPaths.p3cd472c0} fill={allSectionsComplete ? '#FFFFFF' : 'var(--fill-0, var(--muted-foreground))'} id="Icon" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </button>
                <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
                  <div className="flex flex-col font-['Lexend',sans-serif] font-[350] justify-center leading-[0] relative shrink-0 text-foreground-dim text-[var(--text-xs)] text-center tracking-[0.2px] w-full">
                    <p className="leading-[16px] text-[12px]">
                      {publishButtonSupport}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

}
