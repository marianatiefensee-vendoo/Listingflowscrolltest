import svgPaths from "./svg-4x9ksv1x4a";

function ContentFrame() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Content frame">
      <div className="overflow-clip relative shrink-0 size-[12px]" data-name="Icon leading">
        <div className="absolute inset-[9.3%_9.51%_9.5%_9.3%]" data-name="Icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.74306 9.74407">
            <g id="Icon">
              <path clipRule="evenodd" d={svgPaths.p1af4ae00} fill="#20005E" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.peb3b600} fill="#20005E" fillRule="evenodd" />
              <path d={svgPaths.p3b146f80} fill="var(--fill-0, #20005E)" />
              <path d={svgPaths.p342e3e00} fill="var(--fill-0, #20005E)" />
            </g>
          </svg>
        </div>
      </div>
      <div className="flex flex-col font-['Lexend:Regular',sans-serif] font-[350] justify-center leading-[0] relative shrink-0 text-[#20005e] text-[11px] text-center whitespace-nowrap">
        <p className="leading-[14px]">AI Suggested</p>
      </div>
    </div>
  );
}

function Tag() {
  return (
    <div className="bg-[#e8ddff] content-stretch flex items-center justify-center px-[4px] relative rounded-[4px] shrink-0" data-name="Tag">
      <ContentFrame />
      <div className="h-[20px] relative shrink-0 w-0" data-name="Min height XSmall">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Min height XSmall" />
        </svg>
      </div>
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Title">
      <div className="flex flex-col font-['Lexend:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#494455] text-[16px] tracking-[0.15px] whitespace-nowrap">
        <p className="leading-[24px]">Shipping Options</p>
      </div>
      <div className="content-stretch flex items-start relative shrink-0" data-name="Tag">
        <Tag />
      </div>
    </div>
  );
}

function InputTextContainer() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Input text container">
      <div className="flex flex-[1_0_0] flex-col font-['Lexend:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[#1d1a24] text-[16px] tracking-[0.5px]">
        <p className="leading-[24px]">Shipping Default</p>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-[48px] items-start justify-center min-h-px min-w-px py-[4px] relative" data-name="Content">
      <InputTextContainer />
    </div>
  );
}

function StateLayer1() {
  return (
    <div className="content-stretch flex h-[40px] items-center justify-center relative shrink-0 w-full" data-name="State-layer">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon">
        <div className="absolute flex inset-[26.36%_8.34%_26.36%_8.33%] items-center justify-center">
          <div className="-scale-y-100 flex-none h-[11.346px] w-[19.999px]">
            <div className="relative size-full" data-name="Icon">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9993 11.3458">
                <path d={svgPaths.p28797e80} fill="var(--fill-0, #1D1A24)" id="Icon" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[100px] shrink-0 w-[40px]" data-name="Content">
      <StateLayer1 />
    </div>
  );
}

function TrailingIcon() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[48px]" data-name="Trailing icon">
      <Content1 />
    </div>
  );
}

function StateLayer() {
  return (
    <div className="h-[56px] relative rounded-[5px] shrink-0 w-full" data-name="State-layer">
      <div aria-hidden="true" className="absolute border border-[#7a7486] border-solid inset-[-0.5px] pointer-events-none rounded-[5.5px]" />
      <div className="content-stretch flex gap-[4px] items-start pl-[16px] py-[4px] relative size-full">
        <Content />
        <TrailingIcon />
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Title />
      <StateLayer />
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4px] relative shrink-0" data-name="Label">
      <div className="flex flex-col font-['Lexend:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#494455] text-[14px] text-center tracking-[0.1px] whitespace-nowrap">
        <p className="leading-[20px]">Label</p>
      </div>
    </div>
  );
}

function StateLayer2() {
  return (
    <div className="content-stretch flex gap-[10px] items-center px-[16px] py-[10px] relative shrink-0" data-name="State - Layer">
      <Label />
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative rounded-[5px] shrink-0" data-name="Content">
      <StateLayer2 />
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4px] relative shrink-0" data-name="Label">
      <div className="flex flex-col font-['Lexend:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#494455] text-[14px] text-center tracking-[0.1px] whitespace-nowrap">
        <p className="leading-[20px]">Label</p>
      </div>
    </div>
  );
}

function StateLayer3() {
  return (
    <div className="content-stretch flex gap-[10px] items-center px-[16px] py-[10px] relative shrink-0" data-name="State - Layer">
      <Label1 />
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative rounded-[5px] shrink-0" data-name="Content">
      <StateLayer3 />
    </div>
  );
}

