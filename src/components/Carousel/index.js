import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { Autoplay, EffectCreative } from "swiper/modules";
import CAROUSEL_DATA from "@/src/data/carousel";
import Image from "next/image";
import styles from "./carousel.module.css";

function Carousel() {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      speed={500}
      effect={"creative"}
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
      className="mySwiper"
    >
      {CAROUSEL_DATA.map((item, index) => (
        <SwiperSlide key={"carouse-" + index}>
          <Image
            alt="apex lawn"
            className={styles.carouselImage}
            src={item.image}
            width={449}
            height={429}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Carousel;
