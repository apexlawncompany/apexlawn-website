"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../../../app/landscape/landscape.module.css";
import TransparentBtn from "../TransparentBtn";

export default function StoneTab({ tabData }) {
  const [selectedPattern, setSelectedPattern] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);

  // Set default selected pattern and size on load
  useEffect(() => {
    if (tabData?.patterns?.length > 0) {
      const defaultPattern = tabData.patterns[0];
      setSelectedPattern(defaultPattern);
      setSelectedSize(defaultPattern.sizes?.[0] || null);
    }
  }, [tabData]);

  return (
    <div className={styles.slide}>
      <div className={styles.stoneImage}>
        <Image
          src={selectedPattern?.image || tabData.image}
          alt={tabData.title}
          width={330}
          height={247}
          className={styles.image}
          style={{ objectFit: selectedPattern?.image ? "cover" : "contain" }}
        />
        <div className={styles.buttonGroup}>
          <Link href={tabData.link} style={{ width: "100%" }}>
            <TransparentBtn className={styles.blackTextButton}>
              See Stone Options
            </TransparentBtn>
          </Link>
        </div>
      </div>

      <div className={styles.serviceText}>
        <h3>{tabData.title}</h3>
        <p className={styles.priceList}>
          <strong>{selectedPattern?.price || tabData.details?.[0]?.price}</strong>
        </p>
        <p>{tabData.details?.[0]?.description}</p>

        {/* Pattern selector */}
        {tabData.patterns?.length > 0 && (
          <>
            <div className={styles.selectorRow}>
              {tabData.patterns.map((pattern, index) => (
                <button
                  key={index}
                  className={`${styles.patternBtn} ${
                    selectedPattern?.name === pattern.name ? styles.active : ""
                  }`}
                  onClick={() => {
                    setSelectedPattern(pattern);
                    setSelectedSize(pattern.sizes?.[0] || null); // default to first size
                  }}
                >
                  {pattern.name}
                </button>
              ))}
            </div>

            {/* Size selector */}
            {selectedPattern?.sizes?.length > 0 && (
              <div className={styles.selectorRow}>
                {selectedPattern.sizes.map((size, index) => (
                  <button
                    key={index}
                    className={`${styles.sizeBtn} ${
                      selectedSize === size ? styles.active : ""
                    }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
