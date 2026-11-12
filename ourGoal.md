# Build a Premium Multilingual Digital Development Agency Website

## Role

Act as a Senior Frontend Engineer, UI/UX Designer, Creative Director, and Next.js Architect.

Your task is to design and develop a premium, modern, conversion-focused landing page for a digital development agency.

This must look like a website built by a professional creative development studio, not a generic SaaS template or an ordinary agency landing page.

Think like an experienced designer who understands typography, spacing, visual hierarchy, contrast, composition, and user psychology.

---

# 1. Project Overview

**Agency name:** [AGENCY_NAME]

**Industry:** Digital Development Agency

**Target audience:**
- Startups and entrepreneurs.
- Small and medium-sized businesses.
- Established companies looking to modernize their digital presence.
- Businesses looking for custom websites, web applications, and digital solutions.

**Main objective:**

Convert visitors into potential clients by demonstrating the agency's technical capabilities, creativity, professionalism, and ability to solve real business problems.

**Languages:**
- English (EN)
- Arabic (AR)
- French (FR)

The website must support complete RTL and LTR layouts.

---

# 2. Technology Stack

Use the following technologies:

- Next.js (App Router).
- TypeScript (strict mode).
- Tailwind CSS.
- next-intl for internationalization.
- Framer Motion for animations.
- Lucide React for icons.
- React Hook Form + Zod for form validation.
- Sonner for toast notifications.

Use Server Components by default. Only use Client Components when interactivity or browser APIs require them.

Use reusable, maintainable components and a clear project architecture.

Do not put the entire application inside one page component.

---

# 3. Design References

Study these websites before implementing the design:

**Reference A:**
https://aymenmeddour.framer.website/

Use it as inspiration for:
- Premium portfolio aesthetics.
- Creative typography.
- Strong visual presentation.
- Sophisticated composition.
- Project storytelling.
- Minimal but expressive layouts.

**Reference B:**
https://digex-chi.vercel.app/ar

Use it as inspiration for:
- Agency positioning.
- Services presentation.
- Business-focused messaging.
- Project portfolio.
- Agency workflow.
- Trust-building sections.
- Testimonials.
- Contact conversion.
- Arabic presentation.

Important: Do not copy either website. Create an original visual identity that combines the best ideas from both.

---

# 4. Visual Identity and Design System

Create a professional visual identity.

### Colors

Use a premium dark visual direction.

Suggested palette:

- Main background: #090B10
- Secondary background: #10141C
- Card background: #121824
- Primary blue: #315BDB
- Hover blue: #4776F5
- Primary text: #F5F7FC
- Secondary text: #929BAA
- Borders: rgba(255,255,255,0.09)

The blue should feel sophisticated and close to the dark background.

Avoid excessive gradients and bright neon effects.

Use blue strategically for:
- Important buttons.
- Active navigation.
- Small highlights.
- Interactive elements.
- Selected words in headings.

### Typography

Use:
- English: Inter or Manrope.
- Arabic: IBM Plex Sans Arabic or Cairo.
- French: Manrope or Inter.

Create a consistent typography system:
- Large expressive hero headings.
- Clear section headings.
- Readable body text.
- Small uppercase labels.
- Proper line heights and spacing.

Typography must adapt correctly to all three languages.

### Layout

- Maximum content width around 1280px.
- Consistent horizontal padding.
- Spacious sections.
- Asymmetric layouts where appropriate.
- Balanced whitespace.
- Thin separators and subtle borders.
- Consistent spacing scale.

Do not fill every empty space with decorative elements.

---

# 5. Website Structure

Create a single-page agency landing page with the following sections.

## A. Navbar

Create a premium floating or fixed navigation bar.

Include:
- Agency logo / wordmark.
- Home.
- Services.
- About.
- Our Work.
- Contact.
- Language switcher (EN / AR / FR).
- Primary CTA: Let's Talk.

Requirements:
- Transparent or subtle dark surface.
- Smooth background transition when scrolling.
- Active section indicator.
- Responsive mobile menu.
- Proper RTL navigation in Arabic.
- Language switching must preserve the current page.

