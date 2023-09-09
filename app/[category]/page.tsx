"use client";
import Card from "@/components/Card";
import "./style.scss";

import { usePathname } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../provider";
import { ProductItem } from "@/types";
import { CategoryPCard } from "./components";

function Category() {
  const { categoryItems, getCategory } = useContext(DataContext);
  const pathname = usePathname();
  useEffect(() => {
    getCategory();
  }, [pathname]);

  return (
    <div className="container">
      <div className="category-wrapper">
        <div className="category-heading">
          <span>{pathname.replace("/", "")}</span>
        </div>
        <div className="product-wrapper">
          {categoryItems &&
            categoryItems.map((item: ProductItem) => {
              return (
                <div className="card-wrapper" key={item.id}>
                  <CategoryPCard data={item} />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Category;
