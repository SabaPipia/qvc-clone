"use client";

import "swiper/css";
import "swiper/css/grid";
import "./style.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import React, { useEffect } from "react";
import Card from "../Card";
import Link from "next/link";
import { ProductItem } from "@/types";
import { useDispatch, useSelector } from "react-redux";
import { getTopSelling } from "@/store/actions";
import ReactLoading from "react-loading";

function TopSelling() {
  const dispatch: any = useDispatch();
  const topSellingData = useSelector((state: any) => state.data);
  const { topSelling, loading } = topSellingData;

  useEffect(() => {
    dispatch(getTopSelling());
  }, [dispatch]);

  return (
    <div className="container top">
      <div className="top-selling">
        <div className="top-selling__header-wrapper">
          <h2 className="top-selling__heading">Top Selling</h2>
          <Link href="/top-selling">Shop now</Link>
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
              topSelling &&
              topSelling.map((item: ProductItem, index: number) => {
                return (
                  <SwiperSlide key={index}>
                    <Card data={item} />
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

export default TopSelling;
