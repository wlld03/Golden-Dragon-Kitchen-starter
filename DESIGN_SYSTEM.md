# Taverna Garibaldi — Design System

## Brief
- Primary audience: travellers and local diners in Levanto.
- Business goal: turn discovery into a phone reservation or menu request.
- Primary task: understand the atmosphere, browse a concise menu preview, and contact the restaurant.
- Primary CTA: `Prenota` / call the verified public telephone number.
- Truth boundary: address and telephone come from public Levanto tourism listings; menu names, brand story, hours, prices, and imagery remain concept material until approved by the owner.

## Visual thesis
Minimal Ligurian coast: limestone paper, deep Mediterranean blue, and one tomato-red accent. Large sans-serif headlines provide clarity; restrained Georgia italics add an Italian editorial note. Layouts are asymmetric, with sharp edges and circular CTAs as the only rounded geometry.

## Tokens
- Ink: `#101820`
- Paper: `#f4f2ed`
- Mediterranean blue: `#0d3c55`
- Tomato red: `#d14936`
- Body: Arial / system sans
- Editorial accent: Georgia italic

## Motion
- Hero elements enter once with staggered vertical motion.
- Content reveals once on viewport entry.
- Images use a restrained hover scale.
- Buttons use small translate/rotation feedback.
- All nonessential motion is disabled by `prefers-reduced-motion`.

## Image roles
- Hero: 16:9 Levanto-inspired coast concept, left-side headline safety.
- Food feature: 4:3 pizza concept, mobile-safe central crop.
- Both are clearly labelled concept imagery and must be replaced with owner-approved photography before launch.
