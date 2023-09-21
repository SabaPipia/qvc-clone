import "./page.scss";

import React from "react";

export default function WishList() {
  return (
    <div className="container">
      <div className="wishlist-page-wrapper component-wrapper">
        <div className="wishlist-page__heading">
          <h2>My Wish List</h2>
        </div>
        <div className="wishlist-page__products-wrapper">
          <h3 className="products__empty-heading">Your Wish List is Empty</h3>
          <span className="products__empty-span">
            Find what you love & add it here.
          </span>
        </div>
      </div>
    </div>
  );
}
