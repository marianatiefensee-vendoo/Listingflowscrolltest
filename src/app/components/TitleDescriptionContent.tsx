import { useEffect, useState } from "react";
import svgPaths from "../../imports/svg-nl9hp3fmvu";
import type { ItemDetails } from "../App";

interface TitleDescriptionContentProps {
  initialData?: ItemDetails | null;
  shouldExpand?: boolean;
  onExpandChange?: () => void;
  onContinue?: () => void;
  onDetailsChange?: (details: Partial<ItemDetails>) => void;
  shouldCollapse?: boolean;
  onCollapseChange?: () => void;
  onManualExpand?: () => void;
  isGeneratedFromPhotos?: boolean;
}

const TITLE_SUGGESTIONS = [
  "Vintage 90s Knit Sweater - Pastel Purple",
  "Classic Denim Jacket - Vintage Style",
  "Premium Leather Crossbody Bag",
  "Wireless Bluetooth Headphones - Noise Cancelling",
  "Modern Minimalist Desk Lamp",
  "Hand-Knitted Wool Sweater",
];

const DESCRIPTION_SUGGESTIONS = [
  "Soft pastel purple knit sweater with a vintage 90s look. Wool blend, great condition, size medium. Cozy everyday layer for fall and winter.",
  "Beautiful vintage-style piece in excellent condition. Features a timeless silhouette and everyday wearability with minimal signs of use.",
  "High-quality item with strong visual appeal and practical use. A polished listing description helps buyers understand fit, feel, and condition quickly.",
];

function AIFieldTag() {
  return (
    <div className="bg-ai-tag content-stretch flex items-center justify-center rounded-[4px] px-[4px] py-[4px]">
      <div className="content-stretch flex items-center gap-[4px]">
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
        <div className="flex flex-col justify-center font-['Lexend',sans-serif] text-[11px] leading-[14px] text-ai-tag-foreground whitespace-nowrap">
          <p>AI generated</p>
        </div>
      </div>
    </div>
  );
}

function AIAction({
  label,
  onClick,
}: {
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="content-stretch flex h-[32px] items-center justify-center gap-[8px] rounded-[4px] px-[8px] py-[6px] transition-colors hover:bg-primary/8"
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
      <div className="flex flex-col justify-center font-['Lexend',sans-serif] text-[11px] font-[var(--font-weight-medium)] leading-[16px] tracking-[0.5px] text-primary whitespace-nowrap">
        <p>{label}</p>
      </div>
    </button>
  );
}

