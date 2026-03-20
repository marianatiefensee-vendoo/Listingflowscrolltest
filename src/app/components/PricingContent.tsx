import { useState, useEffect } from "react";
import svgPaths from "../../imports/svg-towfc7zrfc";
import pricingSvgPaths from "../../imports/svg-whvz8o21if";
import collapsedSvgPaths from "../../imports/svg-il4iibzw7";
import sparkleSvgPaths from "../../imports/svg-4bconveqv9";

interface PricingContentProps {
  shouldExpand?: boolean;
  onExpandChange?: () => void;
  onContinue?: () => void;
  onPriceChange?: (price: string) => void;
  isAIGenerated?: boolean;
  hasUsedAI?: boolean;
  initialPrice?: string;
  shouldCollapse?: boolean;
  onCollapseChange?: () => void;
  onManualExpand?: () => void;
}

export default function PricingContent({ shouldExpand, onExpandChange, onContinue, onPriceChange, isAIGenerated = false, hasUsedAI = false, initialPrice, shouldCollapse, onCollapseChange, onManualExpand }: PricingContentProps) {
  const [price, setPrice] = useState(initialPrice || "");
  const [isExpanded, setIsExpanded] = useState(false);
  const [isGeneratingInlineSuggestion, setIsGeneratingInlineSuggestion] = useState(false);

  // Derive completion from required input: listing price must be set
  const hasCompleted = price.trim() !== "";
  const [hasGeneratedAI, setHasGeneratedAI] = useState(false);
  const [wasPriceAIGenerated, setWasPriceAIGenerated] = useState(false);
  const showAIInsightCard = hasUsedAI || isAIGenerated;

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

  // Handle AI-generated pricing
  useEffect(() => {
    if (isAIGenerated && !hasGeneratedAI) {
      const aiPrice = initialPrice || "45";
      setPrice(aiPrice);
      onPriceChange?.(aiPrice);
      setHasGeneratedAI(true);
      setWasPriceAIGenerated(true);
    }
  }, [isAIGenerated, hasGeneratedAI, onPriceChange, initialPrice]);

  // Also update if initialPrice changes after mount (e.g. from AI generation)
  useEffect(() => {
    if (initialPrice && !hasGeneratedAI) {
      setPrice(initialPrice);
      onPriceChange?.(initialPrice);
    }
  }, [initialPrice]);

  const completeAIPriceGeneration = () => {
    const aiPrice = initialPrice || "45";
    setPrice(aiPrice);
    onPriceChange?.(aiPrice);
    setHasGeneratedAI(true);
    setWasPriceAIGenerated(true);
    setIsGeneratingInlineSuggestion(false);
  };

  const handleGenerateAIPrice = () => {
    completeAIPriceGeneration();
  };

  const handleInlineAISuggestion = () => {
    setIsGeneratingInlineSuggestion(true);
    window.setTimeout(() => {
      completeAIPriceGeneration();
    }, 900);
  };

  // Compute dynamic recommended range based on the current price (±15%)
  const numericPrice = parseFloat(price) || 0;
  const rangeLow = numericPrice > 0 ? Math.round(numericPrice * 0.85) : 38;
  const rangeHigh = numericPrice > 0 ? Math.round(numericPrice * 1.15) : 52;
  // Progress bar width: position of current price within the range (0–100%)
  const progressPercent = numericPrice > 0
    ? Math.min(100, Math.max(0, ((numericPrice - rangeLow) / (rangeHigh - rangeLow)) * 100))
    : 46;

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

  return (
    <div className="bg-surface-variant content-stretch flex flex-col items-start relative rounded-[16px] w-full">
      <div aria-hidden="true" className={`absolute border border-border border-solid inset-[-1px] pointer-events-none rounded-[17px] ${isExpanded ? 'shadow-[0px_1px_2px_0px_rgba(0,0,0,0.3),0px_1px_3px_0px_rgba(0,0,0,0.15)]' : ''} bg-card`} />
      
      {/* Title Step */}
      <div 
        className={`bg-surface-variant content-stretch flex flex-col items-start relative shrink-0 w-full ${
          isExpanded ? 'rounded-tl-[16px] rounded-tr-[16px]' : 'rounded-[16px]'
        }`}
      >
        <div
          className={`relative shrink-0 w-full ${!isExpanded ? 'cursor-pointer' : ''}`}
          onClick={handleHeaderClick}
        >
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center justify-between px-[24px] py-[16px] relative w-full">
              {/* Title */}
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-px">
                <div className="content-stretch flex items-center relative shrink-0 w-full">
                  <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                    {/* Step Badge */}
                    {isExpanded ? (
                      <div className="bg-primary-container content-stretch flex gap-[10px] items-center relative rounded-[16px] shrink-0 size-[32px]">
                        <div aria-hidden="true" className="absolute border-primary-container border-[1.5px] border-solid inset-0 pointer-events-none rounded-[16px]" />
                        <div className="content-stretch flex flex-[1_0_0] h-full items-center justify-center min-h-px min-w-px relative">
                          <div className="flex flex-col font-['Lexend',sans-serif] font-[var(--font-weight-normal)] justify-center leading-[0] relative shrink-0 text-[var(--text-base)] text-center text-primary-container-foreground tracking-[0.5px] whitespace-nowrap">
                            <p className="leading-[24px]">4</p>
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
                            <p className="leading-[24px]">4</p>
                          </div>
                        </div>
                      </div>
                    )}
                    <div className="content-stretch flex items-center justify-center relative shrink-0">
                      <p className={`font-['Lexend',sans-serif] font-[var(--font-weight-normal)] leading-[32px] relative shrink-0 text-[var(--text-h3)] whitespace-nowrap ${ isExpanded ? 'text-foreground' : (hasCompleted ? 'text-muted-foreground' : 'text-foreground') } text-[24px]`}>Pricing</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Actions */}
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
                            <svg
                              className="absolute block size-full transition-transform duration-300"
                              fill="none"
                              preserveAspectRatio="none"
                              viewBox="0 0 19.9993 11.3458"
                              style={{
                                transform: "rotate(180deg)",
                              }}
                            >
                              <path d={svgPaths.p28797e80} fill="var(--fill-0, var(--foreground))" />
                            </svg>
                          </div>
                        </div>
                      ) : hasCompleted ? (
                        <div className="overflow-clip relative shrink-0 size-[24px]">
                          <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[18.183px] left-[calc(50%-0.5px)] top-[calc(50%+0.09px)] w-[19px]">
                            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 18.1834">
                              <g>
                                <path clipRule="evenodd" d={collapsedSvgPaths.p1e751200} fill="var(--fill-0, var(--muted-foreground))" fillRule="evenodd" />
                                <path d={collapsedSvgPaths.p3a455080} fill="var(--fill-0, var(--muted-foreground))" />
                              </g>
                            </svg>
                          </div>
                        </div>
                      ) : (
                        <div className="overflow-clip relative shrink-0 size-[24px]">
                          <div className="absolute inset-[26.36%_8.34%_26.36%_8.33%]">
                            <svg
                              className="absolute block size-full transition-transform duration-300"
                              fill="none"
                              preserveAspectRatio="none"
                              viewBox="0 0 19.9993 11.3458"
                              style={{
                                transform: "rotate(0deg)",
                              }}
                            >
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

      {/* Divider */}
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

      {/* Content */}
      {isExpanded && (
        <div className="relative shrink-0 w-full">
          <div className="flex flex-col items-center size-full">
            <div className="content-stretch flex flex-col gap-[32px] items-center p-[24px] relative w-full">
              {/* Wrapper */}
              <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full">
                {/* Input Listing Price */}
                <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full">
                  <div className="content-stretch flex flex-col items-start relative rounded-[4px] shrink-0">
                    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[327px]">
                      {/* Title */}
                      <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
                        <div className="flex flex-col font-['Lexend',sans-serif] font-[var(--font-weight-medium)] justify-center leading-[0] relative shrink-0 text-muted-foreground text-[var(--text-base)] tracking-[0.15px] whitespace-nowrap">
                          <p className="leading-[24px]">Listing Price</p>
                        </div>
                        {/* Tag - Only show if AI has generated and not manually edited */}
                        {showAIInsightCard ? (
                          <div className="content-stretch flex items-start relative shrink-0">
                            <div className="bg-ai-tag content-stretch flex items-center justify-center px-[4px] relative rounded-[4px] shrink-0">
                              <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
                                <div className="overflow-clip relative shrink-0 size-[12px]">
                                  <div className="absolute inset-[9.3%_9.51%_9.5%_9.3%]">
                                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.74306 9.74407">
                                      <g>
                                        <path clipRule="evenodd" d={pricingSvgPaths.p1af4ae00} fill="var(--ai-tag-foreground)" fillRule="evenodd" />
                                        <path clipRule="evenodd" d={pricingSvgPaths.peb3b600} fill="var(--ai-tag-foreground)" fillRule="evenodd" />
                                        <path d={pricingSvgPaths.p3b146f80} fill="var(--fill-0, var(--ai-tag-foreground))" />
                                        <path d={pricingSvgPaths.p342e3e00} fill="var(--fill-0, var(--ai-tag-foreground))" />
                                      </g>
                                    </svg>
                                  </div>
                                </div>
                                <div className="flex flex-col font-['Lexend',sans-serif] font-[350] justify-center leading-[0] relative shrink-0 text-ai-tag-foreground text-[11px] text-center whitespace-nowrap">
                                  <p className="leading-[14px]">AI suggested</p>
                                </div>
                              </div>
                              <div className="h-[20px] relative shrink-0 w-0">
                                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                                  <g />
                                </svg>
                              </div>
                            </div>
                          </div>
                        ) : wasPriceAIGenerated ? (
                          <div className="content-stretch flex items-start relative shrink-0">
                            <div className="flex flex-col font-['Lexend',sans-serif] font-[350] justify-center leading-[0] relative shrink-0 text-edited-tag text-[11px] text-center whitespace-nowrap">
                              <p className="leading-[14px]">Edited</p>
                            </div>
                          </div>
                        ) : null}
                      </div>
                      {/* Input */}
                      <div className="h-[56px] relative rounded-[var(--radius)] shrink-0 w-full">
                        <div aria-hidden="true" className="absolute border border-foreground-dim border-solid inset-0 pointer-events-none rounded-[var(--radius)]" />
                        <div className="content-stretch flex gap-[4px] items-start pl-[16px] py-[4px] relative size-full">
                          <div className="flex-[1_0_0] h-full min-h-px min-w-px relative">
                            <div className="content-stretch flex flex-col items-start py-[4px] relative size-full">
                              <div className="flex-[1_0_0] min-h-px min-w-px relative w-full">
                                <div className="flex flex-row items-center size-full">
                                  <div className="content-stretch flex items-center py-[8px] relative size-full">
                                    <input
                                      type="text"
                                      value={price ? `U$ ${price}` : ''}
                                      placeholder="U$ "
                                      onChange={(e) => {
                                        const newPrice = e.target.value.replace('U$ ', '');
                                        setPrice(newPrice);
                                        onPriceChange?.(newPrice);
                                        // Clear AI badge on manual edit
                                        setHasGeneratedAI(false);
                                      }}
                                      className="flex-[1_0_0] font-['Lexend',sans-serif] font-[var(--font-weight-normal)] leading-[32px] min-h-px min-w-px relative text-foreground text-[var(--text-h3)] bg-transparent border-none outline-none placeholder:text-foreground-dim"
                                    />
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

                {showAIInsightCard ? (
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                    <div className="content-stretch flex flex-col items-start pb-[12px] pl-[12px] pr-[8px] pt-[4px] relative rounded-[16px] shrink-0" style={{ backgroundImage: "linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 253, 255) 7.7045%, rgb(254, 251, 255) 26.563%, rgb(253, 247, 255) 59.594%)" }}>
                      <div aria-hidden="true" className="absolute border border-border border-solid inset-0 pointer-events-none rounded-[16px]" />
                      
                      {/* Header */}
                      <div className="content-stretch flex gap-[4px] items-center px-[4px] py-[8px] relative shrink-0">
                        <div className="bg-surface-container-high content-stretch flex flex-col items-end justify-center pl-[5px] pr-[3px] py-[4px] relative rounded-[18px] shrink-0">
                          <div className="overflow-clip relative shrink-0 size-[24px]">
                            <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[21.521px] left-1/2 top-1/2 w-[18px]">
                              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 21.5209">
                                <g>
                                  <path d={pricingSvgPaths.p26100f00} fill="var(--fill-0, var(--primary))" />
                                  <path d={pricingSvgPaths.pafaea00} fill="var(--fill-0, var(--primary))" />
                                  <path d={pricingSvgPaths.p30d13740} fill="var(--fill-0, var(--primary))" />
                                  <path d={pricingSvgPaths.p2803ecf0} fill="var(--fill-0, var(--primary))" />
                                  <path clipRule="evenodd" d={pricingSvgPaths.p32dd5d60} fill="var(--fill-0, var(--primary))" fillRule="evenodd" />
                                </g>
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="content-stretch flex items-center overflow-clip relative shrink-0">
                          <p className="font-['Lexend',sans-serif] font-[var(--font-weight-medium)] leading-[24px] relative shrink-0 text-primary text-[var(--text-base)] tracking-[0.15px] whitespace-nowrap text-[16px]">
                            Pricing Insight
                          </p>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="content-stretch flex flex-col items-start overflow-clip px-[12px] relative rounded-[8px] shrink-0 w-[527px]">
                        <div className="content-stretch flex flex-col gap-[16px] items-start overflow-clip relative shrink-0 w-full">
                          {/* Recommended Range */}
                          <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-full">
                            <div className="content-stretch flex flex-col font-['Lexend',sans-serif] font-[var(--font-weight-normal)] items-start overflow-clip relative shrink-0 w-full whitespace-nowrap">
                              <p className="leading-[16px] relative shrink-0 text-muted-foreground text-[var(--text-xs)] tracking-[0.4px] text-[14px] mx-[0px] my-[4px]">Recommended Range</p>
                              <p className="leading-[28px] relative shrink-0 text-foreground text-[var(--text-h4)] text-[24px] mx-[0px] my-[4px]">${rangeLow} – ${rangeHigh}</p>
                            </div>
                            {/* Progress Bar */}
                            <div className="bg-muted content-stretch flex flex-col h-[8px] items-start overflow-clip relative rounded-[9999px] shrink-0 w-[279px]">
                              <div className="h-[8px] rounded-[9999px] shrink-0" style={{ width: `${Math.round(progressPercent * 2.79)}px`, backgroundImage: "linear-gradient(89.865deg, rgb(255, 255, 255) 18.514%, rgb(101, 60, 201) 55.024%)" }} />
                            </div>
                            <div className="flex flex-col font-['Lexend',sans-serif] font-[350] justify-center leading-[0] min-w-full opacity-38 relative shrink-0 text-foreground text-[11px] w-[min-content]">
                              <p className="leading-[14px]">Based on item attributes and market data.</p>
                            </div>
                          </div>

                          {/* Generate AI Button or Insight Box */}
                          {!hasGeneratedAI && !isAIGenerated && !wasPriceAIGenerated ? (
                            <button
                              onClick={handleGenerateAIPrice}
                              className="bg-card content-stretch flex items-center gap-[8px] px-[16px] py-[10px] relative rounded-[var(--radius)] border border-border border-solid hover:bg-background transition-colors cursor-pointer"
                            >
                              <div className="overflow-clip relative shrink-0 size-[16px]">
                                <div className="absolute inset-[9.3%_9.51%_9.5%_9.3%]">
                                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.4861 19.4881">
                                    <g id="Icon">
                                      <path clipRule="evenodd" d={sparkleSvgPaths.p5911b70} fill="var(--foreground)" fillRule="evenodd" />
                                      <path clipRule="evenodd" d={sparkleSvgPaths.p2e7ca300} fill="var(--foreground)" fillRule="evenodd" />
                                      <path d={sparkleSvgPaths.p3090abf0} fill="var(--fill-0, var(--foreground))" />
                                      <path d={sparkleSvgPaths.p3d226180} fill="var(--fill-0, var(--foreground))" />
                                    </g>
                                  </svg>
                                </div>
                              </div>
                              <div className="flex flex-col font-['Lexend',sans-serif] font-[var(--font-weight-medium)] justify-center leading-[0] relative shrink-0 text-foreground text-[var(--text-sm)] tracking-[0.1px] whitespace-nowrap">
                                <p className="leading-[20px] text-[14px] px-[0px] py-[4px]">Generate AI price suggestion</p>
                              </div>
                            </button>
                          ) : (
                            <div className="bg-surface-variant content-stretch flex gap-[4px] items-start overflow-clip p-[8px] relative rounded-[8px] shrink-0">
                              <div className="content-stretch flex items-start overflow-clip relative shrink-0">
                                <p className="font-['Lexend',sans-serif] font-[350] leading-[0] relative shrink-0 text-muted-foreground text-[0px] text-[11px] whitespace-nowrap">
                                  <span className="leading-[14px]">{`Items in this category sell `}</span>
                                  <span className="font-['Lexend',sans-serif] font-[var(--font-weight-medium)] leading-[14px] text-foreground">2x faster</span>
                                  <span className="leading-[14px]">{` when priced under $${rangeHigh}. Your current price is competitive.`}</span>
                                </p>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full pl-[4px]">
                    {isGeneratingInlineSuggestion ? (
                      <div className="content-stretch flex items-center gap-[8px] relative shrink-0">
                        <div className="h-[8px] w-[8px] animate-pulse rounded-full bg-primary" />
                        <p className="font-['Lexend',sans-serif] font-[350] leading-[20px] text-[14px] tracking-[0.1px] text-muted-foreground">
                          Getting a price suggestion…
                        </p>
                      </div>
                    ) : wasPriceAIGenerated ? (
                      <p className="font-['Lexend',sans-serif] font-[350] leading-[20px] text-[14px] tracking-[0.1px] text-muted-foreground">
                        Suggested price added • Edit anytime
                      </p>
                    ) : (
                      <p className="font-['Lexend',sans-serif] font-[350] leading-[20px] text-[14px] tracking-[0.1px] text-muted-foreground">
                        Need help?{' '}
                        <button
                          type="button"
                          onClick={handleInlineAISuggestion}
                          className="inline-flex items-center gap-[4px] text-primary hover:text-primary/90 transition-colors cursor-pointer"
                        >
                          <span aria-hidden="true">✨</span>
                          <span className="underline underline-offset-[3px]">Get a price suggestion</span>
                        </button>
                      </p>
                    )}
                  </div>
                )}
              </div>

              {/* Continue Button */}
              <div className="content-stretch flex items-start justify-end relative shrink-0 w-full">
                <button
                  onClick={handleContinue}
                  className="bg-secondary content-stretch cursor-pointer flex h-[48px] items-center justify-center relative rounded-[var(--radius)] shrink-0"
                >
                  <div className="content-stretch flex flex-col items-center justify-center relative rounded-[var(--radius)] shrink-0">
                    <div className="content-stretch flex gap-[10px] items-center px-[16px] py-[10px] relative shrink-0">
                      <div className="content-stretch flex items-center justify-center px-[4px] relative shrink-0">
                        <div className="flex flex-col font-['Lexend',sans-serif] font-[var(--font-weight-medium)] justify-center leading-[0] relative shrink-0 text-primary-dim text-[var(--text-sm)] text-center tracking-[0.1px] whitespace-nowrap">
                          <p className="leading-[20px]">Continue to shipping</p>
                        </div>
                      </div>
                      <div className="overflow-clip relative shrink-0 size-[20px]">
                        <div className="absolute bottom-[8.34%] left-1/4 right-[27.73%] top-[8.33%]">
                          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.45486 16.666">
                            <path d={pricingSvgPaths.p23f63600} fill="var(--fill-0, var(--primary-dim))" />
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