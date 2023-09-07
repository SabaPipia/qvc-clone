"use client";

import "./style.scss";
import categoryImage from "@/public/assets/categoryImgDummy.jpg";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import CategoryCard from "../CategoryCard";

function Trending() {
  const emptyArray = new Array(10).fill(null);
  return (
    <div className="container">
      <div className="trending-wrapper">
        <div className="trending__heading-wrapper">
          <h2 className="trending-heading">Currently Trending</h2>
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
            {emptyArray.map((item, index) => {
              return (
                <SwiperSlide key={index}>
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

export default Trending;
