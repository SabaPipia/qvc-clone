"use client";

import "./style.scss";

import logo from "@/public/assets/qvc-logo-rebrand.webp";
import drowDownIcon from "@/public/assets/dropdown-50.png";
import cartIcon from "@/public/assets/icons8-cart-64.png";
import avatar from "@/public/assets/icons8-person-64.png";

import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CustomInput } from "..";
import { useDispatch, useSelector } from "react-redux";
import { getCategories, removeAllCartItems } from "@/store/actions";
import { useRouter } from "next/navigation";

import { auth } from "@/app/firebase";
import { signOut } from "firebase/auth";
import { userAuth } from "@/app/provider";
import { appState } from "@/types";

function Header() {
  const context = useContext(userAuth);
  const [itemQuantity, setItemQuantity] = useState(0);

  const dispatch: (func: any) => void = useDispatch();
  const DATA = useSelector((state: appState) => state.data);
  const { categories, cartItem } = DATA;

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const { push } = useRouter();

  useEffect(() => {
    setItemQuantity(cartItem.length);
  }, [cartItem]);

  const signOutUser = () => {
    dispatch(removeAllCartItems());
    signOut(auth)
      .then(() => {
        push("/myaccount/login");
      })
      .catch((error) => console.log(error));
  };

  return (
    <header>
      <div className="header flex-container ">
        <div className="header__left-side flex-container">
          <Link href="/">
            <Image src={logo} width={60} height={60} alt="header logo" />
          </Link>
          <div className="left-side__shop">
            <span>SHOP</span>
            <Image src={drowDownIcon} width={12} height={12} alt="drow down" />
            <div className="dropdown-menu">
              <ul>
                {categories &&
                  categories.map((item: string) => (
                    <Link href={`/${item}`} key={item}>
                      <li>{item}</li>
                    </Link>
                  ))}
              </ul>
            </div>
          </div>
          <p>TRENDING</p>
        </div>
        <div className="header__middle">
          <CustomInput />
        </div>
        <div className="header__right-side flex-container">
          <div className="right-side__sign-up flex-container ">
            <div className="sign-up__avatar-background">
              <Image
                src={avatar}
                width={30}
                height={30}
                alt="avatar icon"
                className="avatar-icon"
              />
            </div>
            <span className="right-side-text">
              {context?.displayName != null
                ? `Hi, ${context.displayName}`
                : "Sign In"}
            </span>
            <Image src={drowDownIcon} width={12} height={12} alt="drow down" />
            <div className="dropdown-menu-sign-up">
              {!context ? (
                <div className="sign-up__button-wrapper">
                  <button onClick={() => push("/myaccount/login")}>
                    Sign In
                  </button>
                </div>
              ) : null}
              <ul>
                {!context ? (
                  <Link href="/myaccount/create-account">
                    <li>Create Account</li>
                  </Link>
                ) : null}
                <Link href="/myaccount">
                  <li>My Account</li>
                </Link>
                <Link href="/myaccount/ordermanagement/orderstatus">
                  <li>Order Status</li>
                </Link>
                <Link href={!context ? "/myaccount/login" : "#"}>
                  <li>Manage Easy Pay Orders</li>
                </Link>
                <Link href={!context ? "/myaccount/login" : "#"}>
                  <li>Manage Auto Delivery</li>
                </Link>
                <Link href={!context ? "/myaccount/login" : "#"}>
                  <li>Pay My QCard Bill</li>
                </Link>
                <Link
                  href={
                    !context
                      ? "/myaccount/login"
                      : "/myaccount/resources/wishlist"
                  }
                >
                  <li>Wish List</li>
                </Link>
                {!context ? (
                  <Link href="/myaccount/resources/browsinghistory">
                    <li>Browsing History</li>
                  </Link>
                ) : null}
                <Link href={!context ? "/myaccount/login" : "#"}>
                  <li>Customer Service</li>
                </Link>
                {context ? (
                  <Link href="/myaccount/login" onClick={signOutUser}>
                    <li>Sign Out</li>
                  </Link>
                ) : null}
              </ul>
            </div>
          </div>
          <Link
            href="/checkout/cart"
            className="right-side__cart flex-container"
          >
            <span>Cart</span>
            <div className="cart__cart-icon">
              <Image src={cartIcon} width={30} height={30} alt="cart icon" />
              <span className="cart-count">{itemQuantity}</span>
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
