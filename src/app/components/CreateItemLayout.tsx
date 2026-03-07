import { useState, useEffect } from "react";
import svgPaths from "../../imports/svg-wo4tf7tw77";

interface CreateItemLayoutProps {
  children: {
    photos: React.ReactNode;
    itemDetails: React.ReactNode;
    marketplaces: React.ReactNode;
    pricing: React.ReactNode;
    shipping: React.ReactNode;
  };
  shouldExpandItemDetails?: boolean;
  shouldExpandMarketplaces?: boolean;
  shouldExpandPricing?: boolean;
  shouldExpandShipping?: boolean;
  onItemDetailsSectionShown?: () => void;
  onMarketplacesSectionShown?: () => void;
  onPricingSectionShown?: () => void;
  onShippingSectionShown?: () => void;
}

export default function CreateItemLayout({ children, shouldExpandItemDetails, shouldExpandMarketplaces, shouldExpandPricing, shouldExpandShipping, onItemDetailsSectionShown, onMarketplacesSectionShown, onPricingSectionShown, onShippingSectionShown }: CreateItemLayoutProps) {
  const [expandedSections, setExpandedSections] = useState({
    photos: true,
    itemDetails: false,
    marketplaces: false,
    pricing: false,
    shipping: false,
  });
  const [showRightPanel, setShowRightPanel] = useState(true);

  // Handle automatic expansion of Item Details section
  useEffect(() => {
    if (shouldExpandItemDetails) {
      setExpandedSections((prev) => ({
        ...prev,
        itemDetails: true,
      }));
      onItemDetailsSectionShown?.();
    }
  }, [shouldExpandItemDetails, onItemDetailsSectionShown]);

  // Handle automatic expansion of Marketplaces section
  useEffect(() => {
    if (shouldExpandMarketplaces) {
      setExpandedSections((prev) => ({
        ...prev,
        marketplaces: true,
      }));
      onMarketplacesSectionShown?.();
    }
  }, [shouldExpandMarketplaces, onMarketplacesSectionShown]);

  // Handle automatic expansion of Pricing section
  useEffect(() => {
    if (shouldExpandPricing) {
      setExpandedSections((prev) => ({
        ...prev,
        pricing: true,
      }));
      onPricingSectionShown?.();
    }
  }, [shouldExpandPricing, onPricingSectionShown]);

  // Handle automatic expansion of Shipping section
  useEffect(() => {
    if (shouldExpandShipping) {
      setExpandedSections((prev) => ({
        ...prev,
        shipping: true,
      }));
      onShippingSectionShown?.();
    }
  }, [shouldExpandShipping, onShippingSectionShown]);

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div className="flex h-full w-full flex-col bg-background">
      {/* Top Bar */}
      <div className="relative shrink-0 w-full bg-[rgba(104,58,223,0.08)] rounded-tl-[12px] rounded-tr-[0px]">
        <div aria-hidden="true" className="absolute border-[#cbc3d7] border-b border-solid inset-0 pointer-events-none rounded-tl-[24px] rounded-tr-[24px] mx-[16px]" />
        <div className="content-stretch flex flex-col items-start relative w-full pl-[12px] pr-[24px] py-[24px] border-l border-t border-[#CBC3D7] rounded-tl-[12px]">
          <div className="content-stretch flex items-center relative shrink-0 w-full">
            <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
              {/* Back Button & Title */}
              <div className="content-stretch flex flex-[1_0_0] h-full items-center min-h-px min-w-px relative">
                <div className="content-stretch flex items-center relative shrink-0">
                  <button className="relative shrink-0 size-[48px]">
                    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col items-center justify-center left-[calc(50%-0.5px)] overflow-clip rounded-[100px] top-1/2 w-[40px]">
                      <div className="content-stretch flex h-[40px] items-center justify-center relative shrink-0 w-full">
                        <div className="overflow-clip relative shrink-0 size-[24px]">
                          <div className="absolute inset-[5.53%_26.37%_11.14%_26.36%]">
                            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.3458 19.9993">
                              <path d={svgPaths.p1a5f6bc0} fill="var(--fill-0, #1D1A24)" id="Icon" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </button>
                </div>
                <p className="font-['Lexend:Regular',sans-serif] font-normal h-full leading-[40px] overflow-hidden relative shrink-0 text-[#1d1a24] text-[32px] text-ellipsis whitespace-nowrap">
                  Create item
                </p>
              </div>
            </div>
            {/* Templates Button */}
            <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0">
              <button className="bg-[#fdf7ff] content-stretch cursor-pointer flex h-[48px] items-center justify-center px-[20px] py-[16px] relative rounded-[8px] shrink-0 w-[142px]">
                <div aria-hidden="true" className="absolute border border-[#cbc3d7] border-solid inset-0 pointer-events-none rounded-[8px]" />
                <div className="content-stretch flex flex-col items-center justify-center relative rounded-[5px] shrink-0">
                  <div className="content-stretch flex gap-[10px] items-center px-[16px] py-[10px] relative shrink-0">
                    <div className="content-stretch flex items-center justify-center px-[4px] relative shrink-0">
                      <div className="flex flex-col font-['Lexend:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#494455] text-[16px] text-center tracking-[0.15px] whitespace-nowrap">
                        <p className="leading-[24px]">Templates</p>
                      </div>
                    </div>
                    <div className="h-[26.399px] overflow-clip relative shrink-0 w-[24px]">
                      <div className="absolute inset-[26.36%_8.34%_26.36%_8.33%]">
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9992 12.4799">
                          <path d={svgPaths.p2dcfbd00} fill="var(--fill-0, #494455)" id="Icon" />
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

      {/* Main Content: Left Panel + Right Panel */}
      <div className="flex flex-1 gap-[24px] overflow-hidden border-l border-b border-[#CBC3D7] rounded-bl-[12px]">
        {/* Left Panel - Scrollable Sections */}
        <div className="flex-1 overflow-auto mx-[8px] my-[0px] pl-[4px] pr-[8px] py-[0px]">
          <div className="flex flex-col gap-[24px] my-[36px] py-[8px]">
            {/* Photos Section */}
            {children.photos}

            {/* Item Details Section */}
            {children.itemDetails}

            {/* Marketplaces Section */}
            {children.marketplaces}

            {/* Pricing Section */}
            {children.pricing}

            {/* Shipping Section */}
            {children.shipping}
          </div>
        </div>

        {/* Right Panel - Summary & Actions */}
        {showRightPanel && (
          null
        )}

        {/* Toggle Right Panel Button */}
        <button
          onClick={() => setShowRightPanel(!showRightPanel)}
          className="fixed right-[24px] top-[50%] -translate-y-1/2 bg-white border border-[#cbc3d7] rounded-[8px] p-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.3),0px_1px_3px_0px_rgba(0,0,0,0.15)] hover:bg-[#f5eefc] transition-colors z-10"
          aria-label={showRightPanel ? "Hide panel" : "Show panel"}
        >
          <div className="overflow-clip relative size-[24px]">
            <div className="absolute inset-[5.53%_26.37%_11.14%_26.36%]">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.3458 19.9993">
                <path
                  d={svgPaths.p1a5f6bc0}
                  fill="var(--fill-0, #1D1A24)"
                  style={{
                    transform: showRightPanel ? "rotate(0deg)" : "rotate(180deg)",
                    transformOrigin: "center",
                    transition: "transform 0.3s",
                  }}
                />
              </svg>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}

