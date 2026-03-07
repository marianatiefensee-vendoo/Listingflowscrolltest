import svgPaths from "./svg-3ih8kwlw3p";
import imgAb6AXuDpDe4D9Z0HovHQwMnhAzQkZK1Ei1Ir3M7VC4GdnZlZcw98O0SblIuvv9OvWh0UDcxj0HSsoKkObfqp218QyGy7O6EcobSHhq7Fqf9YhB0Q2WajRvkxYd9RPgDg3Ws46BdkVavsIm8KJknfgdc1HqquF6Jegv7PCv6SxJ6VSOyO6B07ShXd9X92SFekbBaaRNiSi1CkRsBiAXo3Qe7G8JKhq1Kv4AaQvUhCnmGPyW2IqkOSjDrQ7LtIy3WuWaz2EKg8 from "figma:asset/fc302d572214546f8204178ed8fb7d0af8c7506e.png";
import imgAb6AXuDpDe4D9Z0HovHQwMnhAzQkZK1Ei1Ir3M7VC4GdnZlZcw98O0SblIuvv9OvWh0UDcxj0HSsoKkObfqp218QyGy7O6EcobSHhq7Fqf9YhB0Q2WajRvkxYd9RPgDg3Ws46BdkVavsIm8KJknfgdc1HqquF6Jegv7PCv6SxJ6VSOyO6B07ShXd9X92SFekbBaaRNiSi1CkRsBiAXo3Qe7G8JKhq1Kv4AaQvUhCnmGPyW2IqkOSjDrQ7LtIy3WuWaz2EKg9 from "figma:asset/e2c7974ddf5646843e200cc5480063189d1bdb2c.png";
import imgAb6AXuDpDe4D9Z0HovHQwMnhAzQkZK1Ei1Ir3M7VC4GdnZlZcw98O0SblIuvv9OvWh0UDcxj0HSsoKkObfqp218QyGy7O6EcobSHhq7Fqf9YhB0Q2WajRvkxYd9RPgDg3Ws46BdkVavsIm8KJknfgdc1HqquF6Jegv7PCv6SxJ6VSOyO6B07ShXd9X92SFekbBaaRNiSi1CkRsBiAXo3Qe7G8JKhq1Kv4AaQvUhCnmGPyW2IqkOSjDrQ7LtIy3WuWaz2EKg10 from "figma:asset/818d7c9ebebd26d98ee60737907006a9b258dce3.png";
import imgAb6AXuAmt8DQf1JpgpDgVRaxCo5PmRcoHrF7SIm9VaLnnVqXvMpFtqq8LKsY4HzIGn38T9WwjChNsTmltg2KZdfwwQS3FumMe2Npkru9SKhn4Be3SrOj3GkGQrcqhGeF4Ec2IbiuwDywOd6Ujy2PwL95SbUSh7RJh4IkBjqlduUzo4LGfuX7KxOpEwHovrxs0Nu8XZbj2I8NR15SjhB43Y6OXoPnlGWitftkkV541Xff2ZQIqWqJriuL60YTvj4Sik2POjNkRyo from "figma:asset/a08512519a6303915fa0228d1c9c04665eb4de34.png";

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

function StateLayer1() {
  return (
    <div className="content-stretch flex h-[40px] items-center justify-center relative shrink-0 w-full" data-name="State-layer">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="plus-circle">
        <div className="absolute inset-[4.17%]" data-name="Icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
            <g id="Icon">
              <path d={svgPaths.p28fdfe80} fill="var(--fill-0, white)" />
              <path clipRule="evenodd" d={svgPaths.p396e0c00} fill="var(--fill-0, white)" fillRule="evenodd" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Content1() {
  return (
    <div className="bg-[#4a00bf] content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[5px] shadow-[0px_4px_8px_3px_rgba(0,0,0,0.15),0px_1px_3px_0px_rgba(0,0,0,0.3)] shrink-0 size-[56px]" data-name="Content">
      <StateLayer1 />
    </div>
  );
}

function MenuFab() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start overflow-clip pb-[20px] pt-[44px] px-[20px] relative shrink-0" data-name="Menu & FAB">
      <button className="block cursor-pointer relative shrink-0 size-[48px]" data-name="Icon Button Standard">
        <Content />
      </button>
      <div className="content-stretch flex items-center justify-center relative rounded-[5px] shrink-0" data-name="FAB Button">
        <Content1 />
      </div>
    </div>
  );
}

function StateLayer2() {
  return (
    <div className="content-stretch flex gap-[10px] h-[32px] isolate items-center justify-center py-[4px] relative shrink-0 w-[56px]" data-name="State layer">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 opacity-0 overflow-clip size-[24px] top-1/2 z-[2]" data-name="Icon">
        <div className="absolute inset-[4.17%_8.33%_3.83%_8.33%]" data-name="Icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 22.0781">
            <path clipRule="evenodd" d={svgPaths.p51a8e80} fill="var(--fill-0, #1D1A24)" fillRule="evenodd" id="Icon" />
          </svg>
        </div>
      </div>
      <div className="overflow-clip relative shrink-0 size-[24px] z-[1]" data-name="Icon">
        <div className="absolute inset-[4.17%_8.33%_3.83%_8.33%]" data-name="Icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 22.0781">
            <path clipRule="evenodd" d={svgPaths.p51a8e80} fill="var(--fill-0, #494455)" fillRule="evenodd" id="Icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function IconContainer() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[16px] shrink-0" data-name="Icon container">
      <StateLayer2 />
    </div>
  );
}

function StateLayer3() {
  return (
    <div className="content-stretch flex gap-[10px] h-[32px] isolate items-center justify-center py-[4px] relative shrink-0 w-[56px]" data-name="State layer">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 opacity-0 overflow-clip size-[24px] top-1/2 z-[2]" data-name="Icon">
        <div className="absolute inset-[4.17%_4.17%_8.25%_4.17%]" data-name="Icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.9996 21.02">
            <path clipRule="evenodd" d={svgPaths.p2193a200} fill="var(--fill-0, #1D1A24)" fillRule="evenodd" id="Icon" />
          </svg>
        </div>
      </div>
      <div className="overflow-clip relative shrink-0 size-[24px] z-[1]" data-name="Icon">
        <div className="absolute inset-[8.33%_12.5%]" data-name="Icon">
          <div className="absolute inset-[-5%_-5.56%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 22.0001">
              <path d={svgPaths.p32522b00} id="Icon" stroke="var(--stroke-0, #1D1A24)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function IconContainer1() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[16px] shrink-0" data-name="Icon container">
      <StateLayer3 />
    </div>
  );
}

