---
name: vendoo-generate-listing-flow
description: Generate or update Vendoo listing flows in Figma using mobile-first UX, image-first entry, AI-assisted inputs, and existing design system components. Use when Codex needs to create, revise, or normalize a listing flow for product listing, AI autofill, draft-saving, review/publish, or related mobile selling experiences.
---

# Vendoo Generate Listing Flow

Generate or update a complete Vendoo listing flow in Figma. Keep the experience mobile-first, fast to complete, and centered on image capture plus AI-assisted drafting.

## Required setup

- Use `$figma-generate-design` when the task involves building or updating multiple screens in a flow.
- Use `$figma-use` before any `use_figma` call.
- Reuse existing library components, variables, and styles. Do not detach components or recreate a component that already exists in the file or library.

## Workflow

### 1. Audit the current file

- Inspect the target page or file for existing listing-flow frames, reusable screens, and relevant components before creating anything.
- Confirm whether the flow already starts with image input. If it does not, make camera or gallery selection the first step.
- Search the design system for existing mobile shells, buttons, inputs, selectors, progress patterns, toasts, and review modules before building new frames.

### 2. Define the flow structure

Build or update screens in this order:

1. Image input
2. AI processing or loading
3. Title and description
4. Item details
5. Review and publish

- Keep each screen focused on one primary task.
- Use progressive disclosure. Delay secondary or advanced fields until later steps.
- Preserve draft-saving affordances from every step.

### 3. Build the screens

- Use mobile-sized frames and auto layout throughout.
- Keep primary actions in thumb-reachable areas.
- Make AI-generated content visibly editable instead of locked or hidden.
- Group structured fields into short, logical sections.
- Keep navigation, progress indication, and save-draft behavior consistent across the flow.

### 4. Include required states

Include these states where relevant:

- Empty
- Loading while AI is processing
- Error for AI failure or offline behavior
- Success after review or publish

Handle these edge cases explicitly:

- Missing AI data: fall back to manual entry without blocking completion.
- Offline mode: preserve progress and surface a draft-saving or retry path.
- Missing required fields: show inline validation near the field and keep the correction path obvious.

### 5. Validate against Vendoo patterns

- Compare spacing, typography, action hierarchy, and component usage against existing Vendoo flows in the same file before finalizing.
- Prefer updating frames in place when iterating on an existing flow so references and layout structure stay intact.
- Remove redundant or duplicate screens if the file already contains overlapping listing steps.

## Output expectations

- Produce or update a complete 5 to 6 screen mobile flow unless the existing file structure requires a different count.
- Show AI-prefilled fields with clear edit affordances.
- Keep copy short and action-oriented.
- Avoid desktop-first layouts, dense forms, or all-fields-at-once screens.

## Example requests

- `Create a listing flow for selling clothes using AI autofill.`
- `Update this existing Vendoo listing flow so it starts with camera input and has a clear AI loading state.`
- `Turn these listing screens into a mobile-first flow with draft saving and review before publish.`
