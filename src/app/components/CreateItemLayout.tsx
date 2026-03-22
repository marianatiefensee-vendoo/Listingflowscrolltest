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
  activeSectionId?: string;
  activeSectionContext?: string | null;
}

const statusLabelMap: Record<ListingSectionStatus, string> = {
  "not-started": "Not started",
  "in-progress": "Needs attention",
  completed: "Completed",
};

const statusToneMap: Record<ListingSectionStatus, string> = {
  "not-started": "bg-muted text-muted-foreground",
  "in-progress": "bg-amber-100 text-amber-800",
  completed: "bg-secondary text-secondary-foreground",
};

const sectionFrameMap: Record<ListingSectionStatus, string> = {
  "not-started": "border-border bg-background/92",
  "in-progress": "border-amber-200 bg-amber-50/40",
  completed: "border-secondary/40 bg-secondary/10",
};

const chipToneMap: Record<ListingSectionStatus, string> = {
  "not-started": "border-border bg-background text-muted-foreground",
  "in-progress": "border-amber-200 bg-amber-50 text-amber-800",
  completed: "border-secondary/40 bg-secondary/10 text-secondary-foreground",
};

const sectionActionMap: Record<string, string> = {
  photos: "Add or reorder photos",
  itemDetails: "Finish the shared listing fields",
  marketplaces: "Choose destinations and customize later",
  pricing: "Set the listing price",
  shipping: "Confirm the shipping method",
};

function StatusGlyph({ status }: { status: ListingSectionStatus }) {
  if (status === "completed") {
    return (
      <svg className="size-[12px]" fill="none" viewBox="0 0 12 12">
        <path
          d="M2.5 6.1L4.8 8.4L9.5 3.7"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
        />
      </svg>
    );
  }

  if (status === "in-progress") {
    return <span className="block size-[6px] rounded-full bg-current" />;
  }

  return <span className="block size-[8px] rounded-full border border-current/50" />;
}

function getNextInfo(section: ListingSectionMeta) {
  if (section.isCurrent) {
    return "Editing is open below.";
  }

  if (section.status === "completed") {
    return "Ready to reopen if you want to update anything.";
  }

  return sectionActionMap[section.id] ?? "Open this section to continue.";
}

