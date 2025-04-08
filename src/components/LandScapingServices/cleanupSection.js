"use client";
import Image from "next/image";
import styles from "../../../app/landscape/landscape.module.css";

export default function CleanupSection({ service }) {
  const { title, details, image } = service;
  return (
    <div className={`${styles.service}`}>
      <div className={styles.serviceText}>
        <h3>{title}</h3>
        {details.map((detail, index) => (
          <div key={index}>
            <p className={styles.priceList}>
              <strong>{detail.heading}</strong>
            </p>
            <p>{detail.description}</p>
            <br />
          </div>
        ))}
      </div>

      <div className={styles.serviceImage}>
        <Image
          src={image}
          alt="Cleanup"
          width={320}
          height={300}
          className={styles.image}
        />
      </div>
    </div>
  );
}
