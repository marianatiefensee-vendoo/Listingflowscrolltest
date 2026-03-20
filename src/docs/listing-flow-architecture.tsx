/**
 * ============================================================================
 * VENDOO LISTING CREATION FLOW — ARCHITECTURE REFERENCE
 * ============================================================================
 *
 * This file documents the complete data flow, state management, component
 * interfaces, and step sequencing of the current accordion-based listing
 * creation flow. Use this as a blueprint to build a tab-based variation.
 *
 * NOTHING in this file is imported or executed — it's pure reference code.
 * ============================================================================
 */

// ─────────────────────────────────────────────────────────────────────────────
// 1. SHARED TYPES (from /src/app/App.tsx)
// ─────────────────────────────────────────────────────────────────────────────

export interface ItemDetails {
  title: string;
  description: string;
  category: string;
  brand: string;
  condition: string;
  size?: string;
  tags?: string;
  suggestedPrice?: string; // AI-suggested price, e.g. "45.00"
}

export interface Marketplace {
  id: string;       // "ebay" | "mercari" | "depop" | "facebook"
  name: string;     // Display name
  image: string;    // Marketplace logo asset
  connected: boolean;
}

// From /src/utils/geminiApi.ts
export interface ProductAnalysis {
  title: string;
  description: string;
  brand: string;
  category: string;
  suggested_price: string;
  size: string;
  hashtags: string[];
}

export interface ShippingSuggestion {
  tier: "default" | "xs" | "sm" | "md" | "lg" | "xl";
  confidence: "high" | "medium" | "low";
  reasoning: string;
}


// ─────────────────────────────────────────────────────────────────────────────
// 2. THE 5 STEPS — SEQUENCE & DATA FLOW
// ─────────────────────────────────────────────────────────────────────────────
/**
 * Step 1: PHOTOS
 * Step 2: ITEM DETAILS
 * Step 3: MARKETPLACES
 * Step 4: PRICING
 * Step 5: SHIPPING
 *
 * After Step 5 → Review Mode → Publish → Success Page
 *
 * LINEAR PROGRESSION:
 *   Photos ──(photos + AI details)──> Item Details ──> Marketplaces ──> Pricing ──> Shipping ──> Review
 *
 * DATA FLOW DIAGRAM:
 *
 *   PhotosStep
 *     │ onContinue(photos: string[], generatedDetails?: ItemDetails)
 *     │   → sets uploadedPhotos
 *     │   → sets itemDetails (live editable copy)
 *     │   → sets aiGeneratedDetails (IMMUTABLE snapshot from AI — only set once)
 *     │   → sets wasAIGeneratedFromPhotos = true (if AI was used)
 *     │   → auto-sets listingPrice from generatedDetails.suggestedPrice
 *     ▼
 *   ItemDetailsContent
 *     │ initialData = aiGeneratedDetails (immutable AI snapshot, NOT live itemDetails)
 *     │ onDetailsChange(details) → updates itemDetails (live copy)
 *     │ onContinue() → advances to Marketplaces
 *     ▼
 *   MarketplacesContent
 *     │ selectedMarketplaces: string[] (IDs)
 *     │ onMarketplacesChange(ids) → updates selectedMarketplaces
 *     │ onContinue() → advances to Pricing
 *     ▼
 *   PricingContent
 *     │ isAIGenerated = wasAIGeneratedFromPhotos
 *     │ initialPrice = itemDetails?.suggestedPrice (cleaned to number string)
 *     │ onPriceChange(price) → updates listingPrice
 *     │ onContinue() → advances to Shipping
 *     ▼
 *   ShippingContent
 *     │ isAIGenerated = wasAIGeneratedFromPhotos
 *     │ uploadedPhotos = uploadedPhotos (triggers standalone Gemini shipping analysis)
 *     │ onContinue() → enters Review Mode
 *     ▼
 *   Review Mode (ListingSummaryDynamic isReviewMode=true)
 *     │ onPublish() → Success Page
 *     ▼
 *   ListingSuccessPage
 *     │ onListAnother() → resets ALL state
 */


