"use client";
import Image from "next/image";
import styles from "../../../app/landscaping/landscaping.module.css";
import TransparentBtn from "../TransparentBtn";
import Link from "next/link";

export default function SoddingSeedingSection({ service }) {
  const { title, details, image, link } = service;
  return (
    <div className={`${styles.service}`}>
      <div className={styles.serviceText}>
        <h3>{title}</h3>
        {details.map((detail, index) => (
          <div key={index}>
            <p className={styles.priceList}>
              <strong>{detail.price}</strong>
            </p>
            <p>{detail.description}</p>
          </div>
        ))}
      </div>

      <div className={styles.serviceImage}>
        <Image
          src={image}
          alt="Sodding"
          width={280}
          height={230}
          className={styles.image}
        />
        <div className={styles.buttonGroup}>
          <Link href={link} style={{ width: "100%" }}>
            <TransparentBtn className={styles.blackTextButton}>
              See Sod Options
            </TransparentBtn>
          </Link>
        </div>
      </div>
    </div>
  );
}
