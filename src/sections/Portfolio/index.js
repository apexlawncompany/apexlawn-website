"use client";
import { useRef, useState } from "react";
import TransparentBtn from "@/src/components/TransparentBtn";
import styles from "./portfolio.module.css";
import Carousel from "@/src/components/Carousel";
import Link from "next/link";
import Image from "next/image";
import CAROUSEL_DATA from "@/src/data/carousel";

function Portfolio() {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);
  const activeSlide = CAROUSEL_DATA[activeIndex];

  const handlePrev = () => {
    swiperRef.current?.slidePrev();
  };

  const handleNext = () => {
    swiperRef.current?.slideNext();
  };

  return (
    <div className={styles.portfolio}>
      <div className={styles.carousel}>
        {/* Navigation + Tab Button */}
        <div className={styles.carouselBtnWrp}>
          <TransparentBtn className={styles.carouselServicesBtn}>
            <Image
              src="/carousel/back-arrow.png"
              alt="Previous"
              width={30}
              height={30}
              className={styles.chevronIcon}
              onClick={handlePrev}
            />
            <Link href={activeSlide.link} style={{ width: "100%", textAlign: "center" }}>
              {activeSlide.label}
            </Link>
            <Image
              src="/carousel/right-chevron.png"
              alt="Next"
              width={30}
              height={30}
              className={styles.chevronIcon}
              onClick={handleNext}
            />
          </TransparentBtn>
        </div>
        <Carousel onSlideChange={setActiveIndex} swiperRef={swiperRef} />
      </div>
      <div className={styles.appointments}>
        {/* Icons Row Container */}
        <div className={styles.roundIconsContainer}>
          <Link
            href="https://www.icloud.com/sharedalbum/#B2SGY8gBYJRLl6B"
            target="_blank"
            title="View Project Portfolio"
          >
            <div className={styles.portfolioCombo}>
              <Image
                src="/gallery.png"
                alt="Portfolio"
                width={70}
                height={65}
                className={styles.portfolioIcon}
              />
              <span className={styles.portfolioText}>View Portfolio</span>
            </div>
          </Link>

          <Link
            href="https://www.instagram.com/apexlawncompany?igsh=MXAwYnhiaDI2aWVjaQ=="
            target="_blank"
            // rel="noopener noreferrer"
            title="Visit Instagram"
          >
            <Image
              src="/instagram_icon.png"
              alt="Instagram"
              width={150}
              height={150}
              className={styles.instaIcon}
            />
          </Link>
        </div>

        {/* Buttons Container */}
        <div className={styles.buttonsContainer}>
          <TransparentBtn className={styles.appointmentBtn}>
            Setup an Appointment
          </TransparentBtn>
          <Link href="/drone" style={{ width: "100%" }}>
            <TransparentBtn className={styles.appointmentBtn}>
              Schedule a Drone Fly-by
            </TransparentBtn>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