// ─────────────────────────────────────────────────────────────────────────────
// 3. COMPLETE STATE MAP (from App.tsx)
// ─────────────────────────────────────────────────────────────────────────────
/**
 * These are ALL the state variables in App.tsx and what they control:
 *
 * ┌─────────────────────────────────┬──────────────────────────────────────────┐
 * │ State Variable                  │ Purpose                                  │
 * ├─────────────────────────────────┼──────────────────────────────────────────┤
 * │ uploadedPhotos: string[]        │ Base64 photo strings from PhotosStep     │
 * │ itemDetails: ItemDetails|null   │ LIVE editable item details               │
 * │ aiGeneratedDetails: ditto       │ IMMUTABLE AI snapshot (set once)         │
 * │ wasAIGeneratedFromPhotos: bool  │ Whether AI was used in Photos step       │
 * │ selectedMarketplaces: string[]  │ IDs of selected marketplaces             │
 * │ listingPrice: string            │ Current listing price                    │
 * │ shippingCompleted: boolean      │ Whether shipping step was reached        │
 * │ isReviewMode: boolean           │ Whether we're in review mode             │
 * │ isPublished: boolean            │ Whether listing was published            │
 * │ isSideSheetOpen: boolean        │ Marketplace customization side sheet     │
 * │ selectedMarketplaceForEdit: str │ Which marketplace is being edited        │
 * │ isRailExpanded: boolean         │ Navigation rail state                    │
 * ├─────────────────────────────────┼──────────────────────────────────────────┤
 * │ ACCORDION-SPECIFIC (not needed  │ These manage expand/collapse of the      │
 * │ in tab variation):              │ accordion sections. Replace with a       │
 * │                                 │ single `activeTab` state.                │
 * │ shouldExpandItemDetails         │                                          │
 * │ shouldExpandMarketplaces        │                                          │
 * │ shouldExpandPricing             │                                          │
 * │ shouldExpandShipping            │                                          │
 * │ isPhotosCollapsed               │                                          │
 * │ shouldCollapseItemDetails       │                                          │
 * │ shouldCollapseMarketplaces      │                                          │
 * │ shouldCollapsePricing           │                                          │
 * │ shouldCollapseShipping          │                                          │
 * └─────────────────────────────────┴──────────────────────────────────────────┘
 */


// ─────────────────────────────────────────────────────────────────────────────
// 4. COMPONENT INTERFACES (exact props each step expects)
// ─────────────────────────────────────────────────────────────────────────────

/** PHOTOS STEP — /src/app/components/PhotosStep.tsx */
interface PhotosStepProps {
  onContinue: (photos: string[], generatedDetails?: ItemDetails) => void;
  isCollapsed?: boolean;        // accordion-specific — not needed in tabs
  onToggleExpand?: () => void;  // accordion-specific — not needed in tabs
}
/**
 * Internal behavior:
 * - Manages its own `photos: string[]` state (drag-drop + file input)
 * - Max 8 photos, supports JPEG/PNG/SVG
 * - "Generate with AI" button calls `analyzeProductImages()` from geminiApi
 * - On continue: calls `onContinue(photos, generatedDetails)` where
 *   generatedDetails is the AI response mapped to ItemDetails format
 * - Has DndProvider for photo reordering (react-dnd)
 */

/** ITEM DETAILS — /src/app/components/ItemDetailsContent.tsx */
interface ItemDetailsContentProps {
  initialData?: ItemDetails | null;  // IMMUTABLE AI snapshot (aiGeneratedDetails)
  shouldExpand?: boolean;            // accordion-specific
  onExpandChange?: () => void;       // accordion-specific
  onContinue?: () => void;
  onDetailsChange?: (details: ItemDetails) => void;  // fires on every field edit
  shouldCollapse?: boolean;          // accordion-specific
  onCollapseChange?: () => void;     // accordion-specific
  onManualExpand?: () => void;       // accordion-specific
}
/**
 * Internal behavior:
 * - Per-field AI label tracking with dual flags:
 *     is[Field]AIGenerated — currently holds AI content
 *     was[Field]AIGenerated — was AI at some point (shows "Edited" tag)
 *   Fields tracked: Title, Description, Tags, Brand, Category, Size, Condition
 * - Brand dropdown: auto-adds AI-returned brand via useMemo + sessionStorage
 * - Category dropdown: auto-adds AI-returned category via useMemo + sessionStorage
 * - "Item Specifics" sub-section (Size, Condition) is collapsible
 * - Quantity field defaults to "1"
 * - Tags field: comma-separated, shows tag chips
 * - On continue: calls onContinue()
 * - On any field change: calls onDetailsChange(updatedDetails)
 *
 * CRITICAL: initialData must be the IMMUTABLE aiGeneratedDetails, NOT the live
 * itemDetails. This prevents the circular feedback loop where manual edits
 * flow back through initialData and get re-flagged as AI-generated.
 */

