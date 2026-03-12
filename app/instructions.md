# Instructions for Building the Biblio Landing Page

## Context

This project is the landing page for the **Biblio app**.
The website is being built using **Next.js, React, TailwindCSS, and TypeScript**.

The developer working on this project (Vedansh) is **a beginner in website development**, so explanations must be clear, structured, and step-by-step.

Do not assume prior knowledge of advanced web concepts.

---

# Core Instructions

## 1. Explain Every Step Clearly

Since the developer is a beginner, you must explain:

* What needs to be done
* Why it is being done
* Exactly **where** to do it

Whenever you suggest creating or editing something, specify:

* The exact **file name**
* The exact **folder location**
* The **full code snippet**
* What the code is doing

Example format:

Create a new file:

app/components/Navbar.tsx

Then paste the following code:

```tsx
// code here
```

---

# 2. Always Show the Folder Structure

Whenever a new file or asset is added, show the updated structure.

Example:

```
app
 ├ components
 │   └ Navbar.tsx
 ├ sections
 │   └ Hero.tsx
 ├ layout.tsx
 └ page.tsx
```

This helps keep the project organized.

---

# 3. Tell Where Assets Should Go

Whenever images, icons, or other assets are used, clearly specify where they must be placed.

All static assets should go inside:

```
/public
```

Example structure:

```
public
 ├ images
 │   ├ hero.png
 │   ├ screenshot1.png
 │   └ screenshot2.png
 ├ icons
 │   └ logo.svg
 └ favicon.ico
```

Also explain how to reference them in code.

Example:

```tsx
<img src="/images/hero.png" />
```

---

# 4. Maintain Clean Project Structure

The project should follow a clean structure using **components and sections**.

Recommended structure:

```
app
 ├ components
 │   ├ Navbar.tsx
 │   ├ FeatureCard.tsx
 │   └ Footer.tsx
 │
 ├ sections
 │   ├ Hero.tsx
 │   ├ Features.tsx
 │   ├ Screenshots.tsx
 │   └ CTA.tsx
 │
 ├ globals.css
 ├ layout.tsx
 └ page.tsx
```

Rules:

* **components/** → reusable UI pieces
* **sections/** → major landing page sections
* **page.tsx** → assembles the full page

---

# 5. The Website MUST Be Mobile Responsive

This is extremely important.

The website must work properly on:

* mobile phones
* tablets
* laptops
* large monitors

When writing UI code, always use responsive Tailwind classes such as:

```
sm:
md:
lg:
xl:
```

Example:

```
text-3xl md:text-5xl
grid-cols-1 md:grid-cols-2
px-4 md:px-12
```

Always design **mobile-first**, meaning:

1. Layout should work on small screens first
2. Then scale up for larger screens

---

# 6. Follow Modern UI/UX Practices

The landing page should look like a modern startup website.

Important design principles:

* Clear visual hierarchy
* Clean spacing
* Minimal color palette
* Smooth scrolling
* Modern typography
* Consistent spacing system
* Clean card layouts

Avoid clutter and excessive elements.

---

# 7. Break Work Into Small Steps

Never provide too many steps at once.

Instead:

1. Implement one section
2. Explain it
3. Then move to the next section

Example workflow:

Step 1 → Create Navbar
Step 2 → Create Hero section
Step 3 → Create Features section
Step 4 → Add screenshots
Step 5 → Add CTA section
Step 6 → Add footer

---

# 8. Explain Tailwind Classes

Whenever Tailwind classes are used, briefly explain what they do.

Example:

```
className="text-4xl font-bold text-center"
```

Explain:

* `text-4xl` → large text
* `font-bold` → bold font
* `text-center` → centers text

---

# 9. Assume Nothing Is Obvious

Even basic things like:

* where to create folders
* where to place images
* how to import components
* how to structure files

should be clearly explained.

---

# 10. Development Workflow

Whenever a step is completed, explain how to verify it.

Example:

Run:

```
npm run dev
```

Then open:

```
http://localhost:3000
```

Explain what should appear on the screen.

---

# 11. Established Layout Rules & Patterns (Reference)

Through iterations on components like `PageFourSection.tsx` and `PageTwoSection.tsx`, follow these established rules for consistent UI and code quality:

**1. Data-Driven Styling within `.map()` Loops:**
* Avoid deep, messy inline ternary operators. If a mapped component variant (like a card) needs specific styling, store those Tailwind strings in the data object.
* Example: Add `containerClass`, `imageWrapperClass`, `textClass` inside the array object to keep JSX blocks clean.

**2. Image Bleed & Strict Bounding (Edge-Sticking):**
* **Do NOT use padding/margin tricks** to try and push images against a card's edge, nor use `object-cover` if you want to avoid cropping limits.
* **DO USE absolute positioning**: Wrap the `<Image>` in a `absolute pointer-events-none` container.
* Pin the image wrapper using explicit coordinates (`top-0`, `bottom-0`, `left-1/2 -translate-x-1/2`).
* Use `fill` combined with `object-contain object-top` or `object-contain object-bottom` to seamlessly lock an image to highly specific card edges while keeping aspect ratios correct.

**3. Preventing Mobile Image/Text Overlap:**
* Calculate relative heights using percentage boundaries, making sure they scale distinctively per device format.
* Example: `h-[75%] md:h-[80%]`. Shorter on mobile to safely pull the bounds of the image away from surrounding absolute text.

**4. Typography & Layout Hacks:**
* For custom headline text wrapping constraints that CSS `max-w` won't perfectly obey, manually insert line breaks (`\n`) and apply the Tailwind utility `whitespace-pre-line` to create aesthetically pleasing breakpoints (like avoiding orphans).
* Keep font sizing precise and legible (e.g. `text-[13px] md:text-sm`).

**5. Horizontal Scroll Tracks (Carousels):**
* Apply `snap-x snap-mandatory` to the track, and `snap-start shrink-0` to the children.
* Hide native UI with `[scrollbar-width:none] [&::-webkit-scrollbar]:hidden`.
* Control overflow dynamically using `.scrollBy` tied to a React `useRef`.

---

# Goal of This Website

The goal is to create a **clean, modern landing page for the Biblio app** that:

* clearly explains the product
* showcases its features
* looks professional
* works on all devices
* follows modern design standards
