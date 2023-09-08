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
  const [itemHistory, setItemHistory] = useState({});

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
            items.push(item);console.log
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
    async function getViewedItem() {
      try {
        const localStorageKeys = Object.keys(localStorage);
        const itemKeysHistory = localStorageKeys.filter(k=> k.startsWith('history'))
        const itemPromises = itemKeysHistory.map( async item=>{
          const itemId = item.split(' ')[1]
          const response =  await fetch(
            `https://dummyjson.com/products/${itemId}`
          );
          const responseJson = await response.json();
          return responseJson
          
        })
        const items = await Promise.all(itemPromises); // Wait for all fetches to complete
        setItemHistory(items);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    Promise.all([
      fetchCategories(),
      fetchAllData(),
      getCategoryImages(),
      getCategory(),
      getViewedItem()
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
        itemHistory
      }}
    >
      {!isLoading ? children : <div>Loading...</div>}
    </DataContext.Provider>
  );
}

export default Provider;