/** MARKETPLACES — /src/app/components/MarketplacesContent.tsx */
interface MarketplacesContentProps {
  shouldExpand?: boolean;            // accordion-specific
  onExpandChange?: () => void;       // accordion-specific
  onContinue?: () => void;
  selectedMarketplaces: string[];    // controlled from parent
  onMarketplacesChange: (marketplaces: string[]) => void;
  shouldCollapse?: boolean;          // accordion-specific
  onCollapseChange?: () => void;     // accordion-specific
  onManualExpand?: () => void;       // accordion-specific
}
/**
 * Internal behavior:
 * - Shows 4 marketplace tiles: eBay, Mercari, Depop, Facebook
 * - Each tile is a toggle (click to select/deselect)
 * - Selected marketplaces are controlled by parent via props
 * - On continue: calls onContinue()
 */

/** PRICING — /src/app/components/PricingContent.tsx */
interface PricingContentProps {
  shouldExpand?: boolean;            // accordion-specific
  onExpandChange?: () => void;       // accordion-specific
  onContinue?: () => void;
  onPriceChange?: (price: string) => void;
  isAIGenerated?: boolean;           // wasAIGeneratedFromPhotos
  initialPrice?: string;             // cleaned suggestedPrice number string
  shouldCollapse?: boolean;          // accordion-specific
  onCollapseChange?: () => void;     // accordion-specific
  onManualExpand?: () => void;       // accordion-specific
}
/**
 * Internal behavior:
 * - Price input field
 * - If AI-generated: shows "AI Generated" tag, "Recommended Range" (+-15% of AI price)
 * - Tag logic: "AI Generated" → "Edited" on manual change → nothing if AI never used
 * - On price change: calls onPriceChange(price)
 * - On continue: calls onContinue()
 */

/** SHIPPING — /src/app/components/ShippingContent.tsx */
interface ShippingContentProps {
  shouldExpand?: boolean;            // accordion-specific
  onExpandChange?: () => void;       // accordion-specific
  onContinue?: () => void;
  isAIGenerated?: boolean;           // wasAIGeneratedFromPhotos
  shouldCollapse?: boolean;          // accordion-specific
  onCollapseChange?: () => void;     // accordion-specific
  onManualExpand?: () => void;       // accordion-specific
  uploadedPhotos?: string[];         // triggers standalone Gemini shipping analysis
}
/**
 * Internal behavior:
 * - Shipping tier dropdown (XS → XL + Default)
 * - Standalone Gemini shipping analysis: runs `analyzeShippingSize()` when
 *   photos are available, independently from the main AI generation
 * - Auto-preselects tier if Gemini confidence is high/medium
 * - Tag logic: "AI Suggested" / "Edited" / nothing
 * - Button text: "Continue to Publish"
 * - On continue: calls onContinue() → enters Review Mode
 */


// ─────────────────────────────────────────────────────────────────────────────
// 5. SIDEBAR & OVERLAYS
// ─────────────────────────────────────────────────────────────────────────────

/** LISTING SUMMARY (Right Sidebar) — /src/app/components/ListingSummaryDynamic.tsx */
interface ListingSummaryDynamicProps {
  selectedMarketplaceIds: string[];
  onSelectMarketplaces?: () => void;       // navigates to Marketplaces step
  onEditMarketplace?: (marketplaceId: string) => void;  // opens side sheet
  photos?: string[];
  itemDetails?: {
    title: string;
    description?: string;
    category?: string;
    brand: string;
    condition: string;
    size?: string;
    tags?: string;
  } | null;
  price?: string;
  shippingCompleted?: boolean;
  onPublish?: () => void;
  isReviewMode?: boolean;                  // switches between sidebar and full-width review
}
/**
 * Has two layouts:
 * - Default (sidebar): sticky progress bar + listing preview + marketplace tiles
 * - Review mode: full-width with expanded detail fields + publish button
 * - Progress: 5 sections, each = 20%. Uses boolean checks for each section.
 * - Marketplace tiles have click-to-edit → opens MarketplaceSideSheet
 * - Marketplace attention pulse animation triggers when marketplaces first selected
 */

