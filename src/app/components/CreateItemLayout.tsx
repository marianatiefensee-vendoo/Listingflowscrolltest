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
    <div className="flex h-full w-full flex-col">
      {/* Top Bar - Sticky, no individual borders */}
      <div className="sticky top-0 z-10 shrink-0 w-full bg-surface-container rounded-tl-[12px] pr-[1px] border-b border-border">
        <div className="content-stretch flex flex-col items-start relative w-full bg-surface-container m-[0px] pl-[12px] pr-[16px] py-[24px]">
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
                <p className="font-['Lexend',sans-serif] font-[var(--font-weight-normal)] h-full leading-[40px] overflow-hidden relative shrink-0 text-foreground text-[var(--text-h2)] text-ellipsis whitespace-nowrap text-[32px]">
                  Create item
                </p>
              </div>
            </div>
            {/* Templates Button */}
            <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0">
              <button className="bg-background content-stretch cursor-pointer flex h-[48px] items-center justify-center px-[20px] py-[16px] relative rounded-[8px] shrink-0 w-[142px]">
                <div aria-hidden="true" className="absolute border border-border border-solid inset-0 pointer-events-none rounded-[8px]" />
                <div className="content-stretch flex flex-col items-center justify-center relative rounded-[5px] shrink-0">
                  <div className="content-stretch flex gap-[10px] items-center px-[16px] py-[10px] relative shrink-0">
                    <div className="content-stretch flex items-center justify-center px-[4px] relative shrink-0">
                      <div className="flex flex-col font-['Lexend',sans-serif] font-[var(--font-weight-medium)] justify-center leading-[0] relative shrink-0 text-muted-foreground text-[var(--text-base)] text-center tracking-[0.15px] whitespace-nowrap">
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

      {/* Main Content: Sections - No border here, removed individual borders */}
      <div className="flex flex-col px-[12px] py-[0px]">
        {/* Sections */}
        <div className="flex flex-col gap-[24px] ml-[0px] mr-[8px] my-[36px] pl-[16px] pr-[4px] py-[8px]">
          {/* Photos Section */}
          <div id="listing-photos" data-step="photos">
            {children.photos}
          </div>

          {/* Item Details Section */}
          <div id="listing-details" data-step="details">
            {children.itemDetails}
          </div>

          {/* Marketplaces Section */}
          <div id="listing-marketplaces" data-step="marketplaces">
            {children.marketplaces}
          </div>

          {/* Pricing Section */}
          <div id="listing-price-shipping" data-step="price-shipping">
            {children.pricing}

            {/* Shipping Section */}
            {children.shipping}
          </div>
        </div>
      </div>

      {/* Toggle Right Panel Button - Removed as no longer needed */}
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
      className={`bg-card content-stretch flex flex-col items-start relative rounded-[12px] shrink-0 w-full ${
        isActive ? "border border-foreground-dim" : "border border-border"
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
            ? { background: "var(--surface-variant)" }
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
                  <div className="bg-primary-container content-stretch flex gap-[10px] items-center relative rounded-[16px] shrink-0 size-[32px]">
                    <div aria-hidden="true" className="absolute border-primary-container border-[1.5px] border-solid inset-0 pointer-events-none rounded-[16px]" />
                    <div className="content-stretch flex flex-[1_0_0] h-full items-center justify-center min-h-px min-w-px relative">
                      <div className="flex flex-col font-['Lexend',sans-serif] font-[var(--font-weight-normal)] justify-center leading-[0] relative shrink-0 text-[var(--text-base)] text-center text-primary-container-foreground tracking-[0.5px] whitespace-nowrap">
                        <p className="leading-[24px]">{stepNumber}</p>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex items-center justify-center relative shrink-0">
                    <p className="font-['Lexend',sans-serif] font-[var(--font-weight-normal)] leading-[32px] relative shrink-0 text-foreground text-[var(--text-h3)] whitespace-nowrap">
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
                      <div className="bg-primary-container content-stretch flex gap-[10px] items-center relative rounded-[16px] shrink-0 size-[32px]">
                        <div aria-hidden="true" className="absolute border-primary-container border-[1.5px] border-solid inset-0 pointer-events-none rounded-[16px]" />
                        <div className="content-stretch flex flex-[1_0_0] h-full items-center justify-center min-h-px min-w-px relative">
                          <div className="flex flex-col font-['Lexend',sans-serif] font-[var(--font-weight-normal)] justify-center leading-[0] relative shrink-0 text-[var(--text-base)] text-center text-primary-container-foreground tracking-[0.5px] whitespace-nowrap">
                            <p className="leading-[24px]">{stepNumber}</p>
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex items-center justify-center relative shrink-0">
                        <p className="font-['Lexend',sans-serif] font-[var(--font-weight-normal)] leading-[32px] relative shrink-0 text-muted-foreground text-[var(--text-h3)] whitespace-nowrap">
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