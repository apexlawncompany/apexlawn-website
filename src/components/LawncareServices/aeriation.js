"use client";
import Image from "next/image";
import styles from "../../../app/lawncare/lawncare.module.css";

export default function AeriationSeeding({ service }) {
  const { title, content, image } = service;

  return (
    <div className={`${styles.service}`}>
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
          alt={title}
          width={300}
          height={310}
          className={styles.image}
        />
      </div>
    </div>
  );
}
