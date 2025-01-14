"use client";
import Image from "next/image";
import styles from "../../../app/landscaping/landscaping.module.css";
import { basePath } from "@/next.config";
import TransparentBtn from "../TransparentBtn";
import Link from "next/link";

export default function SoddingSeedingSection() {
  return (
    <div className={`${styles.service}`}>
      <div className={styles.serviceText}>
        <h3>Sodding & New Lawns</h3>
        <p className={styles.priceList}>
          <strong>For over-seeding, please refer to lawncare page​​​​​​</strong>
          ​​​​
        </p>
        <p>
          Time for a new lawn fast? Prep, leveling, sod, and placement are all
          you need from Apex Lawn Company. We also plant lawns from seed! Sod
          removal is also availible. Contact for pricing and more information.​​
        </p>
      </div>

      <div className={styles.serviceImage}>
        <Image
          src={`/assets/sodding.jpg`}
          alt="Sodding"
          width={280}
          height={230}
          className={styles.image}
        />
        <div className={styles.buttonGroup}>
          <Link href="/sod" style={{ width: "100%" }}>
            <TransparentBtn className={styles.blackTextButton}>
              See Sod Options
            </TransparentBtn>
          </Link>
        </div>
      </div>
    </div>
  );
}
