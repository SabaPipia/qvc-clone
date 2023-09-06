import "./style.scss";

import DummyImage from "@/public/assets/card-dummyimg.jpg";
import { CardProps } from "@/types";

import Image from "next/image";
import React from "react";

function Card({ isSale }: CardProps) {
  return (
    <div className="card">
      <div className="card-image">
        <Image src={DummyImage} alt="dummy image" />
      </div>
      <div className="card__item-info">
        <h3 className="card__item-title">
          Lorem ipsum dolor sit amet consectetur adipisicing.
        </h3>
        <div className="card__item-price-wrapper">
          {isSale ? (
            <>
              <span className="item-sale-price">$22.83</span>
              <span className="item-price item-sale">$232.83</span>
            </>
          ) : (
            <span className="item-price">$232.83</span>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
