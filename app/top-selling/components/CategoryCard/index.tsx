"use client";

import "./style.scss";

import RatingStar from "@/public/assets/rating-star.png";

import Image from "next/image";
import ReactLoading from "react-loading";
import Link from "next/link";
import React, { useEffect } from "react";
import { ProductItem, BrowsingPageCard, appState } from "@/types";
import { useDispatch, useSelector } from "react-redux";
import { getTopSelling } from "@/store/actions";

function CategoryPageCard({ renderPattern }: BrowsingPageCard) {
  const dispatch: (func: any) => void = useDispatch();
  const topSellingData = useSelector((state: appState) => state.data);
  const { topSelling, loading } = topSellingData;

  useEffect(() => {
    dispatch(getTopSelling());
  }, [dispatch]);
  return (
    <>
      {topSelling && !loading ? (
        <div
          className={`category-${renderPattern}-wrapper-list category-page-main-wrapper`}
        >
          {topSelling &&
            topSelling.map((item: ProductItem, index: number) => {
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
                        <div className="">
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
      ) : (
        <div className="loading-wrapper">
          <ReactLoading
            type={"spokes"}
            color={"#64b0ef"}
            height={100}
            width={100}
          />
        </div>
      )}
    </>
  );
}

export default CategoryPageCard;
