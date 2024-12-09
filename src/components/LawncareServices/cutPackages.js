"use client";
import Image from "next/image";
import styles from "../../../app/lawncare/lawncare.module.css";
import { useState } from "react";
import { basePath } from "@/next.config";

export default function CutPackages() {
  const pricingDetails = {
    standard: [
      { size: "Small", price: "$89" },
      { size: "Medium", price: "$109" },
      { size: "Medium-Large", price: "$129" },
      { size: "Large", price: "$149" },
      { size: "Very Large", price: "$Variable (Per Month)" },
    ],
    addon: [
      { size: "Small", price: "$59" },
      { size: "Medium", price: "$69" },
      { size: "Medium-Large", price: "$85" },
      { size: "Large", price: "$95" },
      { size: "Custom", price: "$Variable (Per Month)" },
    ],
  };
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
            <p>
              Less Than 0.2 Acres — S <br />
              0.2 to 0.29 Acres — M <br />
              0.3 to 0.39 Acres — ML <br />
              0.4 to 0.49 Acres — L <br />
              Greater Than — C <br />
            </p>
          </div>
          <iframe
            src="https://nconemap.maps.arcgis.com/apps/webappviewer/index.html?id=c49f804bced8479fb83d0cadf1436b25"
            className={styles.map}
            title="GIS Acres Map"
          ></iframe>
        </div>
      ) : (
        <div className={`${styles.service} ${styles.reverse}`}>
          <div className={styles.serviceText}>
            <h2>Cut Packages</h2>

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

            <p>
              The Cut Package includes service on a biweekly or weekly schedule:
            </p>
            <p>
              <strong>Summer:</strong> (Mar-Oct) Mowing, blowing,
              string-trimming, & edging.
            </p>
            <p>
              <strong>Winter:</strong> (Nov-Dec) Leaf-removal, & string-trimming
              (Jan) No service (Feb) Spring Prep​.
            </p>
          </div>

          <div className={styles.serviceImage}>
            <Image
              src={`${basePath}/assets/cut_package.JPG`}
              alt="Cut Packages"
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
