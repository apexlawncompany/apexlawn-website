"use client";
import Image from "next/image";
import styles from "../../../app/lawncare/lawncare.module.css";
import { useState } from "react";
import { basePath } from "@/next.config";
export default function FullPackages() {
  const pricingDetails = {
    residential: [
      { size: "Small", price: "$109" },
      { size: "Medium", price: "$149" },
      { size: "Medium-Large", price: "$169" },
      { size: "Large", price: "$189 (Per Month)" },
    ],
    commercial: [
      {
        size: "Commercial Maintenace as estimated",
        price:
          "$189 / .5 Acre Lot & $189 /Acre after first Acre (Per Month)​​​​​​​​​​",
      },
    ],
  };
  const [pricingType, setPricingType] = useState("residential");
  const handlePricingToggle = () => {
    setPricingType((prev) =>
      prev === "residential" ? "commercial" : "residential"
    );
  };

  return (
    <div className={`${styles.service}`}>
      <div className={styles.serviceText}>
        <h2>Full Service Packages</h2>
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

        <p>
          The Full Service package includes applications on a rotational basis
          biweekly:
        </p>
        <p>
          A cut package add-on is recommended during the summer for weekly
          cutting.
          <br />
          <strong>Summer:</strong> Lawn Mowing, String-trimming, Edging,
          Blowing, Bed Maintenance, Hedge Maintenance, Fertilizer, and Weed
          Killer (beds, lawn, & driveway) <br />
          <strong>Winter:</strong> Pre-Emergent at beginning and end of season,
          Leaf Cleanup, Hedge Maintenance, Soil Balancing, Soil Test,
          Dethatching, Vacuuming, Other (based on grass type)
        </p>
        <br />
        <p className={styles.priceList}>
          <strong>Premium Service · S $200 · M $225 · ML $255 · L $285</strong>​
        </p>
        <p>
          Premium Service is our most advanced package: customized specifically
          for you. Due to the multitude of services provided, we can adjust
          different factors -- such as grass height, fertilizer, and herbicide
          -- to create a positive synergy for your yard. It
          includes:​​​​​​​​​​​​​​
        </p>
        <p>
          <strong>Summer:</strong> March 1 - October 31 (8 mo) (34 w)
          <br />
          Lawn Mowing, String-trimming, Edging, Blowing, Bed Maintenance, Hedge
          Maintenance, Fertilizer, Weed Killer, Lawn Cleanup, Edge Defining.{" "}
          <br />
          <strong>Winter</strong> November 1 - February 28 (4 mo) (18 w) <br />{" "}
          Aeration and Dethatching at beginning and end of season, Fertilizer,
          Seeding (depending on grass type), Pre-Emergent beginning and end of
          season, Hedge Maintenance, Pressure Washing -- After Aeration 2,
          Blowing and winter debris cleanup, Soil Balancing, Soil Testing.
          <br />
        </p>
      </div>

      <div className={styles.serviceImage}>
        <Image
          src={`${basePath}/assets/full_service.JPG`}
          alt="full Service"
          width={300}
          height={200}
          className={`${styles.image} ${styles.fullService1}`}
        />
        <Image
          src={`${basePath}/assets/full_service2.jpg`}
          alt="full Service"
          width={300}
          height={400}
          className={`${styles.image} ${styles.fullService2}`}
        />
      </div>
    </div>
  );
}
