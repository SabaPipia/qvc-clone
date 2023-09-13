"use client";
import { usePathname } from "next/navigation";

function Provider() {
  // initialize state variables.

  const pathname = usePathname();

  // fetching category items
  // async function getCategory() {
  //   try {
  //     const response = await fetch(
  //       `https://dummyjson.com/products/category${pathname}`
  //     );
  //     const responseJson = await response.json();
  //     const data = responseJson.products;
  //     setCategoryItems(data);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // }

  // async function getMayLikeItems(categoryName: string) {
  //   try {
  //     const response = await fetch(
  //       `https://dummyjson.com/products/category${categoryName}`
  //     );
  //     const responseJson = await response.json();
  //     const data = responseJson.products;
  //     setMayLikeItems(data);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // }

  return "hello";
}
