import "../global.css";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import type { Metadata } from "next";
// import { Analytics } from "./components/analytics";

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
    // Configuration for Google's crawler settings
    // - index: Allows the page to be indexed by Google
    // - follow: Enables Google to follow links on the page
    // - max-video-preview: Sets the maximum size of video previews in search results
    // - max-image-preview: Allows large image previews in search results
    // - max-snippet: Defines the maximum length of text snippets in search results
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
      <body className="bg-[#173025]">
        {children}
        {/* <Analytics /> */}
      </body>
    </html>
  );
}