function SectionWrapper({
  section,
  index,
  children,
  activeContext,
}: {
  section: ListingSectionMeta;
  index: number;
  children: ReactNode;
  activeContext?: string | null;
}) {
  const isItemDetailsSection = section.id === "itemDetails";
  const summaryTitle = section.shortTitle ?? section.title;
  const summaryDescription = section.description ?? "Continue editing this section below.";
  const nextInfo = getNextInfo(section);

  return (
    <section className="relative scroll-mt-[230px]">
      <div
        className={`overflow-hidden rounded-[20px] border transition-all duration-200 ${section.isCurrent ? "shadow-[0_14px_38px_rgba(83,77,95,0.14)] ring-2 ring-primary/20" : isItemDetailsSection ? "shadow-[0_8px_24px_rgba(83,77,95,0.07)]" : "shadow-[0_2px_10px_rgba(31,27,36,0.03)]"} ${section.isCurrent ? "border-primary/40 bg-primary/5" : isItemDetailsSection ? "border-primary/20 bg-primary/4" : sectionFrameMap[section.status]}`}
      >
        <div className="relative border-b border-border/60 bg-background/72 px-[20px] py-[18px]">
          <div
            aria-hidden="true"
            className={`absolute inset-x-[20px] bottom-0 h-[1px] ${section.isCurrent ? "bg-primary/20" : section.status === "completed" ? "bg-secondary/20" : "bg-border/80"}`}
          />
          <div className="flex items-start justify-between gap-[16px]">
            <div className="min-w-0 flex-1">
              <div className="mb-[12px] flex flex-wrap items-center gap-[10px]">
                <span className="inline-flex items-center gap-[8px] rounded-full bg-background/90 px-[10px] py-[6px] font-['Lexend',sans-serif] text-[var(--text-xs)] font-[var(--font-weight-medium)] uppercase tracking-[0.5px] text-muted-foreground">
                  <span className="inline-flex size-[18px] items-center justify-center rounded-full border border-border/80 bg-muted/60 text-[11px] text-foreground">
                    {index + 1}
                  </span>
                  Overview
                </span>
                <span className="inline-flex items-center gap-[6px] rounded-full bg-background/90 px-[10px] py-[6px] font-['Lexend',sans-serif] text-[var(--text-xs)] font-[var(--font-weight-medium)] uppercase tracking-[0.5px] text-foreground">
                  {summaryTitle}
                </span>
                <span
                  className={`inline-flex items-center gap-[6px] rounded-full px-[10px] py-[6px] font-['Lexend',sans-serif] text-[var(--text-xs)] font-[var(--font-weight-medium)] tracking-[0.35px] ${statusToneMap[section.status]}`}
                >
                  <StatusGlyph status={section.status} />
                  {statusLabelMap[section.status]}
                </span>
                {isItemDetailsSection && (
                  <span className="inline-flex rounded-full bg-primary/10 px-[10px] py-[6px] font-['Lexend',sans-serif] text-[var(--text-xs)] font-[var(--font-weight-medium)] tracking-[0.35px] text-primary">
                    Base listing
                  </span>
                )}
                {section.isCurrent && (
                  <span className="inline-flex rounded-full bg-primary px-[10px] py-[6px] font-['Lexend',sans-serif] text-[var(--text-xs)] font-[var(--font-weight-medium)] tracking-[0.35px] text-primary-foreground shadow-sm">
                    Editing now
                  </span>
                )}
              </div>

              <div className="grid gap-[14px] lg:grid-cols-[minmax(0,1.5fr)_minmax(240px,0.9fr)] lg:items-start">
                <div className="min-w-0">
                  <h2 className="font-['Lexend',sans-serif] text-[22px] leading-[28px] text-foreground">
                    {section.title}
                  </h2>
                  <p className="mt-[6px] max-w-[720px] font-['Lexend',sans-serif] text-[var(--text-sm)] leading-[20px] text-muted-foreground">
                    {summaryDescription}
                  </p>
                  {section.isCurrent && activeContext && (
                    <p className="mt-[8px] inline-flex rounded-full bg-primary/10 px-[10px] py-[6px] font-['Lexend',sans-serif] text-[11px] font-[var(--font-weight-medium)] leading-[16px] text-primary">
                      {activeContext}
                    </p>
                  )}
                </div>

                <div className={`rounded-[16px] border px-[14px] py-[12px] ${section.isCurrent ? "border-primary/20 bg-primary/6" : section.status === "completed" ? "border-secondary/25 bg-secondary/10" : "border-border/70 bg-background/90"}`}>
                  <p className="font-['Lexend',sans-serif] text-[10px] font-[var(--font-weight-medium)] uppercase tracking-[0.45px] text-muted-foreground">
                    {section.isCurrent ? "Now editing" : "Next"}
                  </p>
                  <p className="mt-[4px] font-['Lexend',sans-serif] text-[var(--text-sm)] font-[var(--font-weight-medium)] leading-[20px] text-foreground">
                    {section.isCurrent
                      ? "This section is active. You can continue, collapse it, or come back here anytime."
                      : nextInfo}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative bg-surface-container/50 px-[14px] pb-[14px] pt-[10px]">
          <div
            aria-hidden="true"
            className={`absolute inset-y-[10px] left-[20px] w-[2px] rounded-full ${section.isCurrent ? "bg-primary" : section.status === "completed" ? "bg-secondary/25" : "bg-border/80"}`}
          />
          <div className="ml-[14px]">
            <div className="mb-[10px] flex items-center gap-[10px] pl-[10px]">
              <span className="font-['Lexend',sans-serif] text-[10px] font-[var(--font-weight-medium)] uppercase tracking-[0.45px] text-muted-foreground">
                Edit section
              </span>
              <div className="h-px flex-1 bg-border/70" />
            </div>
            <div className="relative rounded-[18px] border border-border/60 bg-background/92 p-[4px] shadow-[inset_0_1px_0_rgba(255,255,255,0.45)]">
              {children}
            </div>
          </div>
        </div>
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
  activeSectionId,
  activeSectionContext,
}: CreateItemLayoutProps) {
  const completionPercent = Math.round(
    (completionCount / progressSections.length) * 100,
  );
  const nearReview =
    completionCount >= Math.max(progressSections.length - 1, 1);
  const activeSection =
    progressSections.find((section) => section.id === activeSectionId) ??
    progressSections.find((section) => section.isCurrent);

  return (
    <div className="flex h-full w-full flex-col">
      <div className="sticky top-0 z-10 shrink-0 w-full rounded-tl-[12px] border-b border-border bg-surface-container">
        <div className="content-stretch relative m-[0px] flex w-full flex-col items-start bg-surface-container pl-[12px] pr-[16px] py-[24px]">
          <div className="content-stretch relative flex w-full shrink-0 items-center">
            <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
              <div className="content-stretch relative flex min-h-px min-w-px flex-[1_0_0] items-center">
                <div className="content-stretch relative flex shrink-0 items-center">
                  <button className="relative shrink-0 size-[48px]">
                    <div className="absolute left-[calc(50%-0.5px)] top-1/2 w-[40px] -translate-x-1/2 -translate-y-1/2 overflow-clip rounded-[100px] content-stretch flex flex-col items-center justify-center">
                      <div className="content-stretch relative flex h-[40px] w-full shrink-0 items-center justify-center">
                        <div className="relative shrink-0 size-[24px] overflow-clip">
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
                <div className="min-w-0">
                  <p className="font-['Lexend',sans-serif] font-[var(--font-weight-normal)] leading-[40px] overflow-hidden relative shrink-0 text-foreground text-[var(--text-h2)] text-ellipsis whitespace-nowrap text-[32px]">
                    Create item
                  </p>
                  <p className="font-['Lexend',sans-serif] text-[var(--text-sm)] leading-[20px] text-muted-foreground">
                    Guided progress keeps the full listing flow editable while you scroll.
                  </p>
                </div>
              </div>
            </div>
            <div className="content-stretch relative flex shrink-0 items-center gap-[8px] overflow-clip">
              <button className="bg-background content-stretch relative flex h-[48px] w-[142px] shrink-0 cursor-pointer items-center justify-center rounded-[8px] px-[20px] py-[16px]">
                <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px] border border-border border-solid" />
                <div className="content-stretch relative flex shrink-0 flex-col items-center justify-center rounded-[5px]">
                  <div className="content-stretch relative flex shrink-0 items-center gap-[10px] px-[16px] py-[10px]">
                    <div className="content-stretch relative flex shrink-0 items-center justify-center px-[4px]">
                      <div className="relative shrink-0 flex flex-col justify-center whitespace-nowrap font-['Lexend',sans-serif] text-[var(--text-base)] font-[var(--font-weight-medium)] leading-[0] tracking-[0.15px] text-center text-muted-foreground">
                        <p className="leading-[24px]">Templates</p>
                      </div>
                    </div>
                    <div className="relative h-[26.399px] w-[24px] shrink-0 overflow-clip">
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

        <div className="border-t border-border/80 bg-background/95 px-[28px] py-[18px] backdrop-blur-sm">
          <div className="mb-[16px] flex items-center justify-between gap-[16px]">
            <div>
              <p className="font-['Lexend',sans-serif] text-[var(--text-sm)] font-[var(--font-weight-medium)] leading-[20px] text-foreground">
                Listing progress
              </p>
              <p className="font-['Lexend',sans-serif] text-[var(--text-xs)] leading-[16px] text-muted-foreground">
                {nearReview
                  ? "You’re almost ready to review and publish."
                  : "Jump between sections, keep context, and resolve the next area that needs attention."}
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
          {activeSection && (
            <div className="mb-[16px] flex flex-wrap items-center justify-between gap-[12px] rounded-[16px] border border-primary/15 bg-primary/6 px-[14px] py-[12px]">
              <div>
                <p className="font-['Lexend',sans-serif] text-[10px] font-[var(--font-weight-medium)] uppercase tracking-[0.45px] text-primary">
                  Active section
                </p>
                <p className="mt-[2px] font-['Lexend',sans-serif] text-[var(--text-sm)] font-[var(--font-weight-medium)] leading-[20px] text-foreground">
                  {activeSection.title}
                </p>
              </div>
              <p className="max-w-[440px] font-['Lexend',sans-serif] text-[11px] leading-[16px] text-muted-foreground">
                {activeSectionContext ?? "The open accordion is highlighted below so it is easy to resume editing without losing your place."}
              </p>
            </div>
          )}
          <div className="mb-[16px] h-[6px] overflow-hidden rounded-full bg-muted">
            <div className={`h-full rounded-full transition-all duration-300 ${nearReview ? "bg-secondary" : "bg-primary"}`} style={{ width: `${completionPercent}%` }} />
          </div>
          <div className="flex flex-wrap gap-[10px]">
            {progressSections.map((section, index) => (
              <button
                key={section.id}
                onClick={() => onJumpToSection(section.id)}
                className={`group relative flex min-w-[148px] flex-1 items-start gap-[12px] rounded-[14px] border px-[14px] py-[12px] text-left transition-all duration-200 ${section.isCurrent ? "border-primary/35 bg-primary/8 shadow-[0_4px_18px_rgba(83,77,95,0.10)]" : section.id === "itemDetails" ? "border-primary/20 bg-primary/5 hover:bg-primary/8" : chipToneMap[section.status] + " hover:bg-muted/80"}`}
                type="button"
                aria-current={section.isCurrent ? "step" : undefined}
              >
                <div className={`mt-[1px] flex size-[26px] shrink-0 items-center justify-center rounded-full border text-[11px] font-medium ${section.isCurrent ? "border-primary/40 bg-primary/12 text-primary" : section.status === "completed" ? "border-secondary/40 bg-secondary text-secondary-foreground" : section.status === "in-progress" ? "border-amber-200 bg-amber-100 text-amber-800" : "border-border bg-muted text-muted-foreground"}`}>
                  {section.status === "completed" ? (
                    <svg className="size-[12px]" fill="none" viewBox="0 0 12 12">
                      <path d="M2.5 6.1L4.8 8.4L9.5 3.7" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
                    </svg>
                  ) : (
                    index + 1
                  )}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-[8px]">
                    <p className="font-['Lexend',sans-serif] text-[var(--text-sm)] font-[var(--font-weight-medium)] leading-[20px] text-foreground">
                      {section.title}
                    </p>
                    {section.id === "itemDetails" && !section.isCurrent && (
                      <span className="rounded-full bg-primary/10 px-[8px] py-[4px] font-['Lexend',sans-serif] text-[10px] font-[var(--font-weight-medium)] uppercase tracking-[0.45px] text-primary">
                        Shared listing
                      </span>
                    )}
                    {section.isCurrent && (
                      <span className="rounded-full bg-primary/10 px-[8px] py-[4px] font-['Lexend',sans-serif] text-[10px] font-[var(--font-weight-medium)] uppercase tracking-[0.45px] text-primary">
                        Viewing
                      </span>
                    )}
                  </div>
                  <p className="mt-[2px] font-['Lexend',sans-serif] text-[var(--text-xs)] leading-[16px] text-muted-foreground">
                    {statusLabelMap[section.status]}
                  </p>
                  {section.description && (
                    <p className="mt-[6px] line-clamp-2 font-['Lexend',sans-serif] text-[11px] leading-[16px] text-muted-foreground/90">
                      {section.description}
                    </p>
                  )}
                </div>
                <div className={`absolute inset-x-[14px] bottom-0 h-[2px] rounded-full transition-opacity ${section.isCurrent ? "bg-primary opacity-100" : "bg-transparent opacity-0 group-hover:opacity-100 group-hover:bg-border"}`} />
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
              <div className={`rounded-full px-[10px] py-[6px] font-['Lexend',sans-serif] text-[var(--text-xs)] font-[var(--font-weight-medium)] tracking-[0.4px] ${statusToneMap[reviewStatus]}`}>
                {reviewStatus === "completed" ? "Ready" : statusLabelMap[reviewStatus]}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col px-[12px] py-[0px]">
        <div className="ml-[0px] mr-[8px] my-[36px] flex flex-col gap-[28px] pl-[16px] pr-[4px] py-[8px]">
          <div id="listing-photos" data-step="photos">
            <SectionWrapper section={progressSections[0]} index={0} activeContext={activeSectionId === "photos" ? activeSectionContext : null}>
              {children.photos}
            </SectionWrapper>
          </div>

          <div id="listing-details" data-step="details">
            <SectionWrapper section={progressSections[1]} index={1} activeContext={activeSectionId === "itemDetails" ? activeSectionContext : null}>
              {children.itemDetails}
            </SectionWrapper>
          </div>

          <div id="listing-marketplaces" data-step="marketplaces">
            <SectionWrapper section={progressSections[2]} index={2} activeContext={activeSectionId === "marketplaces" ? activeSectionContext : null}>
              {children.marketplaces}
            </SectionWrapper>
          </div>

          <div id="listing-price-shipping" data-step="price-shipping" className="flex flex-col gap-[28px]">
            <SectionWrapper section={progressSections[3]} index={3} activeContext={activeSectionId === "pricing" ? activeSectionContext : null}>
              {children.pricing}
            </SectionWrapper>
            <div id="listing-shipping-section">
              <SectionWrapper section={progressSections[4]} index={4} activeContext={activeSectionId === "shipping" ? activeSectionContext : null}>
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
                  Once these sections feel complete, head to review for a final pass before publishing.
                </p>
              </div>
              <div className={`shrink-0 rounded-full px-[10px] py-[6px] font-['Lexend',sans-serif] text-[var(--text-xs)] font-[var(--font-weight-medium)] tracking-[0.4px] ${nearReview ? "bg-secondary text-secondary-foreground" : "bg-muted text-muted-foreground"}`}>
                {nearReview ? "Almost ready" : "Build confidence"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
