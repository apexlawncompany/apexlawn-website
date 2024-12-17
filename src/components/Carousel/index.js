import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, EffectCreative } from "swiper/modules";
import CAROUSEL_DATA from "@/src/data/carousel";
import Image from "next/image";
import styles from "./carousel.module.css";
import { basePath } from "@/next.config";

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
          <div style={{ width: "100%", height: "100%", position: "relative" }}>
            <Image
              alt="apex lawn"
              className={styles.carouselImage}
              src={`${basePath}${item.image}`}
              fill
              style={{
                objectFit: "cover",
              }}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Carousel;
