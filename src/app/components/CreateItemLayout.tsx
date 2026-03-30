import type { ReactNode } from "react";
import svgPaths from "../../imports/svg-wo4tf7tw77";

export type ListingSectionStatus = "not-started" | "in-progress" | "completed";

export interface ListingSectionMeta {
  id: string;
  title: string;
  shortTitle?: string;
  description?: string;
  shortDescription?: string;
  actionLabel?: string;
  connectedLabel?: string;
  sourceOfTruthNote?: string;
  status: ListingSectionStatus;
  isCurrent?: boolean;
  isPublishReady?: boolean;
}

interface CreateItemLayoutProps {
  children: {
    photos: React.ReactNode;
    titleDescription: React.ReactNode;
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
  showShellHeader?: boolean;
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
  titleDescription: "Write the shared title and description",
  itemDetails: "Finish brand, category, size, and condition",
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
  variant = "default",
}: {
  section: ListingSectionMeta;
  index: number;
  children: ReactNode;
  activeContext?: string | null;
  variant?: "default" | "bare";
}) {
  if (variant === "bare") {
    return <section className="relative scroll-mt-[230px]">{children}</section>;
  }

  const isItemDetailsSection = section.id === "itemDetails";
  const summaryTitle = section.shortTitle ?? section.title;
  const summaryDescription = section.description ?? "Continue editing this section below.";
  const summaryFootnote = section.sourceOfTruthNote ?? section.connectedLabel;
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
                  {summaryFootnote && (
                    <p className={`mt-[8px] inline-flex rounded-full px-[10px] py-[6px] font-['Lexend',sans-serif] text-[11px] font-[var(--font-weight-medium)] leading-[16px] ${section.id === "itemDetails" ? "bg-primary/10 text-primary" : "bg-background text-muted-foreground border border-border/70"}`}>
                      {summaryFootnote}
                    </p>
                  )}
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
                      ? "In progress"
                      : nextInfo}
                  </p>
                  {section.actionLabel && (
                    <p className="mt-[6px] font-['Lexend',sans-serif] text-[11px] leading-[16px] text-muted-foreground">
                      {section.actionLabel}
                    </p>
                  )}
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

interface CreateItemShellHeaderProps {
  progressSections: ListingSectionMeta[];
  completionCount: number;
  onJumpToSection: (sectionId: string) => void;
  reviewStatus?: ListingSectionStatus;
  activeSectionId?: string;
  activeSectionContext?: string | null;
  sticky?: boolean;
}

