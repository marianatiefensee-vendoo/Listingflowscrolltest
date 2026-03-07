import { Marketplace } from "../App";
import svgPaths from "../../imports/svg-fzcann6m2y";
import { Tooltip, TooltipTrigger, TooltipContent } from "./ui/tooltip";
import imgEbay from "figma:asset/fc302d572214546f8204178ed8fb7d0af8c7506e.png";
import imgMercari from "figma:asset/818d7c9ebebd26d98ee60737907006a9b258dce3.png";
import imgDepop from "figma:asset/9fc19e9b972ada34a5069710f93ea92cd4258fea.png";
import imgFacebook from "figma:asset/55ad25062cf42038188e8437b6d83a149a822f83.png";

interface ListingSummaryDynamicProps {
  selectedMarketplaceIds: string[];
  onSelectMarketplaces?: () => void;
  onEditMarketplace?: (marketplaceId: string) => void;
  photos?: string[];
  itemDetails?: {
    title: string;
    brand: string;
    condition: string;
  } | null;
  price?: string;
  shippingCompleted?: boolean;
  onPublish?: () => void;
}

const allMarketplaces: Marketplace[] = [
  { id: "ebay", name: "eBay", image: imgEbay, connected: true },
  { id: "mercari", name: "Mercari", image: imgMercari, connected: true },
  { id: "depop", name: "Depop", image: imgDepop, connected: true },
  { id: "facebook", name: "Facebook", image: imgFacebook, connected: true },
];

