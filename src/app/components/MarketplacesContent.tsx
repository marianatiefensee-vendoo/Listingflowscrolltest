import { useEffect, useState } from "react";
import svgPaths from "../../imports/svg-towfc7zrfc";
import imgEbay from "figma:asset/fc302d572214546f8204178ed8fb7d0af8c7506e.png";
import imgMercari from "figma:asset/818d7c9ebebd26d98ee60737907006a9b258dce3.png";
import imgDepop from "figma:asset/9fc19e9b972ada34a5069710f93ea92cd4258fea.png";
import imgFacebook from "figma:asset/55ad25062cf42038188e8437b6d83a149a822f83.png";
import type { MarketplaceCustomization } from "../App";

interface MarketplacesContentProps {
  shouldExpand?: boolean;
  onExpandChange?: () => void;
  onContinue?: () => void;
  selectedMarketplaces: string[];
  onMarketplacesChange: (marketplaces: string[]) => void;
  marketplaceCustomizations?: Record<string, MarketplaceCustomization>;
  onEditMarketplace?: (marketplaceId: string) => void;
  shouldCollapse?: boolean;
  onCollapseChange?: () => void;
  onManualExpand?: () => void;
}

interface MarketplaceOption {
  id: string;
  name: string;
  image: string;
  connected: boolean;
}

function LinkOffIcon() {
  return (
    <svg
      aria-hidden="true"
      className="size-[20px]"
      fill="none"
      viewBox="0 0 20 20"
    >
      <path
        d="M12.72 6.22a3.333 3.333 0 0 1 4.714 4.715l-1.886 1.886a3.333 3.333 0 0 1-4.333.31"
        stroke="var(--foreground-dim)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
      <path
        d="M7.28 13.78a3.333 3.333 0 0 1-4.714-4.715l1.886-1.886a3.333 3.333 0 0 1 4.333-.31"
        stroke="var(--foreground-dim)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
      <path
        d="m6.25 13.75 7.5-7.5"
        stroke="var(--foreground-dim)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function MarketplaceTile({
  marketplace,
  selected,
  onToggle,
}: {
  marketplace: MarketplaceOption;
  selected: boolean;
  onToggle: () => void;
}) {
  const isDisconnected = !marketplace.connected;

  return (
    <button
      type="button"
      onClick={isDisconnected ? undefined : onToggle}
      aria-disabled={isDisconnected}
      className={`relative w-full rounded-[4px] border border-border text-left transition-colors ${
        selected ? "bg-primary/8" : "bg-card"
      } ${isDisconnected ? "cursor-default" : "cursor-pointer"}`}
    >
      <div
        className={`flex items-center gap-[12px] px-[16px] py-[10px] ${
          isDisconnected ? "opacity-38" : ""
        }`}
      >
        <div className="flex shrink-0 items-center justify-center overflow-hidden rounded-[4px] bg-card">
          <div className="relative size-[56px] rounded-[4px] border border-foreground-dim">
            <img
              alt={marketplace.name}
              className="absolute inset-0 h-full w-full rounded-[4px] object-cover"
              src={marketplace.image}
            />
          </div>
        </div>

        <div className="min-w-0 flex-1">
          <p className="font-['Lexend',sans-serif] text-[16px] font-[var(--font-weight-normal)] leading-[24px] tracking-[0.5px] text-foreground">
            {marketplace.name}
          </p>
          {isDisconnected && (
            <p className="font-['Lexend',sans-serif] text-[12px] font-[var(--font-weight-normal)] leading-[16px] tracking-[0.4px] text-foreground">
              Go to marketplace to connect
            </p>
          )}
        </div>

        <div className="flex shrink-0 items-center justify-center p-[4px]">
          {isDisconnected ? (
            <div className="flex size-[24px] items-center justify-center">
              <LinkOffIcon />
            </div>
          ) : selected ? (
            <div className="relative size-[24px] rounded-[4px] bg-primary">
              <div className="absolute inset-0 flex items-center justify-center">
                <svg
                  aria-hidden="true"
                  className="h-[9.4px] w-[12px]"
                  fill="none"
                  viewBox="0 0 12 9.4"
                >
                  <path d={svgPaths.p35d39780} fill="white" />
                </svg>
              </div>
            </div>
          ) : (
            <div className="size-[24px] rounded-[4px] border-[1.5px] border-foreground-dim" />
          )}
        </div>
      </div>
    </button>
  );
}

