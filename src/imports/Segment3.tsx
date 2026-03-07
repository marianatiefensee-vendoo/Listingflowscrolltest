import svgPaths from "./svg-001u33zxa1";

function Label() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Label">
      <div className="flex flex-col font-['Lexend:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white tracking-[0.1px] whitespace-nowrap">
        <p className="leading-[20px]">Excellent</p>
      </div>
    </div>
  );
}

function StateLayer() {
  return (
    <div className="content-stretch flex gap-[9.6px] items-center px-[19.2px] py-[12px] relative rounded-[16px] shrink-0" data-name="State - Layer">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Circle Check">
        <div className="absolute inset-[12.5%_9.72%_9.72%_12.5%]" data-name="Icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.6669 18.6662">
            <g id="Icon">
              <path d={svgPaths.p21a13400} fill="var(--fill-0, white)" />
              <path d={svgPaths.p229eb810} fill="var(--fill-0, white)" />
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
    <div className="content-stretch flex flex-col items-center justify-center relative rounded-[16px] shrink-0" data-name="Content">
      <StateLayer />
    </div>
  );
}

function ButtonFilled() {
  return (
    <div className="bg-[#6231d8] content-stretch flex items-center justify-center relative rounded-[16px] shrink-0" data-name="Button-Filled">
      <Content />
    </div>
  );
}

export default function Segment() {
  return (
    <button className="content-stretch cursor-pointer flex items-start relative size-full" data-name="Segment 3">
      <ButtonFilled />
    </button>
  );
}