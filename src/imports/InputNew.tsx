import svgPaths from "./svg-sg1tudxleu";

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

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Title />
      <StateLayer />
    </div>
  );
}

export default function InputNew() {
  return (
    <div className="content-stretch flex flex-col items-start relative rounded-[4px] size-full" data-name="Input NEW">
      <Frame />
    </div>
  );
}