import svgPaths from "./svg-towfc7zrfc";
import imgThumbnail from "figma:asset/fc302d572214546f8204178ed8fb7d0af8c7506e.png";
import imgThumbnail1 from "figma:asset/818d7c9ebebd26d98ee60737907006a9b258dce3.png";
import imgThumbnail2 from "figma:asset/9fc19e9b972ada34a5069710f93ea92cd4258fea.png";
import imgThumbnail3 from "figma:asset/55ad25062cf42038188e8437b6d83a149a822f83.png";

function Content() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-full items-center justify-center min-h-px min-w-px relative" data-name="Content">
      <div className="flex flex-col font-['Lexend:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-center text-white tracking-[0.5px] whitespace-nowrap">
        <p className="leading-[24px]">3</p>
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
      <p className="font-['Lexend:Regular',sans-serif] font-normal leading-[32px] relative shrink-0 text-[#1d1a24] text-[24px] whitespace-nowrap">Marketplaces</p>
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

function TitleStep() {
  return (
    <div className="bg-[rgba(104,58,223,0.08)] content-stretch flex flex-col items-start relative rounded-tl-[12px] rounded-tr-[12px] shrink-0 w-full" data-name="Title step">
      <Frame2 />
    </div>
  );
}

function Thumbnail() {
  return (
    <div className="relative shrink-0 size-[56px]" data-name="Thumbnail">
      <div className="absolute inset-0 pointer-events-none rounded-[4px]" data-name="Thumbnail">
        <div aria-hidden="true" className="absolute inset-0 rounded-[4px]">
          <div className="absolute bg-white inset-0 rounded-[4px]" />
          <img alt="" className="absolute max-w-none object-cover rounded-[4px] size-full" src={imgThumbnail} />
        </div>
        <div aria-hidden="true" className="absolute border border-[#7a7486] border-solid inset-0 rounded-[4px]" />
      </div>
    </div>
  );
}

