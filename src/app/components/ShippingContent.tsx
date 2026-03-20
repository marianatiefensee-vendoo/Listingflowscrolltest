import { useState, useEffect, useRef } from "react";
import svgPaths from "../../imports/svg-towfc7zrfc";
import shippingSvgPaths from "../../imports/svg-wf0w3hea8h";
import collapsedSvgPaths from "../../imports/svg-il4iibzw7";
import Dropdown from "./Dropdown";
import type { RichOption } from "./Dropdown";
import { analyzeShippingSize } from "../../utils/geminiApi";
import type { ShippingSuggestion } from "../../utils/geminiApi";

// Shipping size tiers with example items and weight guidance
const SHIPPING_TIERS: RichOption[] = [
  {
    value: "default",
    label: "Shipping Default",
    description: "Use your preset shipping policy from listing settings",
  },
  {
    value: "xs",
    label: "Extra Small",
    description: "Jewelry, accessories, phone cases",
    detail: "Under 4 oz",
  },
  {
    value: "sm",
    label: "Small",
    description: "T-shirts, swimwear, small gadgets",
    detail: "Around 4 to 8 oz",
  },
  {
    value: "md",
    label: "Medium",
    description: "Jeans, books, sweaters",
    detail: "Around 1 lb",
  },
  {
    value: "lg",
    label: "Large",
    description: "Shoes, hoodies, small appliances",
    detail: "Around 2 lb",
  },
  {
    value: "xl",
    label: "Extra Large",
    description: "Bundles, coats, large items",
    detail: "Around 2 to 10 lb",
  },
];

// Map tier values to display-friendly collapsed summary labels
const TIER_SUMMARY_LABELS: Record<string, string> = {
  default: "Shipping Default",
  xs: "Extra Small — Under 4 oz",
  sm: "Small — 4 to 8 oz",
  md: "Medium — Around 1 lb",
  lg: "Large — Around 2 lb",
  xl: "Extra Large — 2 to 10 lb",
};

interface ShippingContentProps {
  shouldExpand?: boolean;
  onExpandChange?: () => void;
  onContinue?: () => void;
  isAIGenerated?: boolean;
  shouldCollapse?: boolean;
  onCollapseChange?: () => void;
  onManualExpand?: () => void;
  /** Photos uploaded by the user — triggers standalone Gemini shipping analysis */
  uploadedPhotos?: string[];
  /** Callback to report shipping method changes to parent */
  onShippingMethodChange?: (method: string) => void;
}

