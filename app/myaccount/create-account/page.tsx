"use client";

import "./page.scss";

import React, { useState } from "react";
import Link from "next/link";

export default function CreateAccount() {
  const [isFloorAddressVisible, setIsFloorAddressVisible] = useState(false);
  const [inputValues, setInputValues] = useState({
    email: "",
    password: "",
    repassword: "",
    title: "",
    firstName: "",
    lastName: "",
    address: "",
    floorAddress: "",
    zip: "",
    phone: "",
  });
  const handleFloorClick = (e: any) => {
    e.preventDefault();
    setIsFloorAddressVisible(!isFloorAddressVisible);
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };
  console.log(inputValues.email);
  return (
    <div className="create-account-wrapper container">
      <form>
        <div className="email-input-wrapper input-wrapper">
          <input
            type="email"
            className="email__input"
            name="email"
            value={inputValues.email}
            onChange={handleInputChange}
          />
          <label
            className={`email__label ${inputValues.email ? "has-value" : ""}`}
          >
            Email Address
          </label>
        </div>
        <div className="password-input-wrapper input-wrapper">
          <input
            type="password"
            className="password__input"
            name="password"
            value={inputValues.password}
            onChange={handleInputChange}
          />
          <label className={`${inputValues.password ? "has-value" : ""}`}>
            Create Password
          </label>
          <button>Show</button>
        </div>
        <div className="repassword-input-wrapper input-wrapper">
          <input
            type="password"
            className="repassword__input"
            name="repassword"
            value={inputValues.repassword}
            onChange={handleInputChange}
          />
          <label className={`${inputValues.repassword ? "has-value" : ""}`}>
            Confirm Password
          </label>
          <button>Show</button>
        </div>
        <div className="billing-address-wrapper">
          <div className="user-information">
            <div className="user__title input-wrapper">
              <input
                type="text"
                name="title"
                value={inputValues.title}
                onChange={handleInputChange}
              />
              <label className={`${inputValues.title ? "has-value" : ""}`}>
                Title
              </label>
            </div>
            <div className="user__first-name input-wrapper">
              <input
                type="text"
                name="firstName"
                value={inputValues.firstName}
                onChange={handleInputChange}
              />
              <label className={`${inputValues.firstName ? "has-value" : ""}`}>
                First Name
              </label>
            </div>
            <div className="user__last-name input-wrapper">
              <input
                type="text"
                name="lastName"
                value={inputValues.lastName}
                onChange={handleInputChange}
              />
              <label className={`${inputValues.lastName ? "has-value" : ""}`}>
                Last Name
              </label>
            </div>
          </div>
          <div className="billing__street-address input-wrapper">
            <input
              type="text"
              name="address"
              value={inputValues.address}
              onChange={handleInputChange}
            />
            <label className={`${inputValues.address ? "has-value" : ""}`}>
              Street Adress
            </label>
          </div>
          <div className="billing__street-address">
            <div className="floor__address">
              <button className="plus-btn" onClick={(e) => handleFloorClick(e)}>
                {isFloorAddressVisible ? "-" : "+"}
              </button>
              <span>Apt,suite,floor,etc.(optional)</span>
            </div>
            {isFloorAddressVisible ? (
              <div className="floor-address__input input-wrapper">
                <input
                  type="text"
                  name="floorAddress"
                  value={inputValues.floorAddress}
                  onChange={handleInputChange}
                />
                <label
                  className={`${inputValues.floorAddress ? "has-value" : ""}`}
                >
                  Apt,suite,floor,etc
                </label>
              </div>
            ) : null}
          </div>
          <div className="billing__zip input-wrapper">
            <input
              type="text"
              name="zip"
              value={inputValues.zip}
              onChange={handleInputChange}
            />
            <label className={`${inputValues.zip ? "has-value" : ""}`}>
              Zip/Postal Code
            </label>
            <span>Note: We do not ship to Canada</span>
          </div>
          <div className="billing__phone input-wrapper">
            <input
              type="text"
              name="phone"
              value={inputValues.phone}
              onChange={handleInputChange}
            />
            <label className={`${inputValues.phone ? "has-value" : ""}`}>
              Phone (optional)
            </label>
          </div>
        </div>
        <div className="terms-of-use">
          <div className="checkbox-wrapper">
            <input type="checkbox" />
            <label>Billing and Shipping Addresses are the same.</label>
          </div>
          <div className="terms-of-use__main">
            <span>
              By proceeding, you agree to{" "}
              <Link href="#">QVC's General Terms of Use</Link> and acknowledge
              that we use personal information as outlined in our{" "}
              <Link href="#">Privacy Statement.</Link>
            </span>
          </div>
        </div>
        <button className="submit-button">Continue</button>
      </form>
    </div>
  );
}
