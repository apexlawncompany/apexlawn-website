"use client";

import { useEffect, useState } from "react";
import styles from "./factBlurb.module.css";

function FactBlurb({ blurb }) {
  const [visible, setVisible] = useState(true);

  // Show immediately, hide after 6s
  useEffect(() => {
    if (!visible) return;
    const timer = setTimeout(() => {
      setVisible(false);
    }, 6000);

    return () => clearTimeout(timer);
  }, [visible]);

  // Scroll behavior
  useEffect(() => {

    const handleScroll = () => {
      if (window.scrollY === 0) {
        setVisible(true);
        // setTimeout(() => setVisible(false), 6000);
      } else {
        setVisible(false);
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!blurb) return null;

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

export default FactBlurb;
