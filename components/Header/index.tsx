"use client";

import "./style.scss";

import logo from "@/public/assets/qvc-logo-rebrand.webp";
import drowDownIcon from "@/public/assets/dropdown-50.png";
import cartIcon from "@/public/assets/icons8-cart-64.png";
import avatar from "@/public/assets/icons8-person-64.png";

import Image from "next/image";
import React, { useContext } from "react";

import { CustomInput } from "..";
import { DataContext } from "@/app/provider";
import Link from "next/link";

function Header() {
  const context = useContext(DataContext);
  return (
    <header>
      <div className="header flex-container ">
        <div className="header__left-side flex-container">
          <Image src={logo} width={60} height={60} alt="header logo" />
          <div className="left-side__shop">
            <span>SHOP</span>
            <Image src={drowDownIcon} width={12} height={12} alt="drow down" />
            <div className="dropdown-menu">
              <ul>
                {context.categories &&
                  context.categories.map((item: string) => (
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
