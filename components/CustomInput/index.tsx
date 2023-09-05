import "./style.scss";

import searchIcon from "@/public/assets/icons8-search-24.png";
import deleteIcon from "@/public/assets/icons8-x-50.png";

import Image from "next/image";

import React from "react";

function CustomInput() {
  return (
    <div className="input-wrapper">
      <input
        type="text"
        className="input"
        placeholder="What can we help you discover?"
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
    </div>
  );
}

export default CustomInput;
