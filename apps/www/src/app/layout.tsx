import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Dark Docs 2.0 - The Dark Theme Google Forgot",
    template: "%s | Dark Docs 2.0",
  },
  description:
    "Transform your Google Docs experience with Dark Docs 2.0 - the beautiful dark theme extension that reduces eye strain and enhances productivity. Free browser extension for Chrome, Firefox, Edge & Opera with 4.8★ rating from 1000+ users.",
  keywords: [
    "Google Docs dark theme",
    "dark mode extension",
    "Google Docs extension",
    "dark theme Chrome extension",
    "productivity tools",
    "eye strain reduction",
    "dark mode Google Docs",
    "writing tools",
    "browser extension",
    "Google Workspace dark mode",
    "document editor dark theme",
    "free Chrome extension",
    "Google Docs night mode",
    "dark UI extension",
  ],
  authors: [{ name: "Ameya Lambat", url: "https://ameyalambat.com" }],
  creator: "Ameya Lambat",
  publisher: "Dark Docs",
  category: "Browser Extension",
  classification: "Productivity Tool",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://darkdocs.ameyalambat.com"),
  alternates: {
    canonical: "https://darkdocs.ameyalambat.com",
  },
  openGraph: {
    title: "Dark Docs 2.0 - The Dark Theme Google Forgot",
    description:
      "Transform your Google Docs with a beautiful dark theme that reduces eye strain. Free extension with 4.8★ rating from 1000+ users. Available for all major browsers.",
    url: "https://darkdocs.ameyalambat.com",
    siteName: "Dark Docs 2.0",
    images: [
      {
        url: "https://darkdocs.ameyalambat.com/hero-alt.png",
        width: 1200,
        height: 630,
        alt: "Dark Docs 2.0 extension preview showing Google Docs in dark mode",
        type: "image/png",
      },
      {
        url: "https://darkdocs.ameyalambat.com/hero-promo.png",
        width: 1200,
        height: 630,
        alt: "Dark Docs 2.0 - Beautiful dark theme for Google Docs",
        type: "image/png",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@ameyalambat",
    creator: "@ameyalambat",
    title: "Dark Docs 2.0 - The Dark Theme Google Forgot",
    description:
      "Transform Google Docs with a beautiful dark theme. Free extension with 4.8★ rating. Reduces eye strain & enhances productivity. Available for all browsers.",
    images: ["https://darkdocs.ameyalambat.com/hero-promo.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
