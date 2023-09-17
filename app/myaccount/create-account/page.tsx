"use client";

import "./page.scss";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

export default function CreateAccount() {
  const { push } = useRouter();

  const [isFloorAddressVisible, setIsFloorAddressVisible] = useState(false);
  const [isError, setError] = useState(false);
  const [isPasswordVisible, setPasswordVissible] = useState({
    password: false,
    repassword: false,
  });

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
  const [inputErrors, setInputErrors] = useState({
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
  const handleInputBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d).{8,24}$/;

    switch (name) {
      case "email":
        if (value.length >= 1) {
          if (!emailRegex.test(value)) {
            setInputErrors({ ...inputErrors, email: "Invalid email address" });
          } else {
            setInputErrors({ ...inputErrors, email: "" });
          }
        }
        break;
      case "password":
        if (!passwordRegex.test(value)) {
          setInputErrors({ ...inputErrors, password: "Invalid password" });
        } else {
          setInputErrors({ ...inputErrors, password: "" });
        }
        break;
      case "repassword":
        if (inputValues.repassword != inputValues.password) {
          setInputErrors({
            ...inputErrors,
            repassword: "Passwords do not match",
          });
        } else {
          setInputErrors({ ...inputErrors, repassword: "" });
        }
        break;
      default:
        break;
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };

  const singUp = (e: any) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d).{8,24}$/;

    if (
      emailRegex.test(inputValues.email) &&
      passwordRegex.test(inputValues.password) &&
      inputValues.password === inputValues.repassword &&
      inputValues.firstName
    ) {
      createUserWithEmailAndPassword(
        auth,
        inputValues.email,
        inputValues.password
      )
        .then((userCredentials) => {
          const user = userCredentials.user;
          const displayName = inputValues.firstName;
          return updateProfile(user, { displayName }).then(() => push("/"));
        })
        .catch((error) => {
          setError(true);
        });
    }
  };
  return (
    <div className="create-account-wrapper container">
      <form onSubmit={singUp}>
        <div
          className="create-account-error-container"
          style={{ height: `${isError ? "5.2rem" : "0rem"}` }}
        >
          Please review the error(s) below.
        </div>
        <div className="email-input-wrapper input-wrapper">
          <div>
            <input
              type="email"
              className={`email__input ${inputErrors.email ? "is-error" : ""}`}
              name="email"
              value={inputValues.email}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
            />
            <label
              className={`email__label ${inputValues.email ? "has-value" : ""}`}
            >
              Email Address
            </label>
          </div>
          <p>{inputErrors.email}</p>
        </div>
        <div className="password-input-wrapper input-wrapper">
          <div>
            <input
              type={isPasswordVisible.password ? "text" : "password"}
              className={`password__input ${
                inputErrors.password ? "is-error" : ""
              }`}
              name="password"
              value={inputValues.password}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
            />
            <label className={`${inputValues.password ? "has-value" : ""}`}>
              Create Password
            </label>
            <button
              onClick={(e) => {
                e.preventDefault();
                setPasswordVissible((prevState) => ({
                  ...prevState,
                  password: !isPasswordVisible.password,
                }));
              }}
            >
              Show
            </button>
          </div>
          <div className="password__validation">
            <div>
              <div className="password__dot"></div>
              <span>One letter</span>
            </div>
            <div>
              <div className="password__dot"></div>
              <span>One number</span>
            </div>
            <div>
              <div className="password__dot"></div>
              <span>8 to 24 characters</span>
            </div>
          </div>
        </div>
        <div className="repassword-input-wrapper input-wrapper">
          <input
            type={isPasswordVisible.repassword ? "text" : "password"}
            className={`repassword__input ${
              inputErrors.password ? "is-error" : ""
            }`}
            name="repassword"
            value={inputValues.repassword}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
          />
          <label className={`${inputValues.repassword ? "has-value" : ""}`}>
            Confirm Password
          </label>
          <button
            onClick={(e) => {
              e.preventDefault();
              setPasswordVissible((prevState) => ({
                ...prevState,
                repassword: !isPasswordVisible.repassword,
              }));
            }}
          >
            Show
          </button>
          <p>{inputErrors.repassword}</p>
        </div>
        <div className="billing-address-wrapper">
          <div className="user-information">
            <div className="user__title input-wrapper">
              <input
                type="text"
                name="title"
                value={inputValues.title}
                onChange={handleInputChange}
                onBlur={handleInputBlur}
                className={`title__input ${
                  inputErrors.title ? "is-error" : ""
                }`}
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
                onBlur={handleInputBlur}
                className={`first-name__input ${
                  inputErrors.firstName ? "is-error" : ""
                }`}
              />
              <label className={`${inputValues.firstName ? "has-value" : ""}`}>
                First Name
              </label>
              <p>{inputErrors.firstName}</p>
            </div>
            <div className="user__last-name input-wrapper">
              <input
                type="text"
                name="lastName"
                value={inputValues.lastName}
                onChange={handleInputChange}
                onBlur={handleInputBlur}
                className={`last-name__input ${
                  inputErrors.lastName ? "is-error" : ""
                }`}
              />
              <label className={`${inputValues.lastName ? "has-value" : ""}`}>
                Last Name
              </label>
              <p>{inputErrors.lastName}</p>
            </div>
          </div>
          <div className="billing__street-address input-wrapper">
            <input
              type="text"
              name="address"
              value={inputValues.address}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
              className={`billing__input ${
                inputErrors.lastName ? "is-error" : ""
              }`}
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
                  onBlur={handleInputBlur}
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
              onBlur={handleInputBlur}
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
              onBlur={handleInputBlur}
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
        <button type="submit" className="submit-button">
          Continue
        </button>
      </form>
    </div>
  );
}
