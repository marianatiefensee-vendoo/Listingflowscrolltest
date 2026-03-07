import svgPaths from "./svg-nl9hp3fmvu";

function Content() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-full items-center justify-center min-h-px min-w-px relative" data-name="Content">
      <div className="flex flex-col font-['Lexend:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-center text-white tracking-[0.5px] whitespace-nowrap">
        <p className="leading-[24px]">2</p>
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
      <p className="font-['Lexend:Regular',sans-serif] font-normal leading-[32px] relative shrink-0 text-[#1d1a24] text-[24px] whitespace-nowrap">Item Details</p>
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

function StateLayer() {
  return (
    <div className="content-stretch flex h-[40px] items-center justify-center relative shrink-0 w-full" data-name="State-layer">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Chevron Up">
        <div className="absolute flex inset-[26.36%_8.34%_26.36%_8.33%] items-center justify-center">
          <div className="-scale-y-100 flex-none h-[11.346px] w-[19.999px]">
            <div className="relative size-full" data-name="Icon">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9993 11.3458">
                <path d={svgPaths.p28797e80} fill="var(--fill-0, #494455)" id="Icon" />
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
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col items-center justify-center left-[calc(50%-0.5px)] overflow-clip rounded-[100px] top-1/2 w-[40px]" data-name="Content">
      <StateLayer />
    </div>
  );
}

function Title() {
  return (
    <div className="relative shrink-0 w-full" data-name="Title">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[24px] relative w-full">
          <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="Step NEW">
            <Step />
          </div>
          <div className="relative shrink-0 size-[48px]" data-name="Icon Button Standard">
            <Content1 />
          </div>
        </div>
      </div>
    </div>
  );
}

function TopContent() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start pt-[24px] relative rounded-tl-[12px] rounded-tr-[12px] shrink-0 w-full" data-name="Top Content" style={{ backgroundImage: "linear-gradient(90deg, rgba(104, 58, 223, 0.08) 0%, rgba(104, 58, 223, 0.08) 100%), linear-gradient(90deg, rgb(245, 238, 252) 0%, rgb(245, 238, 252) 100%)" }}>
      <Title />
      <div className="h-[2px] relative shrink-0 w-full" data-name="Divider">
        <div className="absolute bottom-0 left-0 right-0 top-full" data-name="horizontal line">
          <div className="absolute inset-[-1px_0_0_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 760 1">
              <line id="horizontal line" stroke="var(--stroke-0, #CBC3D7)" strokeLinecap="square" x1="0.5" x2="759.5" y1="0.5" y2="0.5" />
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
        <p className="leading-[14px]">AI generated</p>
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

function StateLayer1() {
  return (
    <div className="content-stretch flex gap-[8px] h-[32px] items-center justify-center px-[8px] py-[6px] relative shrink-0" data-name="state-layer">
      <div className="overflow-clip relative shrink-0 size-[18px]" data-name="Icon">
        <div className="absolute inset-[11.93%_4.83%]" data-name="Icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.2599 13.704">
            <g id="Icon">
              <path d={svgPaths.p2c549380} fill="var(--fill-0, #4A00BF)" />
              <path clipRule="evenodd" d={svgPaths.p38d46180} fill="var(--fill-0, #4A00BF)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p545b200} fill="var(--fill-0, #4A00BF)" fillRule="evenodd" />
            </g>
          </svg>
        </div>
      </div>
      <div className="flex flex-col font-['Lexend:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#4a00bf] text-[11px] text-center tracking-[0.5px] whitespace-nowrap">
        <p className="leading-[16px]">{`Rewrite `}</p>
      </div>
    </div>
  );
}

function AssistiveChip() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-end min-h-px min-w-px overflow-clip relative rounded-[8px]" data-name="Assistive chip">
      <StateLayer1 />
    </div>
  );
}

function Title1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Title">
      <div className="flex flex-col font-['Lexend:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#494455] text-[16px] tracking-[0.15px] whitespace-nowrap">
        <p className="leading-[24px]">Title</p>
      </div>
      <div className="content-stretch flex items-start relative shrink-0" data-name="Tag">
        <Tag />
      </div>
      <AssistiveChip />
    </div>
  );
}

