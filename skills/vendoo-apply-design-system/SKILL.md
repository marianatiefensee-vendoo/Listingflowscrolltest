---
name: vendoo-apply-design-system
description: Standardize Figma designs to Vendoo’s design system by replacing ad-hoc styles with tokens, variables, text styles, and approved components. Use when cleaning messy files, preparing developer handoff, migrating legacy screens, or enforcing consistent naming, variants, and auto layout.
---

# Apply Design System — Vendoo

Standardize the target Figma file so every UI element aligns with Vendoo design system rules.

## Workflow

1. Audit the file.
   - Identify local styles, hardcoded values, detached components, inconsistent naming, and missing auto layout.
2. Replace style primitives.
   - Convert all colors to design-system variables.
   - Convert typography to approved text styles.
   - Convert spacing and sizing to tokenized values.
3. Normalize component usage.
   - Replace custom or detached UI with library components.
   - Apply the correct component variants and states.
4. Enforce naming conventions.
   - Rename layers and components using semantic names (for example: `Button/Primary`, `Input/Default`, `Badge/Success`).
5. Apply auto layout.
   - Use auto layout for containers, rows, and button/content groups where structure is intended to be responsive.
6. Remove redundancy.
   - Delete duplicate or unused local styles and components after migration.
7. Validate theme compatibility.
   - Confirm light/dark or other mode support when modes exist in the file.

## Expected Result

- 100% variable/token usage for supported style primitives.
- No detached components left in production-ready screens.
- Consistent semantic naming and predictable component structure.
- Layouts prepared for clean developer handoff.

## Edge-Case Rules

- If a token is missing, map to the closest semantic token.
- If component choice is ambiguous, prefer the most reusable library variant.
- If screens mix multiple style approaches, unify to one system consistently.