export function CreateItemShellHeader({
  progressSections,
  completionCount,
  onJumpToSection,
  reviewStatus = "not-started",
  activeSectionId,
  activeSectionContext,
  sticky = true,
}: CreateItemShellHeaderProps) {
  const completionPercent = Math.round(
    (completionCount / progressSections.length) * 100,
  );
  const nearReview =
    completionCount >= Math.max(progressSections.length - 1, 1);
  const activeSection =
    progressSections.find((section) => section.id === activeSectionId) ??
    progressSections.find((section) => section.isCurrent);
  const displayStep = Math.min(
    Math.max(completionCount + (completionCount < progressSections.length ? 1 : 0), 1),
    progressSections.length,
  );

  return (
    <div
      className={`${sticky ? "sticky top-0 z-10" : ""} shrink-0 w-full border-b border-border bg-background`}
    >
      <div className="content-stretch relative flex w-full flex-col items-start bg-background px-[20px] pt-[12px]">
        <div className="content-stretch relative flex w-full shrink-0 items-center pb-[12px]">
          <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
            <div className="content-stretch relative flex min-h-px min-w-px flex-[1_0_0] items-center">
              <div className="content-stretch relative flex shrink-0 items-center">
                <button className="relative shrink-0 size-[48px]" type="button">
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
              </div>
            </div>
          </div>
          <div className="content-stretch relative flex shrink-0 items-center gap-[8px] overflow-clip">
            <button className="bg-background content-stretch relative flex h-[48px] w-[142px] shrink-0 cursor-pointer items-center justify-center rounded-[8px] px-[20px] py-[16px]" type="button">
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

      <div className="border-t border-border/80 bg-background px-[20px] py-[12px]">
        <div className="mb-[8px] flex items-center justify-between gap-[16px]">
          <p className="font-['Lexend',sans-serif] text-[var(--text-sm)] leading-[20px] text-muted-foreground">
            Listing Progress
          </p>
          <p className="font-['Lexend',sans-serif] text-[var(--text-xs)] font-[var(--font-weight-medium)] leading-[16px] tracking-[0.5px] text-primary">
            Step {displayStep} of {progressSections.length}
          </p>
        </div>
        <div className="mb-[14px] flex gap-[4px]">
          {progressSections.map((section, index) => {
            const isDone = section.status === "completed";
            const isCurrent = section.isCurrent || section.id === activeSection?.id;
            const fillClass = isDone || index < completionCount
              ? "bg-primary/25"
              : isCurrent
                ? "bg-primary-container"
                : "bg-primary-container/18";

            return (
              <button
                key={section.id}
                onClick={() => onJumpToSection(section.id)}
                type="button"
                className="h-[12px] flex-1 rounded-full transition-colors"
              >
                <span className={`block h-full w-full rounded-full ${fillClass}`} />
              </button>
            );
          })}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-[12px]">
          <div>
            <p className="font-['Lexend',sans-serif] text-[var(--text-xs)] leading-[16px] text-muted-foreground">
              {nearReview
                ? "Almost ready for review."
                : "Open any section to keep going."}
            </p>
            {activeSection && (
              <p className="mt-[2px] font-['Lexend',sans-serif] text-[11px] leading-[16px] text-foreground-dim">
                {activeSection.title}
                {activeSectionContext ? ` · ${activeSectionContext}` : ""}
              </p>
            )}
          </div>
          <div className="flex items-center gap-[8px]">
            <span className="rounded-full bg-muted px-[8px] py-[4px] font-['Lexend',sans-serif] text-[10px] font-[var(--font-weight-medium)] uppercase tracking-[0.45px] text-muted-foreground">
              {completionPercent}% complete
            </span>
            <span className={`rounded-full px-[8px] py-[4px] font-['Lexend',sans-serif] text-[10px] font-[var(--font-weight-medium)] uppercase tracking-[0.45px] ${statusToneMap[reviewStatus]}`}>
              {reviewStatus === "completed" ? "Ready" : statusLabelMap[reviewStatus]}
            </span>
          </div>
        </div>
      </div>
    </div>
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
  showShellHeader = true,
}: CreateItemLayoutProps) {
  const nearReview =
    completionCount >= Math.max(progressSections.length - 1, 1);

  return (
    <div className="flex h-full w-full flex-col">
      {showShellHeader && (
        <CreateItemShellHeader
          progressSections={progressSections}
          completionCount={completionCount}
          onJumpToSection={onJumpToSection}
          reviewStatus={reviewStatus}
          activeSectionId={activeSectionId}
          activeSectionContext={activeSectionContext}
        />
      )}

      <div className="flex flex-col px-[12px] py-[0px]">
        <div className={`ml-[0px] mr-[8px] flex flex-col gap-[28px] pl-[16px] pr-[4px] ${showShellHeader ? "my-[36px] py-[8px]" : "my-[20px] py-[0px]"}`}>
          <div id="listing-photos" data-step="photos">
            <SectionWrapper
              section={progressSections[0]}
              index={0}
              activeContext={activeSectionId === "photos" ? activeSectionContext : null}
              variant="bare"
            >
              {children.photos}
            </SectionWrapper>
          </div>

          <div id="listing-title-description" data-step="details">
            <SectionWrapper
              section={progressSections[1]}
              index={1}
              activeContext={activeSectionId === "titleDescription" ? activeSectionContext : null}
              variant="bare"
            >
              {children.titleDescription}
            </SectionWrapper>
          </div>

          <div id="listing-details" data-step="details">
            <SectionWrapper
              section={progressSections[2]}
              index={2}
              activeContext={activeSectionId === "itemDetails" ? activeSectionContext : null}
              variant="bare"
            >
              {children.itemDetails}
            </SectionWrapper>
          </div>

          <div
            id="listing-marketplaces"
            data-step="marketplaces"
            className="scroll-mt-[230px]"
          >
            {children.marketplaces}
          </div>

          <div id="listing-price-shipping" data-step="price-shipping" className="flex flex-col gap-[28px]">
            <SectionWrapper section={progressSections[4]} index={4} activeContext={activeSectionId === "pricing" ? activeSectionContext : null}>
              {children.pricing}
            </SectionWrapper>
            <div id="listing-shipping-section">
              <SectionWrapper section={progressSections[5]} index={5} activeContext={activeSectionId === "shipping" ? activeSectionContext : null}>
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
                  Review everything before publishing.
                </p>
              </div>
              <div className={`shrink-0 rounded-full px-[10px] py-[6px] font-['Lexend',sans-serif] text-[var(--text-xs)] font-[var(--font-weight-medium)] tracking-[0.4px] ${nearReview ? "bg-secondary text-secondary-foreground" : "bg-muted text-muted-foreground"}`}>
                {nearReview ? "Almost ready" : "Not started"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