/** MARKETPLACE SIDE SHEET — /src/app/components/MarketplaceSideSheet.tsx */
interface MarketplaceSideSheetProps {
  isOpen: boolean;
  onClose: () => void;
  marketplaces: Marketplace[];
  selectedMarketplaceId?: string;
  hasItemDetails?: boolean;
  hasPricing?: boolean;
  hasShipping?: boolean;
  itemDetails?: any;
  basePrice?: string;
}
/**
 * Overlay side panel for per-marketplace customization.
 * Has internal tabs: Item Details, Pricing, Shipping, Optional.
 * Each tab shows base listing values with ability to override per-marketplace.
 */

/** SUCCESS PAGE — /src/app/components/ListingSuccessPage.tsx */
interface ListingSuccessPageProps {
  photos: string[];
  itemDetails: ItemDetails | null;
  price: string;
  selectedMarketplaceIds: string[];
  onListAnother: () => void;
  onGoToInventory: () => void;
}


// ─────────────────────────────────────────────────────────────────────────────
// 6. AI INTEGRATION DETAILS
// ─────────────────────────────────────────────────────────────────────────────
/**
 * API: Google Gemini 2.5 Flash Lite on v1beta endpoint
 * File: /src/utils/geminiApi.ts
 *
 * Two independent AI calls:
 *
 * A) FULL PRODUCT ANALYSIS (triggered in PhotosStep)
 *    Function: analyzeProductImages(base64Images) → ProductAnalysis | null
 *    - Sends first photo to Gemini
 *    - Returns: title, description, brand, category, suggested_price, size, hashtags
 *    - Response mapped to ItemDetails in PhotosStep before passing to App
 *    - Mapping: hashtags → tags (joined with ", "), suggested_price → suggestedPrice
 *
 * B) SHIPPING SIZE ANALYSIS (triggered in ShippingContent)
 *    Function: analyzeShippingSize(base64Data) → ShippingSuggestion | null
 *    - Runs independently when uploadedPhotos are available
 *    - Returns: tier, confidence, reasoning
 *    - Auto-preselects dropdown if confidence is high/medium
 *
 * AI LABEL TRACKING PATTERN (used in ItemDetailsContent and PricingContent):
 *
 *   For each field:
 *     is[Field]AIGenerated: boolean — true while field still holds AI content
 *     was[Field]AIGenerated: boolean — true if field was ever AI-generated
 *
 *   Display logic:
 *     isAIGenerated && wasAIGenerated → show "AI Generated" badge
 *     !isAIGenerated && wasAIGenerated → show "Edited" badge
 *     !wasAIGenerated → show nothing
 *
 *   On manual edit: set is[Field]AIGenerated = false (was stays true)
 *   On AI response: set both is and was = true
 *
 * THE CIRCULAR DEPENDENCY FIX:
 *   App.tsx holds TWO separate copies of item details:
 *   1. `aiGeneratedDetails` — set ONCE from handleContinueFromPhotos, never updated
 *   2. `itemDetails` — live copy updated by onDetailsChange
 *   
 *   ItemDetailsContent receives `initialData = aiGeneratedDetails` (immutable)
 *   and reports edits via `onDetailsChange` → `itemDetails` (mutable)
 *   
 *   This ensures manual edits don't flow back into initialData and get
 *   re-flagged as AI-generated.
 */


