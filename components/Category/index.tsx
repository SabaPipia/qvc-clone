"use client";

import "swiper/css";
import "./style.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import React, { useEffect } from "react";
import CategoryCard from "../CategoryCard";
import { CategoryCardInterface, appState } from "@/types";
import { useDispatch, useSelector } from "react-redux";
import { getCategoryImages } from "@/store/actions";
import ReactLoading from "react-loading";

function Category() {
  const dispatch: (func: any) => void = useDispatch();
  const categoryItems = useSelector((state: appState) => state.data);
  const { categoryItem, loading } = categoryItems;

  useEffect(() => {
    dispatch(getCategoryImages());
  }, [dispatch]);

  return (
    <div className="container">
      <div className="category-wrapper">
        <div className="category__heading-wrapper">
          <h2 className="category__heading">Shop by Category</h2>
        </div>
        <div>
          <Swiper
            slidesPerView={4}
            grid={{
              rows: 1,
            }}
            spaceBetween={40}
            pagination={{
              clickable: true,
            }}
            className="mySwiper"
          >
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
              categoryItem &&
              categoryItem.map((item: CategoryCardInterface, index: number) => {
                return (
                  <SwiperSlide key={item.category}>
                    <CategoryCard item={item} />
                  </SwiperSlide>
                );
              })
            )}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Category;
