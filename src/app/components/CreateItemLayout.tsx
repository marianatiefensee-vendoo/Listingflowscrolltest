import type { ReactNode } from "react";
import svgPaths from "../../imports/svg-wo4tf7tw77";

export type ListingSectionStatus = "not-started" | "in-progress" | "completed";

export interface ListingSectionMeta {
  id: string;
  title: string;
  shortTitle?: string;
  description?: string;
  status: ListingSectionStatus;
  isCurrent?: boolean;
  isPublishReady?: boolean;
}

interface CreateItemLayoutProps {
  children: {
    photos: React.ReactNode;
    itemDetails: React.ReactNode;
    marketplaces: React.ReactNode;
    pricing: React.ReactNode;
    shipping: React.ReactNode;
  };
  progressSections: ListingSectionMeta[];
  completionCount: number;
  onJumpToSection: (sectionId: string) => void;
  reviewStatus?: ListingSectionStatus;
  shouldExpandItemDetails?: boolean;
  shouldExpandMarketplaces?: boolean;
  shouldExpandPricing?: boolean;
  shouldExpandShipping?: boolean;
  onItemDetailsSectionShown?: () => void;
  onMarketplacesSectionShown?: () => void;
  onPricingSectionShown?: () => void;
  onShippingSectionShown?: () => void;
}

const statusLabelMap: Record<ListingSectionStatus, string> = {
  "not-started": "Needs attention",
  "in-progress": "In progress",
  completed: "Completed",
};

const statusToneMap: Record<ListingSectionStatus, string> = {
  "not-started": "bg-muted text-muted-foreground",
  "in-progress": "bg-primary/10 text-primary",
  completed: "bg-secondary text-secondary-foreground",
};

function SectionWrapper({
  section,
  children,
}: {
  section: ListingSectionMeta;
  children: ReactNode;
}) {
  return (
    <section className="relative scroll-mt-[230px]">
      <div
        className={`mb-[12px] rounded-[12px] border px-[18px] py-[14px] transition-colors ${
          section.isCurrent
            ? "border-primary/30 bg-primary/5"
            : "border-border bg-background/80"
        }`}
      >
        <div className="flex items-start justify-between gap-[16px]">
          <div className="min-w-0">
            <div className="mb-[4px] flex items-center gap-[8px]">
              <p className="font-['Lexend',sans-serif] text-[var(--text-xs)] font-[var(--font-weight-medium)] uppercase tracking-[0.5px] text-muted-foreground">
                {section.shortTitle ?? section.title}
              </p>
              {section.status === "completed" && (
                <span className="inline-flex size-[18px] items-center justify-center rounded-full bg-secondary text-secondary-foreground">
                  <svg className="size-[12px]" fill="none" viewBox="0 0 12 12">
                    <path
                      d="M2.5 6.1L4.8 8.4L9.5 3.7"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.8"
                    />
                  </svg>
                </span>
              )}
            </div>
            <h2 className="font-['Lexend',sans-serif] text-[var(--text-h4)] leading-[28px] text-foreground">
              {section.title}
            </h2>
            {section.description && (
              <p className="mt-[4px] font-['Lexend',sans-serif] text-[var(--text-sm)] leading-[20px] text-muted-foreground">
                {section.description}
              </p>
            )}
          </div>
          <div
            className={`shrink-0 rounded-full px-[10px] py-[6px] font-['Lexend',sans-serif] text-[var(--text-xs)] font-[var(--font-weight-medium)] tracking-[0.4px] ${statusToneMap[section.status]}`}
          >
            {statusLabelMap[section.status]}
          </div>
        </div>
      </div>
      <div className="rounded-[20px] bg-gradient-to-b from-transparent to-background/20 pb-[4px]">
        {children}
      </div>
    </section>
  );
}

