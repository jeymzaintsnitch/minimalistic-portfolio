# Strict Typography Scoping: GeistMono `<p>` Subtitles & GeistSans Descriptions

This update enforces a strict, scoped typographic separation between the `<p>` subtitle elements directly beneath the main section titles (**James**, **Work**, **Hobbies**, **Projects**) and the description blocks across all tabs.

## User Review & Critical Decisions

> [!IMPORTANT]
> Confirmed decisions from your responses:
> - **Confirmed Decision 1 (`GeistMono` + Lowercase Strictly in Header `<p>` Subtitles)**: Only the `<p>` subtitle inside the title header container (`pup ce '27` under **James Catalan**, and `.section-head-copy > p.section-subtext` under **Work**, **Hobbies**, and **Projects**) will use the `GeistMono (woff2)` monospace font stack and all-lowercase styling (`text-transform: lowercase`).
> - **Confirmed Decision 2 (`GeistSans` Strictly for Descriptions)**: Only the description blocks across the webpages (`.about-lead`, `.about-bio`, `.about-now-detail`, `.work-desc`, `.work-highlight-item`, `.hobby-desc`, `.hobby-note`, `.project-cell-description`) will use the `GeistSans (woff2)` sans-serif font stack.

---

## 1. Overview & Core Concept

- **What It Does**: Isolates two specific font stacks to their exact target elements without leaking styles to unrelated containers:
  1. **Header `<p>` Subtitles (`pup ce '27` and `.section-subtext` under `Work`, `Hobbies`, `Projects`)**: Styled with `'GeistMono', 'Geist Mono', ui-monospace, SFMono-Regular, "Roboto Mono", Menlo, Monaco, "Liberation Mono", "DejaVu Sans Mono", "Courier New", monospace` and rendered in all-lowercase (`text-transform: lowercase`) strictly inside `.section-head-copy` and `.about-name-group`.
  2. **Descriptions Across All Tabs**: Styled exclusively with `'GeistSans', 'Geist', 'GeistSans Fallback', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`.
- **Target Audience / Persona**: Visitors and recruiters viewing James Catalan's minimalist portfolio.
- **Key Value**: Creates a sharp, intentional typographic contrast between technical monospace section kickers (`<p>` subtitles), serif display titles, and clean sans-serif descriptions.

---

## 2. User Experience & Visual Design

- **Visual Identity & Theme**:
  - *Aesthetic Direction*: Monochromatic Dark (`#121212`) and Warm Cream Light (`#FBF9F5`) minimalist editorial portfolio.
  - *Typography & Hierarchy*:
    - **Navigation Bar**: `Instrument Serif` (`James`, `Work`, `Hobbies`, `Projects`).
    - **Section & Item Titles**: `Alumni Serif` / `Instrument Serif`.
    - **Title `<p>` Subtitles (`ONLY` inside the header div under `James Catalan`, `Work`, `Hobbies`, `Projects`)**:
      - Font Family: `'GeistMono', 'Geist Mono', ui-monospace, SFMono-Regular, "Roboto Mono", Menlo, Monaco, "Liberation Mono", "DejaVu Sans Mono", "Courier New", monospace`
      - Casing: All lowercase (`pup ce '27`, `software engineering experience, leadership, and systems development.`, `analogue rituals, hardware tinkering, and offline pursuits outside of engineering.`, `selected software, web platforms, and systems engineering builds.`)
    - **Descriptions (`ONLY` description blocks across `James`, `Work`, `Hobbies`, `Projects`)**:
      - Font Family: `'GeistSans', 'Geist', 'GeistSans Fallback', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`
      - Casing: Natural sentence case (unaffected by the header `<p>` lowercase rule).

---

## 3. Key Product Decisions & Trade-Offs

- **Decision 1: Strict CSS Selector Scoping for Lowercase & `GeistMono`**
  - *Chosen Approach*: Scope `text-transform: lowercase` and the `GeistMono` stack directly to `.about-name-group > p.about-pup-tag` and `.section-head-copy > p.section-subtext` rather than applying lowercase globally to parent containers.
  - *Why*: Guarantees that **only** that specific header subtitle div/element is lowercase and uses `GeistMono`, leaving titles and descriptions untouched.
- **Decision 2: Dedicated Description Font Variable (`--font-desc`)**
  - *Chosen Approach*: Bind `--font-desc` to the exact `GeistSans (woff2)` fallback chain and apply it exclusively to the description classes across all four tabs.
  - *Why*: Ensures descriptions use `GeistSans` while other non-description elements retain their existing typography.

---

## 4. Technical Architecture & Data Strategy *(Technical Reference)*

- **Architecture & Typography Mapping Diagram**:

```
┌───────────────────────────────────────────────────────────────────────────┐
│                         PORTFOLIO TYPOGRAPHY MAP                          │
├───────────────────────────────────┬───────────────────────────────────────┤
│ HEADER <p> SUBTITLE               │ DESCRIPTION BLOCKS                    │
│ (Strictly inside Header Div)      │ (Strictly Description Elements)       │
├───────────────────────────────────┼───────────────────────────────────────┤
│ • James:    <p>pup ce '27</p>     │ • James:    .about-lead               │
│ • Work:     <p.section-subtext>   │             .about-bio                │
│ • Hobbies:  <p.section-subtext>   │             .about-now-detail         │
│ • Projects: <p.section-subtext>   │ • Work:     .work-desc                │
│                                   │             .work-highlight-item      │
│ Font: GeistMono (woff2) stack     │ • Hobbies:  .hobby-desc               │
│ Case: lowercase (ONLY this div)   │             .hobby-note               │
│                                   │ • Projects: .project-cell-description │
│                                   │                                       │
│                                   │ Font: GeistSans (woff2) stack         │
└───────────────────────────────────┴───────────────────────────────────────┘
```
