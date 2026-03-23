# Listing flow resilience scenarios

## Empty states
- **No photos uploaded**
  - UI: Keep the photos step open with a dashed helper card and disabled AI-dependent progression until at least one image is added.
  - Copy: “No photos uploaded yet. Add at least one clear cover photo to unlock AI suggestions and the next step.”
- **AI fails during draft generation**
  - UI: Show an inline error banner in the photos step instead of a blocking alert so the user can retry or continue manually without losing uploaded images.
  - Copy: “AI couldn’t finish the draft right now. Your photos are still saved, so you can retry or continue entering details manually.”
- **Missing required fields**
  - UI: Surface a review banner that lists missing fields and keeps the preview visible so users know exactly what to fix.
  - Copy: “Add Photos, Title, Description, Brand, Category, Size, Condition, Marketplace, Price, Shipping before you publish. Your current input stays in place while you fix these items.”

## Autosave
- **Continuous draft saving**
  - UI: Show a small autosave pill across edit and review modes with saving/saved states.
  - Copy: “Saving draft…”, “Draft autosaved”, and “Draft autosaved on this device.”
- **Return after interruption**
  - UI: Restore photos, details, pricing, shipping, and marketplace choices from local storage when the listing flow reloads.
  - Copy: “We keep your latest edits and marketplace choices in this draft, even if AI fails or you need to step away.”

## Error handling
- **Upload validation**
  - UI: Replace browser alerts with inline messages for unsupported file types, file size issues, and upload limits.
  - Copy: “Upload JPG, PNG, or SVG files so AI can understand the item and buyers can preview it clearly.”
  - Copy: “Only 2 more photos fit in this listing. We kept the first 2.”
  - Copy: “image.png is over the 10MB limit. Choose a smaller image and try again.”
- **Preserve user input**
  - UI: Never clear photos or form fields when AI, upload validation, or review validation fails.
  - Copy: “Your current input stays in place while you fix these items.”

## Review step
- **Clear summary before publish**
  - UI: Add a “Before you publish” review card with readiness messaging, autosave status, and a reminder to verify buyer-facing content.
  - Copy: “Review every buyer-facing detail one more time.”
  - Copy: “Photos, details, marketplaces, pricing, and shipping are all ready. Double-check the preview, then publish when you’re confident.”
- **Highlight missing fields**
  - UI: Show a high-contrast warning banner at the top of review mode listing every missing requirement.
  - Copy: “Missing required fields” and “Add … before you publish.”

## Completion moment
- **Clear success state**
  - UI: Keep the success celebration, then add a “What happens next” card directly under the live confirmation.
  - Copy: “Your listing is live” and “What happens next”.
- **Explain next actions**
  - UI: Provide next-step bullets for discovery, editing, and monitoring inventory.
  - Copy: “Buyers can now find this listing in search and marketplace feeds.”
  - Copy: “We’ll keep your photos and details attached to the live listing for edits later.”
  - Copy: “Use View inventory to monitor performance or make marketplace-specific updates.”
