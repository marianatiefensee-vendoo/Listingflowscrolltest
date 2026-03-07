import svgPaths from "./svg-0z0tfsd3ra";

function Container() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="overflow-clip relative shrink-0 size-[40px]" data-name="Circle Check">
        <div className="absolute inset-[12.5%_9.72%_9.72%_12.5%]" data-name="Icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31.1114 31.1103">
            <g id="Icon">
              <path d={svgPaths.p175a3400} fill="var(--fill-0, #F7FAF4)" />
              <path d={svgPaths.p39911780} fill="var(--fill-0, #F7FAF4)" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function IconSuccess() {
  return (
    <div className="bg-[#4e9721] content-stretch flex items-center justify-center relative rounded-[9999px] shadow-[0px_4px_16px_0px_rgba(78,151,33,0.5),0px_-4px_16px_0px_rgba(78,151,33,0.5)] size-full" data-name="Icon Success">
      <Container />
    </div>
  );
}