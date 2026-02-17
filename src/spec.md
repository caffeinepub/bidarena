# Specification

## Summary
**Goal:** Replace the current BidArena logo with the user-provided logo asset everywhere the logo is displayed.

**Planned changes:**
- Add the user-provided logo image as a frontend static asset.
- Update header and footer logo references to use the user-provided logo (removing references to `/assets/generated/bidarena-logo.dim_512x512.png`).

**User-visible outcome:** The new user-provided logo appears in the header and footer (and anywhere else the app renders the logo) without broken images.
