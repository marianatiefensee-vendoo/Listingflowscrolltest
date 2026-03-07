import svgPaths from "./svg-2jobo4qree";
import imgSubtract from "figma:asset/5c92319200ec30eba7bd77ba7191f69ebafa1145.png";
import imgSubtract1 from "figma:asset/09054981fe3e2bc30c91e7d2ce35ab6ef097cd8e.png";
import imgSubtract2 from "figma:asset/ae20a4459aa5a71f682108fdc96b16e6a5872f5b.png";

function Step1() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Step">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <circle cx="16" cy="16" fill="var(--fill-0, #C3B0FF)" id="Ellipse 4" r="15.25" stroke="var(--stroke-0, #C3B0FF)" strokeWidth="1.5" />
      </svg>
      <div className="absolute left-[4px] overflow-clip size-[24px] top-[4px]" data-name="Check">
        <div className="absolute inset-[19.32%_8.33%_19.99%_8.33%]" data-name="Icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 14.5656">
            <path d={svgPaths.p97f8e00} fill="var(--fill-0, #503F86)" id="Icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame() {
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
      <Frame />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="font-['Lexend:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#7a7486] text-[14px] tracking-[0.25px] whitespace-nowrap">5 photos uploaded</p>
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[16px] h-full items-center min-h-px min-w-px relative" data-name="Title">
      <div className="content-stretch flex items-center relative shrink-0" data-name="Step NEW">
        <Step />
      </div>
      <Frame2 />
    </div>
  );
}

function Photo() {
  return (
    <div className="bg-[#f5eefc] mr-[-8px] relative rounded-[8px] shrink-0 size-[48px] z-[3]" data-name="Photo 1">
      <div className="absolute h-[47.92px] left-[0.04px] top-[-0.44px] w-[47.921px]" data-name="Subtract">
        <div className="absolute inset-[0_0_2%_0]">
          <img alt="" className="block max-w-none size-full" height="46.96" src={imgSubtract} width="47.921" />
        </div>
      </div>
    </div>
  );
}

function Photo1() {
  return (
    <div className="bg-[#f5eefc] mr-[-8px] relative rounded-[8px] shrink-0 size-[48px] z-[2]" data-name="Photo 2">
      <div className="absolute h-[47.92px] left-[0.04px] top-[-0.44px] w-[47.921px]" data-name="Subtract">
        <div className="absolute inset-[0_0_2%_0]">
          <img alt="" className="block max-w-none size-full" height="46.96" src={imgSubtract1} width="47.921" />
        </div>
      </div>
    </div>
  );
}

function Photo2() {
  return (
    <div className="bg-[#f5eefc] mr-[-8px] relative rounded-[8px] shrink-0 size-[48px] z-[1]" data-name="Photo 3">
      <div className="absolute h-[47.92px] left-[0.04px] top-[-0.44px] w-[47.921px]" data-name="Subtract">
        <div className="absolute inset-[0_0_2%_0]">
          <img alt="" className="block max-w-none size-full" height="46.96" src={imgSubtract2} width="47.921" />
        </div>
      </div>
    </div>
  );
}

function Thumbnails() {
  return (
    <div className="content-stretch flex isolate items-center pr-[8px] relative shrink-0" data-name="Thumbnails">
      <Photo />
      <Photo1 />
      <Photo2 />
    </div>
  );
}

function StateLayer() {
  return (
    <div className="content-stretch flex h-[40px] items-center justify-center relative shrink-0 w-full" data-name="State-layer">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Edit">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[18.183px] left-[calc(50%-0.5px)] top-[calc(50%+0.09px)] w-[19px]" data-name="Icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 18.1834">
            <g id="Icon">
              <path clipRule="evenodd" d={svgPaths.p1e751200} fill="var(--fill-0, #494455)" fillRule="evenodd" />
              <path d={svgPaths.p3a455080} fill="var(--fill-0, #494455)" />
            </g>
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

function Actions() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Actions">
      <Thumbnails />
      <div className="relative shrink-0 size-[48px]" data-name="Icon Button Standard">
        <Content />
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[24px] py-[16px] relative w-full">
          <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
            <Title />
          </div>
          <Actions />
        </div>
      </div>
    </div>
  );
}

function TopContent() {
  return (
    <div className="bg-[#f5eefc] content-stretch flex flex-col gap-[8px] items-start justify-center relative rounded-[12px] shrink-0 w-full" data-name="Top Content">
      <Frame1 />
    </div>
  );
}

export default function PhotosSection() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[12px] items-start justify-center relative rounded-[12px] size-full" data-name="Photos Section">
      <div aria-hidden="true" className="absolute border border-[#cbc3d7] border-solid inset-[-1px] pointer-events-none rounded-[13px]" />
      <TopContent />
    </div>
  );
}