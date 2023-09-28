"use client";

import "./page.scss";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { getSearchedItem } from "@/store/actions";
import { Card } from "@/components";

export default function Searched() {
  const pathname = usePathname();
  const [data, setData] = useState<any>();

  const searchedValue = pathname.split("/").at(-1);
  const dispatch: (func: any) => void = useDispatch();
  const DATA = useSelector((state: any) => state.data);
  const { searchedItem } = DATA;

  useEffect(() => {
    searchedValue && dispatch(getSearchedItem(searchedValue));
    setData(searchedItem.products);
    console.log("?");
  }, []);

  return (
    <div className="container">
      <div className="searched-product-page-wrapper component-wrapper">
        <div className="searched__page-heading">
          <span>Found Results for '{searchedValue}'</span>
        </div>
        <div className="searched__item-container">
          {searchedItem.products &&
            searchedItem.products.map((item: any) => {
              return (
                <div key={item.id}>
                  <Card data={item} lowStock={false} />;
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
