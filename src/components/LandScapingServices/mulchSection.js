"use client";
import Image from "next/image";
import styles from "../../../app/landscaping/landscaping.module.css";
import { basePath } from "@/next.config";
import TransparentBtn from "../TransparentBtn";
import Link from "next/link";

export default function MulchSection() {
  return (
    <>
      <div className={`${styles.service} ${styles.reverse}`}>
        <div className={styles.serviceText}>
          <h3>Mulch & Ground Cover</h3>
          <p className={styles.priceList}>
            <strong>
              $67 per cy starting and $94 for designer mulches​​​​​​​​​
            </strong>
            ​​​​
          </p>
          <p>
            We make sure your mulch beds are thick, even, and well defined.
            Purchase, delivery, and cleanup of the mulch are included in the
            service. We won't leave until your mulch beds look fine. Each cy
            covers ~100sqft @3" Call for pricing on larger projects.
          </p>
          <p className={styles.priceList}>
            <strong>$12.50 per bale for pine straw​​​​​​​​​​</strong>​​​​​
          </p>
          <p>
            We supply long-leaf pinestraw from farms the preserve the endangered
            long-leaf pine. Long-leaf needles last longer and are more vibrant.
            5 bales cover 200sqft.
          </p>
          <p className={styles.priceList}>
            <strong>$198 per cy starting aggregate​​​​​​​​​​</strong>​
          </p>
          <p>
            We offer 1" gravel for driveways and 1" ABC stone for areas
            requiring less permiation, decorative gravel for walk-ways and
            garden beds, and aggregates such as sand for a variety of
            applications.
          </p>
        </div>

        <div className={styles.serviceImage}>
          <Image
            src={`${basePath}/assets/mulch.JPG`}
            alt="Mulch"
            width={330}
            height={300}
            className={`${styles.image} ${styles.mulchImage}`}
          />
          <div className={styles.buttonGroup}>
            <Link href="/mulch" style={{ width: "100%" }}>
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
