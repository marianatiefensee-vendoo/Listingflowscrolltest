import svgPaths from "./svg-wo4tf7tw77";
import imgChatGptImageNov72025101609Pm2 from "figma:asset/f8710e89d5ed930b490c6ff262479e91668922bb.png";

function StateLayer() {
  return (
    <div className="content-stretch flex h-[40px] items-center justify-center relative shrink-0 w-full" data-name="State-layer">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Chevron Left">
        <div className="absolute inset-[5.53%_26.37%_11.14%_26.36%]" data-name="Icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.3458 19.9993">
            <path d={svgPaths.p1a5f6bc0} fill="var(--fill-0, #1D1A24)" id="Icon" />
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

function BackAction() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Back Action">
      <div className="relative shrink-0 size-[48px]" data-name="Leading Icon">
        <Content />
      </div>
    </div>
  );
}

function LeadingActions() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-full items-center min-h-px min-w-px relative" data-name="Leading Actions">
      <BackAction />
      <p className="font-['Lexend:Regular',sans-serif] font-normal h-full leading-[40px] overflow-hidden relative shrink-0 text-[#1d1a24] text-[32px] text-ellipsis w-[1312px] whitespace-nowrap">Create item</p>
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4px] relative shrink-0" data-name="Label">
      <div className="flex flex-col font-['Lexend:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#494455] text-[16px] text-center tracking-[0.15px] whitespace-nowrap">
        <p className="leading-[24px]">Templates</p>
      </div>
    </div>
  );
}

function StateLayer1() {
  return (
    <div className="content-stretch flex gap-[10px] items-center px-[16px] py-[10px] relative shrink-0" data-name="State - Layer">
      <Label />
      <div className="h-[26.399px] overflow-clip relative shrink-0 w-[24px]" data-name="Chevron Down">
        <div className="absolute inset-[26.36%_8.34%_26.36%_8.33%]" data-name="Icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9992 12.4799">
            <path d={svgPaths.p2dcfbd00} fill="var(--fill-0, #494455)" id="Icon" />
          </svg>
        </div>
      </div>
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

function TrailingActions() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Trailing Actions">
      <button className="bg-[#fdf7ff] content-stretch cursor-pointer flex h-[48px] items-center justify-center px-[20px] py-[16px] relative rounded-[8px] shrink-0 w-[142px]" data-name="Trailing Icon 2">
        <div aria-hidden="true" className="absolute border border-[#cbc3d7] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <Content1 />
      </button>
    </div>
  );
}

function LeadingAndTrailingActionsFrame() {
  return (
    <div className="content-stretch flex items-center pt-[8px] relative shrink-0 w-full" data-name="Leading and Trailing Actions Frame">
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <LeadingActions />
      </div>
      <TrailingActions />
    </div>
  );
}

function TopBarActions() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Top Bar Actions">
      <LeadingAndTrailingActionsFrame />
    </div>
  );
}

function Title() {
  return (
    <div className="bg-[rgba(104,58,223,0.08)] relative rounded-tl-[24px] rounded-tr-[24px] shrink-0 w-full" data-name="title">
      <div aria-hidden="true" className="absolute border-[#cbc3d7] border-b border-solid inset-0 pointer-events-none rounded-tl-[24px] rounded-tr-[24px]" />
      <div className="content-stretch flex flex-col items-start p-[24px] relative w-full">
        <TopBarActions />
      </div>
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-full items-center justify-center min-h-px min-w-px relative" data-name="Content">
      <div className="flex flex-col font-['Lexend:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-center text-white tracking-[0.5px] whitespace-nowrap">
        <p className="leading-[24px]">1</p>
      </div>
    </div>
  );
}

function Step1() {
  return (
    <div className="bg-[#64539b] content-stretch flex gap-[10px] items-center relative rounded-[16px] shrink-0 size-[32px]" data-name="Step">
      <div aria-hidden="true" className="absolute border-[#64539b] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Content2 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="font-['Lexend:Regular',sans-serif] font-normal leading-[32px] relative shrink-0 text-[#1d1a24] text-[24px] whitespace-nowrap">Photos</p>
    </div>
  );
}

function Step() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Step">
      <Step1 />
      <Frame1 />
    </div>
  );
}

