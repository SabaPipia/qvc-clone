import "./style.scss";

import RatingStar from "@/public/assets/rating-star.png";

import { ProductItem, BrowsingPageCard } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";

function CategoryPageCard({ renderPattern }: BrowsingPageCard) {
  return (
    <div
      className={`category-${renderPattern}-wrapper-list category-page-main-wrapper`}
    >
      {/* {topSellingItems &&
        topSellingItems.map((item: ProductItem, index: number) => {
          return (
            <div
              className={`category-page-${renderPattern}-card category-page-card`}
              key={item.id}
            >
              <Link
                href={`/${item.category}/${item.id}`}
                className="category-page-card__item-link"
              >
                <div className="category-page-card__image">
                  <Image
                    src={item.thumbnail.toString()}
                    width={1000}
                    height={1000}
                    alt={item.title}
                    priority
                  />
                </div>
                <div className="category-page-card__item-info">
                  <div className="item-info__item-name">
                    <span>
                      {item.title},{item.brand}
                    </span>
                    {renderPattern === "list" ? (
                      <div className="list-description">{item.description}</div>
                    ) : null}
                  </div>
                  <div className="category-page-card__item-price-wrapper">
                    <div>
                      {item.discountPercentage > 13 ? (
                        <>
                          <span className="category-page-item__sale-price">
                            $
                            {(
                              item.price -
                              item.price * (item.discountPercentage / 100)
                            ).toFixed(0)}
                          </span>
                          <span className="category-page-item__price item-sale">
                            ${item.price}
                          </span>
                        </>
                      ) : (
                        <span className="category-page-item__real-price">
                          ${item.price}
                        </span>
                      )}
                    </div>
                    <div className="price-wrapper__product-rating">
                      <Image src={RatingStar} width={15} alt="rating star" />
                      <span>{item.rating}</span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          );
        })} */}
    </div>
  );
}

export default CategoryPageCard;
