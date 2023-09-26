"use client";

import React from "react";
import "./page.scss";
import { CartItem } from "@/types";
import Image from "next/image";

export default function OrderStatus() {
  const orderedItems: any = localStorage.getItem("orders");

  const orders = JSON.parse(orderedItems);
  return (
    <div>
      <div className="container">
        <div className="order-status-page-wrapper component-wrapper">
          {orders && orders.length != 0 ? (
            orders.map((item: CartItem) => {
              return (
                <div key={item.id} className="orders__items-wrapper">
                  <div className="orders__content">
                    <div className="orders-content__image-wrapper">
                      <Image
                        src={item.cartI.thumbnail}
                        width={1000}
                        height={1000}
                        alt="product card"
                      />
                    </div>
                    <div className="orders-content__product-info">
                      <div>
                        <div className="product-about">
                          <span className="orders-product-info__id">
                            ID:{item.id}
                          </span>
                          <span>Quantity: {item.quantity}</span>
                        </div>
                        <h4 className="orders-product-info__title">
                          {item.cartI.title}, {item.cartI.brand}
                        </h4>
                        <p>{item.cartI.description}</p>
                      </div>
                      <div className="orders-product-info__price-wrapper">
                        {item.cartI.discountPercentage > 13 ? (
                          <div>
                            <span className="sale-price">
                              $
                              {(
                                item.cartI.price -
                                item.cartI.price *
                                  (item.cartI.discountPercentage / 100)
                              ).toFixed(0)}
                            </span>
                            <span className="item-sale">
                              ${item.cartI.price}
                            </span>
                          </div>
                        ) : (
                          <span className="real-price">
                            ${item.cartI.price}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="product-information__action">
                    <div>
                      <button>Cancel Order</button>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <>
              <div className="order-status-page__heading">
                <h2>Order Status</h2>
              </div>
              <div className="order-status-page__empty-panel">
                <span>Sorry, we couldn't find any orders!</span>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
