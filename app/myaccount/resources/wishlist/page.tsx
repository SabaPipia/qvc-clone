"use client";

import "./page.scss";

import GridIcon from "@/public/assets/grid-icon.png";
import ListIcon from "@/public/assets/list-icon.png";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFavourite } from "@/store/actions";
import { ProductItem, appState } from "@/types";
import Image from "next/image";
import ReactLoading from "react-loading";
import WishListCard from "./components/Card";

export default function WishList() {
  const [renderPattern, setRenderPattern] = useState("grid");

  const dispatch: (func: any) => void = useDispatch();
  const DATA = useSelector((state: appState) => state.data);
  const { favourites, loading } = DATA;
  useEffect(() => {
    dispatch(getFavourite());
  }, [dispatch]);

  return (
    <div className="container">
      <div className="wishlist-page-wrapper component-wrapper">
        <div className="wishlist-page__heading">
          <h2>My Wish List</h2>
          <div className="wishlist-toggle__pattern">
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
          </div>
        </div>
        {favourites.length != 0 ? (
          <div className="wishlist-page__products-wrapper">
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
                className={`wishlist-${renderPattern}-page-main-wrapper wishlist-page-product-wrapper`}
              >
                {favourites.map((item: ProductItem) => {
                  return (
                    <div
                      className={`wishlist-page-card__item-link`}
                      key={item.id}
                    >
                      <WishListCard item={item} renderPattern={renderPattern} />
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        ) : (
          <div className="wishlist-page__products-wrapper">
            <h3 className="products__empty-heading">Your Wish List is Empty</h3>
            <span className="products__empty-span">
              Find what you love & add it here.
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
