"use client";

import "swiper/css";
import "swiper/css/grid";
import "./style.scss";

import { Swiper, SwiperSlide } from "swiper/react";

import React, { useContext, useEffect } from "react";
import LowInStockCard from "./Card";
import { DataContext } from "@/app/provider";
import { ProductItem } from "@/types";
import { useDispatch, useSelector } from "react-redux";
import { getTopSelling } from "@/store/actions";
import ReactLoading from "react-loading";

function LowInStock({}) {
  const dispatch: any = useDispatch();
  const lowStockItems = useSelector((state: any) => state.data);
  const { lowStock, loading } = lowStockItems;

  useEffect(() => {
    dispatch(getTopSelling());
  }, [dispatch]);

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
              lowStock &&
              lowStock.map((item: ProductItem) => {
                return (
                  <SwiperSlide key={item.id}>
                    <LowInStockCard data={item} />
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

export default LowInStock;