function InputTextContainer() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Input text container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center py-[8px] relative size-full">
          <p className="flex-[1_0_0] font-['Lexend:Regular',sans-serif] font-normal h-full leading-[24px] min-h-px min-w-px relative text-[#1d1a24] text-[16px] tracking-[0.5px]">{`Men's Nike Sneakers - Navy Blue & Gray - Good Condition - Size 10`}</p>
        </div>
      </div>
    </div>
  );
}

function Content3() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Content">
      <div className="content-stretch flex flex-col items-start py-[4px] relative size-full">
        <InputTextContainer />
      </div>
    </div>
  );
}

function StateLayer2() {
  return (
    <div className="h-[56px] relative rounded-[5px] shrink-0 w-full" data-name="State-layer">
      <div aria-hidden="true" className="absolute border border-[#7a7486] border-solid inset-[-0.5px] pointer-events-none rounded-[5.5px]" />
      <div className="content-stretch flex gap-[4px] items-start pl-[16px] py-[4px] relative size-full">
        <Content3 />
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Title1 />
      <StateLayer2 />
    </div>
  );
}

function ContentFrame1() {
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
        <p className="leading-[14px]">AI generated</p>
      </div>
    </div>
  );
}

function Tag1() {
  return (
    <div className="bg-[#e8ddff] content-stretch flex items-center justify-center px-[4px] relative rounded-[4px] shrink-0" data-name="Tag">
      <ContentFrame1 />
      <div className="h-[20px] relative shrink-0 w-0" data-name="Min height XSmall">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Min height XSmall" />
        </svg>
      </div>
    </div>
  );
}

function StateLayer3() {
  return (
    <div className="content-stretch flex gap-[8px] h-[32px] items-center justify-center px-[8px] py-[6px] relative shrink-0" data-name="state-layer">
      <div className="overflow-clip relative shrink-0 size-[18px]" data-name="Icon">
        <div className="absolute inset-[11.93%_4.83%]" data-name="Icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.2599 13.704">
            <g id="Icon">
              <path d={svgPaths.p2c549380} fill="var(--fill-0, #4A00BF)" />
              <path clipRule="evenodd" d={svgPaths.p38d46180} fill="var(--fill-0, #4A00BF)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p545b200} fill="var(--fill-0, #4A00BF)" fillRule="evenodd" />
            </g>
          </svg>
        </div>
      </div>
      <div className="flex flex-col font-['Lexend:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#4a00bf] text-[11px] text-center tracking-[0.5px] whitespace-nowrap">
        <p className="leading-[16px]">Improve</p>
      </div>
    </div>
  );
}

function AssistiveChip1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-end min-h-px min-w-px overflow-clip relative rounded-[8px]" data-name="Assistive chip">
      <StateLayer3 />
    </div>
  );
}

function Title2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Title">
      <div className="flex flex-col font-['Lexend:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#494455] text-[16px] tracking-[0.15px] whitespace-nowrap">
        <p className="leading-[24px]">Description</p>
      </div>
      <div className="content-stretch flex items-start relative shrink-0" data-name="Tag">
        <Tag1 />
      </div>
      <AssistiveChip1 />
    </div>
  );
}

function InputTextContainer1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Input text container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center py-[8px] relative size-full">
          <p className="flex-[1_0_0] font-['Lexend:Regular',sans-serif] font-normal h-full leading-[24px] min-h-px min-w-px relative text-[#1d1a24] text-[16px] tracking-[0.5px]">Classic navy and gray Nike sneakers for men. These stylish sneakers are in good condition and ready for a new home. Perfect for casual wear or hitting the gym. Size 10.</p>
        </div>
      </div>
    </div>
  );
}

function Content4() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Content">
      <div className="content-stretch flex flex-col items-start py-[4px] relative size-full">
        <InputTextContainer1 />
      </div>
    </div>
  );
}

function StateLayer4() {
  return (
    <div className="h-[200px] relative rounded-[5px] shrink-0 w-full" data-name="State-layer">
      <div aria-hidden="true" className="absolute border border-[#7a7486] border-solid inset-[-0.5px] pointer-events-none rounded-[5.5px]" />
      <div className="content-stretch flex gap-[4px] items-start pl-[16px] py-[4px] relative size-full">
        <Content4 />
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Title2 />
      <StateLayer4 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start relative rounded-[4px] shrink-0 w-full" data-name="Input NEW">
        <Frame1 />
      </div>
      <div className="content-stretch flex flex-col items-start relative rounded-[4px] shrink-0 w-full" data-name="Input NEW">
        <Frame2 />
      </div>
    </div>
  );
}

