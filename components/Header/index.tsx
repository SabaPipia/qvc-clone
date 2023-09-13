"use client";

import "./style.scss";

import logo from "@/public/assets/qvc-logo-rebrand.webp";
import drowDownIcon from "@/public/assets/dropdown-50.png";
import cartIcon from "@/public/assets/icons8-cart-64.png";
import avatar from "@/public/assets/icons8-person-64.png";

import Image from "next/image";
import React, { useEffect } from "react";

import { CustomInput } from "..";

import Link from "next/link";

import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "@/store/actions";

function Header() {
  const dispatch: any = useDispatch();
  const categoriesData = useSelector((state: any) => state.data);
  const { categories } = categoriesData;
  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

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
            <span className="right-side-text">Sign in</span>
            <Image src={drowDownIcon} width={12} height={12} alt="drow down" />
            <div className="dropdown-menu-sign-up">
              <div className="sign-up__button-wrapper">
                <button>Sign In</button>
              </div>
              <ul>
                <Link href="#">
                  <li>Create Account</li>
                </Link>
                <Link href="#">
                  <li>My Account</li>
                </Link>
                <Link href="#">
                  <li>Order Status</li>
                </Link>
                <Link href="#">
                  <li>Manage Easy Pay Orders</li>
                </Link>
                <Link href="#">
                  <li>Manage Auto Delivery</li>
                </Link>
                <Link href="#">
                  <li>Pay My QCard Bill</li>
                </Link>
                <Link href="#">
                  <li>Wish List</li>
                </Link>
                <Link href="#">
                  <li>Browsing History</li>
                </Link>
                <Link href="#">
                  <li>Customer Service</li>
                </Link>
              </ul>
            </div>
          </div>
          <div className="right-side__cart flex-container ">
            <span>Cart</span>
            <div className="cart__cart-icon">
              <Image src={cartIcon} width={30} height={30} alt="cart icon" />
              <span className="cart-count">0</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
