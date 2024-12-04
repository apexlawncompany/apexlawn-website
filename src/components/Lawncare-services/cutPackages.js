"use client";
import Image from "next/image";
import styles from "../../../app/lawncare/page.module.css";
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
        <div className={styles.sizeChart}>
          <p>
            <strong>Use GISACRES Value</strong>
          </p>
          <ul>
            <li>Less Than 0.2 Acres — S</li>
            <li>0.2 to 0.29 Acres — M</li>
            <li>0.3 to 0.39 Acres — ML</li>
            <li>0.4 to 0.49 Acres — L</li>
            <li>Greater Than — C</li>
          </ul>
        </div>
      ) : (
        <div className={`${styles.service} ${styles.reverse}`}>
          <div className={styles.serviceText}>
            <h2>Cut Packages</h2>

            <div className={styles.pricing}>
              <button
                onClick={handlePricingToggle}
                className={styles.toggleButton}
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
              height={200}
              className={styles.image}
            />
          </div>
        </div>
      )}
      <button
        onClick={handleSizeChartToggle}
        className={styles.sizeChartButton}
      >
        {showSizeChart ? "View Pricing" : "View Size Chart"}
      </button>
    </div>
  );
}