function Title1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Title">
      <div className="content-stretch flex flex-col items-start px-[24px] py-[8px] relative w-full">
        <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Step NEW">
          <Step />
        </div>
      </div>
    </div>
  );
}

function TopContent() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start pt-[24px] relative rounded-tl-[12px] rounded-tr-[12px] shrink-0 w-full" data-name="Top Content" style={{ backgroundImage: "linear-gradient(90deg, rgba(104, 58, 223, 0.08) 0%, rgba(104, 58, 223, 0.08) 100%), linear-gradient(90deg, rgb(253, 247, 255) 0%, rgb(253, 247, 255) 100%)" }}>
      <Title1 />
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

function Frame() {
  return (
    <div className="absolute h-[108px] left-0 top-[26px] w-[160px]">
      <div className="absolute h-[108px] left-0 top-0 w-[160px]" data-name="ChatGPT Image Nov 7, 2025, 10_16_09 PM 2">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[118.52%] left-[-10%] max-w-none top-[-10.65%] w-[120%]" src={imgChatGptImageNov72025101609Pm2} />
        </div>
      </div>
    </div>
  );
}

function Illustration() {
  return (
    <div className="relative shrink-0 size-[160px]" data-name="Illustration">
      <Frame />
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center pb-[12px] relative shrink-0 text-center tracking-[0.5px] w-full whitespace-nowrap" data-name="Text">
      <p className="font-['Lexend:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[#1d1a24] text-[16px]">Drop images here or click to upload</p>
      <p className="font-['Lexend:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#6d6c71] text-[12px]">Support for JPG, PNG, SVG (max 10MB each)</p>
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4px] relative shrink-0" data-name="Label">
      <div className="flex flex-col font-['Lexend:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#494455] text-[14px] text-center tracking-[0.1px] whitespace-nowrap">
        <p className="leading-[20px]">Upload</p>
      </div>
    </div>
  );
}

function StateLayer2() {
  return (
    <div className="content-stretch flex gap-[10px] items-center px-[16px] py-[10px] relative shrink-0" data-name="State - Layer">
      <div className="relative shrink-0 size-[20px]" data-name="Auto Arrange">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[20.292px] left-1/2 top-[calc(50%+0.06px)] w-[22px]" data-name="Icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 22.1362">
            <g id="Icon">
              <path clipRule="evenodd" d={svgPaths.p1b10da80} fill="var(--fill-0, #494455)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p1eb17e80} fill="var(--fill-0, #494455)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p3e128500} fill="var(--fill-0, #494455)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p1bda1f00} fill="var(--fill-0, #494455)" fillRule="evenodd" />
              <path d={svgPaths.p90c6800} fill="var(--fill-0, #494455)" />
              <path d={svgPaths.p3b45c80} fill="var(--fill-0, #494455)" />
            </g>
          </svg>
        </div>
      </div>
      <Label1 />
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative rounded-[5px] shrink-0" data-name="Content">
      <StateLayer2 />
    </div>
  );
}

function ImageFrame() {
  return (
    <div className="bg-[#f5eefc] h-[323px] relative rounded-[12px] shrink-0 w-full" data-name="Image Frame">
      <div aria-hidden="true" className="absolute border border-[#cbc3d7] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[12px] relative size-full">
          <Illustration />
          <Text />
          <div className="content-stretch flex h-[48px] items-center justify-center relative rounded-[5px] shrink-0" data-name="Button- Outline">
            <div aria-hidden="true" className="absolute border border-[#cbc3d7] border-solid inset-0 pointer-events-none rounded-[5px]" />
            <Content3 />
          </div>
        </div>
      </div>
    </div>
  );
}

function InfoCaption() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Info Caption">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="info">
        <div className="absolute inset-[4.17%]" data-name="Icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
            <g id="Icon">
              <path d={svgPaths.p3b610d00} fill="var(--fill-0, #7A7486)" />
              <path d={svgPaths.p26d88780} fill="var(--fill-0, #7A7486)" />
              <path clipRule="evenodd" d={svgPaths.p396e0c00} fill="var(--fill-0, #7A7486)" fillRule="evenodd" />
            </g>
          </svg>
        </div>
      </div>
      <p className="font-['Lexend:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#7a7486] text-[12px] tracking-[0.4px] whitespace-nowrap">The more photos you add the better chance your listing has to sell</p>
    </div>
  );
}

