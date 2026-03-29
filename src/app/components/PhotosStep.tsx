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
}

function PhotosStepFigmaContent({
  photos,
  isDragging,
  hasPhotos,
  fileInputRef,
  tiles,
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
  hasReachedMinimumPhotos,
  hasShownDecisionModal,
  triggerButtonRef,
  isGenerating,
}: PhotosStepContentProps) {
  const showDecisionBanner = hasShownDecisionModal && hasReachedMinimumPhotos;

  return (
    <div className="relative w-full overflow-hidden rounded-[12px] border border-primary bg-background shadow-[0px_1px_2px_0px_rgba(0,0,0,0.3),0px_1px_3px_0px_rgba(0,0,0,0.15)]">
      <div
        className="flex w-full flex-col gap-[8px] rounded-t-[12px] pt-[12px]"
        style={{ backgroundImage: "linear-gradient(90deg, rgba(104, 58, 223, 0.08) 0%, rgba(104, 58, 223, 0.08) 100%), linear-gradient(90deg, rgb(253, 247, 255) 0%, rgb(253, 247, 255) 100%)" }}
      >
        <div className="flex items-center px-[24px] py-[8px]">
          <div className="flex items-center gap-[8px]">
            <div className="relative flex size-[32px] items-center justify-center rounded-[16px] bg-primary-container">
              <div aria-hidden="true" className="absolute inset-0 rounded-[16px] border-[1.5px] border-primary-container" />
              <p className="font-['Lexend',sans-serif] text-[16px] leading-[24px] tracking-[0.5px] text-primary-container-foreground">1</p>
            </div>
            <p className="font-['Lexend',sans-serif] text-[24px] leading-[32px] text-foreground">Photos</p>
          </div>
        </div>
        <div className="h-px w-full bg-border" />
      </div>

      <div className="flex flex-col gap-[16px] px-[24px] pb-[24px] pt-[12px]">
        {photos.length === 0 ? (
          <div
            className={`flex h-[323px] w-full flex-col items-center justify-center rounded-[12px] border border-border bg-surface-review px-[12px] py-[12px] ${
              isDragging ? "border-2 border-primary-container border-dashed" : ""
            }`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <div className="relative size-[160px]">
              <div className="absolute left-0 top-[26px] h-[108px] w-[160px]">
                <IllustrationSvg1 />
              </div>
            </div>

            <div className="flex flex-col items-center gap-[4px] pb-[12px] text-center">
              <p className="font-['Lexend',sans-serif] text-[16px] leading-[24px] tracking-[0.5px] text-foreground">
                Add photos to start your listing
              </p>
              <p className="font-['Lexend',sans-serif] text-[12px] font-[var(--font-weight-medium)] leading-[16px] text-muted-foreground">
                Support for JPG, PNG, SVG (max 10MB each)
              </p>
            </div>

            <Button
              type="button"
              variant="outline"
              onClick={handleUploadClick}
              className="h-[48px] rounded-[5px] border-border bg-background px-[16px] py-[10px] text-[14px] font-[var(--font-weight-medium)] leading-[20px] tracking-[0.1px] text-muted-foreground hover:bg-background"
            >
              <svg className="size-[20px]" fill="none" preserveAspectRatio="none" viewBox="0 0 24 22.1362">
                <g id="Icon">
                  <path clipRule="evenodd" d={svgPaths.p1b10da80} fill="currentColor" fillRule="evenodd" />
                  <path clipRule="evenodd" d={svgPaths.p1eb17e80} fill="currentColor" fillRule="evenodd" />
                  <path clipRule="evenodd" d={svgPaths.p3e128500} fill="currentColor" fillRule="evenodd" />
                  <path clipRule="evenodd" d={svgPaths.p1bda1f00} fill="currentColor" fillRule="evenodd" />
                  <path d={svgPaths.p90c6800} fill="currentColor" />
                  <path d={svgPaths.p3b45c80} fill="currentColor" />
                </g>
              </svg>
              Choose photos
            </Button>
          </div>
        ) : (
          <div className="mx-auto w-full max-w-[528px]">
            <div className="grid grid-cols-4 gap-[16px]">
              {tiles.map((tile) => {
                if (tile.type === "photo") {
                  return (
                    <DraggablePhotoTile
                      key={`photo-${tile.index}`}
                      photo={tile.photo!}
                      index={tile.index}
                      onRemove={handleRemovePhoto}
                      movePhoto={movePhoto}
                    />
                  );
                }

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
                      e.currentTarget.classList.add("!ring-2", "!ring-primary-container");
                    }}
                    onDragLeave={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      e.currentTarget.classList.remove("!ring-2", "!ring-primary-container");
                    }}
                    onDrop={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      e.currentTarget.classList.remove("!ring-2", "!ring-primary-container");

                      if (e.dataTransfer?.files && e.dataTransfer.files.length > 0) {
                        handleFiles(Array.from(e.dataTransfer.files));
                      }
                    }}
                    className="flex h-[120px] w-full cursor-pointer items-center justify-center rounded-[10px] bg-primary-container/8 transition-all hover:bg-primary-container/12 focus:outline-none focus:ring-2 focus:ring-primary-container focus:ring-offset-2"
                  >
                    <input
                      type="file"
                      multiple
                      accept="image/jpeg,image/png,image/svg+xml"
                      onChange={handleFileInput}
                      className="hidden"
                    />
                    <svg className="size-[20px] text-primary-container/35" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3333 18.3333">
                      <g id="Icon">
                        <path d={svgPaths.p3af8180} fill="currentColor" />
                        <path clipRule="evenodd" d={svgPaths.p389ffd00} fill="currentColor" fillRule="evenodd" />
                      </g>
                    </svg>
                  </label>
                );
              })}
            </div>
          </div>
        )}

        <div className="flex w-full items-start gap-[8px]">
          <div className="relative size-[24px] shrink-0 overflow-hidden">
            <div className="absolute inset-[4.17%]">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                <path d={lightbulbSvgPaths.p3ab2b500} fill="var(--fill-0, #7A7486)" />
                <path d={lightbulbSvgPaths.p2160fa00} fill="var(--fill-0, #7A7486)" />
                <path d={lightbulbSvgPaths.pceb4180} fill="var(--fill-0, #7A7486)" />
                <path d={lightbulbSvgPaths.p2d25fa80} fill="var(--fill-0, #7A7486)" />
              </svg>
            </div>
          </div>
          <p className="font-['Lexend',sans-serif] text-[12px] leading-[16px] tracking-[0.4px] text-foreground-dim">
            Add clear front, back, label, and detail shots. Better photos help AI draft more accurately and help buyers trust the listing.
          </p>
        </div>

        {showDecisionBanner && (
          <div className="flex w-full flex-col gap-[12px] overflow-hidden rounded-[12px] border border-border bg-gradient-to-r from-[rgba(253,247,255,0.25)] to-[var(--surface-bright,#fdf7ff)] px-[24px] py-[16px]">
            <div className="flex flex-wrap items-center gap-[10px]">
              <span className="inline-flex items-center gap-[4px] rounded-[4px] bg-primary/15 px-[4px] text-[11px] leading-[20px] text-primary">
                <svg className="size-[12px]" fill="none" preserveAspectRatio="none" viewBox="0 0 24 22.1362">
                  <g id="Icon">
                    <path clipRule="evenodd" d={svgPaths.p1b10da80} fill="currentColor" fillRule="evenodd" />
                    <path clipRule="evenodd" d={svgPaths.p1eb17e80} fill="currentColor" fillRule="evenodd" />
                    <path clipRule="evenodd" d={svgPaths.p3e128500} fill="currentColor" fillRule="evenodd" />
                    <path clipRule="evenodd" d={svgPaths.p1bda1f00} fill="currentColor" fillRule="evenodd" />
                    <path d={svgPaths.p90c6800} fill="currentColor" />
                    <path d={svgPaths.p3b45c80} fill="currentColor" />
                  </g>
                </svg>
                Generated from your photos
              </span>
              <span className="inline-flex items-center gap-[4px] rounded-[4px] bg-[#ffacec] px-[4px] text-[11px] leading-[20px] text-[#390034]">
                <svg className="size-[12px]" fill="none" preserveAspectRatio="none" viewBox="0 0 16.2384 16.2401">
                  <g id="Icon">
                    <path clipRule="evenodd" d={sparkleSvgPaths.pf313a80} fill="currentColor" fillRule="evenodd" />
                    <path clipRule="evenodd" d={sparkleSvgPaths.p198a1100} fill="currentColor" fillRule="evenodd" />
                    <path d={sparkleSvgPaths.p39ab3c00} fill="currentColor" />
                    <path d={sparkleSvgPaths.p76d5230} fill="currentColor" />
                  </g>
                </svg>
                Based on top-performing listings to help you sell faster
              </span>
            </div>

            <div className="flex flex-col gap-[10px]">
              <p className="font-['Lexend',sans-serif] text-[12px] font-bold uppercase leading-[16px] tracking-[0.2px] text-primary">
                Ready for the next step
              </p>
              <p className="font-['Lexend',sans-serif] text-[16px] font-[var(--font-weight-medium)] leading-[24px] tracking-[0.15px] text-foreground">
                Choose how you to build your listing
              </p>
            </div>

            <div className="flex flex-col gap-[12px] sm:flex-row sm:items-center sm:justify-end">
              <Button
                ref={triggerButtonRef}
                type="button"
                variant="outline"
                onClick={handleNext}
                disabled={!hasPhotos}
                className="h-[48px] rounded-[8px] border-border px-[20px] py-[16px] text-[16px] font-[var(--font-weight-medium)] leading-[24px] tracking-[0.15px] text-muted-foreground hover:bg-background sm:min-w-[152px]"
              >
                Continue
              </Button>

              <Button
                type="button"
                onClick={handleGenerateListing}
                disabled={!hasPhotos || isGenerating}
                className="h-[48px] rounded-[8px] bg-primary px-[20px] py-[16px] text-[14px] font-[var(--font-weight-medium)] leading-[20px] tracking-[0.1px] text-primary-foreground hover:bg-primary/90 sm:min-w-[172px]"
              >
                <svg className="size-[20px]" fill="none" preserveAspectRatio="none" viewBox="0 0 16.2384 16.2401">
                  <g id="Icon">
                    <path clipRule="evenodd" d={sparkleSvgPaths.pf313a80} fill="currentColor" fillRule="evenodd" />
                    <path clipRule="evenodd" d={sparkleSvgPaths.p198a1100} fill="currentColor" fillRule="evenodd" />
                    <path d={sparkleSvgPaths.p39ab3c00} fill="currentColor" />
                    <path d={sparkleSvgPaths.p76d5230} fill="currentColor" />
                  </g>
                </svg>
                {isGenerating ? "Generating…" : "Create with AI"}
              </Button>
            </div>
          </div>
        )}

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
  );
}

