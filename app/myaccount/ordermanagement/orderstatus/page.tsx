import React from "react";
import "./page.scss";

export default function OrderStatus() {
  return (
    <div>
      <div className="container">
        <div className="order-status-page-wrapper">
          <div className="order-status-page__heading">
            <h2>Order Status</h2>
          </div>
          <div className="order-status-page__empty-panel">
            <span>Sorry, we couldn't find any orders!</span>
          </div>
        </div>
      </div>
    </div>
  );
}
