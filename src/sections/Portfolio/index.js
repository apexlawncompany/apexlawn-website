"use client";
import TransparentBtn from "@/src/components/TransparentBtn";
import styles from "./portfolio.module.css";
import Carousel from "@/src/components/Carousel";
import Link from "next/link";

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
  );
}

export default Portfolio;
