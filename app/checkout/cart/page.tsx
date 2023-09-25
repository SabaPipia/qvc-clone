"use client";

import "./page.scss";
import DummyImage from "@/public/assets/card-dummyimg.jpg";
import PayPal from "@/public/assets/paypal.svg";

import Link from "next/link";
import React, { useEffect } from "react";
import Image from "next/image";
import { appState } from "@/types";
import { useSelector } from "react-redux";

export default function Cart() {
  const { cartItem } = useSelector((state: appState) => state.data);

  let sum = 0;
  cartItem.map((item: any) => {
    if (item.cartI.discountPercentage > 13) {
      sum +=
        (item.cartI.price -
          item.cartI.price * (item.cartI.discountPercentage / 100)) *
        item.quantity;
    } else {
      sum += item.cartI.price * item.quantity;
    }
    sum += Number(
      ((item.cartI.discountPercentage / 100) * item.cartI.price).toFixed(0)
    );
  });
  return (
    <div className="container">
      <div className="component-wrapper cart-wrapper">
        <Link href="/" className="continue-shopping">
          Continue Shopping
        </Link>
        <div className="cart-item">
          <div className="cart-item__product-wrapper">
            {cartItem.map((item: any) => {
              return (
                <div key={item.id} className="main-cart-items-wrapper">
                  <div className="product-information__content">
                    <div className="content__image-wrapper">
                      <Image
                        src={item.cartI.thumbnail}
                        width={1000}
                        height={1000}
                        alt="product card"
                      />
                    </div>
                    <div className="content__product-info">
                      <span className="product-info__id">{item.id}</span>
                      <h4 className="product-info__title">
                        {item.cartI.title}, {item.cartI.brand}
                      </h4>
                      <span className="product-info__easy-pays">
                        3 Easy Pays of $20.00 <Link href="#">(Details)</Link>
                      </span>
                      <div className="product-info__price-wrapper">
                        {item.cartI.discountPercentage > 13 ? (
                          <div>
                            <span className="price__sale-price">
                              $
                              {(
                                item.cartI.price -
                                item.cartI.price *
                                  (item.cartI.discountPercentage / 100)
                              ).toFixed(0)}
                            </span>
                            <span className="price__item-sale">
                              ${item.cartI.price}
                            </span>
                          </div>
                        ) : (
                          <span className="price__main-price">
                            ${item.cartI.price}
                          </span>
                        )}
                        <span className="price__tax">
                          S&H $
                          {(
                            (item.cartI.discountPercentage / 100) *
                            item.cartI.price
                          ).toFixed(0)}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="product-information__action">
                    <span>quantity: {item.quantity}</span>
                    <div>
                      <button>Remove</button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="cart-item__product-checkout">
            <div className="checkout__subtotal">
              <span>Subtotal({cartItem.length} item)</span>
              <span>
                {sum.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </span>
            </div>
            <div className="checkout__buttons">
              <button>Checkout</button>
              <button>
                <Image src={PayPal} alt="paypal icon" />
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
