import { DataContext } from "@/app/provider";
import "./style.scss";

import { ProductItem } from "@/types";

import Image from "next/image";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";

function CategoryPCard() {
  const { categoryItems } = useContext(DataContext);
  const arr: any = [];
  const [sortedItems, setSortedItems] = useState<ProductItem[]>([]);

  useEffect(() => {
    const sorted = categoryItems
      ?.slice()
      ?.sort((a: ProductItem, b: ProductItem) => a.price - b.price);
    setSortedItems(sorted);
  }, [categoryItems]);
  return (
    <div className="product-wrapper">
      {sortedItems &&
        sortedItems.map((item: ProductItem, index: number) => {
          return (
            <div className="category-page-card" key={item.id}>
              <div className="category-page-card__image">
                <Image
                  src={item.thumbnail.toString()}
                  width={1000}
                  height={1000}
                  alt={item.title}
                  priority
                />
              </div>
              <div className="category-page-card__item-info">
                <Link
                  href={`/${item.category}/${item.id}`}
                  className="category-page-card__item-link"
                >
                  {item.title},{item.brand}
                </Link>
                <div className="category-page-card__item-price-wrapper">
                  {item.discountPercentage > 13 ? (
                    <>
                      <span className="category-page-item__sale-price">
                        $
                        {(
                          item.price -
                          item.price * (item.discountPercentage / 100)
                        ).toFixed(0)}
                      </span>
                      <span className="category-page-item__price item-sale">
                        ${item.price}
                      </span>
                    </>
                  ) : (
                    <span className="category-page-item__real-price">
                      ${item.price}
                    </span>
                  )}
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default CategoryPCard;
