import "./style.scss";

import { CardProps } from "@/types";

import Image from "next/image";
import Link from "next/link";
import React from "react";

function Card({ data }: CardProps) {
  const SaveItemToLocalStorage = (title: string, id: string) => {
    localStorage.setItem(`history ${id}`, title);
  };
  console.log(data);
  return (
    <>
      {data ? (
        <div className="main-card">
          <Link
            href={`/${data.category}/${data.id}`}
            className="main-card__item-link"
            onClick={() =>
              SaveItemToLocalStorage(data.title, data.id.toString())
            }
          >
            <div className="main-card-image">
              <Image
                src={
                  data.thumbnail.toString() ||
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
              <div className="card__item-price-wrapper">
                {data.discountPercentage > 13 ? (
                  <>
                    <span className="main-card__item-sale-price">
                      $
                      {(
                        data.price -
                        data.price * (data.discountPercentage / 100)
                      ).toFixed(0)}
                    </span>
                    <span className="main-card__item-price item-sale">
                      ${data.price}
                    </span>
                  </>
                ) : (
                  <span className="main-card__item-real-price">
                    ${data.price}
                  </span>
                )}
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
