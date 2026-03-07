import { Marketplace, ItemDetails } from "../App";
import svgPaths from "../../imports/svg-3ih8kwlw3p";
import IconSuccess from "../../imports/IconSuccess";
import imgEbay from "figma:asset/fc302d572214546f8204178ed8fb7d0af8c7506e.png";
import imgMercari from "figma:asset/818d7c9ebebd26d98ee60737907006a9b258dce3.png";
import imgDepop from "figma:asset/9fc19e9b972ada34a5069710f93ea92cd4258fea.png";
import imgFacebook from "figma:asset/55ad25062cf42038188e8437b6d83a149a822f83.png";

interface ListingSuccessPageProps {
  photos: string[];
  itemDetails: ItemDetails | null;
  price: string;
  selectedMarketplaceIds: string[];
  onListAnother: () => void;
  onGoToInventory: () => void;
}

const allMarketplaces: Marketplace[] = [
  { id: "ebay", name: "eBay", image: imgEbay, connected: true },
  { id: "mercari", name: "Mercari", image: imgMercari, connected: true },
  { id: "depop", name: "Depop", image: imgDepop, connected: true },
  { id: "facebook", name: "Facebook", image: imgFacebook, connected: true },
];

// Map marketplace IDs to display names for the status section
const marketplaceDisplayNames: Record<string, string> = {
  ebay: "eBay",
  mercari: "Poshmark",
  depop: "Mercari",
  facebook: "Facebook",
};

