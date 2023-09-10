"use client";
import Card from "@/components/Card";
import "./style.scss";

import { usePathname } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../provider";
import { CategoryPCard } from "./components";

function Category() {
  const { getCategory } = useContext(DataContext);
  const [selectedValue, setSelectedValue] = useState();
  const pathname = usePathname();
  useEffect(() => {
    getCategory();
  }, [pathname]);
  // console.log(selectedValue);
  return (
    <div className="container">
      <div className="category-page-wrapper">
        <div className="category-page-heading">
          <span>{pathname.replace("/", "")}</span>
          <div className="category-page__sort-dropdown">
            <select
              name="sort"
              id="category-page__sort"
              onChange={(e: any) => setSelectedValue(e.target.value)}
            >
              <option value="BEST">Best Match</option>
              <option value="RATING">highest Rating</option>
              <option value="HIGH">Price - High to Low</option>
              <option value="LOW">Price - Low to High</option>
            </select>
          </div>
        </div>
        <CategoryPCard />
      </div>
    </div>
  );
}

export default Category;
