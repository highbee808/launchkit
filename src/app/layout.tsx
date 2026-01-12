import type { Metadata } from "next";
import { DM_Sans, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileNav } from "@/components/layout/MobileNav";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "LaunchKit - Legal Docs Generator",
  description: "Generate privacy policies, terms of service, and legal pages in seconds. Not hours. Professional. Compliant. Actually readable.",
  keywords: ["privacy policy generator", "terms of service generator", "legal documents", "GDPR", "cookie policy"],
  authors: [{ name: "Highbee", url: "https://highbee.dev" }],
  creator: "Highbee",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "LaunchKit - Legal Docs Generator",
    description: "Generate privacy policies, terms of service, and legal pages in seconds. Not hours.",
    siteName: "LaunchKit",
  },
  twitter: {
    card: "summary_large_image",
    title: "LaunchKit - Legal Docs Generator",
    description: "Generate privacy policies, terms of service, and legal pages in seconds. Not hours.",
    creator: "@Highbee_Realest",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${instrumentSerif.variable}`}>
      <body className="min-h-screen bg-background antialiased flex flex-col">
        <Header />
        <main className="flex-1 pb-20 md:pb-0">
          {children}
        </main>
        <Footer />
        <MobileNav />
      </body>
    </html>
  );
}
