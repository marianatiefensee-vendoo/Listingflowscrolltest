import { useEffect, useState } from "react";
import svgPaths from "../../imports/svg-towfc7zrfc";
import type { MarketplaceCustomization } from "../App";
import { MARKETPLACES, type MarketplaceDefinition } from "../data/marketplaces";

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

function MarketplaceTile({
  marketplace,
  selected,
  onToggle,
}: {
  marketplace: MarketplaceDefinition;
  selected: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className={`relative w-full rounded-[4px] border border-border text-left transition-colors ${
        selected ? "bg-primary/8" : "bg-card"
      } cursor-pointer`}
    >
      <div className="flex items-center gap-[12px] px-[16px] py-[10px]">
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
        </div>

        <div className="flex shrink-0 items-center justify-center p-[4px]">
          {selected ? (
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

  const toggleMarketplace = (id: string) => {
    const newMarketplaces = selectedMarketplaces.includes(id)
      ? selectedMarketplaces.filter((marketplaceId) => marketplaceId !== id)
      : [...selectedMarketplaces, id];
    onMarketplacesChange(newMarketplaces);
  };

  const handleHeaderClick = () => {
    if (!isExpanded) {
      setIsExpanded(true);
      onManualExpand?.();
    }
  };

  const marketplaceColumns = [MARKETPLACES.slice(0, 5), MARKETPLACES.slice(5)];

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
          <div className="flex flex-col gap-[10px] md:flex-row md:items-start">
            {marketplaceColumns.map((column, columnIndex) => (
              <div
                key={columnIndex}
                className="flex min-w-0 flex-1 flex-col gap-[2px]"
              >
                {column.map((marketplace) => (
                  <MarketplaceTile
                    key={marketplace.id}
                    marketplace={marketplace}
                    selected={selectedMarketplaces.includes(marketplace.id)}
                    onToggle={() => toggleMarketplace(marketplace.id)}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
