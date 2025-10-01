"use client";

import { useEffect, useState } from "react";
import styles from "./factBlurb.module.css";

function FactBlurb({ blurb }) {
  const [visible, setVisible] = useState(false);

  // Show immediately, hide after 6s
  useEffect(() => {
    if (!blurb) return;

    setVisible(true);
    const timer = setTimeout(() => {
      setVisible(false);
    }, 6000);

    return () => clearTimeout(timer);
  }, [blurb]);

  // Keep header offset in sync when visible changes
  useEffect(() => {
    if (!blurb) return;

    const offsetValue = visible
      ? `${document.getElementById("city-blurb")?.offsetHeight || 0}px`
      : "0px";

    document.documentElement.style.setProperty("--header-offset", offsetValue);
  }, [visible, blurb]);

  // Scroll behavior
  useEffect(() => {
    if (!blurb) return;

    const handleScroll = () => {
      if (window.scrollY === 0) {
        setVisible(true);
        setTimeout(() => setVisible(false), 6000);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [blurb]);

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
