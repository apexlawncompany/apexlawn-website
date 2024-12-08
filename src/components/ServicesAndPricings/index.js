"use client";
import { useEffect, useRef } from "react";
import Contact from "../Contact";
import styles from "./servicesHeader.module.css";
import localFont from "next/font/local";
import { useState } from "react";

const AmaticSC = localFont({
  src: "../../../app/fonts/AmaticSC.woff",
  variable: "--font-amatics-sc",
  weight: "900",
});

function ServicesOptions({ options }) {
  const [showDetails, setShowDetails] = useState(false);
  const navbarRef = useRef(null);
  const navigateToDiv = (path) => {
    const element = document.getElementById(path);
    if (element) {
      const scrollHeight =element.getBoundingClientRect().top + window.scrollY;
      console.log("Divya",scrollHeight)
      const scrollTo = scrollHeight - 208;
      window.scrollTo({
        top: scrollTo,
        behavior: "smooth",
      });
    }
  };

  return (
    <div ref={navbarRef} className={styles["options-navbar"]}>
      <div className={styles.servicesHeader}>
        <div className={`${styles.options} ${AmaticSC.className}`}>
          {options.map((option, index) => (
            <button
              key={index}
              className={styles.optionButton}
              onClick={() => navigateToDiv(option.path)}>
              {option.text}
            </button>
          ))}
        </div>
        <div className={`${styles.contact} ${showDetails ? styles.fullDetails : ""} `}>
          {showDetails ? (
            <p onClick={() => setShowDetails(false)}>
              Call or Text: <a href="tel:9046792513">9</a>
              <a href="tel:9199394665">199394665</a> Email:{" "}
              <a href="mailto:client@apexlawncompany.com">
                client@apexlawncompany.com
              </a>
            </p>
          ) : (
            <button onClick={() => setShowDetails(true)}>Contact</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ServicesOptions;
