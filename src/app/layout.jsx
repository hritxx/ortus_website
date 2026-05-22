import RootLayout from "@/components/RootLayout";
import { Analytics } from "@vercel/analytics/react";

import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://ortusfinance.in"),
  title: {
    template: "%s | Ortus Finance",
    default: "Ortus Finance - Smart Investment Strategies & Wealth Management",
  },
  description:
    "Ortus Finance offers tailored investment strategies, SIPs, systematic withdrawal plans (SWPs) and wealth management solutions across India.",
  keywords: [
    "Ortus Finance",
    "Finance",
    "Investment",
    "SIP",
    "Mutual Funds",
    "Wealth Management",
    "Financial Planning",
    "India",
  ],
  authors: [{ name: "Ortus Finance" }],
  creator: "Ortus Finance",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://ortusfinance.in",
    siteName: "Ortus Finance",
    title: "Ortus Finance - Smart Investment Strategies",
    description:
      "Achieve your financial goals with personalized investment portfolios, risk management, and transparent financial services from Ortus Finance.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ortus Finance - Smart Investment Strategies",
    description: "Start your investment journey with expert guidance.",
  },
};

export default function Layout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning={true}
      className="h-full bg-blue-900 text-base antialiased text-neutral-100"
    >
      <body className="flex min-h-full flex-col">
        <RootLayout>{children}</RootLayout>
        <Analytics />
      </body>
    </html>
  );
}
