import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";

// Inter, the same face the Sam app uses on its login and dashboard (Casey, Sep 15: "something's up
// with the font"). Keeps the --font-geist-sans variable name so globals.css needs no change.
const geistSans = Inter({
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
    default: "Xecute – A sales rep who texts your customers",
    template: "%s | Xecute"
  },
  description: "Sam brings back quiet customers, follows up on every estimate, and books the job. $297 a month, no contract.",
  keywords: ["Sam", "text follow-up for service businesses", "service business software", "Markate integration", "automated scheduling", "work order automation"],
  authors: [{ name: "Xecute Team" }],
  creator: "Xecute",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://xecutetech.ai",
    title: "Xecute – A sales rep who texts your customers",
    description: "Sam brings back quiet customers, follows up on every estimate, and books the job. $297 a month, no contract.",
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
    title: "Xecute – A sales rep who texts your customers",
    description: "Sam brings back quiet customers, follows up on every estimate, and books the job. $297 a month, no contract.",
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
