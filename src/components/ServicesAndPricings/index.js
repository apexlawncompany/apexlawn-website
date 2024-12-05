"use client";
import { useEffect, useRef } from "react";
import Contact from "../Contact";
import styles from "./servicesHeader.module.css";
import localFont from "next/font/local";

const AmaticSC = localFont({
  src: "../../../app/fonts/AmaticSC.woff",
  variable: "--font-amatics-sc",
  weight: "900",
});

function ServicesOptions({ options }) {
  const navbarRef = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      if (navbarRef.current) {
        navbarRef.current.style.backgroundColor =
          window.scrollY > 70 ? "transparent" : "black";
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  return (
      <div ref={navbarRef} className={styles["options-navbar"]}>
        <div className={`${styles.options} ${AmaticSC.className}`}>
          {options.map((option, index) => (
            <button
              key={index}
              className={styles.optionButton}
              onClick={() =>
                document.getElementById(option.path)?.scrollIntoView({ behavior: "smooth" })
              }
            >
              {option.text}
            </button>
          ))}
        </div>
      </div>
  );
}

export default ServicesOptions;
