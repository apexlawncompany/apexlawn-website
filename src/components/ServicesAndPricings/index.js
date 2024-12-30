"use client";
import { useEffect, useRef } from "react";
import ContactDetails from "../ContactDetails";
import styles from "./servicesHeader.module.css";
import localFont from "next/font/local";
import { useState } from "react";

const AmaticSC = localFont({
  src: "../../../app/fonts/AmaticSC.woff",
  variable: "--font-amatics-sc",
  weight: "900",
});

export const debounce = (func, delay) => {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), delay);
  };
};

function ServicesOptions({ options }) {
  const [showDetails, setShowDetails] = useState(false);
  const [activeSection, setActiveSection] = useState(0);
  const navbarRef = useRef(null);
  const navigateToDiv = (path, index) => {
    setActiveSection(index);
    const element = document.getElementById(path);
    if (element) {
      const scrollHeight = element.getBoundingClientRect().top + window.scrollY;
      const scrollTo = scrollHeight - 208;
      window.scrollTo({
        top: scrollTo,
        behavior: "smooth",
      });
    }
  };

  // Handling service options highlight on scroll/selection of each servie.
  useEffect(() => {
    const handleScroll = debounce(() => {
      const navbarHeight =
        (document.getElementById("navbar").offsetHeight || 109) - 5;
      const scrollTopArr = [];

      options.forEach((section) => {
        const sectionElement = document.getElementById(section?.path);
        const sectionTop = sectionElement?.getBoundingClientRect()?.top || 0;
        scrollTopArr.push(sectionTop - navbarHeight);
      });
      const index = scrollTopArr.findIndex((option) => option > -0);
      setActiveSection(index);
    }, 100);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div ref={navbarRef} className={styles["options-navbar"]}>
      <div className={styles.servicesHeader}>
        <div className={`${styles.options} ${AmaticSC.className}`}>
          {options.map((option, index) => (
            <button
              key={index}
              className={styles.optionButton}
              style={{
                background: activeSection === index ? "#474747" : "",
                color: activeSection === index ? "white" : "",
              }}
              onClick={() => navigateToDiv(option.path, index)}
            >
              {option.text}
            </button>
          ))}
        </div>
        <ContactDetails />
      </div>
    </div>
  );
}

export default ServicesOptions;
