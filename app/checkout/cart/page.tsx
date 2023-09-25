import "./page.scss";
import DummyImage from "@/public/assets/card-dummyimg.jpg";
import PayPal from "@/public/assets/paypal.svg";

import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function Cart() {
  return (
    <div className="container">
      <div className="component-wrapper cart-wrapper">
        <Link href="/" className="continue-shopping">
          Continue Shopping
        </Link>
        <div className="cart-item">
          <div className="cart-item__product-wrapper">
            <div>
              <div className="product-information__content">
                <div className="content__image-wrapper">
                  <Image
                    src={DummyImage}
                    width={1000}
                    height={1000}
                    alt="product card"
                  />
                </div>
                <div className="content__product-info">
                  <span className="product-info__id">11</span>
                  <h4 className="product-info__title">Iphone 91</h4>
                  <span className="product-info__easy-pays">
                    3 Easy Pays of $20.00 <Link href="#">(Details)</Link>
                  </span>
                  <div className="product-info__price-wrapper">
                    <span className="price__main-price">60.00</span>{" "}
                    <span className="price__tax">S&H $5.50</span>
                  </div>
                </div>
              </div>
              <div className="product-information__action">
                <div>
                  <select name="quantity">
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
                <div>
                  <button>Remove</button>
                </div>
              </div>
            </div>
          </div>
          <div className="cart-item__product-checkout">
            <div className="checkout__subtotal">
              <span>Subtotal(1 item)</span>
              <span>$37.83</span>
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
