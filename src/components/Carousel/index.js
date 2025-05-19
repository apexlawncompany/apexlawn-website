"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCreative } from "swiper/modules";
import "swiper/css";
import Image from "next/image";
import CAROUSEL_DATA from "@/src/data/carousel";
import styles from "./carousel.module.css";

function Carousel({ onSlideChange, swiperRef }) {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      speed={500}
      effect={"creative"}
      onSlideChange={(swiper) => onSlideChange(swiper.realIndex)}
      onSwiper={(swiper) => (swiperRef.current = swiper)}
      creativeEffect={{
        prev: {
          shadow: true,
          translate: ["-20%", 0, -400],
        },
        next: {
          translate: ["100%", 0, 0],
        },
      }}
      modules={[Autoplay, EffectCreative]}
      className={styles.carouselSwiper}
    >
      {CAROUSEL_DATA.map((item, index) => (
        <SwiperSlide key={`carousel-${index}`}>
          <div style={{ width: "100%", height: "100%", position: "relative" }}>
            <Image
              alt={item.label}
              className={styles.carouselImage}
              src={item.image}
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Carousel;
