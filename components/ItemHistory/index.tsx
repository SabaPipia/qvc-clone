"use client";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "./style.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import React, { useContext } from "react";
import Card from "../Card";
import Link from "next/link";
import { DataContext } from "@/app/provider";
import { ProductItem } from "@/types";

function ItemHistory() {
  const { itemHistory } = useContext(DataContext);

  return (
    <>
      {itemHistory.length >= 1 ? (
        <div className="container top">
          <div className="top-selling">
            <div className="top-selling__header-wrapper">
              <h2 className="top-selling__heading">Items You've Viewed</h2>
              <Link href="#">See My Browsing History</Link>
            </div>
            <div className="top-selling__card-wrapper">
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
                {itemHistory &&
                  itemHistory.map((item: ProductItem, index: number) => {
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
      ) : null}
    </>
  );
}

export default ItemHistory;
