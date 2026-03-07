import { useState, useEffect } from "react";
import svgPaths from "../../imports/svg-nl9hp3fmvu";
import conditionSvgPaths from "../../imports/svg-eidwq1eo1i";
import completedSvgPaths from "../../imports/svg-qt0lwj09d3";
import type { ItemDetails } from "../App";

interface ItemDetailsContentProps {
  initialData?: ItemDetails | null;
  shouldExpand?: boolean;
  onExpandChange?: () => void;
  onContinue?: () => void;
  onDetailsChange?: (details: ItemDetails) => void;
}

export default function ItemDetailsContent({ initialData, shouldExpand, onExpandChange, onContinue, onDetailsChange }: ItemDetailsContentProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [itemSpecificsExpanded, setItemSpecificsExpanded] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [isAIGenerated, setIsAIGenerated] = useState(false);
  const [hasReceivedAIData, setHasReceivedAIData] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState("");
  const [condition, setCondition] = useState("");
  const [tags, setTags] = useState("");
  const [sku, setSku] = useState("");

  // Expand section when shouldExpand is true
  useEffect(() => {
    if (shouldExpand) {
      setIsExpanded(true);
      onExpandChange?.();
    }
  }, [shouldExpand, onExpandChange]);

  // Update fields when initialData is provided from AI (only once)
  useEffect(() => {
    // Only treat as AI-generated if we have both title and description with meaningful content
    if (initialData && !hasReceivedAIData && initialData.title && initialData.description) {
      setTitle(initialData.title);
      setDescription(initialData.description);
      setCategory(initialData.category);
      setBrand(initialData.brand);
      setCondition(initialData.condition);
      
      // Set mock data for other fields when AI generates
      setSize("10");
      setQuantity("1");
      setTags("#nike #placeholder #tag");
      setSku("12345");
      
      // Mark that we've received AI data
      setIsAIGenerated(true);
      setHasReceivedAIData(true);
    }
  }, [initialData, hasReceivedAIData]);

  // Notify parent of details changes
  useEffect(() => {
    if (title || description || category || brand || condition) {
      onDetailsChange?.({
        title,
        description,
        category,
        brand,
        condition
      });
    }
  }, [title, description, category, brand, condition, onDetailsChange]);

  const handleContinue = () => {
    setIsCompleted(true);
    setIsExpanded(false);
    // Clear AI generated flag when user continues
    setIsAIGenerated(false);
    onContinue?.();
  };

  const handleEdit = () => {
    setIsExpanded(true);
  };

  return (
    <div className="bg-[#F5EEFC] content-stretch flex flex-col gap-[12px] items-start relative rounded-[16px] w-full">
      <div aria-hidden="true" className="absolute border border-[#cbc3d7] border-solid inset-[-1px] pointer-events-none rounded-[17px] bg-[#ffffff]" />
      
      {/* Top Content */}
      <div 
        className={`bg-[#F5EEFC] content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full ${
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
                      <div className="bg-[#64539b] content-stretch flex gap-[10px] items-center relative rounded-[16px] shrink-0 size-[32px]">
                        <div aria-hidden="true" className="absolute border-[#64539b] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[16px]" />
                        <div className="content-stretch flex flex-[1_0_0] h-full items-center justify-center min-h-px min-w-px relative">
                          <div className="flex flex-col font-['Lexend:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-center text-white tracking-[0.5px] whitespace-nowrap">
                            <p className="leading-[24px]">2</p>
                          </div>
                        </div>
                      </div>
                    ) : isCompleted ? (
                      <div className="relative shrink-0 size-[32px]">
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                          <circle cx="16" cy="16" fill="var(--fill-0, #C3B0FF)" r="15.25" stroke="var(--stroke-0, #C3B0FF)" strokeWidth="1.5" />
                        </svg>
                        <div className="absolute left-[4px] overflow-clip size-[24px] top-[4px]">
                          <div className="absolute inset-[19.32%_8.33%_19.99%_8.33%]">
                            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 14.5656">
                              <path d={completedSvgPaths.p97f8e00} fill="var(--fill-0, #503F86)" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="bg-[#64539b] content-stretch flex gap-[10px] items-center relative rounded-[16px] shrink-0 size-[32px]">
                        <div aria-hidden="true" className="absolute border-[#64539b] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[16px]" />
                        <div className="content-stretch flex flex-[1_0_0] h-full items-center justify-center min-h-px min-w-px relative">
                          <div className="flex flex-col font-['Lexend:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-center text-white tracking-[0.5px] whitespace-nowrap">
                            <p className="leading-[24px]">2</p>
                          </div>
                        </div>
                      </div>
                    )}
                    <div className="content-stretch flex items-center justify-center relative shrink-0">
                      <p className={`font-['Lexend:Regular',sans-serif] font-normal leading-[32px] relative shrink-0 text-[24px] whitespace-nowrap ${
                        isExpanded ? 'text-[#1d1a24]' : (isCompleted ? 'text-[#494455]' : 'text-[#1d1a24]')
                      }`}>Item Details</p>
                    </div>
                  </div>
                </div>
                
                {/* Summary text - only show when collapsed and completed */}
                {!isExpanded && isCompleted && (
                  <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px min-w-px relative self-stretch">
                    <p className="flex-[1_0_0] font-['Lexend:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px relative text-[#7a7486] text-[14px] tracking-[0.25px] overflow-hidden text-ellipsis whitespace-nowrap">{title || "Untitled"}</p>
                  </div>
                )}
              </div>

              {/* Actions */}
              <button
                onClick={() => setIsExpanded(!isExpanded)}
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
                              <path d={svgPaths.p28797e80} fill="var(--fill-0, #1D1A24)" />
                            </svg>
                          </div>
                        </div>
                      ) : isCompleted ? (
                        <div className="overflow-clip relative shrink-0 size-[24px]">
                          <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[18.183px] left-[calc(50%-0.5px)] top-[calc(50%+0.09px)] w-[19px]">
                            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 18.1834">
                              <g>
                                <path clipRule="evenodd" d={completedSvgPaths.p1e751200} fill="var(--fill-0, #494455)" fillRule="evenodd" />
                                <path d={completedSvgPaths.p3a455080} fill="var(--fill-0, #494455)" />
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
                              <path d={svgPaths.p28797e80} fill="var(--fill-0, #1D1A24)" />
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
                  <line stroke="var(--stroke-0, #CBC3D7)" strokeLinecap="square" x1="0.5" x2="759.5" y1="0.5" y2="0.5" />
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
                      <div className="flex flex-col font-['Lexend:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#494455] text-[16px] tracking-[0.15px] whitespace-nowrap">
                        <p className="leading-[24px]">Title</p>
                      </div>
                      {isAIGenerated && (
                        <div className="content-stretch flex items-start relative shrink-0">
                          <div className="bg-[#e8ddff] content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 p-[4px]">
                            <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
                              <div className="overflow-clip relative shrink-0 size-[12px]">
                                <div className="absolute inset-[9.3%_9.51%_9.5%_9.3%]">
                                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.74306 9.74407">
                                    <g>
                                      <path clipRule="evenodd" d={svgPaths.p1af4ae00} fill="#20005E" fillRule="evenodd" />
                                      <path clipRule="evenodd" d={svgPaths.peb3b600} fill="#20005E" fillRule="evenodd" />
                                      <path d={svgPaths.p3b146f80} fill="var(--fill-0, #20005E)" />
                                      <path d={svgPaths.p342e3e00} fill="var(--fill-0, #20005E)" />
                                    </g>
                                  </svg>
                                </div>
                              </div>
                              <div className="flex flex-col font-['Lexend:Regular',sans-serif] font-[350] justify-center leading-[0] relative shrink-0 text-[#20005e] text-[11px] text-center whitespace-nowrap">
                                <p className="leading-[14px]">AI generated</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      <div className="content-stretch flex flex-[1_0_0] items-center justify-end min-h-px min-w-px overflow-clip relative rounded-[8px]">
                        <button className="content-stretch flex gap-[8px] h-[32px] items-center justify-center px-[8px] py-[6px] relative shrink-0">
                          <div className="overflow-clip relative shrink-0 size-[18px]">
                            <div className="absolute inset-[11.93%_4.83%]">
                              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.2599 13.704">
                                <g>
                                  <path d={svgPaths.p2c549380} fill="var(--fill-0, #4A00BF)" />
                                  <path clipRule="evenodd" d={svgPaths.p38d46180} fill="var(--fill-0, #4A00BF)" fillRule="evenodd" />
                                  <path clipRule="evenodd" d={svgPaths.p545b200} fill="var(--fill-0, #4A00BF)" fillRule="evenodd" />
                                </g>
                              </svg>
                            </div>
                          </div>
                          <div className="flex flex-col font-['Lexend:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#4a00bf] text-[11px] text-center tracking-[0.5px] whitespace-nowrap">
                            <p className="leading-[16px]">{isAIGenerated ? "Rewrite" : "Generate with AI"}</p>
                          </div>
                        </button>
                      </div>
                    </div>
                    <div className="h-[56px] relative rounded-[5px] shrink-0 w-full">
                      <div aria-hidden="true" className="absolute border border-[#7a7486] border-solid inset-[-0.5px] pointer-events-none rounded-[5.5px]" />
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
                                      setIsAIGenerated(false);
                                    }}
                                    className="flex-[1_0_0] font-['Lexend:Regular',sans-serif] font-normal h-full leading-[24px] min-h-px min-w-px relative text-[#1d1a24] text-[16px] tracking-[0.5px] bg-transparent border-none outline-none"
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
                      <div className="flex flex-col font-['Lexend:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#494455] text-[16px] tracking-[0.15px] whitespace-nowrap">
                        <p className="leading-[24px]">Description</p>
                      </div>
                      {isAIGenerated && (
                        <div className="content-stretch flex items-start relative shrink-0">
                          <div className="bg-[#e8ddff] content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 p-[4px]">
                            <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
                              <div className="overflow-clip relative shrink-0 size-[12px]">
                                <div className="absolute inset-[9.3%_9.51%_9.5%_9.3%]">
                                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.74306 9.74407">
                                    <g>
                                      <path clipRule="evenodd" d={svgPaths.p1af4ae00} fill="#20005E" fillRule="evenodd" />
                                      <path clipRule="evenodd" d={svgPaths.peb3b600} fill="#20005E" fillRule="evenodd" />
                                      <path d={svgPaths.p3b146f80} fill="var(--fill-0, #20005E)" />
                                      <path d={svgPaths.p342e3e00} fill="var(--fill-0, #20005E)" />
                                    </g>
                                  </svg>
                                </div>
                              </div>
                              <div className="flex flex-col font-['Lexend:Regular',sans-serif] font-[350] justify-center leading-[0] relative shrink-0 text-[#20005e] text-[11px] text-center whitespace-nowrap">
                                <p className="leading-[14px]">AI generated</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      <div className="content-stretch flex flex-[1_0_0] items-center justify-end min-h-px min-w-px overflow-clip relative rounded-[8px]">
                        <button className="content-stretch flex gap-[8px] h-[32px] items-center justify-center px-[8px] py-[6px] relative shrink-0">
                          <div className="overflow-clip relative shrink-0 size-[18px]">
                            <div className="absolute inset-[11.93%_4.83%]">
                              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.2599 13.704">
                                <g>
                                  <path d={svgPaths.p2c549380} fill="var(--fill-0, #4A00BF)" />
                                  <path clipRule="evenodd" d={svgPaths.p38d46180} fill="var(--fill-0, #4A00BF)" fillRule="evenodd" />
                                  <path clipRule="evenodd" d={svgPaths.p545b200} fill="var(--fill-0, #4A00BF)" fillRule="evenodd" />
                                </g>
                              </svg>
                            </div>
                          </div>
                          <div className="flex flex-col font-['Lexend:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#4a00bf] text-[11px] text-center tracking-[0.5px] whitespace-nowrap">
                            <p className="leading-[16px]">{isAIGenerated ? "Improve" : "Generate with AI"}</p>
                          </div>
                        </button>
                      </div>
                    </div>
                    <div className="h-[200px] relative rounded-[5px] shrink-0 w-full">
                      <div aria-hidden="true" className="absolute border border-[#7a7486] border-solid inset-[-0.5px] pointer-events-none rounded-[5.5px]" />
                      <div className="content-stretch flex gap-[4px] items-start pl-[16px] py-[4px] relative size-full">
                        <div className="flex-[1_0_0] h-full min-h-px min-w-px relative">
                          <div className="content-stretch flex flex-col items-start py-[4px] relative size-full">
                            <div className="flex-[1_0_0] min-h-px min-w-px relative w-full">
                              <div className="flex flex-row items-center size-full">
                                <div className="content-stretch flex items-center py-[8px] relative size-full">
                                  <textarea
                                    value={description}
                                    onChange={(e) => {
                                      setDescription(e.target.value);
                                      setIsAIGenerated(false);
                                    }}
                                    className="flex-[1_0_0] font-['Lexend:Regular',sans-serif] font-normal h-full leading-[24px] min-h-px min-w-px relative text-[#1d1a24] text-[16px] tracking-[0.5px] bg-transparent border-none outline-none resize-none"
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

                {/* Item Specifics */}
                <div className="content-stretch flex flex-col gap-[4px] items-start py-[4px] relative rounded-[8px] shrink-0 w-full">
                  <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full">
                    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative">
                      <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
                        <div className="content-stretch flex items-center relative shrink-0">
                          <p className="font-['Lexend:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#1d1a24] text-[16px] tracking-[0.15px] whitespace-nowrap">Item Specifics</p>
                        </div>
                        {isAIGenerated && (
                          <div className="content-stretch flex items-start relative shrink-0">
                            <div className="bg-[#e8ddff] content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 p-[4px]">
                              <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
                                <div className="overflow-clip relative shrink-0 size-[12px]">
                                  <div className="absolute inset-[9.3%_9.51%_9.5%_9.3%]">
                                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.74306 9.74407">
                                      <g>
                                        <path clipRule="evenodd" d={svgPaths.p1af4ae00} fill="#20005E" fillRule="evenodd" />
                                        <path clipRule="evenodd" d={svgPaths.peb3b600} fill="#20005E" fillRule="evenodd" />
                                        <path d={svgPaths.p3b146f80} fill="var(--fill-0, #20005E)" />
                                        <path d={svgPaths.p342e3e00} fill="var(--fill-0, #20005E)" />
                                      </g>
                                    </svg>
                                  </div>
                                </div>
                                <div className="flex flex-col font-['Lexend:Regular',sans-serif] font-[350] justify-center leading-[0] relative shrink-0 text-[#20005e] text-[11px] text-center whitespace-nowrap">
                                  <p className="leading-[14px]">AI generated</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                      <div className="content-stretch flex items-start pr-[16px] pt-[4px] relative shrink-0">
                        <p className="font-['Lexend:Regular',sans-serif] font-[350] leading-[14px] relative shrink-0 text-[#494455] text-[11px] whitespace-nowrap">You can continue now, or review specifics.</p>
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
                                  <path d={svgPaths.p28797e80} fill="var(--fill-0, #494455)" />
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
                          <line stroke="var(--stroke-0, #E6E1E6)" strokeLinecap="square" x1="0.5" x2="711.5" y1="0.5" y2="0.5" />
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
                          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                            <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
                              <div className="flex flex-col font-['Lexend:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#494455] text-[16px] tracking-[0.15px] whitespace-nowrap">
                                <p className="leading-[24px]">Brand</p>
                              </div>
                            </div>
                            <div className="h-[56px] relative rounded-[5px] shrink-0 w-full">
                              <div aria-hidden="true" className="absolute border border-[#7a7486] border-solid inset-[-0.5px] pointer-events-none rounded-[5.5px]" />
                              <div className="content-stretch flex gap-[4px] items-start pl-[16px] py-[4px] relative size-full">
                                <div className="content-stretch flex flex-[1_0_0] flex-col h-[48px] items-start justify-center min-h-px min-w-px py-[4px] relative">
                                  <div className="content-stretch flex items-center relative shrink-0">
                                    <input
                                      type="text"
                                      value={brand}
                                      onChange={(e) => {
                                        setBrand(e.target.value);
                                        setIsAIGenerated(false);
                                      }}
                                      className="flex flex-col font-['Lexend:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1d1a24] text-[16px] tracking-[0.5px] whitespace-nowrap bg-transparent border-none outline-none"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="relative shrink-0 w-full">
                            <div className="content-stretch flex items-start pt-[4px] px-[16px] relative w-full">
                              <p className="flex-[1_0_0] font-['Lexend:Regular',sans-serif] font-[350] leading-[14px] min-h-px min-w-px relative text-[#494455] text-[11px] text-left invisible">Placeholder</p>
                            </div>
                          </div>
                        </div>
                        {/* Size */}
                        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                            <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
                              <div className="flex flex-col font-['Lexend:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#494455] text-[16px] tracking-[0.15px] whitespace-nowrap">
                                <p className="leading-[24px]">Size</p>
                              </div>
                            </div>
                            <div className="h-[56px] relative rounded-[5px] shrink-0 w-full">
                              <div aria-hidden="true" className="absolute border border-[#7a7486] border-solid inset-[-0.5px] pointer-events-none rounded-[5.5px]" />
                              <div className="content-stretch flex gap-[4px] items-start pl-[16px] py-[4px] relative size-full">
                                <div className="content-stretch flex flex-[1_0_0] flex-col h-[48px] items-start justify-center min-h-px min-w-px py-[4px] relative">
                                  <div className="content-stretch flex items-center relative shrink-0">
                                    <input
                                      type="text"
                                      value={size}
                                      onChange={(e) => {
                                        setSize(e.target.value);
                                        setIsAIGenerated(false);
                                      }}
                                      className="flex flex-col font-['Lexend:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1d1a24] text-[16px] tracking-[0.5px] whitespace-nowrap bg-transparent border-none outline-none"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="relative shrink-0 w-full">
                            <div className="content-stretch flex items-start pt-[4px] px-[16px] relative w-full">
                              <p className="flex-[1_0_0] font-['Lexend:Regular',sans-serif] font-[350] leading-[14px] min-h-px min-w-px relative text-[#494455] text-[11px] text-left invisible">Placeholder</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Column 2 */}
                      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px min-w-px relative">
                        {/* Category */}
                        <button className="content-stretch cursor-pointer flex flex-col items-start relative shrink-0 w-full">
                          <div className="content-stretch flex flex-col items-start relative rounded-[4px] shrink-0 w-full">
                            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                              <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
                                <div className="flex flex-col font-['Lexend:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#494455] text-[16px] text-left tracking-[0.15px] whitespace-nowrap">
                                  <p className="leading-[24px]">Category</p>
                                </div>
                              </div>
                              <div className="h-[56px] relative rounded-[5px] shrink-0 w-full">
                                <div aria-hidden="true" className="absolute border border-[#7a7486] border-solid inset-[-0.5px] pointer-events-none rounded-[5.5px]" />
                                <div className="content-stretch flex gap-[4px] items-start pl-[16px] py-[4px] relative size-full">
                                  <div className="content-stretch cursor-pointer flex flex-[1_0_0] flex-col h-[48px] items-start justify-center min-h-px min-w-px py-[4px] relative">
                                    <div className="content-stretch flex items-center relative shrink-0">
                                      {category && (
                                        <div className="flex flex-col font-['Lexend:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1d1a24] text-[16px] text-left tracking-[0.5px] whitespace-nowrap">
                                          <p className="leading-[24px]">{category}</p>
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="relative shrink-0 w-full">
                              <div className="content-stretch flex items-start pt-[4px] px-[16px] relative w-full">
                                <p className={`flex-[1_0_0] font-['Lexend:Regular',sans-serif] font-[350] leading-[14px] min-h-px min-w-px relative text-[#494455] text-[11px] text-left ${!category ? 'invisible' : ''}`}>
                                  {category ? 'Matched based on visual similarity to 1,200+ listings.' : 'Placeholder'}
                                </p>
                              </div>
                            </div>
                          </div>
                        </button>
                        {/* Quantity */}
                        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                          <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
                            <div className="flex flex-col font-['Lexend:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#494455] text-[16px] tracking-[0.15px] whitespace-nowrap">
                              <p className="leading-[24px]">Quantity</p>
                            </div>
                          </div>
                          <div className="h-[56px] relative rounded-[5px] shrink-0 w-full">
                            <div aria-hidden="true" className="absolute border border-[#7a7486] border-solid inset-[-0.5px] pointer-events-none rounded-[5.5px]" />
                            <div className="content-stretch flex gap-[4px] items-start pl-[16px] py-[4px] relative size-full">
                              <div className="content-stretch flex flex-[1_0_0] flex-col h-[48px] items-start justify-center min-h-px min-w-px py-[4px] relative">
                                <div className="content-stretch flex items-center relative shrink-0">
                                  <input
                                    type="text"
                                    value={quantity}
                                    onChange={(e) => {
                                      setQuantity(e.target.value);
                                      setIsAIGenerated(false);
                                    }}
                                    className="flex flex-col font-['Lexend:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1d1a24] text-[16px] tracking-[0.5px] whitespace-nowrap bg-transparent border-none outline-none"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="relative shrink-0 w-full">
                            <div className="content-stretch flex items-start pt-[4px] px-[16px] relative w-full">
                              <p className="flex-[1_0_0] font-['Lexend:Regular',sans-serif] font-[350] leading-[14px] min-h-px min-w-px relative text-[#494455] text-[11px] text-left invisible">Placeholder</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Condition */}
                    <div className="content-stretch flex flex-col gap-[16px] items-start justify-center py-[2.4px] relative shrink-0">
                      <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-[327px]">
                        <div className="flex flex-col font-['Lexend:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#494455] text-[16px] tracking-[0.15px] whitespace-nowrap">
                          <p className="leading-[24px]">Condition</p>
                        </div>
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
                              setIsAIGenerated(false);
                            }}
                            className="sr-only"
                          />
                          <div className={`flex items-center justify-center shrink-0 size-[20px] rounded-full border-2 transition-colors ${
                            condition === "Fair" 
                              ? "border-[#6231d8] bg-[#6231d8]" 
                              : "border-[#7a7486] bg-white"
                          }`}>
                            {condition === "Fair" && (
                              <div className="bg-white rounded-full size-[8px]" />
                            )}
                          </div>
                          <div className="content-stretch flex gap-[9.6px] items-center relative shrink-0">
                            <div className="overflow-clip relative shrink-0 size-[24px]">
                              <div className="absolute inset-[4.16%]">
                                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.0014 22.0014">
                                  <g>
                                    <path d={conditionSvgPaths.p268d1300} fill="var(--fill-0, #1D1A24)" />
                                    <path d={conditionSvgPaths.pfb9efc0} fill="var(--fill-0, #1D1A24)" />
                                    <path clipRule="evenodd" d={conditionSvgPaths.p3a79fb00} fill="var(--fill-0, #1D1A24)" fillRule="evenodd" />
                                  </g>
                                </svg>
                              </div>
                            </div>
                            <div className="flex flex-col font-['Lexend:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1d1a24] text-[14px] tracking-[0.1px] whitespace-nowrap">
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
                              setIsAIGenerated(false);
                            }}
                            className="sr-only"
                          />
                          <div className={`flex items-center justify-center shrink-0 size-[20px] rounded-full border-2 transition-colors ${
                            condition === "Good" 
                              ? "border-[#6231d8] bg-[#6231d8]" 
                              : "border-[#7a7486] bg-white"
                          }`}>
                            {condition === "Good" && (
                              <div className="bg-white rounded-full size-[8px]" />
                            )}
                          </div>
                          <div className="content-stretch flex gap-[9.6px] items-center relative shrink-0">
                            <div className="overflow-clip relative shrink-0 size-[24px]">
                              <div className="absolute flex inset-[4.17%_5.49%_4.17%_4.17%] items-center justify-center">
                                <div className="-scale-y-100 flex-none h-[24.2px] w-[23.851px]">
                                  <div className="relative size-full">
                                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.6823 22.0001">
                                      <path clipRule="evenodd" d={conditionSvgPaths.p3a697100} fill="var(--fill-0, #1D1A24)" fillRule="evenodd" />
                                    </svg>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col font-['Lexend:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1d1a24] text-[14px] tracking-[0.1px] whitespace-nowrap">
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
                              setIsAIGenerated(false);
                            }}
                            className="sr-only"
                          />
                          <div className={`flex items-center justify-center shrink-0 size-[20px] rounded-full border-2 transition-colors ${
                            condition === "Excellent" 
                              ? "border-[#6231d8] bg-[#6231d8]" 
                              : "border-[#7a7486] bg-white"
                          }`}>
                            {condition === "Excellent" && (
                              <div className="bg-white rounded-full size-[8px]" />
                            )}
                          </div>
                          <div className="content-stretch flex gap-[9.6px] items-center relative shrink-0">
                            <div className="overflow-clip relative shrink-0 size-[24px]">
                              <div className="absolute inset-[12.5%_9.72%_9.72%_12.5%]">
                                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.6669 18.6662">
                                  <g>
                                    <path d={conditionSvgPaths.p21a13400} fill="var(--fill-0, #1D1A24)" />
                                    <path d={conditionSvgPaths.p229eb810} fill="var(--fill-0, #1D1A24)" />
                                  </g>
                                </svg>
                              </div>
                            </div>
                            <div className="flex flex-col font-['Lexend:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1d1a24] text-[14px] tracking-[0.1px] whitespace-nowrap">
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
                              setIsAIGenerated(false);
                            }}
                            className="sr-only"
                          />
                          <div className={`flex items-center justify-center shrink-0 size-[20px] rounded-full border-2 transition-colors ${
                            condition === "Like New" 
                              ? "border-[#6231d8] bg-[#6231d8]" 
                              : "border-[#7a7486] bg-white"
                          }`}>
                            {condition === "Like New" && (
                              <div className="bg-white rounded-full size-[8px]" />
                            )}
                          </div>
                          <div className="content-stretch flex gap-[9.6px] items-center relative shrink-0">
                            <div className="overflow-clip relative shrink-0 size-[24px]">
                              <div className="absolute inset-[4.17%_4.17%_8.25%_4.17%]">
                                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.9996 21.02">
                                  <path clipRule="evenodd" d={conditionSvgPaths.p2193a200} fill="var(--fill-0, #1D1A24)" fillRule="evenodd" />
                                </svg>
                              </div>
                            </div>
                            <div className="flex flex-col font-['Lexend:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1d1a24] text-[14px] tracking-[0.1px] whitespace-nowrap">
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
                              setIsAIGenerated(false);
                            }}
                            className="sr-only"
                          />
                          <div className={`flex items-center justify-center shrink-0 size-[20px] rounded-full border-2 transition-colors ${
                            condition === "Brand New" 
                              ? "border-[#6231d8] bg-[#6231d8]" 
                              : "border-[#7a7486] bg-white"
                          }`}>
                            {condition === "Brand New" && (
                              <div className="bg-white rounded-full size-[8px]" />
                            )}
                          </div>
                          <div className="content-stretch flex gap-[9.6px] items-center relative shrink-0">
                            <div className="overflow-clip relative shrink-0 size-[24px]">
                              <div className="absolute inset-[4.17%_7.62%_7.64%_4.17%]">
                                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.1719 21.167">
                                  <g>
                                    <path d={conditionSvgPaths.p3d4b8a00} fill="var(--fill-0, #1D1A24)" />
                                    <path clipRule="evenodd" d={conditionSvgPaths.p2bc62f00} fill="var(--fill-0, #1D1A24)" fillRule="evenodd" />
                                  </g>
                                </svg>
                              </div>
                            </div>
                            <div className="flex flex-col font-['Lexend:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1d1a24] text-[14px] tracking-[0.1px] whitespace-nowrap">
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
                          <div className="flex flex-col font-['Lexend:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#494455] text-[16px] tracking-[0.15px] whitespace-nowrap">
                            <p className="leading-[24px]">Tags (optional)</p>
                          </div>
                          {isAIGenerated && (
                            <div className="content-stretch flex items-start relative shrink-0">
                              <div className="bg-[#e8ddff] content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 p-[4px]">
                                <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
                                  <div className="overflow-clip relative shrink-0 size-[12px]">
                                    <div className="absolute inset-[9.3%_9.51%_9.5%_9.3%]">
                                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.74306 9.74407">
                                        <g>
                                          <path clipRule="evenodd" d={svgPaths.p1af4ae00} fill="#20005E" fillRule="evenodd" />
                                          <path clipRule="evenodd" d={svgPaths.peb3b600} fill="#20005E" fillRule="evenodd" />
                                          <path d={svgPaths.p3b146f80} fill="var(--fill-0, #20005E)" />
                                          <path d={svgPaths.p342e3e00} fill="var(--fill-0, #20005E)" />
                                        </g>
                                      </svg>
                                    </div>
                                  </div>
                                  <div className="flex flex-col font-['Lexend:Regular',sans-serif] font-[350] justify-center leading-[0] relative shrink-0 text-[#20005e] text-[11px] text-center whitespace-nowrap">
                                    <p className="leading-[14px]">AI generated</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}
                          <div className="content-stretch flex flex-[1_0_0] items-center justify-end min-h-px min-w-px overflow-clip relative rounded-[8px]">
                            <button className="content-stretch flex gap-[8px] h-[32px] items-center justify-center px-[8px] py-[6px] relative shrink-0">
                              <div className="relative shrink-0 size-[18px]">
                                <div className="absolute inset-[2.08%_6.25%_0_8.33%]">
                                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.375 17.625">
                                    <g>
                                      <path d={svgPaths.p14f40700} fill="var(--fill-0, #4A00BF)" />
                                      <path d={svgPaths.p39dc9d00} fill="var(--fill-0, #4A00BF)" />
                                      <path d={svgPaths.pbf96a00} fill="var(--fill-0, #4A00BF)" />
                                      <path d={svgPaths.p146de400} fill="var(--fill-0, #4A00BF)" />
                                    </g>
                                  </svg>
                                </div>
                              </div>
                              <div className="flex flex-col font-['Lexend:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#4a00bf] text-[11px] text-center tracking-[0.5px] whitespace-nowrap">
                                <p className="leading-[16px]">{isAIGenerated ? "Improve" : "Generate with AI"}</p>
                              </div>
                            </button>
                          </div>
                        </div>
                        <div className="h-[56px] relative rounded-[5px] shrink-0 w-full">
                          <div aria-hidden="true" className="absolute border border-[#7a7486] border-solid inset-[-0.5px] pointer-events-none rounded-[5.5px]" />
                          <div className="content-stretch flex gap-[4px] items-start pl-[16px] py-[4px] relative size-full">
                            <div className="content-stretch flex flex-[1_0_0] flex-col min-h-[48px] items-start justify-center min-w-px py-[4px] relative">
                              <div className="content-stretch flex items-center relative w-full">
                                <input
                                  type="text"
                                  value={tags}
                                  onChange={(e) => {
                                    setTags(e.target.value);
                                    setIsAIGenerated(false);
                                  }}
                                  className="w-full h-full font-['Lexend:Regular',sans-serif] font-normal leading-[24px] text-[#1d1a24] text-[16px] tracking-[0.5px] bg-transparent border-none outline-none overflow-visible"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex items-start pt-[4px] px-[16px] relative shrink-0">
                        <p className="font-['Lexend:Regular',sans-serif] font-[350] leading-[14px] relative shrink-0 text-[#494455] text-[11px] whitespace-nowrap">Add tags to improve search visibility.</p>
                      </div>
                    </div>

                    {/* SKU */}
                    <div className="content-stretch flex flex-col items-start relative rounded-[4px] shrink-0 w-full">
                      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                        <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
                          <div className="flex flex-col font-['Lexend:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#494455] text-[16px] tracking-[0.15px] whitespace-nowrap">
                            <p className="leading-[24px]">SKU (optional)</p>
                          </div>
                        </div>
                        <div className="h-[56px] relative rounded-[5px] shrink-0 w-full">
                          <div aria-hidden="true" className="absolute border border-[#7a7486] border-solid inset-[-0.5px] pointer-events-none rounded-[5.5px]" />
                          <div className="content-stretch flex gap-[4px] items-start pl-[16px] py-[4px] relative size-full">
                            <div className="content-stretch flex flex-[1_0_0] flex-col h-[48px] items-start justify-center min-h-px min-w-px py-[4px] relative">
                              <div className="content-stretch flex items-center relative shrink-0">
                                <input
                                  type="text"
                                  value={sku}
                                  onChange={(e) => {
                                    setSku(e.target.value);
                                    setIsAIGenerated(false);
                                  }}
                                  className="flex flex-col font-['Lexend:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1d1a24] text-[16px] tracking-[0.5px] whitespace-nowrap bg-transparent border-none outline-none"
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
                <div className="bg-[#c3b0ff] content-stretch flex h-[48px] items-center justify-center relative rounded-[5px] shrink-0">
                  <div className="content-stretch flex flex-col items-center justify-center relative rounded-[5px] shrink-0">
                    <button 
                      onClick={handleContinue}
                      className="content-stretch flex gap-[10px] items-center px-[16px] py-[10px] relative shrink-0"
                    >
                      <div className="content-stretch flex items-center justify-center px-[4px] relative shrink-0">
                        <div className="flex flex-col font-['Lexend:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#503f86] text-[14px] text-center tracking-[0.1px] whitespace-nowrap">
                          <p className="leading-[20px]">Continue to Marketplaces</p>
                        </div>
                      </div>
                      <div className="overflow-clip relative shrink-0 size-[20px]">
                        <div className="absolute bottom-[8.34%] left-1/4 right-[27.73%] top-[8.33%]">
                          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.45486 16.666">
                            <path d={svgPaths.p23f63600} fill="var(--fill-0, #503F86)" />
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