function Upload() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start justify-center relative rounded-[12px] shrink-0 w-full" data-name="Upload">
      <ImageFrame />
      <InfoCaption />
    </div>
  );
}

function Photos() {
  return (
    <div className="relative rounded-[12px] shrink-0 w-full" data-name="Photos">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center pb-[24px] pt-[12px] px-[24px] relative w-full">
          <Upload />
        </div>
      </div>
    </div>
  );
}

function PhotosSection() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[12px] items-start relative rounded-[12px] shrink-0 w-full" data-name="Photos Section">
      <div aria-hidden="true" className="absolute border border-[#7a7486] border-solid inset-[-1px] pointer-events-none rounded-[13px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.3),0px_1px_3px_0px_rgba(0,0,0,0.15)]" />
      <TopContent />
      <Photos />
    </div>
  );
}

function Content4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-full items-center justify-center min-h-px min-w-px relative" data-name="Content">
      <div className="flex flex-col font-['Lexend:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-center text-white tracking-[0.5px] whitespace-nowrap">
        <p className="leading-[24px]">2</p>
      </div>
    </div>
  );
}

function Step3() {
  return (
    <div className="bg-[#64539b] content-stretch flex gap-[10px] items-center relative rounded-[16px] shrink-0 size-[32px]" data-name="Step">
      <div aria-hidden="true" className="absolute border-[#64539b] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Content4 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="font-['Lexend:Regular',sans-serif] font-normal leading-[32px] relative shrink-0 text-[#494455] text-[24px] whitespace-nowrap">Item Details</p>
    </div>
  );
}

function Step2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Step">
      <Step3 />
      <Frame2 />
    </div>
  );
}

function Title2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-px" data-name="Title">
      <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Step NEW">
        <Step2 />
      </div>
    </div>
  );
}

function StateLayer3() {
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
      <StateLayer3 />
    </div>
  );
}

function Actions() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Actions">
      <div className="relative shrink-0 size-[48px]" data-name="Icon Button Standard">
        <Content5 />
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[24px] py-[16px] relative w-full">
          <Title2 />
          <Actions />
        </div>
      </div>
    </div>
  );
}

function TopContent1() {
  return (
    <div className="bg-[#f5eefc] content-stretch flex flex-col gap-[8px] items-start justify-center relative rounded-[12px] shrink-0 w-full" data-name="Top Content">
      <Frame6 />
    </div>
  );
}

function ItemDetails() {
  return (
    <div className="bg-[#f2ebf9] relative rounded-[12px] shrink-0 w-full" data-name="Item Details">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <TopContent1 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#cbc3d7] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Content6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-full items-center justify-center min-h-px min-w-px relative" data-name="Content">
      <div className="flex flex-col font-['Lexend:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-center text-white tracking-[0.5px] whitespace-nowrap">
        <p className="leading-[24px]">3</p>
      </div>
    </div>
  );
}

function Step5() {
  return (
    <div className="bg-[#64539b] content-stretch flex gap-[10px] items-center relative rounded-[16px] shrink-0 size-[32px]" data-name="Step">
      <div aria-hidden="true" className="absolute border-[#64539b] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Content6 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="font-['Lexend:Regular',sans-serif] font-normal leading-[32px] relative shrink-0 text-[#494455] text-[24px] whitespace-nowrap">Marketplaces</p>
    </div>
  );
}

function Step4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Step">
      <Step5 />
      <Frame3 />
    </div>
  );
}

function Title3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-px" data-name="Title">
      <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Step NEW">
        <Step4 />
      </div>
    </div>
  );
}

function StateLayer4() {
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

function Content7() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col items-center justify-center left-[calc(50%-0.5px)] overflow-clip rounded-[100px] top-1/2 w-[40px]" data-name="Content">
      <StateLayer4 />
    </div>
  );
}

function Actions1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Actions">
      <div className="relative shrink-0 size-[48px]" data-name="Icon Button Standard">
        <Content7 />
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[24px] py-[16px] relative w-full">
          <Title3 />
          <Actions1 />
        </div>
      </div>
    </div>
  );
}

