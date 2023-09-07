"use client";

import "./page.scss";
import { Hero, TopSelling, Category } from "@/components";

export default function Home() {
  return (
    <main>
      <Hero />
      <TopSelling />
      <Category />
    </main>
  );
}
