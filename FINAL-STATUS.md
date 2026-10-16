# Maa Kamakhya Jewellery — current build status

## Included
- Existing Next.js/React/TypeScript project structure retained.
- Official Maa Kamakhya Jewellery logo in `public/maa-kamakhya-logo.png`.
- Black-and-gold visual system, responsive sections, category filters, search, enquiry list, and WhatsApp enquiry links.
- Generated royal/temple-inspired hero image in `public/royal-jewellery-hero.png`, with slow parallax, shimmer, glow, and floating sparkle animations.
- Product cards wired to example external image URLs; price is always shown as `PRICE ON REQUEST`.
- Reduced-motion CSS fallback for visitors who prefer less animation.

## Important limitations
- The goddess and traditionally dressed woman are part of a generated static illustration. The CSS animation gives the image subtle movement; it is not a frame-by-frame character animation or a video.
- Product imagery is illustrative, not verified shop inventory. Ask the shop to confirm actual items and availability.
- WhatsApp enquiries are implemented; no payment checkout, order database, inventory sync, or admin dashboard is included.
- External image URLs need internet access and should be replaced with downloaded/licensed images under `public/` for long-term reliability.
- A production build has not been run in this environment because dependencies are not installed here. Run `npm install`, then `npm run typecheck` and `npm run build` before deployment.
