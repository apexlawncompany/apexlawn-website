"use client";
import Image from "next/image";
import styles from "../../../app/lawncare/lawncare.module.css";
import { basePath } from "@/next.config";

export default function Maintenance() {
  return (
    <div className={`${styles.service}`}>
      <div className={styles.serviceText}>
        <h2>Maintenance & Packages</h2>
        <p className={styles.priceList}>
          <strong>
            Total Maintenance S $59 · M $69 · ML $84 · L $104 C · $Variable (Per
            Month)​
          </strong>
        </p>
        <p>
          Year round maintenance is our solution for those who want to mow the
          lawn themselves. While you worry about getting the perfect stripes,
          we'll worry about soil-testing: nitrogen levels, ph levels, phosphate
          levels, and potassium levels, as well as iron and zinc absorption for
          your lawn and apply different fertilizers accordingly, as well as
          tackle tough weeds on your lawn, mulch, and driveway. During the fall,
          and spring, depending on your type of grass, we'll dethatch, aerate,
          seed, and apply pre-emergent to your lawn.​​​​​​​​
        </p>
        <p>
          <strong>Services Included:</strong>
          <br />
          Aeration, Fertilization, Dethatching, Pre-Emergent, Lawn Vacuuming,
          Seeding, Soil Testing, Weed Control
        </p>
        <br />
        <p className={styles.priceList}>
          <strong>Spring Prep S $195 · M $215 · ML $240 · L $275​​​​</strong>
        </p>
        <p>
          Spring up the new season with a lawn cleanup. Pre-emergent can reduce
          up to 70% of weeds and preparing the lawn early encourages even,
          healthy growth.
        </p>
        <p>
          <strong>Services Included:</strong>
          <br />
          cutting, dethatching, vacuuming, fertilizer, and pre-emergent
        </p>
        <br />
        <p className={styles.priceList}>
          <strong>
            Cultivation Package S $440 · M $550 · ML $660 · L $770​​​​​
          </strong>
        </p>
        <p>
          The cultivation great and cost-effective choice for lawn-planting and
          renewal​​​​.
        </p>
        <p>
          <strong>Services Included:</strong>
          <br />
          power-raking & vacuuming, cultivation (double pass), seeding,
          fertilization & pre-emergent in three months​​
        </p>
      </div>

      <div className={styles.serviceImage}>
        <Image
          src={`${basePath}/assets/maintenance.jpg`}
          alt="full Service"
          width={300}
          height={400}
          className={styles.image}
        />
      </div>
    </div>
  );
}
