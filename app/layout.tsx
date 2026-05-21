import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Al Naseir Business Solutions | Your Trusted Business Partner",
  description:
    "Al Naseir Business Solutions provides comprehensive business setup, consulting, PRO services, and operational support to help your business thrive. Available in English, Arabic, and Bangla.",
  keywords:
    "business solutions, company formation, PRO services, business setup, consulting, Dubai, UAE, market entry, legal compliance",
  authors: [{ name: "Al Naseir Business Solutions" }],
  openGraph: {
    title: "Al Naseir Business Solutions",
    description: "Your Trusted Partner for Business Solutions",
    type: "website",
    locale: "en_US",
    alternateLocale: ["ar_AE", "bn_BD"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Al Naseir Business Solutions",
    description: "Your Trusted Partner for Business Solutions",
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth bg-background">
      <body className="font-sans antialiased">
        <div className="md:hidden flex items-center justify-center h-screen text-center p-6">
          <p className="text-lg font-semibold">
            This website is not available on mobile devices.
          </p>
        </div>

        <div className="hidden md:block">
          {children}
          {process.env.NODE_ENV === "production" && <Analytics />}
        </div>
      </body>
    </html>
  );
}
