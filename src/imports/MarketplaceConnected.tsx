import svgPaths from "./svg-0egkn05ubh";

function StateLayer() {
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

function Content() {
  return (
    <div className="absolute content-stretch flex flex-col items-center justify-center left-[0.77px] overflow-clip rounded-[57.692px] top-[0.77px] w-[18.462px]" data-name="Content">
      <StateLayer />
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
      <Content />
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

export default function MarketplaceConnected() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative size-full" data-name="Marketplace connected">
      <Group />
    </div>
  );
}