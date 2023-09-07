"use client";
import { usePathname } from "next/navigation";

import React, { ReactNode, createContext, useEffect, useState } from "react";
import { ProductItem } from "@/types";

export const DataContext = createContext<any>(null);

function Provider({ children }: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [topSellingItems, setTopSellingItems] = useState<ProductItem[]>();
  const [categoryItem, setCategoryItem] = useState<
    { category: string; thumbnail: string }[]
  >([]);
  const [lowInStockItem, setLowInStockItem] = useState<ProductItem[]>();
  const [categoryItems, setCategoryItems] = useState<ProductItem[]>();
  const pathname = usePathname();
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
    async function fetchAllData() {
      try {
        const response = await fetch(
          "https://dummyjson.com/products?limit=100"
        );
        const data = await response.json();
        const filteredItemsByStock = data.products.filter(
          (item: any) => item.stock <= 10
        );
        const filteredItemsByRating = data.products.filter(
          (item: any) => item.rating >= 4.9
        );
        setLowInStockItem(filteredItemsByStock);
        setTopSellingItems(filteredItemsByRating);
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

    async function getCategory() {
      try {
        const response = await fetch(
          `https://dummyjson.com/products/category${pathname}
          `
        );
        const responseJson = await response.json();
        const data = responseJson.products;
        setCategoryItems(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    Promise.all([
      fetchCategories(),
      fetchAllData(),
      getCategoryImages(),
      getCategory(),
    ])
      .then(() => {
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("One or more fetch operations failed:", error);
        setIsLoading(false);
      });
  }, [pathname]);

  // Make Loading animation
  return (
    <DataContext.Provider
      value={{
        categories,
        topSellingItems,
        categoryItem,
        lowInStockItem,
        categoryItems,
      }}
    >
      {!isLoading ? children : <div>Loading...</div>}
    </DataContext.Provider>
  );
}

export default Provider;
