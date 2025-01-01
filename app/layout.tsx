import "../global.css";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import type { Metadata } from "next";
import { Analytics } from "./components/analytics";

// Metadata for SEO and social sharing
export const metadata: Metadata = {
  title: {
    default: "Jile L",
    template: "%s | jakhongirav",
  },
  description: "Software engineer",
  metadataBase: new URL("https://jakhongirav.life"), // Set the base URL here
  openGraph: {
    title: "jakhongirav",
    description: "Software engineer",
    url: "https://jakhongirav.life",
    siteName: "jakhongirav",
    locale: "en-US",
    type: "website",
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
  icons: {
    shortcut: "/favicon.png",
  },
};

// Using the built-in next/font for Google and local fonts
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const calSans = localFont({
  src: "../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={[inter.variable, calSans.variable].join(" ")}
      suppressHydrationWarning
    >
      <body className="bg-black">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
