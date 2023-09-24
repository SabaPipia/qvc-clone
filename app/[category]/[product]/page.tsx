"use client";

import "./page.scss";

import React, { useEffect } from "react";

import { usePathname } from "next/navigation";
import { ProductItem, appState } from "@/types";
import { Accordion, YouMayLike, SingleProduct } from "./components";
import { getItemByCategory, getSingleItem } from "@/store/actions";
import { useDispatch, useSelector } from "react-redux";
import ReactLoading from "react-loading";

function Product() {
  const pathname = usePathname();

  const pathnameSplit = pathname.split("/");
  const itemId = parseInt(pathnameSplit[pathnameSplit.length - 1]);

  const mayLikeItemsPathname = pathname;
  const mayLikeValidPathname = mayLikeItemsPathname.split("/")[1];

  // ================================================
  const dispatch: (func: any) => void = useDispatch();
  const DATA = useSelector((state: appState) => state.data);
  let { singleProduct, itemCategory, loading } = DATA;

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    dispatch(getSingleItem(itemId.toString()));
    dispatch(getItemByCategory(`/${mayLikeValidPathname}`));
  }, [dispatch]);

  singleProduct &&
    localStorage.setItem(`history ${itemId}`, singleProduct.title);

  return (
    <>
      {singleProduct && singleProduct.id != itemId ? (
        <div className="loading-wrapper">
          <ReactLoading
            type={"spokes"}
            color={"#64b0ef"}
            height={100}
            width={100}
          />
        </div>
      ) : (
        <div>
          {!(!loading ?? singleProduct ?? itemCategory) ? (
            <div className="loading-wrapper">
              <ReactLoading
                type={"spokes"}
                color={"#64b0ef"}
                height={100}
                width={100}
              />
            </div>
          ) : (
            <>
              <div className="container">
                {singleProduct && <SingleProduct item={singleProduct} />}
              </div>
              <div className="container">
                <div className="accordion-container">
                  <Accordion />
                </div>
              </div>
              <div className="may-like">
                <div className="may-like__heading">
                  <h3>You May Also Like</h3>
                </div>
                <div className="container">
                  <div className="you-may-like-wrapper">
                    {singleProduct &&
                      itemCategory &&
                      itemCategory.map((i: ProductItem) => {
                        if (
                          i.title.toLocaleLowerCase() !=
                          singleProduct.title?.toLocaleLowerCase()
                        ) {
                          return <YouMayLike data={i} key={i.id} />;
                        }
                      })}
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
}

export default Product;
