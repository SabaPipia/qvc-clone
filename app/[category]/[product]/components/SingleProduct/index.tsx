"use client";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./style.scss";

import CartIcon from "@/public/assets/icons8-cart-64.png";
import BankCard from "@/public/assets/credit-card-svgrepo-com.svg";

import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CartItem, ProductItem, SingleProduct, appState } from "@/types";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { useDispatch, useSelector } from "react-redux";
import { getAllCartItems, getFavourite } from "@/store/actions";
import { userAuth } from "@/app/provider";
import { usePathname } from "next/navigation";

function SingleProduct({ item }: SingleProduct) {
  const context = useContext(userAuth);

  const [quantity, setQuantity] = useState(1);
  const [isFavourite, setIsFavourite] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([]);
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
  const dispatch: (func: any) => void = useDispatch();
  const DATA = useSelector((state: appState) => state.data);
  let { favourites } = DATA;

  useEffect(() => {
    dispatch(getFavourite());
  }, [dispatch]);

  useEffect(() => {
    if (favourites) {
      if (favourites.length != 0) {
        favourites.map((i: ProductItem) => {
          if (i.id === item.id) {
            setIsFavourite(true);
          }
        });
      }
    }
  }, [favourites]);
  const pathname = usePathname();

  const handleFavourite = () => {
    setIsFavourite(true);
    const favItems = localStorage.getItem("favourite");
    const itemId = pathname.split("/").at(-1);
    if (favItems) {
      const parsedFavItems = JSON.parse(favItems);
      const allData = [...parsedFavItems, itemId];
      const isF = parsedFavItems.filter((i: any) => i === itemId);
      if (isF.length === 0) {
        localStorage.removeItem("favourite");
        localStorage.setItem("favourite", JSON.stringify(allData));
      } else {
        localStorage.removeItem("favourite");
        const updatedFavList = allData.filter((i) => i != itemId);
        localStorage.setItem("favourite", JSON.stringify(updatedFavList));
        setIsFavourite(false);
      }
    } else {
      localStorage.setItem("favourite", JSON.stringify([itemId]));
    }
  };

  const handleAddToCard = () => {
    if (context) {
      dispatch(
        getAllCartItems([{ id: item.id, cartI: item, quantity: quantity }])
      );
    }
  };

  return (
    <div className="single-product-wrapper">
      <div className="product-title__wrapper">
        <h1 className="product-title">{item.title}</h1>
        <span onClick={handleFavourite}>
          <svg
            width="40px"
            height="40px"
            viewBox="0 0 24 24"
            fill={`${isFavourite ? "#F48A75" : "#fff"}`}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z"
              stroke={`${isFavourite ? "#F48A75" : "#000"}`}
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
      <div className="main-product-container">
        <div className="product-carousel">
          <Swiper
            spaceBetween={10}
            navigation={true}
            thumbs={{ swiper: null }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper3"
          >
            {item.images &&
              item.images.map((img, index) => (
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
        <div className="right-side-product">
          <div className="single-product-price">
            {item.discountPercentage > 13 ? (
              <>
                <span className="sale-price">
                  $
                  {(
                    item.price -
                    item.price * (item.discountPercentage / 100)
                  ).toFixed(0)}
                </span>
                <span className="item-sale">${item.price}</span>
              </>
            ) : (
              <span className="real-price">${item.price}</span>
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
            <button onClick={handleAddToCard}>
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