export default function TitleDescriptionContent({
  initialData,
  shouldExpand,
  onExpandChange,
  onContinue,
  onDetailsChange,
  shouldCollapse,
  onCollapseChange,
  onManualExpand,
  isGeneratedFromPhotos = false,
}: TitleDescriptionContentProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isTitleAIGenerated, setIsTitleAIGenerated] = useState(false);
  const [isDescriptionAIGenerated, setIsDescriptionAIGenerated] = useState(false);
  const [hasHydratedAIState, setHasHydratedAIState] = useState(false);

  const title = initialData?.title ?? "";
  const description = initialData?.description ?? "";
  const isComplete = title.trim().length > 0 && description.trim().length > 0;

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

  useEffect(() => {
    if (!title && !description) {
      setIsTitleAIGenerated(false);
      setIsDescriptionAIGenerated(false);
      setHasHydratedAIState(false);
      return;
    }

    if (
      isGeneratedFromPhotos &&
      !hasHydratedAIState &&
      title.trim() &&
      description.trim()
    ) {
      setIsTitleAIGenerated(true);
      setIsDescriptionAIGenerated(true);
      setHasHydratedAIState(true);
    }
  }, [description, hasHydratedAIState, isGeneratedFromPhotos, title]);

  const handleHeaderClick = () => {
    if (!isExpanded) {
      setIsExpanded(true);
      onManualExpand?.();
    }
  };

  const handleToggleExpand = () => {
    if (!isExpanded) {
      setIsExpanded(true);
      onManualExpand?.();
      return;
    }

    setIsExpanded(false);
    if (isComplete) {
      onContinue?.();
    }
  };

  const generateTitle = () => {
    const nextTitle =
      TITLE_SUGGESTIONS[Math.floor(Math.random() * TITLE_SUGGESTIONS.length)];
    onDetailsChange?.({ title: nextTitle });
    setIsTitleAIGenerated(true);
  };

  const generateDescription = () => {
    const nextDescription =
      DESCRIPTION_SUGGESTIONS[
        Math.floor(Math.random() * DESCRIPTION_SUGGESTIONS.length)
      ];
    onDetailsChange?.({ description: nextDescription });
    setIsDescriptionAIGenerated(true);
  };

  return (
    <div className="bg-surface-container overflow-hidden rounded-[12px] border border-primary">
      <div
        className={`bg-surface-variant ${!isExpanded ? "cursor-pointer" : ""}`}
        onClick={handleHeaderClick}
      >
        <div className="flex items-center justify-between px-[24px] py-[16px]">
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-[8px]">
              <div className="relative flex size-[32px] items-center justify-center rounded-[16px] bg-primary-container">
                <div aria-hidden="true" className="absolute inset-0 rounded-[16px] border-[1.5px] border-primary-container" />
                <p className="font-['Lexend',sans-serif] text-[16px] leading-[24px] tracking-[0.5px] text-primary-container-foreground">
                  2
                </p>
              </div>
              <p className="font-['Lexend',sans-serif] text-[24px] leading-[32px] text-foreground">
                Title &amp; Description
              </p>
            </div>
            <p className="mt-[8px] font-['Lexend',sans-serif] text-[14px] leading-[20px] tracking-[0.25px] text-muted-foreground">
              Applies to all marketplaces
            </p>
          </div>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              handleToggleExpand();
            }}
            className="relative shrink-0 size-[48px]"
            aria-label={isExpanded ? "Collapse title and description" : "Expand title and description"}
          >
            <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%-0.5px)] top-1/2 flex w-[40px] items-center justify-center overflow-clip rounded-[100px]">
              <div className="flex h-[40px] w-full items-center justify-center">
                <div className="overflow-clip relative size-[24px]">
                  <div className={`absolute inset-[26.36%_8.34%_26.36%_8.33%] ${isExpanded ? "-scale-y-100" : ""}`}>
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

      {isExpanded && (
        <div className="border-t border-border bg-card px-[24px] py-[12px]">
          <div className="flex flex-col gap-[22px]">
            <div className="flex flex-col gap-[8px]">
              <div className="flex items-center gap-[4px]">
                <div className="flex flex-col justify-center font-['Lexend',sans-serif] text-[16px] font-[var(--font-weight-medium)] leading-[24px] tracking-[0.15px] text-muted-foreground whitespace-nowrap">
                  <p>Title</p>
                </div>
                {isTitleAIGenerated && <AIFieldTag />}
                <div className="min-w-0 flex-1" />
                <AIAction
                  label={title.trim() ? "Improve with AI" : "Generate with AI"}
                  onClick={generateTitle}
                />
              </div>

              <div className="relative h-[56px] w-full rounded-[5px]">
                <div aria-hidden="true" className="absolute inset-[-0.5px] rounded-[5.5px] border border-foreground-dim pointer-events-none" />
                <div className="flex h-full items-start gap-[4px] pl-[16px] py-[4px]">
                  <div className="min-w-0 flex-1 py-[4px]">
                    <div className="flex h-full items-center py-[8px]">
                      <input
                        type="text"
                        value={title}
                        onChange={(event) => {
                          onDetailsChange?.({ title: event.target.value });
                          setIsTitleAIGenerated(false);
                        }}
                        className="h-full min-w-0 flex-1 border-none bg-transparent font-['Lexend',sans-serif] text-[16px] leading-[24px] tracking-[0.5px] text-foreground outline-none"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-[8px]">
              <div className="flex items-center gap-[4px]">
                <div className="flex flex-col justify-center font-['Lexend',sans-serif] text-[16px] font-[var(--font-weight-medium)] leading-[24px] tracking-[0.15px] text-muted-foreground whitespace-nowrap">
                  <p>Description</p>
                </div>
                {isDescriptionAIGenerated && <AIFieldTag />}
                <div className="min-w-0 flex-1" />
                <AIAction
                  label={description.trim() ? "Improve with AI" : "Generate with AI"}
                  onClick={generateDescription}
                />
              </div>

              <div className="relative h-[200px] w-full rounded-[5px]">
                <div aria-hidden="true" className="absolute inset-[-0.5px] rounded-[5.5px] border border-foreground-dim pointer-events-none" />
                <div className="flex h-full items-start gap-[4px] pl-[16px] py-[4px]">
                  <div className="min-w-0 flex-1 py-[4px]">
                    <textarea
                      value={description}
                      onChange={(event) => {
                        onDetailsChange?.({ description: event.target.value });
                        setIsDescriptionAIGenerated(false);
                      }}
                      className="h-full w-full resize-none border-none bg-transparent py-[8px] font-['Lexend',sans-serif] text-[16px] leading-[24px] tracking-[0.5px] text-foreground outline-none"
                    />
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
