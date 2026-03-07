import svgPaths from "./svg-6hyanb2n0a";
import imgChatGptImageNov72025101609Pm2 from "figma:asset/f8710e89d5ed930b490c6ff262479e91668922bb.png";

function Content() {
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
      <Content />
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

function Title() {
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

function Label() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4px] relative shrink-0" data-name="Label">
      <div className="flex flex-col font-['Lexend:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#494455] text-[14px] text-center tracking-[0.1px] whitespace-nowrap">
        <p className="leading-[20px]">Upload</p>
      </div>
    </div>
  );
}

function StateLayer() {
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
      <Label />
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative rounded-[5px] shrink-0" data-name="Content">
      <StateLayer />
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
            <Content1 />
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

export default function PhotosSection() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[12px] items-start relative rounded-[12px] size-full" data-name="Photos Section">
      <div aria-hidden="true" className="absolute border border-[#7a7486] border-solid inset-[-1px] pointer-events-none rounded-[13px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.3),0px_1px_3px_0px_rgba(0,0,0,0.15)]" />
      <TopContent />
      <Photos />
    </div>
  );
}