function StateLayer4() {
  return (
    <div className="content-stretch flex gap-[10px] h-[32px] isolate items-center justify-center py-[4px] relative shrink-0 w-[56px]" data-name="State layer">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 opacity-0 overflow-clip size-[24px] top-1/2 z-[2]" data-name="Icon">
        <div className="absolute inset-[4.17%_4.17%_8.25%_4.17%]" data-name="Icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.9996 21.02">
            <path clipRule="evenodd" d={svgPaths.p2193a200} fill="var(--fill-0, #1D1A24)" fillRule="evenodd" id="Icon" />
          </svg>
        </div>
      </div>
      <div className="overflow-clip relative shrink-0 size-[24px] z-[1]" data-name="Icon">
        <div className="absolute inset-[12.5%]" data-name="Icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
            <path d={svgPaths.p1f65dc00} fill="var(--fill-0, #1D1A24)" id="Icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function IconContainer2() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[16px] shrink-0" data-name="Icon container">
      <StateLayer4 />
    </div>
  );
}

function StateLayer5() {
  return (
    <div className="content-stretch flex gap-[10px] h-[32px] isolate items-center justify-center py-[4px] relative shrink-0 w-[56px]" data-name="State layer">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 opacity-0 overflow-clip size-[24px] top-1/2 z-[2]" data-name="Icon">
        <div className="absolute inset-[4.17%_4.17%_8.25%_4.17%]" data-name="Icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.9996 21.02">
            <path clipRule="evenodd" d={svgPaths.p2193a200} fill="var(--fill-0, #1D1A24)" fillRule="evenodd" id="Icon" />
          </svg>
        </div>
      </div>
      <div className="overflow-clip relative shrink-0 size-[24px] z-[1]" data-name="Icon">
        <div className="absolute inset-[4.17%]" data-name="Icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
            <path clipRule="evenodd" d={svgPaths.p4fdf6f0} fill="var(--fill-0, #494455)" fillRule="evenodd" id="Icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function IconContainer3() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[16px] shrink-0" data-name="Icon container">
      <StateLayer5 />
    </div>
  );
}

function StateLayer6() {
  return (
    <div className="content-stretch flex gap-[10px] h-[32px] isolate items-center justify-center py-[4px] relative shrink-0 w-[56px]" data-name="State layer">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 opacity-0 overflow-clip size-[24px] top-1/2 z-[2]" data-name="Icon">
        <div className="absolute inset-[4.17%_4.17%_8.25%_4.17%]" data-name="Icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.9996 21.02">
            <path clipRule="evenodd" d={svgPaths.p2193a200} fill="var(--fill-0, #1D1A24)" fillRule="evenodd" id="Icon" />
          </svg>
        </div>
      </div>
      <div className="overflow-clip relative shrink-0 size-[24px] z-[1]" data-name="Icon">
        <div className="absolute inset-[12.5%_9.72%_9.72%_12.5%]" data-name="Icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.666 18.666">
            <g id="Icon">
              <path clipRule="evenodd" d={svgPaths.p3474f00} fill="var(--fill-0, #494455)" fillRule="evenodd" />
              <path d={svgPaths.p1bffaa40} fill="var(--fill-0, #494455)" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function IconContainer4() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[16px] shrink-0" data-name="Icon container">
      <StateLayer6 />
    </div>
  );
}

function Segments() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Segments">
      <div className="content-stretch cursor-pointer flex flex-col items-start px-[20px] relative size-full">
        <button className="content-stretch flex flex-col gap-[4px] items-center justify-center py-[6px] relative shrink-0" data-name="Nav item 1">
          <IconContainer />
        </button>
        <button className="content-stretch flex flex-col gap-[4px] items-center justify-center py-[6px] relative shrink-0" data-name="Nav item 2">
          <IconContainer1 />
        </button>
        <button className="content-stretch flex flex-col gap-[4px] items-center justify-center py-[6px] relative shrink-0" data-name="Nav item 3">
          <IconContainer2 />
        </button>
        <button className="content-stretch flex flex-col gap-[4px] items-center justify-center py-[6px] relative shrink-0" data-name="Nav item 4">
          <IconContainer3 />
        </button>
        <button className="content-stretch flex flex-col gap-[4px] items-center justify-center py-[6px] relative shrink-0" data-name="Nav item 5">
          <IconContainer4 />
        </button>
      </div>
    </div>
  );
}

function StateLayer7() {
  return (
    <div className="content-stretch flex gap-[10px] h-[32px] isolate items-center justify-center py-[4px] relative shrink-0 w-[56px]" data-name="State layer">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 opacity-0 overflow-clip size-[24px] top-1/2 z-[2]" data-name="Icon">
        <div className="absolute inset-[4.17%_4.17%_8.25%_4.17%]" data-name="Icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.9996 21.02">
            <path clipRule="evenodd" d={svgPaths.p2193a200} fill="var(--fill-0, #1D1A24)" fillRule="evenodd" id="Icon" />
          </svg>
        </div>
      </div>
      <div className="overflow-clip relative shrink-0 size-[24px] z-[1]" data-name="Icon">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <g id="Icon">
            <path clipRule="evenodd" d={svgPaths.p258bb200} fill="var(--fill-0, #494455)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p2c727d00} fill="var(--fill-0, #494455)" fillRule="evenodd" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function IconContainer5() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[16px] shrink-0" data-name="Icon container">
      <StateLayer7 />
    </div>
  );
}

function Settings() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="settings">
      <div className="flex flex-col justify-end size-full">
        <div className="content-stretch flex flex-col items-start justify-end px-[20px] py-[56px] relative size-full">
          <button className="content-stretch cursor-pointer flex flex-col gap-[4px] items-center justify-center py-[6px] relative shrink-0" data-name="Nav item 7">
            <IconContainer5 />
          </button>
        </div>
      </div>
    </div>
  );
}

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
          <path clipRule="evenodd" d={svgPaths.p1e301c00} fill="url(#paint0_linear_28_2176)" fillRule="evenodd" id="Union" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_28_2176" x1="17.916" x2="41.5544" y1="37.286" y2="15.0994">
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

