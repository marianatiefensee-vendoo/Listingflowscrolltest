export default function ButtonOutline() {
  return (
    <div className="bg-[rgba(29,26,36,0.1)] content-stretch flex items-center justify-center relative rounded-[5px] size-full" data-name="Button- Outline">
      <div aria-hidden="true" className="absolute border border-[#cbc3d7] border-solid inset-0 pointer-events-none rounded-[5px]" />
      <div className="content-stretch flex flex-col items-center justify-center relative rounded-[5px] shrink-0" data-name="Content">
        <div className="content-stretch flex gap-[10px] items-center opacity-38 px-[16px] py-[10px] relative shrink-0" data-name="State - Layer">
          <div className="content-stretch flex items-center justify-center px-[4px] relative shrink-0" data-name="Label">
            <div className="flex flex-col font-['Lexend:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#494455] text-[14px] text-center tracking-[0.1px] whitespace-nowrap">
              <p className="leading-[20px]">Next</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}