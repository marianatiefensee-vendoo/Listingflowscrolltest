import svgPaths from "./svg-7iy49d43n3";

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

function Content() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative rounded-[5px] shrink-0" data-name="Content">
      <StateLayer />
    </div>
  );
}

export default function ButtonOutline() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[5px] size-full" data-name="Button- Outline">
      <div aria-hidden="true" className="absolute border border-[#cbc3d7] border-solid inset-0 pointer-events-none rounded-[5px]" />
      <Content />
    </div>
  );
}