"use client";
import Image from "next/image";
import styles from "../../../app/lawncare/lawncare.module.css";

export default function FertilizatinWeeding({ service }) {
  const { title, content, image } = service;
  return (
    <div className={`${styles.service} ${styles.reverse}`}>
      <div className={styles.serviceText}>
        <h2>{title}</h2>
        {content.map((item, index) => (
          <div key={index}>
            {item.price && (
              <p className={styles.priceList}>
                <strong>{item.price}</strong>
              </p>
            )}
            {item.description && <p>{item.description}</p>}
          </div>
        ))}
      </div>

      <div className={styles.serviceImage}>
        <Image
          src={image}
          alt="Fertilization"
          width={300}
          height={270}
          className={styles.image}
        />
      </div>
    </div>
  );
}
