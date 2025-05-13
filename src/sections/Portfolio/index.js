"use client";
import TransparentBtn from "@/src/components/TransparentBtn";
import styles from "./portfolio.module.css";
import Carousel from "@/src/components/Carousel";
import Link from "next/link";
import Image from "next/image";

function Portfolio() {
  return (
    <div className={styles.portfolio}>
      <div className={styles.carousel}>
        <div className={styles.portfolioBtnWrp}>
          <a
            href="https://www.icloud.com/sharedalbum/#B2SGY8gBYJRLl6B"
            target="_blank"
            rel="noopener noreferrer"
            style={{ width: "100%" }}
          >
            <TransparentBtn className={styles.portfolioBtn}>
              View Project Portfolio
            </TransparentBtn>
          </a>
        </div>
        <Carousel />
      </div>
      <div className={styles.appointments}>
        {/* Icons Row Container */}
        <div className={styles.iconRowContainer}>
          <Link
            href="https://www.icloud.com/sharedalbum/#B2SGY8gBYJRLl6B"
            target="_blank"
            // rel="noopener noreferrer"
            title="View Project Portfolio"
          >
            <Image
              src="/portfolio.png"
              alt="Portfolio"
              width={150}
              height={150}
              className={styles.iconCircle}
            />
          </Link>
          <Link
            href="https://www.instagram.com/apexlawncompany?igsh=MXAwYnhiaDI2aWVjaQ=="
            target="_blank"
            // rel="noopener noreferrer"
            title="Visit Instagram"
          >
            <Image
              src="/instagram.png"
              alt="Instagram"
              width={150}
              height={150}
              className={styles.iconCircle}
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
