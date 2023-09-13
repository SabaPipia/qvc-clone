import "./globals.scss";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Footer, Header } from "@/components";
import { Provider } from "react-redux";
import { store } from "@/store/store";

import Prov from "./prov";

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
        <Prov>
          <Header />
          {children}
          <Footer />
        </Prov>
      </body>
    </html>
  );
}
