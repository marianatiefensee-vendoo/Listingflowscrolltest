import svgPaths from "./svg-qgsjj12jjx";

function StateLayer() {
  return (
    <div className="content-stretch flex h-[40px] items-center justify-center relative shrink-0 w-full" data-name="State-layer">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="menu">
        <div className="absolute inset-[20.83%_8.33%]" data-name="Icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 14">
            <g id="Icon">
              <path d={svgPaths.p306fec00} fill="var(--fill-0, #1D1A24)" />
              <path d={svgPaths.p13e7780} fill="var(--fill-0, #1D1A24)" />
              <path d={svgPaths.p12f04500} fill="var(--fill-0, #1D1A24)" />
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