import "./style.scss";

import { CardProps } from "@/types";

import Image from "next/image";
import Link from "next/link";
import React from "react";

function LowInStockCard({ data }: CardProps) {
  const lastImageSrc = data.images[data.images.length - 1].toString();
  const SaveItemToLocalStorage = (title: string, id: string) => {
    localStorage.setItem(`history ${id}`, title);
  };
  return (
    <div className="card-lowStock">
      <Link
        href={`/${data.category}/${data.id}`}
        className="card-lowStock__item-link"
        onClick={() => SaveItemToLocalStorage(data.title, data.id.toString())}
      >
        <div className="card-image">
          <Image
            src={lastImageSrc}
            width={1000}
            height={1000}
            alt="dummy image"
          />
        </div>
        <div className="card__item-info">
          <span className="item-title">
            {data.title},{data.brand}
          </span>
          <div className="item__quantity">
            <span>left: {data.stock}</span>
          </div>
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
      </Link>
    </div>
  );
}

export default LowInStockCard;
