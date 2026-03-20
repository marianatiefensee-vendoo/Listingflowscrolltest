import { useState, useEffect } from "react";
import svgPaths from "../../imports/svg-nl9hp3fmvu";
import conditionSvgPaths from "../../imports/svg-eidwq1eo1i";
import completedSvgPaths from "../../imports/svg-qt0lwj09d3";
import Dropdown from "./Dropdown";
import type { ItemDetails } from "../App";
import {
  COMMON_MARKETPLACE_BRAND_OPTIONS,
  COMMON_MARKETPLACE_CATEGORY_OPTIONS,
  MARKETPLACE_CATEGORY_API_SUPPORT,
} from "../data/marketplaceTaxonomy";

interface ItemDetailsContentProps {
  initialData?: ItemDetails | null;
  shouldExpand?: boolean;
  onExpandChange?: () => void;
  onContinue?: () => void;
  onDetailsChange?: (details: ItemDetails) => void;
  shouldCollapse?: boolean;
  onCollapseChange?: () => void;
  onManualExpand?: () => void;
}

export default function ItemDetailsContent({ initialData, shouldExpand, onExpandChange, onContinue, onDetailsChange, shouldCollapse, onCollapseChange, onManualExpand }: ItemDetailsContentProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [itemSpecificsExpanded, setItemSpecificsExpanded] = useState(true);
  const [hasReceivedAIData, setHasReceivedAIData] = useState(false);

  // ─── Per-field AI source tracking ───
  // "is*AIGenerated" = field currently holds AI-generated content
  // "was*AIGenerated" = field was AI-generated at some point (for "Edited" badge)
  const [isTitleAIGenerated, setIsTitleAIGenerated] = useState(false);
  const [wasTitleAIGenerated, setWasTitleAIGenerated] = useState(false);
  const [isDescriptionAIGenerated, setIsDescriptionAIGenerated] = useState(false);
  const [wasDescriptionAIGenerated, setWasDescriptionAIGenerated] = useState(false);
  const [isTagsAIGenerated, setIsTagsAIGenerated] = useState(false);
  const [wasTagsAIGenerated, setWasTagsAIGenerated] = useState(false);
  const [isBrandAIGenerated, setIsBrandAIGenerated] = useState(false);
  const [wasBrandAIGenerated, setWasBrandAIGenerated] = useState(false);
  const [isCategoryAIGenerated, setIsCategoryAIGenerated] = useState(false);
  const [wasCategoryAIGenerated, setWasCategoryAIGenerated] = useState(false);
  const [isSizeAIGenerated, setIsSizeAIGenerated] = useState(false);
  const [wasSizeAIGenerated, setWasSizeAIGenerated] = useState(false);
  const [isConditionAIGenerated, setIsConditionAIGenerated] = useState(false);
  const [wasConditionAIGenerated, setWasConditionAIGenerated] = useState(false);

  // Derived: any Item Specifics sub-field is still AI-generated
  const isAnySpecificAIGenerated = isBrandAIGenerated || isCategoryAIGenerated || isSizeAIGenerated || isConditionAIGenerated;
  const wasAnySpecificAIGenerated = wasBrandAIGenerated || wasCategoryAIGenerated || wasSizeAIGenerated || wasConditionAIGenerated;

  // Helper: compute tagState for Dropdown fields
  const getTagState = (isAI: boolean, wasAI: boolean): "ai-suggested" | "edited" | null => {
    if (isAI) return "ai-suggested";
    if (wasAI) return "edited";
    return null;
  };

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState("1");
  const [condition, setCondition] = useState("");
  const [tags, setTags] = useState("");
  const [sku, setSku] = useState("");

  // Derive completion from required fields (Title, Description, Brand, Category, Size, Condition)
  const isCompleted = !!(
    title.trim() &&
    description.trim() &&
    brand.trim() &&
    category.trim() &&
    size.trim() &&
    condition.trim()
  );

  // Track AI-added brands and categories — hydrated from sessionStorage to survive page navigations
  const [customBrands, setCustomBrands] = useState<string[]>(() => {
    try {
      const stored = sessionStorage.getItem('vendoo_custom_brands');
      return stored ? JSON.parse(stored) : [];
    } catch { return []; }
  });
  const [customCategories, setCustomCategories] = useState<string[]>(() => {
    try {
      const stored = sessionStorage.getItem('vendoo_custom_categories');
      return stored ? JSON.parse(stored) : [];
    } catch { return []; }
  });

  // Sync custom brands/categories to sessionStorage whenever they change
  useEffect(() => {
    sessionStorage.setItem('vendoo_custom_brands', JSON.stringify(customBrands));
  }, [customBrands]);
  useEffect(() => {
    sessionStorage.setItem('vendoo_custom_categories', JSON.stringify(customCategories));
  }, [customCategories]);

  // Dynamically include AI brand in the dropdown — persisted custom brands stay available
  const brandOptions = (() => {
    const merged = [...COMMON_MARKETPLACE_BRAND_OPTIONS];
    for (const cb of customBrands) {
      if (!merged.some((option) => option.value.toLowerCase() === cb.toLowerCase())) {
        merged.unshift({
          value: cb,
          label: cb,
          description: "Custom / AI-added brand",
          detail: "Searchable across crosslisting catalog",
          isAISuggested: true,
        });
      }
    }
    return merged;
  })();

  // Dynamically include AI category in the dropdown — persisted custom categories stay available
  const categoryOptions = (() => {
    const merged = [...COMMON_MARKETPLACE_CATEGORY_OPTIONS];
    for (const cc of customCategories) {
      if (!merged.some((option) => option.value.toLowerCase() === cc.toLowerCase())) {
        merged.unshift({
          value: cc,
          label: cc.split(">").pop()?.trim() || cc,
          description: "Custom / AI-added category path",
          detail: cc,
          isAISuggested: true,
        });
      }
    }
    return merged;
  })();

  const categoryApiSupportText = MARKETPLACE_CATEGORY_API_SUPPORT
    .map((entry) => `${entry.marketplace}: ${entry.status}`)
    .join(" · ");

  // AI Generation Functions
  const generateTitle = () => {
    const titles = [
      "Classic Denim Jacket - Vintage Style",
      "Premium Leather Crossbody Bag",
      "Wireless Bluetooth Headphones - Noise Cancelling",
      "Vintage Nike Air Max Sneakers",
      "Modern Minimalist Desk Lamp",
      "Hand-Knitted Wool Sweater",
    ];
    const randomTitle = titles[Math.floor(Math.random() * titles.length)];
    setTitle(randomTitle);
    setIsTitleAIGenerated(true);
    setWasTitleAIGenerated(true);
  };

  const generateDescription = () => {
    const descriptions = [
      "Beautiful vintage-style item in excellent condition. Features classic design elements and timeless appeal. Perfect for any season. Shows minimal signs of wear, maintaining its original quality and character. A must-have addition to any collection.",
      "High-quality craftsmanship with attention to detail. Made from premium materials that ensure durability and longevity. This piece combines functionality with style, making it ideal for everyday use or special occasions.",
      "Carefully curated and well-maintained. This item showcases exceptional design and practical features. Whether you're looking for something unique or a reliable everyday essential, this is the perfect choice.",
    ];
    const randomDesc = descriptions[Math.floor(Math.random() * descriptions.length)];
    setDescription(randomDesc);
    setIsDescriptionAIGenerated(true);
    setWasDescriptionAIGenerated(true);
  };

  const generateTags = () => {
    const tagSets = [
      "#vintage #style #classic #fashion #trending",
      "#premium #quality #durable #modern #elegant",
      "#unique #handmade #artisan #boutique #exclusive",
      "#comfortable #practical #everyday #versatile #timeless",
    ];
    const randomTags = tagSets[Math.floor(Math.random() * tagSets.length)];
    setTags(randomTags);
    setIsTagsAIGenerated(true);
    setWasTagsAIGenerated(true);
  };

  // Expand section when shouldExpand is true
  useEffect(() => {
    if (shouldExpand) {
      setIsExpanded(true);
      onExpandChange?.();
    }
  }, [shouldExpand, onExpandChange]);

  // Collapse section when shouldCollapse is true (another section expanded)
  useEffect(() => {
    if (shouldCollapse) {
      setIsExpanded(false);
      onCollapseChange?.();
    }
  }, [shouldCollapse, onCollapseChange]);

  // Update fields when initialData is provided from AI (only once)
  useEffect(() => {
    // Only treat as AI-generated if we have both title and description with meaningful content
    if (initialData && !hasReceivedAIData && initialData.title && initialData.description) {
      setTitle(initialData.title);
      setDescription(initialData.description);
      setCategory(initialData.category);
      setBrand(initialData.brand);
      setCondition(initialData.condition);
      
      // Use AI-generated size, tags from the Gemini API response
      setSize(initialData.size || "N/A");
      setQuantity("1");
      setTags(initialData.tags || "");
      setSku("");
      
      // Persist AI brand/category so they stay in dropdowns for the session
      if (initialData.brand && !COMMON_MARKETPLACE_BRAND_OPTIONS.some((option) => option.value.toLowerCase() === initialData.brand.toLowerCase())) {
        setCustomBrands(prev => {
          if (prev.some(b => b.toLowerCase() === initialData.brand.toLowerCase())) return prev;
          return [...prev, initialData.brand];
        });
      }
      if (initialData.category && !COMMON_MARKETPLACE_CATEGORY_OPTIONS.some((option) => option.value.toLowerCase() === initialData.category.toLowerCase())) {
        setCustomCategories(prev => {
          if (prev.some(c => c.toLowerCase() === initialData.category.toLowerCase())) return prev;
          return [...prev, initialData.category];
        });
      }

      // Mark per-field AI source flags
      setIsTitleAIGenerated(true);
      setWasTitleAIGenerated(true);
      setIsDescriptionAIGenerated(true);
      setWasDescriptionAIGenerated(true);
      if (initialData.tags) {
        setIsTagsAIGenerated(true);
        setWasTagsAIGenerated(true);
      }
      if (initialData.brand) {
        setIsBrandAIGenerated(true);
        setWasBrandAIGenerated(true);
      }
      if (initialData.category) {
        setIsCategoryAIGenerated(true);
        setWasCategoryAIGenerated(true);
      }
      if (initialData.size) {
        setIsSizeAIGenerated(true);
        setWasSizeAIGenerated(true);
      }
      if (initialData.condition) {
        setIsConditionAIGenerated(true);
        setWasConditionAIGenerated(true);
      }
      setHasReceivedAIData(true);
    }
  }, [initialData, hasReceivedAIData]);

  // Notify parent of details changes (includes size & tags for summary validation)
  useEffect(() => {
    if (title || description || category || brand || condition || size) {
      onDetailsChange?.({
        title,
        description,
        category,
        brand,
        condition,
        size,
        tags,
      });
    }
  }, [title, description, category, brand, condition, size, tags, onDetailsChange]);

  const handleContinue = () => {
    setIsExpanded(false);
    // Clear active AI flags when section is completed (was* flags remain for "Edited" tracking)
    setIsTitleAIGenerated(false);
    setIsDescriptionAIGenerated(false);
    setIsTagsAIGenerated(false);
    setIsBrandAIGenerated(false);
    setIsCategoryAIGenerated(false);
    setIsSizeAIGenerated(false);
    setIsConditionAIGenerated(false);
    onContinue?.();
  };

  const handleEdit = () => {
    setIsExpanded(true);
  };

  return (
    <div className="bg-surface-variant content-stretch flex flex-col gap-[12px] items-start relative rounded-[16px] w-full">
      <div aria-hidden="true" className="absolute border border-border border-solid inset-[-1px] pointer-events-none rounded-[17px] bg-card" />
      
      {/* Top Content */}
      <div 
        className={`bg-surface-variant content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full ${
          isExpanded ? 'pt-[24px] rounded-tl-[16px] rounded-tr-[16px]' : 'rounded-[16px]'
        }`}
      >
        {/* Unified Header */}
        <div className="relative shrink-0 w-full">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center justify-between px-[24px] py-[16px] relative w-full">
              {/* Title */}
              <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-center min-h-px min-w-px relative">
                <div className="content-stretch flex items-center relative shrink-0">
                  <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                    {/* Step Badge */}
                    {isExpanded ? (
                      <div className="bg-primary-container content-stretch flex gap-[10px] items-center relative rounded-[16px] shrink-0 size-[32px]">
                        <div aria-hidden="true" className="absolute border-primary-container border-[1.5px] border-solid inset-0 pointer-events-none rounded-[16px]" />
                        <div className="content-stretch flex flex-[1_0_0] h-full items-center justify-center min-h-px min-w-px relative">
                          <div className="flex flex-col font-['Lexend',sans-serif] font-[var(--font-weight-normal)] justify-center leading-[0] relative shrink-0 text-[var(--text-base)] text-center text-primary-container-foreground tracking-[0.5px] whitespace-nowrap">
                            <p className="leading-[24px]">2</p>
                          </div>
                        </div>
                      </div>
                    ) : isCompleted ? (
                      <div className="relative shrink-0 size-[32px]">
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                          <circle cx="16" cy="16" fill="var(--fill-0, var(--secondary))" r="15.25" stroke="var(--stroke-0, var(--secondary))" strokeWidth="1.5" />
                        </svg>
                        <div className="absolute left-[4px] overflow-clip size-[24px] top-[4px]">
                          <div className="absolute inset-[19.32%_8.33%_19.99%_8.33%]">
                            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 14.5656">
                              <path d={completedSvgPaths.p97f8e00} fill="var(--fill-0, var(--primary-dim))" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="bg-primary-container content-stretch flex gap-[10px] items-center relative rounded-[16px] shrink-0 size-[32px]">
                        <div aria-hidden="true" className="absolute border-primary-container border-[1.5px] border-solid inset-0 pointer-events-none rounded-[16px]" />
                        <div className="content-stretch flex flex-[1_0_0] h-full items-center justify-center min-h-px min-w-px relative">
                          <div className="flex flex-col font-['Lexend',sans-serif] font-[var(--font-weight-normal)] justify-center leading-[0] relative shrink-0 text-[var(--text-base)] text-center text-primary-container-foreground tracking-[0.5px] whitespace-nowrap">
                            <p className="leading-[24px]">2</p>
                          </div>
                        </div>
                      </div>
                    )}
                    <div className="content-stretch flex items-center justify-center relative shrink-0">
                      <p className={`font-['Lexend',sans-serif] font-[var(--font-weight-normal)] leading-[32px] relative shrink-0 text-[var(--text-h3)] whitespace-nowrap ${ isExpanded ? 'text-foreground' : (isCompleted ? 'text-muted-foreground' : 'text-foreground') } text-[24px]`}>Item Details</p>
                    </div>
                  </div>
                </div>
                
                {/* Summary text - only show when collapsed and completed */}
                {!isExpanded && isCompleted && (
                  <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px min-w-px relative self-stretch">
                    <p className="flex-[1_0_0] font-['Lexend',sans-serif] font-[var(--font-weight-normal)] leading-[20px] min-h-px min-w-px relative text-foreground-dim text-[var(--text-sm)] tracking-[0.25px] overflow-hidden text-ellipsis whitespace-nowrap">{title || "Untitled"}</p>
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
                      ) : isCompleted ? (
                        <div className="overflow-clip relative shrink-0 size-[24px]">
                          <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[18.183px] left-[calc(50%-0.5px)] top-[calc(50%+0.09px)] w-[19px]">
                            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 18.1834">
                              <g>
                                <path clipRule="evenodd" d={completedSvgPaths.p1e751200} fill="var(--fill-0, var(--muted-foreground))" fillRule="evenodd" />
                                <path d={completedSvgPaths.p3a455080} fill="var(--fill-0, var(--muted-foreground))" />
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
      </div>

      {/* Content */}
      {isExpanded && (
        <div className="relative rounded-[12px] shrink-0 w-full">
          <div className="flex flex-col justify-center size-full">
            <div className="content-stretch flex flex-col gap-[16px] items-start justify-center px-[24px] relative w-full">
              {/* Input Fields */}
              <div className="content-stretch flex flex-col gap-[22px] items-start py-[12px] relative shrink-0 w-full">
                {/* Title and Description */}
                <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                  {/* Title */}
                  <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
                      <div className="flex flex-col font-['Lexend',sans-serif] font-[var(--font-weight-medium)] justify-center leading-[0] relative shrink-0 text-muted-foreground text-[var(--text-base)] tracking-[0.15px] whitespace-nowrap">
                        <p className="leading-[24px]">Title</p>
                      </div>
                      {isTitleAIGenerated ? (
                        <div className="content-stretch flex items-start relative shrink-0">
                          <div className="bg-ai-tag content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 p-[4px]">
                            <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
                              <div className="overflow-clip relative shrink-0 size-[12px]">
                                <div className="absolute inset-[9.3%_9.51%_9.5%_9.3%]">
                                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.74306 9.74407">
                                    <g>
                                      <path clipRule="evenodd" d={svgPaths.p1af4ae00} fill="var(--ai-tag-foreground)" fillRule="evenodd" />
                                      <path clipRule="evenodd" d={svgPaths.peb3b600} fill="var(--ai-tag-foreground)" fillRule="evenodd" />
                                      <path d={svgPaths.p3b146f80} fill="var(--fill-0, var(--ai-tag-foreground))" />
                                      <path d={svgPaths.p342e3e00} fill="var(--fill-0, var(--ai-tag-foreground))" />
                                    </g>
                                  </svg>
                                </div>
                              </div>
                              <div className="flex flex-col font-['Lexend',sans-serif] font-[350] justify-center leading-[0] relative shrink-0 text-ai-tag-foreground text-[11px] text-center whitespace-nowrap">
                                <p className="leading-[14px]">AI generated</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : wasTitleAIGenerated ? (
                        <div className="content-stretch flex items-start relative shrink-0">
                          <div className="flex flex-col font-['Lexend',sans-serif] font-[350] justify-center leading-[0] relative shrink-0 text-edited-tag text-[11px] text-center whitespace-nowrap">
                            <p className="leading-[14px]">Edited</p>
                          </div>
                        </div>
                      ) : null}
                      <div className="content-stretch flex flex-[1_0_0] items-center justify-end min-h-px min-w-px overflow-clip relative rounded-[8px]">
                        <button 
                          onClick={generateTitle}
                          className="content-stretch flex gap-[8px] h-[32px] items-center justify-center px-[8px] py-[6px] relative shrink-0 hover:bg-primary/8 transition-colors rounded-[4px] cursor-pointer"
                        >
                          <div className="overflow-clip relative shrink-0 size-[18px]">
                            <div className="absolute inset-[11.93%_4.83%]">
                              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.2599 13.704">
                                <g>
                                  <path d={svgPaths.p2c549380} fill="var(--fill-0, var(--primary))" />
                                  <path clipRule="evenodd" d={svgPaths.p38d46180} fill="var(--fill-0, var(--primary))" fillRule="evenodd" />
                                  <path clipRule="evenodd" d={svgPaths.p545b200} fill="var(--fill-0, var(--primary))" fillRule="evenodd" />
                                </g>
                              </svg>
                            </div>
                          </div>
                          <div className="flex flex-col font-['Lexend',sans-serif] font-[var(--font-weight-medium)] justify-center leading-[0] relative shrink-0 text-primary text-[11px] text-center tracking-[0.5px] whitespace-nowrap">
                            <p className="leading-[16px]">{isTitleAIGenerated ? "Rewrite" : "Generate with AI"}</p>
                          </div>
                        </button>
                      </div>
                    </div>
                    <div className="h-[56px] relative rounded-[5px] shrink-0 w-full">
                      <div aria-hidden="true" className="absolute border border-foreground-dim border-solid inset-[-0.5px] pointer-events-none rounded-[5.5px]" />
                      <div className="content-stretch flex gap-[4px] items-start pl-[16px] py-[4px] relative size-full">
                        <div className="flex-[1_0_0] h-full min-h-px min-w-px relative">
                          <div className="content-stretch flex flex-col items-start py-[4px] relative size-full">
                            <div className="flex-[1_0_0] min-h-px min-w-px relative w-full">
                              <div className="flex flex-row items-center size-full">
                                <div className="content-stretch flex items-center py-[8px] relative size-full">
                                  <input
                                    type="text"
                                    value={title}
                                    onChange={(e) => {
                                      setTitle(e.target.value);
                                      setIsTitleAIGenerated(false);
                                    }}
                                    className="flex-[1_0_0] font-['Lexend',sans-serif] font-[var(--font-weight-normal)] h-full leading-[24px] min-h-px min-w-px relative text-foreground text-[var(--text-base)] tracking-[0.5px] bg-transparent border-none outline-none"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Description */}
                  <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
                      <div className="flex flex-col font-['Lexend',sans-serif] font-[var(--font-weight-medium)] justify-center leading-[0] relative shrink-0 text-muted-foreground text-[var(--text-base)] tracking-[0.15px] whitespace-nowrap">
                        <p className="leading-[24px]">Description</p>
                      </div>
                      {isDescriptionAIGenerated ? (
                        <div className="content-stretch flex items-start relative shrink-0">
                          <div className="bg-ai-tag content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 p-[4px]">
                            <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
                              <div className="overflow-clip relative shrink-0 size-[12px]">
                                <div className="absolute inset-[9.3%_9.51%_9.5%_9.3%]">
                                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.74306 9.74407">
                                    <g>
                                      <path clipRule="evenodd" d={svgPaths.p1af4ae00} fill="var(--ai-tag-foreground)" fillRule="evenodd" />
                                      <path clipRule="evenodd" d={svgPaths.peb3b600} fill="var(--ai-tag-foreground)" fillRule="evenodd" />
                                      <path d={svgPaths.p3b146f80} fill="var(--fill-0, var(--ai-tag-foreground))" />
                                      <path d={svgPaths.p342e3e00} fill="var(--fill-0, var(--ai-tag-foreground))" />
                                    </g>
                                  </svg>
                                </div>
                              </div>
                              <div className="flex flex-col font-['Lexend',sans-serif] font-[350] justify-center leading-[0] relative shrink-0 text-ai-tag-foreground text-[11px] text-center whitespace-nowrap">
                                <p className="leading-[14px]">AI generated</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : wasDescriptionAIGenerated ? (
                        <div className="content-stretch flex items-start relative shrink-0">
                          <div className="flex flex-col font-['Lexend',sans-serif] font-[350] justify-center leading-[0] relative shrink-0 text-edited-tag text-[11px] text-center whitespace-nowrap">
                            <p className="leading-[14px]">Edited</p>
                          </div>
                        </div>
                      ) : null}
                      <div className="content-stretch flex flex-[1_0_0] items-center justify-end min-h-px min-w-px overflow-clip relative rounded-[8px]">
                        <button 
                          onClick={generateDescription}
                          className="content-stretch flex gap-[8px] h-[32px] items-center justify-center px-[8px] py-[6px] relative shrink-0 hover:bg-primary/8 transition-colors rounded-[4px] cursor-pointer"
                        >
                          <div className="overflow-clip relative shrink-0 size-[18px]">
                            <div className="absolute inset-[11.93%_4.83%]">
                              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.2599 13.704">
                                <g>
                                  <path d={svgPaths.p2c549380} fill="var(--fill-0, var(--primary))" />
                                  <path clipRule="evenodd" d={svgPaths.p38d46180} fill="var(--fill-0, var(--primary))" fillRule="evenodd" />
                                  <path clipRule="evenodd" d={svgPaths.p545b200} fill="var(--fill-0, var(--primary))" fillRule="evenodd" />
                                </g>
                              </svg>
                            </div>
                          </div>
                          <div className="flex flex-col font-['Lexend',sans-serif] font-[var(--font-weight-medium)] justify-center leading-[0] relative shrink-0 text-primary text-[11px] text-center tracking-[0.5px] whitespace-nowrap">
                            <p className="leading-[16px]">{isDescriptionAIGenerated ? "Improve" : "Generate with AI"}</p>
                          </div>
                        </button>
                      </div>
                    </div>
                    <div className="h-[200px] relative rounded-[5px] shrink-0 w-full">
                      <div aria-hidden="true" className="absolute border border-foreground-dim border-solid inset-[-0.5px] pointer-events-none rounded-[5.5px]" />
                      <div className="content-stretch flex gap-[4px] items-start pl-[16px] py-[4px] relative size-full">
                        <div className="flex-[1_0_0] h-full min-h-px min-w-px relative">
                          <div className="content-stretch flex flex-col items-start py-[4px] relative size-full">
                            <div className="flex-[1_0_0] min-h-px min-w-px relative w-full">
                              <textarea
                                value={description}
                                onChange={(e) => {
                                  setDescription(e.target.value);
                                  setIsDescriptionAIGenerated(false);
                                }}
                                placeholder="Describe your item..."
                                className="w-full h-full font-['Lexend',sans-serif] font-[var(--font-weight-normal)] leading-[24px] text-foreground text-[var(--text-base)] tracking-[0.5px] bg-transparent border-none outline-none resize-none py-[8px] placeholder:text-[var(--muted-foreground)]"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Item Specifics */}
                <div className="content-stretch flex flex-col gap-[4px] items-start py-[4px] relative rounded-[8px] shrink-0 w-full">
                  <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full">
                    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative">
                      <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
                        <div className="content-stretch flex items-center relative shrink-0">
                          <p className="font-['Lexend',sans-serif] font-[var(--font-weight-medium)] leading-[24px] relative shrink-0 text-foreground text-[var(--text-base)] tracking-[0.15px] whitespace-nowrap">Item Specifics</p>
                        </div>
                        {isAnySpecificAIGenerated ? (
                          <div className="content-stretch flex items-start relative shrink-0">
                            <div className="bg-ai-tag content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 p-[4px]">
                              <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
                                <div className="overflow-clip relative shrink-0 size-[12px]">
                                  <div className="absolute inset-[9.3%_9.51%_9.5%_9.3%]">
                                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.74306 9.74407">
                                      <g>
                                        <path clipRule="evenodd" d={svgPaths.p1af4ae00} fill="var(--ai-tag-foreground)" fillRule="evenodd" />
                                        <path clipRule="evenodd" d={svgPaths.peb3b600} fill="var(--ai-tag-foreground)" fillRule="evenodd" />
                                        <path d={svgPaths.p3b146f80} fill="var(--fill-0, var(--ai-tag-foreground))" />
                                        <path d={svgPaths.p342e3e00} fill="var(--fill-0, var(--ai-tag-foreground))" />
                                      </g>
                                    </svg>
                                  </div>
                                </div>
                                <div className="flex flex-col font-['Lexend',sans-serif] font-[350] justify-center leading-[0] relative shrink-0 text-ai-tag-foreground text-[11px] text-center whitespace-nowrap">
                                  <p className="leading-[14px]">AI generated</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        ) : wasAnySpecificAIGenerated ? (
                          <div className="content-stretch flex items-start relative shrink-0">
                            <div className="flex flex-col font-['Lexend',sans-serif] font-[350] justify-center leading-[0] relative shrink-0 text-edited-tag text-[11px] text-center whitespace-nowrap">
                              <p className="leading-[14px]">Edited</p>
                            </div>
                          </div>
                        ) : null}
                      </div>
                    </div>
                    <div className="content-stretch flex items-start justify-end relative shrink-0">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setItemSpecificsExpanded(!itemSpecificsExpanded);
                        }}
                        className="block cursor-pointer relative shrink-0 size-[48px]"
                      >
                        <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col items-center justify-center left-[calc(50%-0.5px)] overflow-clip rounded-[100px] top-1/2 w-[40px]">
                          <div className="content-stretch flex h-[40px] items-center justify-center relative shrink-0 w-full">
                            <div className="overflow-clip relative shrink-0 size-[24px]">
                              <div className={`absolute inset-[26.36%_8.34%_26.36%_8.33%] ${itemSpecificsExpanded ? '-scale-y-100' : ''}`}>
                                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9993 11.3458">
                                  <path d={svgPaths.p28797e80} fill="var(--fill-0, var(--muted-foreground))" />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </button>
                    </div>
                  </div>
                  <div className="h-[2px] relative shrink-0 w-full">
                    <div className="absolute bottom-0 left-0 right-0 top-full">
                      <div className="absolute inset-[-1px_0_0_0]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 712 1">
                          <line stroke="var(--stroke-0, var(--neutral-container))" strokeLinecap="square" x1="0.5" x2="711.5" y1="0.5" y2="0.5" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Item Specifics Container */}
                {itemSpecificsExpanded && (
                  <div 
                    className="content-stretch flex flex-col gap-[22px] items-start relative shrink-0 w-full"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {/* Two Column Layout */}
                    <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full">
                      {/* Column 1 */}
                      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px min-w-px relative">
                        {/* Brand */}
                        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                          <Dropdown
                            label="Brand"
                            value={brand}
                            richOptions={brandOptions}
                            onChange={(value) => {
                              setBrand(value);
                              setIsBrandAIGenerated(false);
                            }}
                            placeholder="Search or select brand..."
                            tagState={getTagState(isBrandAIGenerated, wasBrandAIGenerated)}
                            searchable
                            searchPlaceholder="Search brands used across top marketplaces..."
                            noResultsText="No matching brands found. Try a broader brand name or check your spelling."
                            supportingText="Search the most common resale brands across eBay, Mercari, Depop, and Poshmark."
                          />
                        </div>
                        {/* Size */}
                        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                            <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
                              <div className="flex flex-col font-['Lexend',sans-serif] font-[var(--font-weight-medium)] justify-center leading-[0] relative shrink-0 text-muted-foreground text-[var(--text-base)] tracking-[0.15px] whitespace-nowrap">
                                <p className="leading-[24px]">Size</p>
                              </div>
                              {isSizeAIGenerated ? (
                                <div className="content-stretch flex items-start relative shrink-0">
                                  <div className="bg-ai-tag content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 p-[4px]">
                                    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
                                      <div className="overflow-clip relative shrink-0 size-[12px]">
                                        <div className="absolute inset-[9.3%_9.51%_9.5%_9.3%]">
                                          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.74306 9.74407">
                                            <g>
                                              <path clipRule="evenodd" d={svgPaths.p1af4ae00} fill="var(--ai-tag-foreground)" fillRule="evenodd" />
                                              <path clipRule="evenodd" d={svgPaths.peb3b600} fill="var(--ai-tag-foreground)" fillRule="evenodd" />
                                              <path d={svgPaths.p3b146f80} fill="var(--fill-0, var(--ai-tag-foreground))" />
                                              <path d={svgPaths.p342e3e00} fill="var(--fill-0, var(--ai-tag-foreground))" />
                                            </g>
                                          </svg>
                                        </div>
                                      </div>
                                      <div className="flex flex-col font-['Lexend',sans-serif] font-[350] justify-center leading-[0] relative shrink-0 text-ai-tag-foreground text-[11px] text-center whitespace-nowrap">
                                        <p className="leading-[14px]">AI Suggested</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              ) : wasSizeAIGenerated ? (
                                <div className="content-stretch flex items-start relative shrink-0">
                                  <div className="flex flex-col font-['Lexend',sans-serif] font-[350] justify-center leading-[0] relative shrink-0 text-edited-tag text-[11px] text-center whitespace-nowrap">
                                    <p className="leading-[14px]">Edited</p>
                                  </div>
                                </div>
                              ) : null}
                            </div>
                            <div className="h-[56px] relative rounded-[5px] shrink-0 w-full">
                              <div aria-hidden="true" className="absolute border border-foreground-dim border-solid inset-[-0.5px] pointer-events-none rounded-[5.5px]" />
                              <div className="content-stretch flex gap-[4px] items-start pl-[16px] py-[4px] relative size-full">
                                <div className="content-stretch flex flex-[1_0_0] flex-col h-[48px] items-start justify-center min-h-px min-w-px py-[4px] relative">
                                  <div className="content-stretch flex items-center relative shrink-0">
                                    <input
                                      type="text"
                                      value={size}
                                      onChange={(e) => {
                                        setSize(e.target.value);
                                        setIsSizeAIGenerated(false);
                                      }}
                                      className="flex flex-col font-['Lexend',sans-serif] font-[var(--font-weight-normal)] justify-center leading-[0] relative shrink-0 text-foreground text-[var(--text-base)] tracking-[0.5px] whitespace-nowrap bg-transparent border-none outline-none"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="relative shrink-0 w-full">
                            <div className="content-stretch flex items-start pt-[4px] px-[16px] relative w-full">
                              <p className="flex-[1_0_0] font-['Lexend',sans-serif] font-[350] leading-[14px] min-h-px min-w-px relative text-muted-foreground text-[11px] text-left invisible">Placeholder</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Column 2 */}
                      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px min-w-px relative">
                        {/* Category */}
                        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                          <Dropdown
                            label="Category"
                            value={category}
                            richOptions={categoryOptions}
                            onChange={(value) => {
                              setCategory(value);
                              setIsCategoryAIGenerated(false);
                            }}
                            placeholder="Search or select category..."
                            tagState={getTagState(isCategoryAIGenerated, wasCategoryAIGenerated)}
                            searchable
                            searchPlaceholder="Select a category"
                            noResultsText="No matching category path found. Try a parent category, subcategory, or leaf term."
                            supportingText={category ? `${category} · ${categoryApiSupportText}` : categoryApiSupportText}
                          />
                          <div className="relative shrink-0 w-full">
                            <div className="content-stretch flex items-start pt-[4px] px-[16px] relative w-full">
                              <p className={`flex-[1_0_0] font-['Lexend',sans-serif] font-[350] leading-[14px] min-h-px min-w-px relative text-muted-foreground text-[11px] text-left ${!category ? 'invisible' : ''}`}>
                                {category ? 'Choose the closest leaf path used by marketplace taxonomy trees.' : 'Placeholder'}
                              </p>
                            </div>
                          </div>
                        </div>
                        {/* Quantity */}
                        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                          <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
                            <div className="flex flex-col font-['Lexend',sans-serif] font-[var(--font-weight-medium)] justify-center leading-[0] relative shrink-0 text-muted-foreground text-[var(--text-base)] tracking-[0.15px] whitespace-nowrap">
                              <p className="leading-[24px]">Quantity</p>
                            </div>
                          </div>
                          <div className="h-[56px] relative rounded-[5px] shrink-0 w-full">
                            <div aria-hidden="true" className="absolute border border-foreground-dim border-solid inset-[-0.5px] pointer-events-none rounded-[5.5px]" />
                            <div className="content-stretch flex items-center pl-[16px] pr-[4px] py-[4px] relative size-full">
                              {/* Decrement Button */}
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  const currentQty = parseInt(quantity) || 0;
                                  if (currentQty > 0) {
                                    setQuantity((currentQty - 1).toString());
                                  }
                                }}
                                className="content-stretch flex items-center justify-center relative shrink-0 size-[48px] rounded-[100px] hover:bg-neutral-container transition-colors"
                              >
                                <div className="flex items-center justify-center size-[40px]">
                                  <svg className="size-[20px]" fill="none" viewBox="0 0 20 20">
                                    <path d="M4 10H16" stroke="var(--muted-foreground)" strokeWidth="2" strokeLinecap="round" />
                                  </svg>
                                </div>
                              </button>

                              {/* Input */}
                              <div className="content-stretch flex flex-[1_0_0] flex-col h-[48px] items-center justify-center min-h-px min-w-px py-[4px] relative">
                                <div className="content-stretch flex items-center justify-center relative w-full">
                                  <input
                                    type="number"
                                    min="0"
                                    value={quantity}
                                    onChange={(e) => {
                                      const value = e.target.value;
                                      if (value === '' || parseInt(value) >= 0) {
                                        setQuantity(value);
                                      }
                                    }}
                                    className="w-[60px] font-['Lexend',sans-serif] font-[var(--font-weight-normal)] text-center leading-[24px] text-foreground text-[var(--text-base)] tracking-[0.5px] bg-transparent border-none outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                  />
                                </div>
                              </div>

                              {/* Increment Button */}
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  const currentQty = parseInt(quantity) || 0;
                                  setQuantity((currentQty + 1).toString());
                                }}
                                className="content-stretch flex items-center justify-center relative shrink-0 size-[48px] rounded-[100px] hover:bg-neutral-container transition-colors"
                              >
                                <div className="flex items-center justify-center size-[40px]">
                                  <svg className="size-[20px]" fill="none" viewBox="0 0 20 20">
                                    <path d="M10 4V16M4 10H16" stroke="var(--muted-foreground)" strokeWidth="2" strokeLinecap="round" />
                                  </svg>
                                </div>
                              </button>
                            </div>
                          </div>
                          <div className="relative shrink-0 w-full">
                            <div className="content-stretch flex items-start pt-[4px] px-[16px] relative w-full">
                              <p className="flex-[1_0_0] font-['Lexend',sans-serif] font-[350] leading-[14px] min-h-px min-w-px relative text-muted-foreground text-[11px] text-left invisible">Placeholder</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Condition */}
                    <div className="content-stretch flex flex-col gap-[16px] items-start justify-center py-[2.4px] relative shrink-0">
                      <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[327px]">
                        <div className="flex flex-col font-['Lexend',sans-serif] font-[var(--font-weight-medium)] justify-center leading-[0] relative shrink-0 text-muted-foreground text-[var(--text-base)] tracking-[0.15px] whitespace-nowrap">
                          <p className="leading-[24px]">Condition</p>
                        </div>
                        {isConditionAIGenerated ? (
                          <div className="content-stretch flex items-start relative shrink-0">
                            <div className="bg-ai-tag content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 p-[4px]">
                              <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
                                <div className="overflow-clip relative shrink-0 size-[12px]">
                                  <div className="absolute inset-[9.3%_9.51%_9.5%_9.3%]">
                                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.74306 9.74407">
                                      <g>
                                        <path clipRule="evenodd" d={svgPaths.p1af4ae00} fill="var(--ai-tag-foreground)" fillRule="evenodd" />
                                        <path clipRule="evenodd" d={svgPaths.peb3b600} fill="var(--ai-tag-foreground)" fillRule="evenodd" />
                                        <path d={svgPaths.p3b146f80} fill="var(--fill-0, var(--ai-tag-foreground))" />
                                        <path d={svgPaths.p342e3e00} fill="var(--fill-0, var(--ai-tag-foreground))" />
                                      </g>
                                    </svg>
                                  </div>
                                </div>
                                <div className="flex flex-col font-['Lexend',sans-serif] font-[350] justify-center leading-[0] relative shrink-0 text-ai-tag-foreground text-[11px] text-center whitespace-nowrap">
                                  <p className="leading-[14px]">AI Suggested</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        ) : wasConditionAIGenerated ? (
                          <div className="content-stretch flex items-start relative shrink-0">
                            <div className="flex flex-col font-['Lexend',sans-serif] font-[350] justify-center leading-[0] relative shrink-0 text-edited-tag text-[11px] text-center whitespace-nowrap">
                              <p className="leading-[14px]">Edited</p>
                            </div>
                          </div>
                        ) : null}
                      </div>
                      <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
                        {/* Fair */}
                        <label 
                          className="content-stretch flex items-center gap-[12px] cursor-pointer relative shrink-0 w-full"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <input
                            type="radio"
                            name="condition"
                            value="Fair"
                            checked={condition === "Fair"}
                            onChange={(e) => {
                              e.stopPropagation();
                              setCondition("Fair");
                              setIsConditionAIGenerated(false);
                            }}
                            className="sr-only"
                          />
                          <div className={`flex items-center justify-center shrink-0 size-[20px] rounded-full border-2 transition-colors ${
                            condition === "Fair" 
                              ? "border-primary bg-primary" 
                              : "border-foreground-dim bg-card"
                          }`}>
                            {condition === "Fair" && (
                              <div className="bg-primary-foreground rounded-full size-[8px]" />
                            )}
                          </div>
                          <div className="content-stretch flex gap-[9.6px] items-center relative shrink-0">
                            <div className="overflow-clip relative shrink-0 size-[24px]">
                              <div className="absolute inset-[4.16%]">
                                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.0014 22.0014">
                                  <g>
                                    <path d={conditionSvgPaths.p268d1300} fill="var(--fill-0, var(--foreground))" />
                                    <path d={conditionSvgPaths.pfb9efc0} fill="var(--fill-0, var(--foreground))" />
                                    <path clipRule="evenodd" d={conditionSvgPaths.p3a79fb00} fill="var(--fill-0, var(--foreground))" fillRule="evenodd" />
                                  </g>
                                </svg>
                              </div>
                            </div>
                            <div className="flex flex-col font-['Lexend',sans-serif] font-[var(--font-weight-medium)] justify-center leading-[0] relative shrink-0 text-foreground text-[var(--text-sm)] tracking-[0.1px] whitespace-nowrap">
                              <p className="leading-[20px]">Fair</p>
                            </div>
                          </div>
                        </label>

                        {/* Good */}
                        <label 
                          className="content-stretch flex items-center gap-[12px] cursor-pointer relative shrink-0 w-full"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <input
                            type="radio"
                            name="condition"
                            value="Good"
                            checked={condition === "Good"}
                            onChange={(e) => {
                              e.stopPropagation();
                              setCondition("Good");
                              setIsConditionAIGenerated(false);
                            }}
                            className="sr-only"
                          />
                          <div className={`flex items-center justify-center shrink-0 size-[20px] rounded-full border-2 transition-colors ${
                            condition === "Good" 
                              ? "border-primary bg-primary" 
                              : "border-foreground-dim bg-card"
                          }`}>
                            {condition === "Good" && (
                              <div className="bg-primary-foreground rounded-full size-[8px]" />
                            )}
                          </div>
                          <div className="content-stretch flex gap-[9.6px] items-center relative shrink-0">
                            <div className="overflow-clip relative shrink-0 size-[24px]">
                              <div className="absolute flex inset-[4.17%_5.49%_4.17%_4.17%] items-center justify-center">
                                <div className="-scale-y-100 flex-none h-[24.2px] w-[23.851px]">
                                  <div className="relative size-full">
                                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.6823 22.0001">
                                      <path clipRule="evenodd" d={conditionSvgPaths.p3a697100} fill="var(--fill-0, var(--foreground))" fillRule="evenodd" />
                                    </svg>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col font-['Lexend',sans-serif] font-[var(--font-weight-medium)] justify-center leading-[0] relative shrink-0 text-foreground text-[var(--text-sm)] tracking-[0.1px] whitespace-nowrap">
                              <p className="leading-[20px]">Good</p>
                            </div>
                          </div>
                        </label>

                        {/* Excellent */}
                        <label 
                          className="content-stretch flex items-center gap-[12px] cursor-pointer relative shrink-0 w-full"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <input
                            type="radio"
                            name="condition"
                            value="Excellent"
                            checked={condition === "Excellent"}
                            onChange={(e) => {
                              e.stopPropagation();
                              setCondition("Excellent");
                              setIsConditionAIGenerated(false);
                            }}
                            className="sr-only"
                          />
                          <div className={`flex items-center justify-center shrink-0 size-[20px] rounded-full border-2 transition-colors ${
                            condition === "Excellent" 
                              ? "border-primary bg-primary" 
                              : "border-foreground-dim bg-card"
                          }`}>
                            {condition === "Excellent" && (
                              <div className="bg-primary-foreground rounded-full size-[8px]" />
                            )}
                          </div>
                          <div className="content-stretch flex gap-[9.6px] items-center relative shrink-0">
                            <div className="overflow-clip relative shrink-0 size-[24px]">
                              <div className="absolute inset-[12.5%_9.72%_9.72%_12.5%]">
                                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.6669 18.6662">
                                  <g>
                                    <path d={conditionSvgPaths.p21a13400} fill="var(--fill-0, var(--foreground))" />
                                    <path d={conditionSvgPaths.p229eb810} fill="var(--fill-0, var(--foreground))" />
                                  </g>
                                </svg>
                              </div>
                            </div>
                            <div className="flex flex-col font-['Lexend',sans-serif] font-[var(--font-weight-medium)] justify-center leading-[0] relative shrink-0 text-foreground text-[var(--text-sm)] tracking-[0.1px] whitespace-nowrap">
                              <p className="leading-[20px]">Excellent</p>
                            </div>
                          </div>
                        </label>

                        {/* Like New */}
                        <label 
                          className="content-stretch flex items-center gap-[12px] cursor-pointer relative shrink-0 w-full"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <input
                            type="radio"
                            name="condition"
                            value="Like New"
                            checked={condition === "Like New"}
                            onChange={(e) => {
                              e.stopPropagation();
                              setCondition("Like New");
                              setIsConditionAIGenerated(false);
                            }}
                            className="sr-only"
                          />
                          <div className={`flex items-center justify-center shrink-0 size-[20px] rounded-full border-2 transition-colors ${
                            condition === "Like New" 
                              ? "border-primary bg-primary" 
                              : "border-foreground-dim bg-card"
                          }`}>
                            {condition === "Like New" && (
                              <div className="bg-primary-foreground rounded-full size-[8px]" />
                            )}
                          </div>
                          <div className="content-stretch flex gap-[9.6px] items-center relative shrink-0">
                            <div className="overflow-clip relative shrink-0 size-[24px]">
                              <div className="absolute inset-[4.17%_4.17%_8.25%_4.17%]">
                                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.9996 21.02">
                                  <path clipRule="evenodd" d={conditionSvgPaths.p2193a200} fill="var(--fill-0, var(--foreground))" fillRule="evenodd" />
                                </svg>
                              </div>
                            </div>
                            <div className="flex flex-col font-['Lexend',sans-serif] font-[var(--font-weight-medium)] justify-center leading-[0] relative shrink-0 text-foreground text-[var(--text-sm)] tracking-[0.1px] whitespace-nowrap">
                              <p className="leading-[20px]">Like New</p>
                            </div>
                          </div>
                        </label>

                        {/* Brand New */}
                        <label 
                          className="content-stretch flex items-center gap-[12px] cursor-pointer relative shrink-0 w-full"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <input
                            type="radio"
                            name="condition"
                            value="Brand New"
                            checked={condition === "Brand New"}
                            onChange={(e) => {
                              e.stopPropagation();
                              setCondition("Brand New");
                              setIsConditionAIGenerated(false);
                            }}
                            className="sr-only"
                          />
                          <div className={`flex items-center justify-center shrink-0 size-[20px] rounded-full border-2 transition-colors ${
                            condition === "Brand New" 
                              ? "border-primary bg-primary" 
                              : "border-foreground-dim bg-card"
                          }`}>
                            {condition === "Brand New" && (
                              <div className="bg-primary-foreground rounded-full size-[8px]" />
                            )}
                          </div>
                          <div className="content-stretch flex gap-[9.6px] items-center relative shrink-0">
                            <div className="overflow-clip relative shrink-0 size-[24px]">
                              <div className="absolute inset-[4.17%_7.62%_7.64%_4.17%]">
                                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.1719 21.167">
                                  <g>
                                    <path d={conditionSvgPaths.p3d4b8a00} fill="var(--fill-0, var(--foreground))" />
                                    <path clipRule="evenodd" d={conditionSvgPaths.p2bc62f00} fill="var(--fill-0, var(--foreground))" fillRule="evenodd" />
                                  </g>
                                </svg>
                              </div>
                            </div>
                            <div className="flex flex-col font-['Lexend',sans-serif] font-[var(--font-weight-medium)] justify-center leading-[0] relative shrink-0 text-foreground text-[var(--text-sm)] tracking-[0.1px] whitespace-nowrap">
                              <p className="leading-[20px]">Brand New</p>
                            </div>
                          </div>
                        </label>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="content-stretch flex flex-col items-start relative rounded-[4px] shrink-0 w-full">
                      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                        <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
                          <div className="flex flex-col font-['Lexend',sans-serif] font-[var(--font-weight-medium)] justify-center leading-[0] relative shrink-0 text-muted-foreground text-[var(--text-base)] tracking-[0.15px] whitespace-nowrap">
                            <p className="leading-[24px]">Tags (optional)</p>
                          </div>
                          {isTagsAIGenerated ? (
                            <div className="content-stretch flex items-start relative shrink-0">
                              <div className="bg-ai-tag content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 p-[4px]">
                                <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
                                  <div className="overflow-clip relative shrink-0 size-[12px]">
                                    <div className="absolute inset-[9.3%_9.51%_9.5%_9.3%]">
                                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.74306 9.74407">
                                        <g>
                                          <path clipRule="evenodd" d={svgPaths.p1af4ae00} fill="var(--ai-tag-foreground)" fillRule="evenodd" />
                                          <path clipRule="evenodd" d={svgPaths.peb3b600} fill="var(--ai-tag-foreground)" fillRule="evenodd" />
                                          <path d={svgPaths.p3b146f80} fill="var(--fill-0, var(--ai-tag-foreground))" />
                                          <path d={svgPaths.p342e3e00} fill="var(--fill-0, var(--ai-tag-foreground))" />
                                        </g>
                                      </svg>
                                    </div>
                                  </div>
                                  <div className="flex flex-col font-['Lexend',sans-serif] font-[350] justify-center leading-[0] relative shrink-0 text-ai-tag-foreground text-[11px] text-center whitespace-nowrap">
                                    <p className="leading-[14px]">AI generated</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ) : wasTagsAIGenerated ? (
                            <div className="content-stretch flex items-start relative shrink-0">
                              <div className="flex flex-col font-['Lexend',sans-serif] font-[350] justify-center leading-[0] relative shrink-0 text-edited-tag text-[11px] text-center whitespace-nowrap">
                                <p className="leading-[14px]">Edited</p>
                              </div>
                            </div>
                          ) : null}
                          <div className="content-stretch flex flex-[1_0_0] items-center justify-end min-h-px min-w-px overflow-clip relative rounded-[8px]">
                            <button 
                              onClick={generateTags}
                              className="content-stretch flex gap-[8px] h-[32px] items-center justify-center px-[8px] py-[6px] relative shrink-0 hover:bg-primary/8 transition-colors rounded-[4px] cursor-pointer"
                            >
                              <div className="relative shrink-0 size-[18px]">
                                <div className="absolute inset-[2.08%_6.25%_0_8.33%]">
                                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.375 17.625">
                                    <g>
                                      <path d={svgPaths.p14f40700} fill="var(--fill-0, var(--primary))" />
                                      <path d={svgPaths.p39dc9d00} fill="var(--fill-0, var(--primary))" />
                                      <path d={svgPaths.pbf96a00} fill="var(--fill-0, var(--primary))" />
                                      <path d={svgPaths.p146de400} fill="var(--fill-0, var(--primary))" />
                                    </g>
                                  </svg>
                                </div>
                              </div>
                              <div className="flex flex-col font-['Lexend',sans-serif] font-[var(--font-weight-medium)] justify-center leading-[0] relative shrink-0 text-primary text-[11px] text-center tracking-[0.5px] whitespace-nowrap">
                                <p className="leading-[16px]">{isTagsAIGenerated ? "Improve" : "Generate with AI"}</p>
                              </div>
                            </button>
                          </div>
                        </div>
                        <div className="h-[56px] relative rounded-[5px] shrink-0 w-full">
                          <div aria-hidden="true" className="absolute border border-foreground-dim border-solid inset-[-0.5px] pointer-events-none rounded-[5.5px]" />
                          <div className="content-stretch flex gap-[4px] items-start pl-[16px] py-[4px] relative size-full">
                            <div className="content-stretch flex flex-[1_0_0] flex-col min-h-[48px] items-start justify-center min-w-px py-[4px] relative">
                              <div className="content-stretch flex items-center relative w-full">
                                <input
                                  type="text"
                                  value={tags}
                                  onChange={(e) => {
                                    setTags(e.target.value);
                                    setIsTagsAIGenerated(false);
                                  }}
                                  className="w-full h-full font-['Lexend',sans-serif] font-[var(--font-weight-normal)] leading-[24px] text-foreground text-[var(--text-base)] tracking-[0.5px] bg-transparent border-none outline-none overflow-visible"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex items-start pt-[4px] px-[16px] relative shrink-0">
                        <p className="font-['Lexend',sans-serif] font-[350] leading-[14px] relative shrink-0 text-muted-foreground text-[11px] whitespace-nowrap">Add tags to improve search visibility.</p>
                      </div>
                    </div>

                    {/* SKU */}
                    <div className="content-stretch flex flex-col items-start relative rounded-[4px] shrink-0 w-full">
                      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                        <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
                          <div className="flex flex-col font-['Lexend',sans-serif] font-[var(--font-weight-medium)] justify-center leading-[0] relative shrink-0 text-muted-foreground text-[var(--text-base)] tracking-[0.15px] whitespace-nowrap">
                            <p className="leading-[24px]">SKU (optional)</p>
                          </div>
                        </div>
                        <div className="h-[56px] relative rounded-[5px] shrink-0 w-full">
                          <div aria-hidden="true" className="absolute border border-foreground-dim border-solid inset-[-0.5px] pointer-events-none rounded-[5.5px]" />
                          <div className="content-stretch flex gap-[4px] items-start pl-[16px] py-[4px] relative size-full">
                            <div className="content-stretch flex flex-[1_0_0] flex-col h-[48px] items-start justify-center min-h-px min-w-px py-[4px] relative">
                              <div className="content-stretch flex items-center relative shrink-0">
                                <input
                                  type="text"
                                  value={sku}
                                  onChange={(e) => {
                                    setSku(e.target.value);
                                  }}
                                  className="flex flex-col font-['Lexend',sans-serif] font-[var(--font-weight-normal)] justify-center leading-[0] relative shrink-0 text-foreground text-[var(--text-base)] tracking-[0.5px] whitespace-nowrap bg-transparent border-none outline-none"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Actions */}
              <div className="content-stretch flex gap-[12px] items-center justify-end pb-[24px] relative shrink-0 w-full">
                <div className="bg-secondary content-stretch flex h-[48px] items-center justify-center relative rounded-[var(--radius)] shrink-0">
                  <div className="content-stretch flex flex-col items-center justify-center relative rounded-[5px] shrink-0">
                    <button 
                      onClick={handleContinue}
                      className="content-stretch flex gap-[10px] items-center px-[16px] py-[10px] relative shrink-0"
                    >
                      <div className="content-stretch flex items-center justify-center px-[4px] relative shrink-0">
                        <div className="flex flex-col font-['Lexend',sans-serif] font-[var(--font-weight-medium)] justify-center leading-[0] relative shrink-0 text-primary-dim text-[var(--text-sm)] text-center tracking-[0.1px] whitespace-nowrap">
                          <p className="leading-[20px]">Continue to Marketplaces</p>
                        </div>
                      </div>
                      <div className="overflow-clip relative shrink-0 size-[20px]">
                        <div className="absolute bottom-[8.34%] left-1/4 right-[27.73%] top-[8.33%]">
                          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.45486 16.666">
                            <path d={svgPaths.p23f63600} fill="var(--fill-0, var(--primary-dim))" />
                          </svg>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