export default function PhotosStep({ onContinue, isCollapsed = false, onToggleExpand }: PhotosStepProps) {
  const [photos, setPhotos] = useState<string[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
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
    const validFiles = files.filter((file) =>
      ["image/jpeg", "image/png", "image/svg+xml"].includes(file.type)
    );

    const availableSlots = MAX_PHOTOS - photos.length;
    if (validFiles.length > availableSlots) {
      alert(`You can only add ${availableSlots} more photo${availableSlots === 1 ? '' : 's'}. Maximum ${MAX_PHOTOS} photos allowed.`);
      validFiles.splice(availableSlots);
    }

    validFiles.forEach((file) => {
      if (file.size > 10 * 1024 * 1024) {
        alert(`${file.name} exceeds 10MB limit`);
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
        alert("Failed to generate listing. Please try again.");
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


  // Create array of 8 tiles
  const tiles = Array.from({ length: MAX_PHOTOS }, (_, index) => {
    if (index < photos.length) {
      return { type: 'photo' as const, photo: photos[index], index };
    }
    return { type: 'add' as const, index };
  });

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
                          <p className="font-['Lexend',sans-serif] font-[var(--font-weight-normal)] leading-[32px] relative shrink-0 text-muted-foreground text-[var(--text-h3)] whitespace-nowrap text-[24px]">Photos</p>
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
      <PhotosStepFigmaContent
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
      className={`group relative h-[120px] w-full cursor-move overflow-hidden rounded-[14px] bg-surface-review transition-all ${
        isDragging ? 'opacity-50 scale-95' : 'opacity-100 scale-100'
      } ${isOver ? 'ring-2 ring-primary-container' : ''}`}
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
  return (
    <>
      <Dialog open={isDecisionModalOpen} onOpenChange={onDecisionModalChange}>
        <DialogContent className="max-w-[560px] rounded-[24px] border-border bg-background px-0 py-0 shadow-[0px_24px_64px_rgba(29,26,36,0.18)]" onOpenAutoFocus={(event) => { event.preventDefault(); modalPrimaryActionRef.current?.focus(); }}>
          <div className="flex flex-col gap-6 p-8">
            <DialogHeader className="gap-3 text-left">
              <DialogTitle className="font-['Lexend',sans-serif] text-[28px] leading-[36px] font-normal text-foreground">
                How would you like to create this listing?
              </DialogTitle>
              <DialogDescription className="font-['Lexend',sans-serif] text-[16px] leading-[24px] text-muted-foreground">
Choose how to start.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter className="flex-col gap-3 sm:flex-col sm:justify-start">
              <Button
                ref={modalPrimaryActionRef}
                onClick={handleGenerateListing}
                disabled={isGenerating}
                className="h-12 w-full rounded-[12px] bg-primary text-primary-foreground hover:bg-primary/90"
              >
                {isGenerating ? 'Generating…' : 'Generate with AI'}
              </Button>
              <Button
                variant="outline"
                onClick={handleNext}
                className="h-12 w-full rounded-[12px] border-border bg-background text-foreground hover:bg-accent"
              >
                Enter details manually
              </Button>
              <DialogClose asChild>
                <button
                  type="button"
                  onClick={onContinueEditingPhotos}
                  className="self-center font-['Lexend',sans-serif] text-[14px] leading-[20px] font-medium text-muted-foreground transition-colors hover:text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-[8px] px-2 py-1"
                >
                  Continue editing photos
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
                    <p className="font-['Lexend',sans-serif] font-[var(--font-weight-normal)] leading-[32px] relative shrink-0 text-foreground text-[var(--text-h3)] whitespace-nowrap text-[24px]">Photos</p>
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
                          Drop images here or click to upload
                        </p>
                        <p className="font-['Lexend',sans-serif] leading-[16px] relative shrink-0 text-on-surface-dim text-[var(--text-xs)] font-[Lexend] text-[14px]">
                          Support for JPG, PNG, SVG (max 10MB each)
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
                                <p className="leading-[20px]">Upload</p>
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
                  The more photos you add the better chance your listing has to sell
                </p>
              </div>

              {/* Action Buttons */}
              <div className={`w-full mt-[8px] ${hasShownDecisionModal && hasReachedMinimumPhotos ? 'sticky bottom-4 z-20' : ''}`}>
                <div className={`flex w-full items-center justify-end gap-[12px] ${hasShownDecisionModal && hasReachedMinimumPhotos ? 'rounded-[20px] border border-border bg-background/95 px-[20px] py-[16px] shadow-[0px_12px_32px_rgba(29,26,36,0.12)] backdrop-blur-sm' : ''}`}>
                  {hasShownDecisionModal && hasReachedMinimumPhotos && (
                    <div className="mr-auto flex flex-col gap-[2px]">
                      <p className="font-['Lexend',sans-serif] text-[16px] leading-[24px] text-foreground">Choose how to continue</p>
                      <p className="font-['Lexend',sans-serif] text-[13px] leading-[18px] text-muted-foreground">Generate details from your photos or keep entering information yourself.</p>
                    </div>
                  )}

                  <button
                    ref={triggerButtonRef}
                    onClick={handleNext}
                    disabled={!hasPhotos}
                    className={`content-stretch flex items-center justify-center relative rounded-[var(--radius)] h-[48px] ${!hasPhotos ? 'bg-foreground/10' : ''} ${hasPhotos ? 'hover:bg-foreground/8 transition-colors' : 'cursor-not-allowed'}`}
                  >
                    <div aria-hidden="true" className="absolute border border-border border-solid inset-0 pointer-events-none rounded-[var(--radius)]" />
                    <div className="content-stretch flex flex-col items-center justify-center relative rounded-[var(--radius)] shrink-0">
                      <div className={`content-stretch flex gap-[10px] items-center px-[16px] py-[10px] relative shrink-0 ${!hasPhotos ? 'opacity-38' : ''}`}>
                        <div className="content-stretch flex items-center justify-center px-[4px] relative shrink-0">
                          <div className="flex flex-col font-['Lexend',sans-serif] font-[var(--font-weight-medium)] justify-center leading-[0] relative shrink-0 text-muted-foreground text-[var(--text-sm)] text-center tracking-[0.1px] whitespace-nowrap">
                            <p className="leading-[20px]">Enter details manually</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </button>

                  <button
                    onClick={handleGenerateListing}
                    disabled={!hasPhotos || isGenerating}
                    className={`content-stretch flex items-center justify-center relative rounded-[var(--radius)] h-[48px] ${!hasPhotos || isGenerating ? 'bg-foreground/10 cursor-not-allowed' : 'bg-primary'}`}
                  >
                    <div className="content-stretch flex flex-col items-center justify-center relative rounded-[var(--radius)] shrink-0">
                      <div className={`content-stretch flex gap-[10px] items-center px-[16px] py-[10px] relative shrink-0 ${!hasPhotos || isGenerating ? 'opacity-38' : ''}`}>
                        <div className="overflow-clip relative shrink-0 size-[20px]">
                          <div className="absolute inset-[9.3%_9.51%_9.5%_9.3%]">
                            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.2384 16.2401">
                              <g id="Icon">
                                <path clipRule="evenodd" d={sparkleSvgPaths.pf313a80} fill={!hasPhotos || isGenerating ? "var(--foreground)" : "var(--primary-foreground)"} fillRule="evenodd" />
                                <path clipRule="evenodd" d={sparkleSvgPaths.p198a1100} fill={!hasPhotos || isGenerating ? "var(--foreground)" : "var(--primary-foreground)"} fillRule="evenodd" />
                                <path d={sparkleSvgPaths.p39ab3c00} fill={!hasPhotos || isGenerating ? "var(--foreground)" : "var(--primary-foreground)"} />
                                <path d={sparkleSvgPaths.p76d5230} fill={!hasPhotos || isGenerating ? "var(--foreground)" : "var(--primary-foreground)"} />
                              </g>
                            </svg>
                          </div>
                        </div>
                        <div className="content-stretch flex items-center justify-center px-[4px] relative shrink-0">
                          <div className={`flex flex-col font-['Lexend',sans-serif] font-[var(--font-weight-medium)] justify-center leading-[0] relative shrink-0 text-[var(--text-sm)] text-center tracking-[0.1px] whitespace-nowrap ${!hasPhotos || isGenerating ? 'text-foreground' : 'text-primary-foreground'}`}>
                            <p className="leading-[20px]">{isGenerating ? 'Generating…' : 'Generate with AI'}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </button>
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
