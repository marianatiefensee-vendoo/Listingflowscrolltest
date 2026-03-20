import svgPaths from "./svg-su4quagqiz";

function Header() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-full items-end min-h-px min-w-px relative" data-name="Header">
      <div className="flex flex-col font-['Lexend:Regular',sans-serif] font-normal h-full justify-end leading-[0] relative shrink-0 text-[#1d1a24] text-[28px] w-[404px]">
        <p className="leading-[36px]">Marketplace Controls</p>
      </div>
    </div>
  );
}

function StateLayer() {
  return (
    <div className="content-stretch flex h-[40px] items-center justify-center relative shrink-0 w-full" data-name="State-layer">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="x">
        <div className="absolute inset-[16.67%]" data-name="Icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
            <path d={svgPaths.p29f7f600} fill="var(--fill-0, #494455)" id="Icon" />
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

function CloseAffordance() {
  return (
    <div className="content-stretch flex h-full items-center justify-end relative shrink-0" data-name="Close affordance">
      <div className="relative shrink-0 size-[48px]" data-name="Icon Button Standard">
        <Content />
      </div>
    </div>
  );
}

function HeaderWrapper() {
  return (
    <div className="h-[96px] relative shrink-0 w-full" data-name="Header Wrapper">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[24px] relative size-full">
          <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
            <Header />
          </div>
          <div className="flex flex-row items-center self-stretch">
            <CloseAffordance />
          </div>
        </div>
      </div>
    </div>
  );
}

function StateLayer1() {
  return (
    <div className="content-stretch flex h-[18.462px] items-center justify-center relative shrink-0 w-full" data-name="State-layer">
      <div className="overflow-clip relative shrink-0 size-[11.538px]" data-name="Icon">
        <div className="absolute inset-[19.32%_8.33%_19.99%_8.33%]" data-name="Icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.61539 7.00269">
            <path d={svgPaths.p10cd0500} fill="var(--fill-0, white)" id="Icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Content1() {
  return (
    <div className="absolute content-stretch flex flex-col items-center justify-center left-[0.77px] overflow-clip rounded-[57.692px] top-[0.77px] w-[18.462px]" data-name="Content">
      <StateLayer1 />
    </div>
  );
}

function IconStatus() {
  return (
    <div className="col-1 ml-[44px] mt-[45px] relative rounded-[15.385px] row-1 size-[20px]" data-name="icon  status" style={{ backgroundImage: "linear-gradient(90deg, rgba(104, 58, 223, 0.08) 0%, rgba(104, 58, 223, 0.08) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }}>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[20px] top-1/2">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <circle cx="10" cy="10" fill="var(--fill-0, #6231D8)" id="Ellipse 8" r="10" />
        </svg>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[20px] top-1/2">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <circle cx="10" cy="10" id="Ellipse 9" r="9.5" stroke="var(--stroke-0, #6231D8)" />
        </svg>
      </div>
      <Content1 />
    </div>
  );
}

function Group() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Group">
      <div className="border-0 border-[#4a00bf] border-solid col-1 ml-0 mt-0 relative rounded-[5px] row-1 shadow-[0px_0.6px_1.2px_0px_rgba(0,0,0,0.3),0px_1.2px_3.6px_0px_rgba(0,0,0,0.15)] size-[60px]" data-name="Marketplace Logos" style={{ backgroundImage: "linear-gradient(90deg, rgba(104, 58, 223, 0.08) 0%, rgba(104, 58, 223, 0.08) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }}>
        <div className="absolute inset-[36.68%_16.77%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 39.882 15.9828">
            <g id="Vector">
              <path d={svgPaths.p24f5bff0} fill="#FFBD14" />
              <path d={svgPaths.p11510a00} fill="#F02D2D" />
              <path d={svgPaths.pace9b00} fill="#0968F6" />
              <path d={svgPaths.p5f74100} fill="var(--fill-0, #92C821)" />
            </g>
          </svg>
        </div>
      </div>
      <IconStatus />
    </div>
  );
}

function MarketplaceConnected() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Marketplace connected">
      <Group />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[calc(24.06%-0.51px)_calc(31.33%-0.37px)_calc(26.23%-0.47px)_calc(32.29%-0.35px)]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.8276 29.8319">
        <g id="Group">
          <path d={svgPaths.p37e04300} fill="var(--fill-0, #5E6DF2)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Group">
      <div className="bg-white border-[#cbc3d7] border-[0.983px] border-solid col-1 ml-0 mt-0 relative rounded-[5px] row-1 shadow-[0px_0.6px_1.2px_0px_rgba(0,0,0,0.3),0px_0.6px_1.8px_0px_rgba(0,0,0,0.15)] size-[60px]" data-name="Marketplace Logos">
        <Group2 />
      </div>
    </div>
  );
}

function MarketplaceConnected1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Marketplace connected">
      <Group1 />
    </div>
  );
}

function ButtonGroup() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Button Group">
      <MarketplaceConnected />
      <MarketplaceConnected1 />
    </div>
  );
}

