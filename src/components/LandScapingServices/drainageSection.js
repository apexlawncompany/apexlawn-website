"use client";
import Image from "next/image";
import styles from "../../../app/landscape/landscape.module.css";
import TransparentBtn from "../TransparentBtn";
import Link from "next/link";

export default function DrainageSection({ service }) {
  const { title, details, image, link } = service;
  return (
    <div className={`${styles.service} ${styles.reverse}`}>
      <div className={styles.serviceText}>
        <h3>{title}</h3>
        {details.map((detail, index) => (
          <div key={index}>
            <p className={styles.priceList}>
              <strong>{detail.price}</strong>
            </p>
            <p>{detail.description}</p>
            <br />
          </div>
        ))}
      </div>

      <div className={styles.serviceImage}>
        <Image
          src={image}
          alt={title}
          width={280}
          height={230}
          className={styles.image}
        />
        <div className={styles.buttonGroup}>
          <Link href={link} style={{ width: "100%" }}>
            <TransparentBtn className={styles.blackTextButton}>
              See {title} Options
            </TransparentBtn>
          </Link>
        </div>
      </div>
    </div>
  );
}
