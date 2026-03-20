import svgPaths from "./svg-dn0w1g9l3a";

export default function ButtonFilled() {
  return (
    <div className="content-stretch flex items-center justify-center relative size-full" data-name="Button-Filled">
      <div className="bg-[#4a00bf] content-stretch flex flex-col items-center justify-center relative rounded-[5px] shrink-0" data-name="Content">
        <div className="content-stretch flex gap-[10px] items-center px-[24px] py-[16px] relative rounded-[5px] shrink-0" data-name="State - Layer">
          <div className="overflow-clip relative shrink-0 size-[24px]" data-name="publish">
            <div className="absolute inset-[16.67%]" data-name="Icon">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                <path d={svgPaths.p4913d00} fill="var(--fill-0, white)" id="Icon" />
              </svg>
            </div>
          </div>
          <div className="content-stretch flex items-center justify-center px-[4px] relative shrink-0" data-name="Label">
            <div className="flex flex-col font-['Lexend:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-center text-white tracking-[0.15px] whitespace-nowrap">
              <p className="leading-[24px]">{`Review & Publish`}</p>
            </div>
          </div>
          <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Chevron Right">
            <div className="absolute bottom-[8.34%] left-1/4 right-[27.73%] top-[8.33%]" data-name="Icon">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.3458 19.9993">
                <path d={svgPaths.p3cd472c0} fill="var(--fill-0, white)" id="Icon" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}