function TitleAndCheck() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Title and check">
      <p className="font-['Lexend:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#1d1a24] text-[16px] tracking-[0.15px] whitespace-nowrap">Item Specifics</p>
    </div>
  );
}

function ContentFrame2() {
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
        <p className="leading-[14px]">AI generated</p>
      </div>
    </div>
  );
}

function Tag2() {
  return (
    <div className="bg-[#e8ddff] content-stretch flex items-center justify-center px-[4px] relative rounded-[4px] shrink-0" data-name="Tag">
      <ContentFrame2 />
      <div className="h-[20px] relative shrink-0 w-0" data-name="Min height XSmall">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Min height XSmall" />
        </svg>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <TitleAndCheck />
      <div className="content-stretch flex items-start relative shrink-0" data-name="Tag">
        <Tag2 />
      </div>
    </div>
  );
}

function SupportingText() {
  return (
    <div className="content-stretch flex items-start pr-[16px] pt-[4px] relative shrink-0" data-name="Supporting text">
      <p className="font-['Lexend:Regular',sans-serif] font-[350] leading-[14px] relative shrink-0 text-[#494455] text-[11px] whitespace-nowrap">You can continue now, or review specifics.</p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative">
      <Frame11 />
      <SupportingText />
    </div>
  );
}

function StateLayer5() {
  return (
    <div className="content-stretch flex h-[40px] items-center justify-center relative shrink-0 w-full" data-name="State-layer">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Chevron Down">
        <div className="absolute inset-[26.36%_8.34%_26.36%_8.33%]" data-name="Icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9993 11.3458">
            <path d={svgPaths.p28797e80} fill="var(--fill-0, #494455)" id="Icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Content5() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col items-center justify-center left-[calc(50%-0.5px)] overflow-clip rounded-[100px] top-1/2 w-[40px]" data-name="Content">
      <StateLayer5 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex items-start justify-end relative shrink-0">
      <button className="block cursor-pointer relative shrink-0 size-[48px]" data-name="Icon Button Standard">
        <Content5 />
      </button>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full">
      <Frame12 />
      <Frame10 />
    </div>
  );
}

function ItemSpecifics() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start py-[4px] relative rounded-[8px] shrink-0 w-full" data-name="Item Specifics">
      <Frame9 />
      <div className="h-[2px] relative shrink-0 w-full" data-name="Divider">
        <div className="absolute bottom-0 left-0 right-0 top-full" data-name="horizontal line">
          <div className="absolute inset-[-1px_0_0_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 712 1">
              <line id="horizontal line" stroke="var(--stroke-0, #E6E1E6)" strokeLinecap="square" x1="0.5" x2="711.5" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Title3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Title">
      <div className="flex flex-col font-['Lexend:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#494455] text-[16px] tracking-[0.15px] whitespace-nowrap">
        <p className="leading-[24px]">Brand</p>
      </div>
    </div>
  );
}

function InputTextContainer2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Input text container">
      <div className="flex flex-col font-['Lexend:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1d1a24] text-[16px] tracking-[0.5px] whitespace-nowrap">
        <p className="leading-[24px]">Nike</p>
      </div>
    </div>
  );
}

function Content6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-[48px] items-start justify-center min-h-px min-w-px py-[4px] relative" data-name="Content">
      <InputTextContainer2 />
    </div>
  );
}

function StateLayer6() {
  return (
    <div className="h-[56px] relative rounded-[5px] shrink-0 w-full" data-name="State-layer">
      <div aria-hidden="true" className="absolute border border-[#7a7486] border-solid inset-[-0.5px] pointer-events-none rounded-[5.5px]" />
      <div className="content-stretch flex gap-[4px] items-start pl-[16px] py-[4px] relative size-full">
        <Content6 />
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Title3 />
      <StateLayer6 />
    </div>
  );
}

function SupportingText1() {
  return <div className="content-stretch flex items-start pt-[4px] px-[16px] shrink-0 w-[208px]" data-name="Supporting text" />;
}

