"use client";

import { useDispatch, useSelector } from "react-redux";
import "./page.scss";

import React, { useEffect, useState } from "react";
import { getAllProducts } from "@/store/actions";
import { ProductItem } from "@/types";
import Image from "next/image";
import Link from "next/link";

export default function WriteReview() {
  const [itemsQuantity, setItemsQuantity] = useState(15);
  const dispatch: any = useDispatch();
  const topSellingData = useSelector((state: any) => state.data);
  const { allProducts, loading } = topSellingData;
  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
    <div className="container">
      <div className="write-review-page-wrapper">
        <div className="write-review-page__heading">
          <h1>Write a Review</h1>
        </div>
        {loading ? (
          "Loading"
        ) : (
          <>
            <div className="write-review-page__products-wrapper">
              {allProducts?.products &&
                allProducts?.products?.map(
                  (item: ProductItem, index: number) => {
                    if (index <= itemsQuantity) {
                      return (
                        <Link
                          href={`/${item.category}/${item.id}`}
                          className="write-review-page__product-card"
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
                            <span className="card-content__title">
                              {item.title}, {item.brand} {index}
                            </span>
                            <div className="card-content__item-price-wrapper">
                              {item.discountPercentage > 13 ? (
                                <>
                                  <span className="main-card__item-sale-price">
                                    $
                                    {(
                                      item.price -
                                      item.price *
                                        (item.discountPercentage / 100)
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
                        </Link>
                      );
                    }
                  }
                )}
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
