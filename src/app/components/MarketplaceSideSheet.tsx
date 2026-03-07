import { useState } from "react";
import { Marketplace } from "../App";
import svgPaths from "../../imports/svg-q50n8m4ixe";
import svgPathsEmpty from "../../imports/svg-bz2kxe9zeu";

interface MarketplaceSideSheetProps {
  isOpen: boolean;
  onClose: () => void;
  marketplaces: Marketplace[];
  selectedMarketplaceId?: string;
}

type TabType = "itemDetails" | "pricing" | "shipping" | "optional";

export default function MarketplaceSideSheet({
  isOpen,
  onClose,
  marketplaces,
  selectedMarketplaceId,
}: MarketplaceSideSheetProps) {
  const [activeMarketplaceId, setActiveMarketplaceId] = useState(
    selectedMarketplaceId || marketplaces[0]?.id
  );
  const [activeTab, setActiveTab] = useState<TabType>("itemDetails");
  const [editedTabs, setEditedTabs] = useState<Record<string, Set<TabType>>>({});

  if (!isOpen || marketplaces.length === 0) return null;

  const activeMarketplace = marketplaces.find((m) => m.id === activeMarketplaceId);
  const marketplaceEditedTabs = editedTabs[activeMarketplaceId] || new Set<TabType>();

  const handleTabClick = (tab: TabType) => {
    setActiveTab(tab);
  };

  const handleMarketplaceClick = (marketplaceId: string) => {
    setActiveMarketplaceId(marketplaceId);
  };

  const isTabEdited = (tab: TabType) => {
    return marketplaceEditedTabs.has(tab);
  };

  const renderEmptyState = () => (
    <div className="content-stretch flex flex-col items-center justify-center p-[48px] relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0">
        {/* Icon */}
        <div className="relative shrink-0 size-[40px]">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
            <path d={svgPathsEmpty.p337ba880} fill="var(--fill-0, #CBC3D7)" />
            <path d={svgPathsEmpty.p1cf9e500} fill="var(--fill-0, #CBC3D7)" />
            <path d={svgPathsEmpty.p22be7ac0} fill="var(--fill-0, #CBC3D7)" />
            <path d={svgPathsEmpty.p8cf5280} fill="var(--fill-0, #CBC3D7)" />
          </svg>
        </div>
        
        {/* Text */}
        <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-[280px]">
          <div className="flex flex-col font-['Lexend:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1d1a24] text-[16px] text-center tracking-[0.15px] w-full">
            <p className="leading-[24px]">
              {activeTab === "pricing" ? "To customize marketplace pricing, you must first define a base price for this listing." : 
               activeTab === "shipping" ? "To customize marketplace shipping, you must first define base shipping details for this listing." :
               activeTab === "optional" ? "To customize optional marketplace settings, you must first define base optional details for this listing." :
               "To customize marketplace item details, you must first define base item details for this listing."}
            </p>
          </div>
        </div>

        {/* Button */}
        <button className="bg-[#c3b0ff] content-stretch flex h-[40px] items-center justify-center relative rounded-[5px] shrink-0">
          <div className="content-stretch flex gap-[10px] items-center px-[16px] py-[10px] relative shrink-0">
            <div className="overflow-clip relative shrink-0 size-[16px]">
              <div className="absolute inset-[6.04%]">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.3333 11.3241">
                  <path d={svgPathsEmpty.p1a8d6100} fill="var(--fill-0, #1D1A24)" />
                </svg>
              </div>
            </div>
            <div className="flex flex-col font-['Lexend:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1d1a24] text-[14px] text-center tracking-[0.1px] whitespace-nowrap">
              <p className="leading-[20px]">
                {activeTab === "pricing" ? "Go to Pricing" :
                 activeTab === "shipping" ? "Go to Shipping" :
                 activeTab === "optional" ? "Go to Optional" :
                 "Go to Item Details"}
              </p>
            </div>
          </div>
        </button>
      </div>
    </div>
  );

  const renderContent = () => {
    if (activeTab === "itemDetails" && !isTabEdited("itemDetails")) {
      return renderEmptyState();
    }
    if (activeTab === "pricing" && !isTabEdited("pricing")) {
      return renderEmptyState();
    }
    if (activeTab === "shipping" && !isTabEdited("shipping")) {
      return renderEmptyState();
    }
    if (activeTab === "optional" && !isTabEdited("optional")) {
      return renderEmptyState();
    }

    // Render actual content for edited tabs
    return (
      <div className="content-stretch flex flex-col items-start overflow-clip py-[24px] relative shrink-0 w-full">
        <div className="relative shrink-0 w-full">
          <div className="content-stretch flex flex-col items-start p-[20px] relative w-full">
            <div className="flex flex-col font-['Lexend:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#494455] text-[14px] tracking-[0.25px]">
              <p className="leading-[20px]">Content for {activeTab} tab</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      {/* Overlay Scrim - 38% opacity black */}
      <div
        className="fixed inset-0 bg-black z-[100]"
        style={{ opacity: 0.38 }}
        onClick={onClose}
      />

      {/* Side Sheet */}
      <div className="fixed right-0 top-0 bottom-0 w-[656px] bg-[#fdf7ff] z-[101] shadow-xl">
        <div className="bg-[#fdf7ff] content-stretch flex flex-col h-full items-start relative">
          <div aria-hidden="true" className="absolute border-[#cbc3d7] border-b border-solid inset-[0_0_-1px_0] pointer-events-none" />
          
          {/* Header */}
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
            <div className="h-[96px] relative shrink-0 w-full">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center p-[24px] relative size-full">
                  <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
                    <div className="content-stretch flex flex-[1_0_0] h-full items-end min-h-px min-w-px relative">
                      <div className="flex flex-col font-['Lexend:Regular',sans-serif] font-normal h-full justify-end leading-[0] relative shrink-0 text-[#1d1a24] text-[28px] w-[404px]">
                        <p className="leading-[36px]">Marketplace Controls</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-center self-stretch">
                    <div className="content-stretch flex h-full items-center justify-end relative shrink-0">
                      <button
                        onClick={onClose}
                        className="relative shrink-0 size-[48px] cursor-pointer hover:bg-[#f5eeff] rounded-full transition-colors"
                      >
                        <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col items-center justify-center left-[calc(50%-0.5px)] overflow-clip rounded-[100px] top-1/2 w-[40px]">
                          <div className="content-stretch flex h-[40px] items-center justify-center relative shrink-0 w-full">
                            <div className="overflow-clip relative shrink-0 size-[24px]">
                              <div className="absolute inset-[16.67%]">
                                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                                  <path d={svgPaths.p29f7f600} fill="var(--fill-0, #494455)" />
                                </svg>
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

            {/* Marketplace Buttons */}
            <div className="content-stretch flex items-start relative shrink-0 w-full">
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px py-[12px] relative">
                <div className="relative shrink-0 w-full">
                  <div className="content-stretch flex flex-col items-start px-[24px] relative w-full">
                    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
                      {marketplaces.map((marketplace) => (
                        <button
                          key={marketplace.id}
                          onClick={() => handleMarketplaceClick(marketplace.id)}
                          className={`content-stretch flex flex-col items-start justify-center relative shrink-0 ${
                            activeMarketplaceId === marketplace.id ? "opacity-100" : "opacity-50"
                          }`}
                        >
                          <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
                            <div
                              className={`border-solid col-1 ml-0 mt-0 relative rounded-[5px] row-1 shadow-[0px_0.6px_1.2px_0px_rgba(0,0,0,0.3),0px_1.2px_3.6px_0px_rgba(0,0,0,0.15)] size-[60px] ${
                                activeMarketplaceId === marketplace.id ? "border-2 border-[#4a00bf]" : "border-0"
                              }`}
                              style={{
                                backgroundImage:
                                  "linear-gradient(90deg, rgba(104, 58, 223, 0.08) 0%, rgba(104, 58, 223, 0.08) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)",
                              }}
                            >
                              <img src={marketplace.image} alt={marketplace.name} className="absolute inset-0 object-contain p-[8px]" />
                            </div>
                            {activeMarketplaceId === marketplace.id && (
                              <div
                                className="col-1 ml-[44px] mt-[45px] relative rounded-[15.385px] row-1 size-[20px]"
                                style={{
                                  backgroundImage:
                                    "linear-gradient(90deg, rgba(104, 58, 223, 0.08) 0%, rgba(104, 58, 223, 0.08) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)",
                                }}
                              >
                                <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[20px] top-1/2">
                                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                                    <circle cx="10" cy="10" fill="var(--fill-0, #6231D8)" r="10" />
                                  </svg>
                                </div>
                                <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[20px] top-1/2">
                                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                                    <circle cx="10" cy="10" r="9.5" stroke="var(--stroke-0, #6231D8)" />
                                  </svg>
                                </div>
                                <div className="absolute content-stretch flex flex-col items-center justify-center left-[0.77px] overflow-clip rounded-[57.692px] top-[0.77px] w-[18.462px]">
                                  <div className="content-stretch flex h-[18.462px] items-center justify-center relative shrink-0 w-full">
                                    <div className="overflow-clip relative shrink-0 size-[11.538px]">
                                      <div className="absolute inset-[19.32%_8.33%_19.99%_8.33%]">
                                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.61539 7.00269">
                                          <path d={svgPaths.p10cd0500} fill="var(--fill-0, white)" />
                                        </svg>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-[2px] relative shrink-0 w-full">
            <div className="absolute bottom-0 left-0 right-0 top-full">
              <div className="absolute inset-[-2px_0_0_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 656 2">
                  <line stroke="var(--stroke-0, #CBC3D7)" strokeLinecap="square" strokeWidth="2" x1="1" x2="655" y1="1" y2="1" />
                </svg>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="bg-[#e7dff4] content-stretch flex flex-col items-start relative shrink-0 w-full">
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
              <div className="content-stretch cursor-pointer flex items-center overflow-clip relative shrink-0 w-full">
                <button
                  onClick={() => handleTabClick("itemDetails")}
                  className={`content-stretch flex flex-[1_0_0] flex-col items-center justify-end min-h-px min-w-px overflow-clip relative ${
                    activeTab === "itemDetails" ? "" : "hover:bg-[#dfd3eb]"
                  }`}
                >
                  <div className="h-[48px] relative shrink-0 w-full">
                    <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
                      <div className="content-stretch flex flex-col items-center justify-center px-[16px] relative size-full">
                        <div className="flex-[1_0_0] min-h-px min-w-px relative">
                          <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                            <div className="content-stretch flex gap-[8px] h-full items-center justify-center py-[14px] relative">
                              <div
                                className={`flex flex-col font-['Lexend:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-center tracking-[0.1px] whitespace-nowrap ${
                                  activeTab === "itemDetails" ? "text-[#4a00bf]" : "text-[#494455]"
                                }`}
                              >
                                <p className="leading-[20px]">Item Details</p>
                              </div>
                              {activeTab === "itemDetails" && (
                                <div className="absolute bottom-0 h-[14px] left-0 right-0">
                                  <div className="absolute bg-[#4a00bf] bottom-0 h-[3px] left-[2px] right-[2px] rounded-tl-[100px] rounded-tr-[100px]" />
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </button>

                <button
                  onClick={() => handleTabClick("pricing")}
                  className={`content-stretch flex flex-[1_0_0] flex-col h-[48px] items-center justify-end min-h-px min-w-px overflow-clip relative ${
                    activeTab === "pricing" ? "" : "hover:bg-[#dfd3eb]"
                  }`}
                >
                  <div className="flex-[1_0_0] min-h-px min-w-px relative w-full">
                    <div className="flex flex-col items-center justify-end overflow-clip rounded-[inherit] size-full">
                      <div className="content-stretch flex flex-col items-center justify-end px-[16px] relative size-full">
                        <div className="flex-[1_0_0] min-h-px min-w-px relative">
                          <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                            <div className="content-stretch flex gap-[8px] h-full items-center justify-center py-[14px] relative">
                              <div
                                className={`flex flex-col font-['Lexend:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-center tracking-[0.1px] whitespace-nowrap ${
                                  activeTab === "pricing" ? "text-[#4a00bf]" : "text-[#494455]"
                                }`}
                              >
                                <p className="leading-[20px]">Pricing</p>
                              </div>
                              {activeTab === "pricing" && (
                                <div className="absolute bottom-0 h-[14px] left-0 right-0">
                                  <div className="absolute bg-[#4a00bf] bottom-0 h-[3px] left-[2px] right-[2px] rounded-tl-[100px] rounded-tr-[100px]" />
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </button>

                <button
                  onClick={() => handleTabClick("shipping")}
                  className={`content-stretch flex flex-[1_0_0] flex-col h-[48px] items-center justify-end min-h-px min-w-px overflow-clip relative ${
                    activeTab === "shipping" ? "" : "hover:bg-[#dfd3eb]"
                  }`}
                >
                  <div className="flex-[1_0_0] min-h-px min-w-px relative w-full">
                    <div className="flex flex-col items-center justify-end overflow-clip rounded-[inherit] size-full">
                      <div className="content-stretch flex flex-col items-center justify-end px-[16px] relative size-full">
                        <div className="flex-[1_0_0] min-h-px min-w-px relative">
                          <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                            <div className="content-stretch flex gap-[8px] h-full items-center justify-center py-[14px] relative">
                              <div
                                className={`flex flex-col font-['Lexend:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-center tracking-[0.1px] whitespace-nowrap ${
                                  activeTab === "shipping" ? "text-[#4a00bf]" : "text-[#494455]"
                                }`}
                              >
                                <p className="leading-[20px]">Shipping</p>
                              </div>
                              {activeTab === "shipping" && (
                                <div className="absolute bottom-0 h-[14px] left-0 right-0">
                                  <div className="absolute bg-[#4a00bf] bottom-0 h-[3px] left-[2px] right-[2px] rounded-tl-[100px] rounded-tr-[100px]" />
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </button>

                <button
                  onClick={() => handleTabClick("optional")}
                  className={`content-stretch flex flex-[1_0_0] flex-col h-[48px] items-center justify-end min-h-px min-w-px overflow-clip relative ${
                    activeTab === "optional" ? "" : "hover:bg-[#dfd3eb]"
                  }`}
                >
                  <div className="flex-[1_0_0] min-h-px min-w-px relative w-full">
                    <div className="flex flex-col items-center justify-end overflow-clip rounded-[inherit] size-full">
                      <div className="content-stretch flex flex-col items-center justify-end px-[16px] relative size-full">
                        <div className="flex-[1_0_0] min-h-px min-w-px relative">
                          <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                            <div className="content-stretch flex gap-[8px] h-full items-center justify-center py-[14px] relative">
                              <div
                                className={`flex flex-col font-['Lexend:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-center tracking-[0.1px] whitespace-nowrap ${
                                  activeTab === "optional" ? "text-[#4a00bf]" : "text-[#494455]"
                                }`}
                              >
                                <p className="leading-[20px]">Optional</p>
                              </div>
                              {activeTab === "optional" && (
                                <div className="absolute bottom-0 h-[14px] left-0 right-0">
                                  <div className="absolute bg-[#4a00bf] bottom-0 h-[3px] left-[2px] right-[2px] rounded-tl-[100px] rounded-tr-[100px]" />
                                </div>
                              )}
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

          {/* Content */}
          <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-x-clip overflow-y-auto sticky top-0 w-full">
            <div className="bg-white content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-x-clip overflow-y-auto sticky top-0 w-full">
              {renderContent()}
            </div>
          </div>

          {/* Actions */}
          <div className="bg-[#fdf7ff] content-stretch flex flex-col items-start justify-end relative shrink-0 w-full">
            <div className="relative shrink-0 w-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center relative w-full">
                <div className="h-0 relative shrink-0 w-full">
                  <div className="absolute inset-[-1px_0_0_0]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 656 1">
                      <line stroke="var(--stroke-0, #CBC3D7)" x2="656" y1="0.5" y2="0.5" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative shrink-0 w-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center pb-[20px] pt-[12px] relative w-full">
                <button
                  onClick={onClose}
                  className="content-stretch flex h-[48px] items-center justify-center px-[16px] py-[10px] relative rounded-[12px] shrink-0 hover:bg-[#f5eeff] transition-colors cursor-pointer"
                >
                  <div className="content-stretch flex flex-col items-center justify-center relative rounded-[5px] shrink-0">
                    <div className="content-stretch flex gap-[10px] items-center px-[16px] py-[10px] relative shrink-0">
                      <div className="content-stretch flex items-center justify-center px-[4px] relative shrink-0">
                        <div className="flex flex-col font-['Lexend:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#4a00bf] text-[16px] text-center tracking-[0.15px] whitespace-nowrap">
                          <p className="leading-[24px]">Cancel</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </button>
                <div className="flex-[1_0_0] min-h-px min-w-px relative">
                  <div className="flex flex-row items-center justify-end size-full">
                    <div className="content-stretch flex gap-[8px] items-center justify-end pr-[20px] relative w-full">
                      <button className="bg-[#4a00bf] content-stretch flex h-[48px] items-center justify-center relative shrink-0 rounded-[5px] hover:bg-[#3d0099] transition-colors cursor-pointer">
                        <div className="content-stretch flex flex-col h-full items-center justify-center relative rounded-[5px] shrink-0">
                          <div className="content-stretch flex gap-[10px] items-center px-[16px] py-[10px] relative rounded-[5px] shrink-0">
                            <div className="content-stretch flex items-center justify-center px-[4px] relative shrink-0">
                              <div className="flex flex-col font-['Lexend:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white tracking-[0.1px] whitespace-nowrap">
                                <p className="leading-[20px]">Apply Changes</p>
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
          </div>

          {/* Vertical Divider */}
          <div className="absolute bottom-[-1px] left-0 top-0 w-px">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 1025">
              <g clipPath="url(#clip0_22_4476)">
                <line stroke="var(--stroke-0, #CBC3D7)" x1="0.5" x2="0.500045" y1="-2.18557e-08" y2="1025" />
              </g>
              <defs>
                <clipPath id="clip0_22_4476">
                  <rect fill="white" height="1025" width="1" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}
