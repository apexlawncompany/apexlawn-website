"use client";
import Image from "next/image";
import styles from "../../../app/lawncare/lawncare.module.css";
import { basePath } from "@/next.config";

export default function AeriationSeeding() {
  return (
    <div className={`${styles.service}`}>
      <div className={styles.serviceText}>
        <h2>Aeriation & Seeding</h2>
        <p className={styles.priceList}>
          <strong>Aeration S $100 · M $125 · ML $150 · L $175</strong>
        </p>
        <p>
          A core aerator will pull dirt plugs for the ground, allowing
          soil-decompression, nutrient penetration, and moisture to enter the
          ground.
        </p>
        <p className={styles.priceList}>
          <strong>Seeding Starting at $2/100 sqft</strong>
        </p>
        <p>
          Nitrogen and phosphate allow for greater, greener, grass-growth when
          applied properly by a professional.
        </p>
        <p className={styles.priceList}>
          <strong>Aeration Package S $380 · M $420 · ML $470 · L $520</strong>
        </p>
        <p>
          The lawn is prepared by dethatching and vacuuming. Aeration creates
          plugs in the ground to allow decompression; seed fertilizer, and lime
          are spread over the plugs. This allows nutrients to enter directly
          into the root system.
        </p>
      </div>

      <div className={styles.serviceImage}>
        <Image
          src={`/assets/aeriation.JPG`}
          alt="full Service"
          width={300}
          height={310}
          className={styles.image}
        />
      </div>
    </div>
  );
}
