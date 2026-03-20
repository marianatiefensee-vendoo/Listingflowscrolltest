import { Marketplace } from "../App";

interface MarketplaceListingPreviewDialogProps {
  isOpen: boolean;
  onClose: () => void;
  marketplace: Marketplace;
  photos: string[];
  itemDetails?: {
    title: string;
    description?: string;
    condition: string;
  } | null;
  price: string;
  shippingCompleted: boolean;
  onEditMarketplace: (marketplaceId: string) => void;
  marketplaceCustomization?: { title?: string; price?: string };
}

export default function MarketplaceListingPreviewDialog({
  isOpen,
  onClose,
  marketplace,
  photos,
  itemDetails,
  price,
  shippingCompleted,
  onEditMarketplace,
  marketplaceCustomization,
}: MarketplaceListingPreviewDialogProps) {
  if (!isOpen) return null;

  const coverPhoto = photos.length > 0 ? photos[0] : null;
  const shippingMethod = shippingCompleted ? "Standard Shipping" : "Not set";
  
  // Use customized values if available, otherwise fall back to base listing
  const displayTitle = marketplaceCustomization?.title || itemDetails?.title || "Untitled";
  const displayPrice = marketplaceCustomization?.price || price || "0.00";

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-foreground/50 z-[100]"
        onClick={onClose}
      />

      {/* Dialog */}
      <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[101] w-full max-w-[560px] max-h-[90vh] overflow-y-auto">
        <div className="bg-[var(--card)] rounded-[16px] border border-[var(--border)] shadow-[0px_8px_16px_0px_rgba(0,0,0,0.2)] m-4">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-[var(--border)]">
            <div className="flex items-center gap-3">
              <img
                src={marketplace.image}
                alt={marketplace.name}
                className="size-10 rounded-[6px] object-cover border border-[var(--border)]"
              />
              <h2 className="font-['Lexend',sans-serif] font-[var(--font-weight-medium)] text-[20px] leading-[28px] text-[var(--foreground)]">
                {marketplace.name} Listing Preview
              </h2>
            </div>
            <button
              onClick={onClose}
              className="flex items-center justify-center size-10 rounded-[8px] hover:bg-[var(--muted)] transition-colors"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 6L6 18M6 6L18 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="flex flex-col gap-6">
              {/* Cover Photo */}
              {coverPhoto && (
                <div className="w-full rounded-[12px] overflow-hidden border border-[var(--border)]">
                  <img
                    src={coverPhoto}
                    alt="Listing preview"
                    className="w-full object-cover"
                    style={{ aspectRatio: "1/1" }}
                  />
                </div>
              )}

              {/* Title */}
              <div>
                <p className="font-['Lexend',sans-serif] font-[350] text-[var(--text-xs)] leading-[16px] text-[var(--muted-foreground)] tracking-[0.2px] mb-1">
                  Title
                </p>
                <p className="font-['Lexend',sans-serif] font-[var(--font-weight-medium)] text-[18px] leading-[24px] text-[var(--foreground)]">
                  {displayTitle}
                </p>
              </div>

              {/* Description */}
              {itemDetails?.description && (
                <div>
                  <p className="font-['Lexend',sans-serif] font-[350] text-[var(--text-xs)] leading-[16px] text-[var(--muted-foreground)] tracking-[0.2px] mb-1">
                    Description
                  </p>
                  <p className="font-['Lexend',sans-serif] font-[var(--font-weight-normal)] text-[var(--text-sm)] leading-[20px] text-[var(--foreground)] tracking-[0.25px]">
                    {itemDetails.description}
                  </p>
                </div>
              )}

              {/* Condition */}
              {itemDetails?.condition && (
                <div>
                  <p className="font-['Lexend',sans-serif] font-[350] text-[var(--text-xs)] leading-[16px] text-[var(--muted-foreground)] tracking-[0.2px] mb-1">
                    Condition
                  </p>
                  <p className="bg-[rgba(93,0,255,0.08)] rounded-[12px] px-[12px] py-[4px] font-['Lexend',sans-serif] font-[var(--font-weight-medium)] text-[var(--text-xs)] leading-[16px] text-[var(--foreground)] tracking-[0.5px] w-fit">
                    {itemDetails.condition}
                  </p>
                </div>
              )}

              {/* Price */}
              <div>
                <p className="font-['Lexend',sans-serif] font-[350] text-[var(--text-xs)] leading-[16px] text-[var(--muted-foreground)] tracking-[0.2px] mb-1">
                  Price
                </p>
                <p className="font-['Lexend',sans-serif] font-[var(--font-weight-normal)] text-[28px] leading-[36px] text-[var(--foreground)]">
                  {displayPrice ? `$${displayPrice}` : "$--.--"}
                </p>
              </div>

              {/* Shipping */}
              <div>
                <p className="font-['Lexend',sans-serif] font-[350] text-[var(--text-xs)] leading-[16px] text-[var(--muted-foreground)] tracking-[0.2px] mb-1">
                  Shipping Method
                </p>
                <p className="font-['Lexend',sans-serif] font-[var(--font-weight-normal)] text-[var(--text-sm)] leading-[20px] text-[var(--foreground)] tracking-[0.25px]">
                  {shippingMethod}
                </p>
              </div>
            </div>

            {/* Edit Button */}
            <div className="mt-8 pt-6 border-t border-[var(--border)]">
              <button
                onClick={() => {
                  onEditMarketplace(marketplace.id);
                  onClose();
                }}
                className="w-full h-[56px] bg-[var(--primary)] hover:bg-[var(--primary)]/90 rounded-[8px] font-['Lexend',sans-serif] font-[var(--font-weight-medium)] text-[var(--text-sm)] leading-[20px] text-[var(--primary-foreground)] tracking-[0.1px] transition-colors shadow-[0px_4px_8px_3px_rgba(0,0,0,0.15),0px_1px_3px_0px_rgba(0,0,0,0.3)] text-[#ffffff]"
              >
                Edit Marketplace Listing
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}