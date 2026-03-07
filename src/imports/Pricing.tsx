import svgPaths from "./svg-whvz8o21if";

function Content() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-full items-center justify-center min-h-px min-w-px relative" data-name="Content">
      <div className="flex flex-col font-['Lexend:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-center text-white tracking-[0.5px] whitespace-nowrap">
        <p className="leading-[24px]">4</p>
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
      <p className="font-['Lexend:Regular',sans-serif] font-normal leading-[32px] relative shrink-0 text-[#1d1a24] text-[24px] whitespace-nowrap">Pricing</p>
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
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-px" data-name="Title">
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
      <div className="flex flex-col font-['Lexend:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#494455] text-[16px] tracking-[0.15px] whitespace-nowrap">
        <p className="leading-[24px]">Listing Price</p>
      </div>
      <div className="content-stretch flex items-start relative shrink-0" data-name="Tag">
        <Tag />
      </div>
    </div>
  );
}

function InputTextContainer() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Input text container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center py-[8px] relative size-full">
          <p className="flex-[1_0_0] font-['Lexend:Regular',sans-serif] font-normal leading-[32px] min-h-px min-w-px relative text-[#1d1a24] text-[24px]">U$ 45</p>
        </div>
      </div>
    </div>
  );
}

function Content2() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Content">
      <div className="content-stretch flex flex-col items-start py-[4px] relative size-full">
        <InputTextContainer />
      </div>
    </div>
  );
}

function StateLayer1() {
  return (
    <div className="h-[56px] relative rounded-[5px] shrink-0 w-full" data-name="State-layer">
      <div aria-hidden="true" className="absolute border border-[#7a7486] border-solid inset-0 pointer-events-none rounded-[5px]" />
      <div className="content-stretch flex gap-[4px] items-start pl-[16px] py-[4px] relative size-full">
        <Content2 />
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[327px]">
      <Title1 />
      <StateLayer1 />
    </div>
  );
}

function InputListingPrice() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Input listing price">
      <div className="content-stretch flex flex-col items-start relative rounded-[4px] shrink-0" data-name="Input NEW">
        <Frame1 />
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="bg-[#e7dff4] content-stretch flex flex-col items-end justify-center pl-[5px] pr-[3px] py-[4px] relative rounded-[18px] shrink-0" data-name="icon">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="lightbulb ai tip">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[21.521px] left-1/2 top-1/2 w-[18px]" data-name="Icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 21.5209">
            <g id="Icon">
              <path d={svgPaths.p26100f00} fill="var(--fill-0, #4A00BF)" />
              <path d={svgPaths.pafaea00} fill="var(--fill-0, #4A00BF)" />
              <path d={svgPaths.p30d13740} fill="var(--fill-0, #4A00BF)" />
              <path d={svgPaths.p2803ecf0} fill="var(--fill-0, #4A00BF)" />
              <path clipRule="evenodd" d={svgPaths.p32dd5d60} fill="var(--fill-0, #4A00BF)" fillRule="evenodd" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Div() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0" data-name="div">
      <p className="font-['Lexend:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#4a00bf] text-[16px] tracking-[0.15px] whitespace-nowrap">Pro tip</p>
    </div>
  );
}

function Wrapper1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center px-[4px] py-[8px] relative shrink-0" data-name="Wrapper">
      <Icon />
      <Div />
    </div>
  );
}

function Div3() {
  return (
    <div className="content-stretch flex flex-col font-['Lexend:Regular',sans-serif] font-normal items-start overflow-clip relative shrink-0 w-full whitespace-nowrap" data-name="div">
      <p className="leading-[16px] relative shrink-0 text-[#494455] text-[12px] tracking-[0.4px]">Recommended Range</p>
      <p className="leading-[28px] relative shrink-0 text-[#1e293b] text-[22px]">$38 - $52</p>
    </div>
  );
}

function Div5() {
  return <div className="h-[8px] rounded-[9999px] shrink-0 w-[129px]" data-name="div" style={{ backgroundImage: "linear-gradient(89.865deg, rgb(255, 255, 255) 18.514%, rgb(101, 60, 201) 55.024%)" }} />;
}

