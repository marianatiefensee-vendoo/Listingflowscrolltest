interface ReviewStepProps {
  photos: string[];
  onBack: () => void;
  onPublish: () => void;
}

export default function ReviewStep({ photos, onBack, onPublish }: ReviewStepProps) {
  return (
    <div className="flex flex-col gap-6">
      {/* Step Indicator */}
      <div className="rounded-xl border border-border bg-card p-6 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.3),0px_1px_3px_0px_rgba(0,0,0,0.15)]">
        <div className="mb-8 flex items-center gap-3">
          <div className="flex size-8 items-center justify-center rounded-2xl bg-[#64539b] font-['Lexend'] text-base font-normal leading-6 text-white">
            4
          </div>
          <h3 className="font-['Lexend'] text-2xl font-normal leading-8 text-[#1d1a24]">
            Review & Publish
          </h3>
        </div>

        <div className="h-px w-full bg-border" />

        {/* Success Message */}
        <div className="mt-6 flex flex-col items-center justify-center py-12">
          <div className="mb-6 flex size-20 items-center justify-center rounded-full bg-[#04E1CB]/10">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M35 10L15 30L5 20"
                stroke="#04E1CB"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          
          <h3 className="mb-2 font-['Lexend'] text-2xl font-normal leading-8 text-foreground">
            Your listing is ready!
          </h3>
          <p className="mb-8 text-center font-['Lexend'] text-base font-normal leading-6 text-muted-foreground">
            Review your listing details below before publishing
          </p>

          {/* Listing Preview */}
          <div className="w-full max-w-md rounded-xl border border-border bg-background p-6">
            {/* Photos */}
            {photos.length > 0 && (
              <div className="mb-6">
                <img
                  src={photos[0]}
                  alt="Listing preview"
                  className="w-full rounded-lg border border-border object-cover"
                  style={{ aspectRatio: "1/1" }}
                />
                {photos.length > 1 && (
                  <div className="mt-3 flex gap-2">
                    {photos.slice(1, 5).map((photo, index) => (
                      <img
                        key={index}
                        src={photo}
                        alt={`Preview ${index + 2}`}
                        className="size-16 rounded border border-border object-cover"
                      />
                    ))}
                    {photos.length > 5 && (
                      <div className="flex size-16 items-center justify-center rounded border border-border bg-muted font-['Lexend'] text-xs font-medium text-muted-foreground">
                        +{photos.length - 5}
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}

            {/* Info Section */}
            <div className="space-y-4">
              <div className="rounded-lg bg-muted p-4">
                <div className="mb-1 flex items-baseline gap-2">
                  <span className="font-['Lexend'] text-xs font-normal leading-4 text-muted-foreground line-through">
                    $89.99
                  </span>
                  <span className="font-['Lexend'] text-2xl font-normal leading-8 text-foreground">
                    $49.99
                  </span>
                </div>
                <p className="caption font-['Lexend'] text-xs font-normal leading-4 text-[#04E1CB]">
                  Free Shipping
                </p>
              </div>

              <div>
                <p className="mb-1 font-['Lexend'] text-base font-medium leading-6 text-foreground">
                  Sample Listing Title
                </p>
                <p className="caption font-['Lexend'] text-xs font-normal leading-4 text-muted-foreground">
                  Condition: Like New • Category: Women's Clothing
                </p>
              </div>

              <div>
                <h4 className="mb-2 font-['Lexend'] text-sm font-medium leading-5 text-foreground">
                  Description
                </h4>
                <p className="font-['Lexend'] text-sm font-normal leading-5 text-muted-foreground">
                  This is a sample description for your listing. Your actual description will appear here when you create your listing.
                </p>
              </div>
            </div>
          </div>

          {/* Publishing Options */}
          <div className="mt-8 w-full max-w-md space-y-4">
            <div className="flex items-center gap-3 rounded-lg border border-border bg-background p-4">
              <input
                id="publishNow"
                type="radio"
                name="publishOption"
                defaultChecked
                className="size-5 border-border text-primary focus:ring-2 focus:ring-ring focus:ring-offset-0"
              />
              <div className="flex-1">
                <label htmlFor="publishNow" className="block font-['Lexend'] text-sm font-medium leading-5 text-foreground">
                  Publish immediately
                </label>
                <p className="caption font-['Lexend'] text-xs font-normal leading-4 text-muted-foreground">
                  Your listing will go live right away
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-lg border border-border bg-background p-4">
              <input
                id="saveDraft"
                type="radio"
                name="publishOption"
                className="size-5 border-border text-primary focus:ring-2 focus:ring-ring focus:ring-offset-0"
              />
              <div className="flex-1">
                <label htmlFor="saveDraft" className="block font-['Lexend'] text-sm font-medium leading-5 text-foreground">
                  Save as draft
                </label>
                <p className="caption font-['Lexend'] text-xs font-normal leading-4 text-muted-foreground">
                  Publish your listing later
                </p>
              </div>
            </div>
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
            onClick={onPublish}
            className="inline-flex h-12 items-center justify-center gap-2.5 rounded-[5px] bg-primary px-8 font-['Lexend'] text-sm font-medium leading-5 text-primary-foreground shadow-[0px_4px_8px_3px_rgba(0,0,0,0.15),0px_1px_3px_0px_rgba(0,0,0,0.3)] transition-colors hover:bg-primary/90"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17 7L8 16L3 11"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Publish Listing
          </button>
        </div>
      </div>

      {/* Tips Section */}
      <div className="rounded-xl border border-border bg-card p-6 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.3),0px_1px_3px_0px_rgba(0,0,0,0.15)]">
        <div className="mb-4 flex items-center gap-2">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
              stroke="#04E1CB"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <h4 className="font-['Lexend'] text-base font-medium leading-6 text-foreground">
            Tips for success
          </h4>
        </div>
        <ul className="space-y-2">
          <li className="flex gap-2">
            <span className="text-accent">•</span>
            <p className="font-['Lexend'] text-sm font-normal leading-5 text-muted-foreground">
              Respond to buyer inquiries within 24 hours to maintain a good seller rating
            </p>
          </li>
          <li className="flex gap-2">
            <span className="text-accent">•</span>
            <p className="font-['Lexend'] text-sm font-normal leading-5 text-muted-foreground">
              Ship items within 3 business days of purchase
            </p>
          </li>
          <li className="flex gap-2">
            <span className="text-accent">•</span>
            <p className="font-['Lexend'] text-sm font-normal leading-5 text-muted-foreground">
              Share your listing on social media to increase visibility
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}
