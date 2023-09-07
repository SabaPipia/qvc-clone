import { CategoryCardProps } from "@/types";
import "./style.scss";

import categoryImage from "@/public/assets/categoryImgDummy.jpg";
import Image from "next/image";
import Link from "next/link";

import React from "react";

function CategoryCard({ item }: CategoryCardProps) {
  return (
    <div className="category-card">
      <div className="category-image">
        <Image
          width={100}
          height={100}
          src={item && item.thumbnail.toString()}
          alt="category dummy image"
        />
      </div>
      <div className="category-title__wrapper">
        <Link href={item.category} className="category-title">
          {item.category}
        </Link>
      </div>
    </div>
  );
}

export default CategoryCard;
