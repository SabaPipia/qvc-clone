import "./style.scss";

import Image from "next/image";
import React from "react";
import Link from "next/link";
import { YouMayLikeInterface } from "@/types";
import { Price } from "@/components";

function YouMayLike({ data }: YouMayLikeInterface) {
  return (
    <div className="main-may-like-card">
      <Link
        href={`/${data.category}/${data.id}`}
        className="main-may-like-card__item-link"
      >
        <div className="main-may-like-card__image">
          <Image
            src={data.images[(data.images.length - 1) | 0].toString()}
            width={1000}
            height={1000}
            alt="item image"
          />
        </div>
        <div className="main-may-like-card__item-info">
          <span className="main-may-like-card__title">
            {data.title},{data.brand}
          </span>
          <div className="main-may-like-card__title__item-price-wrapper">
            <Price discount={data.discountPercentage} price={data.price} />
          </div>
        </div>
      </Link>
    </div>
  );
}

export default YouMayLike;
