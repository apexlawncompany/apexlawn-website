"use client";
import Image from "next/image";
import styles from "../../../app/lawncare/lawncare.module.css";
import { useState } from "react";

export default function FullPackages({ service }) {
  const {
    title,
    pricingDetails,
    description,
    seasonalDetails,
    premiumSeasonalDetails,
    images,
    premiumPricingPara,
  } = service;

  const [pricingType, setPricingType] = useState("residential");

  const handlePricingToggle = () => {
    setPricingType((prev) =>
      prev === "residential" ? "commercial" : "residential"
    );
  };

  return (
    <div className={`${styles.service}`}>
      <div className={styles.serviceText}>
        <h2>{title}</h2>

        {/* Pricing Toggle */}
        <div className={styles.pricing}>
          <button
            onClick={handlePricingToggle}
            className={styles.toggleButton}
            style={{
              backgroundColor:
                pricingType === "residential" ? "rgb(131, 190, 73)" : "#343434",
            }}
          >
            {pricingType === "residential"
              ? "View As Commercial"
              : "View As Residential"}
          </button>
          <p className={styles.priceList}>
            {pricingDetails[pricingType].map((item, index) => (
              <span key={index} className={styles.priceItem}>
                <strong>
                  • {item.size} : {item.price}
                </strong>
              </span>
            ))}
          </p>
        </div>

        {/* Full Service Description */}
        <p>{description.fullService}</p>
        <p>
          <strong>Summer:</strong> {seasonalDetails.summer}
        </p>
        <p>
          <strong>Winter:</strong> {seasonalDetails.winter}
        </p>

        {/* Premium Service */}
        <p className={styles.priceList}>
          <strong>{premiumPricingPara}</strong>
        </p>
        <p>{description.premiumService}</p>
        <p>
          <strong>Summer:</strong> {premiumSeasonalDetails.summer}
        </p>
        <p>
          <strong>Winter:</strong> {premiumSeasonalDetails.winter}
        </p>
      </div>

      {/* Images */}
      <div className={styles.serviceImage}>
        {images.map((image, index) => (
          <Image
            key={index}
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            className={`${styles.image} ${
              index === 0 ? styles.fullService1 : styles.fullService2
            }`}
          />
        ))}
      </div>
    </div>
  );
}
