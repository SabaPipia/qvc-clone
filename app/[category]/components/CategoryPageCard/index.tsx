import "./style.scss";

import { CardProps } from "@/types";

import Image from "next/image";
import Link from "next/link";
import React from "react";

function CategoryPCard({ data }: CardProps) {
  const lastImageSrc = data.images[data.images.length - 1].toString();
  return (
    <div className="category-page-card">
      <div className="category-page-card__image">
        <Image
          src={lastImageSrc}
          width={1000}
          height={1000}
          alt="dummy image"
        />
      </div>
      <div className="category-page-card__item-info">
        <Link
          href={`/${data.category}/${data.id}`}
          className="category-page-card__item-link"
        >
          {data.title},{data.brand}
        </Link>
        <div className="category-page-card__item-price-wrapper">
          {data.discountPercentage > 13 ? (
            <>
              <span className="category-page-item__sale-price">
                $
                {(
                  data.price -
                  data.price * (data.discountPercentage / 100)
                ).toFixed(0)}
              </span>
              <span className="category-page-item__price item-sale">
                ${data.price}
              </span>
            </>
          ) : (
            <span className="category-page-item__real-price">
              ${data.price}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default CategoryPCard;
