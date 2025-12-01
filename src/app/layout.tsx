import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap", // fast font loading
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Xecute – AI Text Automation for Service Businesses",
    template: "%s | Xecute"
  },
  description: "Manage your whole business using one text message. Automate scheduling, create work orders, and sync with Markate CRM instantly.",
  keywords: ["AI text automation", "service business software", "Markate integration", "automated scheduling", "work order automation"],
  authors: [{ name: "Xecute Team" }],
  creator: "Xecute",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://xecutetech.ai",
    title: "Xecute – AI Text Automation for Service Businesses",
    description: "Manage your whole business using one text message. Automate scheduling, create work orders, and sync with Markate CRM instantly.",
    siteName: "Xecute",
    images: [
      {
        url: "https://xecutetech.ai/og-image.jpg", // Placeholder
        width: 1200,
        height: 630,
        alt: "Xecute Dashboard",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Xecute – AI Text Automation for Service Businesses",
    description: "Manage your whole business using one text message. Automate scheduling, create work orders, and sync with Markate CRM instantly.",
    images: ["https://xecutetech.ai/twitter-image.jpg"], // Placeholder
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://xecutetech.ai",
    languages: {
      "en-US": "https://xecutetech.ai",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-US">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