function Title4() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Title">
      <div className="flex flex-col font-['Lexend:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#494455] text-[16px] tracking-[0.15px] whitespace-nowrap">
        <p className="leading-[24px]">Size</p>
      </div>
    </div>
  );
}

function InputTextContainer3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Input text container">
      <div className="flex flex-col font-['Lexend:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1d1a24] text-[16px] tracking-[0.5px] whitespace-nowrap">
        <p className="leading-[24px]">10</p>
      </div>
    </div>
  );
}

function Content7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-[48px] items-start justify-center min-h-px min-w-px py-[4px] relative" data-name="Content">
      <InputTextContainer3 />
    </div>
  );
}

function StateLayer7() {
  return (
    <div className="h-[56px] relative rounded-[5px] shrink-0 w-full" data-name="State-layer">
      <div aria-hidden="true" className="absolute border border-[#7a7486] border-solid inset-[-0.5px] pointer-events-none rounded-[5.5px]" />
      <div className="content-stretch flex gap-[4px] items-start pl-[16px] py-[4px] relative size-full">
        <Content7 />
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Title4 />
      <StateLayer7 />
    </div>
  );
}

function Column() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px min-w-px relative" data-name="Column 1">
      <div className="content-stretch flex flex-col items-start relative rounded-[4px] shrink-0 w-full" data-name="Input NEW">
        <Frame3 />
        <SupportingText1 />
      </div>
      <div className="content-stretch flex flex-col items-start relative rounded-[4px] shrink-0 w-full" data-name="Input NEW">
        <Frame4 />
      </div>
    </div>
  );
}

function Title5() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Title">
      <div className="flex flex-col font-['Lexend:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#494455] text-[16px] text-left tracking-[0.15px] whitespace-nowrap">
        <p className="leading-[24px]">Category</p>
      </div>
      <div className="content-stretch flex items-start shrink-0" data-name="Tag" />
    </div>
  );
}

function InputTextContainer4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Input text container">
      <div className="flex flex-col font-['Lexend:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1d1a24] text-[16px] text-left tracking-[0.5px] whitespace-nowrap">
        <p className="leading-[24px]">{`Mens> Shoes> Athletic>Sneakers`}</p>
      </div>
    </div>
  );
}

function Content8() {
  return (
    <div className="content-stretch cursor-pointer flex flex-[1_0_0] flex-col h-[48px] items-start justify-center min-h-px min-w-px py-[4px] relative" data-name="Content" role="button" tabIndex="0">
      <InputTextContainer4 />
    </div>
  );
}

function StateLayer9() {
  return <div className="content-stretch flex h-[40px] items-center justify-center shrink-0 w-full" data-name="State-layer" />;
}

function Content9() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[100px] shrink-0 w-[40px]" data-name="Content">
      <StateLayer9 />
    </div>
  );
}

function TrailingIcon() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[48px]" data-name="Trailing icon">
      <Content9 />
    </div>
  );
}

function StateLayer8() {
  return (
    <div className="h-[56px] relative rounded-[5px] shrink-0 w-full" data-name="State-layer">
      <div aria-hidden="true" className="absolute border border-[#7a7486] border-solid inset-[-0.5px] pointer-events-none rounded-[5.5px]" />
      <div className="content-stretch flex gap-[4px] items-start pl-[16px] py-[4px] relative size-full">
        <Content8 />
        <TrailingIcon />
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Title5 />
      <StateLayer8 />
    </div>
  );
}

function SupportingText2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Supporting text">
      <div className="content-stretch flex items-start pt-[4px] px-[16px] relative w-full">
        <p className="flex-[1_0_0] font-['Lexend:Regular',sans-serif] font-[350] leading-[14px] min-h-px min-w-px relative text-[#494455] text-[11px] text-left">Matched based on visual similarity to 1,200+ listings.</p>
      </div>
    </div>
  );
}

function Title6() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Title">
      <div className="flex flex-col font-['Lexend:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#494455] text-[16px] tracking-[0.15px] whitespace-nowrap">
        <p className="leading-[24px]">Quantity</p>
      </div>
    </div>
  );
}

function InputTextContainer5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Input text container">
      <div className="flex flex-col font-['Lexend:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1d1a24] text-[16px] tracking-[0.5px] whitespace-nowrap">
        <p className="leading-[24px]">1</p>
      </div>
    </div>
  );
}

