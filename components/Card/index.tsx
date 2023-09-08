import "./style.scss";

import { CardProps } from "@/types";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

function Card({ data }: CardProps) {
  const lastImageSrc = data.images[data.images.length - 1].toString();

  const SaveItemToLocalStorage = (title: string, id: string) => {
    localStorage.setItem(`history ${id}`, title);
  };

  return (
    <div className="card">
      <div className="card-image">
        <Image src={lastImageSrc} width={1000} height={1000} alt="item image" />
      </div>
      <div className="card__item-info">
        <Link
          href={`/${data.category}/${data.id}`}
          className="card__item-title"
          onClick={() => SaveItemToLocalStorage(data.title, data.id.toString())}
        >
          {data.title},{data.brand}
        </Link>
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
