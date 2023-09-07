import "./style.scss";

import { CardProps } from "@/types";

import Image from "next/image";
import React from "react";

function Card({ data }: CardProps) {
  const lastImageSrc = data.images[data.images.length - 1].toString();
  return (
    <div className="card">
      <div className="card-image">
        <Image src={lastImageSrc} width={100} height={100} alt="dummy image" />
      </div>
      <div className="card__item-info">
        <h3 className="card__item-title">
          {data.title},{data.brand}
        </h3>
        <div className="card__item-price-wrapper">
          {data.discountPercentage > 13 ? (
            <>
              <span className="item-sale-price">
                $
                {(
                  data.price -
                  data.price * (data.discountPercentage / 100)
                ).toFixed(0)}
              </span>
              <span className="item-price item-sale">${data.price}</span>
            </>
          ) : (
            <span className="item-price">${data.price}</span>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
/*
 */
