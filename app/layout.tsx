import "./globals.scss";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Footer, Header } from "@/components";

import ProviderWrapper from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "QVC-clone",
  description: "qvc clone",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ProviderWrapper>
          <Header />
          <div className="header-space"></div>
          {children}
          <Footer />
        </ProviderWrapper>
      </body>
    </html>
  );
}