function Label2() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4px] relative shrink-0" data-name="Label">
      <div className="flex flex-col font-['Lexend:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#494455] text-[14px] text-center tracking-[0.1px] whitespace-nowrap">
        <p className="leading-[20px]">Label</p>
      </div>
    </div>
  );
}

function StateLayer4() {
  return (
    <div className="bg-[rgba(29,26,36,0.08)] flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="State - Layer">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[10px] items-center px-[16px] relative size-full">
          <Label2 />
        </div>
      </div>
    </div>
  );
}

function Content4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-center justify-center min-h-px min-w-px relative" data-name="Content">
      <StateLayer4 />
    </div>
  );
}

function Label3() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4px] relative shrink-0" data-name="Label">
      <div className="flex flex-col font-['Lexend:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#494455] text-[14px] text-center tracking-[0.1px] whitespace-nowrap">
        <p className="leading-[20px]">Label</p>
      </div>
    </div>
  );
}

function StateLayer5() {
  return (
    <div className="content-stretch flex gap-[10px] items-center px-[16px] py-[10px] relative shrink-0" data-name="State - Layer">
      <Label3 />
    </div>
  );
}

function Content5() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative rounded-[5px] shrink-0" data-name="Content">
      <StateLayer5 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div className="bg-white relative shrink-0 w-full" data-name="Menu-item1">
        <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col items-start justify-center px-[4px] py-[2px] relative w-full">
            <div className="content-stretch flex h-[48px] items-center justify-center relative rounded-[5px] shrink-0" data-name="Button- Outline">
              <Content2 />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="Menu-item2">
        <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col items-start justify-center px-[4px] py-[2px] relative w-full">
            <div className="content-stretch flex h-[48px] items-center justify-center relative rounded-[5px] shrink-0" data-name="Button- Outline">
              <Content3 />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Menu-item3">
        <div className="content-stretch flex h-[48px] items-center justify-center relative shrink-0 w-full" data-name="Button- Outline">
          <Content4 />
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="Menu-item4">
        <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col items-start justify-center px-[4px] py-[2px] relative w-full">
            <div className="content-stretch flex h-[48px] items-center justify-center relative rounded-[5px] shrink-0" data-name="Button- Outline">
              <Content5 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StateLayer6() {
  return (
    <div className="relative rounded-[12px] shrink-0 w-full" data-name="State layer">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] isolate items-center px-[16px] py-[10px] relative w-full">
          <div className="content-stretch flex items-center min-h-[28px] relative shrink-0 z-[3]" data-name="Leading element">
            <div className="relative shrink-0 size-[20px]" data-name="Icon">
              <div className="absolute inset-[4.17%]" data-name="Icon">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3333 18.3333">
                  <g id="Icon">
                    <path d={svgPaths.p3af8180} fill="var(--fill-0, #1D1A24)" />
                    <path clipRule="evenodd" d={svgPaths.p389ffd00} fill="var(--fill-0, #1D1A24)" fillRule="evenodd" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-[32px] min-w-px relative z-[2]" data-name="Content">
            <div className="flex flex-col font-['Lexend:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1d1a24] text-[14px] tracking-[0.1px] w-full">
              <p className="leading-[20px]">Add shipping preset</p>
            </div>
          </div>
          <div className="content-stretch flex gap-[8px] items-center justify-end min-h-[28px] relative shrink-0 z-[1]" data-name="Trailing element">
            <div className="relative shrink-0 size-[20px]" data-name="Icon">
              <div className="absolute inset-[29.17%_37.5%_29.17%_41.67%]" data-name="icon">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.16667 8.33333">
                  <path d={svgPaths.p26db6600} fill="var(--fill-0, #494455)" id="icon" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div className="bg-white content-stretch flex flex-col items-start justify-center min-h-[48px] relative rounded-[4px] shrink-0 w-full" data-name="List Item 06">
        <StateLayer6 />
      </div>
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-h-px min-w-px py-[2px] relative" data-name="List 1">
      <Frame1 />
      <Frame />
    </div>
  );
}

function MenuListBase() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.3),0px_2px_6px_2px_rgba(0,0,0,0.15)] shrink-0 w-full" data-name="Menu List Base">
      <List />
    </div>
  );
}

export default function Dropdown() {
  return (
    <div className="content-stretch flex flex-col gap-px items-start relative size-full" data-name="Dropdown">
      <div className="content-stretch flex flex-col items-start relative rounded-[4px] shrink-0 w-full" data-name="Input NEW">
        <Frame2 />
      </div>
      <MenuListBase />
    </div>
  );
}