import { useState } from "react";

interface DetailsStepProps {
  photos: string[];
  onBack: () => void;
  onNext: () => void;
}

export default function DetailsStep({ photos, onBack, onNext }: DetailsStepProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [condition, setCondition] = useState("");

  const categories = [
    "Women's Clothing",
    "Men's Clothing",
    "Kids & Baby",
    "Shoes",
    "Accessories",
    "Home & Living",
    "Electronics",
    "Beauty & Personal Care",
    "Toys & Games",
    "Sports & Outdoors",
  ];

  const conditions = ["New with Tags", "New without Tags", "Like New", "Good", "Fair"];

  const isValid = title && description && category && condition;

  return (
    <div className="flex flex-col gap-6">
      {/* Step Indicator */}
      <div className="rounded-xl border border-border bg-card p-6 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.3),0px_1px_3px_0px_rgba(0,0,0,0.15)]">
        <div className="mb-8 flex items-center gap-3">
          <div className="flex size-8 items-center justify-center rounded-2xl bg-[#64539b] font-['Lexend'] text-base font-normal leading-6 text-white">
            2
          </div>
          <h3 className="font-['Lexend'] text-2xl font-normal leading-8 text-[#1d1a24]">
            Item Details
          </h3>
        </div>

        <div className="h-px w-full bg-border" />

        {/* Form Fields */}
        <div className="mt-6 space-y-6">
          {/* Title */}
          <div className="space-y-2">
            <label htmlFor="title" className="block font-['Lexend'] text-sm font-medium leading-5 text-foreground">
              Title *
            </label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g., Vintage Levi's Denim Jacket"
              className="h-12 w-full rounded-[5px] border border-border bg-input-background px-4 font-['Lexend'] text-base font-normal leading-6 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>

          {/* Description */}
          <div className="space-y-2">
            <label htmlFor="description" className="block font-['Lexend'] text-sm font-medium leading-5 text-foreground">
              Description *
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe your item's condition, size, color, and any other important details..."
              rows={6}
              className="w-full rounded-[5px] border border-border bg-input-background p-4 font-['Lexend'] text-base font-normal leading-6 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>

          {/* Category */}
          <div className="space-y-2">
            <label htmlFor="category" className="block font-['Lexend'] text-sm font-medium leading-5 text-foreground">
              Category *
            </label>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="h-12 w-full rounded-[5px] border border-border bg-input-background px-4 font-['Lexend'] text-base font-normal leading-6 text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            >
              <option value="">Select a category</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          {/* Brand */}
          <div className="space-y-2">
            <label htmlFor="brand" className="block font-['Lexend'] text-sm font-medium leading-5 text-foreground">
              Brand
            </label>
            <input
              id="brand"
              type="text"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              placeholder="e.g., Levi's"
              className="h-12 w-full rounded-[5px] border border-border bg-input-background px-4 font-['Lexend'] text-base font-normal leading-6 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>

          {/* Condition */}
          <div className="space-y-2">
            <label htmlFor="condition" className="block font-['Lexend'] text-sm font-medium leading-5 text-foreground">
              Condition *
            </label>
            <select
              id="condition"
              value={condition}
              onChange={(e) => setCondition(e.target.value)}
              className="h-12 w-full rounded-[5px] border border-border bg-input-background px-4 font-['Lexend'] text-base font-normal leading-6 text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            >
              <option value="">Select condition</option>
              {conditions.map((cond) => (
                <option key={cond} value={cond}>
                  {cond}
                </option>
              ))}
            </select>
          </div>
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

      {/* Preview Panel (Optional) */}
      {photos.length > 0 && (
        <div className="rounded-xl border border-border bg-card p-6 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.3),0px_1px_3px_0px_rgba(0,0,0,0.15)]">
          <h4 className="mb-4 font-['Lexend'] text-base font-medium leading-6 text-foreground">
            Preview
          </h4>
          <div className="flex gap-4">
            <img
              src={photos[0]}
              alt="Primary"
              className="h-24 w-24 rounded-lg border border-border object-cover"
            />
            <div className="flex-1">
              <p className="mb-1 font-['Lexend'] text-base font-medium leading-6 text-foreground">
                {title || "Untitled Item"}
              </p>
              {condition && (
                <p className="caption font-['Lexend'] text-xs font-normal leading-4 text-muted-foreground">
                  Condition: {condition}
                </p>
              )}
              {category && (
                <p className="caption font-['Lexend'] text-xs font-normal leading-4 text-muted-foreground">
                  Category: {category}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
