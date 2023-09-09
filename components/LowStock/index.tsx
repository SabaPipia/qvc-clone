"use client";

import "swiper/css";
import "swiper/css/grid";
import "./style.scss";

import { Swiper, SwiperSlide } from "swiper/react";

import React, { useContext } from "react";
import LowInStockCard from "./Card";
import { DataContext } from "@/app/provider";
import { ProductItem } from "@/types";

function LowInStock({}) {
  const { lowInStockItem } = useContext(DataContext);
  return (
    <div className="container top">
      <div className="low-in-stock">
        <div className="low-in-stock__heading-wrapper">
          <h2 className="low-in-stock__heading">Low in Stock</h2>
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
            {lowInStockItem &&
              lowInStockItem.map((item: ProductItem) => {
                return (
                  <SwiperSlide key={item.id}>
                    <LowInStockCard data={item} />
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default LowInStock;
