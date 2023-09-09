"use client";

import { DataContext } from "@/app/provider";
import DummyImage from "@/public/assets/card-dummyimg.jpg";
import "./style.scss";

import searchIcon from "@/public/assets/icons8-search-24.png";
import deleteIcon from "@/public/assets/icons8-x-50.png";

import Image from "next/image";

import React, { useContext, useState } from "react";
import { ProductItem } from "@/types";

function CustomInput() {
  const { searchItems, searchedData } = useContext(DataContext);
  const [searchVisible, isSearchVisible] = useState(false);
  const handleSearchInput = (e: any) => {
    if (e.target.value.length >= 1) {
      searchItems(e.target.value);
      isSearchVisible(searchedData ? true : false);
    } else {
      isSearchVisible(false);
    }
  };
  return (
    <div className="input-wrapper">
      <input
        type="text"
        className="input"
        placeholder="What can we help you discover?"
        onChange={(e) => handleSearchInput(e)}
      />
      <div className="clear-wrapper">
        <Image
          src={deleteIcon}
          width={30}
          alt="delete icon"
          className="clear-icon"
        />
      </div>
      <div className="search-wrapper">
        <Image src={searchIcon} alt="search icon" className="search-logo" />
      </div>
      {searchVisible ? (
        <div className="search-drop-down">
          <div className="search-drop-down__heading">
            <span>Found {searchedData.length} Results for '...'</span>
          </div>
          {searchedData.map((item: ProductItem) => {
            return (
              <div className="searched-item-card" key={item.id}>
                <div className="serached-item__image-wrapper">
                  <Image
                    src={item.thumbnail}
                    width={60}
                    height={60}
                    alt="{data.thumbnail}"
                  />
                </div>
                <div className="searched-item__info">
                  <div className="searched-item__main-info">
                    <span className="searched-item-info__title">
                      {item.title}, {item.brand}|{" "}
                      {item.description.split(" ").slice(0, 7).join(" ")} ...
                    </span>
                  </div>
                  <div className="searched-item__main-price">
                    {item.discountPercentage > 13 ? (
                      <>
                        <span className="searched-item-info__sale-price">
                          $
                          {(
                            item.price -
                            item.price * (item.discountPercentage / 100)
                          ).toFixed(0)}
                        </span>
                        <span className="searched-item-info__price item-sale">
                          ${item.price}
                        </span>
                      </>
                    ) : (
                      <span className="searched-item-info__price">
                        ${item.price}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}

export default CustomInput;
