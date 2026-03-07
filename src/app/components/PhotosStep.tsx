import { useState, useRef } from "react";
import IllustrationSvg1 from "../../imports/IllustrationSvg1";
import svgPaths from "../../imports/svg-wo4tf7tw77";
import sparkleSvgPaths from "../../imports/svg-jpw0qaix23";
import editSvgPaths from "../../imports/svg-2jobo4qree";
import chevronSvgPaths from "../../imports/svg-nl9hp3fmvu";
import type { ItemDetails } from "../App";

interface PhotosStepProps {
  onContinue: (photos: string[], generatedDetails?: ItemDetails) => void;
  isCollapsed?: boolean;
  onToggleExpand?: () => void;
}

export default function PhotosStep({ onContinue, isCollapsed = false, onToggleExpand }: PhotosStepProps) {
  const [photos, setPhotos] = useState<string[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const MAX_PHOTOS = 8;
  const hasPhotos = photos.length > 0;

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

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleNext = () => {
    if (hasPhotos) {
      onContinue(photos);
    }
  };

  const handleGenerateListing = () => {
    if (hasPhotos) {
      // Simulate AI analysis and generate mock item details
      const generatedDetails: ItemDetails = {
        title: "Classic Denim Jacket - Vintage Style",
        description: "Beautiful vintage-style denim jacket in excellent condition. Features classic button-front closure, chest pockets, and adjustable cuffs. Perfect for layering in any season. The timeless design pairs well with both casual and dressy outfits. Shows minimal signs of wear, maintaining its original quality and appeal.",
        category: "Women's Clothing",
        brand: "Levi's",
        condition: "Like New",
      };
      
      onContinue(photos, generatedDetails);
    }
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
      <div className="bg-[#F5EEFC] content-stretch flex flex-col gap-[12px] items-start justify-center relative rounded-[16px] w-full">
        <div aria-hidden="true" className="absolute border border-[#cbc3d7] border-solid inset-[-1px] pointer-events-none rounded-[17px]" />
        <div className="bg-[#F5EEFC] content-stretch flex flex-col gap-[8px] items-start justify-center relative rounded-[16px] shrink-0 w-full">
          <div className="relative shrink-0 w-full">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center justify-between px-[24px] py-[16px] relative w-full">
                <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
                  <div className="content-stretch flex flex-[1_0_0] gap-[16px] h-full items-center min-h-px min-w-px relative">
                    <div className="content-stretch flex items-center relative shrink-0">
                      <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                        {/* Step with checkmark */}
                        <div className="relative shrink-0 size-[32px]">
                          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                            <circle cx="16" cy="16" fill="var(--fill-0, #C3B0FF)" r="15.25" stroke="var(--stroke-0, #C3B0FF)" strokeWidth="1.5" />
                          </svg>
                          <div className="absolute left-[4px] overflow-clip size-[24px] top-[4px]">
                            <div className="absolute inset-[19.32%_8.33%_19.99%_8.33%]">
                              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 14.5656">
                                <path d={editSvgPaths.p97f8e00} fill="var(--fill-0, #503F86)" />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="content-stretch flex items-center justify-center relative shrink-0">
                          <p className="font-['Lexend:Regular',sans-serif] font-normal leading-[32px] relative shrink-0 text-[#494455] text-[24px] whitespace-nowrap">Photos</p>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex items-center justify-center relative shrink-0">
                      <p className="font-['Lexend:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#7a7486] text-[14px] tracking-[0.25px] whitespace-nowrap">
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
                        className="bg-[#f5eefc] mr-[-8px] relative rounded-[8px] shrink-0 size-[48px]"
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
                    onClick={onToggleExpand}
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
    <div className="bg-white content-stretch flex flex-col gap-[12px] items-start relative rounded-[12px] w-full border border-[#7a7486]" style={!isCollapsed ? { boxShadow: "0px 1px 2px 0px rgba(0,0,0,0.3), 0px 1px 3px 0px rgba(0,0,0,0.15)" } : {}}>
      <div aria-hidden="true" className="absolute border border-[#cbc3d7] border-solid inset-[-1px] pointer-events-none rounded-[13px] bg-[#ffffff]" />
      
      {/* Top Content - Header */}
      <div className="content-stretch flex flex-col gap-[8px] items-start pt-[24px] relative rounded-tl-[12px] rounded-tr-[12px] shrink-0 w-full" style={{ backgroundImage: "linear-gradient(90deg, rgba(104, 58, 223, 0.08) 0%, rgba(104, 58, 223, 0.08) 100%), linear-gradient(90deg, rgb(245, 238, 252) 0%, rgb(245, 238, 252) 100%)" }}>
        {/* Title */}
        <div className="relative shrink-0 w-full">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[8px] items-center px-[24px] relative w-full">
              <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative">
                {/* Step */}
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                  <div className="bg-[#64539b] content-stretch flex gap-[10px] items-center relative rounded-[16px] shrink-0 size-[32px]">
                    <div aria-hidden="true" className="absolute border-[#64539b] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[16px]" />
                    <div className="content-stretch flex flex-[1_0_0] h-full items-center justify-center min-h-px min-w-px relative">
                      <div className="flex flex-col font-['Lexend:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-center text-white tracking-[0.5px] whitespace-nowrap">
                        <p className="leading-[24px]">1</p>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex items-center justify-center relative shrink-0">
                    <p className="font-['Lexend:Regular',sans-serif] font-normal leading-[32px] relative shrink-0 text-[#1d1a24] text-[24px] whitespace-nowrap">Photos</p>
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
                  className={`bg-[#f5eefc] h-[323px] relative rounded-[12px] shrink-0 w-full ${
                    isDragging ? "border-2 border-[#64539b] border-dashed" : ""
                  }`}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                >
                  <div aria-hidden="true" className="absolute border border-[#cbc3d7] border-solid inset-0 pointer-events-none rounded-[12px]" />
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
                        <p className="font-['Lexend',sans-serif] leading-[24px] relative shrink-0 text-[#1d1a24] text-[16px] font-[Lexend]">
                          Drop images here or click to upload
                        </p>
                        <p className="font-['Lexend:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#6d6c71] text-[12px]">
                          Support for JPG, PNG, SVG (max 10MB each)
                        </p>
                      </div>

                      {/* Upload Button */}
                      <button
                        onClick={handleUploadClick}
                        className="content-stretch flex h-[48px] items-center justify-center relative rounded-[5px] shrink-0 hover:bg-[rgba(29,26,36,0.08)] transition-colors"
                      >
                        <div aria-hidden="true" className="absolute border border-[#cbc3d7] border-solid inset-0 pointer-events-none rounded-[5px]" />
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
                              <div className="flex flex-col font-['Lexend:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#494455] text-[14px] text-center tracking-[0.1px] whitespace-nowrap">
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
                          <div
                            key={`photo-${tile.index}`}
                            className="group relative aspect-square overflow-hidden border border-[#cbc3d7] bg-[#f5eefc] rounded-[16px]"
                          >
                            <img
                              src={tile.photo}
                              alt={`Upload ${tile.index + 1}`}
                              className="size-full object-cover"
                            />
                            <button
                              onClick={() => handleRemovePhoto(tile.index)}
                              className="absolute right-2 top-2 flex size-6 items-center justify-center rounded-full bg-[#d32f2f] text-white opacity-0 transition-opacity hover:bg-[#c62828] group-hover:opacity-100"
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
                            {tile.index === 0 && (
                              <div className="absolute bottom-2 left-2 rounded bg-[#64539b] px-2 py-0.5 font-['Lexend:Medium',sans-serif] font-medium text-xs text-white">
                                Cover
                              </div>
                            )}
                          </div>
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
                              e.currentTarget.classList.add('!border-[#64539b]', '!bg-[rgba(104,58,223,0.08)]');
                            }}
                            onDragLeave={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              e.currentTarget.classList.remove('!border-[#64539b]', '!bg-[rgba(104,58,223,0.08)]');
                            }}
                            onDrop={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              e.currentTarget.classList.remove('!border-[#64539b]', '!bg-[rgba(104,58,223,0.08)]');
                              
                              if (e.dataTransfer?.files && e.dataTransfer.files.length > 0) {
                                const files = Array.from(e.dataTransfer.files);
                                handleFiles(files);
                              }
                            }}
                            className="flex aspect-square items-center justify-center rounded-lg border-2 border-dashed border-[#cbc3d7] bg-[#f5eefc] transition-colors hover:border-[#64539b] hover:bg-[rgba(104,58,223,0.08)] active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#64539b] focus:ring-offset-2 cursor-pointer"
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
              <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
                <div className="overflow-clip relative shrink-0 size-[24px]">
                  <div className="absolute inset-[4.17%]">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
                      <g id="Icon">
                        <path d={svgPaths.p3b610d00} fill="var(--fill-0, #7A7486)" />
                        <path d={svgPaths.p26d88780} fill="var(--fill-0, #7A7486)" />
                        <path clipRule="evenodd" d={svgPaths.p396e0c00} fill="var(--fill-0, #7A7486)" fillRule="evenodd" />
                      </g>
                    </svg>
                  </div>
                </div>
                <p className="font-['Lexend:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#7a7486] text-[12px] tracking-[0.4px]">
                  The more photos you add the better chance your listing has to sell
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-[12px] items-center justify-end w-full mt-[8px]">
                {/* Next Button - Outline */}
                <button
                  onClick={handleNext}
                  disabled={!hasPhotos}
                  className={`content-stretch flex items-center justify-center relative rounded-[5px] h-[48px] ${
                    !hasPhotos ? 'bg-[rgba(29,26,36,0.1)]' : ''
                  } ${hasPhotos ? 'hover:bg-[rgba(29,26,36,0.08)] transition-colors' : 'cursor-not-allowed'}`}
                >
                  <div aria-hidden="true" className="absolute border border-[#cbc3d7] border-solid inset-0 pointer-events-none rounded-[5px]" />
                  <div className="content-stretch flex flex-col items-center justify-center relative rounded-[5px] shrink-0">
                    <div className={`content-stretch flex gap-[10px] items-center px-[16px] py-[10px] relative shrink-0 ${!hasPhotos ? 'opacity-38' : ''}`}>
                      <div className="content-stretch flex items-center justify-center px-[4px] relative shrink-0">
                        <div className="flex flex-col font-['Lexend:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#494455] text-[14px] text-center tracking-[0.1px] whitespace-nowrap">
                          <p className="leading-[20px]">Next</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </button>

                {/* Generate Listing Button - Filled */}
                <button
                  onClick={handleGenerateListing}
                  disabled={!hasPhotos}
                  className={`content-stretch flex items-center justify-center relative rounded-[5px] h-[48px] ${
                    !hasPhotos ? 'bg-[rgba(29,26,36,0.1)] cursor-not-allowed' : 'bg-[#4a00bf]'
                  }`}
                >
                  <div className="content-stretch flex flex-col items-center justify-center relative rounded-[5px] shrink-0">
                    <div className={`content-stretch flex gap-[10px] items-center px-[16px] py-[10px] relative shrink-0 ${!hasPhotos ? 'opacity-38' : ''}`}>
                      <div className="overflow-clip relative shrink-0 size-[20px]">
                        <div className="absolute inset-[9.3%_9.51%_9.5%_9.3%]">
                          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.2384 16.2401">
                            <g id="Icon">
                              <path clipRule="evenodd" d={sparkleSvgPaths.pf313a80} fill={!hasPhotos ? "#1D1A24" : "white"} fillRule="evenodd" />
                              <path clipRule="evenodd" d={sparkleSvgPaths.p198a1100} fill={!hasPhotos ? "#1D1A24" : "white"} fillRule="evenodd" />
                              <path d={sparkleSvgPaths.p39ab3c00} fill={!hasPhotos ? "var(--fill-0, #1D1A24)" : "var(--fill-0, white)"} />
                              <path d={sparkleSvgPaths.p76d5230} fill={!hasPhotos ? "var(--fill-0, #1D1A24)" : "var(--fill-0, white)"} />
                            </g>
                          </svg>
                        </div>
                      </div>
                      <div className="content-stretch flex items-center justify-center px-[4px] relative shrink-0">
                        <div className={`flex flex-col font-['Lexend:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-center tracking-[0.1px] whitespace-nowrap ${!hasPhotos ? 'text-[#1d1a24]' : 'text-white'}`}>
                          <p className="leading-[20px]">Generate Listing</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </button>
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
  );
}