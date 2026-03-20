import svgPaths from "./svg-37tvrvwjvg";

export default function SwitchToggle() {
  return (
    <div className="bg-[#e6e0ee] content-stretch flex items-center p-[4px] relative rounded-[100px] size-full" data-name="Switch_Toggle">
      <div aria-hidden="true" className="absolute border-2 border-[#7a7486] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <div className="h-[24px] relative shrink-0 w-[44px]" data-name="Handle">
        <div className="absolute content-stretch flex inset-[-50%_18.18%_-50%_-27.27%] items-center justify-center p-[4px]" data-name="Target">
          <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[100px] shrink-0 size-[40px]" data-name="State-layer">
            <div className="bg-[#7a7486] content-stretch flex items-center justify-center overflow-clip p-[11px] relative rounded-[24px] shrink-0" data-name="Handle shape">
              <div className="rounded-[100px] shrink-0 size-[2px]" data-name="Container" />
              <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[16px] top-1/2" data-name="Icon">
                <div className="absolute inset-[16.67%]" data-name="Icon">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6667 10.6667">
                    <path d={svgPaths.p24badd00} fill="var(--fill-0, #E6E0EE)" id="Icon" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}