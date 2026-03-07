import svgPaths from "./svg-wf0w3hea8h";

function Content() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-full items-center justify-center min-h-px min-w-px relative" data-name="Content">
      <div className="flex flex-col font-['Lexend:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-center text-white tracking-[0.5px] whitespace-nowrap">
        <p className="leading-[24px]">5</p>
      </div>
    </div>
  );
}

function Step1() {
  return (
    <div className="bg-[#64539b] content-stretch flex gap-[10px] items-center relative rounded-[16px] shrink-0 size-[32px]" data-name="Step">
      <div aria-hidden="true" className="absolute border-[#64539b] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Content />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="font-['Lexend:Regular',sans-serif] font-normal leading-[32px] relative shrink-0 text-[#1d1a24] text-[24px] whitespace-nowrap">Shipping</p>
    </div>
  );
}

function Step() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Step">
      <Step1 />
      <Frame />
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[143px]" data-name="Title">
      <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Step NEW">
        <Step />
      </div>
    </div>
  );
}

function StateLayer() {
  return (
    <div className="content-stretch flex h-[40px] items-center justify-center relative shrink-0 w-full" data-name="State-layer">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Chevron Down">
        <div className="absolute inset-[26.36%_8.34%_26.36%_8.33%]" data-name="Icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9993 11.3458">
            <path d={svgPaths.p28797e80} fill="var(--fill-0, #1D1A24)" id="Icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Content1() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col items-center justify-center left-[calc(50%-0.5px)] overflow-clip rounded-[100px] top-1/2 w-[40px]" data-name="Content">
      <StateLayer />
    </div>
  );
}

function Actions() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Actions">
      <div className="relative shrink-0 size-[48px]" data-name="Icon Button Standard">
        <Content1 />
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[24px] py-[16px] relative w-full">
          <Title />
          <Actions />
        </div>
      </div>
    </div>
  );
}

function TopContent() {
  return (
    <div className="bg-[rgba(104,58,223,0.08)] content-stretch flex flex-col gap-[8px] items-start justify-center relative rounded-tl-[12px] rounded-tr-[12px] shrink-0 w-full" data-name="Top Content">
      <Frame2 />
      <div className="h-[2px] relative shrink-0 w-full" data-name="Divider">
        <div className="absolute bottom-0 left-0 right-0 top-full" data-name="horizontal line">
          <div className="absolute inset-[-1px_0_0_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 768 1">
              <line id="horizontal line" stroke="var(--stroke-0, #CBC3D7)" strokeLinecap="square" x1="0.5" x2="767.5" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

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
        <p className="leading-[14px]">AI suggested</p>
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

function Title1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Title">
      <div className="flex flex-col font-['Lexend:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#494455] text-[16px] text-left tracking-[0.15px] whitespace-nowrap">
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
    <div className="content-stretch flex items-center relative shrink-0" data-name="Input text container">
      <div className="flex flex-col font-['Lexend:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1d1a24] text-[16px] text-left tracking-[0.5px] whitespace-nowrap">
        <p className="leading-[24px]">Shipping Method Default</p>
      </div>
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch cursor-pointer flex flex-[1_0_0] flex-col h-[48px] items-start justify-center min-h-px min-w-px py-[4px] relative" data-name="Content" role="button" tabIndex="0">
      <InputTextContainer />
    </div>
  );
}

function StateLayer2() {
  return <div className="content-stretch flex h-[40px] items-center justify-center shrink-0 w-full" data-name="State-layer" />;
}

function Content3() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[100px] shrink-0 w-[40px]" data-name="Content">
      <StateLayer2 />
    </div>
  );
}

function TrailingIcon() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[48px]" data-name="Trailing icon">
      <Content3 />
    </div>
  );
}

function StateLayer1() {
  return (
    <div className="h-[56px] relative rounded-[5px] shrink-0 w-full" data-name="State-layer">
      <div aria-hidden="true" className="absolute border border-[#7a7486] border-solid inset-[-0.5px] pointer-events-none rounded-[5.5px]" />
      <div className="content-stretch flex gap-[4px] items-start pl-[16px] py-[4px] relative size-full">
        <Content2 />
        <TrailingIcon />
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Title1 />
      <StateLayer1 />
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4px] relative shrink-0" data-name="Label">
      <div className="flex flex-col font-['Lexend:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white tracking-[0.1px] whitespace-nowrap">
        <p className="leading-[20px]">Continue to Publish</p>
      </div>
    </div>
  );
}

function StateLayer3() {
  return (
    <div className="content-stretch flex gap-[10px] items-center px-[16px] py-[10px] relative rounded-[5px] shrink-0" data-name="State - Layer">
      <Label />
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Chevron Right">
        <div className="absolute bottom-[8.34%] left-1/4 right-[27.73%] top-[8.33%]" data-name="Icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.45486 16.666">
            <path d={svgPaths.p23f63600} fill="var(--fill-0, white)" id="Icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Content4() {
  return (
    <div className="bg-[#4a00bf] content-stretch flex flex-col h-full items-center justify-center relative rounded-[5px] shrink-0" data-name="Content">
      <StateLayer3 />
    </div>
  );
}

function ButtonFrame() {
  return (
    <div className="content-stretch flex items-start justify-end relative shrink-0 w-full" data-name="Button Frame">
      <div className="content-stretch flex h-[48px] items-center justify-center relative shrink-0" data-name="Button-Filled">
        <Content4 />
      </div>
    </div>
  );
}

function ShippingOptions() {
  return (
    <div className="relative shrink-0 w-full" data-name="Shipping Options">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[32px] items-start p-[24px] relative w-full">
          <button className="content-stretch cursor-pointer flex flex-col items-start relative shrink-0 w-[327px]" data-name="Dropdown NEW">
            <div className="content-stretch flex flex-col items-start relative rounded-[4px] shrink-0 w-full" data-name="Input NEW">
              <Frame1 />
            </div>
          </button>
          <ButtonFrame />
        </div>
      </div>
    </div>
  );
}

export default function Shipping() {
  return (
    <div className="bg-white relative rounded-[12px] size-full" data-name="Shipping">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <TopContent />
        <ShippingOptions />
      </div>
      <div aria-hidden="true" className="absolute border border-[#cbc3d7] border-solid inset-[-1px] pointer-events-none rounded-[13px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.3),0px_1px_3px_1px_rgba(0,0,0,0.15)]" />
    </div>
  );
}