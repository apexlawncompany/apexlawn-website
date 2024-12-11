"use client";
import Image from "next/image";
import styles from "../../../app/landscaping/landscaping.module.css";
import { basePath } from "@/next.config";

export default function HardScapingSection() {
  return (
    <div className={`${styles.service} ${styles.reverse}`}>
      <div className={styles.serviceText}>
        <h3>H​ardscaping​​​</h3>
        <p className={styles.priceList}>
          <strong>General Labor​​​​​​​​​</strong>
          ​​​​
        </p>
        <p>
          General labor is $79 an hour per person. Our equipment allows our
          technicians to delivery high productivity in limited time.
        </p>
        <p className={styles.priceList}>
          <strong>Patios & Walkways​</strong>​​​​​
        </p>
        <p>
          Hard-surfaces generally cost $15/sqft. We offer a variety of
          materials. Our project quotes include base layer and drainage to
          ensure a stable, long-lasting surface.
        </p>
        <p className={styles.priceList}>
          <strong>B​orders​​</strong>​
        </p>
        <p>
          Wood, Synthetich, & Stone, starting at $6/linear ft. Pleae contact for
          more information​.
        </p>
      </div>

      <div className={styles.serviceImage}>
        <Image
          src={`${basePath}/assets/hardScaping.JPG`}
          alt="Hard Scaping"
          width={300}
          height={300}
          className={styles.image}
        />
      </div>
    </div>
  );
}