function Div4() {
  return (
    <div className="bg-[#f1f5f9] content-stretch flex flex-col h-[8px] items-start overflow-clip relative rounded-[9999px] shrink-0 w-[279px]" data-name="div">
      <Div5 />
    </div>
  );
}

function Div2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-full" data-name="div">
      <Div3 />
      <Div4 />
      <div className="flex flex-col font-['Lexend:Regular',sans-serif] font-[350] justify-center leading-[0] min-w-full opacity-38 relative shrink-0 text-[#1d1a24] text-[11px] w-[min-content]">
        <p className="leading-[14px]">Based on 124 similar items sold in the last 30 days.</p>
      </div>
    </div>
  );
}

function P() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0" data-name="p">
      <p className="font-['Lexend:Regular',sans-serif] font-[350] leading-[0] relative shrink-0 text-[#494455] text-[0px] text-[11px] whitespace-nowrap">
        <span className="leading-[14px]">{`Items in this category sell `}</span>
        <span className="font-['Lexend:Bold',sans-serif] leading-[14px] text-[#1d1a24]">2x faster</span>
        <span className="leading-[14px]">{` when priced under $50. Your current price is competitive.`}</span>
      </p>
    </div>
  );
}

function Div6() {
  return (
    <div className="bg-[#f6f4fe] content-stretch flex gap-[4px] items-start overflow-clip p-[8px] relative rounded-[8px] shrink-0" data-name="div">
      <P />
    </div>
  );
}

function Div1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start overflow-clip relative shrink-0 w-full" data-name="div">
      <Div2 />
      <Div6 />
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip px-[12px] relative rounded-[8px] shrink-0 w-[527px]" data-name="content">
      <Div1 />
    </div>
  );
}

function ProTip1() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[12px] pl-[12px] pr-[8px] pt-[4px] relative rounded-[16px] shrink-0" data-name="pro tip" style={{ backgroundImage: "linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 253, 255) 7.7045%, rgb(254, 251, 255) 26.563%, rgb(253, 247, 255) 59.594%)" }}>
      <div aria-hidden="true" className="absolute border border-[#cbc3d7] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Wrapper1 />
      <Content3 />
    </div>
  );
}

function ProTip() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Pro Tip">
      <ProTip1 />
    </div>
  );
}

function Wrapper() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="wrapper">
      <InputListingPrice />
      <ProTip />
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4px] relative shrink-0" data-name="Label">
      <div className="flex flex-col font-['Lexend:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#503f86] text-[14px] text-center tracking-[0.1px] whitespace-nowrap">
        <p className="leading-[20px]">Continue to shipping</p>
      </div>
    </div>
  );
}

function StateLayer2() {
  return (
    <div className="content-stretch flex gap-[10px] items-center px-[16px] py-[10px] relative shrink-0" data-name="State - Layer">
      <Label />
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

function Content4() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative rounded-[5px] shrink-0" data-name="Content">
      <StateLayer2 />
    </div>
  );
}

function ButtonFrame() {
  return (
    <div className="content-stretch flex items-start justify-end relative shrink-0 w-full" data-name="Button Frame">
      <div className="bg-[#c3b0ff] content-stretch flex h-[48px] items-center justify-center relative rounded-[5px] shrink-0" data-name="Button-Tonal">
        <Content4 />
      </div>
    </div>
  );
}

function Inputs() {
  return (
    <div className="relative shrink-0 w-full" data-name="Inputs">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[32px] items-center p-[24px] relative w-full">
          <Wrapper />
          <ButtonFrame />
        </div>
      </div>
    </div>
  );
}

export default function Pricing() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[12px] items-start relative rounded-[12px] size-full" data-name="Pricing">
      <div aria-hidden="true" className="absolute border border-[#cbc3d7] border-solid inset-[-1px] pointer-events-none rounded-[13px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.3),0px_1px_3px_0px_rgba(0,0,0,0.15)]" />
      <TopContent />
      <Inputs />
    </div>
  );
}