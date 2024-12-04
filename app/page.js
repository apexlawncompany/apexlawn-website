import Reviews from "@/src/sections/Reviews";
import styles from "./page.module.css";
import Details from "@/src/sections/Details";
import TransparentBtn from "@/src/components/TransparentBtn";
import Contact from "@/src/components/Contact";
import Portfolio from "@/src/sections/Portfolio";

export default function Home() {
  return (
    <div className={`page-content ${styles.homepage}`}>
      <div className={styles.greenbar}></div>
      <div className="page-section">
        <div className="center-aligned">
          {/* <div className={styles.carouselSection}>Carouse section</div> */}
          <Portfolio />
          <Reviews />
          <Details />
          <TransparentBtn>Setup an Appointment</TransparentBtn>
          <div style={{ height: 12 }}></div>
        </div>
      </div>
    </div>
  );
}
