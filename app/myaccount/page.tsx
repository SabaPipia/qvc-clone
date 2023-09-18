import "./page.scss";

import { myAccount } from "@/constants";

import React from "react";
import UserAvatar from "@/public/assets/icons8-person-64.png";
import Image from "next/image";
import Link from "next/link";

export default function MyAccount() {
  return (
    <div className="container">
      <div className="my-account-wrapper">
        <div className="my-account__profile">
          <div className="profile__avatar">
            <Image src={UserAvatar} alt="user image" />
          </div>
          <div className="profile__info">
            <h3>Hello, John!</h3>
            <span>We're happy you're here</span>
          </div>
        </div>
        <div className="my-account__options">
          {myAccount.map((item) => {
            return (
              <div className="option__item">
                <h3>{item.heading}</h3>
                <ul>
                  {item.links.map((i) => {
                    return (
                      <li>
                        <Link href="#">{i}</Link>
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
