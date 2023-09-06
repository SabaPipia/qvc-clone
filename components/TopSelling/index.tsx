"use client";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "./style.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import React from "react";
import Card from "../Card";
import Link from "next/link";

function TopSelling() {
  const emptyArray = new Array(10).fill(null);
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
            spaceBetween={40}
            pagination={{
              clickable: true,
            }}
            className="mySwiper"
          >
            {emptyArray.map((item: string, index: number) => {
              const isWholeNumber = Number.isInteger(index / 2);

              return (
                <SwiperSlide>
                  <Card isSale={isWholeNumber ? true : false} />
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
