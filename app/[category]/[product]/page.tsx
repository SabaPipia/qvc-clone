"use client";

import "./page.scss";

import React, { useContext, useEffect } from "react";
import { DataContext } from "@/app/provider";
import { usePathname } from "next/navigation";
import { ProductItem } from "@/types";
import { Accordion, YouMayLike, SingleProduct } from "./components";

function Product() {
  const { wholeProducts, getMayLikeItems, mayLikeItems } =
    useContext(DataContext);

  const products = wholeProducts.products;
  const pathname = usePathname();
  const pathnameSplit = pathname.split("/");
  const itemId = parseInt(pathnameSplit[pathnameSplit.length - 1]);
  const item: ProductItem = products.filter(
    (item: any) => item.id === itemId
  )[0];
  const mayLikeItemsPathname = pathname;
  const mayLikeValidPathname = mayLikeItemsPathname.split("/")[1];
  useEffect(() => {
    getMayLikeItems(`/${mayLikeValidPathname}`);
  }, []);

  localStorage.setItem(`history ${item.id}`, item.title);
  return (
    <div>
      <div className="container">
        <SingleProduct item={item} />
      </div>
      <div className="container">
        <div className="accordion-container">
          <Accordion />
        </div>
      </div>
      <div className="may-like">
        <div className="may-like__heading">
          <h3>You May Also Like</h3>
        </div>
        <div className="container">
          <div className="you-may-like-wrapper">
            {mayLikeItems &&
              mayLikeItems.map((i: ProductItem) => {
                if (
                  i.title.toLocaleLowerCase() != item.title.toLocaleLowerCase()
                ) {
                  return <YouMayLike data={i} key={i.id} />;
                }
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