export default function ListingSummaryDynamic({ selectedMarketplaceIds, onSelectMarketplaces, onEditMarketplace, photos = [], itemDetails = null, price = "", shippingCompleted = false, onPublish }: ListingSummaryDynamicProps) {
  const selectedMarketplaces = allMarketplaces.filter(m => selectedMarketplaceIds.includes(m.id));
  const hasSelectedMarketplaces = selectedMarketplaces.length > 0;
  const coverPhoto = photos.length > 0 ? photos[0] : null;

  // Calculate progress based on completed sections (5 sections total, each = 20%)
  const isPhotosComplete = photos.length > 0;
  const isItemDetailsComplete = itemDetails !== null && 
    itemDetails.title.trim() !== "" && 
    itemDetails.brand.trim() !== "" && 
    itemDetails.condition.trim() !== "";
  const isMarketplacesComplete = selectedMarketplaceIds.length > 0;
  const isPricingComplete = price.trim() !== "";
  const isShippingComplete = shippingCompleted;
  
  const completedSections = [
    isPhotosComplete,
    isItemDetailsComplete,
    isMarketplacesComplete,
    isPricingComplete,
    isShippingComplete
  ].filter(Boolean).length;
  
  const progressPercentage = (completedSections / 5) * 100;
  
  // Check if all sections are complete to enable publish button
  const allSectionsComplete = isPhotosComplete && 
    isItemDetailsComplete && 
    isMarketplacesComplete && 
    isPricingComplete && 
    isShippingComplete;

  return (
    <div className="bg-[#f8f1ff] content-stretch flex items-start overflow-clip relative rounded-br-[12px] rounded-tr-[12px] size-full px-[0px] py-[24px] border-r border-t border-b border-[#CBC3D7] rounded-br-[12px] m-[0px]" data-name="Listing Summary">
      <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-start relative w-full">
          {/* Completeness */}
          <div className="relative shrink-0 w-full" data-name="Completeness">
            <div className="overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex flex-col gap-[8px] items-start px-[24px] relative w-full">
                <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full whitespace-nowrap" data-name="div">
                  <p className="font-['Lexend:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#494455] text-[14px] tracking-[0.25px]">Listing Progress</p>
                  <p className="font-['Lexend:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#4a00bf] text-[12px] tracking-[0.5px]">{progressPercentage.toFixed(0)}%</p>
                </div>
                <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="div">
                  <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Linear-determinate progress indicator">
                    <div className="flex-[1_0_0] h-[12px] min-h-px min-w-px relative" data-name="track-and-stop">
                      {/* Track (background) */}
                      <div className="absolute h-[12px] left-0 right-0 top-0" data-name="Track">
                        <div className="-translate-y-1/2 absolute bg-[#e8def8] h-[4px] left-0 right-0 rounded-[2px] top-1/2" data-name="Track shape" />
                      </div>
                      {/* Progress Fill */}
                      <div className="absolute h-[12px] left-0 top-0" data-name="Progress" style={{ width: `${progressPercentage}%` }}>
                        <div className="-translate-y-1/2 absolute bg-[#4a00bf] h-[4px] left-0 right-0 rounded-[2px] top-1/2" data-name="Progress shape" />
                      </div>
                      {/* Stop indicator at the end */}
                      <div className="-translate-y-1/2 absolute h-[8px] top-1/2 w-[6px]" data-name="Stop" style={{ left: `calc(${progressPercentage}% - 3px)` }}>
                        <div className="-translate-y-1/2 absolute bg-[#4a00bf] rounded-[26px] size-[4px] top-1/2" data-name="Stop shape" style={{ left: '1px' }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Listing Preview */}
          <div className="relative shrink-0 w-full">
            <div className="content-stretch flex flex-col items-start px-[24px] relative w-full">
              <div className="bg-[#f3edf7] relative rounded-[16px] shrink-0 w-full" data-name="Background+Border">
                <div aria-hidden="true" className="absolute border border-[#cbc3d7] border-solid inset-0 pointer-events-none rounded-[16px]" />
                <div className="content-stretch flex flex-col gap-[12px] items-start p-[17px] relative w-full">
                  <div className="relative shrink-0 w-full" data-name="Heading 3">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
                      <div className="flex flex-col font-['Lexend:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1d1a24] text-[14px] tracking-[0.1px] w-full">
                        <p className="leading-[20px]">Listing Preview</p>
                      </div>
                    </div>
                  </div>

                  {/* Preview Content */}
                  <div className="relative shrink-0 w-full" data-name="Container">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-start relative w-full">
                      <div className="bg-[#e7e0ec] relative rounded-[8px] shrink-0 size-[80px]" data-name="Image+Background+Border">
                        <div aria-hidden="true" className="absolute border border-[#e7e0ec] border-solid inset-0 pointer-events-none rounded-[8px]" />
                        {coverPhoto && (
                          <img 
                            src={coverPhoto} 
                            alt="Cover photo" 
                            className="absolute inset-0 size-full object-cover rounded-[8px]"
                          />
                        )}
                      </div>
                      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative self-stretch" data-name="Container">
                        <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <div className="flex flex-col font-['Lexend:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1d1a24] text-[14px] tracking-[0.1px] w-full cursor-pointer">
                                <p className="leading-[20px] line-clamp-2 overflow-hidden text-ellipsis">
                                  {itemDetails?.title || "Title"}
                                </p>
                              </div>
                            </TooltipTrigger>
                            <TooltipContent 
                              side="top" 
                              sideOffset={8}
                              className="max-w-[240px] bg-[#1d1a24] text-white font-['Lexend:Regular',sans-serif] text-[12px] leading-[16px] tracking-[0.2px] p-[8px] rounded-[8px] z-[9999] shadow-lg [&>svg]:fill-[#1d1a24]"
                            >
                              {itemDetails?.title || "Title"}
                            </TooltipContent>
                          </Tooltip>
                        </div>
                        <div className="content-stretch flex gap-[16px] h-[40px] items-start overflow-clip relative shrink-0 w-full" data-name="div">
                          <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start min-h-px min-w-px overflow-clip relative" data-name="div">
                            <p className="flex-[1_0_0] font-['Lexend:Regular',sans-serif] font-[350] leading-[16px] min-h-px min-w-px relative text-[#494455] text-[12px] tracking-[0.2px] w-[153.344px]">{`Brand `}</p>
                            <p className="flex-[1_0_0] font-['Lexend:Medium',sans-serif] font-medium leading-[20px] min-h-px min-w-px relative text-[#1d1a24] text-[14px] tracking-[0.1px] w-[153.344px]">{itemDetails?.brand || "--"}</p>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col h-[40px] items-start overflow-clip relative shrink-0 w-full" data-name="div">
                          {itemDetails?.condition && (
                            <p className="bg-[rgba(93,0,255,0.08)] rounded-[12px] px-[12px] py-[6px] font-['Lexend:Medium',sans-serif] font-medium leading-[16px] relative text-[#494455] text-[12px] tracking-[0.5px] w-fit">{itemDetails.condition}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="h-px relative shrink-0 w-full" data-name="Horizontal Divider">
                    <div aria-hidden="true" className="absolute border-[#e7e0ec] border-solid border-t inset-0 pointer-events-none" />
                  </div>

                  <div className="bg-[#fdf8fd] relative rounded-[8px] shrink-0 w-full" data-name="Background+Border">
                    <div className="flex flex-row items-center size-full">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between p-[12px] relative w-full">
                        <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative w-full">
                            <div className="overflow-clip relative shrink-0 size-[16px]" data-name="info">
                              <div className="absolute inset-[4.17%]" data-name="Icon">
                                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6667 14.6667">
                                  <g id="Icon">
                                    <path d={svgPaths.p1db78340} fill="var(--fill-0, #CBC3D7)" />
                                    <path d={svgPaths.p35534c30} fill="var(--fill-0, #CBC3D7)" />
                                    <path clipRule="evenodd" d={svgPaths.p1f296780} fill="var(--fill-0, #CBC3D7)" fillRule="evenodd" />
                                  </g>
                                </svg>
                              </div>
                            </div>
                            <div className="flex flex-col font-['Lexend:Regular',sans-serif] font-[350] justify-center leading-[0] relative shrink-0 text-[#494455] text-[12px] tracking-[0.2px] whitespace-nowrap">
                              <p className="leading-[16px]">Listing Price</p>
                            </div>
                          </div>
                        </div>
                        <div className="relative shrink-0" data-name="Container">
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
                            <div className="flex flex-col font-['Lexend:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1d1a24] text-[22px] whitespace-nowrap">
                              <p className="leading-[28px]">{price ? `$${price}` : "$--.--"}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Marketplaces Section */}
          <div className="relative shrink-0 w-full">
            <div className="content-stretch flex flex-col items-start px-[24px] relative w-full">
              {hasSelectedMarketplaces ? (
                // Show selected marketplaces
                <div className="bg-[#f2ebf9] relative rounded-[12px] shrink-0 w-full" data-name="Container">
                  <div aria-hidden="true" className="absolute border border-[#cbc3d7] border-solid inset-[-1px] pointer-events-none rounded-[13px]" />
                  <div className="flex flex-col items-center size-full">
                    <div className="content-stretch flex flex-col gap-[12px] items-start p-[24px] relative w-full">
                      <div className="flex flex-col font-['Lexend:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1d1a24] text-[14px] tracking-[0.1px] w-full">
                        <p className="leading-[20px]">Marketplaces</p>
                      </div>
                      
                      {/* Marketplace List */}
                      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                        {selectedMarketplaces.map((marketplace) => (
                          <button
                            key={marketplace.id}
                            onClick={() => onEditMarketplace?.(marketplace.id)}
                            className="bg-white content-stretch flex items-center relative rounded-[8px] shrink-0 w-full cursor-pointer hover:bg-[#fdf7ff] transition-colors"
                          >
                            <div aria-hidden="true" className="absolute border border-[#cbc3d7] border-solid inset-0 pointer-events-none rounded-[8px]" />
                            <div className="content-stretch flex gap-[12px] items-center p-[12px] relative w-full">
                              {/* Marketplace Logo */}
                              <div className="bg-white overflow-clip relative rounded-[4px] shrink-0 size-[40px]">
                                <img src={marketplace.image} alt={marketplace.name} className="absolute inset-0 object-cover size-full" />
                                <div aria-hidden="true" className="absolute border border-[#cbc3d7] border-solid inset-0 pointer-events-none rounded-[4px]" />
                              </div>
                              
                              {/* Marketplace Name */}
                              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
                                <div className="flex flex-col font-['Lexend:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1d1a24] text-[14px] tracking-[0.25px]">
                                  <p className="leading-[20px]">{marketplace.name}</p>
                                </div>
                              </div>
                              
                              {/* Edit Icon */}
                              <div className="overflow-clip relative shrink-0 size-[24px]">
                                <div className="absolute inset-[16.67%]">
                                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                                    <g>
                                      <path clipRule="evenodd" d="M11.3333 2.00003C11.5101 1.82322 11.7513 1.72394 12.0027 1.72394C12.254 1.72394 12.4952 1.82322 12.672 2.00003L14 3.32803C14.1768 3.50484 14.2761 3.74604 14.2761 3.99737C14.2761 4.2487 14.1768 4.4899 14 4.66671L5.33333 13.3334H2V10L10.6667 1.33336L11.3333 2.00003Z" fill="var(--fill-0, #494455)" fillRule="evenodd" />
                                      <path d="M10 2.66669L13.3333 6.00003" stroke="var(--stroke-0, #F8F1FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                                    </g>
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </button>
                        ))}
                      </div>
                      
                      {/* Add Marketplace Button */}
                      <button 
                        onClick={onSelectMarketplaces}
                        className="content-stretch flex items-start relative shrink-0 w-full"
                      >
                        <div className="bg-[#fdf7ff] content-stretch flex h-[48px] items-center justify-center relative rounded-[5px] shrink-0 w-full cursor-pointer hover:bg-[#f5eeff] transition-colors" data-name="Button- Outline">
                          <div aria-hidden="true" className="absolute border border-[#cbc3d7] border-solid inset-0 pointer-events-none rounded-[5px]" />
                          <div className="content-stretch flex flex-col items-center justify-center relative rounded-[5px] shrink-0" data-name="Content">
                            <div className="content-stretch flex gap-[10px] items-center px-[16px] py-[10px] relative shrink-0" data-name="State - Layer">
                              <div className="overflow-clip relative shrink-0 size-[20px]" data-name="plus-circle">
                                <div className="absolute inset-[4.17%]" data-name="Icon">
                                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3333 18.3333">
                                    <g id="Icon">
                                      <path d={svgPaths.p3af8180} fill="var(--fill-0, #494455)" />
                                      <path clipRule="evenodd" d={svgPaths.p389ffd00} fill="var(--fill-0, #494455)" fillRule="evenodd" />
                                    </g>
                                  </svg>
                                </div>
                              </div>
                              <div className="content-stretch flex items-center justify-center px-[4px] relative shrink-0" data-name="Label">
                                <div className="flex flex-col font-['Lexend:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#494455] text-[14px] text-center tracking-[0.1px] whitespace-nowrap">
                                  <p className="leading-[20px]">Add Marketplace</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                // Show empty state with "Select Marketplaces" button
                <div className="bg-[#f2ebf9] relative rounded-[12px] shrink-0 w-full" data-name="Container">
                  <div aria-hidden="true" className="absolute border border-[#cbc3d7] border-solid inset-[-1px] pointer-events-none rounded-[13px]" />
                  <div className="flex flex-col items-center size-full">
                    <div className="content-stretch flex flex-col gap-[12px] items-center p-[24px] relative w-full">
                      <div className="flex flex-col font-['Lexend:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1d1a24] text-[14px] tracking-[0.1px] w-full">
                        <p className="leading-[20px]">Marketplaces</p>
                      </div>
                      <button 
                        onClick={onSelectMarketplaces}
                        className="content-stretch flex items-start relative shrink-0 w-full"
                      >
                        <div className="bg-[#fdf7ff] content-stretch flex h-[48px] items-center justify-center relative rounded-[5px] shrink-0 w-full cursor-pointer hover:bg-[#f5eeff] transition-colors" data-name="Button- Outline">
                          <div aria-hidden="true" className="absolute border border-[#cbc3d7] border-solid inset-0 pointer-events-none rounded-[5px]" />
                          <div className="content-stretch flex flex-col items-center justify-center relative rounded-[5px] shrink-0" data-name="Content">
                            <div className="content-stretch flex gap-[10px] items-center px-[16px] py-[10px] relative shrink-0" data-name="State - Layer">
                              <div className="overflow-clip relative shrink-0 size-[20px]" data-name="plus-circle">
                                <div className="absolute inset-[4.17%]" data-name="Icon">
                                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3333 18.3333">
                                    <g id="Icon">
                                      <path d={svgPaths.p3af8180} fill="var(--fill-0, #494455)" />
                                      <path clipRule="evenodd" d={svgPaths.p389ffd00} fill="var(--fill-0, #494455)" fillRule="evenodd" />
                                    </g>
                                  </svg>
                                </div>
                              </div>
                              <div className="content-stretch flex items-center justify-center px-[4px] relative shrink-0" data-name="Label">
                                <div className="flex flex-col font-['Lexend:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#494455] text-[14px] text-center tracking-[0.1px] whitespace-nowrap">
                                  <p className="leading-[20px]">Select Marketplaces</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </button>
                      <div className="flex flex-col font-['Lexend:Regular',sans-serif] font-[350] justify-center leading-[0] relative shrink-0 text-[#7a7486] text-[12px] tracking-[0.2px] w-full">
                        <p className="leading-[16px]">Select a marketplace to enable customize listing</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
            <div className="h-[2px] relative shrink-0 w-full" data-name="Divider">
              <div className="absolute bottom-0 left-0 right-0 top-full" data-name="horizontal line">
                <div className="absolute inset-[-1px_0_0_0]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 384 1">
                    <line id="horizontal line" stroke="var(--stroke-0, #7A7486)" strokeLinecap="square" strokeOpacity="0.16" x1="0.5" x2="383.5" y1="0.5" y2="0.5" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="relative shrink-0 w-full" data-name="Container">
              <div className="content-stretch flex flex-col gap-[12px] items-start p-[24px] relative w-full">
                <div className="bg-[rgba(29,26,36,0.1)] h-[56px] relative rounded-[8px] shrink-0 w-full" data-name="Button- Outline">
                  <div aria-hidden="true" className="absolute border border-[#cbc3d7] border-solid inset-0 pointer-events-none rounded-[8px]" />
                  <div className="flex flex-row items-center justify-center size-full">
                    <div className="content-stretch flex items-center justify-center px-[20px] py-[16px] relative size-full">
                      <div className="content-stretch flex flex-col items-center justify-center relative rounded-[5px] shrink-0" data-name="Content">
                        <div className="content-stretch flex gap-[10px] items-center opacity-38 px-[16px] py-[10px] relative shrink-0" data-name="State - Layer">
                          <div className="h-[26.399px] overflow-clip relative shrink-0 w-[24px]" data-name="Tray_Draft">
                            <div className="absolute inset-[19%_7.5%]" data-name="Icon">
                              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.4004 16.3661">
                                <path d={svgPaths.p1d831a00} fill="var(--fill-0, #494455)" id="Icon" />
                              </svg>
                            </div>
                          </div>
                          <div className="content-stretch flex items-center justify-center px-[4px] relative shrink-0" data-name="Label">
                            <div className="flex flex-col font-['Lexend:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#494455] text-[16px] text-center tracking-[0.15px] whitespace-nowrap">
                              <p className="leading-[24px]">Save Draft</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button 
                  onClick={allSectionsComplete ? onPublish : undefined} 
                  disabled={!allSectionsComplete}
                  className={`content-stretch flex gap-[2px] items-start relative shrink-0 w-full ${allSectionsComplete ? 'cursor-pointer' : 'cursor-not-allowed'}`} 
                  data-name="Split Button"
                >
                  <div className={`content-stretch flex flex-[1_0_0] h-[56px] items-center justify-center min-h-px min-w-px relative rounded-[8px] transition-colors ${allSectionsComplete ? 'bg-[#4a00bf] hover:bg-[#3d009f]' : 'bg-[rgba(29,26,36,0.1)]'}`} data-name="Button-Filled">
                    <div className="content-stretch flex flex-col items-center justify-center relative rounded-[5px] shrink-0" data-name="Content">
                      <div className={`content-stretch flex gap-[10px] items-center overflow-clip px-[20px] py-[16px] relative shrink-0 ${!allSectionsComplete ? 'opacity-38' : ''}`} data-name="State - Layer">
                        <div className="overflow-clip relative shrink-0 size-[24px]" data-name="publish">
                          <div className="absolute inset-[16.67%]" data-name="Icon">
                            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                              <path d={svgPaths.p4913d00} fill={allSectionsComplete ? "var(--fill-0, white)" : "var(--fill-0, #494455)"} id="Icon" />
                            </svg>
                          </div>
                        </div>
                        <div className="content-stretch flex items-center justify-center px-[4px] relative shrink-0" data-name="Label">
                          <div className={`flex flex-col font-['Lexend:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-center tracking-[0.15px] whitespace-nowrap ${allSectionsComplete ? 'text-white' : 'text-[#494455]'}`}>
                            <p className="leading-[24px]">Publish</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={`content-stretch flex items-center justify-center relative rounded-bl-[5px] rounded-br-[12px] rounded-tl-[5px] rounded-tr-[12px] shrink-0 transition-colors ${allSectionsComplete ? 'bg-[#4a00bf] hover:bg-[#3d009f]' : 'bg-[rgba(29,26,36,0.1)]'}`} data-name="Icon Button Primary">
                    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-bl-[5px] rounded-br-[12px] rounded-tl-[5px] rounded-tr-[12px] shrink-0 size-[56px]" data-name="Content">
                      <div className={`content-stretch flex h-[40px] items-center justify-center relative shrink-0 w-full ${!allSectionsComplete ? 'opacity-38' : ''}`} data-name="State-layer">
                        <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Chevron Down">
                          <div className="absolute inset-[26.36%_8.34%_26.36%_8.33%]" data-name="Icon">
                            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9993 11.3458">
                              <path d={svgPaths.p28797e80} fill={allSectionsComplete ? "var(--fill-0, white)" : "var(--fill-0, #494455)"} id="Icon" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </button>
                <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
                  <div className="flex flex-col font-['Lexend:Regular',sans-serif] font-[350] justify-center leading-[0] relative shrink-0 text-[#7a7486] text-[12px] text-center tracking-[0.2px] w-full">
                    <p className="leading-[16px]">Complete all sections to publish.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}