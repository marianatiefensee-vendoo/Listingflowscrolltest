import svgPaths from "./svg-e31zsomku7";

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

export default function IconButtonStandard() {
  return (
    <div className="relative size-full" data-name="Icon Button Standard">
      <Content />
    </div>
  );
}