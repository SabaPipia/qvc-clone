"use client";

import Link from "next/link";
import "./page.scss";
import {
  Hero,
  TopSelling,
  Category,
  LowInStock,
  ItemHistory,
} from "@/components";
import DropDown from "@/public/assets/dropdown-50.png";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero />
      <TopSelling />
      <Category />
      <LowInStock />
      <ItemHistory />
      <button
        className="back-to-top"
        onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}
      >
        <Image src={DropDown} width={30} height={30} alt="dds" />
      </button>
    </main>
  );
}
