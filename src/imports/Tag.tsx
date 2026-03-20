import svgPaths from "./svg-jgphh8vlc1";

export default function Tag() {
  return (
    <div className="content-stretch flex items-start relative size-full" data-name="Tag">
      <div className="bg-[#aeaaae] content-stretch flex items-center justify-center px-[4px] relative rounded-[4px] shrink-0" data-name="Tag">
        <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Content frame">
          <div className="overflow-clip relative shrink-0 size-[12px]" data-name="Icon leading">
            <div className="absolute inset-[4.17%]" data-name="Icon">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
                <g id="Icon">
                  <path d={svgPaths.p17642500} fill="var(--fill-0, white)" />
                  <path d={svgPaths.p1beee5c0} fill="var(--fill-0, white)" />
                  <path clipRule="evenodd" d={svgPaths.p2a586c80} fill="var(--fill-0, white)" fillRule="evenodd" />
                </g>
              </svg>
            </div>
          </div>
          <div className="flex flex-col font-['Lexend:Regular',sans-serif] font-[350] justify-center leading-[0] relative shrink-0 text-[11px] text-center text-white whitespace-nowrap">
            <p className="leading-[14px]">Customized</p>
          </div>
        </div>
        <div className="h-[20px] relative shrink-0 w-0" data-name="Min height XSmall">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
            <g id="Min height XSmall" />
          </svg>
        </div>
      </div>
    </div>
  );
}