function Content10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-[48px] items-start justify-center min-h-px min-w-px py-[4px] relative" data-name="Content">
      <InputTextContainer5 />
    </div>
  );
}

function StateLayer10() {
  return (
    <div className="h-[56px] relative rounded-[5px] shrink-0 w-full" data-name="State-layer">
      <div aria-hidden="true" className="absolute border border-[#7a7486] border-solid inset-[-0.5px] pointer-events-none rounded-[5.5px]" />
      <div className="content-stretch flex gap-[4px] items-start pl-[16px] py-[4px] relative size-full">
        <Content10 />
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Title6 />
      <StateLayer10 />
    </div>
  );
}

function Column1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px min-w-px relative" data-name="Column 2">
      <button className="content-stretch cursor-pointer flex flex-col items-start relative shrink-0 w-full" data-name="Dropdown NEW">
        <div className="content-stretch flex flex-col items-start relative rounded-[4px] shrink-0 w-full" data-name="Input NEW">
          <Frame5 />
          <SupportingText2 />
        </div>
      </button>
      <div className="content-stretch flex flex-col items-start relative rounded-[4px] shrink-0 w-full" data-name="Input NEW">
        <Frame6 />
      </div>
    </div>
  );
}

function ItemDetailsFormWrapper() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full" data-name="Item Details Form Wrapper">
      <Column />
      <Column1 />
    </div>
  );
}

function Title7() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-[327px]" data-name="Title">
      <div className="flex flex-col font-['Lexend:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#494455] text-[16px] tracking-[0.15px] whitespace-nowrap">
        <p className="leading-[24px]">Condition</p>
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Label">
      <div className="flex flex-col font-['Lexend:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1d1a24] text-[14px] text-center tracking-[0.1px] whitespace-nowrap">
        <p className="leading-[20px]">Brand New</p>
      </div>
    </div>
  );
}

function StateLayer11() {
  return (
    <div className="content-stretch flex gap-[9.6px] items-center px-[19.2px] py-[12px] relative shrink-0" data-name="State - Layer">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="tag">
        <div className="absolute inset-[4.17%_7.62%_7.64%_4.17%]" data-name="Icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.1719 21.167">
            <g id="Icon">
              <path d={svgPaths.p3d4b8a00} fill="var(--fill-0, #1D1A24)" />
              <path clipRule="evenodd" d={svgPaths.p2bc62f00} fill="var(--fill-0, #1D1A24)" fillRule="evenodd" />
            </g>
          </svg>
        </div>
      </div>
      <Label />
    </div>
  );
}

function Content11() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative rounded-bl-[12px] rounded-br-[6px] rounded-tl-[12px] rounded-tr-[6px] shrink-0" data-name="Content">
      <div aria-hidden="true" className="absolute border border-[#7a7486] border-solid inset-0 pointer-events-none rounded-bl-[12px] rounded-br-[6px] rounded-tl-[12px] rounded-tr-[6px]" />
      <StateLayer11 />
    </div>
  );
}

function ButtonFilled() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center relative rounded-bl-[12px] rounded-br-[6px] rounded-tl-[12px] rounded-tr-[6px] shrink-0" data-name="Button-Filled">
      <Content11 />
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Label">
      <div className="flex flex-col font-['Lexend:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1d1a24] text-[14px] text-center tracking-[0.1px] whitespace-nowrap">
        <p className="leading-[20px]">Like New</p>
      </div>
    </div>
  );
}

function StateLayer12() {
  return (
    <div className="content-stretch flex gap-[9.6px] items-center px-[19.2px] py-[12px] relative shrink-0" data-name="State - Layer">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="star">
        <div className="absolute inset-[4.17%_4.17%_8.25%_4.17%]" data-name="Icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.9996 21.02">
            <path clipRule="evenodd" d={svgPaths.p2193a200} fill="var(--fill-0, #1D1A24)" fillRule="evenodd" id="Icon" />
          </svg>
        </div>
      </div>
      <Label1 />
    </div>
  );
}

function Content12() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center relative rounded-[6px] shrink-0" data-name="Content">
      <div aria-hidden="true" className="absolute border border-[#7a7486] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <StateLayer12 />
    </div>
  );
}

