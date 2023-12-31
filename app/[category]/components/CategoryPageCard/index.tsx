import "./style.scss";

import RatingStar from "@/public/assets/rating-star.png";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import ReactLoading from "react-loading";
import Link from "next/link";

import { ProductItem, CategoryPageCard, appState } from "@/types";
import { useDispatch, useSelector } from "react-redux";
import { getItemByCategory } from "@/store/actions";
import { usePathname } from "next/navigation";
import { Price } from "@/components";

function CategoryPCard({ selectedValue, renderPattern }: CategoryPageCard) {
  const [sortedItems, setSortedItems] = useState<ProductItem[]>([]);
  const pathname = usePathname();

  const dispatch: (func: any) => void = useDispatch();
  const categoryItem = useSelector((state: appState) => state.data);
  const { itemCategory, loading } = categoryItem;

  useEffect(() => {
    dispatch(getItemByCategory(pathname));
  }, [dispatch]);

  useEffect(() => {
    switch (selectedValue) {
      case "BEST":
        setSortedItems(itemCategory);
        break;
      case "LOW":
        const sortedLow = itemCategory
          ?.slice()
          ?.sort((a: ProductItem, b: ProductItem) => a.price - b.price);
        setSortedItems(sortedLow);
        break;
      case "HIGH":
        const sortedHigh = itemCategory
          ?.slice()
          ?.sort((a: ProductItem, b: ProductItem) => b.price - a.price);
        setSortedItems(sortedHigh);
        break;
      case "RATING":
        const sortedRating = itemCategory
          ?.slice()
          ?.sort((a: ProductItem, b: ProductItem) => b.rating - a.rating);
        setSortedItems(sortedRating);
        break;
      default:
        break;
    }
  }, [itemCategory, selectedValue]);

  return (
    <>
      {loading ? (
        <div className="loading-wrapper">
          <ReactLoading
            type={"spokes"}
            color={"#64b0ef"}
            height={100}
            width={100}
          />
        </div>
      ) : (
        <div
          className={`category-${renderPattern}-wrapper-list category-page-main-wrapper`}
        >
          {sortedItems &&
            sortedItems.map((item: ProductItem) => {
              return (
                <div
                  className={`category-page-${renderPattern}-card category-page-card`}
                  key={item.id}
                >
                  <Link
                    href={`/${item.category}/${item.id}`}
                    className="category-page-card__item-link"
                  >
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
                      <div className="item-info__item-name">
                        <span>
                          {item.title},{item.brand}
                        </span>
                        {renderPattern === "list" ? (
                          <div className="list-description">
                            {item.description}
                          </div>
                        ) : null}
                      </div>
                      <div className="category-page-card__item-price-wrapper">
                        <div>
                          <Price
                            discount={item.discountPercentage}
                            price={item.price}
                          />
                        </div>
                        <div className="price-wrapper__product-rating">
                          <Image
                            src={RatingStar}
                            width={15}
                            alt="rating star"
                          />
                          <span>{item.rating}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
        </div>
      )}
    </>
  );
}

export default CategoryPCard;
