"use client";
import { useEffect, useState } from "react";
import styles from "./blurb.module.css";
import { BLURBS_DATA } from "@/src/data/blurbData";

function CityBlurb({ city }) {
  const [blurb, setBlurb] = useState("");
  const [visible, setVisible] = useState(false);

  // Pick random blurb once
  useEffect(() => {
    if (BLURBS_DATA[city]) {
      const randomIndex = Math.floor(Math.random() * BLURBS_DATA[city].length);
      setBlurb(BLURBS_DATA[city][randomIndex]);
    }
  }, [city]);

  // Show blurb after 6 seconds on first load
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 6000);
    return () => clearTimeout(timer);
  }, []);

  // Handle offset + scroll toggle
  useEffect(() => {
    const updateOffset = (isVisible) => {
      const offsetValue = isVisible
        ? `${document.getElementById("city-blurb")?.offsetHeight || 0}px`
        : "0px";
      document.documentElement.style.setProperty(
        "--header-offset",
        offsetValue
      );
    };

    if (blurb) {
      updateOffset(visible);

      const handleScroll = () => {
        if (window.scrollY === 0) {
          setVisible(true);
          updateOffset(true);
        } else {
          setVisible(false);
          updateOffset(false);
        }
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [blurb, visible]);

  if (!blurb || !visible) return null;

  return (
    <div
      id="city-blurb"
      className={`${styles.blurbContainer} ${
        visible ? styles.blurbVisible : ""
      }`}
    >
      <p className={styles.blurbText}>{blurb}</p>
    </div>
  );
}

export default CityBlurb;
