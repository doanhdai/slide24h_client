import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { ScrollToTop } from "@/components/common";

const montserrat = Montserrat({
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Web Maytrix",
  description: "Next.js project with TypeScript and Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body className={`${montserrat.className} antialiased`}>
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
