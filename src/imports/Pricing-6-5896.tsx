import svgPaths from "./svg-il4iibzw7";

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
      <p className="font-['Lexend:Regular',sans-serif] font-normal leading-[32px] relative shrink-0 text-[#494455] text-[24px] whitespace-nowrap">Pricing</p>
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
    <div className="content-stretch flex items-center relative shrink-0" data-name="Actions">
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
          <Title />
          <Actions />
        </div>
      </div>
    </div>
  );
}

function TopContent() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative rounded-[12px] shrink-0 w-full" data-name="Top Content">
      <Frame1 />
    </div>
  );
}

export default function Pricing() {
  return (
    <div className="bg-[#f5eefc] content-stretch flex flex-col gap-[12px] items-start relative rounded-[12px] size-full" data-name="Pricing">
      <div aria-hidden="true" className="absolute border border-[#cbc3d7] border-solid inset-[-1px] pointer-events-none rounded-[13px]" />
      <TopContent />
    </div>
  );
}