## B. Hero Section

This is the most important section.

Create a visually impressive hero that immediately communicates the agency's value.

Suggested headline:

"WE BUILD DIGITAL EXPERIENCES THAT MOVE BUSINESSES FORWARD."

Alternative messaging can be developed for Arabic and French.

Supporting text:

"We design and develop modern websites and digital products that help ambitious businesses grow, connect with customers, and stand out."

Include:
- Small agency availability indicator.
- Main heading with strong typography.
- Supporting description.
- Primary CTA: Start a Project.
- Secondary CTA: Explore Our Work.
- Small scroll indicator.

Visual direction:

Create a distinctive visual element that represents development and creativity.

Possible ideas:
- An abstract 3D-inspired composition.
- Floating interface elements.
- A browser window displaying a website.
- A layered collection of interface previews.
- A subtle interactive digital grid.

The visual must support the message rather than distract from it.

Avoid generic stock photos and random 3D illustrations.

## C. Services Section

Section label: WHAT WE DO.

Headline:

"Everything you need to build your digital presence."

Present services using premium cards.

Suggested services:

1. Web Development
   - Corporate websites.
   - Landing pages.
   - Custom websites.
   - High-performance web experiences.

2. E-commerce Development
   - Online stores.
   - Product catalogs.
   - Shopping experiences.
   - Payment integration.

3. Custom Web Applications
   - SaaS platforms.
   - Business dashboards.
   - Management systems.
   - Custom business solutions.

4. UI/UX Design
   - User research.
   - Wireframes.
   - Interface design.
   - Interactive prototypes.

5. Mobile Development
   - Cross-platform applications.
   - Mobile interfaces.
   - API integration.

6. AI & Automation
   - AI-powered features.
   - Intelligent workflows.
   - Business process automation.
   - AI integrations.

Each service card should include:
- Icon.
- Service title.
- Short description.
- A few relevant capabilities.
- Subtle hover interaction.
- Optional learn-more link.

Do not make all cards visually identical. Introduce subtle variation while maintaining consistency.

## D. About / Why Us

Section label: WHY WORK WITH US?

Headline:

"Technology is not the goal. Solving your problems is."

Explain the agency's approach.

Focus on:
- Understanding business requirements.
- Building custom solutions instead of forcing generic templates.
- Clean and maintainable code.
- Performance and security.
- Responsive experiences.
- Transparent communication.
- Long-term support.

Use an editorial layout with text on one side and a creative visual on the other.

Include three or four differentiators.

Do not invent certifications, awards, or years of experience.

## E. Selected Projects / Portfolio

Section label: SELECTED WORK.

Headline:

"Digital experiences built to make a difference."

This section is extremely important for establishing credibility.

Create visually impressive project cards.

Each project should contain:
- Project cover image or screenshot.
- Project name.
- Industry/category.
- Short project description.
- Technologies used.
- View Project link.

Use large project previews, not tiny generic cards.

Possible layouts:
- Alternating two-column project cards.
- Large featured project followed by smaller projects.
- Asymmetric editorial grid.

Add subtle image zoom and hover transitions.

Create a reusable ProjectCard component.

IMPORTANT:
Never invent real clients, project results, testimonials, or statistics.

Use clearly labeled placeholder projects until actual portfolio content is provided.

## F. Our Process

Section label: HOW WE WORK.

Headline:

"From your idea to a working product."

Present five steps:

01 — Discovery
Understand the business, target audience, requirements, and goals.

02 — Strategy & Planning
Define the technical approach, structure, scope, and project roadmap.

03 — Design
Create the visual direction and user experience.

04 — Development
Build, test, optimize, and refine the solution.

05 — Launch & Support
Deploy the product and provide ongoing improvements when agreed.

Create an elegant timeline or interactive process visualization.

## G. Technologies

Section label: OUR TOOLKIT.

Headline:

"Built with modern technologies."

Display a curated collection of technologies, such as:

- React.
- Next.js.
- TypeScript.
- Node.js.
- Express.
- Tailwind CSS.
- PostgreSQL.
- MongoDB.
- React Native.
- Python.