function TopContent2() {
  return (
    <div className="bg-[#f5eefc] content-stretch flex flex-col gap-[8px] items-start justify-center relative rounded-[12px] shrink-0 w-full" data-name="Top Content">
      <Frame7 />
    </div>
  );
}

function Marketplaces() {
  return (
    <div className="bg-[#f2ebf9] content-stretch flex flex-col items-start relative rounded-[12px] shrink-0 w-full" data-name="Marketplaces">
      <div aria-hidden="true" className="absolute border border-[#cbc3d7] border-solid inset-[-1px] pointer-events-none rounded-[13px]" />
      <TopContent2 />
    </div>
  );
}

function Content8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-full items-center justify-center min-h-px min-w-px relative" data-name="Content">
      <div className="flex flex-col font-['Lexend:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-center text-white tracking-[0.5px] whitespace-nowrap">
        <p className="leading-[24px]">4</p>
      </div>
    </div>
  );
}

function Step7() {
  return (
    <div className="bg-[#64539b] content-stretch flex gap-[10px] items-center relative rounded-[16px] shrink-0 size-[32px]" data-name="Step">
      <div aria-hidden="true" className="absolute border-[#64539b] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Content8 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="font-['Lexend:Regular',sans-serif] font-normal leading-[32px] relative shrink-0 text-[#494455] text-[24px] whitespace-nowrap">Pricing</p>
    </div>
  );
}

function Step6() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Step">
      <Step7 />
      <Frame4 />
    </div>
  );
}

function Title4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-px" data-name="Title">
      <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Step NEW">
        <Step6 />
      </div>
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

function Content9() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col items-center justify-center left-[calc(50%-0.5px)] overflow-clip rounded-[100px] top-1/2 w-[40px]" data-name="Content">
      <StateLayer5 />
    </div>
  );
}

function Actions2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Actions">
      <div className="relative shrink-0 size-[48px]" data-name="Icon Button Standard">
        <Content9 />
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[24px] py-[16px] relative w-full">
          <Title4 />
          <Actions2 />
        </div>
      </div>
    </div>
  );
}

function TopContent3() {
  return (
    <div className="bg-[#f5eefc] content-stretch flex flex-col gap-[8px] items-start justify-center relative rounded-[12px] shrink-0 w-full" data-name="Top Content">
      <div aria-hidden="true" className="absolute border border-[#cbc3d7] border-solid inset-[-1px] pointer-events-none rounded-[13px]" />
      <Frame8 />
    </div>
  );
}

function Pricing() {
  return (
    <div className="bg-[#f2ebf9] content-stretch flex flex-col gap-[12px] items-start relative rounded-[12px] shrink-0 w-full" data-name="Pricing">
      <div aria-hidden="true" className="absolute border border-[#cbc3d7] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <TopContent3 />
    </div>
  );
}

function Content10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-full items-center justify-center min-h-px min-w-px relative" data-name="Content">
      <div className="flex flex-col font-['Lexend:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-center text-white tracking-[0.5px] whitespace-nowrap">
        <p className="leading-[24px]">5</p>
      </div>
    </div>
  );
}

function Step9() {
  return (
    <div className="bg-[#64539b] content-stretch flex gap-[10px] items-center relative rounded-[16px] shrink-0 size-[32px]" data-name="Step">
      <div aria-hidden="true" className="absolute border-[#64539b] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Content10 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="font-['Lexend:Regular',sans-serif] font-normal leading-[32px] relative shrink-0 text-[#494455] text-[24px] whitespace-nowrap">Shipping</p>
    </div>
  );
}

function Step8() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Step">
      <Step9 />
      <Frame5 />
    </div>
  );
}

function Title5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-px" data-name="Title">
      <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Step NEW">
        <Step8 />
      </div>
    </div>
  );
}

function StateLayer6() {
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

function Content11() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col items-center justify-center left-[calc(50%-0.5px)] overflow-clip rounded-[100px] top-1/2 w-[40px]" data-name="Content">
      <StateLayer6 />
    </div>
  );
}

