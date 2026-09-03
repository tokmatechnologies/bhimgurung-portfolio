import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import ScrollReveal from "./scroll-reveal";

const instrumentSans = Instrument_Sans({
  variable: "--font",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Bhim Gurung | Business Leadership & Strategy",
  description:
    "Bhim Gurung helps businesses manage, invest, and grow with clarity through strategic leadership.",
  icons: {
    icon: [
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico",
    apple: { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${instrumentSans.variable} h-full`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <Script id="reveal-bootstrap" strategy="beforeInteractive">
          {`document.documentElement.classList.add("reveal-ready");setTimeout(function(){if(!document.documentElement.classList.contains("reveal-active"))document.documentElement.classList.remove("reveal-ready")},4000)`}
        </Script>
        <ScrollReveal />
        {children}
      </body>
    </html>
  );
}