function ButtonFilled1() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center relative shrink-0" data-name="Button-Filled">
      <Content12 />
    </div>
  );
}

function Label2() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Label">
      <div className="flex flex-col font-['Lexend:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white tracking-[0.1px] whitespace-nowrap">
        <p className="leading-[20px]">Excellent</p>
      </div>
    </div>
  );
}

function StateLayer13() {
  return (
    <div className="content-stretch flex gap-[9.6px] items-center px-[19.2px] py-[12px] relative shrink-0" data-name="State - Layer">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Circle Check">
        <div className="absolute inset-[12.5%_9.72%_9.72%_12.5%]" data-name="Icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.6669 18.6662">
            <g id="Icon">
              <path d={svgPaths.p21a13400} fill="var(--fill-0, white)" />
              <path d={svgPaths.p229eb810} fill="var(--fill-0, white)" />
            </g>
          </svg>
        </div>
      </div>
      <Label2 />
    </div>
  );
}

function Content13() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative rounded-[6px] shrink-0" data-name="Content">
      <StateLayer13 />
    </div>
  );
}

function ButtonFilled2() {
  return (
    <div className="bg-[#6231d8] content-stretch flex items-center justify-center relative rounded-[16px] shrink-0" data-name="Button-Filled">
      <Content13 />
    </div>
  );
}

function Label3() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Label">
      <div className="flex flex-col font-['Lexend:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1d1a24] text-[14px] text-center tracking-[0.1px] whitespace-nowrap">
        <p className="leading-[20px]">Good</p>
      </div>
    </div>
  );
}

function StateLayer14() {
  return (
    <div className="content-stretch flex gap-[9.6px] items-center px-[19.2px] py-[12px] relative shrink-0" data-name="State - Layer">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="thumbs-up">
        <div className="absolute flex inset-[4.17%_5.49%_4.17%_4.17%] items-center justify-center">
          <div className="-scale-y-100 flex-none h-[24.2px] w-[23.851px]">
            <div className="relative size-full" data-name="Icon">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.6823 22.0001">
                <path clipRule="evenodd" d={svgPaths.p3a697100} fill="var(--fill-0, #1D1A24)" fillRule="evenodd" id="Icon" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Label3 />
    </div>
  );
}

function Content14() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center relative rounded-[6px] shrink-0" data-name="Content">
      <div aria-hidden="true" className="absolute border border-[#7a7486] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <StateLayer14 />
    </div>
  );
}

function ButtonFilled3() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center relative shrink-0" data-name="Button-Filled">
      <Content14 />
    </div>
  );
}

function Segments() {
  return (
    <div className="content-stretch cursor-pointer flex gap-[2px] items-center relative shrink-0" data-name="Segments">
      <button className="content-stretch flex items-start relative shrink-0" data-name="Segment 1">
        <ButtonFilled />
      </button>
      <button className="content-stretch flex items-start relative shrink-0" data-name="Segment 2">
        <ButtonFilled1 />
      </button>
      <button className="content-stretch flex items-start relative shrink-0" data-name="Segment 3">
        <ButtonFilled2 />
      </button>
      <button className="content-stretch flex items-start relative shrink-0" data-name="Segment 4">
        <ButtonFilled3 />
      </button>
      <button className="content-stretch flex items-start relative shrink-0" data-name="Segment 5">
        <div className="bg-white content-stretch flex items-center justify-center relative shrink-0" data-name="Button-Filled">
          <div className="bg-white content-stretch flex flex-col items-center justify-center relative rounded-[6px] shrink-0" data-name="Content">
            <div aria-hidden="true" className="absolute border border-[#7a7486] border-solid inset-0 pointer-events-none rounded-[6px]" />
            <div className="content-stretch flex gap-[9.6px] items-center px-[19.2px] py-[12px] relative shrink-0" data-name="State - Layer">
              <div className="overflow-clip relative shrink-0 size-[24px]" data-name="alert-circle">
                <div className="absolute inset-[4.16%]" data-name="Icon">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.0014 22.0014">
                    <g id="Icon">
                      <path d={svgPaths.p268d1300} fill="var(--fill-0, #1D1A24)" />
                      <path d={svgPaths.pfb9efc0} fill="var(--fill-0, #1D1A24)" />
                      <path clipRule="evenodd" d={svgPaths.p3a79fb00} fill="var(--fill-0, #1D1A24)" fillRule="evenodd" />
                    </g>
                  </svg>
                </div>
              </div>
              <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Label">
                <div className="flex flex-col font-['Lexend:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1d1a24] text-[14px] text-center tracking-[0.1px] whitespace-nowrap">
                  <p className="leading-[20px]">Fair</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </button>
    </div>
  );
}