function Actions3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Actions">
      <div className="relative shrink-0 size-[48px]" data-name="Icon Button Standard">
        <Content11 />
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[24px] py-[16px] relative w-full">
          <Title5 />
          <Actions3 />
        </div>
      </div>
    </div>
  );
}

function TopContent4() {
  return (
    <div className="bg-[#f5eefc] content-stretch flex flex-col gap-[8px] items-start justify-center relative rounded-[12px] shrink-0 w-full" data-name="Top Content">
      <Frame9 />
    </div>
  );
}

function Shipping() {
  return (
    <div className="bg-[#f2ebf9] relative rounded-[12px] shrink-0 w-full" data-name="Shipping">
      <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip relative rounded-[inherit] w-full">
        <TopContent4 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#cbc3d7] border-solid inset-[-1px] pointer-events-none rounded-[13px]" />
    </div>
  );
}

function LeftPanelSections() {
  return (
    <div className="bg-[#fdf7ff] flex-[1_0_0] min-h-px min-w-px relative rounded-bl-[24px]" data-name="Left Panel - Sections">
      <div className="content-stretch flex flex-col gap-[24px] items-start pb-[32px] pt-[24px] px-[24px] relative w-full">
        <PhotosSection />
        <ItemDetails />
        <Marketplaces />
        <Pricing />
        <Shipping />
      </div>
    </div>
  );
}

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
    <div className="bg-[#f3edf7] opacity-38 relative rounded-[16px] shrink-0 w-full" data-name="Background+Border">
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

function Frame11() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start px-[24px] relative w-full">
        <BackgroundBorder />
      </div>
    </div>
  );
}

function Label2() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4px] relative shrink-0" data-name="Label">
      <div className="flex flex-col font-['Lexend:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#494455] text-[14px] text-center tracking-[0.1px] whitespace-nowrap">
        <p className="leading-[20px]">Select Marketplaces</p>
      </div>
    </div>
  );
}

function StateLayer7() {
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
      <Label2 />
    </div>
  );
}

function Content12() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative rounded-[5px] shrink-0" data-name="Content">
      <StateLayer7 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <div className="bg-[#fdf7ff] content-stretch flex h-[48px] items-center justify-center relative rounded-[5px] shrink-0" data-name="Button- Outline">
        <div aria-hidden="true" className="absolute border border-[#cbc3d7] border-solid inset-0 pointer-events-none rounded-[5px]" />
        <Content12 />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="bg-[#f2ebf9] opacity-38 relative rounded-[12px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#cbc3d7] border-solid inset-[-1px] pointer-events-none rounded-[13px]" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-center p-[24px] relative w-full">
          <div className="flex flex-col font-['Lexend:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1d1a24] text-[14px] tracking-[0.1px] w-full">
            <p className="leading-[20px]">Marketplaces</p>
          </div>
          <Frame10 />
          <div className="flex flex-col font-['Lexend:Regular',sans-serif] font-[350] justify-center leading-[0] relative shrink-0 text-[#7a7486] text-[12px] tracking-[0.2px] w-full">
            <p className="leading-[16px]">Select a marketplace to enable customize listing</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start px-[24px] relative w-full">
        <Container6 />
      </div>
    </div>
  );
}

function Label3() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4px] relative shrink-0" data-name="Label">
      <div className="flex flex-col font-['Lexend:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#494455] text-[16px] text-center tracking-[0.15px] whitespace-nowrap">
        <p className="leading-[24px]">Save Draft</p>
      </div>
    </div>
  );
}

function StateLayer8() {
  return (
    <div className="content-stretch flex gap-[10px] items-center opacity-38 px-[16px] py-[10px] relative shrink-0" data-name="State - Layer">
      <div className="h-[26.399px] overflow-clip relative shrink-0 w-[24px]" data-name="Tray_Draft">
        <div className="absolute inset-[19%_7.5%]" data-name="Icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.4004 16.3661">
            <path d={svgPaths.p1d831a00} fill="var(--fill-0, #494455)" id="Icon" />
          </svg>
        </div>
      </div>
      <Label3 />
    </div>
  );
}

function Content13() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative rounded-[5px] shrink-0" data-name="Content">
      <StateLayer8 />
    </div>
  );
}

