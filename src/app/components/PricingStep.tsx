import { useState } from "react";

interface PricingStepProps {
  onBack: () => void;
  onNext: () => void;
}

export default function PricingStep({ onBack, onNext }: PricingStepProps) {
  const [price, setPrice] = useState("");
  const [compareAtPrice, setCompareAtPrice] = useState("");
  const [quantity, setQuantity] = useState("1");
  const [shippingCost, setShippingCost] = useState("");
  const [freeShipping, setFreeShipping] = useState(false);

  const isValid = price && parseFloat(price) > 0 && quantity && parseInt(quantity) > 0;

  const calculateProfit = () => {
    const priceNum = parseFloat(price) || 0;
    const shippingNum = freeShipping ? 0 : parseFloat(shippingCost) || 0;
    const fee = priceNum * 0.1; // Assume 10% platform fee
    return priceNum + shippingNum - fee;
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Step Indicator */}
      <div className="rounded-xl border border-border bg-card p-6 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.3),0px_1px_3px_0px_rgba(0,0,0,0.15)]">
        <div className="mb-8 flex items-center gap-3">
          <div className="flex size-8 items-center justify-center rounded-2xl bg-[#64539b] font-['Lexend'] text-base font-normal leading-6 text-white">
            3
          </div>
          <h3 className="font-['Lexend'] text-2xl font-normal leading-8 text-[#1d1a24]">
            Pricing & Inventory
          </h3>
        </div>

        <div className="h-px w-full bg-border" />

        {/* Form Fields */}
        <div className="mt-6 space-y-6">
          {/* Price */}
          <div className="space-y-2">
            <label htmlFor="price" className="block font-['Lexend'] text-sm font-medium leading-5 text-foreground">
              Price *
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 font-['Lexend'] text-base font-normal text-muted-foreground">
                $
              </span>
              <input
                id="price"
                type="number"
                step="0.01"
                min="0"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="0.00"
                className="h-12 w-full rounded-[5px] border border-border bg-input-background pl-8 pr-4 font-['Lexend'] text-base font-normal leading-6 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
          </div>

          {/* Compare at Price */}
          <div className="space-y-2">
            <label htmlFor="compareAtPrice" className="block font-['Lexend'] text-sm font-medium leading-5 text-foreground">
              Compare at Price
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 font-['Lexend'] text-base font-normal text-muted-foreground">
                $
              </span>
              <input
                id="compareAtPrice"
                type="number"
                step="0.01"
                min="0"
                value={compareAtPrice}
                onChange={(e) => setCompareAtPrice(e.target.value)}
                placeholder="0.00"
                className="h-12 w-full rounded-[5px] border border-border bg-input-background pl-8 pr-4 font-['Lexend'] text-base font-normal leading-6 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            <p className="caption font-['Lexend'] text-xs font-normal leading-4 text-muted-foreground">
              Show customers the original price to highlight your discount
            </p>
          </div>

          {/* Quantity */}
          <div className="space-y-2">
            <label htmlFor="quantity" className="block font-['Lexend'] text-sm font-medium leading-5 text-foreground">
              Quantity *
            </label>
            <input
              id="quantity"
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="h-12 w-full rounded-[5px] border border-border bg-input-background px-4 font-['Lexend'] text-base font-normal leading-6 text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>

          {/* Shipping */}
          <div className="space-y-4">
            <label className="block font-['Lexend'] text-sm font-medium leading-5 text-foreground">
              Shipping
            </label>
            
            <div className="flex items-center gap-3">
              <input
                id="freeShipping"
                type="checkbox"
                checked={freeShipping}
                onChange={(e) => setFreeShipping(e.target.checked)}
                className="size-5 rounded border-border text-primary focus:ring-2 focus:ring-ring focus:ring-offset-0"
              />
              <label htmlFor="freeShipping" className="font-['Lexend'] text-base font-normal leading-6 text-foreground">
                Offer free shipping
              </label>
            </div>

            {!freeShipping && (
              <div className="space-y-2">
                <label htmlFor="shippingCost" className="block font-['Lexend'] text-sm font-medium leading-5 text-foreground">
                  Shipping Cost
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 font-['Lexend'] text-base font-normal text-muted-foreground">
                    $
                  </span>
                  <input
                    id="shippingCost"
                    type="number"
                    step="0.01"
                    min="0"
                    value={shippingCost}
                    onChange={(e) => setShippingCost(e.target.value)}
                    placeholder="0.00"
                    className="h-12 w-full rounded-[5px] border border-border bg-input-background pl-8 pr-4 font-['Lexend'] text-base font-normal leading-6 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Profit Calculator */}
          {price && parseFloat(price) > 0 && (
            <div className="rounded-lg border border-border bg-muted p-4">
              <h4 className="mb-3 font-['Lexend'] text-sm font-medium leading-5 text-foreground">
                Estimated Profit
              </h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="caption font-['Lexend'] text-xs font-normal leading-4 text-muted-foreground">
                    Item price
                  </span>
                  <span className="caption font-['Lexend'] text-xs font-normal leading-4 text-foreground">
                    ${parseFloat(price).toFixed(2)}
                  </span>
                </div>
                {!freeShipping && shippingCost && (
                  <div className="flex justify-between">
                    <span className="caption font-['Lexend'] text-xs font-normal leading-4 text-muted-foreground">
                      Shipping
                    </span>
                    <span className="caption font-['Lexend'] text-xs font-normal leading-4 text-foreground">
                      ${parseFloat(shippingCost).toFixed(2)}
                    </span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="caption font-['Lexend'] text-xs font-normal leading-4 text-muted-foreground">
                    Platform fee (10%)
                  </span>
                  <span className="caption font-['Lexend'] text-xs font-normal leading-4 text-destructive">
                    -${(parseFloat(price) * 0.1).toFixed(2)}
                  </span>
                </div>
                <div className="h-px w-full bg-border" />
                <div className="flex justify-between">
                  <span className="font-['Lexend'] text-sm font-medium leading-5 text-foreground">
                    Your profit
                  </span>
                  <span className="font-['Lexend'] text-base font-medium leading-6 text-[#04E1CB]">
                    ${calculateProfit().toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Navigation Buttons */}
        <div className="mt-8 flex items-center justify-between">
          <button
            onClick={onBack}
            className="inline-flex h-12 items-center justify-center gap-2.5 rounded-[5px] border border-border bg-transparent px-8 font-['Lexend'] text-sm font-medium leading-5 text-foreground transition-colors hover:bg-muted"
          >
            Back
          </button>
          <button
            onClick={onNext}
            disabled={!isValid}
            className="inline-flex h-12 items-center justify-center gap-2.5 rounded-[5px] bg-primary px-8 font-['Lexend'] text-sm font-medium leading-5 text-primary-foreground shadow-[0px_4px_8px_3px_rgba(0,0,0,0.15),0px_1px_3px_0px_rgba(0,0,0,0.3)] transition-colors hover:bg-primary/90 disabled:pointer-events-none disabled:opacity-50"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
