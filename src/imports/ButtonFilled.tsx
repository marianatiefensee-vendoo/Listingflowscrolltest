import svgPaths from "./svg-jpw0qaix23";

export default function ButtonFilled() {
  return (
    <div className="content-stretch flex items-center justify-center relative size-full" data-name="Button-Filled">
      <div className="bg-[#4a00bf] content-stretch flex flex-col h-full items-center justify-center relative rounded-[5px] shrink-0" data-name="Content">
        <div className="content-stretch flex gap-[10px] items-center px-[16px] py-[10px] relative rounded-[5px] shrink-0" data-name="State - Layer">
          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Sparkle">
            <div className="absolute inset-[9.3%_9.51%_9.5%_9.3%]" data-name="Icon">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.2384 16.2401">
                <g id="Icon">
                  <path clipRule="evenodd" d={svgPaths.pf313a80} fill="white" fillRule="evenodd" />
                  <path clipRule="evenodd" d={svgPaths.p198a1100} fill="white" fillRule="evenodd" />
                  <path d={svgPaths.p39ab3c00} fill="var(--fill-0, white)" />
                  <path d={svgPaths.p76d5230} fill="var(--fill-0, white)" />
                </g>
              </svg>
            </div>
          </div>
          <div className="content-stretch flex items-center justify-center px-[4px] relative shrink-0" data-name="Label">
            <div className="flex flex-col font-['Lexend:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white tracking-[0.1px] whitespace-nowrap">
              <p className="leading-[20px]">Generate Listing</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}