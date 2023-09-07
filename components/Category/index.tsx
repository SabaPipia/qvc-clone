"use client";

import "swiper/css";
import "./style.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import React, { useContext } from "react";
import CategoryCard from "../CategoryCard";
import { DataContext } from "@/app/provider";
import { CategoryCardInterface } from "@/types";

function Category() {
  const { categoryItem } = useContext(DataContext);

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
            {categoryItem.map((item: CategoryCardInterface, index: number) => {
              return (
                <SwiperSlide key={item.category}>
                  <CategoryCard item={item} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Category;