function Label4() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4px] relative shrink-0" data-name="Label">
      <div className="flex flex-col font-['Lexend:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1d1a24] text-[16px] text-center tracking-[0.15px] whitespace-nowrap">
        <p className="leading-[24px]">Publish</p>
      </div>
    </div>
  );
}

function StateLayer9() {
  return (
    <div className="content-stretch flex gap-[10px] items-center opacity-38 overflow-clip px-[20px] py-[16px] relative shrink-0" data-name="State - Layer">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="publish">
        <div className="absolute inset-[16.67%]" data-name="Icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
            <path d={svgPaths.p4913d00} fill="var(--fill-0, #1D1A24)" id="Icon" />
          </svg>
        </div>
      </div>
      <Label4 />
    </div>
  );
}

function Content14() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative rounded-[5px] shrink-0" data-name="Content">
      <StateLayer9 />
    </div>
  );
}

function StateLayer10() {
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

function Content15() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-bl-[5px] rounded-br-[12px] rounded-tl-[5px] rounded-tr-[12px] shrink-0 size-[56px]" data-name="Content">
      <StateLayer10 />
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
              <Content13 />
            </div>
          </div>
        </div>
        <button className="content-stretch cursor-pointer flex gap-[2px] items-start relative shrink-0 w-full" data-name="Split Button">
          <div className="bg-[rgba(29,26,36,0.1)] content-stretch flex flex-[1_0_0] h-[56px] items-center justify-center min-h-px min-w-px relative rounded-[8px]" data-name="Button-Filled">
            <Content14 />
          </div>
          <div className="bg-[rgba(29,26,36,0.1)] content-stretch flex items-center justify-center relative rounded-bl-[5px] rounded-br-[12px] rounded-tl-[5px] rounded-tr-[12px] shrink-0" data-name="Icon Button Primary">
            <Content15 />
          </div>
        </button>
        <Container8 />
      </div>
    </div>
  );
}

function Frame13() {
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

function StateLayer11() {
  return (
    <div className="content-stretch flex h-[32px] items-center justify-center px-[16px] py-[6px] relative shrink-0" data-name="state-layer">
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1d1a24] text-[14px] text-center tracking-[0.1px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">Upload at least one photo to start listing</p>
      </div>
    </div>
  );
}

function ExtendedFab() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative" data-name="Extended FAB">
      <div className="bg-white content-stretch cursor-pointer flex flex-[1_0_0] items-center justify-center min-h-px min-w-px overflow-clip relative rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.3),0px_2px_6px_2px_rgba(0,0,0,0.15)]" data-name="Assistive chip">
        <StateLayer11 />
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="absolute backdrop-blur-[2px] bg-[rgba(255,255,255,0.08)] content-center flex flex-wrap gap-y-[10px] inset-[-24px_0_-122px_-2px] items-center justify-center overflow-clip px-[24px] py-[12px]">
      <ExtendedFab />
    </div>
  );
}

function Container() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-start relative w-full">
        <Completeness />
        <Frame11 />
        <Frame12 />
        <Frame13 />
        <Frame14 />
      </div>
    </div>
  );
}

function ListingSummary() {
  return (
    <div className="bg-[#f8f1ff] relative rounded-br-[24px] self-stretch shrink-0 w-[384px]" data-name="Listing Summary">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start py-[24px] relative size-full">
          <Container />
        </div>
      </div>
    </div>
  );
}

function Component2PanelLayoutWrapper() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative rounded-bl-[24px] rounded-br-[24px] shrink-0 w-full" data-name="2 Panel Layout Wrapper">
      <div aria-hidden="true" className="absolute border-[#cbc3d7] border-b border-l border-r border-solid inset-[0_-1px_-1px_-1px] pointer-events-none rounded-bl-[25px] rounded-br-[25px]" />
      <LeftPanelSections />
      <ListingSummary />
    </div>
  );
}

export default function MainInsideVertical() {
  return (
    <div className="bg-[#fdf7ff] content-stretch flex flex-col items-start relative rounded-[24px] size-full" data-name="Main Inside Vertical">
      <div aria-hidden="true" className="absolute border border-[#cbc3d7] border-solid inset-[-1px] pointer-events-none rounded-[25px]" />
      <Title />
      <Component2PanelLayoutWrapper />
    </div>
  );
}