export default function ShippingContent({ shouldExpand, onExpandChange, onContinue, isAIGenerated = false, shouldCollapse, onCollapseChange, onManualExpand, uploadedPhotos = [], onShippingMethodChange }: ShippingContentProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [shippingMethod, setShippingMethod] = useState("");
  const [isEdited, setIsEdited] = useState(false);
  const [initialShippingMethod, setInitialShippingMethod] = useState("");

  // Derive completion from required input: shipping option must be selected
  const hasCompleted = shippingMethod !== "";

  // Standalone Gemini shipping AI state
  const [aiSuggestion, setAiSuggestion] = useState<ShippingSuggestion | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const hasAnalyzedRef = useRef<string>(""); // Track which photo set we've analyzed

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

  // Standalone Gemini shipping analysis — runs as soon as photos exist, independently from full AI generation
  useEffect(() => {
    if (uploadedPhotos.length === 0) {
      // No photos — clear any previous suggestion
      setAiSuggestion(null);
      hasAnalyzedRef.current = "";
      return;
    }

    // Create a fingerprint of the current photo set to avoid redundant calls
    const photoFingerprint = uploadedPhotos[0]?.substring(0, 100) || "";
    if (hasAnalyzedRef.current === photoFingerprint) {
      return; // Already analyzed this photo set
    }

    const runAnalysis = async () => {
      setIsAnalyzing(true);
      hasAnalyzedRef.current = photoFingerprint;

      try {
        console.log("📦 Shipping: Running standalone Gemini analysis for shipping size...");
        const suggestion = await analyzeShippingSize(uploadedPhotos[0]);

        if (suggestion) {
          setAiSuggestion(suggestion);

          // If confidence is high or medium, auto-preselect the recommendation
          // Only preselect if the user hasn't manually selected something yet
          if (suggestion.confidence !== "low" && !shippingMethod && !isEdited) {
            setShippingMethod(suggestion.tier);
            setInitialShippingMethod(suggestion.tier);
            onShippingMethodChange?.(suggestion.tier);
          } else if (suggestion.confidence === "low") {
            // Low confidence — suggest but don't preselect, default to "default"
            if (!shippingMethod && !isEdited) {
              setShippingMethod("default");
              setInitialShippingMethod("default");
              onShippingMethodChange?.("default");
            }
          }
        } else {
          // Gemini failed — fallback: dropdown works as manual selector
          console.warn("📦 Shipping AI: No suggestion returned, falling back to manual selection");
          setAiSuggestion(null);
        }
      } catch (error) {
        console.error("📦 Shipping AI: Analysis failed", error);
        setAiSuggestion(null);
      } finally {
        setIsAnalyzing(false);
      }
    };

    runAnalysis();
  }, [uploadedPhotos]); // Only depends on photos — independent from isAIGenerated

  const handleShippingMethodChange = (value: string) => {
    setShippingMethod(value);
    // Mark as edited if the value is different from the AI suggestion
    if (initialShippingMethod && value !== initialShippingMethod) {
      setIsEdited(true);
    } else {
      setIsEdited(false);
    }
    // Report shipping method to parent
    onShippingMethodChange?.(value);
  };

  const handleContinue = () => {
    setIsExpanded(false);
    onContinue?.();
  };

  const handleAddPreset = () => {
    // In a real app, this would open a dialog to create a new shipping preset
    console.log("Add shipping preset clicked");
  };

  // Determine tag state based on whether Gemini has provided a suggestion
  const hasPhotos = uploadedPhotos.length > 0;
  const hasAiSuggestion = !!aiSuggestion && aiSuggestion.confidence !== "low";

  const getTagState = (): "ai-suggested" | "edited" | null => {
    // No photos = no AI tag at all
    if (!hasPhotos) return null;
    // Still analyzing = no tag yet
    if (isAnalyzing) return null;
    // User manually changed from AI suggestion = "edited"
    if (isEdited && hasAiSuggestion) return "edited";
    // AI has a suggestion = show "AI Suggested"
    if (hasAiSuggestion) return "ai-suggested";
    // Gemini didn't return a confident suggestion
    return null;
  };

  // The tier value that Gemini recommends (for dropdown highlight)
  const aiSuggestedTierValue = hasAiSuggestion ? aiSuggestion!.tier : undefined;

  return (
    <div className="bg-[var(--muted)] content-stretch flex flex-col items-start relative rounded-[var(--radius-xl)] w-full">
      <div aria-hidden="true" className={`absolute border border-[var(--border)] border-solid inset-[-1px] pointer-events-none rounded-[17px] ${isExpanded ? 'shadow-[0px_1px_2px_0px_rgba(0,0,0,0.3),0px_1px_3px_0px_rgba(0,0,0,0.15)]' : ''} bg-[var(--card)]`} />
      
      {/* Title Step */}
      <div 
        className={`bg-[var(--muted)] content-stretch flex flex-col items-start relative shrink-0 w-full z-[1] ${
          isExpanded ? 'rounded-tl-[var(--radius-xl)] rounded-tr-[var(--radius-xl)]' : 'rounded-[var(--radius-xl)]'
        }`}
      >
        <div className="relative shrink-0 w-full">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center justify-between px-[24px] py-[16px] relative w-full">
              {/* Title */}
              <div className="content-stretch flex flex-1 gap-[16px] items-center relative min-w-0">
                <div className="content-stretch flex items-center relative shrink-0">
                <div className="content-stretch flex items-center relative shrink-0">
                  <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                    {/* Step Badge */}
                    {isExpanded ? (
                      <div className="bg-primary-container content-stretch flex gap-[10px] items-center relative rounded-[16px] shrink-0 size-[32px]">
                        <div aria-hidden="true" className="absolute border-primary-container border-[1.5px] border-solid inset-0 pointer-events-none rounded-[16px]" />
                        <div className="content-stretch flex flex-[1_0_0] h-full items-center justify-center min-h-px min-w-px relative">
                          <div className="flex flex-col font-['Lexend',sans-serif] font-[var(--font-weight-normal)] justify-center leading-[0] relative shrink-0 text-[var(--text-base)] text-center text-primary-container-foreground tracking-[0.5px] whitespace-nowrap">
                            <p className="leading-[24px]">5</p>
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
                            <p className="leading-[24px]">5</p>
                          </div>
                        </div>
                      </div>
                    )}
                    <div className="content-stretch flex items-center justify-center relative shrink-0">
                      <p className={`font-['Lexend',sans-serif] font-[var(--font-weight-normal)] leading-[32px] relative shrink-0 text-[var(--text-h3)] whitespace-nowrap ${ isExpanded ? 'text-foreground' : (hasCompleted ? 'text-muted-foreground' : 'text-foreground') } text-[24px]`}>Shipping</p>
                    </div>
                  </div>
                </div>
                </div>

                {/* Summary text - Only show when collapsed and completed */}
                {!isExpanded && hasCompleted && shippingMethod && (
                  <div className="flex-1 min-w-0 flex items-center">
                    
                  </div>
                )}
              </div>

              {/* Actions */}
              <button
                onClick={() => {
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

        {/* Divider */}
        {isExpanded && (
          <div className="h-[2px] relative shrink-0 w-full">
            <div className="absolute bottom-0 left-0 right-0 top-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 768 1">
                  <line stroke="var(--stroke-0, var(--border))" strokeLinecap="square" x1="0.5" x2="767.5" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      {isExpanded && (
        <div className="relative shrink-0 w-full">
          <div className="overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col gap-[32px] items-start p-[24px] relative w-full">
              {/* Shipping Options */}
              <div className="content-stretch flex items-center relative shrink-0 w-full">
                {/* Shipping Options Dropdown */}
                <div className="w-[327px]">
                  <Dropdown
                    label="Shipping Options"
                    value={shippingMethod}
                    richOptions={SHIPPING_TIERS}
                    onChange={handleShippingMethodChange}
                    placeholder="Shipping Default"
                    supportingText="Set shipping from your preset policy, or use the AI suggestion based on your item."
                    showAddPreset={true}
                    onAddPreset={handleAddPreset}
                    tagState={getTagState()}
                    aiSuggestedValue={aiSuggestedTierValue}
                  />
                  {/* Analyzing indicator */}
                  {isAnalyzing && (
                    <div className="flex items-center gap-[6px] mt-[8px] px-[16px]">
                      <div className="size-[12px] rounded-full border-2 border-[var(--primary)] border-t-transparent animate-spin" />
                      <p className="font-['Lexend',sans-serif] font-[350] text-[var(--muted-foreground)] text-[11px] leading-[14px] tracking-[0.2px]">
                        Analyzing photos for shipping size...
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Button Frame */}
              <div className="content-stretch flex items-start justify-end relative shrink-0 w-full">
                <div className="content-stretch flex h-[48px] items-center justify-center relative shrink-0">
                  <button
                    onClick={handleContinue}
                    className="bg-[var(--primary)] content-stretch cursor-pointer flex flex-col h-full items-center justify-center relative rounded-[var(--radius)] shrink-0"
                  >
                    <div className="content-stretch flex gap-[10px] items-center px-[16px] py-[10px] relative rounded-[var(--radius)] shrink-0">
                      <div className="content-stretch flex items-center justify-center px-[4px] relative shrink-0">
                        <div className="flex flex-col font-['Lexend',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[var(--text-sm)] text-center text-[var(--primary-foreground)] tracking-[0.1px] whitespace-nowrap">
                          <p className="leading-[20px] text-primary-foreground">Continue to Publish</p>
                        </div>
                      </div>
                      <div className="overflow-clip relative shrink-0 size-[20px]">
                        <div className="absolute bottom-[8.34%] left-1/4 right-[27.73%] top-[8.33%]">
                          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.45486 16.666">
                            <path d={shippingSvgPaths.p23f63600} fill="var(--fill-0, white)" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}