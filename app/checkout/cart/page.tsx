"use client";

import "./page.scss";
import PayPal from "@/public/assets/paypal.svg";

import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { ProductItem, appState } from "@/types";
import { useDispatch, useSelector } from "react-redux";
import { removeAllCartItems, removeCartItem } from "@/store/actions";
import { Price } from "@/components";

export default function Cart() {
  const dispatch: (func: any) => void = useDispatch();
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

  const handleRemoveButton = (product: any) => {
    const updatedCartItems: any = cartItem.filter((i) => i.id !== product.id);
    dispatch(removeCartItem(updatedCartItems));
  };

  const handleCheckoutButton = (item: ProductItem[]) => {
    const orderItemsString = JSON.stringify(item);
    const isOrder: any = localStorage.getItem("orders");

    if (isOrder) {
      const parsedData = JSON.parse(isOrder);
      const parsedItems = JSON.parse(orderItemsString);
      const AllOrders = [...parsedData, ...parsedItems];
      localStorage.removeItem("order");
      localStorage.setItem("orders", JSON.stringify(AllOrders));
    } else {
      localStorage.setItem("orders", orderItemsString);
    }
    dispatch(removeAllCartItems());
  };

  return (
    <div className="container">
      <div className="component-wrapper cart-wrapper">
        {cartItem.length != 0 ? (
          <>
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
                            src={item.cartI.images[0]}
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
                            3 Easy Pays of $20.00{" "}
                            <Link href="#">(Details)</Link>
                          </span>
                          <div className="product-info__price-wrapper">
                            <div>
                              <Price
                                discount={item.cartI.discountPercentage}
                                price={item.cartI.price}
                              />
                            </div>
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
                          <button onClick={() => handleRemoveButton(item)}>
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="cart-item__product-checkout">
                <div className="cart-fixed">
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
                    <button onClick={() => handleCheckoutButton(cartItem)}>
                      Checkout
                    </button>
                    <button>
                      <Image src={PayPal} alt="paypal icon" />
                      Checkout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="cart-empty">
            <div>
              <h3>Your cart is empty</h3>

              <Link href="/" className="empty-link">
                Start Shopping
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
