"use client";

import "./style.scss";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import carouselImg1 from "@/public/assets/hero-1.jpg";
import carouselImg2 from "@/public/assets/hero-2.jpg";
import carouselImg3 from "@/public/assets/hero-3.jpg";
import carouselImg4 from "@/public/assets/hero-4.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import React from "react";
import Image from "next/image";

function Hero() {
  return (
    <div className="container">
      <div className="hero">
        <div className="hero__carousel">
          <div className="swiper-wrapper">
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
              className="mySwiper"
            >
              <SwiperSlide>
                <Image src={carouselImg1} alt="carousel first image" priority />
              </SwiperSlide>
              <SwiperSlide>
                <Image src={carouselImg2} alt="carousel second image" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src={carouselImg3} alt="carousel thrid image" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src={carouselImg4} alt="carousel fourth image" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div className="hero__content">
          <h3>Lorem ipsum dolor</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            libero repellat voluptatibus ullam magni quisquam quis quasi
            dignissimos, soluta odio, ad non, veritatis distinctio impedit fuga
            perspiciatis saepe neque molestias.
          </p>
          <div className="content__button">
            <button>Shop now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
