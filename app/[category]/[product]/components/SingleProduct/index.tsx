"use client";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./style.scss";

import CartIcon from "@/public/assets/icons8-cart-64.png";
import BankCard from "@/public/assets/credit-card-svgrepo-com.svg";

import { SingleProduct } from "@/types";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

function SingleProduct({ item }: SingleProduct) {
  const [quantity, setQuantity] = useState(1);
  const decreaceHandler = () => {
    if (quantity != 1) {
      setQuantity(quantity - 1);
    } else {
      console.log("u cant decreace item count anymore");
    }
  };
  const increaseHandler = () => {
    if (quantity != 5) {
      setQuantity(quantity + 1);
    } else {
      console.log("u cant increase item count anymore");
    }
  };
  return (
    <div className="single-product-wrapper">
      <h1 className="product-title">{item.title}</h1>
      <div className="main-product-container">
        <div className="product-carousel">
          <Swiper
            spaceBetween={10}
            navigation={true}
            thumbs={{ swiper: null }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2"
          >
            {item.images &&
              item.images.map((img, index) => (
                <SwiperSlide key={index}>
                  <Image
                    src={`${img}`}
                    width={5000}
                    height={500}
                    alt={`${index}`}
                    priority
                  />
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
        <div className="right-side-product">
          <div className="single-product-price">
            {item.discountPercentage > 13 ? (
              <>
                <span className="item-sale-price">
                  $
                  {(
                    item.price -
                    item.price * (item.discountPercentage / 100)
                  ).toFixed(0)}
                </span>
                <span className="product-item-price item-sale">
                  ${item.price}
                </span>
              </>
            ) : (
              <span className="product-item-price">${item.price}</span>
            )}
          </div>
          <span className="product__price-details">Price Details</span>
          <div className="quantity-wrapper">
            <button onClick={decreaceHandler}>-</button>
            <input type="text" id="quantity" value={quantity} readOnly />
            <button onClick={increaseHandler}>+</button>
            <hr />
          </div>
          <div className="product__buy-buttons-wrapper">
            <button>
              <Image src={CartIcon} alt="carticon" /> Add To Cart
            </button>
            <button>
              <Image src={CartIcon} alt="carticon" /> Speed Buy
            </button>
          </div>
          <div className="offers">
            <h3>Promotional Offers</h3>
            <div className="offers__info">
              <Image src={BankCard} width={25} height={25} alt="carticon" />
              <span>
                Limited Time! Get $40 Off* When You Open a QCard®.{" "}
                <Link href="#">Learn How</Link>
              </span>
            </div>
            <div className="protection-wrapper">
              <span>Protect Your Purchase with Allstate</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
