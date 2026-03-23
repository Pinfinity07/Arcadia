# Arcadia Codebase Guide for AI Agents

## Project Overview
**Arcadia** is a Next.js 16 gaming social platform frontend focused on clip sharing, community discovery, and LFG (Looking For Group) functionality. Built with React 19, TypeScript, and Tailwind CSS 4 with extensive GSAP-based animations.

### Tech Stack
- **Framework**: Next.js 16 (App Router, Server Components)
- **Styling**: Tailwind CSS 4 + PostCSS
- **Animation**: GSAP 3.14 (with ScrollTrigger plugin)
- **Icons**: Lucide React
- **Runtime**: React 19, TypeScript 5

## Architecture Patterns

### Component Structure
- **Pages**: Located in `app/` directory using Next.js file-based routing (e.g., `app/page.tsx`, `app/login/page.tsx`)
- **Components**: Reusable UI components in `components/` directory
- **Utilities**: Modular animation and helper functions in `lib/` directory
- **Styling**: Global CSS in `app/globals.css` using Tailwind directives

### Key Pages & Routes
- `/` - Landing page with hero section, features, and games discovery
- `/auth` - Unified login/signup toggle page with form switching animations
- `/login` - Dedicated login page with hero section
- `/signup` - Dedicated signup page with hero section
- `/community_hub`, `/discover`, `/feed`, `/profile` - Placeholder route structures

### Animation Architecture
Animations are **split into two domains**:
1. **Page Load Animations** (`lib/animations.ts`): Hero elements, feature cards, game cards, section headings, footer
   - Uses GSAP with ScrollTrigger for on-scroll effects
   - Staggered animations with configurable delays
   - Hover effects on cards and interactive elements
   
2. **Form/Auth Animations** (`lib/loginAnimations.ts`): Login/signup page-specific animations
   - Input focus/blur effects with color transitions
   - Button hover animations with scale and arrow movements
   - Social button interactions
   - Form group staggered animations

**Critical Pattern**: Animations are initialized in `useEffect` hooks by calling:
- `initializeAllAnimations()` on home page
- `initializeLoginAnimations()` + `animatePageTransition()` on auth pages

## Code Conventions

### 'use client' Directive
All pages and interactive components use `'use client'` because they:
- Initialize animations on mount
- Manage local state (show/hide password, form toggles)
- Attach DOM event listeners

**Never** convert interactive auth/animation pages to server components.

### State Management
Simple local state with `useState` for:
- Password visibility toggles
- Form mode switching (login vs signup)
- Form inputs (remember me, agree terms, etc.)

No external state management required currently.

### Styling Patterns
- **Color Scheme**: Dark theme with purple accents (#a855f7 primary, #1A1022 dark bg, #210F36 card bg)
- **Responsive**: Mobile-first with `md:` breakpoints; hide `lg:` elements on mobile
- **Tailwind**: Uses utility classes extensively; global styles in `app/globals.css`
- **Custom Colors**: Defined as inline Tailwind strings (e.g., `bg-[#1A1022]`)

### Animation Patterns
```typescript
// Standard stagger pattern
gsap.from(elements, {
  duration: 0.7,
  opacity: 0,
  y: 20,
  stagger: 0.15,
  ease: 'power3.out',
  delay: 0.2,
});

// Scroll trigger pattern
gsap.to(element, {
  scrollTrigger: {
    trigger: element,
    start: 'top 85%',
    toggleActions: 'play none none none',
  },
  duration: 0.8,
  opacity: 1,
  y: 0,
  ease: 'power3.out',
});

// Hover effect pattern
element.addEventListener('mouseenter', () => {
  gsap.to(element, { duration: 0.3, scale: 1.05, ease: 'power2.out' });
});
```

## Common Workflows

### Running the Project
```bash
npm run dev          # Start dev server on http://localhost:3000
npm run build        # Production build
npm start            # Start production server
npm run lint         # Run ESLint
```

### Adding New Pages
1. Create `.tsx` file in `app/[feature_name]/page.tsx`
2. Include `'use client'` if animations or interactivity needed
3. Import animations from `lib/` and call in `useEffect`
4. Follow existing color/spacing patterns from landing page

### Adding Animations
1. Create animation functions in `lib/animations.ts` or `lib/loginAnimations.ts`
2. Use DOM selectors (class names) to target elements
3. Use GSAP with `gsap.from()`, `gsap.to()` for consistency
4. Call animation functions in `useEffect` with small delay: `setTimeout(() => { animateFunction() }, 100)`

### Modifying Styling
- Modify Tailwind classes directly in JSX (no CSS files needed)
- Update color constants only in `app/globals.css` if establishing new palette
- Test responsive behavior on mobile (`md:` breakpoint at 768px)

## Integration Points

### No Backend Integration (Yet)
- Frontend is **UI-only** currently
- No API routes or server-side data fetching
- Mock data hardcoded (e.g., clip data in `ClipOfTheDay`, game cards)

### External Assets
- Uses **Unsplash images** via direct URLs for game cards and hero sections
- No image optimization or Next.js Image component used (can improve later)

### OAuth Integration Points (Stub)
Social login buttons present but non-functional:
- GitHub, Google, Discord buttons in auth pages
- Ready for API integration when backend ready

## Important Notes for Agents

### Performance Considerations
- GSAP animations run on page load; watch for duplicate initializations
- ScrollTrigger plugin registered once globally in `animations.ts`
- Use `clearProps: 'all'` to prevent animation style accumulation on re-renders

### Browser Compatibility
- Target modern browsers (ES2017+); Tailwind CSS 4 requires recent browser versions
- Test scroll animations (ScrollTrigger) in different browsers

### File Naming Convention
- Components: PascalCase (e.g., `ClipOfTheDay.tsx`)
- Utilities: camelCase (e.g., `loginAnimations.ts`)
- Avoid naming component functions with lowercase (e.g., `clip_of_the_day` should ideally be `ClipOfTheDay`)

### CSS Classes Hierarchy
Most styled elements follow pattern:
```
div.section → div[class*="max-w-7xl"] (container) → content cards
```

Query selectors in animations often look for semantic element order (e.g., "section[1]" for features).

## Common Pitfalls to Avoid

1. **Animations not firing**: Ensure `useEffect` calls animation functions with setTimeout delay
2. **Duplicate animations**: Check for multiple calls to `initializeAllAnimations()` on same page
3. **Form state loss**: Auth page uses `gsap.to()` with `onComplete` callbacks to manage mode switching
4. **Styling conflicts**: Tailwind utilities can conflict; always check specificity in dev tools
5. **Mobile layout issues**: Test with `hidden lg:flex` and `md:` breakpoints extensively

## Future Integration Readiness

When backend API becomes available:
- Create API client functions in new `lib/api/` directory
- Use `fetch()` or external HTTP client (axios/swr/react-query)
- Replace mock data in components with API calls in `useEffect`
- Add loading/error states to components
- Implement environment variables for API endpoints (`.env.local`)