function SupportingText3() {
  return <div className="content-stretch flex items-start pt-[4px] px-[16px] shrink-0" data-name="Supporting text" />;
}

function ConnectedButtonGroup() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Connected button group">
      <div className="content-stretch flex flex-col gap-[8px] items-start justify-center py-[2.4px] relative shrink-0" data-name="Connected button group">
        <Title7 />
        <Segments />
      </div>
      <SupportingText3 />
    </div>
  );
}

function ContentFrame3() {
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
        <p className="leading-[14px]">AI generated</p>
      </div>
    </div>
  );
}

function Tag3() {
  return (
    <div className="bg-[#e8ddff] content-stretch flex items-center justify-center px-[4px] relative rounded-[4px] shrink-0" data-name="Tag">
      <ContentFrame3 />
      <div className="h-[20px] relative shrink-0 w-0" data-name="Min height XSmall">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Min height XSmall" />
        </svg>
      </div>
    </div>
  );
}

function StateLayer15() {
  return (
    <div className="content-stretch flex gap-[8px] h-[32px] items-center justify-center px-[8px] py-[6px] relative shrink-0" data-name="state-layer">
      <div className="relative shrink-0 size-[18px]" data-name="Icon">
        <div className="absolute inset-[2.08%_6.25%_0_8.33%]" data-name="Icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.375 17.625">
            <g id="Icon">
              <path d={svgPaths.p14f40700} fill="var(--fill-0, #4A00BF)" />
              <path d={svgPaths.p39dc9d00} fill="var(--fill-0, #4A00BF)" />
              <path d={svgPaths.pbf96a00} fill="var(--fill-0, #4A00BF)" />
              <path d={svgPaths.p146de400} fill="var(--fill-0, #4A00BF)" />
            </g>
          </svg>
        </div>
      </div>
      <div className="flex flex-col font-['Lexend:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#4a00bf] text-[11px] text-center tracking-[0.5px] whitespace-nowrap">
        <p className="leading-[16px]">Improve</p>
      </div>
    </div>
  );
}

function AssistiveChip2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-end min-h-px min-w-px overflow-clip relative rounded-[8px]" data-name="Assistive chip">
      <StateLayer15 />
    </div>
  );
}

function Title8() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Title">
      <div className="flex flex-col font-['Lexend:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#494455] text-[16px] tracking-[0.15px] whitespace-nowrap">
        <p className="leading-[24px]">Tags (optional)</p>
      </div>
      <div className="content-stretch flex items-start relative shrink-0" data-name="Tag">
        <Tag3 />
      </div>
      <AssistiveChip2 />
    </div>
  );
}

function InputTextContainer6() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Input text container">
      <div className="flex flex-col font-['Lexend:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1d1a24] text-[16px] tracking-[0.5px] whitespace-nowrap">
        <p className="leading-[24px]">#nike #placeholder #tag</p>
      </div>
    </div>
  );
}

function Content15() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-[48px] items-start justify-center min-h-px min-w-px py-[4px] relative" data-name="Content">
      <InputTextContainer6 />
    </div>
  );
}

function StateLayer16() {
  return (
    <div className="h-[56px] relative rounded-[5px] shrink-0 w-full" data-name="State-layer">
      <div aria-hidden="true" className="absolute border border-[#7a7486] border-solid inset-[-0.5px] pointer-events-none rounded-[5.5px]" />
      <div className="content-stretch flex gap-[4px] items-start pl-[16px] py-[4px] relative size-full">
        <Content15 />
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Title8 />
      <StateLayer16 />
    </div>
  );
}