export default function MarketplacesContent({
  shouldExpand,
  onExpandChange,
  onContinue,
  selectedMarketplaces,
  onMarketplacesChange,
  shouldCollapse,
  onCollapseChange,
  onManualExpand,
}: MarketplacesContentProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    if (shouldExpand) {
      setIsExpanded(true);
      onExpandChange?.();
    }
  }, [shouldExpand, onExpandChange]);

  useEffect(() => {
    if (shouldCollapse) {
      setIsExpanded(false);
      onCollapseChange?.();
    }
  }, [shouldCollapse, onCollapseChange]);

  const marketplaces: MarketplaceOption[] = [
    { id: "ebay", name: "eBay", image: imgEbay, connected: true },
    { id: "mercari", name: "Mercari", image: imgMercari, connected: true },
    { id: "depop", name: "Depop", image: imgDepop, connected: true },
    { id: "facebook", name: "Facebook", image: imgFacebook, connected: true },
  ];

  const toggleMarketplace = (id: string) => {
    const newMarketplaces = selectedMarketplaces.includes(id)
      ? selectedMarketplaces.filter((marketplaceId) => marketplaceId !== id)
      : [...selectedMarketplaces, id];
    onMarketplacesChange(newMarketplaces);
  };

  const handleContinue = () => {
    setIsExpanded(false);
    onContinue?.();
  };

  const handleHeaderClick = () => {
    if (!isExpanded) {
      setIsExpanded(true);
      onManualExpand?.();
    }
  };

  return (
    <div
      className={`overflow-hidden rounded-[12px] border bg-card ${
        isExpanded
          ? "border-primary shadow-[0px_1px_2px_0px_rgba(0,0,0,0.3),0px_1px_3px_0px_rgba(0,0,0,0.15)]"
          : "border-border"
      }`}
    >
      <div
        className={`bg-surface-variant ${
          !isExpanded ? "cursor-pointer" : ""
        }`}
        onClick={handleHeaderClick}
      >
        <div
          className={`flex items-center justify-between px-[24px] py-[16px] ${
            isExpanded ? "border-b border-border" : ""
          }`}
        >
          <div className="flex items-center gap-[8px]">
            <div className="flex size-[32px] items-center justify-center rounded-[16px] border-[1.5px] border-primary-container bg-primary-container">
              <span className="font-['Lexend',sans-serif] text-[16px] font-[var(--font-weight-normal)] leading-[24px] tracking-[0.5px] text-primary-container-foreground">
                4
              </span>
            </div>
            <p className="font-['Lexend',sans-serif] text-[24px] font-[var(--font-weight-normal)] leading-[32px] text-foreground">
              Marketplaces
            </p>
          </div>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              const nextExpanded = !isExpanded;
              setIsExpanded(nextExpanded);
              if (nextExpanded) {
                onManualExpand?.();
              }
            }}
            className="flex size-[48px] items-center justify-center rounded-full"
            aria-label={isExpanded ? "Collapse marketplaces" : "Expand marketplaces"}
          >
            <div className="flex size-[40px] items-center justify-center overflow-hidden rounded-full">
              <div className="relative size-[24px] overflow-hidden">
                <div className="absolute inset-[26.36%_8.34%_26.36%_8.33%]">
                  <svg
                    className="absolute block size-full transition-transform duration-200"
                    fill="none"
                    preserveAspectRatio="none"
                    viewBox="0 0 19.9993 11.3458"
                    style={{ transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)" }}
                  >
                    <path d={svgPaths.p28797e80} fill="var(--fill-0, var(--foreground))" />
                  </svg>
                </div>
              </div>
            </div>
          </button>
        </div>
      </div>

      {isExpanded && (
        <div className="px-[24px] py-[24px]">
          <div className="grid gap-x-[12px] gap-y-[2px] md:grid-cols-2">
            {marketplaces.map((marketplace) => (
              <MarketplaceTile
                key={marketplace.id}
                marketplace={marketplace}
                selected={selectedMarketplaces.includes(marketplace.id)}
                onToggle={() => toggleMarketplace(marketplace.id)}
              />
            ))}
          </div>

          <div className="mt-[24px] flex justify-end">
            <button
              type="button"
              onClick={handleContinue}
              className="flex h-[48px] items-center justify-center rounded-[var(--radius)] bg-secondary"
            >
              <div className="flex items-center gap-[10px] px-[16px] py-[10px]">
                <span className="px-[4px] font-['Lexend',sans-serif] text-[14px] font-[var(--font-weight-medium)] leading-[20px] tracking-[0.1px] text-primary-dim">
                  Set pricing
                </span>
                <div className="relative size-[20px] overflow-hidden">
                  <div className="absolute bottom-[8.34%] left-1/4 right-[27.73%] top-[8.33%]">
                    <svg
                      className="absolute block size-full"
                      fill="none"
                      preserveAspectRatio="none"
                      viewBox="0 0 9.45486 16.666"
                    >
                      <path d={svgPaths.p23f63600} fill="var(--fill-0, var(--primary-dim))" />
                    </svg>
                  </div>
                </div>
              </div>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
