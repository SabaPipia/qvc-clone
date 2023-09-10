"use client";

import "swiper/css";
import "swiper/css/grid";
import "./style.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import React, { useContext } from "react";
import Card from "../Card";
import Link from "next/link";
import { DataContext } from "@/app/provider";
import { ProductItem } from "@/types";

function TopSelling() {
  const { topSellingItems } = useContext(DataContext);
  return (
    <div className="container top">
      <div className="top-selling">
        <div className="top-selling__header-wrapper">
          <h2 className="top-selling__heading">Top Selling</h2>
          <Link href="#">Shop now</Link>
        </div>
        <div className="top-selling__card-wrapper">
          <Swiper
            slidesPerView={4}
            grid={{
              rows: 1,
            }}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            className="mySwiper"
          >
            {topSellingItems &&
              topSellingItems.map((item: ProductItem, index: number) => {
                return (
                  <SwiperSlide key={index}>
                    <Card data={item} />
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default TopSelling;
