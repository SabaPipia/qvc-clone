"use client";

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
import { useEffect, useState } from "react";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
  }, []);
  return (
    <main>
      <Hero />
      <TopSelling />
      <Category />
      <LowInStock />
      <ItemHistory />
      {isVisible ? (
        <button
          className="back-to-top"
          onClick={() =>
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
          }
        >
          <Image src={DropDown} width={30} height={30} alt="dds" />
        </button>
      ) : null}
    </main>
  );
}
