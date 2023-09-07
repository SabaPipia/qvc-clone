"use client";
import { TopSelling } from "@/components";
import React, { ReactNode, createContext, useEffect, useState } from "react";
import { ProductItem } from "@/types";

export const DataContext = createContext<any>(null);

function Provider({ children }: { children: ReactNode }) {
  const [categories, setCategories] = useState([]);
  const [topSellingItems, setTopSellingItems] = useState<ProductItem[]>();
  const [categoryItem, setCategoryItem] = useState<
    { category: string; thumbnail: string }[]
  >([]);

  useEffect(() => {
    async function fetchCategories() {
      try {
        const response = await fetch(
          "https://dummyjson.com/products/categories"
        );
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    async function fetchTopSellingItems() {
      try {
        const response = await fetch(
          "https://dummyjson.com/products?limit=100"
        );
        const data = await response.json();
        const filteredItems = data.products.filter(
          (item: any) => item.rating >= 4.9
        );
        setTopSellingItems(filteredItems);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    async function getCategoryImages() {
      try {
        const response = await fetch(
          "https://dummyjson.com/products?limit=100&select=category,thumbnail"
        );
        const responseJson = await response.json();
        const data = responseJson.products;
        const categoryArr: any[] = [];
        const items: any[] = [];
        data.map((item: any) => {
          if (!categoryArr.includes(item.category)) {
            categoryArr.push(item.category);
            items.push(item);
          }
        });
        setCategoryItem(items);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchCategories();
    fetchTopSellingItems();
    getCategoryImages();
  }, []);

  return (
    <DataContext.Provider value={{ categories, topSellingItems, categoryItem }}>
      {children}
    </DataContext.Provider>
  );
}

export default Provider;
