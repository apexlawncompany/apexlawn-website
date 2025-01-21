"use client";
import Image from "next/image";
import styles from "../../../app/lawncare/lawncare.module.css";
import { useState } from "react";

export default function CutPackages({ service }) {
  const { pricingDetails, sizeChart, mapUrl } = service.additionalData;
  const [pricingType, setPricingType] = useState("standard");
  const [showSizeChart, setShowSizeChart] = useState(false);

  const handlePricingToggle = () => {
    setPricingType((prev) => (prev === "standard" ? "addon" : "standard"));
  };

  const handleSizeChartToggle = () => {
    setShowSizeChart(!showSizeChart);
  };

  return (
    <div>
      {showSizeChart ? (
        <div className={styles.sizeChartContainer}>
          <div className={styles.sizeChart}>
            <p>
              <strong>Use GISACRES Value</strong>
            </p>
            <p>{sizeChart}</p>
          </div>
          <iframe
            src={mapUrl}
            className={styles.map}
            title="GIS Acres Map"
          ></iframe>
        </div>
      ) : (
        <div className={`${styles.service} ${styles.reverse}`}>
          <div className={styles.serviceText}>
            <h2>{service.title}</h2>

            <div className={styles.pricing}>
              <button
                onClick={handlePricingToggle}
                className={styles.toggleButton}
                style={{
                  backgroundColor:
                    pricingType === "standard"
                      ? "rgb(131, 190, 73)"
                      : "#343434",
                }}
              >
                {pricingType === "standard"
                  ? "View As Add-on"
                  : "View As Standard"}
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

            <p dangerouslySetInnerHTML={{ __html: service.description }} />
          </div>

          <div className={styles.serviceImage}>
            <Image
              src={service.image}
              alt={service.title}
              width={300}
              height={230}
              className={styles.image}
            />
          </div>
        </div>
      )}
      <div className={styles.buttonGroup}>
        <button
          onClick={handleSizeChartToggle}
          className={styles.sizeChartButton}
        >
          {showSizeChart ? "View Pricing" : "View Size Chart"}
        </button>
        {!showSizeChart && (
          <button className={styles.roboticButton}>Robotic Mowing</button>
        )}
      </div>
    </div>
  );
}
