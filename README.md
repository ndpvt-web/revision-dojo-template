<p align="center">
  <img src="public/capybara.png" alt="RevisionDojo Capybara Mascot" width="400" />
</p>

<h1 align="center">RevisionDojo Template</h1>

<p align="center">
  A production-grade, template-ready EdTech website inspired by <a href="https://revisiondojo.com">RevisionDojo</a>.<br/>
  Built with Next.js 16, TypeScript, Tailwind CSS 4, and Framer Motion.<br/>
  <strong>Fully configurable for any business via a single config file.</strong>
</p>

---

## Pages

| Page | Route | Description |
|------|-------|-------------|
| Homepage | `/` | Hero, stats bar, 4 feature sections with mock UIs, AI tutor showcase, coursework grader, testimonials, impact cards, feature grid, FAQ, CTA |
| Pricing | `/pricing` | Dark theme, sale banner, mascot, plan selector (Monthly/Quarterly/Annual), feature checklist, FAQ |
| About | `/about` | Editorial narrative, blockquotes, team profiles, company stats, timeline |
| Features | `/features` | 10 detailed feature cards with color-coded themes |
| Contact | `/contact` | Contact info cards, full contact form |

## Quick Start

```bash
# Install dependencies
npm install

# Build and run production server
npm run dev

# Or build separately
npm run build
npm run start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Adapt for Any Business

The entire site is driven by **one config file**:

```
src/lib/site-config.ts
```

Change these fields to rebrand the whole site:

- `name` / `tagline` / `description` -- Brand identity
- `nav` -- Navigation structure with dropdown menus
- `hero` -- Hero section text, CTAs, badge
- `stats` -- Stats bar values and labels
- `features` -- Feature sections (titles, descriptions, colors, CTAs)
- `aiSection` -- AI product section content
- `pricing` -- Plans, prices, features list
- `testimonials` -- Customer reviews
- `faq` -- FAQ items
- `footer` -- Footer columns, legal links
- `theme` -- Color palette

No other files need to change when rebranding.

## Tech Stack

- **Next.js 16** -- App Router, static prerendering
- **TypeScript** -- Strict mode
- **Tailwind CSS 4** -- With `@tailwindcss/postcss`
- **Framer Motion** -- Scroll-triggered animations
- **Lucide React** -- Icon library

## Project Structure

```
src/
  app/
    layout.tsx          # Root layout (navbar + footer)
    page.tsx            # Homepage
    pricing/page.tsx    # Pricing page
    about/page.tsx      # About page
    features/page.tsx   # Features page
    contact/page.tsx    # Contact page
    globals.css         # Global styles + Tailwind config
  components/
    Navbar.tsx          # Navigation bar with dropdowns
    Hero.tsx            # Hero section with animated CTAs
    StatsBar.tsx        # Stats bar with icons
    FeatureSection.tsx  # Color-coded feature sections with mock UIs
    AISection.tsx       # AI tutor showcase (dark theme)
    CourseworkSection.tsx # Coursework grading demo
    Testimonials.tsx    # Testimonial cards grid
    ImpactCards.tsx     # Impact metric cards
    AllFeatures.tsx     # Feature grid
    FAQ.tsx             # Accordion FAQ
    CTASection.tsx      # Call-to-action section
    Footer.tsx          # Multi-column footer
  lib/
    site-config.ts      # Single config file for all content
```

## License

MIT
