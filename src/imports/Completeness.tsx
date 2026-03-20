import svgPaths from "./svg-t5m7qbol09";

function Frame() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <p className="font-['Lexend:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#494455] text-[14px] tracking-[0.25px] whitespace-nowrap">Ready to list</p>
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Circle Check">
        <div className="absolute inset-[12.5%_9.72%_9.72%_12.5%]" data-name="Icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.4446 12.4441">
            <g id="Icon">
              <path d={svgPaths.p16b47300} fill="var(--fill-0, #3D7F5D)" />
              <path d={svgPaths.p27dd5190} fill="var(--fill-0, #3D7F5D)" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Div() {
  return (
    <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full" data-name="div">
      <Frame />
      <p className="font-['Lexend:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#3d7f5d] text-[12px] tracking-[0.5px] whitespace-nowrap">100%</p>
    </div>
  );
}

function ActiveIndicator() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative" data-name="Active indicator">
      <div className="flex-[1_0_0] h-[12px] min-h-px min-w-px relative" data-name="Segment">
        <div className="absolute inset-[6px_0]" data-name="wave-increment">
          <div className="absolute inset-[-2px_-0.5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 336 4">
              <path d="M2 2H85H251H334" id="wave-increment" stroke="var(--stroke-0, #3D7F5D)" strokeLinecap="round" strokeWidth="4" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Div1() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="div">
      <div className="relative shrink-0 w-full" data-name="Linear-determinate progress indicator">
        <div className="content-stretch flex items-start px-[2px] relative w-full">
          <ActiveIndicator />
        </div>
      </div>
    </div>
  );
}

export default function Completeness() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start px-[24px] relative size-full" data-name="Completeness">
      <Div />
      <Div1 />
    </div>
  );
}