function Header() {
  return (
    <div className="bg-[#f8f1ff] relative rounded-[20px] shrink-0 w-full" data-name="Header">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[8px] py-[16px] relative w-full">
          <LeadingIcon />
        </div>
      </div>
    </div>
  );
}

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

function IconSuccess() {
  return (
    <div className="bg-[#4e9721] relative rounded-[9999px] shadow-[0px_4px_16px_0px_rgba(78,151,33,0.5),0px_-4px_16px_0px_rgba(78,151,33,0.5)] shrink-0 size-[80px]" data-name="Icon Success">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Container />
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col font-['Lexend:Regular',sans-serif] font-normal gap-[8px] items-center justify-center relative shrink-0 text-center w-full whitespace-nowrap">
      <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-[#1d1a24] text-[32px]">
        <p className="leading-[40px]">Item Listed Successfully!</p>
      </div>
      <div className="flex flex-col justify-center leading-[24px] relative shrink-0 text-[#7a7486] text-[16px] tracking-[0.5px]">
        <p className="mb-0">Your item has been listed on 3 marketplaces and</p>
        <p>is now live for buyers.</p>
      </div>
    </div>
  );
}

function TextContent() {
  return (
    <div className="relative shrink-0 w-[423px]" data-name="Text Content">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center p-[12px] relative w-full">
        <Frame2 />
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4px] relative shrink-0" data-name="Label">
      <div className="flex flex-col font-['Lexend:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white tracking-[0.1px] whitespace-nowrap">
        <p className="leading-[20px]">List Another Item</p>
      </div>
    </div>
  );
}

function StateLayer8() {
  return (
    <div className="content-stretch flex gap-[10px] items-center px-[16px] py-[10px] relative rounded-[5px] shrink-0" data-name="State - Layer">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="plus">
        <div className="absolute inset-[16.67%]" data-name="Icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333">
            <path d={svgPaths.p2e11fc00} fill="var(--fill-0, white)" id="Icon" />
          </svg>
        </div>
      </div>
      <Label />
    </div>
  );
}

function Content2() {
  return (
    <div className="bg-[#4a00bf] content-stretch flex flex-col h-full items-center justify-center relative rounded-[5px] shrink-0" data-name="Content">
      <StateLayer8 />
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4px] relative shrink-0" data-name="Label">
      <div className="flex flex-col font-['Lexend:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#494455] text-[14px] text-center tracking-[0.1px] whitespace-nowrap">
        <p className="leading-[20px]">Go to Inventory</p>
      </div>
    </div>
  );
}

function StateLayer9() {
  return (
    <div className="content-stretch flex gap-[10px] items-center px-[16px] py-[10px] relative shrink-0" data-name="State - Layer">
      <Label1 />
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative rounded-[5px] shrink-0" data-name="Content">
      <StateLayer9 />
    </div>
  );
}

function ButtonActions() {
  return (
    <div className="relative shrink-0 w-full" data-name="Button Actions">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12.01px] items-center justify-center py-[12px] relative w-full">
        <div className="content-stretch flex h-[48px] items-center justify-center relative shrink-0" data-name="Button-Filled">
          <Content2 />
        </div>
        <div className="content-stretch flex h-[48px] items-center justify-center relative rounded-[5px] shrink-0" data-name="Button- Outline">
          <div aria-hidden="true" className="absolute border border-[#cbc3d7] border-solid inset-0 pointer-events-none rounded-[5px]" />
          <Content3 />
        </div>
      </div>
    </div>
  );
}

function SectionSuccessHeaderCard() {
  return (
    <div className="bg-white col-1 justify-self-stretch relative rounded-[24px] row-1 self-stretch shrink-0" data-name="Section - Success Header Card">
      <div aria-hidden="true" className="absolute border border-[#cbc3d7] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center p-[25px] relative size-full">
          <IconSuccess />
          <TextContent />
          <ButtonActions />
        </div>
      </div>
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Title">
      <div className="flex flex-col font-['Lexend:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1d1a24] text-[16px] tracking-[0.15px] whitespace-nowrap">
        <p className="leading-[24px]">Marketplace Status</p>
      </div>
    </div>
  );
}

function ContentFrame() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Content frame">
      <div className="overflow-clip relative shrink-0 size-[12px]" data-name="Icon leading">
        <div className="absolute inset-[9.64%_7.5%]" data-name="Icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.2002 9.68721">
            <path d={svgPaths.p10830600} fill="var(--fill-0, #4E9721)" id="Icon" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col font-['Lexend:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#4e9721] text-[11px] text-center tracking-[0.5px] whitespace-nowrap">
        <p className="leading-[16px]">3 LIVE</p>
      </div>
    </div>
  );
}

function Tag() {
  return (
    <div className="bg-[#ebf7e3] content-stretch flex items-center justify-center px-[4px] relative rounded-[4px] shrink-0" data-name="Tag">
      <ContentFrame />
      <div className="h-[20px] relative shrink-0 w-0" data-name="Min height XSmall">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Min height XSmall" />
        </svg>
      </div>
    </div>
  );
}

function TitleContent() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Title Content">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative w-full">
        <Title />
        <div className="content-stretch flex items-start relative shrink-0" data-name="Tag">
          <Tag />
        </div>
      </div>
    </div>
  );
}

function TitleWrapper() {
  return (
    <div className="bg-[rgba(104,58,223,0.08)] relative rounded-tl-[24px] rounded-tr-[24px] shrink-0 w-full" data-name="Title Wrapper">
      <div aria-hidden="true" className="absolute border-[#cbc3d7] border-b border-solid inset-0 pointer-events-none rounded-tl-[24px] rounded-tr-[24px]" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex items-center justify-between px-[24px] py-[16px] relative w-full">
          <TitleContent />
        </div>
      </div>
    </div>
  );
}

