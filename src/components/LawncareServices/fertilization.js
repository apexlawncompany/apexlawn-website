"use client";
import Image from "next/image";
import styles from "../../../app/lawncare/lawncare.module.css";
import { basePath } from "@/next.config";

export default function FertilizatinWeeding() {
  return (
    <div className={`${styles.service} ${styles.reverse}`}>
      <div className={styles.serviceText}>
        <h2>Fertilization & Weeding</h2>
        <p className={styles.priceList}>
          <strong>Hard-surfaces + Beds S-M $99 ML-L $119</strong>​​​​
        </p>
        <p>
          Cleanup your mulch, flower, or any types of beds by getting rid of the
          weeds; and have the growth in the cracks of your hard-surfaces
          sprayed, and dried away.​​​​​​
        </p>
        <p className={styles.priceList}>
          <strong>Lawn S-M $99 ML-L $119</strong>​​​​​
        </p>
        <p>
          Whenever dealing with chemicals over a large surface, such as your
          lawn, trust a professional to apply just the correct amount and type
          of herbicide to control weeds and stay safe. Pre-emergent and
          post-emergent are available.​​
        </p>
        <p className={styles.priceList}>
          <strong>All S $130 · M $145 · ML $165 · L $190​​​​​​​​​</strong>​
        </p>
        <p>
          Apply both sets of spray to prevent weeds from creeping back into your
          grass. This also includes spot spraying the lawn with non-selective
          herbicide for certain weeds.
        </p>
      </div>

      <div className={styles.serviceImage}>
        <Image
          src={`${basePath}/assets/fertilization.jpg`}
          alt="full Service"
          width={300}
          height={270}
          className={styles.image}
        />
      </div>
    </div>
  );
}
