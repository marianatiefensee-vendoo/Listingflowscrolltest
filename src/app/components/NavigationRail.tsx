import { useState } from "react";
import svgPathsDocked from "../../imports/svg-4lm10evqgv";
import svgPathsExpanded from "../../imports/svg-u0uasmzsis";

interface NavigationRailProps {
  isExpanded: boolean;
  onToggle: () => void;
}

export default function NavigationRail({ isExpanded, onToggle }: NavigationRailProps) {
  const [isHovered, setIsHovered] = useState(false);

  if (isExpanded) {
    // Expanded Navigation Rail
    return (
      <div className="bg-[#f2ebf9] content-stretch flex flex-col gap-[40px] items-start overflow-clip relative rounded-[16px] size-full" data-name="Navigation Rail">
        {/* Menu & FAB */}
        <div className="relative shrink-0 w-full" data-name="Menu & FAB">
          <div className="overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col gap-[16px] items-start pb-[20px] pt-[44px] px-[20px] relative w-full">
              {/* Toggle Button */}
              <button 
                className="block cursor-pointer relative shrink-0 size-[48px]" 
                data-name="Icon Button Standard"
                onClick={onToggle}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col items-center justify-center left-[calc(50%-0.5px)] overflow-clip rounded-[100px] top-1/2 w-[40px]" data-name="Content">
                  {/* Hover state layer */}
                  {isHovered && (
                    <div 
                      className="absolute inset-0 rounded-[100px] bg-[#1D1A24] opacity-[0.08]"
                      data-name="Hover-layer"
                    />
                  )}
                  <div className="content-stretch flex h-[40px] items-center justify-center relative shrink-0 w-full" data-name="State-layer">
                    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="menu open">
                      <div className="absolute inset-[20.83%_8.86%_20.83%_10.42%]" data-name="Icon">
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.3726 14">
                          <g id="Icon">
                            <path d={svgPathsExpanded.p14331c80} fill="var(--fill-0, #1D1A24)" />
                            <path d={svgPathsExpanded.p28422b80} fill="var(--fill-0, #1D1A24)" />
                            <path d={svgPathsExpanded.p38eecc00} fill="var(--fill-0, #1D1A24)" />
                            <path d={svgPathsExpanded.p29907780} fill="var(--fill-0, #1D1A24)" />
                          </g>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </button>
              
              {/* Extended FAB */}
              <div className="content-stretch flex items-start relative shrink-0" data-name="Extended FAB">
                <div className="content-stretch flex h-[48px] items-center justify-center relative shrink-0" data-name="Button-Filled">
                  <div className="bg-[#4a00bf] content-stretch flex flex-col h-full items-center justify-center relative rounded-[5px] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.15),0px_1px_3px_0px_rgba(0,0,0,0.3)] shrink-0" data-name="Content">
                    <div className="content-stretch flex gap-[10px] items-center px-[16px] py-[10px] relative rounded-[5px] shrink-0" data-name="State - Layer">
                      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="plus-circle">
                        <div className="absolute inset-[4.17%]" data-name="Icon">
                          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3333 18.3333">
                            <g id="Icon">
                              <path d={svgPathsExpanded.p3af8180} fill="var(--fill-0, white)" />
                              <path clipRule="evenodd" d={svgPathsExpanded.p389ffd00} fill="var(--fill-0, white)" fillRule="evenodd" />
                            </g>
                          </svg>
                        </div>
                      </div>
                      <div className="content-stretch flex items-center justify-center px-[4px] relative shrink-0" data-name="Label">
                        <div className="flex flex-col font-['Lexend:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white tracking-[0.1px] whitespace-nowrap">
                          <p className="leading-[20px]">Add item</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Segments */}
        <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Segments">
          <div className="content-stretch cursor-pointer flex flex-col items-start px-[20px] relative size-full">
            <button className="content-stretch flex items-center relative shrink-0" data-name="Nav item 1">
              <div className="content-stretch flex gap-[8px] isolate items-center justify-center p-[16px] relative shrink-0" data-name="State layer">
                <div className="overflow-clip relative shrink-0 size-[24px] z-[2]" data-name="Icon">
                  <div className="absolute inset-[4.17%_8.33%_3.83%_8.33%]" data-name="Icon">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 22.0781">
                      <path clipRule="evenodd" d={svgPathsExpanded.p51a8e80} fill="var(--fill-0, #494455)" fillRule="evenodd" id="Icon" />
                    </svg>
                  </div>
                </div>
                <p className="font-['Lexend:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#494455] text-[14px] text-center tracking-[0.1px] whitespace-nowrap z-[1]">Inventory</p>
              </div>
            </button>
            <button className="content-stretch flex items-center relative shrink-0" data-name="Nav item 2">
              <div className="content-stretch flex gap-[8px] isolate items-center justify-center p-[16px] relative shrink-0" data-name="State layer">
                <div className="overflow-clip relative shrink-0 size-[24px] z-[2]" data-name="Icon">
                  <div className="absolute inset-[8.33%_12.5%]" data-name="Icon">
                    <div className="absolute inset-[-5%_-5.56%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 22.0001">
                        <path d={svgPathsExpanded.p32522b00} id="Icon" stroke="var(--stroke-0, #1D1A24)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      </svg>
                    </div>
                  </div>
                </div>
                <p className="font-['Lexend:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#494455] text-[14px] text-center tracking-[0.1px] whitespace-nowrap z-[1]">Automations</p>
              </div>
            </button>
            <button className="content-stretch flex items-center relative shrink-0" data-name="Nav item 3">
              <div className="content-stretch flex gap-[8px] isolate items-center justify-center p-[16px] relative shrink-0" data-name="State layer">
                <div className="overflow-clip relative shrink-0 size-[24px] z-[2]" data-name="Icon">
                  <div className="absolute inset-[12.5%]" data-name="Icon">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                      <path d={svgPathsExpanded.p1f65dc00} fill="var(--fill-0, #494455)" id="Icon" />
                    </svg>
                  </div>
                </div>
                <p className="font-['Lexend:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#494455] text-[14px] text-center tracking-[0.1px] whitespace-nowrap z-[1]">Analytics</p>
              </div>
            </button>
            <button className="content-stretch flex items-center relative shrink-0" data-name="Nav item 4">
              <div className="content-stretch flex gap-[8px] isolate items-center justify-center p-[16px] relative shrink-0" data-name="State layer">
                <div className="overflow-clip relative shrink-0 size-[24px] z-[2]" data-name="Icon">
                  <div className="absolute inset-[4.17%]" data-name="Icon">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
                      <path clipRule="evenodd" d={svgPathsExpanded.p4fdf6f0} fill="var(--fill-0, #494455)" fillRule="evenodd" id="Icon" />
                    </svg>
                  </div>
                </div>
                <p className="font-['Lexend:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#494455] text-[14px] text-center tracking-[0.1px] whitespace-nowrap z-[1]">Marketplaces</p>
              </div>
            </button>
            <button className="content-stretch flex items-center relative shrink-0" data-name="Nav item 5">
              <div className="content-stretch flex gap-[8px] isolate items-center justify-center p-[16px] relative shrink-0" data-name="State layer">
                <div className="overflow-clip relative shrink-0 size-[24px] z-[2]" data-name="Icon">
                  <div className="absolute inset-[12.5%_9.72%_9.72%_12.5%]" data-name="Icon">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.666 18.666">
                      <g id="Icon">
                        <path clipRule="evenodd" d={svgPathsExpanded.p3474f00} fill="var(--fill-0, #494455)" fillRule="evenodd" />
                        <path d={svgPathsExpanded.p1bffaa40} fill="var(--fill-0, #494455)" />
                      </g>
                    </svg>
                  </div>
                </div>
                <p className="font-['Lexend:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#494455] text-[14px] text-center tracking-[0.1px] whitespace-nowrap z-[1]">Bulk Actions</p>
              </div>
            </button>
          </div>
        </div>

        {/* Settings */}
        <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="settings">
          <div className="flex flex-col justify-end size-full">
            <div className="content-stretch flex flex-col items-start justify-end px-[20px] py-[44px] relative size-full">
              <button className="content-stretch cursor-pointer flex items-center relative shrink-0" data-name="Nav item 7">
                <div className="content-stretch flex gap-[8px] isolate items-center justify-center p-[16px] relative shrink-0" data-name="State layer">
                  <div className="overflow-clip relative shrink-0 size-[24px] z-[2]" data-name="Icon">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                      <g id="Icon">
                        <path clipRule="evenodd" d={svgPathsExpanded.p258bb200} fill="var(--fill-0, #494455)" fillRule="evenodd" />
                        <path clipRule="evenodd" d={svgPathsExpanded.p2c727d00} fill="var(--fill-0, #494455)" fillRule="evenodd" />
                      </g>
                    </svg>
                  </div>
                  <p className="font-['Lexend:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#494455] text-[14px] text-center tracking-[0.1px] whitespace-nowrap z-[1]">Settings</p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Docked Navigation Rail
  return (
    <div 
      className="bg-[#f2ebf9] content-stretch flex flex-col gap-[40px] items-start overflow-clip relative rounded-[16px] size-full m-[0px]" 
      data-name="Navigation Rail"
    >
      <div className="content-stretch flex flex-col gap-[16px] items-start overflow-clip pb-[20px] pt-[44px] px-[20px] relative shrink-0" data-name="Menu & FAB">
        {/* Toggle Button */}
        <button 
          className="block cursor-pointer relative shrink-0 size-[48px]" 
          data-name="Icon Button Standard"
          onClick={onToggle}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col items-center justify-center left-[calc(50%-0.5px)] overflow-clip rounded-[100px] top-1/2 w-[40px]" data-name="Content">
            {/* Hover state layer */}
            {isHovered && (
              <div 
                className="absolute inset-0 rounded-[100px] bg-[#1D1A24] opacity-[0.08]"
                data-name="Hover-layer"
              />
            )}
            <div className="content-stretch flex h-[40px] items-center justify-center relative shrink-0 w-full" data-name="State-layer">
              <div className="overflow-clip relative shrink-0 size-[24px]" data-name="menu">
                <div className="absolute inset-[20.83%_8.33%]" data-name="Icon">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 14">
                    <g id="Icon">
                      <path d={svgPathsDocked.p306fec00} fill="var(--fill-0, #1D1A24)" />
                      <path d={svgPathsDocked.p13e7780} fill="var(--fill-0, #1D1A24)" />
                      <path d={svgPathsDocked.p12f04500} fill="var(--fill-0, #1D1A24)" />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </button>

        {/* FAB Button */}
        <div className="content-stretch flex items-center justify-center relative rounded-[5px] shrink-0" data-name="FAB Button">
          <div className="bg-[#4a00bf] content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[5px] shadow-[0px_4px_8px_3px_rgba(0,0,0,0.15),0px_1px_3px_0px_rgba(0,0,0,0.3)] shrink-0 size-[56px]" data-name="Content">
            <div className="content-stretch flex h-[40px] items-center justify-center relative shrink-0 w-full" data-name="State-layer">
              <div className="overflow-clip relative shrink-0 size-[24px]" data-name="plus-circle">
                <div className="absolute inset-[4.17%]" data-name="Icon">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
                    <g id="Icon">
                      <path d={svgPathsDocked.p28fdfe80} fill="var(--fill-0, white)" />
                      <path clipRule="evenodd" d={svgPathsDocked.p396e0c00} fill="var(--fill-0, white)" fillRule="evenodd" />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Segments */}
      <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Segments">
        <div className="content-stretch cursor-pointer flex flex-col items-start px-[20px] relative size-full">
          <button className="content-stretch flex flex-col gap-[4px] items-center justify-center py-[6px] relative shrink-0" data-name="Nav Item 1">
            <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[16px] shrink-0" data-name="Icon container">
              <div className="content-stretch flex gap-[10px] h-[32px] isolate items-center justify-center py-[4px] relative shrink-0 w-[56px]" data-name="State layer">
                <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 opacity-0 overflow-clip size-[24px] top-1/2 z-[2]" data-name="Icon">
                  <div className="absolute inset-[4.17%_8.33%_3.83%_8.33%]" data-name="Icon">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 22.0781">
                      <path clipRule="evenodd" d={svgPathsDocked.p51a8e80} fill="var(--fill-0, #1D1A24)" fillRule="evenodd" id="Icon" />
                    </svg>
                  </div>
                </div>
                <div className="overflow-clip relative shrink-0 size-[24px] z-[1]" data-name="Icon">
                  <div className="absolute inset-[4.17%_8.33%_3.83%_8.33%]" data-name="Icon">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 22.0781">
                      <path clipRule="evenodd" d={svgPathsDocked.p51a8e80} fill="var(--fill-0, #494455)" fillRule="evenodd" id="Icon" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </button>
          <button className="content-stretch flex flex-col gap-[4px] items-center justify-center py-[6px] relative shrink-0" data-name="Nav item 2">
            <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[16px] shrink-0" data-name="Icon container">
              <div className="content-stretch flex gap-[10px] h-[32px] isolate items-center justify-center py-[4px] relative shrink-0 w-[56px]" data-name="State layer">
                <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 opacity-0 overflow-clip size-[24px] top-1/2 z-[2]" data-name="Icon">
                  <div className="absolute inset-[4.17%_4.17%_8.25%_4.17%]" data-name="Icon">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.9996 21.02">
                      <path clipRule="evenodd" d={svgPathsDocked.p2193a200} fill="var(--fill-0, #1D1A24)" fillRule="evenodd" id="Icon" />
                    </svg>
                  </div>
                </div>
                <div className="overflow-clip relative shrink-0 size-[24px] z-[1]" data-name="Icon">
                  <div className="absolute inset-[8.33%_12.5%]" data-name="Icon">
                    <div className="absolute inset-[-5%_-5.56%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 22.0001">
                        <path d={svgPathsDocked.p32522b00} id="Icon" stroke="var(--stroke-0, #1D1A24)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </button>
          <button className="content-stretch flex flex-col gap-[4px] items-center justify-center py-[6px] relative shrink-0" data-name="Nav item 3">
            <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[16px] shrink-0" data-name="Icon container">
              <div className="content-stretch flex gap-[10px] h-[32px] isolate items-center justify-center py-[4px] relative shrink-0 w-[56px]" data-name="State layer">
                <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 opacity-0 overflow-clip size-[24px] top-1/2 z-[2]" data-name="Icon">
                  <div className="absolute inset-[4.17%_4.17%_8.25%_4.17%]" data-name="Icon">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.9996 21.02">
                      <path clipRule="evenodd" d={svgPathsDocked.p2193a200} fill="var(--fill-0, #1D1A24)" fillRule="evenodd" id="Icon" />
                    </svg>
                  </div>
                </div>
                <div className="overflow-clip relative shrink-0 size-[24px] z-[1]" data-name="Icon">
                  <div className="absolute inset-[12.5%]" data-name="Icon">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                      <path d={svgPathsDocked.p1f65dc00} fill="var(--fill-0, #1D1A24)" id="Icon" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </button>
          <button className="content-stretch flex flex-col gap-[4px] items-center justify-center py-[6px] relative shrink-0" data-name="Nav item 4">
            <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[16px] shrink-0" data-name="Icon container">
              <div className="content-stretch flex gap-[10px] h-[32px] isolate items-center justify-center py-[4px] relative shrink-0 w-[56px]" data-name="State layer">
                <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 opacity-0 overflow-clip size-[24px] top-1/2 z-[2]" data-name="Icon">
                  <div className="absolute inset-[4.17%_4.17%_8.25%_4.17%]" data-name="Icon">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.9996 21.02">
                      <path clipRule="evenodd" d={svgPathsDocked.p2193a200} fill="var(--fill-0, #1D1A24)" fillRule="evenodd" id="Icon" />
                    </svg>
                  </div>
                </div>
                <div className="overflow-clip relative shrink-0 size-[24px] z-[1]" data-name="Icon">
                  <div className="absolute inset-[4.17%]" data-name="Icon">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
                      <path clipRule="evenodd" d={svgPathsDocked.p4fdf6f0} fill="var(--fill-0, #494455)" fillRule="evenodd" id="Icon" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </button>
          <button className="content-stretch flex flex-col gap-[4px] items-center justify-center py-[6px] relative shrink-0" data-name="Nav item 5">
            <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[16px] shrink-0" data-name="Icon container">
              <div className="content-stretch flex gap-[10px] h-[32px] isolate items-center justify-center py-[4px] relative shrink-0 w-[56px]" data-name="State layer">
                <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 opacity-0 overflow-clip size-[24px] top-1/2 z-[2]" data-name="Icon">
                  <div className="absolute inset-[4.17%_4.17%_8.25%_4.17%]" data-name="Icon">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.9996 21.02">
                      <path clipRule="evenodd" d={svgPathsDocked.p2193a200} fill="var(--fill-0, #1D1A24)" fillRule="evenodd" id="Icon" />
                    </svg>
                  </div>
                </div>
                <div className="overflow-clip relative shrink-0 size-[24px] z-[1]" data-name="Icon">
                  <div className="absolute inset-[12.5%_9.72%_9.72%_12.5%]" data-name="Icon">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.666 18.666">
                      <g id="Icon">
                        <path clipRule="evenodd" d={svgPathsDocked.p3474f00} fill="var(--fill-0, #494455)" fillRule="evenodd" />
                        <path d={svgPathsDocked.p1bffaa40} fill="var(--fill-0, #494455)" />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </button>
        </div>
      </div>

      {/* Settings */}
      <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="settings">
        <div className="flex flex-col justify-end size-full">
          <div className="content-stretch flex flex-col items-start justify-end px-[20px] py-[56px] relative size-full">
            <button className="content-stretch cursor-pointer flex flex-col gap-[4px] items-center justify-center py-[6px] relative shrink-0" data-name="Nav item 7">
              <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[16px] shrink-0" data-name="Icon container">
                <div className="content-stretch flex gap-[10px] h-[32px] isolate items-center justify-center py-[4px] relative shrink-0 w-[56px]" data-name="State layer">
                  <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 opacity-0 overflow-clip size-[24px] top-1/2 z-[2]" data-name="Icon">
                    <div className="absolute inset-[4.17%_4.17%_8.25%_4.17%]" data-name="Icon">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.9996 21.02">
                        <path clipRule="evenodd" d={svgPathsDocked.p2193a200} fill="var(--fill-0, #1D1A24)" fillRule="evenodd" id="Icon" />
                      </svg>
                    </div>
                  </div>
                  <div className="overflow-clip relative shrink-0 size-[24px] z-[1]" data-name="Icon">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                      <g id="Icon">
                        <path clipRule="evenodd" d={svgPathsDocked.p258bb200} fill="var(--fill-0, #494455)" fillRule="evenodd" />
                        <path clipRule="evenodd" d={svgPathsDocked.p2c727d00} fill="var(--fill-0, #494455)" fillRule="evenodd" />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
