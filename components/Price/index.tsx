import { PriceInterface } from "@/types";
import React from "react";

export default function Price({ discount, price }: PriceInterface) {
  return (
    <>
      {discount > 13 ? (
        <>
          <span className="sale-price">
            ${(price - price * (discount / 100)).toFixed(0)}
          </span>
          <span className="item-sale">${price}</span>
        </>
      ) : (
        <span className="real-price">${price}</span>
      )}
    </>
  );
}
