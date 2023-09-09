import { CategoryCardProps } from "@/types";
import "./style.scss";

import categoryImage from "@/public/assets/categoryImgDummy.jpg";
import Image from "next/image";
import Link from "next/link";

import React from "react";

function CategoryCard({ item }: CategoryCardProps) {
  return (
    <div className="category-card">
      <Link href={item.category} className="category-link">
        <div className="category-image">
          <Image
            width={1000}
            height={1000}
            src={item && item.thumbnail.toString()}
            alt="category dummy image"
          />
        </div>
        <div className="category-title__wrapper">{item.category}</div>
      </Link>
    </div>
  );
}

export default CategoryCard;
