import svgPaths from "./svg-js03l3h92j";

function Frame() {
  return (
    <div className="content-stretch flex h-full items-center pl-[8px] pr-[4px] relative shrink-0">
      <div className="h-[16px] relative shrink-0 w-[115.394px]" data-name="Union">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 115.394 16">
          <g id="Union">
            <path d={svgPaths.p36781900} fill="var(--fill-0, #1B143D)" />
            <path d={svgPaths.p2951c2b0} fill="var(--fill-0, #1B143D)" />
            <path clipRule="evenodd" d={svgPaths.pe280380} fill="var(--fill-0, #1B143D)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.pca2d600} fill="var(--fill-0, #1B143D)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p9206df0} fill="var(--fill-0, #1B143D)" fillRule="evenodd" />
            <path d={svgPaths.p2392e800} fill="var(--fill-0, #1B143D)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="h-full relative shrink-0 w-[9px]">
      <div className="content-stretch flex flex-col items-start py-[4px] relative size-full">
        <div className="h-[4.5px] relative shrink-0 w-[9px]" data-name="Union">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 4.5">
            <g id="Union">
              <path d={svgPaths.p36430d00} fill="var(--fill-0, black)" />
              <path d={svgPaths.p7eb00} fill="var(--fill-0, black)" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function VendooMainLogo() {
  return (
    <div className="content-stretch flex h-[50px] items-center justify-center px-[12px] py-[8px] relative shrink-0 w-[200px]" data-name="VendooMainLogo">
      <div className="h-[34.5px] relative shrink-0 w-[40px]" data-name="Union">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40.0004 34.5">
          <path clipRule="evenodd" d={svgPaths.p1e301c00} fill="url(#paint0_linear_2_1123)" fillRule="evenodd" id="Union" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_2_1123" x1="17.916" x2="41.5544" y1="37.286" y2="15.0994">
              <stop stopColor="#FECB40" />
              <stop offset="0.30904" stopColor="#F7507C" />
              <stop offset="0.63914" stopColor="#4852E8" />
              <stop offset="1" stopColor="#47CDAE" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <Frame />
      <Frame1 />
    </div>
  );
}

function LeadingIcon() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Leading icon">
      <VendooMainLogo />
    </div>
  );
}

function Content() {
  return (
    <div className="cursor-pointer flex-[1_0_0] h-full min-h-px min-w-px mr-[-16px] relative" data-name="Content">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[20px] relative size-full">
          <div className="flex flex-col font-['Lexend:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#494455] text-[16px] tracking-[0.5px] whitespace-nowrap">
            <p className="leading-[24px]">Hinted search text</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function StateLayer1() {
  return (
    <div className="content-stretch flex h-[40px] items-center justify-center relative shrink-0 w-full" data-name="State-layer">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="search">
        <div className="absolute inset-[8.33%]" data-name="Icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9997 19.9997">
            <path clipRule="evenodd" d={svgPaths.p33f6e3f0} fill="var(--fill-0, #494455)" fillRule="evenodd" id="Icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Content1() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col items-center justify-center left-[calc(50%-0.5px)] overflow-clip rounded-[100px] top-1/2 w-[40px]" data-name="Content">
      <StateLayer1 />
    </div>
  );
}

function TrailingElements() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex items-center justify-end right-[4px] top-1/2" data-name="Trailing-Elements">
      <div className="relative shrink-0 size-[48px]" data-name="1st trailing-icon">
        <Content1 />
      </div>
    </div>
  );
}

function StateLayer() {
  return (
    <div className="h-full relative shrink-0 w-[360px]" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[4px] pr-[20px] py-[4px] relative size-full">
          <Content />
          <TrailingElements />
        </div>
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4px] relative shrink-0" data-name="Label">
      <div className="flex flex-col font-['Lexend:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#503f86] text-[14px] text-center tracking-[0.1px] whitespace-nowrap">
        <p className="leading-[20px]">Ask AI</p>
      </div>
    </div>
  );
}

