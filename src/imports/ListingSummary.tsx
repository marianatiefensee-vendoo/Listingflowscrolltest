import svgPaths from "./svg-fzcann6m2y";

function Div() {
  return (
    <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full whitespace-nowrap" data-name="div">
      <p className="font-['Lexend:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#494455] text-[14px] tracking-[0.25px]">Listing Progress</p>
      <p className="font-['Lexend:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#4a00bf] text-[12px] tracking-[0.5px]">0%</p>
    </div>
  );
}

function TrackAndStop() {
  return (
    <div className="flex-[1_0_0] h-[12px] min-h-px min-w-px relative" data-name="track-and-stop">
      <div className="absolute h-[12px] left-0 right-0 top-0" data-name="Track">
        <div className="-translate-y-1/2 absolute bg-[#e8def8] h-[4px] left-0 right-0 rounded-[2px] top-1/2" data-name="Track shape" />
      </div>
      <div className="-translate-y-1/2 absolute h-[8px] right-0 top-1/2 w-[6px]" data-name="Stop">
        <div className="-translate-y-1/2 absolute bg-[#4a00bf] right-0 rounded-[26px] size-[4px] top-1/2" data-name="Stop shape" />
      </div>
    </div>
  );
}

function Div1() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="div">
      <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Linear-determinate progress indicator">
        <TrackAndStop />
      </div>
    </div>
  );
}

function Completeness() {
  return (
    <div className="relative shrink-0 w-full" data-name="Completeness">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start px-[24px] relative w-full">
          <Div />
          <Div1 />
        </div>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Lexend:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1d1a24] text-[14px] tracking-[0.1px] w-full">
          <p className="leading-[20px]">Listing Preview</p>
        </div>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Lexend:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1d1a24] text-[14px] tracking-[0.1px] w-full">
        <p className="leading-[20px]">Title</p>
      </div>
    </div>
  );
}

function Div3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start min-h-px min-w-px overflow-clip relative" data-name="div">
      <p className="flex-[1_0_0] font-['Lexend:Regular',sans-serif] font-[350] leading-[16px] min-h-px min-w-px relative text-[#494455] text-[12px] tracking-[0.2px] w-[153.344px]">{`Brand `}</p>
      <p className="flex-[1_0_0] font-['Lexend:Medium',sans-serif] font-medium leading-[20px] min-h-px min-w-px relative text-[#1d1a24] text-[14px] tracking-[0.1px] w-[153.344px]">--</p>
    </div>
  );
}

function Div2() {
  return (
    <div className="content-stretch flex gap-[16px] h-[40px] items-start overflow-clip relative shrink-0 w-full" data-name="div">
      <Div3 />
    </div>
  );
}

function Div4() {
  return (
    <div className="content-stretch flex flex-col h-[40px] items-start overflow-clip relative shrink-0 w-full" data-name="div">
      <p className="flex-[1_0_0] font-['Lexend:Medium',sans-serif] font-medium leading-[16px] min-h-px min-w-px relative text-[#494455] text-[12px] tracking-[0.5px] w-[322.672px]">Condition</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative self-stretch" data-name="Container">
      <Container3 />
      <Div2 />
      <Div4 />
    </div>
  );
}

function Container1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-start relative w-full">
        <div className="bg-[#e7e0ec] relative rounded-[8px] shrink-0 size-[80px]" data-name="Image+Background+Border">
          <div aria-hidden="true" className="absolute border border-[#e7e0ec] border-solid inset-0 pointer-events-none rounded-[8px]" />
        </div>
        <Container2 />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative w-full">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="info">
          <div className="absolute inset-[4.17%]" data-name="Icon">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6667 14.6667">
              <g id="Icon">
                <path d={svgPaths.p1db78340} fill="var(--fill-0, #CBC3D7)" />
                <path d={svgPaths.p35534c30} fill="var(--fill-0, #CBC3D7)" />
                <path clipRule="evenodd" d={svgPaths.p1f296780} fill="var(--fill-0, #CBC3D7)" fillRule="evenodd" />
              </g>
            </svg>
          </div>
        </div>
        <div className="flex flex-col font-['Lexend:Regular',sans-serif] font-[350] justify-center leading-[0] relative shrink-0 text-[#494455] text-[12px] tracking-[0.2px] whitespace-nowrap">
          <p className="leading-[16px]">Listing Price</p>
        </div>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Lexend:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1d1a24] text-[22px] whitespace-nowrap">
          <p className="leading-[28px]">$--.--</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder1() {
  return (
    <div className="bg-[#fdf8fd] relative rounded-[8px] shrink-0 w-full" data-name="Background+Border">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between p-[12px] relative w-full">
          <Container4 />
          <Container5 />
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="bg-[#f3edf7] relative rounded-[16px] shrink-0 w-full" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#cbc3d7] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[17px] relative w-full">
        <Heading />
        <Container1 />
        <div className="h-px relative shrink-0 w-full" data-name="Horizontal Divider">
          <div aria-hidden="true" className="absolute border-[#e7e0ec] border-solid border-t inset-0 pointer-events-none" />
        </div>
        <BackgroundBorder1 />
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start px-[24px] relative w-full">
        <BackgroundBorder />
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4px] relative shrink-0" data-name="Label">
      <div className="flex flex-col font-['Lexend:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#494455] text-[14px] text-center tracking-[0.1px] whitespace-nowrap">
        <p className="leading-[20px]">Select Marketplaces</p>
      </div>
    </div>
  );
}

