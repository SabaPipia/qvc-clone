"use client";
import React, { ReactNode, createContext, useEffect, useState } from "react";

export const CategoriesContext = createContext<any>(null);

function Provider({ children }: { children: ReactNode }) {
  const [categories, setCategories] = useState();

  useEffect(() => {
    async function fetchData() {
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
    fetchData();
  }, []);

  return (
    <CategoriesContext.Provider value={categories}>
      {children}
    </CategoriesContext.Provider>
  );
}

export default Provider;
