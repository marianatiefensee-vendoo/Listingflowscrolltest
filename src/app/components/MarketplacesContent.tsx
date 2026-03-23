import { useState, useEffect } from "react";
import svgPaths from "../../imports/svg-towfc7zrfc";
import collapsedSvgPaths from "../../imports/svg-8wr1a91yy5";
import imgEbay from "figma:asset/fc302d572214546f8204178ed8fb7d0af8c7506e.png";
import imgMercari from "figma:asset/818d7c9ebebd26d98ee60737907006a9b258dce3.png";
import imgDepop from "figma:asset/9fc19e9b972ada34a5069710f93ea92cd4258fea.png";
import imgFacebook from "figma:asset/55ad25062cf42038188e8437b6d83a149a822f83.png";
import type { MarketplaceCustomization } from "../App";

interface MarketplacesContentProps {
  shouldExpand?: boolean;
  onExpandChange?: () => void;
  onContinue?: () => void;
  selectedMarketplaces: string[];
  onMarketplacesChange: (marketplaces: string[]) => void;
  marketplaceCustomizations?: Record<string, MarketplaceCustomization>;
  onEditMarketplace?: (marketplaceId: string) => void;
  shouldCollapse?: boolean;
  onCollapseChange?: () => void;
  onManualExpand?: () => void;
}

function getCustomizationSummary(customization?: MarketplaceCustomization) {
  if (!customization) return [];
  const customFields = [
    customization.title,
    customization.category,
    customization.brand,
    customization.size,
  ].filter((value) => !!value).length;
  const summaries: string[] = [];
  if (customization.price) summaries.push("Custom pricing");
  if (customFields > 0) {
    summaries.push(`${customFields} custom field${customFields > 1 ? "s" : ""}`);
  }
  if (customization.shippingType) summaries.push("Shipping customized");
  return summaries;
}