function Ab6AXuDpDe4D9Z0HovHQwMnhAzQkZK1Ei1Ir3M7VC4GdnZlZcw98O0SblIuvv9OvWh0UDcxj0HSsoKkObfqp218QyGy7O6EcobSHhq7Fqf9YhB0Q2WajRvkxYd9RPgDg3Ws46BdkVavsIm8KJknfgdc1HqquF6Jegv7PCv6SxJ6VSOyO6B07ShXd9X92SFekbBaaRNiSi1CkRsBiAXo3Qe7G8JKhq1Kv4AaQvUhCnmGPyW2IqkOSjDrQ7LtIy3WuWaz2EKg() {
  return (
    <div className="max-w-[56px] relative shrink-0 size-[40px]" data-name="AB6AXuDPDe4d9z0HOV-hQwMnhAzQkZ_k1EI1ir-3-M-7vC4GdnZLZcw98O0sblIUVV9ovWH0UDcxj0HSsoKkObfqp218QyGy7O6ecobSHhq7_FQF9yhB0Q2WAJRvkxYd9rPgDG3WS46BdkVAVSIm8KJknfgdc1HqquF6Jegv7pCV6sxJ6vSOy-O6B07ShXd9X92-SFekbBaaRNiSi1CKRsBiAXo3Qe7G8jKhq1Kv4AaQvUhCnmGPyW2iqk_OSjDrQ7LtIy3WUWaz-2e_Kg8">
      <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgAb6AXuDpDe4D9Z0HovHQwMnhAzQkZK1Ei1Ir3M7VC4GdnZlZcw98O0SblIuvv9OvWh0UDcxj0HSsoKkObfqp218QyGy7O6EcobSHhq7Fqf9YhB0Q2WajRvkxYd9RPgDg3Ws46BdkVavsIm8KJknfgdc1HqquF6Jegv7PCv6SxJ6VSOyO6B07ShXd9X92SFekbBaaRNiSi1CkRsBiAXo3Qe7G8JKhq1Kv4AaQvUhCnmGPyW2IqkOSjDrQ7LtIy3WuWaz2EKg8} />
      </div>
    </div>
  );
}

function Media() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 size-[56px]" data-name="Media">
      <div className="content-stretch flex items-center justify-center overflow-clip p-px relative rounded-[inherit] size-full">
        <Ab6AXuDpDe4D9Z0HovHQwMnhAzQkZK1Ei1Ir3M7VC4GdnZlZcw98O0SblIuvv9OvWh0UDcxj0HSsoKkObfqp218QyGy7O6EcobSHhq7Fqf9YhB0Q2WajRvkxYd9RPgDg3Ws46BdkVavsIm8KJknfgdc1HqquF6Jegv7PCv6SxJ6VSOyO6B07ShXd9X92SFekbBaaRNiSi1CkRsBiAXo3Qe7G8JKhq1Kv4AaQvUhCnmGPyW2IqkOSjDrQ7LtIy3WuWaz2EKg />
      </div>
      <div aria-hidden="true" className="absolute border border-[#cbc3d7] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Link() {
  return (
    <div className="content-stretch flex gap-[4px] h-[20px] items-center relative shrink-0 w-[254px]" data-name="Link">
      <div className="flex flex-col font-['Lexend:Medium',sans-serif] font-medium justify-end leading-[0] relative shrink-0 text-[#4a00bf] text-[0px] tracking-[0.1px] whitespace-nowrap">
        <p className="decoration-solid leading-[20px] text-[14px] underline">View on Marketplace</p>
      </div>
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="External Link">
        <div className="absolute inset-[10.42%]" data-name="Icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.6667 12.6667">
            <g id="Icon">
              <path d={svgPaths.p3ddcb600} fill="var(--fill-0, #4A00BF)" />
              <path d={svgPaths.p1af79800} fill="var(--fill-0, #4A00BF)" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Heading 3">
      <div className="flex flex-col font-['Lexend:Medium',sans-serif] font-medium h-[24px] justify-center leading-[0] relative shrink-0 text-[#1d1a24] text-[16px] tracking-[0.15px] w-[40.86px]">
        <p className="leading-[24px]">eBay</p>
      </div>
      <Link />
    </div>
  );
}

function StateLayer10() {
  return (
    <div className="content-stretch flex gap-[8px] h-[32px] items-center justify-center pl-[8px] pr-[16px] py-[6px] relative shrink-0" data-name="state-layer">
      <div className="overflow-clip relative shrink-0 size-[18px]" data-name="Icon">
        <div className="absolute inset-[12.5%_9.72%_9.72%_12.5%]" data-name="Icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.9995 13.9995">
            <g id="Icon">
              <path clipRule="evenodd" d={svgPaths.p1aae9100} fill="var(--fill-0, #1D1A24)" fillRule="evenodd" />
              <path d={svgPaths.p2d82d4f2} fill="var(--fill-0, #1D1A24)" />
            </g>
          </svg>
        </div>
      </div>
      <div className="flex flex-col font-['Lexend:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1d1a24] text-[14px] text-center tracking-[0.1px] whitespace-nowrap">
        <p className="leading-[20px]">Copy Link</p>
      </div>
    </div>
  );
}

function StateLayer11() {
  return (
    <div className="content-stretch flex h-[26.667px] items-center justify-center relative shrink-0 w-full" data-name="State-layer">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="share-2">
        <div className="absolute inset-[4.17%_8.33%]" data-name="Icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 14.6667">
            <path clipRule="evenodd" d={svgPaths.padff280} fill="var(--fill-0, #494455)" fillRule="evenodd" id="Icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Content4() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col items-center justify-center left-[calc(50%-0.33px)] overflow-clip rounded-[100px] top-1/2 w-[26.667px]" data-name="Content">
      <StateLayer11 />
    </div>
  );
}

function VerticalBorder() {
  return (
    <div className="content-stretch flex gap-[8px] items-center pl-[17px] relative shrink-0" data-name="VerticalBorder">
      <div aria-hidden="true" className="absolute border-[#cbc3d7] border-l border-solid inset-0 pointer-events-none" />
      <div className="relative shrink-0 size-[32px]" data-name="Icon Button Standard">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
          <Content4 />
        </div>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Container">
      <div className="cursor-pointer relative rounded-[8px] shrink-0" data-name="Assistive chip">
        <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit]">
          <StateLayer10 />
        </div>
        <div aria-hidden="true" className="absolute border border-[#7a7486] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>
      <VerticalBorder />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] h-full items-center min-h-px min-w-px relative" data-name="Container">
      <Heading />
      <Container2 />
    </div>
  );
}