interface CollapsibleSectionProps {
  stepNumber: number;
  title: string;
  isExpanded: boolean;
  onToggle: () => void;
  children: React.ReactNode;
  isActive?: boolean;
}

function CollapsibleSection({
  stepNumber,
  title,
  isExpanded,
  onToggle,
  children,
  isActive = false,
}: CollapsibleSectionProps) {
  return (
    <div
      className={`bg-white content-stretch flex flex-col items-start relative rounded-[12px] shrink-0 w-full ${
        isActive ? "border border-[#7a7486]" : "border border-[#cbc3d7]"
      }`}
      style={{
        boxShadow: isActive
          ? "0px 1px 2px 0px rgba(0,0,0,0.3), 0px 1px 3px 0px rgba(0,0,0,0.15)"
          : "none",
      }}
    >
      {/* Section Header */}
      <div
        className={`content-stretch flex flex-col gap-[8px] items-start relative rounded-tl-[12px] rounded-tr-[12px] shrink-0 w-full ${
          isActive
            ? "pt-[24px] bg-gradient-to-r from-[rgba(104,58,223,0.08)] to-[rgba(104,58,223,0.08)]"
            : ""
        }`}
        style={
          !isActive
            ? { background: "#f5eefc" }
            : {
                backgroundImage:
                  "linear-gradient(90deg, rgba(104, 58, 223, 0.08) 0%, rgba(104, 58, 223, 0.08) 100%), linear-gradient(90deg, rgb(253, 247, 255) 0%, rgb(253, 247, 255) 100%)",
              }
        }
      >
        {isActive && (
          <div className="relative shrink-0 w-full">
            <div className="content-stretch flex flex-col items-start px-[24px] py-[8px] relative w-full">
              <div className="content-stretch flex items-center relative shrink-0 w-full">
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                  {/* Step Badge */}
                  <div className="bg-[#64539b] content-stretch flex gap-[10px] items-center relative rounded-[16px] shrink-0 size-[32px]">
                    <div aria-hidden="true" className="absolute border-[#64539b] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[16px]" />
                    <div className="content-stretch flex flex-[1_0_0] h-full items-center justify-center min-h-px min-w-px relative">
                      <div className="flex flex-col font-['Lexend:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-center text-white tracking-[0.5px] whitespace-nowrap">
                        <p className="leading-[24px]">{stepNumber}</p>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex items-center justify-center relative shrink-0">
                    <p className="font-['Lexend:Regular',sans-serif] font-normal leading-[32px] relative shrink-0 text-[#1d1a24] text-[24px] whitespace-nowrap">
                      {title}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {!isActive && (
          <div className="relative shrink-0 w-full">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center justify-between px-[24px] py-[16px] relative w-full">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-px">
                  <div className="content-stretch flex items-center relative shrink-0 w-full">
                    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                      {/* Step Badge */}
                      <div className="bg-[#64539b] content-stretch flex gap-[10px] items-center relative rounded-[16px] shrink-0 size-[32px]">
                        <div aria-hidden="true" className="absolute border-[#64539b] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[16px]" />
                        <div className="content-stretch flex flex-[1_0_0] h-full items-center justify-center min-h-px min-w-px relative">
                          <div className="flex flex-col font-['Lexend:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-center text-white tracking-[0.5px] whitespace-nowrap">
                            <p className="leading-[24px]">{stepNumber}</p>
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex items-center justify-center relative shrink-0">
                        <p className="font-['Lexend:Regular',sans-serif] font-normal leading-[32px] relative shrink-0 text-[#494455] text-[24px] whitespace-nowrap">
                          {title}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Toggle Button */}
                <button
                  onClick={onToggle}
                  className="content-stretch flex items-center relative shrink-0"
                  aria-label={isExpanded ? "Collapse" : "Expand"}
                >
                  <div className="relative shrink-0 size-[48px]">
                    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col items-center justify-center left-[calc(50%-0.5px)] overflow-clip rounded-[100px] top-1/2 w-[40px]">
                      <div className="content-stretch flex h-[40px] items-center justify-center relative shrink-0 w-full">
                        <div className="overflow-clip relative shrink-0 size-[24px]">
                          <div className="absolute inset-[26.36%_8.34%_26.36%_8.33%]">
                            <svg
                              className="absolute block size-full transition-transform duration-300"
                              fill="none"
                              preserveAspectRatio="none"
                              viewBox="0 0 19.9993 11.3458"
                              style={{
                                transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)",
                              }}
                            >
                              <path d={svgPaths.p28797e80} fill="var(--fill-0, #494455)" id="Icon" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        )}

        {isActive && (
          <div className="h-[2px] relative shrink-0 w-full">
            <div className="absolute bottom-0 left-0 right-0 top-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 760 1">
                  <line id="horizontal line" stroke="var(--stroke-0, #CBC3D7)" strokeLinecap="square" x1="0.5" x2="759.5" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Section Content */}
      {isExpanded && (
        <div className="relative rounded-[12px] shrink-0 w-full">
          <div className="flex flex-col justify-center size-full">
            <div className="content-stretch flex flex-col items-start justify-center pb-[24px] pt-[12px] px-[24px] relative w-full">
              {children}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}