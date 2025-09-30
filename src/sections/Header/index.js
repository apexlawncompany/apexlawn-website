"use client";

import { usePathname } from "next/navigation";
import HEADER_DATA from "@/src/data/header";
import styles from "./header.module.css";
import HeaderCard from "@/src/components/HeaderCard";
import localFont from "next/font/local";
import Contact from "@/src/components/Contact";
import FactBlurb from "@/src/components/factBlurb";
import { factBlurbs } from "@/src/data/factBlurbs";

const AmaticSC = localFont({
  src: "../../../app/fonts/AmaticSC.woff",
  variable: "--font-amatics-sc",
  weight: "900",
});

function Header() {
  const pathname = usePathname();

  // Match /[city]
  const match = pathname.match(/^\/lawncare\/([^/]+)$/);
  const city = match ? match[1] : null;

  // Pick a random blurb for this city
  let randomBlurb = null;
  if (city && factBlurbs[city]) {
    const blurbs = factBlurbs[city];
    randomBlurb = blurbs[Math.floor(Math.random() * blurbs.length)];
  }

  return (
    <div className={`page-section ${AmaticSC.className}`}>
      {/* Only mount FactBlurb when a city page */}
      {city && randomBlurb && <FactBlurb blurb={randomBlurb} />}

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
