import { useState, useEffect } from "react";
import svgPaths from "../../imports/svg-towfc7zrfc";
import shippingSvgPaths from "../../imports/svg-wf0w3hea8h";

interface ShippingContentProps {
  shouldExpand?: boolean;
  onExpandChange?: () => void;
  onContinue?: () => void;
}

export default function ShippingContent({ shouldExpand, onExpandChange, onContinue }: ShippingContentProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    if (shouldExpand) {
      setIsExpanded(true);
      onExpandChange?.();
    }
  }, [shouldExpand, onExpandChange]);

  const handleContinue = () => {
    setIsExpanded(false);
    onContinue?.();
  };

  return (
    <div className="bg-[#F5EEFC] content-stretch flex flex-col items-start relative rounded-[16px] w-full">
      <div aria-hidden="true" className={`absolute border border-[#cbc3d7] border-solid inset-[-1px] pointer-events-none rounded-[17px] ${isExpanded ? 'shadow-[0px_1px_2px_0px_rgba(0,0,0,0.3),0px_1px_3px_0px_rgba(0,0,0,0.15)]' : ''} bg-[#ffffff]`} />
      
      {/* Title Step */}
      <div 
        className={`bg-[#F5EEFC] content-stretch flex flex-col items-start relative shrink-0 w-full ${
          isExpanded ? 'rounded-tl-[16px] rounded-tr-[16px]' : 'rounded-[16px]'
        }`}
      >
        <div className="relative shrink-0 w-full">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center justify-between px-[24px] py-[16px] relative w-full">
              {/* Title */}
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-px">
                <div className="content-stretch flex items-center relative shrink-0 w-full">
                  <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                    {/* Step Badge */}
                    <div className="bg-[#64539b] content-stretch flex gap-[10px] items-center relative rounded-[16px] shrink-0 size-[32px]">
                      <div aria-hidden="true" className="absolute border-[#64539b] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[16px]" />
                      <div className="content-stretch flex flex-[1_0_0] h-full items-center justify-center min-h-px min-w-px relative">
                        <div className="flex flex-col font-['Lexend:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-center text-white tracking-[0.5px] whitespace-nowrap">
                          <p className="leading-[24px]">5</p>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex items-center justify-center relative shrink-0">
                      <p className="font-['Lexend:Regular',sans-serif] font-normal leading-[32px] relative shrink-0 text-[#1d1a24] text-[24px] whitespace-nowrap">Shipping</p>
                    </div>
                  </div>
                </div>
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
                      <div className="overflow-clip relative shrink-0 size-[24px]">
                        <div className="absolute inset-[26.36%_8.34%_26.36%_8.33%]">
                          <svg
                            className="absolute block size-full transition-transform duration-300"
                            fill="none"
                            preserveAspectRatio="none"
                            viewBox="0 0 19.9993 11.3458"
                            style={{
                              transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)",
                            }}
                          >
                            <path d={svgPaths.p28797e80} fill="var(--fill-0, #1D1A24)" />
                          </svg>
                        </div>
                      </div>
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
                  <line stroke="var(--stroke-0, #CBC3D7)" strokeLinecap="square" x1="0.5" x2="767.5" y1="0.5" y2="0.5" />
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
              {/* Dropdown */}
              <button className="content-stretch cursor-pointer flex flex-col items-start relative shrink-0 w-[327px]">
                <div className="content-stretch flex flex-col items-start relative rounded-[4px] shrink-0 w-full">
                  <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                    {/* Title */}
                    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
                      <div className="flex flex-col font-['Lexend:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#494455] text-[16px] tracking-[0.15px] whitespace-nowrap">
                        <p className="leading-[24px]">Shipping Options</p>
                      </div>
                      {/* Tag */}
                      <div className="content-stretch flex items-start relative shrink-0">
                        <div className="bg-[#e8ddff] content-stretch flex items-center justify-center px-[4px] relative rounded-[4px] shrink-0">
                          <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
                            <div className="overflow-clip relative shrink-0 size-[12px]">
                              <div className="absolute inset-[9.3%_9.51%_9.5%_9.3%]">
                                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.74306 9.74407">
                                  <g>
                                    <path clipRule="evenodd" d={shippingSvgPaths.p1af4ae00} fill="#20005E" fillRule="evenodd" />
                                    <path clipRule="evenodd" d={shippingSvgPaths.peb3b600} fill="#20005E" fillRule="evenodd" />
                                    <path d={shippingSvgPaths.p3b146f80} fill="var(--fill-0, #20005E)" />
                                    <path d={shippingSvgPaths.p342e3e00} fill="var(--fill-0, #20005E)" />
                                  </g>
                                </svg>
                              </div>
                            </div>
                            <div className="flex flex-col font-['Lexend:Regular',sans-serif] font-[350] justify-center leading-[0] relative shrink-0 text-[#20005e] text-[11px] text-center whitespace-nowrap">
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
                    </div>
                    {/* Input */}
                    <div className="h-[56px] relative rounded-[5px] shrink-0 w-full">
                      <div aria-hidden="true" className="absolute border border-[#7a7486] border-solid inset-0 pointer-events-none rounded-[5px]" />
                      <div className="content-stretch flex gap-[4px] items-start pl-[16px] py-[4px] relative size-full">
                        <div className="content-stretch flex flex-[1_0_0] flex-col h-[48px] items-start justify-center min-h-px min-w-px py-[4px] relative">
                          <div className="content-stretch flex items-center relative shrink-0">
                            <div className="flex flex-col font-['Lexend:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1d1a24] text-[16px] tracking-[0.5px] whitespace-nowrap">
                              <p className="leading-[24px]">Shipping Method Default</p>
                            </div>
                          </div>
                        </div>
                        <div className="content-stretch flex items-center justify-center relative shrink-0 size-[48px]">
                          <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[100px] shrink-0 w-[40px]">
                            <div className="content-stretch flex h-[40px] items-center justify-center shrink-0 w-full" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </button>

              {/* Button Frame */}
              <div className="content-stretch flex items-start justify-end relative shrink-0 w-full">
                <div className="content-stretch flex h-[48px] items-center justify-center relative shrink-0">
                  <button
                    onClick={handleContinue}
                    className="bg-[#4a00bf] content-stretch cursor-pointer flex flex-col h-full items-center justify-center relative rounded-[5px] shrink-0"
                  >
                    <div className="content-stretch flex gap-[10px] items-center px-[16px] py-[10px] relative rounded-[5px] shrink-0">
                      <div className="content-stretch flex items-center justify-center px-[4px] relative shrink-0">
                        <div className="flex flex-col font-['Lexend:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white tracking-[0.1px] whitespace-nowrap">
                          <p className="leading-[20px]">Continue to Publish</p>
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