function Buttons() {
  return (
    <div className="relative shrink-0 w-full" data-name="Buttons">
      <div className="content-stretch flex flex-col items-start px-[24px] relative w-full">
        <ButtonGroup />
      </div>
    </div>
  );
}

function MArketplaceButtons() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px py-[12px] relative" data-name="MArketplace buttons">
      <Buttons />
    </div>
  );
}

function MarketplaceSelectionControls() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Marketplace Selection Controls">
      <MArketplaceButtons />
    </div>
  );
}

function SideSheetTopBar() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Side Sheet Top Bar">
      <HeaderWrapper />
      <MarketplaceSelectionControls />
    </div>
  );
}

function TabContents() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Tab Contents">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] h-full items-center justify-center py-[14px] relative">
          <div className="flex flex-col font-['Lexend:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#494455] text-[14px] text-center tracking-[0.1px] whitespace-nowrap">
            <p className="leading-[20px]">Item Details</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function StateLayer2() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="State-layer">
      <div className="flex flex-col items-center justify-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-end px-[16px] relative size-full">
          <TabContents />
        </div>
      </div>
    </div>
  );
}

function TabContents1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Tab Contents">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] h-full items-center justify-center py-[14px] relative">
          <div className="flex flex-col font-['Lexend:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#494455] text-[14px] text-center tracking-[0.1px] whitespace-nowrap">
            <p className="leading-[20px]">Pricing</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function StateLayer3() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="State-layer">
      <div className="flex flex-col items-center justify-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-end px-[16px] relative size-full">
          <TabContents1 />
        </div>
      </div>
    </div>
  );
}

function TabContents2() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Tab Contents">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] h-full items-center justify-center py-[14px] relative">
          <div className="flex flex-col font-['Lexend:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#494455] text-[14px] text-center tracking-[0.1px] whitespace-nowrap">
            <p className="leading-[20px]">Shipping</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function StateLayer4() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="State-layer">
      <div className="flex flex-col items-center justify-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-end px-[16px] relative size-full">
          <TabContents2 />
        </div>
      </div>
    </div>
  );
}

function Indicator() {
  return (
    <div className="absolute bottom-0 h-[14px] left-0 right-0" data-name="Indicator">
      <div className="absolute bg-[#4a00bf] bottom-0 h-[3px] left-[2px] right-[2px] rounded-tl-[100px] rounded-tr-[100px]" data-name="Shape" />
    </div>
  );
}

function TabContents3() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Tab Contents">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] h-full items-center justify-center py-[14px] relative">
          <div className="flex flex-col font-['Lexend:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#4a00bf] text-[14px] text-center tracking-[0.1px] whitespace-nowrap">
            <p className="leading-[20px]">Optional</p>
          </div>
          <Indicator />
        </div>
      </div>
    </div>
  );
}

function StateLayer5() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="State-layer">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[16px] relative size-full">
          <TabContents3 />
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div className="content-stretch cursor-pointer flex items-center overflow-clip relative shrink-0 w-full" data-name="Tabs/Marketplace Tabs">
        <button className="content-stretch flex flex-[1_0_0] flex-col h-[48px] items-center justify-end min-h-px min-w-px overflow-clip relative" data-name="Item Details">
          <StateLayer2 />
        </button>
        <button className="content-stretch flex flex-[1_0_0] flex-col h-[48px] items-center justify-end min-h-px min-w-px overflow-clip relative" data-name="Pricing">
          <StateLayer3 />
        </button>
        <button className="content-stretch flex flex-[1_0_0] flex-col h-[48px] items-center justify-end min-h-px min-w-px overflow-clip relative" data-name="Shipping">
          <StateLayer4 />
        </button>
        <button className="content-stretch flex flex-[1_0_0] flex-col items-center justify-end min-h-px min-w-px overflow-clip relative rounded-bl-[12px] rounded-tl-[12px]" data-name="Optional">
          <StateLayer5 />
        </button>
      </div>
    </div>
  );
}

function Header1() {
  return (
    <div className="bg-[#e7dff4] content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Header">
      <Frame2 />
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Title">
      <div className="flex flex-col font-['Lexend:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#494455] text-[16px] text-left tracking-[0.15px] whitespace-nowrap">
        <p className="leading-[24px]">Condition Description</p>
      </div>
    </div>
  );
}

function InputText() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Input Text">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[4px] py-[10px] relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['Lexend:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[#7a7486] text-[16px] text-left tracking-[0.5px]">
            <p className="leading-[24px]">Excellent, some wear marks</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Content4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px relative" data-name="Content">
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <InputText />
      </div>
    </div>
  );
}

function InputTextContainer() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Input text container">
      <Content4 />
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-[48px] items-start justify-center min-h-px min-w-px py-[4px] relative" data-name="Content">
      <InputTextContainer />
    </div>
  );
}

