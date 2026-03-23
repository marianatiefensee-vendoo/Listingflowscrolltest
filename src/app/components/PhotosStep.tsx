import { useEffect, useRef, useState } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import IllustrationSvg1 from "../../imports/IllustrationSvg1";
import svgPaths from "../../imports/svg-wo4tf7tw77";
import sparkleSvgPaths from "../../imports/svg-jpw0qaix23";
import editSvgPaths from "../../imports/svg-2jobo4qree";
import chevronSvgPaths from "../../imports/svg-nl9hp3fmvu";
import lightbulbSvgPaths from "../../imports/svg-hty84dsl4r";
import type { ItemDetails } from "../App";
import { analyzeProductImages } from "../../utils/geminiApi";

import { Button } from "./ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";

interface PhotosStepProps {
  onContinue: (photos: string[], generatedDetails?: ItemDetails) => void;
  isCollapsed?: boolean;
  onToggleExpand?: () => void;
  autosaveState?: "idle" | "saving" | "saved";
  initialPhotos?: string[];
}

export default function PhotosStep({ onContinue, isCollapsed = false, onToggleExpand, autosaveState = "idle", initialPhotos = [] }: PhotosStepProps) {
  const [photos, setPhotos] = useState<string[]>(initialPhotos);
  const [isDragging, setIsDragging] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [aiError, setAiError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const MAX_PHOTOS = 8;
  const MIN_VALID_PHOTOS = 1;
  const hasPhotos = photos.length > 0;
  const hasReachedMinimumPhotos = photos.length >= MIN_VALID_PHOTOS;
  const [isDecisionModalOpen, setIsDecisionModalOpen] = useState(false);
  const [hasShownDecisionModal, setHasShownDecisionModal] = useState(false);
  const triggerButtonRef = useRef<HTMLButtonElement>(null);
  const modalPrimaryActionRef = useRef<HTMLButtonElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);

    const files = Array.from(e.dataTransfer.files);
    handleFiles(files);
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      handleFiles(files);
    }
  };

  const handleFiles = (files: File[]) => {
    setUploadError(null);
    setAiError(null);

    const validFiles = files.filter((file) =>
      ["image/jpeg", "image/png", "image/svg+xml"].includes(file.type)
    );

    if (validFiles.length === 0) {
      setUploadError("Upload JPG, PNG, or SVG files so AI can understand the item and buyers can preview it clearly.");
      return;
    }

    const availableSlots = MAX_PHOTOS - photos.length;
    if (validFiles.length > availableSlots) {
      setUploadError(`Only ${availableSlots} more photo${availableSlots === 1 ? "" : "s"} fit in this listing. We kept the first ${availableSlots}.`);
      validFiles.splice(availableSlots);
    }

    validFiles.forEach((file) => {
      if (file.size > 10 * 1024 * 1024) {
        setUploadError(`${file.name} is over the 10MB limit. Choose a smaller image and try again.`);
        return;
      }

      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target?.result) {
          setPhotos((prev) => {
            if (prev.length < MAX_PHOTOS) {
              return [...prev, e.target!.result as string];
            }
            return prev;
          });
        }
      };
      reader.readAsDataURL(file);
    });
  };

  const handleRemovePhoto = (index: number) => {
    setPhotos((prev) => prev.filter((_, i) => i !== index));
  };

  const movePhoto = (fromIndex: number, toIndex: number) => {
    setPhotos((prev) => {
      const newPhotos = [...prev];
      const [movedPhoto] = newPhotos.splice(fromIndex, 1);
      newPhotos.splice(toIndex, 0, movedPhoto);
      return newPhotos;
    });
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleNext = () => {
    if (hasPhotos) {
      onContinue(photos);
    }
  };

  const handleGenerateListing = async () => {
    if (hasPhotos) {
      setIsGenerating(true);
      setAiError(null);
      try {
        const analysis = await analyzeProductImages(photos);
        
        if (analysis) {
          // Convert ProductAnalysis to ItemDetails format — pass ALL AI fields
          const generatedDetails: ItemDetails = {
            title: analysis.title,
            description: analysis.description,
            brand: analysis.brand || "Unbranded",
            category: analysis.category || "Women's Clothing",
            condition: "Like New",
            size: analysis.size || "N/A",
            tags: Array.isArray(analysis.hashtags)
              ? analysis.hashtags.map(t => t.startsWith('#') ? t : `#${t}`).join(' ')
              : "",
            suggestedPrice: analysis.suggested_price || "",
          };

          console.log("✅ Full AI-generated details:", generatedDetails);
          onContinue(photos, generatedDetails);
        } else {
          throw new Error("Failed to analyze product image");
        }
      } catch (error) {
        console.error("Error generating listing:", error);
        setAiError("AI couldn’t finish the draft right now. Your photos are still saved, so you can retry or continue entering details manually.");
        setIsGenerating(false);
      }
    }
  };

  const handleHeaderClick = () => {
    if (isCollapsed && hasPhotos) {
      onToggleExpand?.();
    }
  };

  useEffect(() => {
    setPhotos(initialPhotos);
  }, [initialPhotos]);

  useEffect(() => {
    if (!hasReachedMinimumPhotos) {
      if (photos.length === 0) {
        setHasShownDecisionModal(false);
        setIsDecisionModalOpen(false);
      }
      return;
    }

    if (!hasShownDecisionModal) {
      setHasShownDecisionModal(true);
      setIsDecisionModalOpen(true);
    }
  }, [hasReachedMinimumPhotos, hasShownDecisionModal, photos.length]);

  const handleDecisionModalChange = (open: boolean) => {
    setIsDecisionModalOpen(open);
    if (!open) {
      triggerButtonRef.current?.focus();
    }
  };

  const handleContinueEditingPhotos = () => {
    setIsDecisionModalOpen(false);
    triggerButtonRef.current?.focus();
  };


  const autosaveMessage = autosaveState === "saving"
    ? "Saving your draft…"
    : autosaveState === "saved"
      ? "Draft autosaved on this device."
      : "Start by adding at least one photo.";

  // Create array of 8 tiles
  const tiles = Array.from({ length: MAX_PHOTOS }, (_, index) => {
    if (index < photos.length) {
      return { type: 'photo' as const, photo: photos[index], index };
    }
    return { type: 'add' as const, index };
  });

  const statusCard = (
    <div className="flex w-full flex-col gap-3">
      <div className="rounded-[16px] border border-dashed border-border bg-background px-4 py-3 text-sm text-muted-foreground">
        {hasPhotos
          ? `${photos.length} photo${photos.length === 1 ? " is" : "s are"} ready. ${autosaveMessage}`
          : `No photos uploaded yet. Add at least one clear cover photo to unlock AI suggestions and the next step. ${autosaveMessage}`}
      </div>
      {uploadError ? (
        <div className="rounded-[16px] border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
          {uploadError}
        </div>
      ) : null}
      {aiError ? (
        <div className="rounded-[16px] border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-900">
          {aiError}
        </div>
      ) : null}
    </div>
  );

  // Collapsed view when photos are uploaded and user is in item details
  if (isCollapsed && hasPhotos) {
    const displayPhotos = photos.slice(0, 3);
    const photoCount = photos.length;
    
    return (
      <div className="bg-surface-variant content-stretch flex flex-col gap-[12px] items-start justify-center relative rounded-[16px] w-full">
        <div aria-hidden="true" className="absolute border border-border border-solid inset-[-1px] pointer-events-none rounded-[17px]" />
        <div className="bg-surface-variant content-stretch flex flex-col gap-[8px] items-start justify-center relative rounded-[16px] shrink-0 w-full">
          <div
            className={`relative shrink-0 w-full ${isCollapsed && hasPhotos ? 'cursor-pointer' : ''}`}
            onClick={handleHeaderClick}
          >
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center justify-between px-[24px] py-[16px] relative w-full">
                <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
                  <div className="content-stretch flex flex-[1_0_0] gap-[16px] h-full items-center min-h-px min-w-px relative">
                    <div className="content-stretch flex items-center relative shrink-0">
                      <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                        {/* Step with checkmark */}
                        <div className="relative shrink-0 size-[32px]">
                          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                            <circle cx="16" cy="16" fill="var(--fill-0, var(--secondary))" r="15.25" stroke="var(--stroke-0, var(--secondary))" strokeWidth="1.5" />
                          </svg>
                          <div className="absolute left-[4px] overflow-clip size-[24px] top-[4px]">
                            <div className="absolute inset-[19.32%_8.33%_19.99%_8.33%]">
                              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 14.5656">
                                <path d={editSvgPaths.p97f8e00} fill="var(--fill-0, var(--primary-dim))" />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="content-stretch flex items-center justify-center relative shrink-0">
                          <p className="font-['Lexend',sans-serif] font-[var(--font-weight-normal)] leading-[32px] relative shrink-0 text-muted-foreground text-[var(--text-h3)] whitespace-nowrap text-[24px]">Photos that sell the item</p>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex items-center justify-center relative shrink-0">
                      <p className="font-['Lexend',sans-serif] font-[var(--font-weight-normal)] leading-[20px] relative shrink-0 text-foreground-dim text-[var(--text-sm)] tracking-[0.25px] whitespace-nowrap">
                        {photoCount} photo{photoCount !== 1 ? 's' : ''} uploaded
                      </p>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
                  {/* Thumbnails */}
                  <div className="content-stretch flex isolate items-center pr-[8px] relative shrink-0">
                    {displayPhotos.map((photo, index) => (
                      <div 
                        key={index}
                        className="bg-surface-variant mr-[-8px] relative rounded-[8px] shrink-0 size-[48px]"
                        style={{ zIndex: 3 - index }}
                      >
                        <div className="absolute inset-0 overflow-hidden rounded-[8px]">
                          <img 
                            alt={`Photo ${index + 1}`}
                            className="block size-full object-cover" 
                            src={photo}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                  {/* Edit button */}
                  <button
                    onClick={(event) => {
                      event.stopPropagation();
                      onToggleExpand?.();
                    }}
                    className="relative shrink-0 size-[48px]"
                  >
                    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col items-center justify-center left-[calc(50%-0.5px)] overflow-clip rounded-[100px] top-1/2 w-[40px]">
                      <div className="content-stretch flex h-[40px] items-center justify-center relative shrink-0 w-full">
                        <div className="overflow-clip relative shrink-0 size-[24px]">
                          <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[18.183px] left-[calc(50%-0.5px)] top-[calc(50%+0.09px)] w-[19px]">
                            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 18.1834">
                              <g>
                                <path clipRule="evenodd" d={editSvgPaths.p1e751200} fill="var(--fill-0, #494455)" fillRule="evenodd" />
                                <path d={editSvgPaths.p3a455080} fill="var(--fill-0, #494455)" />
                              </g>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Expanded view - with wrapper and header
  return (
    <DndProvider backend={HTML5Backend}>
      <PhotosStepContent
        photos={photos}
        isDragging={isDragging}
        hasPhotos={hasPhotos}
        fileInputRef={fileInputRef}
        tiles={tiles}
        onToggleExpand={onToggleExpand}
        handleDragOver={handleDragOver}
        handleDragLeave={handleDragLeave}
        handleDrop={handleDrop}
        handleUploadClick={handleUploadClick}
        handleFileInput={handleFileInput}
        handleFiles={handleFiles}
        handleRemovePhoto={handleRemovePhoto}
        movePhoto={movePhoto}
        handleNext={handleNext}
        handleGenerateListing={handleGenerateListing}
        isCollapsed={isCollapsed}
        hasReachedMinimumPhotos={hasReachedMinimumPhotos}
        hasShownDecisionModal={hasShownDecisionModal}
        isDecisionModalOpen={isDecisionModalOpen}
        onDecisionModalChange={handleDecisionModalChange}
        onContinueEditingPhotos={handleContinueEditingPhotos}
        triggerButtonRef={triggerButtonRef}
        modalPrimaryActionRef={modalPrimaryActionRef}
        isGenerating={isGenerating}
      />
    </DndProvider>
  );
}

interface DraggablePhotoTileProps {
  photo: string;
  index: number;
  onRemove: (index: number) => void;
  movePhoto: (fromIndex: number, toIndex: number) => void;
}

const ITEM_TYPE = 'PHOTO';

function DraggablePhotoTile({ photo, index, onRemove, movePhoto }: DraggablePhotoTileProps) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ITEM_TYPE,
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  const [{ isOver }, drop] = useDrop(() => ({
    accept: ITEM_TYPE,
    drop: (item: { index: number }) => {
      if (item.index !== index) {
        movePhoto(item.index, index);
      }
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  return (
    <div
      ref={(node) => drag(drop(node))}
      className={`group relative aspect-square overflow-hidden border bg-surface-variant rounded-[16px] cursor-move transition-all ${
        isDragging ? 'opacity-50 scale-95' : 'opacity-100 scale-100'
      } ${isOver ? 'border-primary-container border-2' : 'border-border'}`}
    >
      <img
        src={photo}
        alt={`Upload ${index + 1}`}
        className="size-full object-cover"
      />
      <button
        onClick={() => onRemove(index)}
        className="absolute right-2 top-2 flex size-6 items-center justify-center rounded-full bg-destructive text-destructive-foreground opacity-0 transition-opacity hover:bg-destructive/90 group-hover:opacity-100 z-10"
      >
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 2L10 10M10 2L2 10"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </button>
      {index === 0 && (
        <div className="absolute bottom-2 left-2 rounded bg-primary-container px-2 py-0.5 font-['Lexend',sans-serif] font-[var(--font-weight-medium)] text-[var(--text-xs)] text-primary-container-foreground z-10">
          Cover
        </div>
      )}
    </div>
  );
}


interface PhotosStepContentProps {
  photos: string[];
  isDragging: boolean;
  hasPhotos: boolean;
  fileInputRef: React.RefObject<HTMLInputElement>;
  tiles: Array<{ type: 'photo' | 'add'; photo?: string; index: number }>;
  onToggleExpand?: () => void;
  handleDragOver: (e: React.DragEvent) => void;
  handleDragLeave: () => void;
  handleDrop: (e: React.DragEvent) => void;
  handleUploadClick: () => void;
  handleFileInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleFiles: (files: File[]) => void;
  handleRemovePhoto: (index: number) => void;
  movePhoto: (fromIndex: number, toIndex: number) => void;
  handleNext: () => void;
  handleGenerateListing: () => void;
  isCollapsed: boolean;
  hasReachedMinimumPhotos: boolean;
  hasShownDecisionModal: boolean;
  isDecisionModalOpen: boolean;
  onDecisionModalChange: (open: boolean) => void;
  onContinueEditingPhotos: () => void;
  triggerButtonRef: React.RefObject<HTMLButtonElement>;
  modalPrimaryActionRef: React.RefObject<HTMLButtonElement>;
  isGenerating: boolean;
}

function PhotosStepContent({
  photos,
  isDragging,
  hasPhotos,
  fileInputRef,
  tiles,
  onToggleExpand,
  handleDragOver,
  handleDragLeave,
  handleDrop,
  handleUploadClick,
  handleFileInput,
  handleFiles,
  handleRemovePhoto,
  movePhoto,
  handleNext,
  handleGenerateListing,
  isCollapsed,
  hasReachedMinimumPhotos,
  hasShownDecisionModal,
  isDecisionModalOpen,
  onDecisionModalChange,
  onContinueEditingPhotos,
  triggerButtonRef,
  modalPrimaryActionRef,
  isGenerating,
}: PhotosStepContentProps) {
  const shouldShowDecisionCheckpoint = hasShownDecisionModal && hasReachedMinimumPhotos;

  return (
    <>
      <Dialog open={isDecisionModalOpen} onOpenChange={onDecisionModalChange}>
        <DialogContent className="max-w-[560px] rounded-[24px] border-border bg-background px-0 py-0 shadow-[0px_24px_64px_rgba(29,26,36,0.18)]" onOpenAutoFocus={(event) => { event.preventDefault(); modalPrimaryActionRef.current?.focus(); }}>
          <div className="flex flex-col gap-6 p-8">
            <DialogHeader className="gap-3 text-left">
              <DialogTitle className="font-['Lexend',sans-serif] text-[28px] leading-[36px] font-normal text-foreground">
                Choose how to build the rest of this listing
              </DialogTitle>
              <DialogDescription className="font-['Lexend',sans-serif] text-[16px] leading-[24px] text-muted-foreground">
                Your photos are ready. Choose a faster AI draft or keep full manual control. Either way, you can edit everything before anything goes live.
              </DialogDescription>
            </DialogHeader>
            <div className="flex flex-col gap-4">
              <div className="rounded-[20px] border border-primary/20 bg-[linear-gradient(180deg,rgba(104,58,223,0.12)_0%,rgba(104,58,223,0.04)_100%)] p-5">
                <div className="mb-4 flex items-start justify-between gap-3">
                  <div>
                    <p className="font-['Lexend',sans-serif] text-[13px] font-medium uppercase tracking-[0.4px] text-primary">
                      Recommended
                    </p>
                    <h3 className="mt-1 font-['Lexend',sans-serif] text-[22px] leading-[30px] text-foreground">
                      Build first draft with AI
                    </h3>
                  </div>
                  <div className="rounded-full bg-primary/10 px-3 py-1 font-['Lexend',sans-serif] text-[12px] font-medium text-primary">
                    Save time
                  </div>
                </div>
                <div className="space-y-3">
                  <p className="font-['Lexend',sans-serif] text-[15px] leading-[22px] text-foreground">
                    Use your photos to create a strong starting draft so you can review, refine, and publish faster.
                  </p>
                  <div className="rounded-[16px] border border-border/80 bg-background/80 p-4">
                    <p className="font-['Lexend',sans-serif] text-[13px] font-medium uppercase tracking-[0.3px] text-muted-foreground">
                      Example output
                    </p>
                    <p className="mt-2 font-['Lexend',sans-serif] text-[14px] leading-[21px] text-foreground">
                      Title, description, category, brand, size, condition, tags, and a suggested price based on what&apos;s visible in your photos.
                    </p>
                  </div>
                  <p className="font-['Lexend',sans-serif] text-[14px] leading-[20px] text-muted-foreground">
                    AI suggests the first draft only. Your photos are used to create suggestions, and you can rewrite, remove, or keep any field.
                  </p>
                  <div className="grid gap-3 md:grid-cols-2">
                    <div className="rounded-[14px] border border-border/80 bg-background/80 p-4">
                      <p className="font-['Lexend',sans-serif] text-[12px] font-medium uppercase tracking-[0.3px] text-muted-foreground">
                        Why AI is confident
                      </p>
                      <p className="mt-2 font-['Lexend',sans-serif] text-[14px] leading-[21px] text-foreground">
                        Best when your photos clearly show the silhouette, labels, and item condition.
                      </p>
                    </div>
                    <div className="rounded-[14px] border border-border/80 bg-background/80 p-4">
                      <p className="font-['Lexend',sans-serif] text-[12px] font-medium uppercase tracking-[0.3px] text-muted-foreground">
                        Control stays with you
                      </p>
                      <p className="mt-2 font-['Lexend',sans-serif] text-[14px] leading-[21px] text-foreground">
                        Generated based on your photos, then fully editable field-by-field in the next step.
                      </p>
                    </div>
                  </div>
                </div>
                <Button
                  ref={modalPrimaryActionRef}
                  onClick={handleGenerateListing}
                  disabled={isGenerating}
                  className="mt-5 h-12 w-full rounded-[12px] bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  {isGenerating ? 'Creating your draft…' : 'Create draft from photos'}
                </Button>
              </div>

              <div className="rounded-[20px] border border-border bg-surface p-5">
                <div className="mb-3 flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-['Lexend',sans-serif] text-[22px] leading-[30px] text-foreground">
                      Write listing myself
                    </h3>
                    <p className="mt-1 font-['Lexend',sans-serif] text-[14px] leading-[20px] text-muted-foreground">
                      Best when you already know the exact details or want full control from the first field.
                    </p>
                  </div>
                  <div className="rounded-full bg-background px-3 py-1 font-['Lexend',sans-serif] text-[12px] font-medium text-foreground-dim">
                    Full control
                  </div>
                </div>
                <p className="font-['Lexend',sans-serif] text-[14px] leading-[21px] text-foreground">
                  You&apos;ll move to the item details form with your photos saved and can complete the listing at your own pace.
                </p>
                <Button
                  variant="outline"
                  onClick={handleNext}
                  className="mt-5 h-12 w-full rounded-[12px] border-border bg-background text-foreground hover:bg-accent"
                >
                  Go to item details
                </Button>
              </div>
            </div>

            <DialogFooter className="flex-col gap-3 sm:flex-col sm:justify-start">
              <DialogClose asChild>
                <button
                  type="button"
                  onClick={onContinueEditingPhotos}
                  className="self-center font-['Lexend',sans-serif] text-[14px] leading-[20px] font-medium text-muted-foreground transition-colors hover:text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-[8px] px-2 py-1"
                >
                  Keep editing photos
                </button>
              </DialogClose>
            </DialogFooter>
          </div>
        </DialogContent>
      </Dialog>
      <div className="bg-card content-stretch flex flex-col gap-[12px] items-start relative rounded-[12px] w-full border border-foreground-dim" style={!isCollapsed ? { boxShadow: "0px 1px 2px 0px rgba(0,0,0,0.3), 0px 1px 3px 0px rgba(0,0,0,0.15)" } : {}}>
      <div aria-hidden="true" className="absolute border border-border border-solid inset-[-1px] pointer-events-none rounded-[13px] bg-card" />
      
      {/* Top Content - Header */}
      <div className="content-stretch flex flex-col gap-[8px] items-start pt-[24px] relative rounded-tl-[12px] rounded-tr-[12px] shrink-0 w-full" style={{ backgroundImage: "linear-gradient(90deg, rgba(104, 58, 223, 0.08) 0%, rgba(104, 58, 223, 0.08) 100%), linear-gradient(90deg, rgb(245, 238, 252) 0%, rgb(245, 238, 252) 100%)" }}>
        {/* Title */}
        <div className="relative shrink-0 w-full">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[8px] items-center px-[24px] relative w-full">
              <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative">
                {/* Step */}
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                  <div className="bg-primary-container content-stretch flex gap-[10px] items-center relative rounded-[16px] shrink-0 size-[32px]">
                    <div aria-hidden="true" className="absolute border-primary-container border-[1.5px] border-solid inset-0 pointer-events-none rounded-[16px]" />
                    <div className="content-stretch flex flex-[1_0_0] h-full items-center justify-center min-h-px min-w-px relative">
                      <div className="flex flex-col font-['Lexend',sans-serif] font-[var(--font-weight-normal)] justify-center leading-[0] relative shrink-0 text-[var(--text-base)] text-center text-primary-container-foreground tracking-[0.5px] whitespace-nowrap">
                        <p className="leading-[24px]">1</p>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex items-center justify-center relative shrink-0">
                    <p className="font-['Lexend',sans-serif] font-[var(--font-weight-normal)] leading-[32px] relative shrink-0 text-foreground text-[var(--text-h3)] whitespace-nowrap text-[24px]">Photos that sell the item</p>
                  </div>
                </div>
              </div>
              {hasPhotos && (
                <button
                  onClick={onToggleExpand}
                  className="relative shrink-0 size-[48px]"
                >
                  <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col items-center justify-center left-[calc(50%-0.5px)] overflow-clip rounded-[100px] top-1/2 w-[40px]">
                    <div className="content-stretch flex h-[40px] items-center justify-center relative shrink-0 w-full">
                      <div className="overflow-clip relative shrink-0 size-[24px]">
                        <div className="absolute inset-[26.36%_8.34%_26.36%_8.33%] -scale-y-100">
                          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9993 11.3458">
                            <path d={chevronSvgPaths.p28797e80} fill="var(--fill-0, #494455)" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </button>
              )}
            </div>
          </div>
        </div>
        <div className="h-[2px] relative shrink-0 w-full">
          <div className="absolute bottom-0 left-0 right-0 top-full">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 760 1">
                <line stroke="var(--stroke-0, #CBC3D7)" strokeLinecap="square" x1="0.5" x2="759.5" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Section Content */}
      <div className="relative rounded-[12px] shrink-0 w-full">
        <div className="flex flex-col justify-center size-full">
          <div className="content-stretch flex flex-col items-start justify-center pb-[24px] pt-[12px] px-[24px] relative w-full">
            <div className="content-stretch flex flex-col gap-[16px] items-start justify-center relative rounded-[12px] shrink-0 w-full">
              {/* Upload Area or Grid */}
              {photos.length === 0 ? (
                <div
                  className={`bg-surface-variant h-[323px] relative rounded-[12px] shrink-0 w-full ${
                    isDragging ? "border-2 border-primary-container border-dashed" : ""
                  }`}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                >
                  <div aria-hidden="true" className="absolute border border-border border-solid inset-0 pointer-events-none rounded-[12px]" />
                  <div className="flex flex-col items-center justify-center size-full">
                    <div className="content-stretch flex flex-col items-center justify-center p-[12px] relative size-full">
                      {/* Illustration */}
                      <div className="relative shrink-0 size-[160px]">
                        <div className="absolute h-[108px] left-0 top-[26px] w-[160px]">
                          <IllustrationSvg1 />
                        </div>
                      </div>

                      {/* Text */}
                      <div className="content-stretch flex flex-col gap-[4px] items-center pb-[12px] relative shrink-0 text-center tracking-[0.5px] w-full whitespace-nowrap">
                        <p className="font-['Lexend',sans-serif] leading-[24px] relative shrink-0 text-foreground text-[var(--text-base)] font-bold">
                          Add photos to start your listing
                        </p>
                        <p className="font-['Lexend',sans-serif] leading-[16px] relative shrink-0 text-on-surface-dim text-[var(--text-xs)] font-[Lexend] text-[14px]">
                          Drag and drop or browse files. JPG, PNG, and SVG supported, up to 10MB each.
                        </p>
                      </div>

                      {/* Upload Button */}
                      <button
                        onClick={handleUploadClick}
                        className="content-stretch flex h-[48px] items-center justify-center relative rounded-[5px] shrink-0 hover:bg-[rgba(29,26,36,0.08)] transition-colors"
                      >
                        <div aria-hidden="true" className="absolute border border-border border-solid inset-0 pointer-events-none rounded-[5px]" />
                        <div className="content-stretch flex flex-col items-center justify-center relative rounded-[5px] shrink-0">
                          <div className="content-stretch flex gap-[10px] items-center px-[16px] py-[10px] relative shrink-0">
                            <div className="relative shrink-0 size-[20px]">
                              <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[20.292px] left-1/2 top-[calc(50%+0.06px)] w-[22px]">
                                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 22.1362">
                                  <g id="Icon">
                                    <path clipRule="evenodd" d={svgPaths.p1b10da80} fill="var(--fill-0, #494455)" fillRule="evenodd" />
                                    <path clipRule="evenodd" d={svgPaths.p1eb17e80} fill="var(--fill-0, #494455)" fillRule="evenodd" />
                                    <path clipRule="evenodd" d={svgPaths.p3e128500} fill="var(--fill-0, #494455)" fillRule="evenodd" />
                                    <path clipRule="evenodd" d={svgPaths.p1bda1f00} fill="var(--fill-0, #494455)" fillRule="evenodd" />
                                    <path d={svgPaths.p90c6800} fill="var(--fill-0, #494455)" />
                                    <path d={svgPaths.p3b45c80} fill="var(--fill-0, #494455)" />
                                  </g>
                                </svg>
                              </div>
                            </div>
                            <div className="content-stretch flex items-center justify-center px-[4px] relative shrink-0">
                              <div className="flex flex-col font-['Lexend',sans-serif] font-[var(--font-weight-medium)] justify-center leading-[0] relative shrink-0 text-muted-foreground text-[var(--text-sm)] text-center tracking-[0.1px] whitespace-nowrap">
                                <p className="leading-[20px]">Choose photos</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </button>

                      <input
                        ref={fileInputRef}
                        type="file"
                        multiple
                        accept="image/jpeg,image/png,image/svg+xml"
                        onChange={handleFileInput}
                        className="hidden"
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="w-full flex justify-center">
                  {/* Photo Grid - Always 8 tiles - 70% size and centered */}
                  <div className="grid grid-cols-4 gap-4 max-w-[70%]">
                    {tiles.map((tile) => {
                      if (tile.type === 'photo') {
                        return (
                          <DraggablePhotoTile
                            key={`photo-${tile.index}`}
                            photo={tile.photo!}
                            index={tile.index}
                            onRemove={handleRemovePhoto}
                            movePhoto={movePhoto}
                          />
                        );
                      } else {
                        return (
                          <label
                            key={`add-${tile.index}`}
                            onDragEnter={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                            }}
                            onDragOver={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              e.currentTarget.classList.add('!border-primary-container', '!bg-primary/8');
                            }}
                            onDragLeave={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              e.currentTarget.classList.remove('!border-primary-container', '!bg-primary/8');
                            }}
                            onDrop={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              e.currentTarget.classList.remove('!border-primary-container', '!bg-primary/8');
                              
                              if (e.dataTransfer?.files && e.dataTransfer.files.length > 0) {
                                const files = Array.from(e.dataTransfer.files);
                                handleFiles(files);
                              }
                            }}
                            className="flex aspect-square items-center justify-center rounded-lg border-2 border-dashed border-border bg-surface-variant transition-colors hover:border-primary-container hover:bg-primary/8 active:scale-95 focus:outline-none focus:ring-2 focus:ring-primary-container focus:ring-offset-2 cursor-pointer"
                          >
                            <input
                              type="file"
                              multiple
                              accept="image/jpeg,image/png,image/svg+xml"
                              onChange={handleFileInput}
                              className="hidden"
                            />
                            <svg className="overflow-clip relative shrink-0 size-[24px] pointer-events-none" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3333 18.3333">
                              <g id="Icon">
                                <path d={svgPaths.p3af8180} fill="var(--fill-0, #494455)" />
                                <path clipRule="evenodd" d={svgPaths.p389ffd00} fill="var(--fill-0, #494455)" fillRule="evenodd" />
                              </g>
                            </svg>
                          </label>
                        );
                      }
                    })}
                  </div>
                </div>
              )}

              {/* Info Caption */}
              <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full px-[2px] py-[0px]">
                <div className="overflow-clip relative shrink-0 size-[24px]">
                  <div className="absolute inset-[4.17%]">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                      <path d={lightbulbSvgPaths.p3ab2b500} fill="var(--fill-0, #7A7486)" />
                      <path d={lightbulbSvgPaths.p2160fa00} fill="var(--fill-0, #7A7486)" />
                      <path d={lightbulbSvgPaths.pceb4180} fill="var(--fill-0, #7A7486)" />
                      <path d={lightbulbSvgPaths.p2d25fa80} fill="var(--fill-0, #7A7486)" />
                    </svg>
                  </div>
                </div>
                <p className="font-['Lexend',sans-serif] font-[var(--font-weight-normal)] leading-[16px] relative shrink-0 text-foreground-dim text-[var(--text-xs)] tracking-[0.4px] mx-[-6px] my-[0px] text-[12px]">
                  Add clear front, back, label, and detail shots. Better photos help AI draft more accurately and help buyers trust the listing.
                </p>
              </div>

              {/* Decision Checkpoint */}
              <div className={`w-full mt-[8px] ${shouldShowDecisionCheckpoint ? 'sticky bottom-4 z-20' : ''}`}>
                <div className={`${shouldShowDecisionCheckpoint ? 'rounded-[24px] border border-primary/15 bg-background/95 p-[20px] shadow-[0px_16px_40px_rgba(29,26,36,0.14)] backdrop-blur-sm' : ''}`}>
                  {shouldShowDecisionCheckpoint ? (
                    <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                      <div className="flex flex-col gap-[4px]">
                        <p className="font-['Lexend',sans-serif] text-[12px] font-medium uppercase tracking-[0.4px] text-primary">
                          Ready for the next step
                        </p>
                        <p className="font-['Lexend',sans-serif] text-[20px] leading-[28px] text-foreground">
                          Choose how you want to build the rest of this listing.
                        </p>
                        <p className="font-['Lexend',sans-serif] text-[14px] leading-[20px] text-muted-foreground">
                          Review the recommended AI path or choose manual entry — either way, you&apos;ll make this choice intentionally before moving on.
                        </p>
                        <div className="flex flex-wrap gap-2 pt-1">
                          <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 font-['Lexend',sans-serif] text-[12px] font-medium text-primary">
                            Generated based on your photos
                          </span>
                          <span className="inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 font-['Lexend',sans-serif] text-[12px] font-medium text-emerald-800">
                            Confidence improves with clear labels + detail shots
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-col gap-3 sm:flex-row">
                        <button
                          ref={triggerButtonRef}
                          type="button"
                          onClick={() => onDecisionModalChange(true)}
                          className="content-stretch flex h-[48px] items-center justify-center rounded-[12px] border border-border bg-background px-[16px] transition-colors hover:bg-accent"
                        >
                          <span className="font-['Lexend',sans-serif] text-[14px] font-medium leading-[20px] text-foreground">
                            Compare options
                          </span>
                        </button>
                        <button
                          type="button"
                          onClick={handleGenerateListing}
                          disabled={!hasPhotos || isGenerating}
                          className={`content-stretch flex h-[48px] items-center justify-center rounded-[12px] px-[16px] ${!hasPhotos || isGenerating ? 'bg-foreground/10 cursor-not-allowed' : 'bg-primary'} transition-colors`}
                        >
                          <span className={`font-['Lexend',sans-serif] text-[14px] font-medium leading-[20px] ${!hasPhotos || isGenerating ? 'text-foreground/60' : 'text-primary-foreground'}`}>
                            {isGenerating ? 'Creating your draft…' : 'Create draft with AI'}
                          </span>
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="flex w-full items-center justify-end">
                      <button
                        ref={triggerButtonRef}
                        onClick={handleUploadClick}
                        className="content-stretch flex h-[48px] items-center justify-center rounded-[12px] border border-border bg-background px-[16px] transition-colors hover:bg-accent"
                      >
                        <span className="font-['Lexend',sans-serif] text-[14px] font-medium leading-[20px] text-foreground">
                          Add more photos
                        </span>
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Hidden file input */}
              <input
                ref={fileInputRef}
                type="file"
                multiple
                accept="image/jpeg,image/png,image/svg+xml"
                onChange={handleFileInput}
                className="hidden"
              />
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
