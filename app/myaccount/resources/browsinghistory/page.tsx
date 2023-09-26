"use client";

import "./page.scss";

import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { getHistory } from "@/store/actions";
import { ProductItem, appState } from "@/types";
import Link from "next/link";
import Image from "next/image";
import RatingStar from "@/public/assets/rating-star.png";

export default function BrowsingHistory() {
  const dispatch: (func: any) => void = useDispatch();
  const historyItems = useSelector((state: appState) => state.data);
  const { history, loading } = historyItems;
  useEffect(() => {
    dispatch(getHistory());
  }, [dispatch]);
  return (
    <div className="container">
      <div className="browsing-history-page-wrapper component-wrapper">
        <div className="browsing-history-page__heading">
          <h2>Browsing History</h2>
        </div>
        {loading ? (
          <div className="browsing-history-page__products-wrapper">
            <h3 className="products__empty-heading">
              Your browsing history is Empty
            </h3>
            <span className="products__empty-span">
              Find what you love & add it here.
            </span>
          </div>
        ) : (
          <div className="category-page-main-wrapper">
            {history.map((item: ProductItem) => {
              return (
                <div className={`category-page-card`} key={item.id}>
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
                      </div>
                      <div className="category-page-card__item-price-wrapper">
                        <div>
                          {item.discountPercentage > 13 ? (
                            <>
                              <span className="sale-price">
                                $
                                {(
                                  item.price -
                                  item.price * (item.discountPercentage / 100)
                                ).toFixed(0)}
                              </span>
                              <span className="item-sale">${item.price}</span>
                            </>
                          ) : (
                            <span className="real-price">${item.price}</span>
                          )}
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
      </div>
    </div>
  );
}
