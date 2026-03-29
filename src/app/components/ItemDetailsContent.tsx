import { useState, useEffect, type ReactNode } from "react";
import svgPaths from "../../imports/svg-nl9hp3fmvu";
import conditionSvgPaths from "../../imports/svg-eidwq1eo1i";
import completedSvgPaths from "../../imports/svg-qt0lwj09d3";
import Dropdown from "./Dropdown";
import type { ItemDetails } from "../App";
import {
  COMMON_MARKETPLACE_BRAND_OPTIONS,
  COMMON_MARKETPLACE_CATEGORY_OPTIONS
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

type AIConfidenceLevel = "High" | "Medium" | "Low";

function AIInsightCard({
  confidence,
  basedOn,
  reason,
  actions,
}: {
  confidence: AIConfidenceLevel;
  basedOn: string;
  reason: string;
  actions?: ReactNode;
}) {
  const confidenceStyles: Record<AIConfidenceLevel, string> = {
    High: "bg-emerald-100 text-emerald-800",
    Medium: "bg-amber-100 text-amber-800",
    Low: "bg-rose-100 text-rose-800",
  };

  return (
    <div className="w-full rounded-[16px] border border-primary/15 bg-[linear-gradient(180deg,rgba(104,58,223,0.08)_0%,rgba(104,58,223,0.02)_100%)] p-4">
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div className="space-y-2">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.35px] text-primary">
              Generated based on your photos
            </span>
            <span className={`inline-flex items-center rounded-full px-3 py-1 text-[11px] font-medium ${confidenceStyles[confidence]}`}>
              Confidence: {confidence}
            </span>
          </div>
          <p className="font-['Lexend',sans-serif] text-[14px] leading-[21px] text-foreground">
            {reason}
          </p>
          <p className="font-['Lexend',sans-serif] text-[12px] leading-[18px] text-muted-foreground">
            {basedOn} · You can edit everything. AI suggests a starting point, but you stay in control.
          </p>
        </div>
        {actions ? <div className="flex flex-wrap gap-2">{actions}</div> : null}
      </div>
    </div>
  );
}

function AIActionButton({ children, onClick }: { children: ReactNode; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex h-[36px] items-center justify-center rounded-[10px] border border-border bg-background px-3 text-[12px] font-medium text-foreground transition-colors hover:bg-accent"
    >
      {children}
    </button>
  );
}

function ManualTextField({
  label,
  value,
  onChange,
  helperText,
  type = "text",
  inputMode,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  helperText?: string;
  type?: string;
  inputMode?: React.InputHTMLAttributes<HTMLInputElement>["inputMode"];
}) {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
        <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
          <div className="flex flex-col font-['Lexend',sans-serif] font-[var(--font-weight-medium)] justify-center leading-[0] relative shrink-0 text-muted-foreground text-[var(--text-base)] tracking-[0.15px] whitespace-nowrap">
            <p className="leading-[24px]">{label}</p>
          </div>
        </div>
        <div className="h-[56px] relative rounded-[5px] shrink-0 w-full">
          <div aria-hidden="true" className="absolute inset-[-0.5px] rounded-[5.5px] border border-foreground-dim border-solid pointer-events-none" />
          <div className="content-stretch flex gap-[4px] items-start pl-[16px] py-[4px] relative size-full">
            <div className="content-stretch flex flex-[1_0_0] flex-col h-[48px] items-start justify-center min-h-px min-w-px py-[4px] relative">
              <div className="content-stretch flex items-center relative w-full">
                <input
                  type={type}
                  inputMode={inputMode}
                  value={value}
                  onChange={(event) => onChange(event.target.value)}
                  className="w-full bg-transparent border-none outline-none font-['Lexend',sans-serif] font-[var(--font-weight-normal)] leading-[24px] text-foreground text-[var(--text-base)] tracking-[0.5px] [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex items-start pt-[4px] px-[16px] relative shrink-0 w-full">
        <p className={`font-['Lexend',sans-serif] font-[350] leading-[14px] relative shrink-0 text-muted-foreground text-[11px] ${helperText ? "whitespace-nowrap" : "invisible"}`}>
          {helperText ?? "Placeholder"}
        </p>
      </div>
    </div>
  );
}