Use clean technology badges or a subtle logo grid.

Do not create a distracting infinite animation.

## H. Testimonials

Section label: CLIENT FEEDBACK.

Headline:

"Good work speaks through the people who experience it."

Create a testimonial section with:
- Client name.
- Company.
- Role.
- Testimonial.
- Optional project reference.

Use realistic component structure but do not fabricate testimonials.

If no testimonials are available, hide this section or display a neutral alternative such as collaboration principles.

## I. FAQ

Create an accordion with common client questions:

- What types of projects do you develop?
- How does the development process work?
- How long does a project usually take?
- Can you work with an existing website?
- Do you provide maintenance?
- Can I request custom features?
- How can I get a project quotation?

Answers should be concise and professional.

## J. Contact Section

This section should encourage visitors to start a conversation.

Headline:

"Have an idea? Let's build something great together."

Supporting text:

"Tell us about your project. We'll help you turn your idea into a digital solution."

Create a professional contact form.

Fields:
- Full name.
- Email.
- Company (optional).
- Service required.
- Project budget (optional).
- Project description.

Requirements:
- React Hook Form.
- Zod validation.
- Clear error messages.
- Loading state.
- Success and error feedback.
- Accessible labels.

Do not pretend the form submits successfully without a real backend integration.

Prepare a clean API integration point for future implementation.

Include alternative contact methods:
- Email.
- WhatsApp.
- LinkedIn.
- Other social media links.

Use configurable placeholder contact details.

## K. Footer

Include:
- Agency logo.
- Short agency description.
- Navigation links.
- Services links.
- Social links.
- Email.
- Copyright.
- Back-to-top button.

Make it visually consistent with the overall dark design.

---

# 6. Internationalization (Critical)

Implement proper internationalization using next-intl.

Routes:

/en
/ar
/fr

Requirements:

1. All user-facing text must be translated.
2. Never hardcode text directly into reusable components.
3. Store translations in structured JSON files.
4. Language switcher must work correctly.
5. Arabic must use RTL direction.
6. English and French must use LTR direction.
7. Set the HTML lang and dir attributes correctly.
8. Use language-appropriate typography.
9. Ensure navigation, cards, icons, spacing, and layouts work correctly in RTL.
10. Preserve the current page when switching languages.

Suggested structure:

messages/
  en.json
  ar.json
  fr.json

Use translation keys organized by sections:

- navigation
- hero
- services
- about
- projects
- process
- technologies
- testimonials
- faq
- contact
- footer

Do not translate technical terms unnecessarily when they are commonly understood in their original form.

Arabic translations must be natural, professional Arabic, not literal machine translations.

French translations must sound natural and business-oriented.

---

# 7. Animations and Interactions

Use Framer Motion selectively.

Implement:
- Smooth page entrance.
- Hero text reveal.
- Scroll-triggered section reveals.
- Staggered service cards.
- Project image hover effects.
- Smooth navigation transitions.
- FAQ accordion animations.
- Button hover states.
- Subtle interactive visual elements.

Animation principles:
- Keep animations smooth and purposeful.
- Avoid excessive motion.
- Respect prefers-reduced-motion.
- Avoid expensive continuous animations.
- Do not delay important content visibility.

Use CSS transitions for simple hover effects instead of unnecessary JavaScript animations.

---

# 8. Responsive Design

The website must be excellent on:

- Large desktop.
- Standard desktop.
- Laptop.
- Tablet.
- Mobile.

Do not simply shrink the desktop layout.

Design mobile experiences intentionally:
- Simplified navigation.
- Appropriate heading sizes.
- Stacked layouts.
- Proper image cropping.
- Comfortable touch targets.
- No horizontal overflow.
- Well-spaced buttons.
- Fully functional RTL mobile navigation.

Test the Arabic layout independently from English and French.

---

# 9. SEO and Performance

Implement:

- Metadata for each language.
- Unique page titles and descriptions.
- Open Graph metadata.
- Twitter cards.
- Canonical URLs.
- Hreflang alternate links.
- Sitemap.
- Robots.txt.
- Semantic HTML.
- Proper heading hierarchy.
- Descriptive image alt attributes.
- Structured data for the agency where appropriate.

