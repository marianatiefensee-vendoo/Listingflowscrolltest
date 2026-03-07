import imgThumbnail from "figma:asset/55ad25062cf42038188e8437b6d83a149a822f83.png";

function Thumbnail() {
  return (
    <div className="relative shrink-0 size-[56px]" data-name="Thumbnail">
      <div className="absolute inset-0 pointer-events-none rounded-[4px]" data-name="Thumbnail">
        <img alt="" className="absolute inset-0 max-w-none object-cover rounded-[4px] size-full" src={imgThumbnail} />
        <div aria-hidden="true" className="absolute border border-[#cbc3d7] border-solid inset-0 rounded-[4px]" />
      </div>
    </div>
  );
}

function StateLayer1() {
  return (
    <div className="content-stretch flex items-center justify-center p-[11px] relative rounded-[100px] shrink-0" data-name="state-layer">
      <div className="relative rounded-[2px] shrink-0 size-[18px]" data-name="container">
        <div aria-hidden="true" className="absolute border-2 border-[#494455] border-solid inset-0 pointer-events-none rounded-[2px]" />
      </div>
    </div>
  );
}

function StateLayer() {
  return (
    <div className="relative rounded-[12px] shrink-0 w-full" data-name="State layer">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] isolate items-center px-[16px] py-[10px] relative w-full">
          <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 z-[3]" data-name="Leading element">
            <Thumbnail />
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative z-[2]" data-name="Content">
            <div className="content-stretch flex flex-col items-start justify-center min-h-[32px] relative shrink-0 w-[42px]" data-name="Building blocks/Content">
              <div className="flex flex-col font-['Lexend:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#494455] text-[16px] tracking-[0.5px] w-full">
                <p className="leading-[24px]">Facebook</p>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0 z-[1]" data-name="Trailing element">
            <div className="content-stretch flex flex-col items-center justify-center p-[4px] relative shrink-0" data-name="Checkboxes">
              <StateLayer1 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ListItem() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start justify-center relative rounded-[4px] size-full" data-name="List Item 07">
      <div aria-hidden="true" className="absolute border border-[#cbc3d7] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <StateLayer />
    </div>
  );
}