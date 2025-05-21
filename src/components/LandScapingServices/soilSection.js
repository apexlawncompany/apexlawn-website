"use client";
import Image from "next/image";
import styles from "../../../app/landscape/landscape.module.css";
import TransparentBtn from "../TransparentBtn";
import Link from "next/link";

export default function SoilSection({ service }) {
  const { title, details, image, link } = service;
  return (
    <div className={`${styles.service}`}>
      <div className={styles.serviceText}>
        <h3>{title}​</h3>
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
          alt="Top Dressing"
          width={280}
          height={300}
          className={styles.image}
          style={{ objectFit: "cover", objectPosition: "left" }}
        />
        <div className={styles.buttonGroup}>
          <Link href={link} style={{ width: "100%" }}>
            <TransparentBtn className={styles.blackTextButton}>
              See Top Dressing Options
            </TransparentBtn>
          </Link>
        </div>
      </div>
    </div>
  );
}