export default function ListingSuccessPage({
  photos,
  itemDetails,
  price,
  selectedMarketplaceIds,
  onListAnother,
  onGoToInventory,
}: ListingSuccessPageProps) {
  const selectedMarketplaces = allMarketplaces.filter((m) =>
    selectedMarketplaceIds.includes(m.id)
  );
  const coverPhoto = photos.length > 0 ? photos[0] : null;
  const marketplaceCount = selectedMarketplaceIds.length;

  return (
    <div className="bg-[#fdf7ff] content-stretch flex flex-[1_0_0] flex-col gap-[24px] min-h-px min-w-px relative">
      {/* Main Content Grid */}
      <div className="flex-[1_0_0] gap-x-[16px] gap-y-[16px] grid grid-cols-[minmax(0,3fr)_minmax(0,1fr)] grid-rows-[auto_1fr] min-h-px min-w-px relative w-full">
        {/* Success Header Card */}
        <div className="bg-white col-1 relative rounded-[24px] row-1 self-start shrink-0">
          <div aria-hidden="true" className="absolute border border-[#cbc3d7] border-solid inset-0 pointer-events-none rounded-[24px]" />
          <div className="flex flex-col items-center size-full">
            <div className="content-stretch flex flex-col items-center p-[25px] relative size-full">
              {/* Success Icon */}
              <div className="size-[80px] shrink-0">
                <IconSuccess />
              </div>

              {/* Text Content */}
              <div className="relative shrink-0 w-[423px]">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center p-[12px] relative w-full">
                  <div className="content-stretch flex flex-col font-['Lexend:Regular',sans-serif] font-normal gap-[8px] items-center justify-center relative shrink-0 text-center w-full whitespace-nowrap">
                    <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-[#1d1a24] text-[32px]">
                      <p className="leading-[40px]">Item Listed Successfully!</p>
                    </div>
                    <div className="flex flex-col justify-center leading-[24px] relative shrink-0 text-[#7a7486] text-[16px] tracking-[0.5px]">
                      <p className="mb-0">Your item has been listed on {marketplaceCount} {marketplaceCount === 1 ? 'marketplace' : 'marketplaces'} and</p>
                      <p>is now live for buyers.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Button Actions */}
              <div className="relative shrink-0 w-full">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12.01px] items-center justify-center py-[12px] relative w-full">
                  <button onClick={onListAnother} className="bg-[#4a00bf] h-[48px] relative rounded-[5px] shrink-0 cursor-pointer hover:bg-[#3d009f] transition-colors">
                    <div className="flex flex-row items-center justify-center size-full">
                      <div className="content-stretch flex items-center justify-center px-[20px] py-[16px] relative size-full">
                        <div className="content-stretch flex flex-col items-center justify-center relative rounded-[5px] shrink-0">
                          <div className="content-stretch flex gap-[10px] items-center px-[16px] py-[10px] relative rounded-[5px] shrink-0">
                            <div className="overflow-clip relative shrink-0 size-[20px]">
                              <div className="absolute inset-[16.67%]">
                                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333">
                                  <path d={svgPaths.p2e11fc00} fill="var(--fill-0, white)" id="Icon" />
                                </svg>
                              </div>
                            </div>
                            <div className="content-stretch flex items-center justify-center px-[4px] relative shrink-0">
                              <div className="flex flex-col font-['Lexend:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white tracking-[0.1px] whitespace-nowrap">
                                <p className="leading-[20px]">List Another Item</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </button>
                  <button onClick={onGoToInventory} className="bg-[#fdf7ff] h-[48px] relative rounded-[5px] shrink-0 cursor-pointer hover:bg-[#f5eeff] transition-colors">
                    <div aria-hidden="true" className="absolute border border-[#cbc3d7] border-solid inset-0 pointer-events-none rounded-[5px]" />
                    <div className="flex flex-row items-center justify-center size-full">
                      <div className="content-stretch flex items-center justify-center px-[20px] py-[16px] relative size-full">
                        <div className="content-stretch flex flex-col items-center justify-center relative rounded-[5px] shrink-0">
                          <div className="content-stretch flex gap-[10px] items-center px-[16px] py-[10px] relative shrink-0">
                            <div className="content-stretch flex items-center justify-center px-[4px] relative shrink-0">
                              <div className="flex flex-col font-['Lexend:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#494455] text-[14px] text-center tracking-[0.1px] whitespace-nowrap">
                                <p className="leading-[20px]">Go to Inventory</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Listing Preview Card */}
        <div className="bg-white col-2 relative rounded-[24px] row-1 row-span-2 self-start shrink-0">
          <div aria-hidden="true" className="absolute border border-[#cbc3d7] border-solid inset-0 pointer-events-none rounded-[24px]" />
          <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] w-full">
            {/* Cover Photo */}
            <div className="relative shrink-0 w-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
                <div className="relative shrink-0 w-full aspect-square">
                  <div className="bg-[#e7e0ec] overflow-clip relative rounded-tl-[24px] rounded-tr-[24px] size-full">
                    {coverPhoto && (
                      <img
                        src={coverPhoto}
                        alt="Listing cover"
                        className="absolute inset-0 size-full object-cover"
                      />
                    )}
                    {/* Price Badge */}
                    <div className="absolute right-[12px] top-[12px] z-10">
                      <div className="bg-white relative rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.3),0px_1px_3px_0px_rgba(0,0,0,0.15)]">
                        <div aria-hidden="true" className="absolute border border-[#e7e0ec] border-solid inset-0 pointer-events-none rounded-[8px]" />
                        <div className="flex flex-row items-center size-full">
                          <div className="content-stretch flex items-center px-[8px] py-[6px] relative size-full">
                            <div className="flex flex-col font-['Lexend:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1d1a24] text-[14px] tracking-[0.1px] whitespace-nowrap">
                              <p className="leading-[20px]">${price || "0.00"}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Listing Details */}
            <div className="relative shrink-0 w-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start p-[24px] relative w-full">
                <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
                  <div className="flex flex-col font-['Lexend:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1d1a24] text-[16px] tracking-[0.15px] w-full">
                    <p className="leading-[24px]">{itemDetails?.title || "Untitled Item"}</p>
                  </div>
                </div>
                <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
                  <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0">
                    <div className="flex flex-col font-['Lexend:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#7a7486] text-[12px] tracking-[0.4px] whitespace-nowrap">
                      <p className="leading-[16px]">Condition</p>
                    </div>
                    <div className="flex flex-col font-['Lexend:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1d1a24] text-[14px] tracking-[0.1px] whitespace-nowrap">
                      <p className="leading-[20px]">{itemDetails?.condition || "--"}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Marketplace Status List */}
        <div className="bg-white col-1 justify-self-stretch relative rounded-[24px] row-2 self-start shrink-0">
          <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] w-full">
            {/* Title */}
            <div className="relative shrink-0 w-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
                <div className="content-stretch flex items-center justify-between relative shrink-0 w-full p-[24px] pb-[24px]">
                  <div className="content-stretch flex flex-col items-start relative shrink-0">
                    <div className="flex flex-col font-['Lexend:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1d1a24] text-[16px] tracking-[0.15px] whitespace-nowrap">
                      <p className="leading-[24px]">Marketplace Status</p>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
                    <div className="overflow-clip relative shrink-0 size-[12px]">
                      <div className="absolute inset-[9.64%_7.5%]">
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.2002 9.68721">
                          <path d={svgPaths.p10830600} fill="var(--fill-0, #4E9721)" id="Icon" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex flex-col font-['Lexend:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#4e9721] text-[12px] tracking-[0.5px] uppercase whitespace-nowrap">
                      <p className="leading-[16px]">{marketplaceCount} LIVE</p>
                    </div>
                  </div>
                </div>
                {/* Divider between title and content - full width */}
                <div className="h-px relative shrink-0 w-full">
                  <div aria-hidden="true" className="absolute border-[#cbc3d7] border-solid border-t inset-0 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Marketplace List */}
            <div className="relative shrink-0 w-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
                <div className="content-stretch flex flex-col items-start pt-[24px] pb-[24px] relative shrink-0 w-full">
                  {selectedMarketplaces.map((marketplace, index) => (
                    <div key={marketplace.id} className="w-full">
                      <div className="bg-white relative w-full px-[24px]">
                        <div className="flex flex-row items-center size-full">
                          <div className="content-stretch flex items-center justify-between py-[12px] relative size-full w-full">
                            {/* Marketplace Info */}
                            <div className="relative shrink-0">
                              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative">
                                <div className="bg-white overflow-clip relative rounded-[4px] shrink-0 size-[40px]">
                                  <img
                                    src={marketplace.image}
                                    alt={marketplace.name}
                                    className="absolute inset-0 object-cover size-full"
                                  />
                                  <div aria-hidden="true" className="absolute border border-[#cbc3d7] border-solid inset-0 pointer-events-none rounded-[4px]" />
                                </div>
                                <div className="content-stretch flex flex-col items-start relative shrink-0">
                                  <div className="flex flex-col font-['Lexend:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1d1a24] text-[14px] tracking-[0.1px] whitespace-nowrap">
                                    <p className="leading-[20px]">{marketplaceDisplayNames[marketplace.id] || marketplace.name}</p>
                                  </div>
                                  <div className="flex flex-col font-['Lexend:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#7a7486] text-[12px] tracking-[0.4px] whitespace-nowrap">
                                    <p className="leading-[16px]">View on Marketplace</p>
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Actions */}
                            <div className="relative shrink-0">
                              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative">
                                <button className="bg-[#fdf7ff] h-[40px] relative rounded-[8px] w-[115px] cursor-pointer hover:bg-[#f5eeff] transition-colors">
                                  <div aria-hidden="true" className="absolute border border-[#cbc3d7] border-solid inset-0 pointer-events-none rounded-[8px]" />
                                  <div className="flex flex-row items-center justify-center size-full">
                                    <div className="content-stretch flex items-center justify-center p-[12px] relative size-full">
                                      <div className="content-stretch flex items-center justify-center relative shrink-0">
                                        <div className="overflow-clip relative shrink-0 size-[16px]">
                                          <div className="absolute inset-[16.67%]">
                                            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3334 13.3334">
                                              <path d={svgPaths.p1a1be680} fill="var(--fill-0, #494455)" id="Icon" />
                                            </svg>
                                          </div>
                                        </div>
                                        <div className="content-stretch flex items-center justify-center px-[4px] relative shrink-0">
                                          <div className="flex flex-col font-['Lexend:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#494455] text-[12px] text-center tracking-[0.5px] whitespace-nowrap">
                                            <p className="leading-[16px]">Copy Link</p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </button>
                                <button className="relative shrink-0 size-[40px] cursor-pointer hover:bg-[#f5eeff] rounded-[8px] transition-colors">
                                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full rounded-[8px]">
                                    <div className="overflow-clip relative shrink-0 size-[20px]">
                                      <div className="absolute inset-[16.67%]">
                                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3334 13.3334">
                                          <path d={svgPaths.p7b7c300} fill="var(--fill-0, #494455)" id="Icon" />
                                        </svg>
                                      </div>
                                    </div>
                                  </div>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {index < selectedMarketplaces.length - 1 && (
                        <div className="h-px relative shrink-0 w-full">
                          <div aria-hidden="true" className="absolute border-[#cbc3d7] border-solid border-t inset-0 pointer-events-none" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border border-[#cbc3d7] border-solid inset-0 pointer-events-none rounded-[24px]" />
        </div>
      </div>
    </div>
  );
}