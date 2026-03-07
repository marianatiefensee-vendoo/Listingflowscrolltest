import svgPaths from "./svg-jit6py5a4i";

function Content() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-full items-center justify-center min-h-px min-w-px relative" data-name="Content">
      <div className="flex flex-col font-['Lexend:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-center text-white tracking-[0.5px] whitespace-nowrap">
        <p className="leading-[24px]">5</p>
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
      <p className="font-['Lexend:Regular',sans-serif] font-normal leading-[32px] relative shrink-0 text-[#494455] text-[24px] whitespace-nowrap">Shipping</p>
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
            <path d={svgPaths.p28797e80} fill="var(--fill-0, #494455)" id="Icon" />
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
    <div className="bg-[#f5eefc] content-stretch flex flex-col gap-[8px] items-start justify-center relative rounded-[12px] shrink-0 w-full" data-name="Top Content">
      <Frame1 />
    </div>
  );
}

export default function Shipping() {
  return (
    <div className="bg-[#f2ebf9] relative rounded-[12px] size-full" data-name="Shipping">
      <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip relative rounded-[inherit] size-full">
        <TopContent />
      </div>
      <div aria-hidden="true" className="absolute border border-[#cbc3d7] border-solid inset-[-1px] pointer-events-none rounded-[13px]" />
    </div>
  );
}