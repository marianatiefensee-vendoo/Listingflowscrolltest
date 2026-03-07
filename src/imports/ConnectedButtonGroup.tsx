import svgPaths from "./svg-eidwq1eo1i";

function Title() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-[327px]" data-name="Title">
      <div className="flex flex-col font-['Lexend:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#494455] text-[16px] tracking-[0.15px] whitespace-nowrap">
        <p className="leading-[24px]">Condition</p>
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Label">
      <div className="flex flex-col font-['Lexend:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1d1a24] text-[14px] text-center tracking-[0.1px] whitespace-nowrap">
        <p className="leading-[20px]">Brand New</p>
      </div>
    </div>
  );
}

function StateLayer() {
  return (
    <div className="content-stretch flex gap-[9.6px] items-center px-[19.2px] py-[12px] relative shrink-0" data-name="State - Layer">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="tag">
        <div className="absolute inset-[4.17%_7.62%_7.64%_4.17%]" data-name="Icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.1719 21.167">
            <g id="Icon">
              <path d={svgPaths.p3d4b8a00} fill="var(--fill-0, #1D1A24)" />
              <path clipRule="evenodd" d={svgPaths.p2bc62f00} fill="var(--fill-0, #1D1A24)" fillRule="evenodd" />
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
    <div className="content-stretch flex flex-col items-center justify-center relative rounded-bl-[12px] rounded-br-[6px] rounded-tl-[12px] rounded-tr-[6px] shrink-0" data-name="Content">
      <div aria-hidden="true" className="absolute border border-[#7a7486] border-solid inset-0 pointer-events-none rounded-bl-[12px] rounded-br-[6px] rounded-tl-[12px] rounded-tr-[6px]" />
      <StateLayer />
    </div>
  );
}

function ButtonFilled() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center relative rounded-bl-[12px] rounded-br-[6px] rounded-tl-[12px] rounded-tr-[6px] shrink-0" data-name="Button-Filled">
      <Content />
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Label">
      <div className="flex flex-col font-['Lexend:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1d1a24] text-[14px] text-center tracking-[0.1px] whitespace-nowrap">
        <p className="leading-[20px]">Like New</p>
      </div>
    </div>
  );
}

function StateLayer1() {
  return (
    <div className="content-stretch flex gap-[9.6px] items-center px-[19.2px] py-[12px] relative shrink-0" data-name="State - Layer">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="star">
        <div className="absolute inset-[4.17%_4.17%_8.25%_4.17%]" data-name="Icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.9996 21.02">
            <path clipRule="evenodd" d={svgPaths.p2193a200} fill="var(--fill-0, #1D1A24)" fillRule="evenodd" id="Icon" />
          </svg>
        </div>
      </div>
      <Label1 />
    </div>
  );
}

function Content1() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center relative rounded-[6px] shrink-0" data-name="Content">
      <div aria-hidden="true" className="absolute border border-[#7a7486] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <StateLayer1 />
    </div>
  );
}

function ButtonFilled1() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center relative shrink-0" data-name="Button-Filled">
      <Content1 />
    </div>
  );
}

function Label2() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Label">
      <div className="flex flex-col font-['Lexend:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white tracking-[0.1px] whitespace-nowrap">
        <p className="leading-[20px]">Excellent</p>
      </div>
    </div>
  );
}

function StateLayer2() {
  return (
    <div className="content-stretch flex gap-[9.6px] items-center px-[19.2px] py-[12px] relative shrink-0" data-name="State - Layer">
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
      <Label2 />
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative rounded-[6px] shrink-0" data-name="Content">
      <StateLayer2 />
    </div>
  );
}

function ButtonFilled2() {
  return (
    <div className="bg-[#6231d8] content-stretch flex items-center justify-center relative rounded-[16px] shrink-0" data-name="Button-Filled">
      <Content2 />
    </div>
  );
}

function Label3() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Label">
      <div className="flex flex-col font-['Lexend:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1d1a24] text-[14px] text-center tracking-[0.1px] whitespace-nowrap">
        <p className="leading-[20px]">Good</p>
      </div>
    </div>
  );
}

function StateLayer3() {
  return (
    <div className="content-stretch flex gap-[9.6px] items-center px-[19.2px] py-[12px] relative shrink-0" data-name="State - Layer">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="thumbs-up">
        <div className="absolute flex inset-[4.17%_5.49%_4.17%_4.17%] items-center justify-center">
          <div className="-scale-y-100 flex-none h-[24.2px] w-[23.851px]">
            <div className="relative size-full" data-name="Icon">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.6823 22.0001">
                <path clipRule="evenodd" d={svgPaths.p3a697100} fill="var(--fill-0, #1D1A24)" fillRule="evenodd" id="Icon" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Label3 />
    </div>
  );
}

function Content3() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center relative rounded-[6px] shrink-0" data-name="Content">
      <div aria-hidden="true" className="absolute border border-[#7a7486] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <StateLayer3 />
    </div>
  );
}

function ButtonFilled3() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center relative shrink-0" data-name="Button-Filled">
      <Content3 />
    </div>
  );
}

function Segments() {
  return (
    <div className="content-stretch cursor-pointer flex gap-[2px] items-center relative shrink-0" data-name="Segments">
      <button className="content-stretch flex items-start relative shrink-0" data-name="Segment 1">
        <ButtonFilled />
      </button>
      <button className="content-stretch flex items-start relative shrink-0" data-name="Segment 2">
        <ButtonFilled1 />
      </button>
      <button className="content-stretch flex items-start relative shrink-0" data-name="Segment 3">
        <ButtonFilled2 />
      </button>
      <button className="content-stretch flex items-start relative shrink-0" data-name="Segment 4">
        <ButtonFilled3 />
      </button>
      <button className="content-stretch flex items-start relative shrink-0" data-name="Segment 5">
        <div className="bg-white content-stretch flex items-center justify-center relative shrink-0" data-name="Button-Filled">
          <div className="bg-white content-stretch flex flex-col items-center justify-center relative rounded-[6px] shrink-0" data-name="Content">
            <div aria-hidden="true" className="absolute border border-[#7a7486] border-solid inset-0 pointer-events-none rounded-[6px]" />
            <div className="content-stretch flex gap-[9.6px] items-center px-[19.2px] py-[12px] relative shrink-0" data-name="State - Layer">
              <div className="overflow-clip relative shrink-0 size-[24px]" data-name="alert-circle">
                <div className="absolute inset-[4.16%]" data-name="Icon">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.0014 22.0014">
                    <g id="Icon">
                      <path d={svgPaths.p268d1300} fill="var(--fill-0, #1D1A24)" />
                      <path d={svgPaths.pfb9efc0} fill="var(--fill-0, #1D1A24)" />
                      <path clipRule="evenodd" d={svgPaths.p3a79fb00} fill="var(--fill-0, #1D1A24)" fillRule="evenodd" />
                    </g>
                  </svg>
                </div>
              </div>
              <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Label">
                <div className="flex flex-col font-['Lexend:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1d1a24] text-[14px] text-center tracking-[0.1px] whitespace-nowrap">
                  <p className="leading-[20px]">Fair</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </button>
    </div>
  );
}

export default function ConnectedButtonGroup() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center py-[2.4px] relative size-full" data-name="Connected button group">
      <Title />
      <Segments />
    </div>
  );
}