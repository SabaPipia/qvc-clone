"use client";
import "./page.scss";

import GridIcon from "@/public/assets/grid-icon.png";
import ListIcon from "@/public/assets/list-icon.png";

import React, { useState } from "react";
import CategoryPageCard from "./components/CategoryCard";
import Image from "next/image";

function Category() {
  const [renderPattern, setRenderPattern] = useState("grid");

  return (
    <div className="container">
      <div className="category-page-wrapper component-wrapper">
        <div className="category-page-heading">
          <span>Top Selling</span>
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
        <CategoryPageCard renderPattern={renderPattern} />
      </div>
    </div>
  );
}

export default Category;
