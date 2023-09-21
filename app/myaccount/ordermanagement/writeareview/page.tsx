"use client";
import "./page.scss";

import GridIcon from "@/public/assets/grid-icon.png";
import ListIcon from "@/public/assets/list-icon.png";
import ReviewIcon from "@/public/assets/write-a-review.png";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ReactLoading from "react-loading";

import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "@/store/actions";
import { ProductItem } from "@/types";

export default function WriteReview() {
  const [renderPattern, setRenderPattern] = useState("grid");
  const [itemsQuantity, setItemsQuantity] = useState(15);
  const [selectedValue, setSelectedValue] = useState("BEST");
  const [sortedItems, setSortedItems] = useState<ProductItem[]>([]);

  const dispatch: any = useDispatch();
  const topSellingData = useSelector((state: any) => state.data);
  const { allProducts, loading } = topSellingData;
  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  useEffect(() => {
    switch (selectedValue) {
      case "BEST":
        setSortedItems(allProducts?.products);
        break;
      case "LOW":
        const sortedLow = allProducts?.products
          ?.slice()
          ?.sort((a: ProductItem, b: ProductItem) => a.price - b.price);
        setSortedItems(sortedLow);
        break;
      case "HIGH":
        const sortedHigh = allProducts?.products
          ?.slice()
          ?.sort((a: ProductItem, b: ProductItem) => b.price - a.price);
        setSortedItems(sortedHigh);
        break;
      case "RATING":
        const sortedRating = allProducts?.products
          ?.slice()
          ?.sort((a: ProductItem, b: ProductItem) => b.rating - a.rating);
        setSortedItems(sortedRating);
        break;
      default:
        break;
    }
  }, [allProducts, selectedValue]);

  return (
    <div className="container">
      <div className="write-review-page-wrapper">
        <div className="write-review-page__heading">
          <div>
            <h1>Write a Review</h1>
          </div>
          <div className="heading__right-side">
            {renderPattern === "list" ? (
              <Image
                src={GridIcon}
                width={24}
                height={24}
                alt="icon"
                onClick={() => setRenderPattern("grid")}
              />
            ) : (
              <Image
                src={ListIcon}
                width={24}
                height={24}
                alt="icon"
                onClick={() => setRenderPattern("list")}
              />
            )}
            <div>
              <span>Sort by:</span>
              <select
                name="sort"
                id="category-page__sort"
                onChange={(e: any) => setSelectedValue(e.target.value)}
              >
                <option value="BEST">Best Match</option>
                <option value="RATING">Highest Rating</option>
                <option value="HIGH">Price - High to Low</option>
                <option value="LOW">Price - Low to High</option>
              </select>
            </div>
          </div>
        </div>
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
          <>
            <div
              className={`write-review-page__products-wrapper ${renderPattern}-review`}
            >
              {sortedItems &&
                sortedItems.map((item: ProductItem, index: number) => {
                  if (index <= itemsQuantity) {
                    return (
                      <div
                        className={`write-review-page__product-card ${renderPattern}-card`}
                        key={item.id}
                      >
                        <div className="product-card__image-wrapper">
                          <Image
                            src={item.thumbnail}
                            width={1000}
                            height={1000}
                            alt={item.title}
                          />
                        </div>
                        <div className="product-card__content-wrapper">
                          <div className="card-content__title">
                            <span>
                              {item.title}, {item.brand}
                            </span>
                            {renderPattern === "grid" ? null : (
                              <p>{item.description}</p>
                            )}
                          </div>
                          <div className="card-content__item-price-wrapper">
                            {item.discountPercentage > 13 ? (
                              <>
                                <span className="main-card__item-sale-price">
                                  $
                                  {(
                                    item.price -
                                    item.price * (item.discountPercentage / 100)
                                  ).toFixed(0)}
                                </span>
                                <span className="main-card__item-price item-sale">
                                  ${item.price}
                                </span>
                              </>
                            ) : (
                              <span className="main-card__item-real-price">
                                ${item.price}
                              </span>
                            )}
                          </div>
                        </div>
                        <Link
                          href={`writeareview/${item.id}`}
                          className="write-rev-button"
                        >
                          {renderPattern === "grid" ? (
                            "Write a Review"
                          ) : (
                            <div>
                              <Image
                                src={ReviewIcon}
                                width={50}
                                height={50}
                                alt="write a review icon"
                              />
                            </div>
                          )}
                        </Link>
                      </div>
                    );
                  }
                })}
            </div>
            {itemsQuantity > 100 ? (
              <div className="write-review-page__button-wrapper">
                <button onClick={() => setItemsQuantity(15)}>Show Less</button>
              </div>
            ) : (
              <div className="write-review-page__button-wrapper">
                <button onClick={() => setItemsQuantity(itemsQuantity + 10)}>
                  Load More
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
