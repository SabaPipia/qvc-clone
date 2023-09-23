"use client";

import "./page.scss";

import { getSingleItem } from "@/store/actions";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { appState } from "@/types";

export default function ProductReviewPage() {
  const pathname = usePathname();
  const itemId = pathname.split("/").at(-1);

  const dispatch: (func: any) => void = useDispatch();
  const DATA = useSelector((state: appState) => state.data);
  let { singleProduct } = DATA;

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    dispatch(getSingleItem(itemId + ""));
  }, [dispatch]);
  console.log(DATA);
  return (
    <div className="container">
      <div className="component-wrapper review__single-product-wrapper">
        <div className="review__product-title__wrapper">
          <h1 className="review__roduct-title">{singleProduct.title}</h1>
        </div>
        <div className="review__product-container">
          <div className="review__product-carousel">
            <Swiper
              spaceBetween={10}
              navigation={true}
              thumbs={{ swiper: null }}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper4"
            >
              {singleProduct.images &&
                singleProduct.images.map((img: string[], index: number) => (
                  <SwiperSlide key={index}>
                    <Image
                      src={`${img}`}
                      width={1000}
                      height={1000}
                      alt={`${index}`}
                      priority
                    />
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
          <div className="review__right-side-product">
            <div className="review__single-product-price">
              {singleProduct.discountPercentage > 13 ? (
                <>
                  <span className="review__item-sale-price">
                    $
                    {(
                      singleProduct.price -
                      singleProduct.price *
                        (singleProduct.discountPercentage / 100)
                    ).toFixed(0)}
                  </span>
                  <span className="review__product-item-price item-sale">
                    ${singleProduct.price}
                  </span>
                </>
              ) : (
                <span className="review__product-item-price">
                  ${singleProduct.price}
                </span>
              )}
            </div>

            <div className="review__product-about">
              <span>{singleProduct.title}</span>
              <p>{singleProduct.description}</p>
            </div>
            <hr />
            <div className="review__send-email">
              <form>
                <div className="email__user-info">
                  <input type="text" placeholder="John" />
                  <input type="text" placeholder="example@gmail.com" />
                </div>
                <textarea
                  placeholder={`Write your review for '${singleProduct.title}' here...`}
                ></textarea>
                <button>Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
