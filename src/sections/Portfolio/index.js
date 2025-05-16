"use client";
import { useState } from "react";
import TransparentBtn from "@/src/components/TransparentBtn";
import styles from "./portfolio.module.css";
import Carousel from "@/src/components/Carousel";
import Link from "next/link";
import Image from "next/image";
import CAROUSEL_DATA from "@/src/data/carousel";

function Portfolio() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSlide = CAROUSEL_DATA[activeIndex];

  return (
    <div className={styles.portfolio}>
      <div className={styles.carousel}>
        <div className={styles.carouselBtnWrp}>
          <Link href={activeSlide.link} style={{ width: "100%" }}>
            <TransparentBtn className={styles.carouselServicesBtn}>
              {activeSlide.label}
            </TransparentBtn>
          </Link>
        </div>
        <Carousel onSlideChange={setActiveIndex} />
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