function MArketplaceListItem() {
  return (
    <div className="relative shrink-0 w-full" data-name="MArketplace List Item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[24px] py-[8px] relative w-full">
          <Media />
          <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
            <Container1 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Ab6AXuDpDe4D9Z0HovHQwMnhAzQkZK1Ei1Ir3M7VC4GdnZlZcw98O0SblIuvv9OvWh0UDcxj0HSsoKkObfqp218QyGy7O6EcobSHhq7Fqf9YhB0Q2WajRvkxYd9RPgDg3Ws46BdkVavsIm8KJknfgdc1HqquF6Jegv7PCv6SxJ6VSOyO6B07ShXd9X92SFekbBaaRNiSi1CkRsBiAXo3Qe7G8JKhq1Kv4AaQvUhCnmGPyW2IqkOSjDrQ7LtIy3WuWaz2EKg1() {
  return (
    <div className="max-w-[56px] relative shrink-0 size-[40px]" data-name="AB6AXuDPDe4d9z0HOV-hQwMnhAzQkZ_k1EI1ir-3-M-7vC4GdnZLZcw98O0sblIUVV9ovWH0UDcxj0HSsoKkObfqp218QyGy7O6ecobSHhq7_FQF9yhB0Q2WAJRvkxYd9rPgDG3WS46BdkVAVSIm8KJknfgdc1HqquF6Jegv7pCV6sxJ6vSOy-O6B07ShXd9X92-SFekbBaaRNiSi1CKRsBiAXo3Qe7G8jKhq1Kv4AaQvUhCnmGPyW2iqk_OSjDrQ7LtIy3WUWaz-2e_Kg8">
      <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgAb6AXuDpDe4D9Z0HovHQwMnhAzQkZK1Ei1Ir3M7VC4GdnZlZcw98O0SblIuvv9OvWh0UDcxj0HSsoKkObfqp218QyGy7O6EcobSHhq7Fqf9YhB0Q2WajRvkxYd9RPgDg3Ws46BdkVavsIm8KJknfgdc1HqquF6Jegv7PCv6SxJ6VSOyO6B07ShXd9X92SFekbBaaRNiSi1CkRsBiAXo3Qe7G8JKhq1Kv4AaQvUhCnmGPyW2IqkOSjDrQ7LtIy3WuWaz2EKg9} />
      </div>
    </div>
  );
}

function Media1() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 size-[56px]" data-name="Media">
      <div className="content-stretch flex items-center justify-center overflow-clip p-px relative rounded-[inherit] size-full">
        <Ab6AXuDpDe4D9Z0HovHQwMnhAzQkZK1Ei1Ir3M7VC4GdnZlZcw98O0SblIuvv9OvWh0UDcxj0HSsoKkObfqp218QyGy7O6EcobSHhq7Fqf9YhB0Q2WajRvkxYd9RPgDg3Ws46BdkVavsIm8KJknfgdc1HqquF6Jegv7PCv6SxJ6VSOyO6B07ShXd9X92SFekbBaaRNiSi1CkRsBiAXo3Qe7G8JKhq1Kv4AaQvUhCnmGPyW2IqkOSjDrQ7LtIy3WuWaz2EKg1 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#cbc3d7] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Link1() {
  return (
    <div className="content-stretch flex gap-[4px] h-[20px] items-center relative shrink-0 w-[254px]" data-name="Link">
      <div className="flex flex-col font-['Lexend:Medium',sans-serif] font-medium justify-end leading-[0] relative shrink-0 text-[#4a00bf] text-[0px] tracking-[0.1px] whitespace-nowrap">
        <p className="decoration-solid leading-[20px] text-[14px] underline">View on Marketplace</p>
      </div>
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="External Link">
        <div className="absolute inset-[10.42%]" data-name="Icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.6667 12.6667">
            <g id="Icon">
              <path d={svgPaths.p3ddcb600} fill="var(--fill-0, #4A00BF)" />
              <path d={svgPaths.p1af79800} fill="var(--fill-0, #4A00BF)" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Heading 3">
      <div className="flex flex-col font-['Lexend:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1d1a24] text-[16px] tracking-[0.15px] whitespace-nowrap">
        <p className="leading-[24px]">Poshmark</p>
      </div>
      <Link1 />
    </div>
  );
}

function StateLayer12() {
  return (
    <div className="content-stretch flex gap-[8px] h-[32px] items-center justify-center pl-[8px] pr-[16px] py-[6px] relative shrink-0" data-name="state-layer">
      <div className="overflow-clip relative shrink-0 size-[18px]" data-name="Icon">
        <div className="absolute inset-[12.5%_9.72%_9.72%_12.5%]" data-name="Icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.9995 13.9995">
            <g id="Icon">
              <path clipRule="evenodd" d={svgPaths.p1aae9100} fill="var(--fill-0, #1D1A24)" fillRule="evenodd" />
              <path d={svgPaths.p2d82d4f2} fill="var(--fill-0, #1D1A24)" />
            </g>
          </svg>
        </div>
      </div>
      <div className="flex flex-col font-['Lexend:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1d1a24] text-[14px] text-center tracking-[0.1px] whitespace-nowrap">
        <p className="leading-[20px]">Copy Link</p>
      </div>
    </div>
  );
}

function StateLayer13() {
  return (
    <div className="content-stretch flex h-[26.667px] items-center justify-center relative shrink-0 w-full" data-name="State-layer">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="share-2">
        <div className="absolute inset-[4.17%_8.33%]" data-name="Icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 14.6667">
            <path clipRule="evenodd" d={svgPaths.padff280} fill="var(--fill-0, #494455)" fillRule="evenodd" id="Icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Content5() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col items-center justify-center left-[calc(50%-0.33px)] overflow-clip rounded-[100px] top-1/2 w-[26.667px]" data-name="Content">
      <StateLayer13 />
    </div>
  );
}

function VerticalBorder1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center pl-[17px] relative shrink-0" data-name="VerticalBorder">
      <div aria-hidden="true" className="absolute border-[#cbc3d7] border-l border-solid inset-0 pointer-events-none" />
      <div className="relative shrink-0 size-[32px]" data-name="Icon Button Standard">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
          <Content5 />
        </div>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Container">
      <div className="cursor-pointer relative rounded-[8px] shrink-0" data-name="Assistive chip">
        <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit]">
          <StateLayer12 />
        </div>
        <div aria-hidden="true" className="absolute border border-[#7a7486] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>
      <VerticalBorder1 />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] h-full items-center min-h-px min-w-px relative" data-name="Container">
      <Heading1 />
      <Container4 />
    </div>
  );
}