export default function CreateItemLayout({
  children,
  progressSections,
  completionCount,
  onJumpToSection,
  reviewStatus = "not-started",
  shouldExpandItemDetails,
  shouldExpandMarketplaces,
  shouldExpandPricing,
  shouldExpandShipping,
  onItemDetailsSectionShown,
  onMarketplacesSectionShown,
  onPricingSectionShown,
  onShippingSectionShown,
}: CreateItemLayoutProps) {
  const completionPercent = Math.round(
    (completionCount / progressSections.length) * 100,
  );
  const nearReview =
    completionCount >= Math.max(progressSections.length - 1, 1);

  return (
    <div className="flex h-full w-full flex-col">
      <div className="sticky top-0 z-10 shrink-0 w-full bg-surface-container rounded-tl-[12px] pr-[1px] border-b border-border">
        <div className="content-stretch flex flex-col items-start relative w-full bg-surface-container m-[0px] pl-[12px] pr-[16px] py-[24px]">
          <div className="content-stretch flex items-center relative shrink-0 w-full">
            <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
              <div className="content-stretch flex flex-[1_0_0] h-full items-center min-h-px min-w-px relative">
                <div className="content-stretch flex items-center relative shrink-0">
                  <button className="relative shrink-0 size-[48px]">
                    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col items-center justify-center left-[calc(50%-0.5px)] overflow-clip rounded-[100px] top-1/2 w-[40px]">
                      <div className="content-stretch flex h-[40px] items-center justify-center relative shrink-0 w-full">
                        <div className="overflow-clip relative shrink-0 size-[24px]">
                          <div className="absolute inset-[5.53%_26.37%_11.14%_26.36%]">
                            <svg
                              className="absolute block size-full"
                              fill="none"
                              preserveAspectRatio="none"
                              viewBox="0 0 11.3458 19.9993"
                            >
                              <path
                                d={svgPaths.p1a5f6bc0}
                                fill="var(--fill-0, #1D1A24)"
                                id="Icon"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </button>
                </div>
                <div className="min-w-0">
                  <p className="font-['Lexend',sans-serif] font-[var(--font-weight-normal)] leading-[40px] overflow-hidden relative shrink-0 text-foreground text-[var(--text-h2)] text-ellipsis whitespace-nowrap text-[32px]">
                    Create item
                  </p>
                  <p className="font-['Lexend',sans-serif] text-[var(--text-sm)] leading-[20px] text-muted-foreground">
                    Guided progress keeps the full listing flow editable while
                    you scroll.
                  </p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0">
              <button className="bg-background content-stretch cursor-pointer flex h-[48px] items-center justify-center px-[20px] py-[16px] relative rounded-[8px] shrink-0 w-[142px]">
                <div
                  aria-hidden="true"
                  className="absolute border border-border border-solid inset-0 pointer-events-none rounded-[8px]"
                />
                <div className="content-stretch flex flex-col items-center justify-center relative rounded-[5px] shrink-0">
                  <div className="content-stretch flex gap-[10px] items-center px-[16px] py-[10px] relative shrink-0">
                    <div className="content-stretch flex items-center justify-center px-[4px] relative shrink-0">
                      <div className="flex flex-col font-['Lexend',sans-serif] font-[var(--font-weight-medium)] justify-center leading-[0] relative shrink-0 text-muted-foreground text-[var(--text-base)] text-center tracking-[0.15px] whitespace-nowrap">
                        <p className="leading-[24px]">Templates</p>
                      </div>
                    </div>
                    <div className="h-[26.399px] overflow-clip relative shrink-0 w-[24px]">
                      <div className="absolute inset-[26.36%_8.34%_26.36%_8.33%]">
                        <svg
                          className="absolute block size-full"
                          fill="none"
                          preserveAspectRatio="none"
                          viewBox="0 0 19.9992 12.4799"
                        >
                          <path
                            d={svgPaths.p2dcfbd00}
                            fill="var(--fill-0, #494455)"
                            id="Icon"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-border/80 bg-background/95 px-[28px] py-[18px] backdrop-blur-sm">
          <div className="mb-[14px] flex items-center justify-between gap-[16px]">
            <div>
              <p className="font-['Lexend',sans-serif] text-[var(--text-sm)] font-[var(--font-weight-medium)] leading-[20px] text-foreground">
                Listing progress
              </p>
              <p className="font-['Lexend',sans-serif] text-[var(--text-xs)] leading-[16px] text-muted-foreground">
                {nearReview
                  ? "You’re almost ready to review and publish."
                  : "Jump to any section while staying oriented in the flow."}
              </p>
            </div>
            <div className="text-right">
              <p className="font-['Lexend',sans-serif] text-[var(--text-sm)] font-[var(--font-weight-medium)] leading-[20px] text-foreground">
                {completionCount} of {progressSections.length} ready
              </p>
              <p className="font-['Lexend',sans-serif] text-[var(--text-xs)] leading-[16px] text-muted-foreground">
                {completionPercent}% complete
              </p>
            </div>
          </div>
          <div className="mb-[14px] h-[6px] overflow-hidden rounded-full bg-muted">
            <div
              className={`h-full rounded-full transition-all duration-300 ${nearReview ? "bg-secondary" : "bg-primary"}`}
              style={{ width: `${completionPercent}%` }}
            />
          </div>
          <div className="flex flex-wrap gap-[10px]">
            {progressSections.map((section, index) => (
              <button
                key={section.id}
                onClick={() => onJumpToSection(section.id)}
                className={`flex min-w-[140px] flex-1 items-start gap-[10px] rounded-[12px] border px-[12px] py-[10px] text-left transition-colors ${
                  section.isCurrent
                    ? "border-primary/30 bg-primary/5"
                    : "border-border bg-background hover:bg-muted/60"
                }`}
                type="button"
              >
                <div
                  className={`mt-[2px] flex size-[24px] shrink-0 items-center justify-center rounded-full border text-[11px] font-medium ${
                    section.status === "completed"
                      ? "border-secondary bg-secondary text-secondary-foreground"
                      : section.isCurrent
                        ? "border-primary/40 bg-primary/10 text-primary"
                        : "border-border bg-muted text-muted-foreground"
                  }`}
                >
                  {section.status === "completed" ? (
                    <svg
                      className="size-[12px]"
                      fill="none"
                      viewBox="0 0 12 12"
                    >
                      <path
                        d="M2.5 6.1L4.8 8.4L9.5 3.7"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.8"
                      />
                    </svg>
                  ) : (
                    index + 1
                  )}
                </div>
                <div className="min-w-0">
                  <p className="font-['Lexend',sans-serif] text-[var(--text-sm)] font-[var(--font-weight-medium)] leading-[20px] text-foreground">
                    {section.title}
                  </p>
                  <p className="font-['Lexend',sans-serif] text-[var(--text-xs)] leading-[16px] text-muted-foreground">
                    {statusLabelMap[section.status]}
                  </p>
                </div>
              </button>
            ))}
          </div>
          <div className="mt-[12px] rounded-[12px] border border-dashed border-border bg-surface-container px-[14px] py-[12px]">
            <div className="flex items-center justify-between gap-[12px]">
              <div>
                <p className="font-['Lexend',sans-serif] text-[var(--text-sm)] font-[var(--font-weight-medium)] leading-[20px] text-foreground">
                  Review
                </p>
                <p className="font-['Lexend',sans-serif] text-[var(--text-xs)] leading-[16px] text-muted-foreground">
                  Final checks and marketplace confidence before publish.
                </p>
              </div>
              <div
                className={`rounded-full px-[10px] py-[6px] font-['Lexend',sans-serif] text-[var(--text-xs)] font-[var(--font-weight-medium)] tracking-[0.4px] ${statusToneMap[reviewStatus]}`}
              >
                {reviewStatus === "completed"
                  ? "Ready"
                  : statusLabelMap[reviewStatus]}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col px-[12px] py-[0px]">
        <div className="flex flex-col gap-[28px] ml-[0px] mr-[8px] my-[36px] pl-[16px] pr-[4px] py-[8px]">
          <div id="listing-photos" data-step="photos">
            <SectionWrapper section={progressSections[0]}>
              {children.photos}
            </SectionWrapper>
          </div>

          <div id="listing-details" data-step="details">
            <SectionWrapper section={progressSections[1]}>
              {children.itemDetails}
            </SectionWrapper>
          </div>

          <div id="listing-marketplaces" data-step="marketplaces">
            <SectionWrapper section={progressSections[2]}>
              {children.marketplaces}
            </SectionWrapper>
          </div>

          <div
            id="listing-price-shipping"
            data-step="price-shipping"
            className="flex flex-col gap-[28px]"
          >
            <SectionWrapper section={progressSections[3]}>
              {children.pricing}
            </SectionWrapper>
            <div id="listing-shipping-section">
              <SectionWrapper section={progressSections[4]}>
                {children.shipping}
              </SectionWrapper>
            </div>
          </div>

          <div className="rounded-[20px] border border-border bg-surface-container px-[24px] py-[20px]">
            <div className="flex items-start justify-between gap-[16px]">
              <div>
                <p className="font-['Lexend',sans-serif] text-[var(--text-xs)] font-[var(--font-weight-medium)] uppercase tracking-[0.5px] text-muted-foreground">
                  Review & publish
                </p>
                <h2 className="mt-[4px] font-['Lexend',sans-serif] text-[var(--text-h4)] leading-[28px] text-foreground">
                  Get ready for your final check
                </h2>
                <p className="mt-[4px] font-['Lexend',sans-serif] text-[var(--text-sm)] leading-[20px] text-muted-foreground">
                  Once these sections feel complete, head to review for a final
                  pass before publishing.
                </p>
              </div>
              <div
                className={`shrink-0 rounded-full px-[10px] py-[6px] font-['Lexend',sans-serif] text-[var(--text-xs)] font-[var(--font-weight-medium)] tracking-[0.4px] ${nearReview ? "bg-secondary text-secondary-foreground" : "bg-muted text-muted-foreground"}`}
              >
                {nearReview ? "Almost ready" : "Build confidence"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
