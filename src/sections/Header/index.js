import HEADER_DATA from "@/src/data/header";
import { BLURBS_DATA } from "@/src/data/blurbData";
import HeaderCard from "@/src/components/HeaderCard";
import Contact from "@/src/components/Contact";
import CityBlurb from "@/src/components/Blurb";
import localFont from "next/font/local";
import styles from "./header.module.css";
import { useMemo } from "react";

const AmaticSC = localFont({
  src: "../../../app/fonts/AmaticSC.woff",
  variable: "--font-amatics-sc",
  weight: "900",
});

function Header() {
  const randomCity = useMemo(() => {
    const cities = Object.keys(BLURBS_DATA);
    return cities[Math.floor(Math.random() * cities.length)];
  }, []);
  return (
    <div
      className={`page-section ${AmaticSC.className}`}
      style={{ background: "black" }}
    >
      {/* Blurb on top */}
      <CityBlurb city={randomCity} />

      <nav
        className={styles["header-navbar"]}
        style={{
          backgroundImage: `url(/header-background.jpg)`,
        }}
        id="navbar"
      >
        <div className={`center-aligned ${styles["cards-wrap"]}`}>
          {HEADER_DATA.map((item, index) => (
            <HeaderCard key={"item-" + index} item={item} />
          ))}
        </div>
        <Contact />
      </nav>
    </div>
  );
}

export default Header;