function StateLayer6() {
  return (
    <div className="bg-white h-[56px] relative rounded-[5px] shrink-0 w-full" data-name="State-layer">
      <div aria-hidden="true" className="absolute border border-[#7a7486] border-solid inset-[-0.5px] pointer-events-none rounded-[5.5px]" />
      <div className="content-stretch flex gap-[4px] items-start px-[16px] py-[4px] relative size-full">
        <Content3 />
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Title />
      <StateLayer6 />
    </div>
  );
}

function ContentSideSheet() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip py-[24px] relative shrink-0 w-full" data-name="Content side sheet">
      <div className="relative shrink-0 w-full" data-name="Marketplace Details Tabs">
        <div className="content-stretch flex flex-col items-start p-[20px] relative w-full">
          <button className="content-stretch cursor-pointer flex flex-col items-start relative rounded-[4px] shrink-0 w-full" data-name="Input NEW">
            <Frame />
          </button>
        </div>
      </div>
    </div>
  );
}

function Div() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-x-clip overflow-y-auto sticky top-0 w-full" data-name="div">
      <Header1 />
      <ContentSideSheet />
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-x-clip overflow-y-auto sticky top-0 w-full" data-name="Content">
      <Div />
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4px] relative shrink-0" data-name="Label">
      <div className="flex flex-col font-['Lexend:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#4a00bf] text-[16px] text-center tracking-[0.15px] whitespace-nowrap">
        <p className="leading-[24px]">Cancel</p>
      </div>
    </div>
  );
}

function StateLayer7() {
  return (
    <div className="content-stretch flex gap-[10px] items-center px-[16px] py-[10px] relative shrink-0" data-name="State - Layer">
      <Label />
    </div>
  );
}

function Content5() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative rounded-[5px] shrink-0" data-name="Content">
      <StateLayer7 />
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4px] relative shrink-0" data-name="Label">
      <div className="flex flex-col font-['Lexend:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white tracking-[0.1px] whitespace-nowrap">
        <p className="leading-[20px]">Apply Changes</p>
      </div>
    </div>
  );
}

function StateLayer8() {
  return (
    <div className="content-stretch flex gap-[10px] items-center px-[16px] py-[10px] relative rounded-[5px] shrink-0" data-name="State - Layer">
      <Label1 />
    </div>
  );
}

function Content6() {
  return (
    <div className="bg-[#4a00bf] content-stretch flex flex-col h-full items-center justify-center relative rounded-[5px] shrink-0" data-name="Content">
      <StateLayer8 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative">
      <div className="flex flex-row items-center justify-end size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-end pr-[20px] relative w-full">
          <div className="content-stretch flex h-[48px] items-center justify-center relative shrink-0" data-name="Primary button">
            <Content6 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Buttons1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Buttons">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center pb-[20px] pt-[12px] relative w-full">
        <div className="content-stretch flex h-[48px] items-center justify-center px-[16px] py-[10px] relative rounded-[12px] shrink-0" data-name="Cancel">
          <Content5 />
        </div>
        <Frame1 />
      </div>
    </div>
  );
}

function Actions() {
  return (
    <div className="bg-[#fdf7ff] content-stretch flex flex-col items-start justify-end relative shrink-0 w-full" data-name="Actions">
      <div className="relative shrink-0 w-full" data-name="Horizontal divider">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center relative w-full">
          <div className="h-0 relative shrink-0 w-full" data-name="Divider">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 656 1">
                <line id="Divider" stroke="var(--stroke-0, #CBC3D7)" x2="656" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Buttons1 />
    </div>
  );
}

function VerticalDivider() {
  return (
    <div className="absolute bottom-[-1px] left-0 top-0 w-px" data-name="Vertical divider">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 1025">
        <g clipPath="url(#clip0_41_6924)" id="Vertical divider">
          <line id="Divider" stroke="var(--stroke-0, #CBC3D7)" x1="0.5" x2="0.500045" y1="-2.18557e-08" y2="1025" />
        </g>
        <defs>
          <clipPath id="clip0_41_6924">
            <rect fill="white" height="1025" width="1" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function SideSheetPricing() {
  return (
    <div className="bg-[#fdf7ff] content-stretch flex flex-[1_0_0] flex-col h-[1024px] items-start min-h-px min-w-px relative" data-name="Side Sheet - pricing">
      <div aria-hidden="true" className="absolute border-[#cbc3d7] border-b border-solid inset-[0_0_-1px_0] pointer-events-none" />
      <SideSheetTopBar />
      <div className="h-[2px] relative shrink-0 w-full" data-name="Divider">
        <div className="absolute bottom-0 left-0 right-0 top-full" data-name="horizontal line">
          <div className="absolute inset-[-2px_0_0_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 656 2">
              <line id="horizontal line" stroke="var(--stroke-0, #CBC3D7)" strokeLinecap="square" strokeWidth="2" x1="1" x2="655" y1="1" y2="1" />
            </svg>
          </div>
        </div>
      </div>
      <Content2 />
      <Actions />
      <VerticalDivider />
    </div>
  );
}

export default function SideSheet() {
  return (
    <div className="content-stretch flex items-start relative size-full" data-name="side sheet">
      <SideSheetPricing />
    </div>
  );
}