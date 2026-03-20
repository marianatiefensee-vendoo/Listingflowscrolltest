import { useState, useRef, useEffect } from "react";
import svgPaths from "../../imports/svg-yh6cdlpfhz";
import addPresetSvgPaths from "../../imports/svg-4x9ksv1x4a";
import aiSvgPaths from "../../imports/svg-sg1tudxleu";

export interface RichOption {
  value: string;
  label: string;
  description?: string;
  detail?: string;
  isAISuggested?: boolean;
}

interface DropdownProps {
  label: string;
  value: string;
  options?: string[];
  richOptions?: RichOption[];
  onChange: (value: string) => void;
  placeholder?: string;
  showAITag?: boolean;
  supportingText?: string;
  showAddPreset?: boolean;
  onAddPreset?: () => void;
  tagState?: "ai-suggested" | "edited" | null;
  aiSuggestedValue?: string;
  searchable?: boolean;
  searchPlaceholder?: string;
  noResultsText?: string;
  allowCustomValue?: boolean;
  customValueLabel?: string;
}

export default function Dropdown({
  label,
  value,
  options,
  richOptions,
  onChange,
  placeholder = "Select...",
  showAITag = false,
  supportingText,
  showAddPreset = false,
  onAddPreset,
  tagState = null,
  aiSuggestedValue,
  searchable = false,
  searchPlaceholder = "Search...",
  noResultsText = "No matches found.",
  allowCustomValue = false,
  customValueLabel = 'Use',
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isAddPresetHovered, setIsAddPresetHovered] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Determine if using rich options
  const isRich = !!richOptions && richOptions.length > 0;

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [isOpen]);

  const handleSelect = (optionValue: string) => {
    onChange(optionValue);
    setIsOpen(false);
    setSearchQuery("");
    setHoveredIndex(null);
  };

  const normalizedQuery = searchQuery.trim().toLowerCase();
  const filteredRichOptions = isRich
    ? richOptions!.filter((option) =>
        [option.label, option.value, option.description, option.detail]
          .filter(Boolean)
          .some((field) => field!.toLowerCase().includes(normalizedQuery))
      )
    : [];
  const filteredOptions = !isRich
    ? (options || []).filter((option) => option.toLowerCase().includes(normalizedQuery))
    : [];
  const visibleCount = isRich ? filteredRichOptions.length : filteredOptions.length;

  // Get display label for current value
  const getDisplayLabel = () => {
    if (!value) return placeholder;
    if (isRich) {
      const found = richOptions!.find(o => o.value === value);
      if (found) {
        // Compact collapsed label: "Title – Weight" when detail exists
        return found.detail ? `${found.label} – ${found.detail}` : found.label;
      }
      return value;
    }
    return value;
  };

  // Get display description for current value (for rich options)
  const getDisplayDescription = () => {
    if (!value || !isRich) return null;
    const found = richOptions!.find(o => o.value === value);
    return found?.description || null;
  };

  const displayDescription = getDisplayDescription();

  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" ref={dropdownRef}>
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
        {/* Title */}
        <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
          <div className="flex flex-col font-['Lexend',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[var(--muted-foreground)] text-[var(--text-base)] tracking-[0.15px] whitespace-nowrap">
            <p className="leading-[24px]">{label}</p>
          </div>
          
          {/* Tag - AI Suggested or Edited */}
          {tagState === "ai-suggested" && (
            <div className="content-stretch flex items-start relative shrink-0">
              <div className="bg-ai-tag content-stretch flex items-center justify-center px-[4px] relative rounded-[4px] shrink-0">
                <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
                  <div className="overflow-clip relative shrink-0 size-[12px]">
                    <div className="absolute inset-[9.3%_9.51%_9.5%_9.3%]">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.74306 9.74407">
                        <g>
                          <path clipRule="evenodd" d={aiSvgPaths.p1af4ae00} fill="var(--ai-tag-foreground)" fillRule="evenodd" />
                          <path clipRule="evenodd" d={aiSvgPaths.peb3b600} fill="var(--ai-tag-foreground)" fillRule="evenodd" />
                          <path d={aiSvgPaths.p3b146f80} fill="var(--fill-0, var(--ai-tag-foreground))" />
                          <path d={aiSvgPaths.p342e3e00} fill="var(--fill-0, var(--ai-tag-foreground))" />
                        </g>
                      </svg>
                    </div>
                  </div>
                  <div className="flex flex-col font-['Lexend',sans-serif] font-[350] justify-center leading-[0] relative shrink-0 text-ai-tag-foreground text-[11px] text-center whitespace-nowrap">
                    <p className="leading-[14px]">AI Suggested</p>
                  </div>
                </div>
                <div className="h-[20px] relative shrink-0 w-0" />
              </div>
            </div>
          )}
          
          {tagState === "edited" && (
            <div className="content-stretch flex items-start relative shrink-0">
              <div className="flex flex-col font-['Lexend',sans-serif] font-[350] justify-center leading-[0] relative shrink-0 text-edited-tag text-[11px] text-center whitespace-nowrap">
                <p className="leading-[14px]">Edited</p>
              </div>
            </div>
          )}
          
          {/* Old AI Tag for backward compatibility */}
          {showAITag && !tagState && (
            <div className="content-stretch flex items-start relative shrink-0">
              <div className="bg-ai-tag content-stretch flex items-center justify-center px-[4px] relative rounded-[4px] shrink-0">
                <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
                  <div className="overflow-clip relative shrink-0 size-[12px]">
                    <div className="absolute inset-[9.3%_9.51%_9.5%_9.3%]">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.74306 9.74407">
                        <g>
                          <path clipRule="evenodd" d={aiSvgPaths.p1af4ae00} fill="var(--ai-tag-foreground)" fillRule="evenodd" />
                          <path clipRule="evenodd" d={aiSvgPaths.peb3b600} fill="var(--ai-tag-foreground)" fillRule="evenodd" />
                          <path d={aiSvgPaths.p3b146f80} fill="var(--fill-0, var(--ai-tag-foreground))" />
                          <path d={aiSvgPaths.p342e3e00} fill="var(--fill-0, var(--ai-tag-foreground))" />
                        </g>
                      </svg>
                    </div>
                  </div>
                  <div className="flex flex-col font-['Lexend',sans-serif] font-[350] justify-center leading-[0] relative shrink-0 text-ai-tag-foreground text-[11px] text-center whitespace-nowrap">
                    <p className="leading-[14px]">AI suggested</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Dropdown Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className={`relative rounded-[var(--radius)] shrink-0 w-full h-[56px]`}
        >
          <div aria-hidden="true" className={`absolute border border-solid inset-[-0.5px] pointer-events-none rounded-[5.5px] ${isOpen ? 'border-[var(--primary)]' : 'border-[var(--muted-foreground)]'}`} />
          <div className="content-stretch flex gap-[4px] items-center pl-[16px] py-[4px] relative size-full">
            {/* Content */}
            <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px py-[4px] relative">
              <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full">
                <div className="flex flex-col font-['Lexend',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[var(--foreground)] text-[var(--text-base)] tracking-[0.5px] text-left">
                  <p className="leading-[24px]">{getDisplayLabel()}</p>
                </div>
              </div>
            </div>

            {/* Trailing Icon */}
            <div className="content-stretch flex items-center justify-center relative shrink-0 size-[48px]">
              <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[100px] shrink-0 w-[40px]">
                <div className="content-stretch flex h-[40px] items-center justify-center relative shrink-0 w-full">
                  <div className="overflow-clip relative shrink-0 size-[24px]">
                    <div className={`absolute flex inset-[26.36%_8.34%_26.36%_8.33%] items-center justify-center transition-transform duration-200 ${isOpen ? '' : '-scale-y-100'}`}>
                      <div className="flex-none h-[11.346px] w-[19.999px]">
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9993 11.3458">
                          <path d={svgPaths.p28797e80} fill="var(--fill-0, var(--foreground))" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </button>
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="bg-[var(--card)] content-stretch flex items-start overflow-clip relative rounded-[var(--radius)] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.3),0px_2px_6px_2px_rgba(0,0,0,0.15)] shrink-0 w-full mt-[4px] absolute top-full left-0 z-50">
          <div className={`content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px py-[2px] relative ${isRich ? 'max-h-[420px]' : 'max-h-[280px]'} overflow-y-auto`}>
            {searchable && (
              <div className="sticky top-0 z-[1] w-full bg-[var(--card)] px-[12px] pt-[10px] pb-[6px]">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(event) => {
                    setSearchQuery(event.target.value);
                    setHoveredIndex(null);
                  }}
                  placeholder={searchPlaceholder}
                  className="w-full rounded-[8px] border border-[var(--border)] bg-transparent px-[12px] py-[10px] font-['Lexend',sans-serif] text-[14px] leading-[20px] text-[var(--foreground)] outline-none placeholder:text-[var(--muted-foreground)] focus:border-[var(--primary)]"
                />
              </div>
            )}
            {allowCustomValue && normalizedQuery && (
              <button
                type="button"
                onClick={() => handleSelect(searchQuery.trim())}
                className="mx-[12px] mb-[6px] rounded-[8px] border border-[var(--border)] px-[12px] py-[10px] text-left"
              >
                <p className="font-['Lexend',sans-serif] text-[14px] leading-[20px] text-[var(--foreground)]">
                  {customValueLabel} “{searchQuery.trim()}”
                </p>
              </button>
            )}
            {visibleCount === 0 && (
              <div className="w-full px-[16px] py-[18px]">
                <p className="font-['Lexend',sans-serif] text-[13px] leading-[18px] text-[var(--muted-foreground)]">
                  {noResultsText}
                </p>
              </div>
            )}
            {isRich ? (
              /* Rich Option Rendering */
              filteredRichOptions.map((option, index) => {
                const isSelected = value === option.value;
                const isAISuggested = option.isAISuggested || (aiSuggestedValue && option.value === aiSuggestedValue);
                const isHovered = hoveredIndex === index;

                return (
                  <div
                    key={option.value}
                    className={`relative shrink-0 w-full transition-colors ${
                      isSelected
                        ? 'bg-[var(--muted)]'
                        : isHovered
                        ? 'bg-[var(--muted)]'
                        : isAISuggested
                        ? 'bg-ai-tag'
                        : 'bg-[var(--card)]'
                    }`}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <button
                      type="button"
                      onClick={() => handleSelect(option.value)}
                      className="content-stretch flex items-start relative shrink-0 w-full px-[16px] py-[12px] cursor-pointer text-left"
                    >
                      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px relative">
                        {/* Top row: label + badges */}
                        <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
                          <div className={`flex flex-col font-['Lexend',sans-serif] justify-center leading-[0] relative shrink-0 text-[var(--text-sm)] tracking-[0.1px] ${
                            isSelected ? 'font-medium text-[var(--primary)]' : 'font-medium text-[var(--foreground)]'
                          }`}>
                            <p className="leading-[20px]">{option.label}</p>
                          </div>

                          {/* AI Suggested badge inline */}
                          {isAISuggested && (
                            <div className="bg-ai-tag content-stretch flex items-center justify-center px-[6px] py-[1px] relative rounded-[4px] shrink-0">
                              <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
                                <div className="overflow-clip relative shrink-0 size-[12px]">
                                  <div className="absolute inset-[9.3%_9.51%_9.5%_9.3%]">
                                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.74306 9.74407">
                                      <g>
                                        <path clipRule="evenodd" d={aiSvgPaths.p1af4ae00} fill="var(--ai-tag-foreground)" fillRule="evenodd" />
                                        <path clipRule="evenodd" d={aiSvgPaths.peb3b600} fill="var(--ai-tag-foreground)" fillRule="evenodd" />
                                        <path d={aiSvgPaths.p3b146f80} fill="var(--fill-0, var(--ai-tag-foreground))" />
                                        <path d={aiSvgPaths.p342e3e00} fill="var(--fill-0, var(--ai-tag-foreground))" />
                                      </g>
                                    </svg>
                                  </div>
                                </div>
                                <div className="flex flex-col font-['Lexend',sans-serif] font-[350] justify-center leading-[0] relative shrink-0 text-ai-tag-foreground text-[11px] text-center whitespace-nowrap">
                                  <p className="leading-[14px]">AI Suggested</p>
                                </div>
                              </div>
                            </div>
                          )}

                          {/* Selected checkmark */}
                          {isSelected && (
                            <div className="ml-auto shrink-0">
                              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M13.3337 4L6.00033 11.3333L2.66699 8" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            </div>
                          )}
                        </div>

                        {/* Description */}
                        {option.description && (
                          <div className="flex flex-col font-['Lexend',sans-serif] font-[350] justify-center leading-[0] relative shrink-0 text-[var(--muted-foreground)] text-[var(--text-xs)] tracking-[0.2px]">
                            <p className="leading-[16px]">{option.description}</p>
                          </div>
                        )}

                        {/* Detail (weight) */}
                        {option.detail && (
                          <div className="flex flex-col font-['Lexend',sans-serif] font-[350] justify-center leading-[0] relative shrink-0 text-[var(--muted-foreground)] text-[11px] tracking-[0.2px] mt-[2px]">
                            <p className="leading-[14px]">{option.detail}</p>
                          </div>
                        )}
                      </div>
                    </button>

                    {/* Separator between items except last */}
                    {index < filteredRichOptions.length - 1 && (
                      <div className="mx-[16px] h-[1px] bg-[var(--border)] opacity-40" />
                    )}
                  </div>
                );
              })
            ) : (
              /* Simple String Option Rendering */
              filteredOptions.map((option, index) => (
                <div
                  key={option}
                  className={`relative shrink-0 w-full ${hoveredIndex === index ? 'bg-[var(--muted)]' : 'bg-[var(--card)]'}`}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
                    <div className="content-stretch flex flex-col items-start justify-center px-[4px] py-[2px] relative w-full">
                      <button
                        type="button"
                        onClick={() => handleSelect(option)}
                        className="content-stretch flex h-[48px] items-center justify-center relative rounded-[var(--radius)] shrink-0 w-full"
                      >
                        <div className="content-stretch flex flex-col items-center justify-center relative rounded-[var(--radius)] shrink-0">
                          <div className="content-stretch flex gap-[10px] items-center px-[16px] py-[10px] relative shrink-0">
                            <div className="content-stretch flex items-center justify-center px-[4px] relative shrink-0">
                              <div className="flex flex-col font-['Lexend',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[var(--muted-foreground)] text-[var(--text-sm)] text-center tracking-[0.1px] whitespace-nowrap">
                                <p className="leading-[20px]">{option}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
            {showAddPreset && (
              <div
                className={`relative shrink-0 w-full ${isAddPresetHovered ? 'bg-[var(--muted)]' : 'bg-[var(--card)]'}`}
                onMouseEnter={() => setIsAddPresetHovered(true)}
                onMouseLeave={() => setIsAddPresetHovered(false)}
              >
                <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
                  <button
                    type="button"
                    onClick={onAddPreset}
                    className="content-stretch flex items-center relative rounded-[12px] shrink-0 w-full min-h-[48px]"
                  >
                    <div className="content-stretch flex gap-[12px] items-center px-[16px] py-[10px] relative w-full">
                      {/* Leading Icon */}
                      <div className="relative shrink-0 size-[20px]">
                        <div className="absolute inset-[4.17%]">
                          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3333 18.3333">
                            <g>
                              <path d={addPresetSvgPaths.p3af8180} fill="var(--fill-0, var(--foreground))" />
                              <path clipRule="evenodd" d={addPresetSvgPaths.p389ffd00} fill="var(--fill-0, var(--foreground))" fillRule="evenodd" />
                            </g>
                          </svg>
                        </div>
                      </div>
                      {/* Content */}
                      <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-[32px] min-w-px relative">
                        <div className="flex flex-col font-['Lexend',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[var(--foreground)] text-[var(--text-sm)] tracking-[0.1px] w-full text-left">
                          <p className="leading-[20px]">Add shipping preset</p>
                        </div>
                      </div>
                      {/* Trailing Icon */}
                      <div className="relative shrink-0 size-[20px]">
                        <div className="absolute inset-[29.17%_37.5%_29.17%_41.67%]">
                          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.16667 8.33333">
                            <path d={addPresetSvgPaths.p26db6600} fill="var(--fill-0, var(--muted-foreground))" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
      
      {/* Supporting Text */}
      {supportingText && (
        <div className="relative shrink-0 w-full">
          <div className="content-stretch flex items-start pt-[4px] px-[16px] relative w-full">
            <p className="flex-[1_0_0] font-['Lexend',sans-serif] leading-[14px] min-h-px min-w-px relative text-[var(--muted-foreground)] text-[11px] text-left">
              {supportingText}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
