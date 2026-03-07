import svgPaths from "./svg-u0uasmzsis";

function StateLayer() {
  return (
    <div className="content-stretch flex h-[40px] items-center justify-center relative shrink-0 w-full" data-name="State-layer">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="menu open">
        <div className="absolute inset-[20.83%_8.86%_20.83%_10.42%]" data-name="Icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.3726 14">
            <g id="Icon">
              <path d={svgPaths.p14331c80} fill="var(--fill-0, #1D1A24)" />
              <path d={svgPaths.p28422b80} fill="var(--fill-0, #1D1A24)" />
              <path d={svgPaths.p38eecc00} fill="var(--fill-0, #1D1A24)" />
              <path d={svgPaths.p29907780} fill="var(--fill-0, #1D1A24)" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col items-center justify-center left-[calc(50%-0.5px)] overflow-clip rounded-[100px] top-1/2 w-[40px]" data-name="Content">
      <StateLayer />
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4px] relative shrink-0" data-name="Label">
      <div className="flex flex-col font-['Lexend:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white tracking-[0.1px] whitespace-nowrap">
        <p className="leading-[20px]">Add item</p>
      </div>
    </div>
  );
}

function StateLayer1() {
  return (
    <div className="content-stretch flex gap-[10px] items-center px-[16px] py-[10px] relative rounded-[5px] shrink-0" data-name="State - Layer">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="plus-circle">
        <div className="absolute inset-[4.17%]" data-name="Icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3333 18.3333">
            <g id="Icon">
              <path d={svgPaths.p3af8180} fill="var(--fill-0, white)" />
              <path clipRule="evenodd" d={svgPaths.p389ffd00} fill="var(--fill-0, white)" fillRule="evenodd" />
            </g>
          </svg>
        </div>
      </div>
      <Label />
    </div>
  );
}

function Content1() {
  return (
    <div className="bg-[#4a00bf] content-stretch flex flex-col h-full items-center justify-center relative rounded-[5px] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.15),0px_1px_3px_0px_rgba(0,0,0,0.3)] shrink-0" data-name="Content">
      <StateLayer1 />
    </div>
  );
}

