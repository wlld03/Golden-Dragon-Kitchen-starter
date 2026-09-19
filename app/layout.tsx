import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = { title: "Taverna Garibaldi | Pizzeria a Levanto", description: "Concept website for Taverna Garibaldi in Levanto, Italy.", robots: { index: false, follow: false }, icons: { icon: "/favicon.svg" } };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="it"><body>{children}</body></html>; }
