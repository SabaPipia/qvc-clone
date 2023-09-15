"use client";
import "./page.scss";

import GridIcon from "@/public/assets/grid-icon.png";
import ListIcon from "@/public/assets/list-icon.png";

import { usePathname } from "next/navigation";
import React, { useState } from "react";

import { BrowsingCard } from "./components";
import Image from "next/image";

function Category() {
  const [renderPattern, setRenderPattern] = useState("grid");

  const pathname = usePathname();

  return (
    <div className="container">
      <div className="category-page-wrapper">
        <div className="category-page-heading">
          <span>{pathname.replace("/", "").replace("-", " ")}</span>
          <div className="toggle-wrapper">
            <div className="toggle__pattern">
              {renderPattern === "list" ? (
                <Image
                  src={GridIcon}
                  width={24}
                  height={24}
                  alt="icon"
                  onClick={() => setRenderPattern("grid")}
                />
              ) : (
                <Image
                  src={ListIcon}
                  width={24}
                  height={24}
                  alt="icon"
                  onClick={() => setRenderPattern("list")}
                />
              )}
            </div>
          </div>
        </div>
        <BrowsingCard renderPattern={renderPattern} />
      </div>
    </div>
  );
}

export default Category;
