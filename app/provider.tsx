"use client";
import { usePathname } from "next/navigation";

import React, { ReactNode, createContext, useEffect, useState } from "react";
import { ProductItem } from "@/types";
import ReactLoading from "react-loading";

export const DataContext = createContext<any>(null);

function Provider({ children }: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const [wholeProducts, setWholeProducts] = useState<ProductItem[]>([]);
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
    // fetching all categories.
    async function fetchCategories() {
      try {
        const response = await fetch(
          "https://dummyjson.com/products/categories"
        );
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error(error);
      }
    }

    // fetching whole data, filtering whole data.
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
        setWholeProducts(data);
        setLowInStockItem(filteredItemsByStock);
        setTopSellingItems(filteredItemsByRating);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    // fetching categories and images
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

    // fetching category items
    async function getCategory() {
      try {
        const response = await fetch(
          `https://dummyjson.com/products/category${pathname}`
        );
        const responseJson = await response.json();
        const data = responseJson.products;
        setCategoryItems(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    // fetching browsing history
    async function getViewedItem() {
      try {
        const localStorageKeys = Object.keys(localStorage);
        const itemKeysHistory = localStorageKeys.filter((k) =>
          k.startsWith("history")
        );
        const itemPromises = itemKeysHistory.map(async (item) => {
          const itemId = item.split(" ")[1];
          const response = await fetch(
            `https://dummyjson.com/products/${itemId}`
          );
          const responseJson = await response.json();
          return responseJson;
        });
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
      getViewedItem(),
    ]).then(() => {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    });
  }, [pathname]);

  const [searchedData, setSearchedData] = useState<ProductItem[]>();
  async function searchItem(searchValue: string) {
    try {
      const response = await fetch(
        `https://dummyjson.com/products/search?q=${searchValue}`
      );
      const data = await response.json(); // Wait for all fetches to complete
      setSearchedData(data.products);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  return (
    <DataContext.Provider
      value={{
        categories,
        topSellingItems,
        categoryItem,
        lowInStockItem,
        categoryItems,
        itemHistory,
        wholeProducts,
        searchItems: searchItem,
        searchedData,
      }}
    >
      {isLoading ? (
        <div className="loading-container">
          <ReactLoading
            type={"spin"}
            color={"#EF7A64"}
            height={150}
            width={150}
          />
        </div>
      ) : (
        children
      )}
    </DataContext.Provider>
  );
}

export default Provider;
