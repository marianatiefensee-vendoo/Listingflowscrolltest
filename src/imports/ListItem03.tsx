import svgPaths from "./svg-j7atru0t5q";
import imgThumbnail from "figma:asset/818d7c9ebebd26d98ee60737907006a9b258dce3.png";

function Thumbnail() {
  return (
    <div className="relative shrink-0 size-[56px]" data-name="Thumbnail">
      <div className="absolute inset-0 pointer-events-none rounded-[4px]" data-name="Thumbnail">
        <div aria-hidden="true" className="absolute inset-0 rounded-[4px]">
          <div className="absolute bg-white inset-0 rounded-[4px]" />
          <img alt="" className="absolute max-w-none object-cover rounded-[4px] size-full" src={imgThumbnail} />
        </div>
        <div aria-hidden="true" className="absolute border border-[#7a7486] border-solid inset-0 rounded-[4px]" />
      </div>
    </div>
  );
}

function StateLayer1() {
  return (
    <div className="content-stretch flex items-center justify-center p-[11px] relative rounded-[100px] shrink-0" data-name="state-layer">
      <div className="bg-[#4a00bf] rounded-[2px] shrink-0 size-[18px]" data-name="container" />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[24px] top-1/2" data-name="check_small">
        <div className="absolute bottom-[31.67%] left-1/4 right-1/4 top-[29.17%]" data-name="icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 9.4">
            <path d={svgPaths.p35d39780} fill="var(--fill-0, white)" id="icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function StateLayer() {
  return (
    <div className="bg-[rgba(104,58,223,0.16)] relative rounded-[4px] shrink-0 w-full" data-name="State layer">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] isolate items-center px-[16px] py-[10px] relative w-full">
          <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 z-[3]" data-name="Leading element">
            <Thumbnail />
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative z-[2]" data-name="Content">
            <div className="content-stretch flex flex-col items-start justify-center min-h-[32px] relative shrink-0 w-[42px]" data-name="Building blocks/Content">
              <div className="flex flex-col font-['Lexend:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1d1a24] text-[16px] tracking-[0.5px] w-full">
                <p className="leading-[24px]">Mercari</p>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-center justify-center p-[4px] relative shrink-0 z-[1]" data-name="Trailing element">
            <StateLayer1 />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ListItem() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start justify-center relative rounded-[4px] size-full" data-name="List Item 03">
      <StateLayer />
    </div>
  );
}