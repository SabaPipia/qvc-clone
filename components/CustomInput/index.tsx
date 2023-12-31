"use client";

import "./style.scss";

import searchIcon from "@/public/assets/icons8-search-24.png";
import deleteIcon from "@/public/assets/icons8-x-50.png";

import Image from "next/image";

import React, { useEffect, useState } from "react";
import { ProductItem } from "@/types";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { getSearchedItem } from "@/store/actions";
import { Price } from "..";
import { usePathname } from "next/navigation";

function CustomInput() {
  const [searchVisible, setSearchVisible] = useState(false);
  const [isInputClear, setIsInputClear] = useState(true);
  const [searchValue, setSearchValue] = useState<string>("");

  const pathname = usePathname();

  const dispatch: (func: any) => void = useDispatch();
  const searchedData = useSelector((state: any) => state.data);
  const { searchedItem } = searchedData;

  const handleSearchInput = (value: string) => {
    value.length === 0 ? setIsInputClear(true) : setIsInputClear(false);
    if (value.length >= 3) {
      dispatch(getSearchedItem(value));
      setSearchVisible(searchedData ? true : false);
    } else {
      setSearchVisible(false);
    }
  };
  const handleClearClick = () => {
    setSearchValue("");
    setSearchVisible(false);
  };
  useEffect(() => {
    setSearchVisible(false);
  }, [pathname]);

  return (
    <div className="input-wrapper">
      <input
        value={searchValue}
        type="text"
        className="input"
        placeholder="What can we help you discover?"
        onChange={(e) => {
          handleSearchInput(e.target.value);
          setSearchValue(e.target.value);
        }}
        onFocus={(e) => {
          handleSearchInput(e.target.value);
          setSearchValue(e.target.value);
        }}
      />
      <div
        className={`clear-wrapper ${
          isInputClear ? "clear-wrapper-none" : null
        }`}
        onClick={handleClearClick}
      >
        <Image
          src={deleteIcon}
          width={30}
          alt="delete icon"
          className="clear-icon"
        />
      </div>
      <Link
        href={`/searchedProducts/${searchValue}`}
        className="search-wrapper"
      >
        <Image src={searchIcon} alt="search icon" className="search-logo" />
      </Link>
      {searchVisible ? (
        <div className="search-drop-down">
          <div className="search-drop-down__heading">
            <span>
              Found {searchedData.length} Results for '{searchValue}'
            </span>
          </div>
          {searchedItem.products != undefined
            ? searchedItem.products.map((item: ProductItem, index: number) => {
                if (index <= 2) {
                  return (
                    <div key={item.id}>
                      <Link
                        href={`/${item.category}/${item.id}`}
                        className="searched-item-card"
                        onClick={() => setSearchVisible(false)}
                      >
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
                              {item.description
                                .split(" ")
                                .slice(0, 7)
                                .join(" ")}{" "}
                              ...
                            </span>
                          </div>
                          <div className="searched-item__main-price">
                            <Price
                              discount={item.discountPercentage}
                              price={item.price}
                            />
                          </div>
                        </div>
                      </Link>
                      {index >= 2 ? (
                        <div className="show-all-result">
                          <Link href={`/searchedProducts/${searchValue}`}>
                            Show All Results
                          </Link>
                        </div>
                      ) : null}
                    </div>
                  );
                }
              })
            : null}
        </div>
      ) : null}
    </div>
  );
}

export default CustomInput;
