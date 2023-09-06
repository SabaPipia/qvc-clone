"use client";

import "swiper/css";
import "./style.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import React from "react";
import CategoryCard from "../CategoryCard";

function Category() {
  const emptyArray = new Array(10).fill(null);
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
            {emptyArray.map(() => {
              return (
                <SwiperSlide>
                  <CategoryCard />
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
