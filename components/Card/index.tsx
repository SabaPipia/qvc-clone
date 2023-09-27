import "./style.scss";

import { CardProps } from "@/types";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Price } from "..";

function Card({ data, lowStock }: CardProps) {
  return (
    <>
      {data ? (
        <div className="main-card">
          <Link
            href={`/${data.category}/${data.id}`}
            className="main-card__item-link"
          >
            <div className="main-card-image">
              <Image
                src={
                  data.thumbnail.toString() ??
                  data.images[data.images.length - 1].toString()
                }
                width={1000}
                height={1000}
                alt="item image"
              />
            </div>
            <div className="main-card__item-info">
              <span className="main-card__title">
                {data.title},{data.brand}
              </span>
              {lowStock ? (
                <div className="item__quantity">
                  <span>left: {data.stock}</span>
                </div>
              ) : null}
              <div className="card__item-price-wrapper">
                <Price discount={data.discountPercentage} price={data.price} />
              </div>
            </div>
          </Link>
        </div>
      ) : (
        "loading"
      )}
    </>
  );
}

export default Card;