export default function MarketplacesContent({
  shouldExpand,
  onExpandChange,
  onContinue,
  selectedMarketplaces,
  onMarketplacesChange,
  marketplaceCustomizations = {},
  onEditMarketplace,
  shouldCollapse,
  onCollapseChange,
  onManualExpand,
}: MarketplacesContentProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const hasCompleted = selectedMarketplaces.length > 0;

  useEffect(() => {
    if (shouldExpand) {
      setIsExpanded(true);
      onExpandChange?.();
    }
  }, [shouldExpand, onExpandChange]);

  useEffect(() => {
    if (shouldCollapse) {
      setIsExpanded(false);
      onCollapseChange?.();
    }
  }, [shouldCollapse, onCollapseChange]);

  const marketplaces = [
    { id: "ebay", name: "eBay", image: imgEbay, connected: true },
    { id: "mercari", name: "Mercari", image: imgMercari, connected: true },
    { id: "depop", name: "Depop", image: imgDepop, connected: true },
    { id: "facebook", name: "Facebook", image: imgFacebook, connected: true },
  ];

  const toggleMarketplace = (id: string) => {
    const newMarketplaces = selectedMarketplaces.includes(id)
      ? selectedMarketplaces.filter((m) => m !== id)
      : [...selectedMarketplaces, id];
    onMarketplacesChange(newMarketplaces);
  };

  const handleContinue = () => {
    setIsExpanded(false);
    onContinue?.();
  };

  const handleHeaderClick = () => {
    if (!isExpanded) {
      setIsExpanded(true);
      onManualExpand?.();
    }
  };

  const selectedMarketplaceData = selectedMarketplaces
    .map((marketplaceId) => marketplaces.find((marketplace) => marketplace.id === marketplaceId))
    .filter(Boolean) as typeof marketplaces;
  const customizedMarketplaceCount = selectedMarketplaces.filter((marketplaceId) => {
    const customization = marketplaceCustomizations[marketplaceId];
    return !!customization && Object.values(customization).some(Boolean);
  }).length;
  const usingBaseOnlyCount = selectedMarketplaces.length - customizedMarketplaceCount;

  return (
    <div className="bg-surface-variant content-stretch flex flex-col items-start relative rounded-[16px] w-full">
      <div aria-hidden="true" className={`absolute border border-border border-solid inset-[-1px] pointer-events-none rounded-[17px] ${isExpanded ? "shadow-[0px_1px_2px_0px_rgba(0,0,0,0.3),0px_1px_3px_0px_rgba(0,0,0,0.15)]" : ""} bg-card`} />

      <div
        className={`bg-surface-variant content-stretch flex flex-col items-start relative shrink-0 w-full ${
          isExpanded ? "rounded-tl-[16px] rounded-tr-[16px]" : "rounded-[16px]"
        }`}
      >
        <div
          className={`relative shrink-0 w-full ${!isExpanded ? "cursor-pointer" : ""}`}
          onClick={handleHeaderClick}
        >
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center justify-between px-[24px] py-[16px] relative w-full">
              <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
                <div className="content-stretch flex items-center relative shrink-0">
                  <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                    {isExpanded ? (
                      <div className="bg-primary-container content-stretch flex gap-[10px] items-center relative rounded-[16px] shrink-0 size-[32px]">
                        <div aria-hidden="true" className="absolute border-primary-container border-[1.5px] border-solid inset-0 pointer-events-none rounded-[16px]" />
                        <div className="content-stretch flex flex-[1_0_0] h-full items-center justify-center min-h-px min-w-px relative">
                          <div className="flex flex-col font-['Lexend',sans-serif] font-[var(--font-weight-normal)] justify-center leading-[0] relative shrink-0 text-[var(--text-base)] text-center text-primary-container-foreground tracking-[0.5px] whitespace-nowrap">
                            <p className="leading-[24px]">3</p>
                          </div>
                        </div>
                      </div>
                    ) : hasCompleted ? (
                      <div className="relative shrink-0 size-[32px]">
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                          <circle cx="16" cy="16" fill="var(--fill-0, var(--secondary))" r="15.25" stroke="var(--stroke-0, var(--secondary))" strokeWidth="1.5" />
                        </svg>
                        <div className="absolute left-[4px] overflow-clip size-[24px] top-[4px]">
                          <div className="absolute inset-[19.32%_8.33%_19.99%_8.33%]">
                            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 14.5656">
                              <path d={collapsedSvgPaths.p97f8e00} fill="var(--fill-0, var(--primary-dim))" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="bg-primary-container content-stretch flex gap-[10px] items-center relative rounded-[16px] shrink-0 size-[32px]">
                        <div aria-hidden="true" className="absolute border-primary-container border-[1.5px] border-solid inset-0 pointer-events-none rounded-[16px]" />
                        <div className="content-stretch flex flex-[1_0_0] h-full items-center justify-center min-h-px min-w-px relative">
                          <div className="flex flex-col font-['Lexend',sans-serif] font-[var(--font-weight-normal)] justify-center leading-[0] relative shrink-0 text-[var(--text-base)] text-center text-primary-container-foreground tracking-[0.5px] whitespace-nowrap">
                            <p className="leading-[24px]">3</p>
                          </div>
                        </div>
                      </div>
                    )}
                    <div className="content-stretch flex items-center justify-center relative shrink-0">
                      <p className={`font-['Lexend',sans-serif] font-[var(--font-weight-normal)] leading-[32px] relative shrink-0 text-[var(--text-h3)] whitespace-nowrap ${isExpanded ? "text-foreground" : hasCompleted ? "text-muted-foreground" : "text-foreground"} text-[24px]`}>
                        Choose where to publish
                      </p>
                    </div>
                  </div>
                </div>

                {!isExpanded && hasCompleted && selectedMarketplaces.length > 0 && (
                  <div className="content-stretch flex gap-[4px] items-start opacity-38 p-[4px] relative shrink-0">
                    {selectedMarketplaceData.map((marketplace) => (
                      <div key={marketplace.id} className="bg-card overflow-clip relative rounded-[4px] shrink-0 size-[40px]">
                        <img src={marketplace.image} alt={marketplace.name} className="absolute inset-0 object-cover size-full" />
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <button
                onClick={(event) => {
                  event.stopPropagation();
                  const willExpand = !isExpanded;
                  setIsExpanded(willExpand);
                  if (willExpand) onManualExpand?.();
                }}
                className="content-stretch flex items-center relative shrink-0"
                aria-label={isExpanded ? "Collapse" : "Expand"}
              >
                <div className="relative shrink-0 size-[48px]">
                  <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col items-center justify-center left-[calc(50%-0.5px)] overflow-clip rounded-[100px] top-1/2 w-[40px]">
                    <div className="content-stretch flex h-[40px] items-center justify-center relative shrink-0 w-full">
                      {isExpanded ? (
                        <div className="overflow-clip relative shrink-0 size-[24px]">
                          <div className="absolute inset-[26.36%_8.34%_26.36%_8.33%]">
                            <svg className="absolute block size-full transition-transform duration-300" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9993 11.3458" style={{ transform: "rotate(180deg)" }}>
                              <path d={svgPaths.p28797e80} fill="var(--fill-0, var(--foreground))" />
                            </svg>
                          </div>
                        </div>
                      ) : hasCompleted ? (
                        <div className="overflow-clip relative shrink-0 size-[24px]">
                          <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[18.183px] left-[calc(50%-0.5px)] top-[calc(50%+0.09px)] w-[19px]">
                            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 18.1834">
                              <g>
                                <path clipRule="evenodd" d={collapsedSvgPaths.p1e751200} fill="var(--fill-0, var(--primary-dim))" fillRule="evenodd" />
                                <path d={collapsedSvgPaths.p3a455080} fill="var(--fill-0, var(--primary-dim))" />
                              </g>
                            </svg>
                          </div>
                        </div>
                      ) : (
                        <div className="overflow-clip relative shrink-0 size-[24px]">
                          <div className="absolute inset-[26.36%_8.34%_26.36%_8.33%]">
                            <svg className="absolute block size-full transition-transform duration-300" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9993 11.3458" style={{ transform: "rotate(0deg)" }}>
                              <path d={svgPaths.p28797e80} fill="var(--fill-0, var(--foreground))" />
                            </svg>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {isExpanded && (
        <div className="h-[2px] relative shrink-0 w-full">
          <div className="absolute bottom-0 left-0 right-0 top-full">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 760 1">
                <line stroke="var(--stroke-0, var(--border))" strokeLinecap="square" x1="0.5" x2="759.5" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      )}

      {isExpanded && (
        <div className="content-stretch flex flex-col gap-[22px] items-start py-[24px] relative shrink-0 w-full">
          <div className="px-[24px] w-full">
            <div className="grid gap-[12px] lg:grid-cols-[minmax(0,1.3fr)_minmax(240px,0.9fr)]">
              <div className="bg-muted rounded-[12px] px-[16px] py-[14px]">
                <p className="font-['Lexend',sans-serif] font-[350] text-[12px] leading-[16px] tracking-[0.2px] text-muted-foreground">
                  Pick the marketplaces where you want this item live. Shared details carry over automatically, and you can fine-tune each marketplace later.
                </p>
              </div>
              <div className="rounded-[12px] border border-border bg-background px-[16px] py-[14px]">
                <p className="font-['Lexend',sans-serif] text-[10px] font-[var(--font-weight-medium)] uppercase tracking-[0.45px] text-muted-foreground">
                  Ready
                </p>
                <div className="mt-[8px] flex flex-wrap gap-[8px]">
                  <span className="rounded-full bg-primary/10 px-[8px] py-[4px] font-['Lexend',sans-serif] text-[10px] font-[var(--font-weight-medium)] uppercase tracking-[0.45px] text-primary">
                    {selectedMarketplaces.length} ready
                  </span>
                  <span className="rounded-full bg-background px-[8px] py-[4px] font-['Lexend',sans-serif] text-[10px] font-[var(--font-weight-medium)] uppercase tracking-[0.45px] text-muted-foreground border border-border/70">
                    {customizedMarketplaceCount} with custom changes
                  </span>
                  <span className="rounded-full bg-background px-[8px] py-[4px] font-['Lexend',sans-serif] text-[10px] font-[var(--font-weight-medium)] uppercase tracking-[0.45px] text-muted-foreground border border-border/70">
                    {usingBaseOnlyCount > 0 ? `${usingBaseOnlyCount} using shared details` : "All customized"}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="relative shrink-0 w-full">
            <div className="overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex gap-[12px] items-start px-[24px] relative w-full">
                {[marketplaces.slice(0, 2), marketplaces.slice(2)].map((column, columnIndex) => (
                  <div key={columnIndex} className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-h-px min-w-px overflow-clip relative self-stretch">
                    {column.map((marketplace) => {
                      const isSelected = selectedMarketplaces.includes(marketplace.id);
                      return (
                        <div key={marketplace.id} className="bg-card content-stretch flex flex-col items-start justify-center min-h-[48px] relative rounded-[4px] shrink-0 w-full">
                          <div aria-hidden="true" className="absolute border border-border border-solid inset-0 pointer-events-none rounded-[4px]" />
                          <div
                            className={`relative rounded-[4px] shrink-0 w-full cursor-pointer ${isSelected ? "bg-primary/16" : ""}`}
                            onClick={() => toggleMarketplace(marketplace.id)}
                          >
                            <div className="flex flex-row items-center size-full">
                              <div className="content-stretch flex gap-[12px] isolate items-center px-[16px] py-[10px] relative w-full">
                                <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 z-[3]">
                                  <div className="relative shrink-0 size-[56px]">
                                    <div className="absolute inset-0 pointer-events-none rounded-[4px]">
                                      <img alt="" className="absolute inset-0 max-w-none object-cover rounded-[4px] size-full" src={marketplace.image} />
                                      <div aria-hidden="true" className={`absolute border border-solid inset-0 rounded-[4px] ${isSelected ? "border-foreground-dim" : "border-border"}`} />
                                    </div>
                                  </div>
                                </div>
                                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative z-[2]">
                                  <div className="content-stretch flex flex-col items-start justify-center min-h-[32px] relative shrink-0 w-full">
                                    <div className={`flex flex-col font-['Lexend',sans-serif] font-[var(--font-weight-normal)] justify-center leading-[0] relative shrink-0 text-[var(--text-base)] tracking-[0.5px] w-full ${isSelected ? "text-foreground" : "text-muted-foreground"}`}>
                                      <p className="leading-[24px]">{marketplace.name}</p>
                                    </div>
                                    <p className="mt-[2px] font-['Lexend',sans-serif] text-[11px] leading-[14px] text-muted-foreground">
                                      {isSelected ? "Ready to publish" : "Add this marketplace"}
                                    </p>
                                  </div>
                                </div>
                                <div className="content-stretch flex flex-col items-center justify-center p-[4px] relative shrink-0 z-[1]">
                                  <div className="content-stretch flex items-center justify-center p-[11px] relative rounded-[100px] shrink-0">
                                    {isSelected ? (
                                      <>
                                        <div className="bg-primary rounded-[2px] shrink-0 size-[18px]" />
                                        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[24px] top-1/2">
                                          <div className="absolute bottom-[31.67%] left-1/4 right-1/4 top-[29.17%]">
                                            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 9.4">
                                              <path d={svgPaths.p35d39780} fill="var(--fill-0, white)" />
                                            </svg>
                                          </div>
                                        </div>
                                      </>
                                    ) : (
                                      <div className="relative rounded-[2px] shrink-0 size-[18px]">
                                        <div aria-hidden="true" className="absolute border-2 border-muted-foreground border-solid inset-0 pointer-events-none rounded-[2px]" />
                                      </div>
                                    )}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {selectedMarketplaces.length > 0 && (
            <div className="px-[24px] w-full">
              <div className="rounded-[16px] border border-border bg-muted/50 px-[16px] py-[14px]">
                <div className="flex flex-wrap items-start justify-between gap-[12px]">
                  <div>
                    <p className="font-['Lexend',sans-serif] font-medium text-[14px] leading-[20px] tracking-[0.1px] text-foreground">
                      Marketplace-specific changes
                    </p>
                    <p className="font-['Lexend',sans-serif] font-[350] text-[12px] leading-[16px] tracking-[0.2px] text-muted-foreground">
                      Keep the shared listing as-is, or open a marketplace only when you need different details, pricing, or shipping.
                    </p>
                  </div>
                </div>

                <div className="mt-[12px] flex flex-col gap-[8px]">
                  {selectedMarketplaceData.map((marketplace) => {
                    const customizationSummary = getCustomizationSummary(
                      marketplaceCustomizations[marketplace.id],
                    );
                    const hasCustomizations = customizationSummary.length > 0;

                    return (
                      <button
                        key={marketplace.id}
                        type="button"
                        onClick={() => onEditMarketplace?.(marketplace.id)}
                        className="bg-card border border-border rounded-[12px] px-[16px] py-[12px] flex items-center gap-[12px] text-left hover:bg-background transition-colors"
                      >
                        <div className="bg-card overflow-clip relative rounded-[4px] shrink-0 size-[40px]">
                          <img src={marketplace.image} alt={marketplace.name} className="absolute inset-0 object-cover size-full" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-wrap items-center gap-[8px]">
                            <p className="font-['Lexend',sans-serif] font-medium text-[14px] leading-[20px] tracking-[0.1px] text-foreground">
                              {marketplace.name}
                            </p>
                            <span className={`text-[11px] leading-[14px] tracking-[0.1px] font-[350] ${hasCustomizations ? "text-primary" : "text-muted-foreground"}`}>
                              {hasCustomizations ? "Custom setup" : "Using shared listing"}
                            </span>
                          </div>
                          <p className="mt-[4px] font-['Lexend',sans-serif] text-[11px] leading-[15px] text-muted-foreground">
                              {hasCustomizations
                              ? "Open to review or change this marketplace only."
                              : "This marketplace will use your shared listing unless you customize it."}
                          </p>
                          <div className="flex flex-wrap gap-[6px] mt-[6px]">
                            {hasCustomizations ? (
                              customizationSummary.map((summary) => (
                                <span key={summary} className="bg-muted text-[11px] leading-[14px] tracking-[0.1px] text-foreground-dim px-[8px] py-[2px] rounded-[999px]">
                                  {summary}
                                </span>
                              ))
                            ) : (
                              <span className="bg-muted text-[11px] leading-[14px] tracking-[0.1px] text-muted-foreground px-[8px] py-[2px] rounded-[999px]">
                                Shared listing applies
                              </span>
                            )}
                          </div>
                        </div>
                        <span className="font-['Lexend',sans-serif] font-medium text-[12px] leading-[16px] tracking-[0.2px] text-primary">
                          {hasCustomizations ? "Review changes" : "Customize this marketplace"}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          <div className="relative shrink-0 w-full">
            <div className="flex flex-row items-end justify-end size-full">
              <div className="content-stretch flex items-end justify-end px-[24px] relative w-full">
                <button
                  onClick={handleContinue}
                  className="bg-secondary content-stretch cursor-pointer flex h-[48px] items-center justify-center relative rounded-[var(--radius)] shrink-0"
                >
                  <div className="content-stretch flex flex-col items-center justify-center relative rounded-[var(--radius)] shrink-0">
                    <div className="content-stretch flex gap-[10px] items-center px-[16px] py-[10px] relative shrink-0">
                      <div className="content-stretch flex items-center justify-center px-[4px] relative shrink-0">
                        <div className="flex flex-col font-['Lexend',sans-serif] font-[var(--font-weight-medium)] justify-center leading-[0] relative shrink-0 text-primary-dim text-[var(--text-sm)] text-center tracking-[0.1px] whitespace-nowrap">
                          <p className="leading-[20px]">Set pricing</p>
                        </div>
                      </div>
                      <div className="overflow-clip relative shrink-0 size-[20px]">
                        <div className="absolute bottom-[8.34%] left-1/4 right-[27.73%] top-[8.33%]">
                          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.45486 16.666">
                            <path d={svgPaths.p23f63600} fill="var(--fill-0, var(--primary-dim))" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
