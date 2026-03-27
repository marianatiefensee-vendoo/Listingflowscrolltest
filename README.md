# Listing Flow 2026 - Testing Prototype  
  
A local Vite + React prototype for the Vendoo listing flow redesign.

This project is used to recreate and evolve the listing flow experience from Figma into a working interactive environment with existing UI logic, routing, and API-connected behaviors. It supports iterative implementation from Figma using Codex + Figma MCP, while preserving local app structure and business logic instead of rebuilding the flow from scratch.

---

## 🚀 Live demo

Vercel deployment:  
https://listingflowscrolltest-5gip-marianatiefensee-2430s-projects.vercel.app/

---

## 🎯 Purpose

This repo is used to:

- Prototype and refine the listing flow UI  
- Test layout and information architecture changes  
- Adapt Figma designs into working code  
- Preserve and iterate on real flow logic instead of rebuilding from scratch  
- Validate shell, summary, and section-by-section UI changes locally  

---

## 🎨 Figma references

Original prototype:  
https://www.figma.com/design/gUgX0XWqCoH6GOaRMrpIuO/Listing-Flow-Scroll--Test  

Current redesign work:  
https://www.figma.com/design/941LilI1FqImC2usHWp0qN/Listing-Flow-Draft--Recreate-  

---

## 🧩 Current scope

The flow currently includes:

- Page shell and overall layout composition  
- Top header and progress structure  
- Listing summary panel  
- Photos step  
- Item details step  
- Marketplace selection  
- Pricing  
- Shipping  
- Review and publish patterns  

This repo may also include imported Figma reference components under `src/imports/`, used for visual comparison and implementation support.

---

## 🛠 Tech stack

- Vite  
- React  
- TypeScript  
- Component-based architecture  
- Theme styling via `src/styles/theme.css`  

---

## 📁 Project structure

```text
src/
  app/
    components/
    data/
    hooks/
    routes.tsx
  imports/
  styles/
  utils/


```
##   
## Key directories  
* src/app/components/ → main app implementation  
* src/imports/ → Figma reference components  
* src/styles/ → theme + global styles  
* src/utils/ → utilities (API, helpers)  
  
## ⚙️ Getting started  
  
## 	Prerequisites  
    * Node.js  
    * npm  
  
## Install dependencies  
```

npm install


```
  
## Run locally  
```

npm run dev


```
Open:  
```

http://localhost:5173


```
  
## Build for production  
```

npm run build


```
  
## Preview production build  
```

npm run preview


```
Open:  
```

http://localhost:4173


```
  
## 🔄 Recommended workflow  
##   
## 	Local iteration  
    1. Run npm run dev  
    2. Compare UI with Figma  
    3. Make scoped updates (layout → summary → sections)  
    4. Validate behavior before committing  
  
## 	Figma → Code workflow  
    * Use Figma MCP to inspect specific nodes  
    * Adapt existing code instead of regenerating everything  
    * Preserve:  
        * routing  
        * API logic  
        * state management  
    * Keep changes **small and scoped**  
  
## 🧠 Notes  
  
* This project is under active iteration  
* Some files reflect recovery from Codex-assisted layout passes  
* src/imports/ is not the source of truth — it’s a reference layer  
* Use local dev for iteration, Vercel for sharing/demo  
  
## 🧼 Best practices  
  
* Avoid committing:  
    * .DS_Store  
    * temp files  
    * screenshots unless intentional  
* Keep diffs focused and intentional  
* Prefer feature branches (e.g. layout-pass-v2)  
  
## 📦 Deployment  
  
This project is deployed via Vercel for quick sharing and review.  
