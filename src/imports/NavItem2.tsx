import svgPaths from "./svg-wjpxx5yeeq";

function StateLayer() {
  return (
    <div className="content-stretch flex gap-[8px] isolate items-center justify-center p-[16px] relative shrink-0" data-name="State layer">
      <div className="overflow-clip relative shrink-0 size-[24px] z-[2]" data-name="Icon">
        <div className="absolute inset-[4.17%_8.33%_3.83%_8.33%]" data-name="Icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 22.0781">
            <path clipRule="evenodd" d={svgPaths.p51a8e80} fill="var(--fill-0, #494455)" fillRule="evenodd" id="Icon" />
          </svg>
        </div>
      </div>
      <p className="font-['Lexend:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#494455] text-[14px] text-center tracking-[0.1px] whitespace-nowrap z-[1]">Inventory</p>
    </div>
  );
}

export default function NavItem() {
  return (
    <button className="content-stretch cursor-pointer flex items-center relative size-full" data-name="Nav item 2">
      <StateLayer />
    </button>
  );
}