function StateLayer2() {
  return (
    <div className="content-stretch flex gap-[10px] items-center px-[16px] py-[10px] relative shrink-0" data-name="State - Layer">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="lightbulb ai tip">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[23.673px] left-1/2 top-1/2 w-[19.8px]" data-name="Icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 21.5209">
            <g id="Icon">
              <path d={svgPaths.p26100f00} fill="var(--fill-0, #503F86)" />
              <path d={svgPaths.pafaea00} fill="var(--fill-0, #503F86)" />
              <path d={svgPaths.p30d13740} fill="var(--fill-0, #503F86)" />
              <path d={svgPaths.p2803ecf0} fill="var(--fill-0, #503F86)" />
              <path clipRule="evenodd" d={svgPaths.p32dd5d60} fill="var(--fill-0, #503F86)" fillRule="evenodd" />
            </g>
          </svg>
        </div>
      </div>
      <Label />
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative rounded-[5px] shrink-0" data-name="Content">
      <StateLayer2 />
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4px] relative shrink-0" data-name="Label">
      <div className="flex flex-col font-['Lexend:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white tracking-[0.1px] whitespace-nowrap">
        <p className="leading-[20px]">Quick Add</p>
      </div>
    </div>
  );
}

function StateLayer3() {
  return (
    <div className="content-stretch flex gap-[10px] items-center px-[16px] py-[10px] relative rounded-[5px] shrink-0" data-name="State - Layer">
      <Label1 />
    </div>
  );
}

function Content3() {
  return (
    <div className="bg-[#4a00bf] content-stretch flex flex-col h-full items-center justify-center relative rounded-[5px] shrink-0" data-name="Content">
      <StateLayer3 />
    </div>
  );
}

function StateLayer4() {
  return (
    <div className="content-stretch flex h-[40px] items-center justify-center relative shrink-0 w-full" data-name="State-layer">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Chevron Down">
        <div className="absolute inset-[26.36%_8.34%_26.36%_8.33%]" data-name="Icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9993 11.3458">
            <path d={svgPaths.p28797e80} fill="var(--fill-0, white)" id="Icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Content4() {
  return (
    <div className="bg-[#4a00bf] content-stretch flex flex-[1_0_0] flex-col h-full items-center justify-center min-h-px min-w-px overflow-clip relative rounded-bl-[5px] rounded-br-[8px] rounded-tl-[5px] rounded-tr-[8px]" data-name="Content">
      <StateLayer4 />
    </div>
  );
}

function AvatarTarget() {
  return (
    <div className="content-stretch flex items-center py-[8px] relative shrink-0" data-name="Avatar-target">
      <div className="content-stretch cursor-pointer flex gap-[2px] items-start relative shrink-0" data-name="Avatar">
        <div className="content-stretch flex h-[48px] items-center justify-center relative shrink-0" data-name="Button-Filled">
          <Content3 />
        </div>
        <div className="content-stretch flex items-center justify-center relative rounded-bl-[5px] rounded-br-[8px] rounded-tl-[5px] rounded-tr-[8px] shrink-0 size-[48px]" data-name="Icon Button Primary">
          <Content4 />
        </div>
      </div>
    </div>
  );
}

function TrailingElements1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] h-[48px] items-center justify-end min-h-px min-w-px relative" data-name="Trailing elements">
      <div className="bg-[#c3b0ff] content-stretch flex h-[48px] items-center justify-center relative rounded-[5px] shrink-0" data-name="Trailing action 2">
        <Content2 />
      </div>
      <AvatarTarget />
    </div>
  );
}

export default function Header() {
  return (
    <div className="bg-[rgba(222,215,229,0.16)] content-stretch flex gap-[16px] items-center relative rounded-[12px] size-full m-[0px] pl-[0px] pr-[12px] py-[12px]" data-name="Header">
      <LeadingIcon />
      <div className="bg-[#ece6f3] content-stretch flex h-[56px] items-center overflow-clip px-[24px] relative rounded-[12px] shrink-0" data-name="Search bar container">
        <StateLayer />
      </div>
      <TrailingElements1 />
    </div>
  );
}