// ─────────────────────────────────────────────────────────────────────────────
// 7. STEP TRANSITION HANDLERS (from App.tsx)
// ─────────────────────────────────────────────────────────────────────────────
/**
 * In the accordion flow, each "Continue" handler:
 *   1. Collapses all sections except the next one
 *   2. Expands the next section
 *
 * In a TAB flow, each "Continue" handler should:
 *   1. Set activeTab to the next step
 *   2. Optionally mark the current step as "completed"
 *
 * handleContinueFromPhotos(photos, generatedDetails):
 *   → setUploadedPhotos(photos)
 *   → if generatedDetails: setItemDetails, setAiGeneratedDetails, setWasAIGeneratedFromPhotos
 *   → auto-set listingPrice from suggestedPrice
 *   → ADVANCE TO: Item Details
 *
 * handleContinueFromItemDetails():
 *   → ADVANCE TO: Marketplaces
 *
 * handleContinueFromMarketplaces():
 *   → ADVANCE TO: Pricing
 *
 * handleContinueFromPricing():
 *   → setShippingCompleted(true)
 *   → ADVANCE TO: Shipping
 *
 * handleContinueFromShipping():
 *   → setShippingCompleted(true)
 *   → ENTER REVIEW MODE
 *
 * handlePublish():
 *   → setIsPublished(true)
 *   → SHOW SUCCESS PAGE
 *
 * handleListAnother():
 *   → RESET ALL STATE to initial values
 *   → RETURN TO: Photos step
 */


// ─────────────────────────────────────────────────────────────────────────────
// 8. TAB VARIATION BLUEPRINT — STARTER CODE
// ─────────────────────────────────────────────────────────────────────────────
/**
 * Below is starter code for a tab-based variation. The key differences from
 * the accordion flow:
 *
 * - Replace expand/collapse states with a single `activeTab` number (0-4)
 * - Replace the accordion layout (CreateItemLayout) with a horizontal tab bar
 * - Each step component renders WITHOUT its own header/badge — the tab bar
 *   handles navigation and step indication
 * - Steps can still internally manage their own form state
 * - The "Continue" buttons advance `activeTab` instead of expanding sections
 * - Tab bar shows step completion status
 * - Users CAN click previous tabs to go back (but not forward past completed)
 */

import { useState } from "react";

// ── Step definition ──
type StepId = "photos" | "itemDetails" | "marketplaces" | "pricing" | "shipping";

interface StepConfig {
  id: StepId;
  label: string;
  number: number;
}

const STEPS: StepConfig[] = [
  { id: "photos",       label: "Photos",       number: 1 },
  { id: "itemDetails",  label: "Item Details",  number: 2 },
  { id: "marketplaces", label: "Marketplaces",  number: 3 },
  { id: "pricing",      label: "Pricing",       number: 4 },
  { id: "shipping",     label: "Shipping",      number: 5 },
];

/**
 * TAB-BASED LISTING FLOW — App-level orchestrator
 *
 * This replaces the accordion-specific expand/collapse states with a single
 * activeStep index and a completedSteps set.
 */
