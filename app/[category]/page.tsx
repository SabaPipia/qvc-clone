"use client";
import "./style.scss";

import { usePathname } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../provider";
import { CategoryPCard } from "./components";

function Category() {
  const { getCategory } = useContext(DataContext);
  const [selectedValue, setSelectedValue] = useState("BEST");

  const pathname = usePathname();
  useEffect(() => {
    getCategory();
  }, [pathname]);
  return (
    <div className="container">
      <div className="category-page-wrapper">
        <div className="category-page-heading">
          <span>{pathname.replace("/", "")}</span>
          <div className="category-page__sort-dropdown">
            <span>Sort by:</span>
            <select
              name="sort"
              id="category-page__sort"
              onChange={(e: any) => setSelectedValue(e.target.value)}
            >
              <option value="BEST">Best Match</option>
              <option value="RATING">Highest Rating</option>
              <option value="HIGH">Price - High to Low</option>
              <option value="LOW">Price - Low to High</option>
            </select>
          </div>
        </div>
        <CategoryPCard selectedValue={selectedValue} />
      </div>
    </div>
  );
}

export default Category;
