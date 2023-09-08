"use client";

import "./page.scss";
import { Hero, TopSelling, Category, LowInStock,ItemHistory } from "@/components";

export default function Home() {
  return (
    <main>
      <Hero />
      <TopSelling />
      <Category />
      <LowInStock />
      <ItemHistory />
    </main>
  );
}
