"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "../../../app/landscape/landscape.module.css";
import TransparentBtn from "../TransparentBtn";

export default function MulchTab({ tabData }) {
  if (!tabData) return null;

  return (
    <div className={styles.slide}>
      <div className={styles.mulchImage}>
        <Image
          src={tabData.image}
          alt={tabData.title}
          width={330}
          height={247}
          className={styles.mulchImg}
          style={{ objectFit: "contain"}}
        />
        <div className={styles.buttonGroup}>
          <Link href={tabData.link} style={{ width: "100%" }}>
            <TransparentBtn className={styles.blackTextButton}>
              See Mulch Options
            </TransparentBtn>
          </Link>
        </div>
      </div>

      <div className={styles.serviceText}>
        <h3>{tabData.title}</h3>
        {tabData.details?.map((detail, index) => (
          <div key={index}>
            <p className={styles.priceList}>
              <strong>{detail.price}</strong>
            </p>
            <p>{detail.description}</p>
            <br />
          </div>
        ))}
      </div>
    </div>
  );
}
