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
                          Click a marketplace to review or edit
                        </p>

                        {/* Marketplace List - Now Clickable */}
                        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                          {selectedMarketplaces.map(
                            (marketplace) => {
                              const customization = marketplaceCustomizations[marketplace.id];
                              const hasCustomTitle = customization?.title && customization.title !== itemDetails?.title;
                              const hasCustomPrice = customization?.price && customization.price !== price;
                              const hasCustomCategory = customization?.category && customization.category !== itemDetails?.category;
                              const hasCustomBrand = customization?.brand && customization.brand !== itemDetails?.brand;
                              const hasCustomSize = customization?.size && customization.size !== itemDetails?.size;
                              const isCustomized = hasCustomTitle || hasCustomPrice || hasCustomCategory || hasCustomBrand || hasCustomSize;
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
                                      <div className="flex items-center gap-[8px] w-full">
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
                                              Ready to list
                                            </p>
                                          </div>
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
      {/* Sticky Progress Section with unified background color */}
      <div
        className="sticky top-0 z-10 bg-surface-container relative shrink-0 w-full border-b border-border m-[0px] pl-[3px] pr-[0px] pt-[32px] pb-[24px] rounded-tr-[12px]"
        data-name="Completeness"
      >
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[8px] items-start px-[24px] relative w-full">
            <div
              className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full whitespace-nowrap"
              data-name="div"
            >
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
            <div
              className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full"
              data-name="div"
            >
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
                    {/* Track (background) */}
                    <div
                      className="absolute h-[12px] left-0 right-0 top-0"
                      data-name="Track"
                    >
                      <div
                        className="-translate-y-1/2 absolute bg-surface-container-high h-[4px] left-0 right-0 rounded-[2px] top-1/2"
                        data-name="Track shape"
                      />
                    </div>
                    {/* Progress Fill */}
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
                    {/* Stop indicator at the end */}
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

      {/* Scrollable Content */}
      <div
        className="flex-[1_0_0] h-full min-w-px relative mx-[0px] mt-[24px] mb-[0px] p-[0px]"
        data-name="Container"
      >
        <div className="border-0 border-transparent border-solid content-stretch flex flex-col gap-[24px] items-start relative w-full">
          {/* Listing Preview */}
          <div className="relative shrink-0 w-full mx-[0px] mt-[-24px] mb-[0px]">
            <div className="content-stretch flex flex-col items-start px-[24px] relative w-full mx-[0px] mt-[24px] mb-[0px]">
              <div
                className="bg-surface-review relative rounded-[16px] shrink-0 w-full h-full"
                data-name="Background+Border"
              >
                <div
                  aria-hidden="true"
                  className="absolute border border-border border-solid inset-0 pointer-events-none rounded-[16px]"
                />
                <div className="content-stretch flex flex-col gap-[12px] items-start p-[17px] relative w-full">
                  <div
                    className="relative shrink-0 w-full"
                    data-name="Heading 3"
                  >
                    <div className="bg-clip-padding border-0 border-transparent border-solid content-stretch flex flex-col items-start relative w-full">
                      <div className="flex flex-col font-['Lexend',sans-serif] font-[var(--font-weight-medium)] justify-center leading-[0] relative shrink-0 text-foreground text-[var(--text-sm)] tracking-[0.1px] w-full">
                        <p className="leading-[20px]">
                          Listing Preview
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Preview Content */}
                  <div
                    className="relative shrink-0 w-full"
                    data-name="Container"
                  >
                    <div className="bg-clip-padding border-0 border-transparent border-solid content-stretch flex gap-[12px] items-start relative w-full">
                      <div
                        className="bg-neutral-container relative rounded-[8px] shrink-0 size-[80px]"
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
                            <div className="h-[24.66px] mix-blend-multiply relative shrink-0 w-[31.57px]">
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
                      <div
                        className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative self-stretch"
                        data-name="Container"
                      >
                        <div
                          className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full"
                          data-name="Container"
                        >
                          <Tooltip delayDuration={300}>
                            <TooltipTrigger asChild>
                              <div className="flex flex-col font-['Lexend',sans-serif] font-[var(--font-weight-medium)] justify-center leading-[0] relative shrink-0 text-foreground text-[var(--text-sm)] tracking-[0.1px] w-full">
                                <p className="leading-[20px] line-clamp-2 overflow-hidden text-ellipsis">
                                  {itemDetails?.title ||
                                    "Title"}
                                </p>
                              </div>
                            </TooltipTrigger>
                            {itemDetails?.title &&
                              itemDetails.title.length > 60 && (
                                <TooltipContent
                                  side="top"
                                  className="max-w-[240px]"
                                >
                                  {itemDetails.title}
                                </TooltipContent>
                              )}
                          </Tooltip>
                        </div>
                        <div
                          className="content-stretch flex gap-[16px] h-[40px] items-start overflow-clip relative shrink-0 w-full"
                          data-name="div"
                        >
                          <div
                            className="content-stretch flex flex-[1_0_0] flex-col h-full items-start min-h-px min-w-px overflow-clip relative"
                            data-name="div"
                          >
                            <p className="flex-[1_0_0] font-['Lexend',sans-serif] font-[350] leading-[16px] min-h-px min-w-px relative text-muted-foreground text-[var(--text-xs)] tracking-[0.2px] w-[153.344px] text-[14px]">{`Brand `}</p>
                            <p className="flex-[1_0_0] font-['Lexend',sans-serif] font-[var(--font-weight-medium)] leading-[20px] min-h-px min-w-px relative text-foreground text-[var(--text-sm)] tracking-[0.1px] w-[153.344px]">
                              {itemDetails?.brand || "--"}
                            </p>
                          </div>
                        </div>
                        <div
                          className="content-stretch flex flex-col h-[40px] items-start overflow-clip relative shrink-0 w-full"
                          data-name="div"
                        >
                          {itemDetails?.condition && (
                            <p className="bg-primary/8 rounded-[12px] px-[12px] py-[6px] font-['Lexend',sans-serif] font-[var(--font-weight-medium)] leading-[16px] relative text-muted-foreground text-[var(--text-xs)] tracking-[0.5px] w-fit">
                              {itemDetails.condition}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="h-px relative shrink-0 w-full"
                    data-name="Horizontal Divider"
                  >
                    <div
                      aria-hidden="false"
                      className="absolute border-neutral-container border-solid border-t inset-0 pointer-events-none"
                    />
                  </div>

                  <div
                    className="bg-background relative rounded-[8px] shrink-0 w-full"
                    data-name="Background+Border"
                  >
                    <div className="flex flex-row items-center size-full">
                      <div className="bg-clip-padding border-0 border-transparent border-solid content-stretch flex items-center justify-between p-[12px] relative w-full">
                        <div
                          className="flex-[1_0_0] min-h-px min-w-px relative"
                          data-name="Container"
                        >
                          <div className="bg-clip-padding border-0 border-transparent border-solid content-stretch flex gap-[4px] items-center relative w-full">
                            <Tooltip delayDuration={300}>
                              <TooltipTrigger asChild>
                                <div className="overflow-clip relative shrink-0 size-[16px] cursor-help">
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
                                          d={svgPaths.p1db78340}
                                          fill="var(--fill-0, var(--border))"
                                        />
                                        <path
                                          d={svgPaths.p35534c30}
                                          fill="var(--fill-0, var(--border))"
                                        />
                                        <path
                                          clipRule="evenodd"
                                          d={svgPaths.p1f296780}
                                          fill="var(--fill-0, var(--border))"
                                          fillRule="evenodd"
                                        />
                                      </g>
                                    </svg>
                                  </div>
                                </div>
                              </TooltipTrigger>
                              <TooltipContent side="top">
                                Base listing price. Marketplace
                                overrides still apply.
                              </TooltipContent>
                            </Tooltip>
                            <div className="flex flex-col font-['Lexend',sans-serif] font-[350] justify-center leading-[0] relative shrink-0 text-muted-foreground text-[var(--text-xs)] tracking-[0.2px] whitespace-nowrap">
                              <p className="leading-[16px] text-[14px]">
                                Listing Price
                              </p>
                            </div>
                          </div>
                        </div>
                        <div
                          className="relative shrink-0"
                          data-name="Container"
                        >
                          <div className="bg-clip-padding border-0 border-transparent border-solid content-stretch flex flex-col items-start relative">
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
                </div>
              </div>
            </div>
          </div>

          {/* Marketplaces Section */}
          <div className="relative shrink-0 w-full">
            <div className="content-stretch flex flex-col items-start px-[24px] relative w-full">
              {hasSelectedMarketplaces ? (
                // Show selected marketplaces
                <div
                  className={`bg-muted relative rounded-[12px] shrink-0 w-full${shouldPulse ? ' marketplace-attention-pulse' : ''}`}
                  data-name="Container"
                  onClick={() => handleMarketplaceInteraction()}
                >
                  <div
                    aria-hidden="true"
                    className="absolute border border-border border-solid inset-[-1px] pointer-events-none rounded-[13px]"
                  />
                  <div className="flex flex-col items-center size-full">
                    <div className="content-stretch flex flex-col gap-[12px] items-start p-[24px] relative w-full">
                      <div className="flex flex-col font-['Lexend',sans-serif] font-[var(--font-weight-medium)] justify-center leading-[0] relative shrink-0 text-foreground text-[var(--text-sm)] tracking-[0.1px] w-full">
                        <p className="leading-[20px]">
                          Marketplaces
                        </p>
                      </div>

                      {/* Marketplace List */}
                      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                        {selectedMarketplaces.map(
                          (marketplace) => {
                            const customization = marketplaceCustomizations[marketplace.id];
                            const hasCustomTitle = customization?.title && customization.title !== itemDetails?.title;
                            const hasCustomPrice = customization?.price && customization.price !== price;
                            const hasCustomCategory = customization?.category && customization.category !== itemDetails?.category;
                            const hasCustomBrand = customization?.brand && customization.brand !== itemDetails?.brand;
                            const hasCustomSize = customization?.size && customization.size !== itemDetails?.size;
                            const isCustomized = hasCustomTitle || hasCustomPrice || hasCustomCategory || hasCustomBrand || hasCustomSize;
                            
                            return (
                            <button
                              key={marketplace.id}
                              onClick={() =>
                                handleMarketplaceInteraction(
                                  marketplace.id,
                                )
                              }
                              className="bg-card content-stretch flex items-center relative rounded-[8px] shrink-0 w-full cursor-pointer hover:bg-background transition-colors"
                            >
                              <div
                                aria-hidden="true"
                                className="absolute border border-border border-solid inset-0 pointer-events-none rounded-[8px]"
                              />
                              <div className="content-stretch flex gap-[12px] items-center p-[12px] relative w-full">
                                {/* Marketplace Logo */}
                                <div className="bg-card overflow-clip relative rounded-[4px] shrink-0 size-[40px]">
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

                                {/* Marketplace Name + Customized Badge */}
                                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-h-px min-w-px relative">
                                  <div className="flex flex-col font-['Lexend',sans-serif] font-[var(--font-weight-normal)] justify-center leading-[0] relative shrink-0 text-foreground text-[var(--text-sm)] tracking-[0.25px]">
                                    <p className="leading-[20px]">
                                      {marketplace.name}
                                    </p>
                                  </div>
                                  {isCustomized && (
                                    <div className="content-stretch flex items-center gap-[4px] relative shrink-0">
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
                                      <div className="flex flex-col font-['Lexend',sans-serif] font-[350] justify-center leading-[0] relative shrink-0 text-[11px] text-primary tracking-[0.1px] whitespace-nowrap">
                                        <p className="leading-[14px]">Customized</p>
                                      </div>
                                    </div>
                                  )}
                                </div>

                                {/* Edit Icon */}
                                <div className="overflow-clip relative shrink-0 size-[24px]">
                                  <div className="absolute inset-[16.67%]">
                                    <svg
                                      className="absolute block size-full"
                                      fill="none"
                                      preserveAspectRatio="none"
                                      viewBox="0 0 16 16"
                                    >
                                      <g>
                                        <path
                                          clipRule="evenodd"
                                          d="M11.3333 2.00003C11.5101 1.82322 11.7513 1.72394 12.0027 1.72394C12.254 1.72394 12.4952 1.82322 12.672 2.00003L14 3.32803C14.1768 3.50484 14.2761 3.74604 14.2761 3.99737C14.2761 4.2487 14.1768 4.4899 14 4.66671L5.33333 13.3334H2V10L10.6667 1.33336L11.3333 2.00003Z"
                                          fill="var(--fill-0, var(--muted-foreground))"
                                          fillRule="evenodd"
                                        />
                                        <path
                                          d="M10 2.66669L13.3333 6.00003"
                                          stroke="var(--stroke-0, var(--surface-variant))"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth="1.5"
                                        />
                                      </g>
                                    </svg>
                                  </div>
                                </div>
                              </div>
                            </button>
                          );
                          },
                        )}
                      </div>

                      {/* Add Marketplace Button */}
                      <button
                        onClick={onSelectMarketplaces}
                        className="content-stretch flex items-start relative shrink-0 w-full"
                      >
                        <div
                          className="bg-background content-stretch flex h-[48px] items-center justify-center relative rounded-[var(--radius)] shrink-0 w-full cursor-pointer hover:bg-surface-variant transition-colors"
                          data-name="Button- Outline"
                        >
                          <div
                            aria-hidden="true"
                            className="absolute border border-border border-solid inset-0 pointer-events-none rounded-[var(--radius)]"
                          />
                          <div
                            className="content-stretch flex flex-col items-center justify-center relative rounded-[var(--radius)] shrink-0"
                            data-name="Content"
                          >
                            <div
                              className="content-stretch flex gap-[10px] items-center px-[16px] py-[10px] relative shrink-0"
                              data-name="State - Layer"
                            >
                              <div
                                className="overflow-clip relative shrink-0 size-[20px]"
                                data-name="plus-circle"
                              >
                                <div
                                  className="absolute inset-[4.17%]"
                                  data-name="Icon"
                                >
                                  <svg
                                    className="absolute block size-full"
                                    fill="none"
                                    preserveAspectRatio="none"
                                    viewBox="0 0 18.3333 18.3333"
                                  >
                                    <g id="Icon">
                                      <path
                                        d={svgPaths.p3af8180}
                                        fill="var(--fill-0, var(--muted-foreground))"
                                      />
                                      <path
                                        clipRule="evenodd"
                                        d={svgPaths.p389ffd00}
                                        fill="var(--fill-0, var(--muted-foreground))"
                                        fillRule="evenodd"
                                      />
                                    </g>
                                  </svg>
                                </div>
                              </div>
                              <div
                                className="content-stretch flex items-center justify-center px-[4px] relative shrink-0"
                                data-name="Label"
                              >
                                <div className="flex flex-col font-['Lexend',sans-serif] font-[var(--font-weight-medium)] justify-center leading-[0] relative shrink-0 text-muted-foreground text-[var(--text-sm)] text-center tracking-[0.1px] whitespace-nowrap">
                                  <p className="leading-[20px]">
                                    Add Marketplace
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                // Show empty state with "Select Marketplaces" button
                <div
                  className="bg-muted relative rounded-[12px] shrink-0 w-full"
                  data-name="Container"
                >
                  <div
                    aria-hidden="true"
                    className="absolute border border-border border-solid inset-[-1px] pointer-events-none rounded-[13px]"
                  />
                  <div className="flex flex-col items-center size-full">
                    <div className="content-stretch flex flex-col gap-[12px] items-center p-[24px] relative w-full">
                      <div className="flex flex-col font-['Lexend',sans-serif] font-[var(--font-weight-medium)] justify-center leading-[0] relative shrink-0 text-foreground text-[var(--text-sm)] tracking-[0.1px] w-full">
                        <p className="leading-[20px]">
                          Marketplaces
                        </p>
                      </div>
                      <button
                        onClick={onSelectMarketplaces}
                        className="content-stretch flex items-start relative shrink-0 w-full"
                      >
                        <div
                          className="bg-background content-stretch flex h-[48px] items-center justify-center relative rounded-[var(--radius)] shrink-0 w-full cursor-pointer hover:bg-surface-variant transition-colors"
                          data-name="Button- Outline"
                        >
                          <div
                            aria-hidden="true"
                            className="absolute border border-border border-solid inset-0 pointer-events-none rounded-[var(--radius)]"
                          />
                          <div
                            className="content-stretch flex flex-col items-center justify-center relative rounded-[var(--radius)] shrink-0"
                            data-name="Content"
                          >
                            <div
                              className="content-stretch flex gap-[10px] items-center px-[16px] py-[10px] relative shrink-0"
                              data-name="State - Layer"
                            >
                              <div
                                className="overflow-clip relative shrink-0 size-[20px]"
                                data-name="plus-circle"
                              >
                                <div
                                  className="absolute inset-[4.17%]"
                                  data-name="Icon"
                                >
                                  <svg
                                    className="absolute block size-full"
                                    fill="none"
                                    preserveAspectRatio="none"
                                    viewBox="0 0 18.3333 18.3333"
                                  >
                                    <g id="Icon">
                                      <path
                                        d={svgPaths.p3af8180}
                                        fill="var(--fill-0, var(--muted-foreground))"
                                      />
                                      <path
                                        clipRule="evenodd"
                                        d={svgPaths.p389ffd00}
                                        fill="var(--fill-0, var(--muted-foreground))"
                                        fillRule="evenodd"
                                      />
                                    </g>
                                  </svg>
                                </div>
                              </div>
                              <div
                                className="content-stretch flex items-center justify-center px-[4px] relative shrink-0"
                                data-name="Label"
                              >
                                <div className="flex flex-col font-['Lexend',sans-serif] font-[var(--font-weight-medium)] justify-center leading-[0] relative shrink-0 text-muted-foreground text-[var(--text-sm)] text-center tracking-[0.1px] whitespace-nowrap">
                                  <p className="leading-[20px] text-[14px]">
                                    Select Marketplaces
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </button>
                      <div className="flex flex-col font-['Lexend',sans-serif] font-[350] justify-center leading-[0] relative shrink-0 text-foreground-dim text-[var(--text-xs)] tracking-[0.2px] w-full">
                        <p className="leading-[16px] text-[12px]">
                          Select a marketplace to enable
                          customize listing
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
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
                    Draft saving is disabled in this prototype.
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
                          <p className="leading-[24px]">{`Review & Publish`}</p>
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
                    <p className="leading-[16px] text-[12px]">
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
