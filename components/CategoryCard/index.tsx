import "./style.scss";

import categoryImage from "@/public/assets/categoryImgDummy.jpg";
import Image from "next/image";
import Link from "next/link";

import React from "react";

function CategoryCard() {
  return (
    <div className="category-card">
      <div className="category-image">
        <Image src={categoryImage} alt="category dummy image" />
      </div>
      <div className="category-title__wrapper">
        <Link href="#" className="category-title">
          Category title
        </Link>
      </div>
    </div>
  );
}

export default CategoryCard;
