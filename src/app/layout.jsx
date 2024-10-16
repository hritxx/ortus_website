import RootLayout from "@/components/RootLayout";
import "./globals.css";

export const metadata = {
  title: {
    template: "Business Portfolio",
    default: "Ortus Finance - Business Portfolio",
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
      </body>
    </html>
  );
}