function MArketplaceListItem1() {
  return (
    <div className="relative shrink-0 w-full" data-name="MArketplace List Item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[24px] py-[8px] relative w-full">
          <Media1 />
          <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
            <Container3 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Ab6AXuDpDe4D9Z0HovHQwMnhAzQkZK1Ei1Ir3M7VC4GdnZlZcw98O0SblIuvv9OvWh0UDcxj0HSsoKkObfqp218QyGy7O6EcobSHhq7Fqf9YhB0Q2WajRvkxYd9RPgDg3Ws46BdkVavsIm8KJknfgdc1HqquF6Jegv7PCv6SxJ6VSOyO6B07ShXd9X92SFekbBaaRNiSi1CkRsBiAXo3Qe7G8JKhq1Kv4AaQvUhCnmGPyW2IqkOSjDrQ7LtIy3WuWaz2EKg2() {
  return (
    <div className="max-w-[56px] relative shrink-0 size-[40px]" data-name="AB6AXuDPDe4d9z0HOV-hQwMnhAzQkZ_k1EI1ir-3-M-7vC4GdnZLZcw98O0sblIUVV9ovWH0UDcxj0HSsoKkObfqp218QyGy7O6ecobSHhq7_FQF9yhB0Q2WAJRvkxYd9rPgDG3WS46BdkVAVSIm8KJknfgdc1HqquF6Jegv7pCV6sxJ6vSOy-O6B07ShXd9X92-SFekbBaaRNiSi1CKRsBiAXo3Qe7G8jKhq1Kv4AaQvUhCnmGPyW2iqk_OSjDrQ7LtIy3WUWaz-2e_Kg8">
      <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgAb6AXuDpDe4D9Z0HovHQwMnhAzQkZK1Ei1Ir3M7VC4GdnZlZcw98O0SblIuvv9OvWh0UDcxj0HSsoKkObfqp218QyGy7O6EcobSHhq7Fqf9YhB0Q2WajRvkxYd9RPgDg3Ws46BdkVavsIm8KJknfgdc1HqquF6Jegv7PCv6SxJ6VSOyO6B07ShXd9X92SFekbBaaRNiSi1CkRsBiAXo3Qe7G8JKhq1Kv4AaQvUhCnmGPyW2IqkOSjDrQ7LtIy3WuWaz2EKg10} />
      </div>
    </div>
  );
}

function Media2() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 size-[56px]" data-name="Media">
      <div className="content-stretch flex items-center justify-center overflow-clip p-px relative rounded-[inherit] size-full">
        <Ab6AXuDpDe4D9Z0HovHQwMnhAzQkZK1Ei1Ir3M7VC4GdnZlZcw98O0SblIuvv9OvWh0UDcxj0HSsoKkObfqp218QyGy7O6EcobSHhq7Fqf9YhB0Q2WajRvkxYd9RPgDg3Ws46BdkVavsIm8KJknfgdc1HqquF6Jegv7PCv6SxJ6VSOyO6B07ShXd9X92SFekbBaaRNiSi1CkRsBiAXo3Qe7G8JKhq1Kv4AaQvUhCnmGPyW2IqkOSjDrQ7LtIy3WuWaz2EKg2 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#cbc3d7] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Link2() {
  return (
    <div className="content-stretch flex gap-[4px] h-[20px] items-center relative shrink-0 w-[254px]" data-name="Link">
      <div className="flex flex-col font-['Lexend:Medium',sans-serif] font-medium justify-end leading-[0] relative shrink-0 text-[#4a00bf] text-[0px] tracking-[0.1px] whitespace-nowrap">
        <p className="decoration-solid leading-[20px] text-[14px] underline">View on Marketplace</p>
      </div>
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="External Link">
        <div className="absolute inset-[10.42%]" data-name="Icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.6667 12.6667">
            <g id="Icon">
              <path d={svgPaths.p3ddcb600} fill="var(--fill-0, #4A00BF)" />
              <path d={svgPaths.p1af79800} fill="var(--fill-0, #4A00BF)" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Heading 3">
      <div className="flex flex-col font-['Lexend:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1d1a24] text-[16px] tracking-[0.15px] whitespace-nowrap">
        <p className="leading-[24px]">Mercari</p>
      </div>
      <Link2 />
    </div>
  );
}

function StateLayer14() {
  return (
    <div className="content-stretch flex gap-[8px] h-[32px] items-center justify-center pl-[8px] pr-[16px] py-[6px] relative shrink-0" data-name="state-layer">
      <div className="overflow-clip relative shrink-0 size-[18px]" data-name="Icon">
        <div className="absolute inset-[12.5%_9.72%_9.72%_12.5%]" data-name="Icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.9995 13.9995">
            <g id="Icon">
              <path clipRule="evenodd" d={svgPaths.p1aae9100} fill="var(--fill-0, #1D1A24)" fillRule="evenodd" />
              <path d={svgPaths.p2d82d4f2} fill="var(--fill-0, #1D1A24)" />
            </g>
          </svg>
        </div>
      </div>
      <div className="flex flex-col font-['Lexend:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1d1a24] text-[14px] text-center tracking-[0.1px] whitespace-nowrap">
        <p className="leading-[20px]">Copy Link</p>
      </div>
    </div>
  );
}

function StateLayer15() {
  return (
    <div className="content-stretch flex h-[26.667px] items-center justify-center relative shrink-0 w-full" data-name="State-layer">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="share-2">
        <div className="absolute inset-[4.17%_8.33%]" data-name="Icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 14.6667">
            <path clipRule="evenodd" d={svgPaths.padff280} fill="var(--fill-0, #494455)" fillRule="evenodd" id="Icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Content6() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col items-center justify-center left-[calc(50%-0.33px)] overflow-clip rounded-[100px] top-1/2 w-[26.667px]" data-name="Content">
      <StateLayer15 />
    </div>
  );
}

