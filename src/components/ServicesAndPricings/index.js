"use client";
import React, { useEffect, useRef } from "react";
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
  const [activeSection, setActiveSection] = useState(0);
  const [showShadow, setShowShadow] = useState(false);
  const optionsRef = useRef(null);
  const [expandedCategory, setExpandedCategory] = useState(new Set());
  const navbarRef = useRef(null);
  const navigateToDiv = (path, index, categoryIndex) => {
    setActiveSection(
      categoryIndex !== undefined ? `${index}-${categoryIndex}` : index
    );
    if (options[index]?.categories?.length && categoryIndex === undefined) {
      setExpandedCategory((prev) => {
        const newSet = new Set(prev);
        if (newSet.has(index)) {
          newSet.delete(index);
        } else {
          newSet.add(index);
        }
        return newSet;
      });
    } else {
      setExpandedCategory(new Set());
    }
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
    let timeoutId;
    const handleScroll = debounce(() => {
      const navbarHeight =
        (document.getElementById("navbar").offsetHeight || 109) - 5;
      const scrollTopArr = [];

      options.forEach((section, sectionIndex) => {
        const sectionElement = document.getElementById(section?.path);
        const sectionTop = sectionElement?.getBoundingClientRect()?.top || 0;
        // scrollTopArr.push(sectionTop - navbarHeight);
        if (sectionTop - navbarHeight > 0) {
          scrollTopArr.push(sectionIndex);
        }
        if (section?.categories?.length) {
          section.categories.forEach((category, categoryIndex) => {
            const categoryElement = document.getElementById(category?.path);
            const categoryTop =
              categoryElement?.getBoundingClientRect()?.top || 0;
            // scrollTopArr.push(categoryTop - navbarHeight);
            if (categoryTop - navbarHeight > 0) {
              scrollTopArr.push(`${sectionIndex}-${categoryIndex}`);
            }
          });
        }
      });
      // const index = scrollTopArr.findIndex((option) => option > -0);
      const latestIndex = scrollTopArr.length > 0 ? scrollTopArr[0] : 0;

      let index = latestIndex;

      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      if (typeof index === "string") {
        const sectionIndex = parseInt(latestIndex.split("-")[0]);
        const categoryIndex = parseInt(latestIndex.split("-")[1]);
        if (sectionIndex > -1 && !expandedCategory.has(sectionIndex)) {
          index = sectionIndex;
        }
        timeoutId = setTimeout(() => {
          setExpandedCategory((prev) => {
            const newSet = new Set(prev);

            if (!newSet.has(sectionIndex)) {
              newSet.add(sectionIndex);
              setActiveSection(`${sectionIndex}-${categoryIndex}`);
            }
            return newSet;
          });
        }, 2500);
      }
      setActiveSection(index);
    }, 100);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [expandedCategory]);

  useEffect(() => {
    function checkOverflow() {
      setTimeout(() => {
        const element = optionsRef.current;

        setShowShadow(
          element.scrollWidth > element.clientWidth ||
            element.scrollHeight > element.clientHeight
        );
      }, 1000);
    }
    const observer = new MutationObserver(checkOverflow);
    observer.observe(optionsRef.current, {
      childList: true,
      subtree: true,
    });
  }, []);
  
  return (
    <div ref={navbarRef} className={styles["options-navbar"]}>
      <div className={styles.servicesHeader}>
        {showShadow && <span className={styles.shadow}></span>}
        <div
          ref={optionsRef}
          className={`${styles.options} ${AmaticSC.className}`}
        >
          {options.map((option, index) => (
            <React.Fragment key={index}>
              <button
                key={index}
                className={`${styles.optionButton} ${styles.mainButton} ${
                  activeSection === index ? "selected" : ""
                }`}
                style={{
                  background: activeSection === index ? "#474747" : "",
                  color: activeSection === index ? "white" : "",
                }}
                onClick={() => navigateToDiv(option.path, index)}
              >
                {option.text}
              </button>
              {expandedCategory.has(index) &&
                option.categories?.map((category, categoryIndex) => (
                  <button
                    key={categoryIndex}
                    className={`${styles.optionButton} ${styles.categoryButton}`}
                    style={{
                      background:
                        activeSection === `${index}-${categoryIndex}`
                          ? "#474747"
                          : "",
                      color:
                        activeSection === `${index}-${categoryIndex}`
                          ? "white"
                          : "",
                    }}
                    onClick={() =>
                      navigateToDiv(category.path, index, categoryIndex)
                    }
                  >
                    {category.text}
                  </button>
                ))}
            </React.Fragment>
          ))}
        </div>
        <ContactDetails />
      </div>
    </div>
  );
}

export default ServicesOptions;