function ConditionSegmentIcon({
  condition,
  active,
}: {
  condition: string;
  active: boolean;
}) {
  const iconColor = active ? "#503F86" : "#1D1A24";

  if (condition === "Brand New") {
    return (
      <div className="overflow-clip relative shrink-0 size-[20px]">
        <div className="absolute inset-[4.17%_7.62%_7.64%_4.17%]">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.1719 21.167">
            <g>
              <path d={conditionSvgPaths.p3d4b8a00} fill={iconColor} />
              <path clipRule="evenodd" d={conditionSvgPaths.p2bc62f00} fill={iconColor} fillRule="evenodd" />
            </g>
          </svg>
        </div>
      </div>
    );
  }

  if (condition === "Like New") {
    return (
      <div className="overflow-clip relative shrink-0 size-[20px]">
        <div className="absolute inset-[4.17%_4.17%_8.25%_4.17%]">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.9996 21.02">
            <path clipRule="evenodd" d={conditionSvgPaths.p2193a200} fill={iconColor} fillRule="evenodd" />
          </svg>
        </div>
      </div>
    );
  }

  if (condition === "Excellent") {
    return (
      <div className="overflow-clip relative shrink-0 size-[20px]">
        <div className="absolute inset-[12.5%_9.72%_9.72%_12.5%]">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.6669 18.6662">
            <g>
              <path d={conditionSvgPaths.p21a13400} fill={iconColor} />
              <path d={conditionSvgPaths.p229eb810} fill={iconColor} />
            </g>
          </svg>
        </div>
      </div>
    );
  }

  if (condition === "Good") {
    return (
      <div className="overflow-clip relative shrink-0 size-[20px]">
        <div className="absolute flex inset-[4.17%_5.49%_4.17%_4.17%] items-center justify-center">
          <div className="-scale-y-100 flex-none h-[20.167px] w-[19.875px]">
            <div className="relative size-full">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.6823 22.0001">
                <path clipRule="evenodd" d={conditionSvgPaths.p3a697100} fill={iconColor} fillRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-clip relative shrink-0 size-[20px]">
      <div className="absolute inset-[4.17%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.0014 22.0014">
          <g>
            <path d={conditionSvgPaths.p268d1300} fill={iconColor} />
            <path d={conditionSvgPaths.pfb9efc0} fill={iconColor} />
            <path clipRule="evenodd" d={conditionSvgPaths.p3a79fb00} fill={iconColor} fillRule="evenodd" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function ConditionSegmentButton({
  label,
  selected,
  onSelect,
}: {
  label: string;
  selected: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={`content-stretch flex items-center justify-center relative shrink-0 ${
        selected ? "rounded-[16px] bg-[#C3B0FF]" : "bg-white"
      }`}
    >
      <div
        className={`content-stretch flex flex-col items-center justify-center relative shrink-0 ${
          selected ? "rounded-[6px]" : "rounded-[6px] border border-foreground-dim border-solid"
        }`}
      >
        <div className="content-stretch flex gap-[4px] items-center px-[19.2px] py-[12px] relative shrink-0">
          <ConditionSegmentIcon active={selected} condition={label} />
          <div className="content-stretch flex items-center justify-center relative shrink-0">
            <div className={`flex flex-col font-['Lexend',sans-serif] font-[var(--font-weight-medium)] justify-center leading-[0] relative shrink-0 text-[var(--text-sm)] text-center tracking-[0.1px] whitespace-nowrap ${selected ? "text-[#503F86]" : "text-foreground"}`}>
              <p className="leading-[20px]">{label}</p>
            </div>
          </div>
        </div>
      </div>
    </button>
  );
}

export default function ItemDetailsContent({ initialData, shouldExpand, onExpandChange, onContinue, onDetailsChange, shouldCollapse, onCollapseChange, onManualExpand }: ItemDetailsContentProps) {
  const [isExpanded, setIsExpanded] = useState(false);
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

  const aiConfidence: AIConfidenceLevel = hasReceivedAIData ? "High" : title || description ? "Medium" : "Low";

  const requiredFields = [
    { label: "Title", value: title },
    { label: "Description", value: description },
    { label: "Brand", value: brand },
    { label: "Category", value: category },
    { label: "Size", value: size },
    { label: "Condition", value: condition },
  ];
  const missingRequiredFields = requiredFields
    .filter((field) => !field.value.trim())
    .map((field) => field.label);
  const completedRequiredCount =
    requiredFields.length - missingRequiredFields.length;

  // Derive completion from required fields (Title, Description, Brand, Category, Size, Condition)
  const isCompleted = missingRequiredFields.length === 0;
  const completionLabel = isCompleted
    ? "Ready to reuse"
    : `${completedRequiredCount}/${requiredFields.length} required fields ready`;
  const missingFieldsLabel = missingRequiredFields.length
    ? `Add before continuing: ${missingRequiredFields.join(", ")}`
    : "Your shared listing details are ready to reuse across marketplaces.";

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
          isAISuggested: true,
        });
      }
    }
    return merged;
  })();


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

  const regenerateTitle = () => {
    generateTitle();
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

  const improveDescription = () => {
    if (!description.trim()) {
      generateDescription();
      return;
    }

    const improvedDescription = `${description.trim()} ${description.trim().endswith(".") ? "" : "."} Includes the key details spotted in your photos so buyers know what to expect.`.trim();
    setDescription(improvedDescription);
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

  const handleHeaderClick = () => {
    if (!isExpanded) {
      setIsExpanded(true);
      onManualExpand?.();
    }
  };

  return (
    <div className="bg-[#F2EBF9] content-stretch flex flex-col items-start overflow-clip relative rounded-[12px] w-full">
      <div aria-hidden="true" className="absolute border border-primary border-solid inset-[-1px] pointer-events-none rounded-[13px]" />
      
      {/* Top Content */}
      <div 
        className={`bg-[#F5EEFC] content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full ${
          isExpanded ? 'rounded-tl-[12px] rounded-tr-[12px]' : 'rounded-[12px]'
        }`}
      >
        <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-px bg-[#CBC3D7]" />
        {/* Unified Header */}
        <div
          className={`relative shrink-0 w-full ${!isExpanded ? 'cursor-pointer' : ''}`}
          onClick={handleHeaderClick}
        >
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center justify-between px-[24px] py-[16px] relative w-full">
              {/* Title */}
              <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-center min-h-px min-w-px relative">
                <div className="content-stretch flex items-start relative shrink-0">
                  <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                    <div className="bg-secondary content-stretch flex gap-[10px] items-center relative rounded-[16px] shrink-0 size-[32px]">
                      <div className="content-stretch flex flex-[1_0_0] h-full items-center justify-center min-h-px min-w-px relative">
                        <div className="flex flex-col font-['Lexend',sans-serif] font-[var(--font-weight-normal)] justify-center leading-[0] relative shrink-0 text-[var(--text-base)] text-center text-white tracking-[0.5px] whitespace-nowrap">
                          <p className="leading-[24px]">3</p>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex items-center justify-center relative shrink-0">
                      <p className="font-['Lexend',sans-serif] font-[var(--font-weight-medium)] leading-[32px] relative shrink-0 text-[24px] text-muted-foreground whitespace-nowrap">
                        Item Details
                      </p>
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
      </div>


      {/* Content */}
      {isExpanded && (
        <div className="relative shrink-0 w-full bg-white">
          <div className="flex flex-col justify-center size-full">
            <div className="content-stretch flex flex-col gap-[22px] items-start justify-center p-[24px] relative w-full">
              {/* Input Fields */}
              <div className="content-stretch flex flex-col gap-[22px] items-start relative shrink-0 w-full">
                {(hasReceivedAIData || isTitleAIGenerated || isDescriptionAIGenerated) && (
                  <AIInsightCard
                    confidence={aiConfidence}
                    basedOn="Reasoning: visible style, category clues, and item details detected in the uploaded photos"
                    reason="This draft is generated based on your photos so you can start faster, then adjust wording, attributes, or structure inline."
                    actions={
                      <>
                        <AIActionButton onClick={regenerateTitle}>Not accurate? Regenerate title</AIActionButton>
                        <AIActionButton onClick={improveDescription}>Improve description</AIActionButton>
                      </>
                    }
                  />
                )}
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
                                <p className="leading-[14px]">AI draft</p>
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
                            <p className="leading-[16px]">{isTitleAIGenerated ? "Not accurate? Regenerate" : "Draft with AI"}</p>
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
                                <p className="leading-[14px]">AI draft</p>
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
                            <p className="leading-[16px]">{isDescriptionAIGenerated ? "Improve description" : "Draft with AI"}</p>
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
                                placeholder="Describe what buyers should know: fit, color, material, flaws, and what is included."
                                className="w-full h-full font-['Lexend',sans-serif] font-[var(--font-weight-normal)] leading-[24px] text-foreground text-[var(--text-base)] tracking-[0.5px] bg-transparent border-none outline-none resize-none py-[8px] placeholder:text-[var(--muted-foreground)]"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div 
                  className="content-stretch flex flex-col gap-[22px] items-start relative shrink-0 w-full"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full">
                    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px min-w-px relative">
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                        <Dropdown
                          label="Category"
                          value={category}
                          richOptions={categoryOptions}
                          onChange={(value) => {
                            setCategory(value);
                            setIsCategoryAIGenerated(false);
                          }}
                          placeholder="Search categories to place this item correctly"
                          tagState={getTagState(isCategoryAIGenerated, wasCategoryAIGenerated)}
                          searchable
                          searchPlaceholder="Search categories..."
                          noResultsText="No category match found. Try a broader category path or the closest fit."
                        />
                      </div>
                      <ManualTextField
                        helperText="*Quantity limited  for Mercari"
                        inputMode="numeric"
                        label="Quantity"
                        type="number"
                        value={quantity}
                        onChange={(value) => {
                          if (value === "" || parseInt(value, 10) >= 0) {
                            setQuantity(value);
                          }
                        }}
                      />
                    </div>

                    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px min-w-px relative">
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                        <Dropdown
                          label="Brand"
                          value={brand}
                          richOptions={brandOptions}
                          onChange={(value) => {
                            setBrand(value);
                            setIsBrandAIGenerated(false);
                          }}
                          placeholder="Search brands or add the best match"
                          tagState={getTagState(isBrandAIGenerated, wasBrandAIGenerated)}
                          searchable
                          searchPlaceholder="Search brands..."
                          noResultsText="No brand match found. Try a broader brand name or add the closest match."
                        />
                      </div>
                      <ManualTextField
                        label="Size"
                        value={size}
                        onChange={(value) => {
                          setSize(value);
                          setIsSizeAIGenerated(false);
                        }}
                      />
                    </div>
                  </div>

                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center py-[2.4px] relative shrink-0 w-full">
                      <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full">
                        <div className="flex flex-col font-['Lexend',sans-serif] font-[var(--font-weight-medium)] justify-center leading-[0] relative shrink-0 text-muted-foreground text-[var(--text-base)] tracking-[0.15px] whitespace-nowrap">
                          <p className="leading-[24px]">Label</p>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-wrap gap-[2px] items-start relative shrink-0 w-full">
                        {["Brand New", "Like New", "Excellent", "Good", "Fair"].map((option) => (
                          <ConditionSegmentButton
                            key={option}
                            label={option}
                            selected={condition === option}
                            onSelect={() => {
                              setCondition(option);
                              setIsConditionAIGenerated(false);
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="content-stretch flex flex-col items-start relative rounded-[4px] shrink-0 w-full">
                    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                      <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
                        <div className="flex flex-col font-['Lexend',sans-serif] font-[var(--font-weight-medium)] justify-center leading-[0] relative shrink-0 text-muted-foreground text-[var(--text-base)] tracking-[0.15px] whitespace-nowrap">
                          <p className="leading-[24px]">Tags (optional*)</p>
                        </div>
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
                              <p className="leading-[16px]">Improve</p>
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
                      <p className="font-['Lexend',sans-serif] font-[350] leading-[14px] relative shrink-0 text-muted-foreground text-[11px] whitespace-nowrap">
                        *Required for Depop. Add tags to improve search visibility.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="content-stretch flex flex-wrap gap-[12px] items-center justify-between pb-[24px] relative shrink-0 w-full">
                <p className="font-['Lexend',sans-serif] text-[12px] leading-[18px] text-muted-foreground">
                  {isCompleted
                    ? 'Ready to reuse'
                    : 'Finish the required fields.'}
                </p>
                <div className="bg-secondary content-stretch flex h-[48px] items-center justify-center relative rounded-[var(--radius)] shrink-0">
                  <div className="content-stretch flex flex-col items-center justify-center relative rounded-[5px] shrink-0">
                    <button 
                      onClick={handleContinue}
                      className="content-stretch flex gap-[10px] items-center px-[16px] py-[10px] relative shrink-0"
                    >
                      <div className="content-stretch flex items-center justify-center px-[4px] relative shrink-0">
                        <div className="flex flex-col font-['Lexend',sans-serif] font-[var(--font-weight-medium)] justify-center leading-[0] relative shrink-0 text-primary-dim text-[var(--text-sm)] text-center tracking-[0.1px] whitespace-nowrap">
                          <p className="leading-[20px]">Choose marketplaces</p>
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