function VerticalBorder2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center pl-[17px] relative shrink-0" data-name="VerticalBorder">
      <div aria-hidden="true" className="absolute border-[#cbc3d7] border-l border-solid inset-0 pointer-events-none" />
      <div className="relative shrink-0 size-[32px]" data-name="Icon Button Standard">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
          <Content6 />
        </div>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Container">
      <div className="cursor-pointer relative rounded-[8px] shrink-0" data-name="Assistive chip">
        <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit]">
          <StateLayer14 />
        </div>
        <div aria-hidden="true" className="absolute border border-[#7a7486] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>
      <VerticalBorder2 />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] h-full items-center min-h-px min-w-px relative" data-name="Container">
      <Heading2 />
      <Container6 />
    </div>
  );
}

function MArketplaceListItem2() {
  return (
    <div className="relative shrink-0 w-full" data-name="MArketplace List Item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[24px] py-[8px] relative w-full">
          <Media2 />
          <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
            <Container5 />
          </div>
        </div>
      </div>
    </div>
  );
}

function MarketplaceList() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Marketplace List">
      <MArketplaceListItem />
      <div className="h-[2px] relative shrink-0 w-full" data-name="Divider">
        <div className="absolute bottom-0 left-0 right-0 top-full" data-name="horizontal line">
          <div className="absolute inset-[-1px_0_0_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 886 1">
              <line id="horizontal line" stroke="var(--stroke-0, #CBC3D7)" strokeLinecap="square" x1="0.5" x2="885.5" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
      </div>
      <MArketplaceListItem1 />
      <div className="h-[2px] relative shrink-0 w-full" data-name="Divider">
        <div className="absolute bottom-0 left-0 right-0 top-full" data-name="horizontal line">
          <div className="absolute inset-[-1px_0_0_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 886 1">
              <line id="horizontal line" stroke="var(--stroke-0, #CBC3D7)" strokeLinecap="square" x1="0.5" x2="885.5" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
      </div>
      <MArketplaceListItem2 />
    </div>
  );
}

function MarketplaceWrapper() {
  return (
    <div className="relative shrink-0 w-full" data-name="Marketplace Wrapper">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <MarketplaceList />
      </div>
    </div>
  );
}

function SectionMarketplaceStatusList() {
  return (
    <div className="bg-white col-1 justify-self-stretch relative rounded-[24px] row-2 self-start shrink-0" data-name="Section - Marketplace Status List">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] w-full">
        <TitleWrapper />
        <MarketplaceWrapper />
      </div>
      <div aria-hidden="true" className="absolute border border-[#cbc3d7] border-solid inset-0 pointer-events-none rounded-[24px]" />
    </div>
  );
}

function Ab6AXuAmt8DQf1JpgpDgVRaxCo5PmRcoHrF7SIm9VaLnnVqXvMpFtqq8LKsY4HzIGn38T9WwjChNsTmltg2KZdfwwQS3FumMe2Npkru9SKhn4Be3SrOj3GkGQrcqhGeF4Ec2IbiuwDywOd6Ujy2PwL95SbUSh7RJh4IkBjqlduUzo4LGfuX7KxOpEwHovrxs0Nu8XZbj2I8NR15SjhB43Y6OXoPnlGWitftkkV541Xff2ZQIqWqJriuL60YTvj4Sik2POjNkRyo() {
  return (
    <div className="h-[230.742px] relative shrink-0 w-[228.881px]" data-name="AB6AXuAMT8dQF1JpgpDgVRaxCo5PmRcoHrF7sIm9vaLnn_vqXvMpFTQQ8lKsY4hzIGn38t9WwjChNS_TMLTG2-KZdfwwQ_S3FumME-2NPKRU9sKhn4be3-SrOJ3GkGQrcqhGeF4EC2IBIUWDywOD6UJY2PwL9_5SbUSh7RJh4IkBJQLDUUzo4LGfuX7kxOpEwHOVRXS0nu8xZbj2I8nR15SjhB43Y6oXOPnlGWitftkkV541XFF2Z-qIqWqJriuL60YTvj4Sik2POjNkRyo">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgAb6AXuAmt8DQf1JpgpDgVRaxCo5PmRcoHrF7SIm9VaLnnVqXvMpFtqq8LKsY4HzIGn38T9WwjChNsTmltg2KZdfwwQS3FumMe2Npkru9SKhn4Be3SrOj3GkGQrcqhGeF4Ec2IbiuwDywOd6Ujy2PwL95SbUSh7RJh4IkBjqlduUzo4LGfuX7KxOpEwHovrxs0Nu8XZbj2I8NR15SjhB43Y6OXoPnlGWitftkkV541Xff2ZQIqWqJriuL60YTvj4Sik2POjNkRyo} />
    </div>
  );
}

function ContentFrame1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Content frame">
      <div className="flex flex-col font-['Lexend:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#494455] text-[11px] text-center tracking-[0.5px] whitespace-nowrap">
        <p className="leading-[16px]">$45.00</p>
      </div>
    </div>
  );
}

function Tag1() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center px-[4px] relative rounded-[4px] shrink-0" data-name="Tag">
      <ContentFrame1 />
      <div className="h-[20px] relative shrink-0 w-0" data-name="Min height XSmall">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Min height XSmall" />
        </svg>
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col h-[48px] items-start overflow-clip relative shrink-0 w-full" data-name="Heading 4">
      <p className="flex-[1_0_0] font-['Lexend:Medium',sans-serif] font-medium leading-[24px] min-h-px min-w-px overflow-hidden relative text-[#1d1a24] text-[16px] text-ellipsis tracking-[0.15px] w-full">{`Men's Nike Sneakers - Navy Blue & Gray - Good Condition - Size 10`}</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[10px] items-center justify-center px-[8px] relative size-full">
          <Ab6AXuAmt8DQf1JpgpDgVRaxCo5PmRcoHrF7SIm9VaLnnVqXvMpFtqq8LKsY4HzIGn38T9WwjChNsTmltg2KZdfwwQS3FumMe2Npkru9SKhn4Be3SrOj3GkGQrcqhGeF4Ec2IbiuwDywOd6Ujy2PwL95SbUSh7RJh4IkBjqlduUzo4LGfuX7KxOpEwHovrxs0Nu8XZbj2I8NR15SjhB43Y6OXoPnlGWitftkkV541Xff2ZQIqWqJriuL60YTvj4Sik2POjNkRyo />
          <div className="absolute content-stretch flex items-start right-[20px] top-[42px]" data-name="Tag">
            <Tag1 />
          </div>
          <Heading3 />
        </div>
      </div>
    </div>
  );
}