function SupportingText4() {
  return (
    <div className="content-stretch flex items-start pt-[4px] px-[16px] relative shrink-0" data-name="Supporting text">
      <p className="font-['Lexend:Regular',sans-serif] font-[350] leading-[14px] relative shrink-0 text-[#494455] text-[11px] whitespace-nowrap">Add tags to improve search visibility.</p>
    </div>
  );
}

function Title9() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Title">
      <div className="flex flex-col font-['Lexend:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#494455] text-[16px] tracking-[0.15px] whitespace-nowrap">
        <p className="leading-[24px]">SKU (optional)</p>
      </div>
    </div>
  );
}

function InputTextContainer7() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Input text container">
      <div className="flex flex-col font-['Lexend:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1d1a24] text-[16px] tracking-[0.5px] whitespace-nowrap">
        <p className="leading-[24px]">12345</p>
      </div>
    </div>
  );
}

function Content16() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-[48px] items-start justify-center min-h-px min-w-px py-[4px] relative" data-name="Content">
      <InputTextContainer7 />
    </div>
  );
}

function StateLayer17() {
  return (
    <div className="h-[56px] relative rounded-[5px] shrink-0 w-full" data-name="State-layer">
      <div aria-hidden="true" className="absolute border border-[#7a7486] border-solid inset-[-0.5px] pointer-events-none rounded-[5.5px]" />
      <div className="content-stretch flex gap-[4px] items-start pl-[16px] py-[4px] relative size-full">
        <Content16 />
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Title9 />
      <StateLayer17 />
    </div>
  );
}

function SupportingText5() {
  return <div className="content-stretch flex items-start pt-[4px] px-[16px] shrink-0" data-name="Supporting text" />;
}

function ItemSepcificContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[22px] items-start relative shrink-0 w-full" data-name="Item Sepcific container">
      <ItemDetailsFormWrapper />
      <ConnectedButtonGroup />
      <div className="content-stretch flex flex-col items-start relative rounded-[4px] shrink-0 w-full" data-name="Input NEW">
        <Frame7 />
        <SupportingText4 />
      </div>
      <div className="content-stretch flex flex-col items-start relative rounded-[4px] shrink-0 w-full" data-name="Input NEW">
        <Frame8 />
        <SupportingText5 />
      </div>
    </div>
  );
}

function InputFields() {
  return (
    <div className="content-stretch flex flex-col gap-[22px] items-start py-[12px] relative shrink-0 w-full" data-name="Input Fields">
      <Frame13 />
      <ItemSpecifics />
      <ItemSepcificContainer />
    </div>
  );
}

function Label4() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4px] relative shrink-0" data-name="Label">
      <div className="flex flex-col font-['Lexend:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#503f86] text-[14px] text-center tracking-[0.1px] whitespace-nowrap">
        <p className="leading-[20px]">Continue to Marketplaces</p>
      </div>
    </div>
  );
}

function StateLayer18() {
  return (
    <div className="content-stretch flex gap-[10px] items-center px-[16px] py-[10px] relative shrink-0" data-name="State - Layer">
      <Label4 />
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Chevron Right">
        <div className="absolute bottom-[8.34%] left-1/4 right-[27.73%] top-[8.33%]" data-name="Icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.45486 16.666">
            <path d={svgPaths.p23f63600} fill="var(--fill-0, #503F86)" id="Icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Content17() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative rounded-[5px] shrink-0" data-name="Content">
      <StateLayer18 />
    </div>
  );
}

function Actions() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-end pb-[24px] relative shrink-0 w-full" data-name="Actions">
      <div className="bg-[#c3b0ff] content-stretch flex h-[48px] items-center justify-center relative rounded-[5px] shrink-0" data-name="Button-Tonal">
        <Content17 />
      </div>
    </div>
  );
}

function Content2() {
  return (
    <div className="relative rounded-[12px] shrink-0 w-full" data-name="Content">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start justify-center px-[24px] relative w-full">
          <InputFields />
          <Actions />
        </div>
      </div>
    </div>
  );
}

export default function ItemDetailsSection() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[12px] items-start relative rounded-[12px] size-full" data-name="Item Details Section">
      <div aria-hidden="true" className="absolute border border-[#cbc3d7] border-solid inset-[-1px] pointer-events-none rounded-[13px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.3),0px_1px_3px_0px_rgba(0,0,0,0.15)]" />
      <TopContent />
      <Content2 />
    </div>
  );
}