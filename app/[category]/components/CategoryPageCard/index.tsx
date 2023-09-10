import "./style.scss";

import RatingStar from "@/public/assets/rating-star.png";

import { DataContext } from "@/app/provider";
import { ProductItem, CategoryPageCard } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";

function CategoryPCard({ selectedValue }: CategoryPageCard) {
  const { categoryItems } = useContext(DataContext);
  const arr: any = [];
  const [sortedItems, setSortedItems] = useState<ProductItem[]>([]);

  useEffect(() => {
    switch (selectedValue) {
      case "BEST":
        setSortedItems(categoryItems);
        break;
      case "LOW":
        const sortedLow = categoryItems
          ?.slice()
          ?.sort((a: ProductItem, b: ProductItem) => a.price - b.price);
        setSortedItems(sortedLow);
        break;
      case "HIGH":
        const sortedHigh = categoryItems
          ?.slice()
          ?.sort((a: ProductItem, b: ProductItem) => b.price - a.price);
        setSortedItems(sortedHigh);
        break;
      case "RATING":
        const sortedRating = categoryItems
          ?.slice()
          ?.sort((a: ProductItem, b: ProductItem) => b.rating - a.rating);
        setSortedItems(sortedRating);
        break;
      default:
        break;
    }
  }, [categoryItems, selectedValue]);

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
                  <div>
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
                  <div className="price-wrapper__product-rating">
                    <Image src={RatingStar} width={15} alt="rating star" />
                    <span>{item.rating}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default CategoryPCard;
