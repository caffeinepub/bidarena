# Specification

## Summary
**Goal:** Show an opening logo splash on first load that pops in, fades out, then reveals the page content.

**Planned changes:**
- Add a full-screen splash overlay shown on initial page load with the existing BidArena logo centered, hiding all main page sections until the splash completes.
- Implement a short “pop” (scale) animation for the logo followed by a smooth fade-out of the splash, then remove/hide the overlay to reveal the app.
- Add/reuse Tailwind/global CSS animation utilities (keyframes/classes) for the pop and fade-out effects, ensuring existing hero/page animations continue to work.
- Respect `prefers-reduced-motion` by skipping animations or using near-instant transitions so content is revealed quickly.

**User-visible outcome:** On refresh, users briefly see the BidArena logo pop in and fade away, after which the normal page appears and is usable; the splash does not re-trigger during normal in-app navigation.
