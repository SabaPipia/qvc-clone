"use client";
import "./page.scss";

import { myAccount } from "@/constants";

import React, { useContext } from "react";
import UserAvatar from "@/public/assets/icons8-person-64.png";
import Image from "next/image";
import Link from "next/link";
import { userAuth } from "@/app/provider";

export default function MyAccount() {
  const context = useContext(userAuth);
  return (
    <div className="container">
      <div className="my-account-wrapper component-wrapper">
        <div className="my-account__profile">
          <div className="profile__avatar">
            <Image src={UserAvatar} alt="user image" />
          </div>
          <div className="profile__info">
            <h3>
              Hello,{" "}
              {context?.displayName != null
                ? `${context.displayName}`
                : "Guest"}
            </h3>
            <span>We're happy you're here</span>
          </div>
        </div>
        <div className="my-account__options">
          {myAccount.map((item, index) => {
            return (
              <div className="option__item" key={index}>
                <h3>{item.heading}</h3>
                <ul>
                  {item.links.map((i, index) => {
                    const link = i.split(" ").join("").toLocaleLowerCase();
                    return (
                      <li key={index}>
                        <Link
                          href={`/myaccount/${item.heading
                            .split(" ")
                            .join("")
                            .toLocaleLowerCase()}/${link}`}
                        >
                          {i}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
