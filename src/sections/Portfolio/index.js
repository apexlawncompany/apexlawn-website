"use client";
import TransparentBtn from "@/src/components/TransparentBtn";
import styles from "./portfolio.module.css";
import Carousel from "@/src/components/Carousel";

function Portfolio() {
  return (
    <div className={styles.portfolio}>
      <div className={styles.carousel}>
        <div className={styles.portfolioBtnWrp}>
          <TransparentBtn className={styles.portfolioBtn}>
            View Project Portfolio
          </TransparentBtn>
        </div>
        <Carousel />
      </div>
      <div className={styles.appointments}>
        <TransparentBtn className={styles.appointmentBtn}>
          Setup an Appointment
        </TransparentBtn>
        <TransparentBtn className={styles.appointmentBtn}>
          Schedule a Drone Fly-by
        </TransparentBtn>
      </div>
    </div>
  );
}

export default Portfolio;
