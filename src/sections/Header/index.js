import HEADER_DATA from "@/src/data/header";
import styles from "./header.module.css";
import HeaderCard from "@/src/components/HeaderCard";
import localFont from "next/font/local";
import Contact from "@/src/components/Contact";

const AmaticSC = localFont({
  src: "../../../app/fonts/AmaticSC.woff",
  variable: "--font-amatics-sc",
  weight: "900",
});

function Header() {
  return (
    <div className={`page-section ${AmaticSC.className}`}>
      <nav className={styles["header-navbar"]}>
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
