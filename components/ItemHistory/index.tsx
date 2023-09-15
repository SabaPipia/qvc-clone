"use client";

import "swiper/css";
import "swiper/css/grid";

import { Swiper, SwiperSlide } from "swiper/react";
import React, { useEffect } from "react";
import Card from "../Card";
import Link from "next/link";
import { ProductItem } from "@/types";
import { useDispatch, useSelector } from "react-redux";
import { getHistory } from "@/store/actions";
import ReactLoading from "react-loading";

function ItemHistory() {
  const dispatch: any = useDispatch();
  const historyItems = useSelector((state: any) => state.data);
  const { history, loading } = historyItems;
  useEffect(() => {
    dispatch(getHistory());
  }, [dispatch]);
  return (
    <>
      {loading ? (
        <div className="loading-wrapper">
          <ReactLoading
            type={"spokes"}
            color={"#64b0ef"}
            height={100}
            width={100}
          />
        </div>
      ) : history && history.length >= 1 ? (
        <div className="container top">
          <div className="top-selling">
            <div className="top-selling__header-wrapper">
              <h2 className="top-selling__heading">Items You've Viewed</h2>
              <Link href="/browsing-history">See My Browsing History</Link>
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
                {history &&
                  history.map((item: ProductItem, index: number) => {
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
