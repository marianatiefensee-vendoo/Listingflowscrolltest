import { useState, useRef, useEffect } from "react";
import svgChevronPaths from "../../imports/svg-yh6cdlpfhz";
import switchOffSvg from "../../imports/svg-37tvrvwjvg";
import switchOnSvg from "../../imports/svg-52bxhaqkk3";

import type { MarketplaceCustomization } from "../App";
import { MARKETPLACE_NAME_BY_ID } from "../data/marketplaces";

// ─── Dropdown chevron icon (same as Dropdown.tsx) ───
const ChevronIcon = ({ isOpen }: { isOpen: boolean }) => (
  <div className="content-stretch flex items-center justify-center relative shrink-0 size-[48px]">
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[100px] shrink-0 w-[40px]">
      <div className="content-stretch flex h-[40px] items-center justify-center relative shrink-0 w-full">
        <div className="overflow-clip relative shrink-0 size-[24px]">
          <div className={`absolute flex inset-[26.36%_8.34%_26.36%_8.33%] items-center justify-center transition-transform duration-200 ${isOpen ? '' : '-scale-y-100'}`}>
            <div className="flex-none h-[11.346px] w-[19.999px]">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9993 11.3458">
                <path d={svgChevronPaths.p28797e80} fill="var(--fill-0, var(--foreground))" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// ─── Interactive Switch Toggle (Figma-imported design) ───
function SwitchToggle({
  checked,
  onChange,
  disabled = false,
}: {
  checked: boolean;
  onChange: (val: boolean) => void;
  disabled?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={() => !disabled && onChange(!checked)}
      className={`relative flex items-center p-[4px] rounded-[100px] shrink-0 transition-colors duration-200 cursor-pointer ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      } ${checked ? "bg-[var(--primary)]" : "bg-[var(--muted)]"}`}
      style={{ width: 52, height: 32 }}
      role="switch"
      aria-checked={checked}
    >
      {/* Track border */}
      <div
        aria-hidden="true"
        className={`absolute border-2 border-solid inset-0 pointer-events-none rounded-[100px] transition-colors duration-200 ${
          checked ? "border-[var(--primary)]" : "border-[var(--muted-foreground)]"
        }`}
      />
      {/* Handle */}
      <div
        className={`relative shrink-0 flex items-center justify-center rounded-[24px] transition-all duration-200 ${
          checked
            ? "bg-card ml-[20px] size-[24px]"
            : "bg-[var(--muted-foreground)] ml-0 size-[24px]"
        }`}
      >
        {/* Icon inside handle */}
        <div className="overflow-clip relative size-[16px]">
          <div className="absolute inset-[16.67%]">
            {checked ? (
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 10.9637">
                <path d={switchOnSvg.p2980c200} fill="var(--fill-0, var(--primary))" />
              </svg>
            ) : (
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6667 10.6667">
                <path d={switchOffSvg.p24badd00} fill="var(--fill-0, var(--muted))" />
              </svg>
            )}
          </div>
        </div>
      </div>
    </button>
  );
}

// ─── Reusable editable text input ───
function EditableInput({
  value,
  onChange,
  placeholder,
  disabled = false,
  label,
}: {
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
  disabled?: boolean;
  label?: string;
}) {
  return (
    <div className={`bg-card h-[56px] relative rounded-[var(--radius)] shrink-0 w-full ${disabled ? "bg-[var(--muted)] pointer-events-none" : ""}`}>
      <div aria-hidden="true" className={`absolute border border-solid inset-[-0.5px] pointer-events-none rounded-[5.5px] ${disabled ? "border-[var(--border)]" : "border-[var(--muted-foreground)]"}`} />
      <div className="content-stretch flex gap-[4px] items-start px-[16px] py-[4px] relative size-full">
        <div className="content-stretch flex flex-[1_0_0] flex-col h-[48px] items-start justify-center min-h-px min-w-px py-[4px] relative">
          <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            disabled={disabled}
            className={`w-full bg-transparent outline-none font-['Lexend',sans-serif] text-[var(--text-base)] tracking-[0.5px] leading-[24px] ${
              disabled ? "text-[var(--border)] cursor-not-allowed" : value ? "text-[var(--foreground)]" : "text-[var(--muted-foreground)]"
            }`}
          />
        </div>
      </div>
    </div>
  );
}

// ─── Reusable select dropdown (uses same icon as Dropdown.tsx) ───
function SelectDropdown({
  value,
  onChange,
  options,
  disabled = false,
}: {
  value: string;
  onChange: (val: string) => void;
  options: { label: string; value: string }[];
  disabled?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isOpen]);

  return (
    <div ref={dropdownRef} className={`relative rounded-[var(--radius)] shrink-0 w-full ${disabled ? "bg-[var(--muted)] pointer-events-none" : "bg-card"}`}>
      <button
        onClick={() => !disabled && setIsOpen(!isOpen)}
        className="relative h-[56px] w-full cursor-pointer"
      >
        <div aria-hidden="true" className={`absolute border border-solid inset-[-0.5px] pointer-events-none rounded-[5.5px] ${disabled ? "border-[var(--border)]" : isOpen ? "border-[var(--primary)]" : "border-[var(--muted-foreground)]"}`} />
        <div className="content-stretch flex gap-[4px] items-center pl-[16px] py-[4px] relative size-full">
          <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px py-[4px] relative">
            <div className="content-stretch flex items-center relative shrink-0 w-full">
              <div className={`flex-1 font-['Lexend',sans-serif] text-[var(--text-base)] tracking-[0.5px] leading-[24px] text-left ${
                disabled ? "text-[var(--border)]" : value ? "text-[var(--foreground)]" : "text-[var(--muted-foreground)]"
              }`}>
                {options.find((o) => o.value === value)?.label || options[0]?.label}
              </div>
            </div>
          </div>
          <ChevronIcon isOpen={isOpen} />
        </div>
      </button>

      {isOpen && (
        <div className="absolute top-[58px] left-0 right-0 bg-[var(--card)] rounded-[var(--radius)] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.3),0px_2px_6px_2px_rgba(0,0,0,0.15)] z-50 overflow-hidden py-[2px]">
          {options.map((option) => (
            <button
              key={option.value}
              onClick={() => {
                onChange(option.value);
                setIsOpen(false);
              }}
              className={`w-full text-left px-[16px] py-[12px] font-['Lexend',sans-serif] text-[var(--text-sm)] tracking-[0.1px] leading-[20px] cursor-pointer transition-colors ${
                value === option.value
                  ? "bg-[var(--muted)] text-[var(--primary)] font-medium"
                  : "text-[var(--foreground)] hover:bg-[var(--muted)] font-medium"
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── Edited badge ───
function EditedBadge() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
        <div className="relative shrink-0 size-[20px]">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d="M10 2C10.4142 2 10.75 2.33579 10.75 2.75V9.25H17.25C17.6642 9.25 18 9.58579 18 10C18 10.4142 17.6642 10.75 17.25 10.75H10.75V17.25C10.75 17.6642 10.4142 18 10 18C9.58579 18 9.25 17.6642 9.25 17.25V10.75H2.75C2.33579 10.75 2 10.4142 2 10C2 9.58579 2.33579 9.25 2.75 9.25H9.25V2.75C9.25 2.33579 9.58579 2 10 2Z" fill="var(--fill-0, var(--primary))" />
          </svg>
        </div>
        <div className="flex flex-col font-['Lexend',sans-serif] font-[350] justify-center leading-[0] relative shrink-0 text-edited-tag text-[11px] tracking-[0.1px] whitespace-nowrap">
          <p className="leading-[14px]">Edited</p>
        </div>
      </div>
    </div>
  );
}

// ─── Section field label ───
function FieldLabel({ children, disabled = false }: { children: React.ReactNode; disabled?: boolean }) {
  return (
    <div className={`flex flex-col font-['Lexend',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[var(--text-base)] tracking-[0.15px] whitespace-nowrap ${disabled ? "text-[var(--border)]" : "text-[var(--muted-foreground)]"}`}>
      <p className="leading-[24px]">{children}</p>
    </div>
  );
}

function SubFieldLabel({ children, disabled = false }: { children: React.ReactNode; disabled?: boolean }) {
  return (
    <div className={`flex flex-col font-['Lexend',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[var(--text-sm)] tracking-[0.25px] whitespace-nowrap ${disabled ? "text-[var(--border)]" : "text-[var(--muted-foreground)]"}`}>
      <p className="leading-[20px]">{children}</p>
    </div>
  );
}

// Helper for marketplace display name
function getMarketplaceName(mpId: string) {
  return MARKETPLACE_NAME_BY_ID[mpId] ?? mpId;
}

// ═══════════════════════════════════════════════════════
// ITEM DETAILS TAB
// ═══════════════════════════════════════════════════════
export function ItemDetailsTab({
  itemDetails,
  marketplaceId,
  customization,
  onSave,
}: {
  itemDetails?: any;
  marketplaceId?: string;
  customization?: MarketplaceCustomization;
  onSave?: (data: MarketplaceCustomization) => void;
}) {
  const baseTitle = itemDetails?.title || "";
  const baseCategory = itemDetails?.category || "";
  const baseBrand = itemDetails?.brand || "";
  const baseSize = itemDetails?.size || "";

  const [title, setTitle] = useState(customization?.title || baseTitle);
  const [category, setCategory] = useState(customization?.category || baseCategory);
  const [brand, setBrand] = useState(customization?.brand || baseBrand);
  const [size, setSize] = useState(customization?.size || baseSize);

  // Auto-save all fields on change
  useEffect(() => {
    const updates: MarketplaceCustomization = {};
    if (title !== baseTitle) updates.title = title;
    if (category !== baseCategory) updates.category = category;
    if (brand !== baseBrand) updates.brand = brand;
    if (size !== baseSize) updates.size = size;
    if (Object.keys(updates).length > 0) {
      onSave?.(updates);
    }
  }, [title, category, brand, size]);

  const isTitleEdited = title !== baseTitle && title !== "";
  const isCategoryEdited = category !== baseCategory && category !== "";
  const isBrandEdited = brand !== baseBrand && brand !== "";
  const isSizeEdited = size !== baseSize && size !== "";

  return (
    <div className="content-stretch flex flex-col items-start overflow-clip py-[24px] relative shrink-0 w-full">
      <div className="relative shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start p-[20px] relative w-full">
          {/* Marketplace-specific info banner */}
          <div className="bg-[var(--muted)] rounded-[var(--radius)] px-[16px] py-[12px] w-full">
            <p className="font-['Lexend',sans-serif] font-[350] text-[var(--muted-foreground)] text-[var(--text-xs)] tracking-[0.2px] leading-[16px]">
              Customize item details specifically for <span className="font-medium text-[var(--foreground)]">{getMarketplaceName(marketplaceId || "")}</span>. Changes here won't affect your base listing.
            </p>
          </div>

          {/* Title Input */}
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
            <div className="content-stretch flex gap-[4px] items-center justify-between relative shrink-0 w-full">
              <FieldLabel>Title</FieldLabel>
              {isTitleEdited && <EditedBadge />}
            </div>
            <EditableInput
              value={title}
              onChange={setTitle}
              placeholder={baseTitle || "Enter title"}
            />
          </div>

          {/* Category Input */}
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
            <div className="content-stretch flex gap-[4px] items-center justify-between relative shrink-0 w-full">
              <FieldLabel>Category</FieldLabel>
              {isCategoryEdited && <EditedBadge />}
            </div>
            <EditableInput
              value={category}
              onChange={setCategory}
              placeholder={baseCategory || "Enter category"}
            />
          </div>

          {/* Brand Input */}
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
            <div className="content-stretch flex gap-[4px] items-center justify-between relative shrink-0 w-full">
              <FieldLabel>Brand</FieldLabel>
              {isBrandEdited && <EditedBadge />}
            </div>
            <EditableInput
              value={brand}
              onChange={setBrand}
              placeholder={baseBrand || "Enter brand"}
            />
          </div>

          {/* Size Input */}
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
            <div className="content-stretch flex gap-[4px] items-center justify-between relative shrink-0 w-full">
              <FieldLabel>Size</FieldLabel>
              {isSizeEdited && <EditedBadge />}
            </div>
            <EditableInput
              value={size}
              onChange={setSize}
              placeholder={baseSize || "Enter size"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════
// PRICING TAB
// ═══════════════════════════════════════════════════════

// Marketplace-specific pricing options
const MARKETPLACE_PRICING_OPTIONS: Record<string, { label: string; value: string }[]> = {
  ebay: [
    { label: "Fixed Price", value: "fixed" },
    { label: "Auction", value: "auction" },
    { label: "Auction with Buy It Now", value: "auction_bin" },
  ],
  mercari: [
    { label: "Fixed Price", value: "fixed" },
    { label: "Smart Offer", value: "smart_offer" },
  ],
  depop: [
    { label: "Fixed Price", value: "fixed" },
    { label: "Make Offer", value: "make_offer" },
  ],
  facebook: [
    { label: "Fixed Price", value: "fixed" },
    { label: "Negotiable", value: "negotiable" },
  ],
};

export function PricingTab({
  marketplaceId,
  basePrice,
  customization,
  onSave,
}: {
  marketplaceId?: string;
  basePrice?: string;
  customization?: { title?: string; price?: string };
  onSave?: (data: { title?: string; price?: string }) => void;
}) {
  const mpId = marketplaceId || "ebay";
  const mpName = getMarketplaceName(mpId);

  const formatOptions = MARKETPLACE_PRICING_OPTIONS[mpId] || MARKETPLACE_PRICING_OPTIONS.ebay;
  const [pricingFormat, setPricingFormat] = useState(formatOptions[0].value);
  const [customPrice, setCustomPrice] = useState(customization?.price || basePrice || "");
  const [duration, setDuration] = useState("");
  // eBay auction-specific
  const [startingBid, setStartingBid] = useState("");
  const [reservePrice, setReservePrice] = useState("");
  // Mercari smart offer
  const [minOfferPrice, setMinOfferPrice] = useState("");
  // Allow Best Offer toggle + controlled fields
  const [allowBestOffer, setAllowBestOffer] = useState(false);

  // Auto-save on price change
  useEffect(() => {
    if (customPrice !== basePrice && customPrice !== "") {
      onSave?.({ price: customPrice });
    }
  }, [customPrice]);
  const [autoAccept, setAutoAccept] = useState("");
  const [minimumOffer, setMinimumOffer] = useState("");

  return (
    <div className="content-stretch flex flex-col items-start overflow-clip py-[24px] relative shrink-0 w-full">
      <div className="relative shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start p-[20px] relative w-full">

          {/* Info banner */}
          <div className="bg-[var(--muted)] rounded-[var(--radius)] px-[16px] py-[12px] w-full">
            <p className="font-['Lexend',sans-serif] font-[350] text-[var(--muted-foreground)] text-[var(--text-xs)] tracking-[0.2px] leading-[16px]">
              Customize pricing for <span className="font-medium text-[var(--foreground)]">{mpName}</span>. Changes here override your base listing price.
            </p>
          </div>

          {/* Pricing Format — marketplace specific */}
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
            <FieldLabel>Pricing Format</FieldLabel>
            <SelectDropdown
              value={pricingFormat}
              onChange={setPricingFormat}
              options={formatOptions}
            />
          </div>

          {/* Custom Price */}
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
            <SubFieldLabel>
              {mpId === "ebay" && pricingFormat === "auction" ? "Buy It Now Price" : "Price"}
            </SubFieldLabel>
            <EditableInput
              value={customPrice}
              onChange={setCustomPrice}
              placeholder={basePrice ? `$${basePrice}` : "$0.00"}
            />
          </div>

          {/* eBay Auction-specific fields */}
          {mpId === "ebay" && (pricingFormat === "auction" || pricingFormat === "auction_bin") && (
            <>
              <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                <SubFieldLabel>Starting Bid</SubFieldLabel>
                <EditableInput
                  value={startingBid}
                  onChange={setStartingBid}
                  placeholder="$0.99"
                />
              </div>
              <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                <SubFieldLabel>Reserve Price (optional)</SubFieldLabel>
                <EditableInput
                  value={reservePrice}
                  onChange={setReservePrice}
                  placeholder="$0.00"
                />
              </div>
            </>
          )}

          {/* Mercari Smart Offer field */}
          {mpId === "mercari" && pricingFormat === "smart_offer" && (
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
              <SubFieldLabel>Minimum Offer Price</SubFieldLabel>
              <EditableInput
                value={minOfferPrice}
                onChange={setMinOfferPrice}
                placeholder={basePrice ? `$${(parseFloat(basePrice) * 0.8).toFixed(2)}` : "$0.00"}
              />
              <p className="font-['Lexend',sans-serif] font-[350] text-[var(--muted-foreground)] text-[var(--text-xs)] tracking-[0.2px] leading-[16px]">
                Mercari will automatically decline offers below this amount.
              </p>
            </div>
          )}

          {/* Duration */}
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
            <SubFieldLabel>Duration</SubFieldLabel>
            {mpId === "ebay" && (pricingFormat === "auction" || pricingFormat === "auction_bin") ? (
              <SelectDropdown
                value={duration || "7"}
                onChange={setDuration}
                options={[
                  { label: "1 Day", value: "1" },
                  { label: "3 Days", value: "3" },
                  { label: "5 Days", value: "5" },
                  { label: "7 Days", value: "7" },
                  { label: "10 Days", value: "10" },
                ]}
              />
            ) : (
              <EditableInput
                value={duration}
                onChange={setDuration}
                placeholder="Good til' canceled"
              />
            )}
          </div>

          {/* ─── Divider ─── */}
          <div className="w-full h-[1px] bg-[var(--border)] opacity-60" />

          {/* ─── Allow Best Offer toggle ─── */}
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
            <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
              <FieldLabel>Allow Best Offer</FieldLabel>
              <SwitchToggle
                checked={allowBestOffer}
                onChange={setAllowBestOffer}
              />
            </div>
            <p className="font-['Lexend',sans-serif] font-[350] text-[var(--muted-foreground)] text-[var(--text-xs)] tracking-[0.2px] leading-[16px]">
              {allowBestOffer
                ? "Buyers can submit offers on this listing."
                : "Enable to allow buyers to submit offers."}
            </p>
          </div>

          {/* Auto Accept — controlled by toggle */}
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
            <SubFieldLabel disabled={!allowBestOffer}>Auto Accept</SubFieldLabel>
            <EditableInput
              value={autoAccept}
              onChange={setAutoAccept}
              placeholder="$0.00"
              disabled={!allowBestOffer}
            />
            {allowBestOffer && (
              <p className="font-['Lexend',sans-serif] font-[350] text-[var(--muted-foreground)] text-[var(--text-xs)] tracking-[0.2px] leading-[16px]">
                Offers at or above this price will be automatically accepted.
              </p>
            )}
          </div>

          {/* Minimum Offer — controlled by toggle */}
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
            <SubFieldLabel disabled={!allowBestOffer}>Minimum Offer</SubFieldLabel>
            <EditableInput
              value={minimumOffer}
              onChange={setMinimumOffer}
              placeholder="$0.00"
              disabled={!allowBestOffer}
            />
            {allowBestOffer && (
              <p className="font-['Lexend',sans-serif] font-[350] text-[var(--muted-foreground)] text-[var(--text-xs)] tracking-[0.2px] leading-[16px]">
                Offers below this price will be automatically declined.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════
// SHIPPING TAB
// ═══════════════════════════════════════════════════════

const MARKETPLACE_SHIPPING_OPTIONS: Record<string, { label: string; value: string }[]> = {
  ebay: [
    { label: "Flat Rate - Domestic", value: "flat_domestic" },
    { label: "Flat Rate - International", value: "flat_intl" },
    { label: "Calculated Shipping", value: "calculated" },
    { label: "Free Shipping", value: "free" },
    { label: "Local Pickup Only", value: "local" },
  ],
  mercari: [
    { label: "Prepaid Label (Mercari)", value: "prepaid" },
    { label: "Ship on Your Own", value: "own" },
    { label: "Free Shipping", value: "free" },
  ],
  depop: [
    { label: "Depop Shipping", value: "depop" },
    { label: "Ship on Your Own", value: "own" },
    { label: "Free Shipping", value: "free" },
  ],
  facebook: [
    { label: "Shipping", value: "shipping" },
    { label: "Local Pickup", value: "local" },
    { label: "Both", value: "both" },
  ],
};

export function ShippingTab({ marketplaceId }: { marketplaceId?: string }) {
  const mpId = marketplaceId || "ebay";
  const mpName = getMarketplaceName(mpId);

  const shippingOptions = MARKETPLACE_SHIPPING_OPTIONS[mpId] || MARKETPLACE_SHIPPING_OPTIONS.ebay;
  const [shippingType, setShippingType] = useState(shippingOptions[0].value);
  const [packageWeight, setPackageWeight] = useState("");
  const [weightUnit, setWeightUnit] = useState("lbs");
  const [dimLength, setDimLength] = useState("");
  const [dimWidth, setDimWidth] = useState("");
  const [dimHeight, setDimHeight] = useState("");
  const [shippingLocation, setShippingLocation] = useState("");
  const [paymentPolicy, setPaymentPolicy] = useState("paypal");
  const [returnPolicy, setReturnPolicy] = useState("no_returns");

  return (
    <div className="content-stretch flex flex-col items-start overflow-clip py-[24px] relative shrink-0 w-full">
      <div className="relative shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start p-[20px] relative w-full">

          {/* Info banner */}
          <div className="bg-[var(--muted)] rounded-[var(--radius)] px-[16px] py-[12px] w-full">
            <p className="font-['Lexend',sans-serif] font-[350] text-[var(--muted-foreground)] text-[var(--text-xs)] tracking-[0.2px] leading-[16px]">
              Customize shipping for <span className="font-medium text-[var(--foreground)]">{mpName}</span>. Changes here override your base shipping settings.
            </p>
          </div>

          {/* Shipping Type — marketplace specific */}
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
            <FieldLabel>Shipping Type</FieldLabel>
            <SelectDropdown
              value={shippingType}
              onChange={setShippingType}
              options={shippingOptions}
            />
          </div>

          {/* Package Weight Fields */}
          <div className="content-stretch flex gap-[12px] items-end relative shrink-0 w-full">
            <div className="content-stretch flex flex-[2_0_0] flex-col gap-[8px] items-start min-w-px relative">
              <SubFieldLabel>Package Weight</SubFieldLabel>
              <EditableInput
                value={packageWeight}
                onChange={setPackageWeight}
                placeholder="1"
              />
            </div>

            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative">
              <SubFieldLabel>Unit</SubFieldLabel>
              <SelectDropdown
                value={weightUnit}
                onChange={setWeightUnit}
                options={[
                  { label: "lbs", value: "lbs" },
                  { label: "oz", value: "oz" },
                  { label: "kg", value: "kg" },
                ]}
              />
            </div>
          </div>

          {/* Package Dimensions Fields */}
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
            <SubFieldLabel>Package Dimensions (in)</SubFieldLabel>
            <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
              <div className="flex-1">
                <EditableInput
                  value={dimLength}
                  onChange={setDimLength}
                  placeholder="L"
                />
              </div>
              <div className="flex-1">
                <EditableInput
                  value={dimWidth}
                  onChange={setDimWidth}
                  placeholder="W"
                />
              </div>
              <div className="flex-1">
                <EditableInput
                  value={dimHeight}
                  onChange={setDimHeight}
                  placeholder="H"
                />
              </div>
            </div>
          </div>

          {/* Shipping Location */}
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
            <SubFieldLabel>Shipping Location (Zip Code)</SubFieldLabel>
            <EditableInput
              value={shippingLocation}
              onChange={setShippingLocation}
              placeholder="12345"
            />
          </div>

          {/* Payment Policy - eBay specific */}
          {mpId === "ebay" && (
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
              <SubFieldLabel>Payment Policy</SubFieldLabel>
              <SelectDropdown
                value={paymentPolicy}
                onChange={setPaymentPolicy}
                options={[
                  { label: "PayPal | johndoe@email.com", value: "paypal" },
                  { label: "eBay Managed Payments", value: "managed" },
                ]}
              />
            </div>
          )}

          {/* Return Policy */}
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
            <SubFieldLabel>Return Policy</SubFieldLabel>
            <SelectDropdown
              value={returnPolicy}
              onChange={setReturnPolicy}
              options={[
                { label: "No returns accepted", value: "no_returns" },
                { label: "14-day returns", value: "14_day" },
                { label: "30-day returns", value: "30_day" },
                { label: "60-day returns", value: "60_day" },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════
// OPTIONAL TAB
// ═══════════════════════════════════════════════════════
export function OptionalTab() {
  const [conditionDescription, setConditionDescription] = useState("");

  return (
    <div className="content-stretch flex flex-col items-start overflow-clip py-[24px] relative shrink-0 w-full">
      <div className="relative shrink-0 w-full">
        <div className="content-stretch flex flex-col items-start p-[20px] relative w-full">
          {/* Condition Description */}
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
            <FieldLabel>Condition Description</FieldLabel>
            <EditableInput
              value={conditionDescription}
              onChange={setConditionDescription}
              placeholder="Excellent, some wear marks"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
