// "use client";
// import RootLayout from "@/components/RootLayout";
// import { Analytics } from "@vercel/analytics/react";
// import { SessionProvider } from "next-auth/react";

// import "./globals.css";

// export default function Layout({ children }) {
//   return (
//     <html
//       lang="en"
//       suppressHydrationWarning={true}
//       className="h-full bg-blue-900 text-base antialiased text-neutral-100"
//     >
//       <title>Ortus Finance - Business Portfolio</title>
//       <body className="flex min-h-full flex-col">
//         <RootLayout>
//           <SessionProvider>{children}</SessionProvider>
//         </RootLayout>
//         <Analytics />
//       </body>
//     </html>
//   );
// }
import RootLayout from "@/components/RootLayout";
import { Analytics } from "@vercel/analytics/react";
import { SessionProvider } from "next-auth/react";

import "./globals.css";

export const metadata = {
  title: "Ortus Finance - Empowering Business Growth",
  description:
    "Ortus Finance provides tailored financial solutions to help businesses thrive. Discover our portfolio and learn how we can accelerate your growth.",
  url: "https://www.ortusfinance.in",
  image: "https://www.ortusfinance.com/og-image.jpg",
};

export default function Layout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning={true}
      className="h-full bg-blue-900 text-base antialiased text-neutral-100"
    >
      <title>Ortus Finance - Business Portfolio</title>
      <body className="flex min-h-full flex-col">
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  );
}