function SectionListingPreviewCard() {
  return (
    <div className="bg-[#f8f1ff] col-2 justify-self-stretch relative rounded-[24px] row-1 self-stretch shrink-0" data-name="Section - Listing Preview Card">
      <div aria-hidden="true" className="absolute border border-[#cbc3d7] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[25px] py-px relative size-full">
          <Frame3 />
        </div>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[20.071px] relative shrink-0 w-[20.047px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.0467 20.0706">
        <g id="Container">
          <path d={svgPaths.p6551200} fill="var(--fill-0, #7F19E6)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Heading4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative w-full">
        <Container7 />
        <div className="flex flex-col font-['Lexend:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] relative shrink-0 text-[#7f19e6] text-[18px] w-[120.28px]">
          <p className="leading-[28px]">{`What's Next?`}</p>
        </div>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Lexend:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1d1a24] text-[14px] text-center tracking-[0.1px] whitespace-nowrap">
        <p className="leading-[20px]">Create Template</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative">
        <div className="overflow-clip relative shrink-0 size-[24px]" data-name="template">
          <div className="absolute inset-[8.33%]" data-name="Icon">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
              <path clipRule="evenodd" d={svgPaths.p18c1f300} fill="var(--fill-0, #4A00BF)" fillRule="evenodd" id="Icon" />
            </svg>
          </div>
        </div>
        <Container10 />
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#fdf7ff] flex-[1_0_0] min-h-px min-w-px relative rounded-[12px] w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#cbc3d7] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[17px] relative size-full">
          <Container9 />
          <div className="relative shrink-0 size-[24px]" data-name="Chevron Right">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
              <div className="absolute bottom-[8.34%] left-1/4 right-[27.73%] top-[8.33%]" data-name="Icon">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.3458 19.9993">
                  <path d={svgPaths.p3cd472c0} fill="var(--fill-0, #494455)" id="Icon" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Lexend:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1d1a24] text-[14px] text-center tracking-[0.1px] whitespace-nowrap">
        <p className="leading-[20px]">Sync Inventory</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative">
        <div className="overflow-clip relative shrink-0 size-[24px]" data-name="sync">
          <div className="absolute inset-[12.5%_8.5%_11.12%_8.33%]" data-name="Icon">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.959 18.3325">
              <g id="Icon">
                <path d={svgPaths.p3af5f700} fill="var(--fill-0, #4A00BF)" />
                <path d={svgPaths.p1a95b780} fill="var(--fill-0, #4A00BF)" />
              </g>
            </svg>
          </div>
        </div>
        <Container12 />
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#fdf7ff] flex-[1_0_0] min-h-px min-w-px relative rounded-[12px] w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#cbc3d7] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[17px] relative size-full">
          <Container11 />
          <div className="relative shrink-0 size-[24px]" data-name="Chevron Right">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
              <div className="absolute bottom-[8.34%] left-1/4 right-[27.73%] top-[8.33%]" data-name="Icon">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.3458 19.9993">
                  <path d={svgPaths.p3cd472c0} fill="var(--fill-0, #494455)" id="Icon" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Lexend:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1d1a24] text-[14px] text-center tracking-[0.1px] whitespace-nowrap">
        <p className="leading-[20px]">Check Analytics</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative">
        <div className="overflow-clip relative shrink-0 size-[24px]" data-name="analytics">
          <div className="absolute inset-[12.5%]" data-name="Icon">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
              <path d={svgPaths.p1f65dc00} fill="var(--fill-0, #4A00BF)" id="Icon" />
            </svg>
          </div>
        </div>
        <Container14 />
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#fdf7ff] flex-[1_0_0] min-h-px min-w-px relative rounded-[12px] w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#cbc3d7] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[17px] relative size-full">
          <Container13 />
          <div className="relative shrink-0 size-[24px]" data-name="Chevron Right">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
              <div className="absolute bottom-[8.34%] left-1/4 right-[27.73%] top-[8.33%]" data-name="Icon">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.3458 19.9993">
                  <path d={svgPaths.p3cd472c0} fill="var(--fill-0, #494455)" id="Icon" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start justify-center relative size-full">
        <Button />
        <Button1 />
        <Button2 />
      </div>
    </div>
  );
}

function Section() {
  return (
    <div className="bg-[rgba(104,58,223,0.08)] col-2 content-stretch flex flex-col gap-[16px] h-[355px] items-start p-[25px] relative rounded-[24px] row-2 shrink-0 w-[296px]" data-name="Section">
      <div aria-hidden="true" className="absolute border border-[rgba(104,58,223,0.16)] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <Heading4 />
      <Container8 />
    </div>
  );
}

function MainWrapper1() {
  return (
    <div className="flex-[1_0_0] gap-x-[16px] gap-y-[16px] grid grid-cols-[__minmax(0,3fr)_minmax(0,1fr)] grid-rows-[repeat(2,minmax(0,1fr))] min-h-px min-w-px relative w-full" data-name="Main Wrapper">
      <SectionSuccessHeaderCard />
      <SectionMarketplaceStatusList />
      <SectionListingPreviewCard />
      <Section />
    </div>
  );
}

function InsideFrame() {
  return (
    <div className="bg-[#fdf7ff] content-stretch flex flex-[1_0_0] flex-col gap-[24px] h-[832px] items-start min-h-px min-w-px relative" data-name="Inside Frame">
      <Header />
      <MainWrapper1 />
    </div>
  );
}

function MainWrapper() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Main Wrapper">
      <div className="bg-[#f2ebf9] content-stretch flex flex-col gap-[40px] items-start overflow-clip relative rounded-[16px] self-stretch shrink-0" data-name="Navigation Rail">
        <MenuFab />
        <Segments />
        <Settings />
      </div>
      <InsideFrame />
    </div>
  );
}

export default function Scrollable() {
  return (
    <div className="bg-[#fdf7ff] content-stretch flex flex-col items-start px-[64px] py-[48px] relative size-full" data-name="Scrollable 8">
      <MainWrapper />
    </div>
  );
}