function TabbedListingFlow_Blueprint() {
  // ── Navigation state (replaces all expand/collapse states) ──
  const [activeStep, setActiveStep] = useState(0); // 0-4 index into STEPS
  const [completedSteps, setCompletedSteps] = useState<Set<number>>(new Set());

  // ── Shared listing data (IDENTICAL to accordion flow) ──
  const [uploadedPhotos, setUploadedPhotos] = useState<string[]>([]);
  const [itemDetails, setItemDetails] = useState<ItemDetails | null>(null);
  const [aiGeneratedDetails, setAiGeneratedDetails] = useState<ItemDetails | null>(null);
  const [wasAIGeneratedFromPhotos, setWasAIGeneratedFromPhotos] = useState(false);
  const [selectedMarketplaces, setSelectedMarketplaces] = useState<string[]>([]);
  const [listingPrice, setListingPrice] = useState("");
  const [shippingCompleted, setShippingCompleted] = useState(false);
  const [isReviewMode, setIsReviewMode] = useState(false);
  const [isPublished, setIsPublished] = useState(false);

  // ── Side sheet state (IDENTICAL) ──
  const [isSideSheetOpen, setIsSideSheetOpen] = useState(false);
  const [selectedMarketplaceForEdit, setSelectedMarketplaceForEdit] = useState<
    string | undefined
  >();

  // ── Step completion helper ──
  const markCompleted = (stepIndex: number) => {
    setCompletedSteps((prev) => new Set(prev).add(stepIndex));
  };

  // ── Can the user navigate to a given step? ──
  // Rule: can go to any completed step, the current step, or the next uncompleted step
  const canNavigateTo = (stepIndex: number): boolean => {
    if (stepIndex <= activeStep) return true; // can always go back
    if (completedSteps.has(stepIndex - 1)) return true; // previous step completed
    return false;
  };

  // ── Transition handlers (same data logic, simplified navigation) ──

  const handleContinueFromPhotos = (photos: string[], generatedDetails?: ItemDetails) => {
    setUploadedPhotos(photos);
    if (generatedDetails) {
      setItemDetails(generatedDetails);
      setAiGeneratedDetails(generatedDetails); // immutable snapshot
      setWasAIGeneratedFromPhotos(true);
      const cleanPrice = generatedDetails.suggestedPrice?.replace(/[^0-9.]/g, "") || "";
      if (cleanPrice) setListingPrice(cleanPrice);
    }
    markCompleted(0);
    setActiveStep(1); // → Item Details
  };

  const handleContinueFromItemDetails = () => {
    markCompleted(1);
    setActiveStep(2); // → Marketplaces
  };

  const handleContinueFromMarketplaces = () => {
    markCompleted(2);
    setActiveStep(3); // → Pricing
  };

  const handleContinueFromPricing = () => {
    markCompleted(3);
    setShippingCompleted(true);
    setActiveStep(4); // → Shipping
  };

  const handleContinueFromShipping = () => {
    markCompleted(4);
    setShippingCompleted(true);
    setIsReviewMode(true); // → Review
  };

  const handlePublish = () => {
    setIsPublished(true);
    setIsReviewMode(false);
  };

  const handleListAnother = () => {
    setIsPublished(false);
    setIsReviewMode(false);
    setUploadedPhotos([]);
    setItemDetails(null);
    setAiGeneratedDetails(null);
    setSelectedMarketplaces([]);
    setListingPrice("");
    setShippingCompleted(false);
    setWasAIGeneratedFromPhotos(false);
    setActiveStep(0);
    setCompletedSteps(new Set());
  };

  // ── Render ──
  // This is a structural skeleton — adapt styling to your design system

  return (
    <div className="flex h-screen w-screen min-w-[1280px] flex-col">
      {/* Header — same as accordion flow */}
      {/* <Header /> */}

      <div className="flex flex-1 overflow-hidden">
        {/* Navigation Rail — same as accordion flow */}
        {/* <NavigationRail /> */}

        {/* Main content area */}
        <div className="flex-1 flex gap-0 border border-[var(--border)] rounded-[var(--radius-lg)]">

          {/* Left Panel — Tab navigation + step content */}
          <div className="flex-1 min-w-0 flex flex-col">

            {/* ── TAB BAR (replaces accordion headers) ── */}
            <div className="sticky top-0 z-10 bg-[var(--muted)] border-b border-[var(--border)] px-[24px]">
              <div className="flex gap-0">
                {STEPS.map((step, index) => {
                  const isActive = activeStep === index;
                  const isCompleted = completedSteps.has(index);
                  const isClickable = canNavigateTo(index);

                  return (
                    <button
                      key={step.id}
                      onClick={() => isClickable && setActiveStep(index)}
                      disabled={!isClickable}
                      className={[
                        "flex items-center gap-[8px] px-[20px] py-[16px] relative",
                        "font-['Lexend:Regular',sans-serif] font-normal text-[14px] tracking-[0.25px]",
                        "transition-colors border-b-2",
                        isActive
                          ? "border-[var(--primary)] text-[var(--foreground)]"
                          : isCompleted
                            ? "border-transparent text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
                            : "border-transparent text-[var(--muted-foreground)] opacity-50 cursor-not-allowed",
                      ].join(" ")}
                    >
                      {/* Step number badge */}
                      <div
                        className={[
                          "flex items-center justify-center size-[24px] rounded-full text-[12px]",
                          "font-['Lexend:Regular',sans-serif]",
                          isActive
                            ? "bg-[#64539b] text-white"
                            : isCompleted
                              ? "bg-[#C3B0FF] text-[#503F86]"
                              : "bg-[var(--muted)] text-[var(--muted-foreground)] border border-[var(--border)]",
                        ].join(" ")}
                      >
                        {isCompleted && !isActive ? (
                          // Checkmark for completed steps
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <path d="M2 6L5 9L10 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        ) : (
                          step.number
                        )}
                      </div>
                      {step.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* ── STEP CONTENT (one visible at a time) ── */}
            <div className="flex-1 overflow-y-auto p-[24px]">
              {/*
                IMPORTANT: Each step component is rendered the SAME WAY as the
                accordion flow, but WITHOUT the accordion-specific props
                (shouldExpand, shouldCollapse, onManualExpand, etc.)

                For the tab variation, you have two options:

                OPTION A — Strip accordion props:
                  Create tab-specific wrapper components that render the step
                  content without the expand/collapse chrome. Each step's
                  internal form logic stays identical.

                OPTION B — Always-expanded mode:
                  Pass shouldExpand={true} and never pass shouldCollapse to each
                  step component. They'll render in their expanded state with
                  their existing section headers. Quick way to reuse as-is.
              */}

              {activeStep === 0 && (
                // PhotosStep — renders its own upload UI
                // <PhotosStep onContinue={handleContinueFromPhotos} />
                <div>
                  {/* PhotosStep goes here */}
                  {/* Props: onContinue={handleContinueFromPhotos} */}
                  {/* No isCollapsed/onToggleExpand needed in tab mode */}
                </div>
              )}

              {activeStep === 1 && (
                // ItemDetailsContent — form fields for item details
                // <ItemDetailsContent
                //   initialData={aiGeneratedDetails}    ← IMMUTABLE AI snapshot
                //   onContinue={handleContinueFromItemDetails}
                //   onDetailsChange={setItemDetails}    ← live updates
                // />
                <div>
                  {/* ItemDetailsContent goes here */}
                  {/* CRITICAL: initialData must be aiGeneratedDetails, NOT itemDetails */}
                </div>
              )}

              {activeStep === 2 && (
                // MarketplacesContent — marketplace selection tiles
                // <MarketplacesContent
                //   selectedMarketplaces={selectedMarketplaces}
                //   onMarketplacesChange={setSelectedMarketplaces}
                //   onContinue={handleContinueFromMarketplaces}
                // />
                <div>
                  {/* MarketplacesContent goes here */}
                </div>
              )}

              {activeStep === 3 && (
                // PricingContent — price input + AI recommendation
                // <PricingContent
                //   isAIGenerated={wasAIGeneratedFromPhotos}
                //   initialPrice={itemDetails?.suggestedPrice?.replace(/[^0-9.]/g, '')}
                //   onPriceChange={setListingPrice}
                //   onContinue={handleContinueFromPricing}
                // />
                <div>
                  {/* PricingContent goes here */}
                </div>
              )}

              {activeStep === 4 && (
                // ShippingContent — shipping tier + AI suggestion
                // <ShippingContent
                //   isAIGenerated={wasAIGeneratedFromPhotos}
                //   uploadedPhotos={uploadedPhotos}
                //   onContinue={handleContinueFromShipping}
                // />
                <div>
                  {/* ShippingContent goes here */}
                </div>
              )}
            </div>
          </div>

          {/* Vertical Divider */}
          <div className="w-[1px] bg-[var(--border)]" />

          {/* Right Panel — Listing Summary (IDENTICAL to accordion flow) */}
          <div className="w-[320px] bg-[var(--background)] shrink-0">
            {/*
              <ListingSummaryDynamic
                selectedMarketplaceIds={selectedMarketplaces}
                onSelectMarketplaces={() => setActiveStep(2)}  ← jump to Marketplaces tab
                onEditMarketplace={(id) => { setSelectedMarketplaceForEdit(id); setIsSideSheetOpen(true); }}
                photos={uploadedPhotos}
                itemDetails={itemDetails}
                price={listingPrice}
                shippingCompleted={shippingCompleted}
                onPublish={handlePublish}
              />
            */}
          </div>
        </div>
      </div>

      {/* Marketplace Side Sheet (IDENTICAL) */}
      {/*
        <MarketplaceSideSheet
          isOpen={isSideSheetOpen}
          onClose={() => { setIsSideSheetOpen(false); setSelectedMarketplaceForEdit(undefined); }}
          marketplaces={selectedMarketplacesData}
          selectedMarketplaceId={selectedMarketplaceForEdit}
          hasItemDetails={!!itemDetails}
          hasPricing={!!listingPrice}
          hasShipping={shippingCompleted}
          itemDetails={itemDetails}
          basePrice={listingPrice}
        />
      */}
    </div>
  );
}


// ─────────────────────────────────────────────────────────────────────────────
// 9. KEY ADAPTATION NOTES
// ─────────────────────────────────────────────────────────────────────────────
/**
 * WHAT STAYS THE SAME:
 * ─────────────────────
 * - All shared state variables (uploadedPhotos, itemDetails, aiGeneratedDetails, etc.)
 * - The data flow between steps (onContinue callbacks, onDetailsChange, etc.)
 * - AI integration (Gemini API calls, label tracking, dual-flag pattern)
 * - The circular dependency fix (aiGeneratedDetails vs itemDetails)
 * - ListingSummaryDynamic (right sidebar) — works identically
 * - MarketplaceSideSheet — works identically
 * - ListingSuccessPage — works identically
 * - Review mode — works identically
 *
 * WHAT CHANGES:
 * ─────────────────────
 * - Navigation: single `activeStep` + `completedSteps` replaces 10+ expand/collapse states
 * - Layout: horizontal tab bar replaces accordion sections
 * - CreateItemLayout: replaced by a simpler TabLayout component
 * - collapseAllExcept(): removed entirely — not needed with tabs
 * - Step components: can reuse as-is (Option B) or strip accordion chrome (Option A)
 *
 * OPTION A — CLEAN TAB COMPONENTS (recommended for production):
 *   Create new wrappers like PhotosTabContent, ItemDetailsTabContent, etc.
 *   that render only the form content from each step, without the
 *   expand/collapse header, badges, and dividers. The tab bar provides
 *   all navigation UI.
 *
 * OPTION B — QUICK REUSE (good for prototyping):
 *   Render existing step components with shouldExpand={true} and
 *   never pass shouldCollapse. They'll stay in expanded state.
 *   The accordion headers will still show but won't collapse.
 *   You can hide them with CSS if needed.
 *
 * PROGRESS TRACKING:
 *   In the accordion flow, progress is calculated by checking each section's
 *   completion boolean in ListingSummaryDynamic. This works identically
 *   in the tab flow — the same boolean checks apply.
 *
 * NAVIGATION RULES:
 *   - Users can always click back to completed steps
 *   - Users cannot skip ahead past the first uncompleted step
 *   - The "Continue" button in each step advances to the next tab
 *   - The tab bar visually shows completed/active/locked states
 *
 * DESIGN SYSTEM COMPLIANCE:
 *   All text should use font-['Lexend:Regular',sans-serif] or
 *   font-['Lexend:Medium',sans-serif]. Colors should use CSS variables
 *   from /src/styles/theme.css (e.g. var(--primary), var(--foreground),
 *   var(--muted-foreground), var(--border), etc.)
 */


// ─────────────────────────────────────────────────────────────────────────────
// 10. FILE MAP — WHERE EVERYTHING LIVES
// ─────────────────────────────────────────────────────────────────────────────
/**
 * /src/app/App.tsx                          — Main orchestrator, all shared state
 * /src/app/components/PhotosStep.tsx        — Step 1: Photo upload + AI generation
 * /src/app/components/ItemDetailsContent.tsx — Step 2: Item detail fields + AI labels
 * /src/app/components/MarketplacesContent.tsx— Step 3: Marketplace selection tiles
 * /src/app/components/PricingContent.tsx     — Step 4: Price input + AI recommendation
 * /src/app/components/ShippingContent.tsx    — Step 5: Shipping tier + AI suggestion
 * /src/app/components/CreateItemLayout.tsx   — Accordion layout wrapper (replace in tabs)
 * /src/app/components/ListingSummaryDynamic.tsx — Right sidebar listing preview
 * /src/app/components/MarketplaceSideSheet.tsx  — Marketplace customization overlay
 * /src/app/components/MarketplaceTabContents.tsx — Tab content inside side sheet
 * /src/app/components/ListingSuccessPage.tsx — Post-publish success screen
 * /src/app/components/Dropdown.tsx           — Shared dropdown component
 * /src/app/components/NavigationRail.tsx     — Left nav sidebar
 * /src/utils/geminiApi.ts                   — Gemini API integration
 * /src/styles/theme.css                     — Design system CSS variables
 * /src/styles/fonts.css                     — Font face definitions
 * /src/imports/Header.tsx                   — Top header bar
 */
