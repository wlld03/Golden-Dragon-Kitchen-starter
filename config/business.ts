/**
 * One file per client. Replace all demo data and review it with the business
 * owner before publishing to a public domain.
 */
export type BusinessConfig = {
  isDemo: boolean;
  businessName: string;
  businessType: string;
  tagline: string;
  heroHeading: string;
  heroAccent: string;
  description: string;
  websiteUrl: string | null;
  logo: string | null;
  heroImage: string;
  phone: string | null;
  email: string | null;
  address: { street: string; city: string; region: string; postalCode: string; country: string } | null;
  openingHours: { day: string; hours: string }[];
  socialLinks: { label: string; url: string }[];
  primaryCTA: { label: string; url: string | null };
  reservationCTA: { label: string; url: string | null };
  secondaryCTA: { label: string; url: string };
  services: { title: string; description: string }[];
  featuredItems: { name: string; description: string; price: string; image: string | null }[];
  menu: { section: string; items: { name: string; description: string; price: string }[] }[];
  testimonials: { quote: string; attribution: string }[];
  galleryImages: { src: string; alt: string }[];
  about: { eyebrow: string; heading: string; paragraphs: string[] };
  currencySymbol: string;
};

export const business: BusinessConfig = {
  isDemo: true,
  businessName: "Golden Dragon Kitchen",
  businessType: "Independent Chinese restaurant",
  tagline: "Good food. Good company. Right here in your neighbourhood.",
  heroHeading: "A little spice.",
  heroAccent: "A lot of heart.",
  description: "A welcoming Chinese restaurant concept serving comforting wok favourites, handmade-inspired classics and plates made for sharing.",
  websiteUrl: null, // Set to the verified live URL before publishing.
  logo: null, // Place the client's logo in public/images and set its /images/... path.
  heroImage: "/images/hero-noodles.png",
  phone: null, // Add the client's verified phone to activate the call links.
  email: null,
  address: null, // Add the verified address to activate directions and local SEO schema.
  openingHours: [
    { day: "Monday", hours: "11:30 am – 9:00 pm" },
    { day: "Tuesday", hours: "11:30 am – 9:00 pm" },
    { day: "Wednesday", hours: "11:30 am – 9:00 pm" },
    { day: "Thursday", hours: "11:30 am – 9:00 pm" },
    { day: "Friday", hours: "11:30 am – 10:00 pm" },
    { day: "Saturday", hours: "12:00 pm – 10:00 pm" },
    { day: "Sunday", hours: "12:00 pm – 8:30 pm" },
  ],
  socialLinks: [], // Use only the client's real social profiles.
  primaryCTA: { label: "Order online", url: null }, // Insert actual third-party order URL.
  reservationCTA: { label: "Reserve a table", url: null }, // Use a real external booking URL or the verified phone.
  secondaryCTA: { label: "Explore the menu", url: "#menu" },
  services: [
    { title: "Cooked to order", description: "A menu concept built around freshly prepared, satisfying dishes." },
    { title: "Easy to share", description: "Small plates and classic mains designed for gathering around the table." },
    { title: "A warm welcome", description: "A relaxed neighbourhood dining experience from lunch through dinner." },
  ],
  featuredItems: [
    { name: "Golden Dragon Noodles", description: "Wok-tossed noodles, greens, scallions and a savoury house-style glaze.", price: "16", image: "/images/hero-noodles.png" },
    { name: "Ginger & Scallion Chicken", description: "Tender chicken with ginger, scallions and aromatic rice.", price: "18", image: null },
    { name: "Chilli Crisp Dumplings", description: "Steamed dumplings finished with a fragrant chilli-crisp dressing.", price: "12", image: null },
  ],
  menu: [
    { section: "To share", items: [
      { name: "Chilli Crisp Dumplings", description: "Steamed dumplings · fragrant chilli dressing", price: "12" },
      { name: "Crispy Spring Rolls", description: "Vegetables · sweet chilli dip", price: "9" },
      { name: "Cucumber Salad", description: "Garlic · sesame · light vinegar dressing", price: "8" },
    ] },
    { section: "From the wok", items: [
      { name: "Golden Dragon Noodles", description: "Wok-tossed noodles · greens · scallions", price: "16" },
      { name: "Ginger & Scallion Chicken", description: "Tender chicken · aromatic rice", price: "18" },
      { name: "Chilli Garlic Tofu", description: "Crisp tofu · seasonal greens · rice", price: "16" },
      { name: "Beef & Broccoli", description: "Tender beef · broccoli · savoury glaze", price: "19" },
    ] },
    { section: "Something sweet", items: [
      { name: "Mango Pudding", description: "Silky mango pudding · fresh fruit", price: "8" },
      { name: "Sesame Balls", description: "Warm sesame bites · sweet filling", price: "7" },
    ] },
  ],
  testimonials: [], // Add only verified, permissioned customer reviews.
  galleryImages: [
    { src: "/images/interior.png", alt: "Illustrative, AI-created Chinese restaurant interior" },
    { src: "/images/hero-noodles.png", alt: "Illustrative, AI-created noodle dish" },
  ],
  about: {
    eyebrow: "A place to gather",
    heading: "The food you came for. The feeling that brings you back.",
    paragraphs: [
      "Golden Dragon Kitchen is a fictional restaurant concept built to show how a local business can bring its menu, story and practical details together in one inviting website.",
      "For a real restaurant, we replace every example with the owner's approved story, actual dishes, photographs and operating details.",
    ],
  },
  currencySymbol: "$", // Confirm menu prices and currency with each business.
};

export function phoneHref(phone: string): string {
  return `tel:${phone.replace(/[^+\d]/g, "")}`;
}

export function directionsHref(address: NonNullable<BusinessConfig["address"]>): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent([address.street, address.city, address.region, address.postalCode, address.country].join(", "))}`;
}
