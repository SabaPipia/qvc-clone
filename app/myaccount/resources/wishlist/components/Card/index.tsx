import "./style.scss";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { WishListCard } from "@/types";
import RatingStar from "@/public/assets/rating-star.png";
import { Price } from "@/components";

export default function WishListCard({ item, renderPattern }: WishListCard) {
  return (
    <div>
      <Link
        href={`/${item.category}/${item.id}`}
        className={`wishlist-${renderPattern}-page-card wishlist-card-wrapper`}
      >
        <div className="wishlist-page-card__image">
          <Image
            src={item.thumbnail.toString()}
            width={1000}
            height={1000}
            alt={item.title}
            priority
          />
        </div>
        <div className="wishlist-page-card__item-info">
          <div className="item-info__item-name">
            <span>
              {item.title}, {item.brand}
            </span>
            {renderPattern === "grid" ? null : <p>{item.description}</p>}
          </div>
          <div className="wishlist-page-card__item-price-wrapper">
            <div>
              <Price discount={item.discountPercentage} price={item.price} />
            </div>
            <div className="price-wrapper__product-rating">
              <Image src={RatingStar} width={24} alt="star" />
              <span>{item.rating}</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
