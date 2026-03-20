import { useEffect, useRef, useCallback } from "react";
import { useNavigate, useLocation } from "react-router";

// Maps section keys to route segments
const SECTION_ROUTE_MAP: Record<string, string> = {
  photos: "photos",
  details: "details",
  marketplaces: "marketplaces",
  "price-shipping": "price-shipping",
};

// Maps route segments back to section data-step values
const ROUTE_TO_STEP: Record<string, string> = {
  photos: "photos",
  details: "details",
  marketplaces: "marketplaces",
  "price-shipping": "price-shipping",
};

// Section data-step values ordered by position in the flow
const SECTION_ORDER = ["photos", "details", "marketplaces", "price-shipping"];

interface UseListingRouteSyncOptions {
  isReviewMode: boolean;
  isPublished: boolean;
  isSideSheetOpen: boolean;
  selectedMarketplaceForEdit?: string;
  scrollContainerRef: React.RefObject<HTMLDivElement | null>;
  onRestoreState: (state: {
    step?: string;
    isReview?: boolean;
    isPublished?: boolean;
    marketplaceCustomization?: string;
  }) => void;
}

export function useListingRouteSync({
  isReviewMode,
  isPublished,
  isSideSheetOpen,
  selectedMarketplaceForEdit,
  scrollContainerRef,
  onRestoreState,
}: UseListingRouteSyncOptions) {
  const navigate = useNavigate();
  const location = useLocation();
  const isInitialMount = useRef(true);
  const isRestoringFromUrl = useRef(false);
  const lastPushedPath = useRef("");
  const scrollObserverActive = useRef(true);

  // Helper to build the full route path
  const buildPath = useCallback((segment: string) => {
    return `/scroll/listing/${segment}`;
  }, []);

  // Navigate without triggering scroll observer feedback loop
  const navigateTo = useCallback(
    (segment: string, replace = false) => {
      const fullPath = buildPath(segment);
      if (fullPath === lastPushedPath.current) return;
      lastPushedPath.current = fullPath;
      scrollObserverActive.current = false;
      navigate(fullPath, { replace });
      // Re-enable scroll observer after a brief delay
      setTimeout(() => {
        scrollObserverActive.current = true;
      }, 300);
    },
    [navigate, buildPath]
  );

  // ── Deep linking: restore state from URL on initial mount ──
  useEffect(() => {
    if (!isInitialMount.current) return;
    isInitialMount.current = false;

    const path = location.pathname;
    const segments = path.replace("/scroll/listing/", "").split("/");
    const firstSegment = segments[0];

    if (firstSegment === "success") {
      isRestoringFromUrl.current = true;
      onRestoreState({ isPublished: true });
      lastPushedPath.current = path;
      return;
    }

    if (firstSegment === "publish") {
      isRestoringFromUrl.current = true;
      onRestoreState({ isReview: true });
      lastPushedPath.current = path;
      return;
    }

    if (firstSegment === "review") {
      isRestoringFromUrl.current = true;
      const marketplace = segments[1];
      onRestoreState({
        isReview: true,
        marketplaceCustomization: marketplace,
      });
      lastPushedPath.current = path;
      return;
    }

    if (ROUTE_TO_STEP[firstSegment]) {
      isRestoringFromUrl.current = true;
      onRestoreState({ step: ROUTE_TO_STEP[firstSegment] });
      lastPushedPath.current = path;
      return;
    }

    // Default to photos
    lastPushedPath.current = buildPath("photos");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ── Sync major state changes → URL ──

  // Success state
  useEffect(() => {
    if (isInitialMount.current || isRestoringFromUrl.current) {
      isRestoringFromUrl.current = false;
      return;
    }
    if (isPublished) {
      navigateTo("success");
    }
  }, [isPublished, navigateTo]);

  // Review mode (with optional marketplace customization)
  useEffect(() => {
    if (isInitialMount.current) return;
    if (isPublished) return; // success takes priority

    if (isReviewMode) {
      if (isSideSheetOpen && selectedMarketplaceForEdit) {
        navigateTo(`review/${selectedMarketplaceForEdit}`);
      } else {
        navigateTo("review");
      }
    }
  }, [
    isReviewMode,
    isSideSheetOpen,
    selectedMarketplaceForEdit,
    isPublished,
    navigateTo,
  ]);

  // Side sheet open/close in review mode
  useEffect(() => {
    if (!isReviewMode || isPublished) return;

    if (isSideSheetOpen && selectedMarketplaceForEdit) {
      navigateTo(`review/${selectedMarketplaceForEdit}`);
    } else if (!isSideSheetOpen) {
      navigateTo("review");
    }
  }, [
    isSideSheetOpen,
    selectedMarketplaceForEdit,
    isReviewMode,
    isPublished,
    navigateTo,
  ]);

  // ── Scroll-aware routing (edit mode only) ──
  useEffect(() => {
    if (isReviewMode || isPublished) return;

    const container = scrollContainerRef.current;
    if (!container) return;

    const sectionElements: HTMLElement[] = [];
    for (const step of SECTION_ORDER) {
      const el = container.querySelector(
        `[data-step="${step}"]`
      ) as HTMLElement | null;
      if (el) sectionElements.push(el);
    }

    if (sectionElements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (!scrollObserverActive.current) return;

        // Find the most visible section
        let bestEntry: IntersectionObserverEntry | null = null;
        let bestRatio = 0;

        for (const entry of entries) {
          if (
            entry.isIntersecting &&
            entry.intersectionRatio > bestRatio
          ) {
            bestRatio = entry.intersectionRatio;
            bestEntry = entry;
          }
        }

        if (bestEntry) {
          const step = (bestEntry.target as HTMLElement).dataset.step;
          if (step && SECTION_ROUTE_MAP[step]) {
            navigateTo(SECTION_ROUTE_MAP[step], true); // replace to avoid polluting history
          }
        }
      },
      {
        root: container,
        threshold: [0.1, 0.3, 0.5, 0.7],
        rootMargin: "-10% 0px -60% 0px", // bias toward sections near the top
      }
    );

    for (const el of sectionElements) {
      observer.observe(el);
    }

    return () => observer.disconnect();
  }, [isReviewMode, isPublished, scrollContainerRef, navigateTo]);

  // ── Browser back/forward support ──
  useEffect(() => {
    const path = location.pathname;
    if (path === lastPushedPath.current) return;
    lastPushedPath.current = path;

    const segments = path.replace("/scroll/listing/", "").split("/");
    const firstSegment = segments[0];

    if (firstSegment === "success" && !isPublished) {
      onRestoreState({ isPublished: true });
      return;
    }

    if (firstSegment === "review" && !isReviewMode) {
      const marketplace = segments[1];
      onRestoreState({
        isReview: true,
        marketplaceCustomization: marketplace,
      });
      return;
    }

    if (
      ROUTE_TO_STEP[firstSegment] &&
      (isReviewMode || isPublished)
    ) {
      onRestoreState({
        step: ROUTE_TO_STEP[firstSegment],
        isReview: false,
        isPublished: false,
      });
      return;
    }

    // Scroll to section if in edit mode
    if (ROUTE_TO_STEP[firstSegment] && !isReviewMode && !isPublished) {
      const container = scrollContainerRef.current;
      if (container) {
        const el = container.querySelector(
          `[data-step="${ROUTE_TO_STEP[firstSegment]}"]`
        );
        if (el) {
          scrollObserverActive.current = false;
          el.scrollIntoView({ behavior: "smooth", block: "start" });
          setTimeout(() => {
            scrollObserverActive.current = true;
          }, 600);
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  // ── Programmatic navigation helpers for edit mode sections ──
  const navigateToSection = useCallback(
    (step: string) => {
      const route = SECTION_ROUTE_MAP[step];
      if (route) {
        navigateTo(route);
      }
    },
    [navigateTo]
  );

  const navigateToReview = useCallback(() => {
    navigateTo("review");
  }, [navigateTo]);

  const navigateToPublish = useCallback(() => {
    navigateTo("publish");
  }, [navigateTo]);

  const navigateToSuccess = useCallback(() => {
    navigateTo("success");
  }, [navigateTo]);

  const navigateToPhotos = useCallback(() => {
    navigateTo("photos");
  }, [navigateTo]);

  return {
    navigateToSection,
    navigateToReview,
    navigateToPublish,
    navigateToSuccess,
    navigateToPhotos,
  };
}
