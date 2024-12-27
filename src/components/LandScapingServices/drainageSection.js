"use client";
import Image from "next/image";
import styles from "../../../app/landscaping/landscaping.module.css";
import { basePath } from "@/next.config";
import TransparentBtn from "../TransparentBtn";
import Link from "next/link";

export default function DrainageSection() {
  return (
    <div className={`${styles.service} ${styles.reverse}`}>
      <div className={styles.serviceText}>
        <h3>Drainage</h3>
        <p className={styles.priceList}>
          <strong>C​orrugated​​​​​​​</strong>
          ​​​​
        </p>
        <p>
          Corrigated drains are hidden and serated, absorbing both exess soil
          moisture and runoff from small green grates placed in low areas. Our
          drains are sleeved to resist sediment accumulation with the pipes.
        </p>
        <p className={styles.priceList}>
          <strong>French</strong>
          ​​​​
        </p>
        <p>
          We offer a vaireity of aesthetically pleasing natural drainage
          solutions that can channel water from or to a specific area.
        </p>
      </div>

      <div className={styles.serviceImage}>
        <Image
          src={`${basePath}/assets/drainage.JPG`}
          alt="Drainage"
          width={280}
          height={230}
          className={styles.image}
        />
        <div className={styles.buttonGroup}>
          <Link href="/drainage" style={{ width: "100%" }}>
            <TransparentBtn className={styles.blackTextButton}>
              See Drainage Options
            </TransparentBtn>
          </Link>
        </div>
      </div>
    </div>
  );
}
