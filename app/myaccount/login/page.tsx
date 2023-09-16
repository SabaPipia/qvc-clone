"use client";

import LockIcon from "@/public/assets/lock.png";

import React, { useState } from "react";
import "./page.scss";
import Image from "next/image";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/app/firebase";
import { useRouter } from "next/navigation";

export default function Login() {
  const { push } = useRouter();
  const [inputValues, setInputValues] = useState({
    email: "",
    password: "",
  });

  const [inputErrors, setInputErrors] = useState({
    email: "",
    password: "",
  });

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
  const signIn = (e: any) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, inputValues.email, inputValues.password)
      .then((userCredentials) => {
        if (userCredentials) {
          push("/");
        }
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="container">
      <div className="login-page-wrapper">
        <h3 className="login-page__heading">
          Whether you've shopped with us before or not, start by entering your
          email address:
        </h3>
        <div className="login-page__form">
          <form onSubmit={signIn}>
            <div className="login-page__email-wrapper login-input-wrapper">
              <input
                type="email"
                className={`login-email__input ${
                  inputErrors.email ? "error" : ""
                }`}
                name="email"
                onBlur={handleInputBlur}
                onChange={handleInputChange}
              />
              <label
                className={`login-email__label ${
                  inputValues.email ? "has-value" : ""
                }`}
              >
                Email Address
              </label>
            </div>
            <div className="password-input-wrapper">
              <h3 className="login-page__heading">
                Please enter your password.
              </h3>
              <div className="login-page__password-wrapper login-input-wrapper">
                <input
                  type="password"
                  className={`login-password__input ${
                    inputErrors.password ? "error" : ""
                  }`}
                  name="password"
                  onBlur={handleInputBlur}
                  onChange={handleInputChange}
                />
                <label
                  className={`login-password__label ${
                    inputValues.password ? "has-value" : ""
                  }`}
                >
                  QVC Password
                </label>
                <button>Show</button>
              </div>
            </div>
            <div className="password-reset-wrapper">
              <a href="#" className="reset-password">
                Reset or create Your Password
              </a>
            </div>
            <div className="login__button-wrapper">
              <button type="submit">Continue</button>
            </div>
          </form>
          <div className="new-to-qvc">
            New to QVC? <a href="#">Continue as a new customer</a>.
          </div>
          <div className="shop-confidence">
            <Image src={LockIcon} alt="lock-icon" />
            <span>
              <a href="#">Shop with confidence!</a> You can access your orders
              and edit your QCV customer information once you sing in.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