function StateLayer() {
  return (
    <div className="content-stretch flex gap-[10px] items-center px-[16px] py-[10px] relative shrink-0" data-name="State - Layer">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="plus-circle">
        <div className="absolute inset-[4.17%]" data-name="Icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3333 18.3333">
            <g id="Icon">
              <path d={svgPaths.p3af8180} fill="var(--fill-0, #494455)" />
              <path clipRule="evenodd" d={svgPaths.p389ffd00} fill="var(--fill-0, #494455)" fillRule="evenodd" />
            </g>
          </svg>
        </div>
      </div>
      <Label />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative rounded-[5px] shrink-0" data-name="Content">
      <StateLayer />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <div className="bg-[#fdf7ff] content-stretch flex h-[48px] items-center justify-center relative rounded-[5px] shrink-0" data-name="Button- Outline">
        <div aria-hidden="true" className="absolute border border-[#cbc3d7] border-solid inset-0 pointer-events-none rounded-[5px]" />
        <Content />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="bg-[#f2ebf9] relative rounded-[12px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#cbc3d7] border-solid inset-[-1px] pointer-events-none rounded-[13px]" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-center p-[24px] relative w-full">
          <div className="flex flex-col font-['Lexend:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1d1a24] text-[14px] tracking-[0.1px] w-full">
            <p className="leading-[20px]">Marketplaces</p>
          </div>
          <Frame />
          <div className="flex flex-col font-['Lexend:Regular',sans-serif] font-[350] justify-center leading-[0] relative shrink-0 text-[#7a7486] text-[12px] tracking-[0.2px] w-full">
            <p className="leading-[16px]">Select a marketplace to enable customize listing</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start px-[24px] relative w-full">
        <Container6 />
      </div>
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4px] relative shrink-0" data-name="Label">
      <div className="flex flex-col font-['Lexend:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#494455] text-[16px] text-center tracking-[0.15px] whitespace-nowrap">
        <p className="leading-[24px]">Save Draft</p>
      </div>
    </div>
  );
}

function StateLayer1() {
  return (
    <div className="content-stretch flex gap-[10px] items-center opacity-38 px-[16px] py-[10px] relative shrink-0" data-name="State - Layer">
      <div className="h-[26.399px] overflow-clip relative shrink-0 w-[24px]" data-name="Tray_Draft">
        <div className="absolute inset-[19%_7.5%]" data-name="Icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.4004 16.3661">
            <path d={svgPaths.p1d831a00} fill="var(--fill-0, #494455)" id="Icon" />
          </svg>
        </div>
      </div>
      <Label1 />
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative rounded-[5px] shrink-0" data-name="Content">
      <StateLayer1 />
    </div>
  );
}

function Label2() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4px] relative shrink-0" data-name="Label">
      <div className="flex flex-col font-['Lexend:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1d1a24] text-[16px] text-center tracking-[0.15px] whitespace-nowrap">
        <p className="leading-[24px]">Publish</p>
      </div>
    </div>
  );
}

function StateLayer2() {
  return (
    <div className="content-stretch flex gap-[10px] items-center opacity-38 overflow-clip px-[20px] py-[16px] relative shrink-0" data-name="State - Layer">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="publish">
        <div className="absolute inset-[16.67%]" data-name="Icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
            <path d={svgPaths.p4913d00} fill="var(--fill-0, #1D1A24)" id="Icon" />
          </svg>
        </div>
      </div>
      <Label2 />
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

function StateLayer3() {
  return (
    <div className="content-stretch flex h-[40px] items-center justify-center opacity-38 relative shrink-0 w-full" data-name="State-layer">
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

function Content3() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-bl-[5px] rounded-br-[12px] rounded-tl-[5px] rounded-tr-[12px] shrink-0 size-[56px]" data-name="Content">
      <StateLayer3 />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Lexend:Regular',sans-serif] font-[350] justify-center leading-[0] relative shrink-0 text-[#7a7486] text-[12px] text-center tracking-[0.2px] w-full">
        <p className="leading-[16px]">Complete all sections to publish.</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[24px] relative w-full">
        <div className="bg-[rgba(29,26,36,0.1)] h-[56px] relative rounded-[8px] shrink-0 w-full" data-name="Button- Outline">
          <div aria-hidden="true" className="absolute border border-[#cbc3d7] border-solid inset-0 pointer-events-none rounded-[8px]" />
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex items-center justify-center px-[20px] py-[16px] relative size-full">
              <Content1 />
            </div>
          </div>
        </div>
        <button className="content-stretch cursor-pointer flex gap-[2px] items-start relative shrink-0 w-full" data-name="Split Button">
          <div className="bg-[rgba(29,26,36,0.1)] content-stretch flex flex-[1_0_0] h-[56px] items-center justify-center min-h-px min-w-px relative rounded-[8px]" data-name="Button-Filled">
            <Content2 />
          </div>
          <div className="bg-[rgba(29,26,36,0.1)] content-stretch flex items-center justify-center relative rounded-bl-[5px] rounded-br-[12px] rounded-tl-[5px] rounded-tr-[12px] shrink-0" data-name="Icon Button Primary">
            <Content3 />
          </div>
        </button>
        <Container8 />
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div className="h-[2px] relative shrink-0 w-full" data-name="Divider">
        <div className="absolute bottom-0 left-0 right-0 top-full" data-name="horizontal line">
          <div className="absolute inset-[-1px_0_0_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 384 1">
              <line id="horizontal line" stroke="var(--stroke-0, #7A7486)" strokeLinecap="square" strokeOpacity="0.16" x1="0.5" x2="383.5" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
      </div>
      <Container7 />
    </div>
  );
}

function Container() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-start relative w-full">
        <Completeness />
        <Frame1 />
        <Frame2 />
        <Frame3 />
      </div>
    </div>
  );
}

export default function ListingSummary() {
  return (
    <div className="bg-[#f8f1ff] content-stretch flex items-start overflow-clip py-[24px] relative rounded-br-[24px] size-full" data-name="Listing Summary">
      <Container />
    </div>
  );
}