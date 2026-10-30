import type { Metadata } from "next";
import WhatsAppButton from "@/components/whatsapp-button";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://atlas-estates.example"),
  title: { default: "Atlas Estates | Exceptional homes in Morocco", template: "%s | Atlas Estates" },
  description: "A concept luxury real estate experience for exceptional homes across Morocco.",
  keywords: ["luxury property Morocco", "Agadir villas", "Taghazout property", "Marrakech real estate", "Casablanca apartments"],
  openGraph: { title: "Atlas Estates | Exceptional homes in Morocco", description: "A considered collection of exceptional homes across Morocco.", type: "website", locale: "en_GB", images: [{ url: "/images/hero-atlas.jpg", width: 2061, height: 763, alt: "Atlas Estates coastal villa concept" }] },
  twitter: { card: "summary_large_image", title: "Atlas Estates", description: "Exceptional Homes. Extraordinary Living.", images: ["/images/hero-atlas.jpg"] },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}<WhatsAppButton/></body></html>;
}
