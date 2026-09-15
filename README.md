# Local business website starter · Golden Dragon Kitchen demo

A static, responsive Next.js website built from the MIT-licensed Table & Fork restaurant template. This is a **fictional demo business**; its menu, operating hours and AI-created images are examples, not claims about a real restaurant. No booking, payment, ordering or customer accounts are included.

## Run and deploy

Node.js >=20 is recommended (the installed Next.js 15 release supports Node >=20). Use npm and the checked-in package lock:

```bash
npm ci
npm run build
```

The production build produces `out/`. Deploy that folder to a static host. For Vercel, import the repository as a Next.js project and use the default build command `npm run build`; the app is configured with `output: "export"`. Connect a real domain and check the deployed URL and buttons before telling a customer it is live. Actual Vercel account deployment has not been performed as part of this demo.

## Make a client site

Edit **`config/business.ts`** for the business name, type, hero copy, description, logo, hero image, verified phone and address, hours, social URLs, order URL, services, featured items, menu, testimonials and gallery. Replace images in `public/images/` with client-owned or otherwise licensed photographs and provide accurate alt text.

- `isDemo: true` displays disclosure labels, sets `noindex`, and suppresses business structured data. Turn it off **only after** the owner approves all facts and you set the real `websiteUrl`, phone and address.
- Phone links and map directions appear only when their values are supplied. The order button cannot be clicked until `primaryCTA.url` points to the restaurant's real external service. To add reservations, link to the client's actual booking provider or activate their verified phone number; do not use an unconnected form.
- Menu prices, ingredients, allergen information, hours and reviews are examples. Confirm every item with the business owner. `testimonials` accepts only verified, permissioned customer reviews.
- The hero and interior images were generated for this fictional demo. The illustrated food photo may not match the named dish: replace both images and add actual dish photography before advertising an actual menu.
- Edit the palette in `app/globals.css` if the business brand requires it. The fallback seal is a generic mark; set `logo` to the owner's official asset when available.

This starter is best suited to restaurants or cafes; for salons or gyms, rename/remove restaurant-specific sections and adapt the page labels in `app/page.tsx`. One configuration file replaces content, but layout differences between industries still require some code edits.

## License and provenance

Original: [Table & Fork](https://github.com/haider484991/tablefork-nextjs-restaurant-template) by Pixel & Oak, MIT-licensed. The original copyright and license notice are retained in `LICENSE`. Generated demo images are illustrative; replace them with client-approved imagery for real projects.