function MenuFab() {
  return (
    <div className="relative shrink-0 w-full" data-name="Menu & FAB">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start pb-[20px] pt-[44px] px-[20px] relative w-full">
          <button className="block cursor-pointer relative shrink-0 size-[48px]" data-name="Icon Button Standard">
            <Content />
          </button>
          <div className="content-stretch flex items-start relative shrink-0" data-name="Extended FAB">
            <div className="content-stretch flex h-[48px] items-center justify-center relative shrink-0" data-name="Button-Filled">
              <Content1 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StateLayer2() {
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

function StateLayer3() {
  return (
    <div className="content-stretch flex gap-[8px] isolate items-center justify-center p-[16px] relative shrink-0" data-name="State layer">
      <div className="overflow-clip relative shrink-0 size-[24px] z-[2]" data-name="Icon">
        <div className="absolute inset-[8.33%_12.5%]" data-name="Icon">
          <div className="absolute inset-[-5%_-5.56%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 22.0001">
              <path d={svgPaths.p32522b00} id="Icon" stroke="var(--stroke-0, #1D1A24)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
      <p className="font-['Lexend:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#494455] text-[14px] text-center tracking-[0.1px] whitespace-nowrap z-[1]">Automations</p>
    </div>
  );
}

function StateLayer4() {
  return (
    <div className="content-stretch flex gap-[8px] isolate items-center justify-center p-[16px] relative shrink-0" data-name="State layer">
      <div className="overflow-clip relative shrink-0 size-[24px] z-[2]" data-name="Icon">
        <div className="absolute inset-[12.5%]" data-name="Icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
            <path d={svgPaths.p1f65dc00} fill="var(--fill-0, #494455)" id="Icon" />
          </svg>
        </div>
      </div>
      <p className="font-['Lexend:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#494455] text-[14px] text-center tracking-[0.1px] whitespace-nowrap z-[1]">Analytics</p>
    </div>
  );
}

function StateLayer5() {
  return (
    <div className="content-stretch flex gap-[8px] isolate items-center justify-center p-[16px] relative shrink-0" data-name="State layer">
      <div className="overflow-clip relative shrink-0 size-[24px] z-[2]" data-name="Icon">
        <div className="absolute inset-[4.17%]" data-name="Icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
            <path clipRule="evenodd" d={svgPaths.p4fdf6f0} fill="var(--fill-0, #494455)" fillRule="evenodd" id="Icon" />
          </svg>
        </div>
      </div>
      <p className="font-['Lexend:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#494455] text-[14px] text-center tracking-[0.1px] whitespace-nowrap z-[1]">Marketplaces</p>
    </div>
  );
}

function StateLayer6() {
  return (
    <div className="content-stretch flex gap-[8px] isolate items-center justify-center p-[16px] relative shrink-0" data-name="State layer">
      <div className="overflow-clip relative shrink-0 size-[24px] z-[2]" data-name="Icon">
        <div className="absolute inset-[12.5%_9.72%_9.72%_12.5%]" data-name="Icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.666 18.666">
            <g id="Icon">
              <path clipRule="evenodd" d={svgPaths.p3474f00} fill="var(--fill-0, #494455)" fillRule="evenodd" />
              <path d={svgPaths.p1bffaa40} fill="var(--fill-0, #494455)" />
            </g>
          </svg>
        </div>
      </div>
      <p className="font-['Lexend:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#494455] text-[14px] text-center tracking-[0.1px] whitespace-nowrap z-[1]">Bulk Actions</p>
    </div>
  );
}

function Segments() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Segments">
      <div className="content-stretch cursor-pointer flex flex-col items-start px-[20px] relative size-full">
        <button className="content-stretch flex items-center relative shrink-0" data-name="Nav item 1">
          <StateLayer2 />
        </button>
        <button className="content-stretch flex items-center relative shrink-0" data-name="Nav item 2">
          <StateLayer3 />
        </button>
        <button className="content-stretch flex items-center relative shrink-0" data-name="Nav item 3">
          <StateLayer4 />
        </button>
        <button className="content-stretch flex items-center relative shrink-0" data-name="Nav item 4">
          <StateLayer5 />
        </button>
        <button className="content-stretch flex items-center relative shrink-0" data-name="Nav item 5">
          <StateLayer6 />
        </button>
      </div>
    </div>
  );
}

function StateLayer7() {
  return (
    <div className="content-stretch flex gap-[8px] isolate items-center justify-center p-[16px] relative shrink-0" data-name="State layer">
      <div className="overflow-clip relative shrink-0 size-[24px] z-[2]" data-name="Icon">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <g id="Icon">
            <path clipRule="evenodd" d={svgPaths.p258bb200} fill="var(--fill-0, #494455)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p2c727d00} fill="var(--fill-0, #494455)" fillRule="evenodd" />
          </g>
        </svg>
      </div>
      <p className="font-['Lexend:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#494455] text-[14px] text-center tracking-[0.1px] whitespace-nowrap z-[1]">Settings</p>
    </div>
  );
}

function Settings() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="settings">
      <div className="flex flex-col justify-end size-full">
        <div className="content-stretch flex flex-col items-start justify-end px-[20px] py-[44px] relative size-full">
          <button className="content-stretch cursor-pointer flex items-center relative shrink-0" data-name="Nav item 7">
            <StateLayer7 />
          </button>
        </div>
      </div>
    </div>
  );
}

export default function NavigationRail() {
  return (
    <div className="bg-[#f2ebf9] content-stretch flex flex-col gap-[40px] items-start overflow-clip relative rounded-[16px] size-full" data-name="Navigation Rail">
      <MenuFab />
      <Segments />
      <Settings />
    </div>
  );
}