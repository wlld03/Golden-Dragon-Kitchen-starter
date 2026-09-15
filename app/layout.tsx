import type { Metadata } from "next";
import { business } from "@/config/business";
import "./globals.css";

export const metadata: Metadata = {
  ...(business.websiteUrl ? { metadataBase: new URL(business.websiteUrl) } : {}),
  title: `${business.businessName} | ${business.businessType}`,
  description: business.description,
  robots: business.isDemo ? { index: false, follow: false } : { index: true, follow: true },
  openGraph: {
    title: business.businessName,
    description: business.description,
    ...(business.websiteUrl ? { url: business.websiteUrl } : {}),
    ...(business.websiteUrl ? { images: [business.heroImage] } : {}),
  },
};

const schema = !business.isDemo && business.websiteUrl && business.address && business.phone ? {
  "@context": "https://schema.org",
  "@type": business.businessType.toLowerCase().includes("restaurant") ? "Restaurant" : "LocalBusiness",
  name: business.businessName,
  description: business.description,
  url: business.websiteUrl,
  telephone: business.phone,
  image: new URL(business.heroImage, business.websiteUrl).href,
  address: {
    "@type": "PostalAddress",
    streetAddress: business.address.street,
    addressLocality: business.address.city,
    addressRegion: business.address.region,
    postalCode: business.address.postalCode,
    addressCountry: business.address.country,
  },
} : null;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        {schema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />}
      </head>
      <body className="bg-ember-50 font-sans text-char-900 antialiased">{children}</body>
    </html>
  );
}
