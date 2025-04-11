"use client";
import React, { useEffect, useRef, useState } from "react";
import ContactDetails from "../ContactDetails";
import styles from "./servicesHeader.module.css";
import localFont from "next/font/local";

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

function ServicesOptions({ options, isDarkMode }) {
  const [activeSection, setActiveSection] = useState(0);
  const [expandedCategory, setExpandedCategory] = useState(new Set());
  const [shadowColor, setShadowColor] = useState(
    isDarkMode ? "rgba(0, 0, 0, 0.7)" : ""
  );
  const [showShadow, setShowShadow] = useState(true);
  const optionsRef = useRef(null);
  const navbarRef = useRef(null);
  const buttonRefs = useRef({});
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

    // Scroll the page to the section
    const element = document.getElementById(path);
    if (element) {
      const navbarHeight =
        document.getElementById("navbar")?.offsetHeight || 100;
      const scrollHeight =
        element.getBoundingClientRect().top +
        window.scrollY -
        navbarHeight -
        80;
      window.scrollTo({
        top: scrollHeight,
        behavior: "smooth",
      });
    }

    // Auto-scroll inside optionsRef to make selected option visible
    setTimeout(() => {
      const selectedButton =
        buttonRefs.current[
          categoryIndex !== undefined ? `${index}-${categoryIndex}` : index
        ];
      if (selectedButton && optionsRef.current) {
        const container = optionsRef.current;
        const buttonLeft = selectedButton.offsetLeft;
        const buttonWidth = selectedButton.offsetWidth;
        const containerWidth = container.clientWidth;
        const scrollLeft = container.scrollLeft;

        // If button is outside visible area, scroll smoothly
        if (
          buttonLeft < scrollLeft ||
          buttonLeft + buttonWidth > scrollLeft + containerWidth
        ) {
          container.scrollTo({
            left: buttonLeft - containerWidth / 2 + buttonWidth / 2,
            behavior: "smooth",
          });
        }
      }
    }, 500); // Slight delay ensures page scroll takes priority
  };

  useEffect(() => {
    const updateShadowColor = () => {
      const scrollY = window.scrollY;
      // setShowShadow(scrollY > 0); // Keep shadow visible when scrolled

      if (isDarkMode) {
        setShadowColor("rgba(0, 0, 0, 0.7)"); // Always dark in dark mode
      } else {
        if (scrollY < 115) {
          setShadowColor("rgba(0, 0, 0, 0.7)"); // Black gradient at the top in light mode
        } else {
          setShadowColor("rgba(255, 255, 255, 0.7)"); // White gradient when scrolled in light mode
        }
      }
    };

    window.addEventListener("scroll", updateShadowColor);
    updateShadowColor();

    return () => window.removeEventListener("scroll", updateShadowColor);
  }, [isDarkMode]);

  // Handling service options highlight on scroll/selection of each servie.
  useEffect(() => {
    let timeoutId;

    const handleScroll = () => {
      if (timeoutId) clearTimeout(timeoutId);

      const navbarElement = document.getElementById("navbar");
      const navbarHeight = navbarElement ? navbarElement.offsetHeight : 100;
      const viewportHeight = window.innerHeight;
      const threshold = viewportHeight * 0.3; // 30% of viewport height

      let activeSectionIndex = undefined;
      let shouldExpandMain = null;
      let newExpandedCategory = new Set();

      for (let i = 0; i < options.length; i++) {
        const section = options[i];
        const sectionElement = document.getElementById(section?.path);
        if (!sectionElement) continue;

        const sectionRect = sectionElement.getBoundingClientRect();
        const sectionTop = sectionRect.top - navbarHeight;
        const sectionBottom = sectionRect.bottom - navbarHeight;

        // Highlight when 30% of section is visible
        if (sectionBottom > threshold && sectionTop < threshold) {
          activeSectionIndex = i;
          newExpandedCategory.add(i);
        }

        if (section?.categories?.length) {
          for (let j = 0; j < section.categories.length; j++) {
            const category = section.categories[j];
            const categoryElement = document.getElementById(category?.path);
            if (!categoryElement) continue;

            const categoryRect = categoryElement.getBoundingClientRect();
            const categoryTop = categoryRect.top - navbarHeight;
            const categoryBottom = categoryRect.bottom - navbarHeight;

            // Check if a category is visible
            if (categoryBottom > threshold && categoryTop < threshold) {
              activeSectionIndex = `${i}-${j}`;
              shouldExpandMain = i;
            }
          }
        }
      }

      if (activeSectionIndex === undefined) return;
      timeoutId = setTimeout(() => {
          if (shouldExpandMain !== null) {
            setExpandedCategory(new Set([shouldExpandMain])); // Expand necessary category
          } else {
            setExpandedCategory(newExpandedCategory);
          }
      }, 1500);
      setActiveSection((prev) => (prev === activeSectionIndex ? prev : activeSectionIndex));
      // Auto-scroll the options menu when the section is visible in the viewport
      setTimeout(() => {
        const selectedButton = buttonRefs.current[activeSectionIndex];

        if (selectedButton && optionsRef.current) {
          const container = optionsRef.current;
          const buttonLeft = selectedButton.offsetLeft;
          const buttonWidth = selectedButton.offsetWidth;
          const containerWidth = container.clientWidth;
          const scrollLeft = container.scrollLeft;

          // If button is outside visible area, scroll smoothly
          if (
            buttonLeft < scrollLeft ||
            buttonLeft + buttonWidth > scrollLeft + containerWidth
          ) {
            container.scrollTo({
              left: buttonLeft - containerWidth / 2 + buttonWidth / 2,
              behavior: "smooth",
            });
          }
        }
      }, 100); // Ensure scrolling after highlighting
    };

    const onScroll = () => requestAnimationFrame(handleScroll);

    handleScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      clearTimeout(timeoutId);
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
        {showShadow && (
          <span
            className={styles.shadow}
            style={{
              background: `linear-gradient(to left, ${shadowColor}, rgba(0, 0, 0, 0))`,
            }}
          ></span>
        )}
        <div
          ref={optionsRef}
          className={`${styles.options} ${AmaticSC.className}`}
        >
          {options.map((option, index) => (
            <React.Fragment key={index}>
              <button
                ref={(el) => (buttonRefs.current[index] = el)}
                key={index}
                className={`${styles.optionButton} ${styles.mainButton} ${
                  activeSection === index ? styles.selected : ""
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
                    ref={(el) =>
                      (buttonRefs.current[`${index}-${categoryIndex}`] = el)
                    }
                    key={categoryIndex}
                    className={`${styles.optionButton} ${
                      styles.categoryButton
                    } ${
                      activeSection === `${index}-${categoryIndex}`
                        ? styles.selected
                        : ""
                    }`}
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
