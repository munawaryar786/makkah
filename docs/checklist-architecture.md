# Deedar E Makkah Frontend Checklist and Architecture

## Checklist

- [x] Multi-page Next.js App Router frontend
- [x] Premium white, emerald green and golden yellow design system
- [x] Sticky header, top bar, dropdown navigation and mobile drawer
- [x] Footer, floating WhatsApp, floating call and scroll-to-top actions
- [x] Home page with hero, trust strip, city previews, inquiry form, why choose, Umrah packages, group Umrah, seasonal offers, tours, services, facilities, process, testimonials, FAQ and CTA
- [x] About, Umrah Packages, Group Umrah, Seasonal Offers, Tours, Baku, Uzbekistan, Services, Visa & Ticketing, Hotels & Transport, Trust, Gallery, Testimonials, FAQ, Blog and Contact pages
- [x] Package detail, tour detail and blog detail templates
- [x] Local TypeScript data files for site, navigation, Umrah packages, group Umrah, seasonal offers, tours, services, testimonials, FAQs, blog and gallery
- [x] Frontend-only forms with success messages
- [x] Trust page with license and client-confirmation placeholders
- [x] Asset folder structure under public/assets

## Architecture

The app uses Next.js, React, TypeScript and Tailwind CSS. Reusable data lives in `src/data`, route pages live in `src/app`, layout and repeated UI live in `src/components`, and helpers live in `src/lib`.

## Component Structure

- `layout`: header, footer and floating actions
- `shared`: section wrappers and page hero
- `cards`: package, service and testimonial cards
- `forms`: inquiry and contact forms
- `sections`: CTA, FAQ accordion, process, stats, hotel guidance and room type content
- `ui`: reusable button styles

## Page Plan

Every required Deedar E Makkah page is implemented as a route. Detail templates are data-driven through package slugs, tour slugs and blog slugs.
