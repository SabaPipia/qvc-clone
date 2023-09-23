"use client";
import "./page.scss";

import GridIcon from "@/public/assets/grid-icon.png";
import ListIcon from "@/public/assets/list-icon.png";

import { usePathname } from "next/navigation";
import React, { ChangeEvent, useState } from "react";
import { CategoryPCard } from "./components";
import Image from "next/image";

function Category() {
  const [selectedValue, setSelectedValue] = useState("BEST");
  const [renderPattern, setRenderPattern] = useState("grid");
  const pathname = usePathname();
  return (
    <div className="container">
      <div className="category-page-wrapper component-wrapper">
        <div className="category-page-heading">
          <span>{pathname.replace("/", "")}</span>
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
            <div className="category-page__sort-dropdown">
              <span>Sort by:</span>
              <select
                name="sort"
                id="category-page__sort"
                onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                  setSelectedValue(e.target.value)
                }
              >
                <option value="BEST">Best Match</option>
                <option value="RATING">Highest Rating</option>
                <option value="HIGH">Price - High to Low</option>
                <option value="LOW">Price - Low to High</option>
              </select>
            </div>
          </div>
        </div>
        <CategoryPCard
          selectedValue={selectedValue}
          renderPattern={renderPattern}
        />
      </div>
    </div>
  );
}

export default Category;