Performance:
- Use next/image.
- Optimize images.
- Lazy-load below-the-fold images.
- Avoid unnecessary dependencies.
- Avoid layout shifts.
- Optimize fonts.
- Use server rendering where appropriate.
- Minimize client-side JavaScript.

Target strong Lighthouse scores for:
- Performance.
- Accessibility.
- Best Practices.
- SEO.

Do not sacrifice accessibility or usability just to achieve a score.

---

# 10. Project Architecture

Use a clean, scalable folder structure.

Suggested architecture:

src/
  app/
    [locale]/
      layout.tsx
      page.tsx
      globals.css

  components/
    layout/
      Navbar.tsx
      Footer.tsx
      MobileMenu.tsx
      LanguageSwitcher.tsx

    sections/
      Hero.tsx
      Services.tsx
      About.tsx
      Projects.tsx
      Process.tsx
      Technologies.tsx
      Testimonials.tsx
      FAQ.tsx
      Contact.tsx

    ui/
      Button.tsx
      SectionHeading.tsx
      ServiceCard.tsx
      ProjectCard.tsx
      Container.tsx
      AnimatedSection.tsx

  config/
    site.ts
    navigation.ts

  data/
    services.ts
    projects.ts
    technologies.ts
    faq.ts

  lib/
    utils.ts
    validations.ts

  i18n/
    routing.ts
    request.ts

messages/
  en.json
  ar.json
  fr.json

public/
  images/
  projects/
  icons/

Adapt the architecture when necessary, but maintain separation of concerns.

---

# 11. Development Rules

Follow these rules strictly:

1. Write clean, readable TypeScript.
2. Avoid using `any`.
3. Create reusable components.
4. Use semantic HTML.
5. Avoid unnecessary client components.
6. Avoid duplicated code.
7. Keep content separate from presentation.
8. Use consistent naming conventions.
9. Use accessible interactive components.
10. Handle loading and error states.
11. Avoid unnecessary abstractions.
12. Do not use fake functionality.
13. Do not use random placeholder images as actual client projects.
14. Do not generate fake statistics or business claims.
15. Keep the application easy to maintain.

---

# 12. Implementation Workflow

Do not attempt to generate the entire website as one giant component.

Work in phases:

**Phase 1 — Foundation**
- Inspect the existing repository.
- Set up Next.js and TypeScript if necessary.
- Configure Tailwind.
- Install dependencies.
- Configure next-intl.
- Establish the design system.
- Set up fonts and global styles.

**Phase 2 — Core Layout**
- Navbar.
- Hero.
- Section containers.
- Footer.
- Responsive navigation.

**Phase 3 — Main Sections**
- Services.
- About.
- Portfolio.
- Process.
- Technologies.
- Testimonials.
- FAQ.
- Contact.

**Phase 4 — Interactions**
- Animations.
- Hover effects.
- Navigation.
- Language switching.
- Contact form validation.

**Phase 5 — Polish**
- Responsive testing.
- Arabic RTL testing.
- Accessibility.
- SEO.
- Performance.
- Cross-browser checks.

After each phase, verify the implementation before continuing.

---

# 13. Final Quality Expectations

The final result should feel like a premium independent digital agency.

The most important priorities are:

1. Exceptional visual design.
2. Strong typography and spacing.
3. Clear agency positioning.
4. Impressive project presentation.
5. Excellent Arabic, English, and French experiences.
6. Smooth but restrained animations.
7. Conversion-focused content.
8. Production-quality frontend architecture.
9. Responsive behavior.
10. Performance and accessibility.

**Final instruction:**

Before writing code, establish the design direction and explain the proposed visual composition briefly.

Then implement the website section by section.

Do not settle for a generic template.

Every section should feel intentionally designed, every animation should have a purpose, and every element should contribute to a coherent premium brand experience.

init the repository and run this commends in the first time 
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/Noufel-sf/H4codeAgency.git
git push -u origin main

when adding features push the latest changes to github everytime
