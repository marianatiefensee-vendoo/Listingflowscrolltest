import { useEffect, useMemo, useRef, useState } from "react";
import {
  EBAY_LIKE_CATEGORY_TREE,
  flattenCategoryTree,
  type MarketplaceCategoryNode,
} from "../data/marketplaceTaxonomy";

type TagState = "ai-suggested" | "edited" | null;

interface CategoryPickerProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  searchPlaceholder?: string;
  tagState?: TagState;
  suggestedPaths?: string[];
}

const allLeafPaths = flattenCategoryTree(EBAY_LIKE_CATEGORY_TREE);

const findBranch = (
  nodes: MarketplaceCategoryNode[],
  labels: string[],
): MarketplaceCategoryNode[] => {
  let currentNodes = nodes;

  for (const label of labels) {
    const match = currentNodes.find((node) => node.label === label);
    if (!match?.children?.length) {
      return currentNodes;
    }
    currentNodes = match.children;
  }

  return currentNodes;
};

export default function CategoryPicker({
  label,
  value,
  onChange,
  placeholder = "Select a category",
  searchPlaceholder = "Search categories",
  tagState = null,
  suggestedPaths = [],
}: CategoryPickerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [navigationPath, setNavigationPath] = useState<string[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setSearchQuery("");
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isOpen]);

  const normalizedQuery = searchQuery.trim().toLowerCase();
  const filteredPaths = useMemo(() => {
    if (!normalizedQuery) return [];
    return allLeafPaths.filter((option) =>
      [option.value, option.label, option.detail]
        .filter(Boolean)
        .some((field) => field!.toLowerCase().includes(normalizedQuery)),
    );
  }, [normalizedQuery]);

  const visibleNodes = useMemo(
    () => findBranch(EBAY_LIKE_CATEGORY_TREE, navigationPath),
    [navigationPath],
  );

  const visibleSuggestions = useMemo(() => {
    const suggestionSet = new Set(suggestedPaths);
    return allLeafPaths.filter((option) => suggestionSet.has(option.value)).slice(0, 3);
  }, [suggestedPaths]);

  const handleLeafSelect = (path: string) => {
    onChange(path);
    setIsOpen(false);
    setSearchQuery("");
  };

  const renderTag = () => {
    if (tagState === "ai-suggested") {
      return (
        <div className="content-stretch flex items-start relative shrink-0">
          <div className="bg-ai-tag content-stretch flex items-center justify-center px-[4px] relative rounded-[4px] shrink-0">
            <div className="flex flex-col font-['Lexend',sans-serif] font-[350] justify-center leading-[0] relative shrink-0 text-ai-tag-foreground text-[11px] text-center whitespace-nowrap">
              <p className="leading-[14px]">AI Suggested</p>
            </div>
          </div>
        </div>
      );
    }

    if (tagState === "edited") {
      return (
        <div className="content-stretch flex items-start relative shrink-0">
          <div className="flex flex-col font-['Lexend',sans-serif] font-[350] justify-center leading-[0] relative shrink-0 text-edited-tag text-[11px] text-center whitespace-nowrap">
            <p className="leading-[14px]">Edited</p>
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="relative w-full" ref={containerRef}>
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
        <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
          <div className="flex flex-col font-['Lexend',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[var(--muted-foreground)] text-[var(--text-base)] tracking-[0.15px] whitespace-nowrap">
            <p className="leading-[24px]">{label}</p>
          </div>
          {renderTag()}
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          className="relative h-[56px] w-full rounded-[var(--radius)]"
        >
          <div aria-hidden="true" className={`absolute inset-[-0.5px] rounded-[5.5px] border border-solid ${isOpen ? 'border-[var(--primary)]' : 'border-[var(--muted-foreground)]'}`} />
          <div className="flex h-full items-center justify-between gap-[12px] pl-[16px] pr-[12px]">
            <p className={`text-left font-['Lexend',sans-serif] text-[var(--text-base)] leading-[24px] ${value ? 'text-[var(--foreground)]' : 'text-[var(--muted-foreground)]'}`}>
              {value || placeholder}
            </p>
            <span className={`text-[24px] leading-none text-[var(--foreground)] transition-transform ${isOpen ? 'rotate-180' : ''}`}>⌄</span>
          </div>
        </button>
      </div>

      {isOpen && (
        <div className="absolute left-0 top-full z-50 mt-[4px] w-full overflow-hidden rounded-[var(--radius)] bg-[var(--card)] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.3),0px_2px_6px_2px_rgba(0,0,0,0.15)]">
          <div className="max-h-[420px] overflow-y-auto">
            <div className="sticky top-0 z-[1] bg-[var(--card)] px-[16px] pb-[8px] pt-[16px]">
              {value && (
                <p className="mb-[12px] border-b border-[var(--border)] pb-[12px] font-['Lexend',sans-serif] text-[15px] leading-[22px] text-[var(--foreground)]">
                  {value}
                </p>
              )}
              <input
                type="text"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder={searchPlaceholder}
                className="w-full rounded-[8px] border border-[var(--border)] bg-transparent px-[12px] py-[10px] font-['Lexend',sans-serif] text-[14px] leading-[20px] text-[var(--foreground)] outline-none placeholder:text-[var(--muted-foreground)] focus:border-[var(--primary)]"
              />
            </div>

            {normalizedQuery ? (
              <div className="px-[16px] pb-[16px]">
                <h4 className="mb-[12px] font-['Lexend',sans-serif] text-[18px] font-medium leading-[24px] text-[var(--foreground)]">Suggested</h4>
                <div className="flex flex-col gap-[4px]">
                  {filteredPaths.slice(0, 8).map((option) => (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => handleLeafSelect(option.value)}
                      className="border-b border-[var(--border)] py-[10px] text-left font-['Lexend',sans-serif] text-[15px] leading-[22px] text-[var(--foreground)] last:border-b-0"
                    >
                      {option.value}
                    </button>
                  ))}
                  {filteredPaths.length === 0 && (
                    <p className="py-[10px] font-['Lexend',sans-serif] text-[14px] leading-[20px] text-[var(--muted-foreground)]">
                      No matching categories found.
                    </p>
                  )}
                </div>
              </div>
            ) : (
              <div className="px-[16px] pb-[16px]">
                <h4 className="mb-[12px] font-['Lexend',sans-serif] text-[18px] font-medium leading-[24px] text-[var(--foreground)]">Suggested</h4>
                <div className="mb-[24px] flex flex-col gap-[4px]">
                  {visibleSuggestions.map((option) => (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => handleLeafSelect(option.value)}
                      className="border-b border-[var(--border)] py-[10px] text-left font-['Lexend',sans-serif] text-[15px] leading-[22px] text-[var(--foreground)] last:border-b-0"
                    >
                      {option.value}
                    </button>
                  ))}
                </div>

                <div className="mb-[12px] flex items-center justify-between gap-[8px]">
                  <h4 className="font-['Lexend',sans-serif] text-[18px] font-medium leading-[24px] text-[var(--foreground)]">All categories</h4>
                  {navigationPath.length > 0 && (
                    <button
                      type="button"
                      onClick={() => setNavigationPath((path) => path.slice(0, -1))}
                      className="font-['Lexend',sans-serif] text-[13px] leading-[18px] text-[var(--primary)]"
                    >
                      Back
                    </button>
                  )}
                </div>

                {navigationPath.length > 0 && (
                  <p className="mb-[12px] font-['Lexend',sans-serif] text-[13px] leading-[18px] text-[var(--muted-foreground)]">
                    {navigationPath.join(' > ')}
                  </p>
                )}

                <div className="flex flex-col">
                  {visibleNodes.map((node) => {
                    const nextPath = [...navigationPath, node.label];
                    const fullPath = nextPath.join(' > ');
                    const hasChildren = !!node.children?.length;

                    return (
                      <button
                        key={fullPath}
                        type="button"
                        onClick={() => (hasChildren ? setNavigationPath(nextPath) : handleLeafSelect(fullPath))}
                        className="flex items-center justify-between border-b border-[var(--border)] py-[14px] text-left last:border-b-0"
                      >
                        <span className="font-['Lexend',sans-serif] text-[15px] leading-[22px] text-[var(--foreground)]">
                          {node.label}
                        </span>
                        <span className="text-[24px] leading-none text-[var(--muted-foreground)]">›</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