function StateLayer2() {
  return (
    <div className="content-stretch flex items-center justify-center p-[11px] relative rounded-[100px] shrink-0" data-name="state-layer">
      <div className="bg-[#4a00bf] rounded-[2px] shrink-0 size-[18px]" data-name="container" />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[24px] top-1/2" data-name="check_small">
        <div className="absolute bottom-[31.67%] left-1/4 right-1/4 top-[29.17%]" data-name="icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 9.4">
            <path d={svgPaths.p35d39780} fill="var(--fill-0, white)" id="icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function StateLayer1() {
  return (
    <div className="bg-[rgba(104,58,223,0.16)] relative rounded-[4px] shrink-0 w-full" data-name="State layer">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] isolate items-center px-[16px] py-[10px] relative w-full">
          <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 z-[3]" data-name="Leading element">
            <Thumbnail />
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative z-[2]" data-name="Content">
            <div className="content-stretch flex flex-col items-start justify-center min-h-[32px] relative shrink-0 w-[42px]" data-name="Building blocks/Content">
              <div className="flex flex-col font-['Lexend:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1d1a24] text-[16px] tracking-[0.5px] w-full">
                <p className="leading-[24px]">eBay</p>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-center justify-center p-[4px] relative shrink-0 z-[1]" data-name="Trailing element">
            <StateLayer2 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Thumbnail1() {
  return (
    <div className="relative shrink-0 size-[56px]" data-name="Thumbnail">
      <div className="absolute inset-0 pointer-events-none rounded-[4px]" data-name="Thumbnail">
        <div aria-hidden="true" className="absolute inset-0 rounded-[4px]">
          <div className="absolute bg-white inset-0 rounded-[4px]" />
          <img alt="" className="absolute max-w-none object-cover rounded-[4px] size-full" src={imgThumbnail1} />
        </div>
        <div aria-hidden="true" className="absolute border border-[#7a7486] border-solid inset-0 rounded-[4px]" />
      </div>
    </div>
  );
}

function StateLayer4() {
  return (
    <div className="content-stretch flex items-center justify-center p-[11px] relative rounded-[100px] shrink-0" data-name="state-layer">
      <div className="bg-[#4a00bf] rounded-[2px] shrink-0 size-[18px]" data-name="container" />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[24px] top-1/2" data-name="check_small">
        <div className="absolute bottom-[31.67%] left-1/4 right-1/4 top-[29.17%]" data-name="icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 9.4">
            <path d={svgPaths.p35d39780} fill="var(--fill-0, white)" id="icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function StateLayer3() {
  return (
    <div className="bg-[rgba(104,58,223,0.16)] relative rounded-[4px] shrink-0 w-full" data-name="State layer">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] isolate items-center px-[16px] py-[10px] relative w-full">
          <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 z-[3]" data-name="Leading element">
            <Thumbnail1 />
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative z-[2]" data-name="Content">
            <div className="content-stretch flex flex-col items-start justify-center min-h-[32px] relative shrink-0 w-[42px]" data-name="Building blocks/Content">
              <div className="flex flex-col font-['Lexend:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1d1a24] text-[16px] tracking-[0.5px] w-full">
                <p className="leading-[24px]">Mercari</p>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-center justify-center p-[4px] relative shrink-0 z-[1]" data-name="Trailing element">
            <StateLayer4 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Thumbnail2() {
  return (
    <div className="relative shrink-0 size-[56px]" data-name="Thumbnail">
      <div className="absolute inset-0 pointer-events-none rounded-[4px]" data-name="Thumbnail">
        <img alt="" className="absolute inset-0 max-w-none object-cover rounded-[4px] size-full" src={imgThumbnail2} />
        <div aria-hidden="true" className="absolute border border-[#cbc3d7] border-solid inset-0 rounded-[4px]" />
      </div>
    </div>
  );
}

function StateLayer6() {
  return (
    <div className="content-stretch flex items-center justify-center p-[11px] relative rounded-[100px] shrink-0" data-name="state-layer">
      <div className="relative rounded-[2px] shrink-0 size-[18px]" data-name="container">
        <div aria-hidden="true" className="absolute border-2 border-[#49454f] border-solid inset-0 pointer-events-none rounded-[2px]" />
      </div>
    </div>
  );
}

function StateLayer5() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="State layer">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] isolate items-center px-[16px] py-[10px] relative w-full">
          <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 z-[3]" data-name="Leading element">
            <Thumbnail2 />
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative z-[2]" data-name="Content">
            <div className="content-stretch flex flex-col items-start justify-center min-h-[32px] relative shrink-0 w-[42px]" data-name="Building blocks/Content">
              <div className="flex flex-col font-['Lexend:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1d1a24] text-[16px] tracking-[0.5px] w-full">
                <p className="leading-[24px]">Depop</p>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0 z-[1]" data-name="Trailing element">
            <div className="content-stretch flex flex-col items-center justify-center p-[4px] relative shrink-0" data-name="Checkboxes">
              <StateLayer6 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Thumbnail3() {
  return (
    <div className="relative shrink-0 size-[56px]" data-name="Thumbnail">
      <div className="absolute inset-0 pointer-events-none rounded-[4px]" data-name="Thumbnail">
        <img alt="" className="absolute inset-0 max-w-none object-cover rounded-[4px] size-full" src={imgThumbnail3} />
        <div aria-hidden="true" className="absolute border border-[#cbc3d7] border-solid inset-0 rounded-[4px]" />
      </div>
    </div>
  );
}

function StateLayer8() {
  return (
    <div className="content-stretch flex items-center justify-center p-[11px] relative rounded-[100px] shrink-0" data-name="state-layer">
      <div className="relative rounded-[2px] shrink-0 size-[18px]" data-name="container">
        <div aria-hidden="true" className="absolute border-2 border-[#49454f] border-solid inset-0 pointer-events-none rounded-[2px]" />
      </div>
    </div>
  );
}

function StateLayer7() {
  return (
    <div className="relative rounded-[12px] shrink-0 w-full" data-name="State layer">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] isolate items-center px-[16px] py-[10px] relative w-full">
          <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 z-[3]" data-name="Leading element">
            <Thumbnail3 />
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative z-[2]" data-name="Content">
            <div className="content-stretch flex flex-col items-start justify-center min-h-[32px] relative shrink-0 w-[42px]" data-name="Building blocks/Content">
              <div className="flex flex-col font-['Lexend:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1d1a24] text-[16px] tracking-[0.5px] w-full">
                <p className="leading-[24px]">Facebook</p>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0 z-[1]" data-name="Trailing element">
            <div className="content-stretch flex flex-col items-center justify-center p-[4px] relative shrink-0" data-name="Checkboxes">
              <StateLayer8 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Suggested() {
  return (
    <div className="relative shrink-0 w-full" data-name="suggested">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-start px-[24px] relative w-full">
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-h-px min-w-px overflow-clip relative self-stretch" data-name="List">
            <div className="bg-white content-stretch flex flex-col items-start justify-center min-h-[48px] relative rounded-[4px] shrink-0 w-full" data-name="List Item 02">
              <StateLayer1 />
            </div>
            <div className="bg-white content-stretch flex flex-col items-start justify-center min-h-[48px] relative rounded-[4px] shrink-0 w-full" data-name="List Item 03">
              <StateLayer3 />
            </div>
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-h-px min-w-px overflow-clip relative self-stretch" data-name="List">
            <div className="bg-white content-stretch flex flex-col items-start justify-center min-h-[48px] relative rounded-[4px] shrink-0 w-full" data-name="List Item 06">
              <div aria-hidden="true" className="absolute border border-[#cbc3d7] border-solid inset-0 pointer-events-none rounded-[4px]" />
              <StateLayer5 />
            </div>
            <div className="bg-white content-stretch flex flex-col items-start justify-center min-h-[48px] relative rounded-[4px] shrink-0 w-full" data-name="List Item 07">
              <div aria-hidden="true" className="absolute border border-[#cbc3d7] border-solid inset-0 pointer-events-none rounded-[4px]" />
              <StateLayer7 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4px] relative shrink-0" data-name="Label">
      <div className="flex flex-col font-['Lexend:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#503f86] text-[14px] text-center tracking-[0.1px] whitespace-nowrap">
        <p className="leading-[20px]">Continue to pricing</p>
      </div>
    </div>
  );
}

function StateLayer9() {
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

function Content2() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative rounded-[5px] shrink-0" data-name="Content">
      <StateLayer9 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-end justify-end size-full">
        <div className="content-stretch flex items-end justify-end px-[24px] relative w-full">
          <button className="bg-[#c3b0ff] content-stretch cursor-pointer flex h-[48px] items-center justify-center relative rounded-[5px] shrink-0" data-name="Button-Tonal">
            <Content2 />
          </button>
        </div>
      </div>
    </div>
  );
}

function Wrapper() {
  return (
    <div className="content-stretch flex flex-col gap-[22px] items-start py-[24px] relative shrink-0 w-full" data-name="wrapper">
      <Suggested />
      <Frame1 />
    </div>
  );
}

export default function MarketplaceSelectionWrapper() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative rounded-[12px] size-full" data-name="Marketplace Selection Wrapper">
      <div aria-hidden="true" className="absolute border border-[#cbc3d7] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.3),0px_1px_3px_0px_rgba(0,0,0,0.15)]" />
      <TitleStep />
      <div className="h-[2px] relative shrink-0 w-full" data-name="Divider">
        <div className="absolute bottom-0 left-0 right-0 top-full" data-name="horizontal line">
          <div className="absolute inset-[-1px_0_0_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 760 1">
              <line id="horizontal line" stroke="var(--stroke-0, #CBC3D7)" strokeLinecap="square" x1="0.5" x2="759.5" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
      </div>
      <Wrapper />
    </div>
  );
}