"use client";
import Image from "next/image";
import styles from "../../../app/landscaping/landscaping.module.css";
import TransparentBtn from "../TransparentBtn";
import Link from "next/link";

export default function MulchSection({ service }) {
  const { title, details, image, link } = service;

  return (
    <>
      <div className={`${styles.service} ${styles.reverse}`}>
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

        {/* Service Image */}
        <div className={styles.serviceImage}>
          <Image
            src={image}
            alt={title}
            width={330}
            height={300}
            className={`${styles.image} ${styles.mulchImage}`}
          />
          <div className={styles.buttonGroup}>
            <Link href={link} style={{ width: "100%" }}>
              <TransparentBtn className={styles.blackTextButton}>
                See Mulch Options
              </TransparentBtn>
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.buttonGroup}>
        <TransparentBtn className={styles.blackTextButton}>
          Setup an Appointment
        </TransparentBtn>
        <Link href="/drone" style={{ width: "100%" }}>
          <TransparentBtn className={styles.blackTextButton}>
            Schedule a Drone Fly-by
          </TransparentBtn>
        </Link>
      </div>
    </>
  );
}
