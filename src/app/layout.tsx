import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/ScrollSmooth";
import { ConvexClientProvider } from "@/providers/ConvexClientProvider";
import { Analytics } from "@vercel/analytics/next";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  metadataBase: new URL("https://wekraft.xyz"),
  title: {
    default: "WeKraft — Build Together, Craft Faster",
    template: "%s | WeKraft",
  },
  description:
    "WeKraft is an AI-powered project management platform for builders and makers. Match with skilled teammates, plan with an AI PM agent, and ship products faster — together.",
  keywords: [
    "WeKraft",
    "AI project management",
    "team collaboration",
    "build together",
    "skill-based team matching",
    "AI PM agent",
    "startup tools",
    "SaaS collaboration",
    "real-time project tracking",
    "Agents",
  ],
  authors: [{ name: "WeKraft", url: "https://wekraft.xyz" }],
  creator: "WeKraft",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://wekraft.xyz",
    siteName: "WeKraft",
    title: "WeKraft — Build Together, Craft Faster",
    description:
      "AI-powered project management for modern builders. Find your crew, plan smarter, and ship faster with WeKraft.",
    images: [
      {
        url: "/og-image.jpeg",
        width: 1200,
        height: 630,
        alt: "WeKraft — Build Together, Craft Faster",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WeKraft — Build Together, Craft Faster",
    description:
      "AI-powered project management for modern builders. Find your crew, plan smarter, and ship faster with WeKraft.",
    images: ["/og-image.png"],
    creator: "@wekraft",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://wekraft.xyz",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head />

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ConvexClientProvider>
          <SmoothScroll>{children}</SmoothScroll>
          <Toaster
            className="fixed top-4 right-4"
            theme="dark"
            position="top-right"
          />
          <Analytics />
        </ConvexClientProvider>
      </body>
    </html>
  );
}
