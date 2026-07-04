import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingActions } from "@/components/layout/FloatingActions";

export const metadata: Metadata = {
  title: {
    default: "Deedar E Makkah Travel & Tours | Umrah, Tours, Visa & Tickets",
    template: "%s | Deedar E Makkah Travel & Tours"
  },
  description: "Premium Umrah packages, group departures, Baku and Uzbekistan tours, visa support, ticketing, hotels and transport from Garden Town Lahore.",
  openGraph: {
    title: "Deedar E Makkah Travel & Tours",
    description: "Trusted travel support for Umrah, tours and tickets from Lahore.",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body id="top">
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
