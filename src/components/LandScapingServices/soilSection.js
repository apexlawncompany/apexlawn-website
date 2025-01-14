"use client";
import Image from "next/image";
import styles from "../../../app/landscaping/landscaping.module.css";
import { basePath } from "@/next.config";
import TransparentBtn from "../TransparentBtn";
import Link from "next/link";

export default function SoilSection() {
  return (
    <div className={`${styles.service}`}>
      <div className={styles.serviceText}>
        <h3>Soil Delivery & Spreading​</h3>
        <p className={styles.priceList}>
          <strong>Uses and Benefits of TopDressing​​​​​​​​​​​</strong>
          ​​​​
        </p>
        <p>
          We provide a variety of soil mixes for different applications. Adding
          soil to your lawn, especially clay soils, introduces organic matter
          provides nutrients and reduces stress on grass. This increases blade
          density, brightness, and texture.​​​​​​​
        </p>
        <p className={styles.priceList}>
          <strong>
            $92 per cubic yard of topsoil​​​​​​​​​​ or compost​​​​​​​​​​
          </strong>
          ​​​​​
        </p>
        <p>
          Includes purhchase, delivery, spreading, and cleanup.​​​​​ Our
          standard, eco-friendly, topsoil is made from a combination of manure,
          soil, and recyled organic matter.​​​​
        </p>
        <p className={styles.priceList}>
          <strong>$102 per cubic yard for ALC70/30®​​​​​​​​​​​​​​​</strong>​
        </p>
        <p>
          Our certified compost is heated to 150° F to fully cure. This reduces
          fungal spores, pathogens, and weeds. The fine texture of our compost
          sifts through grass smoothly for top-dressing applications.​​​​
          ALC70/30 is a custom blend of coarse sand and compost to improve soil
          drainage as well as fertility.
        </p>
      </div>

      <div className={styles.serviceImage}>
        <Image
          src={`/assets/soil.JPG`}
          alt="Soil Delivery"
          width={280}
          height={300}
          className={styles.image}
        />
        <div className={styles.buttonGroup}>
          <Link href="/soil" style={{ width: "100%" }}>
            <TransparentBtn className={styles.blackTextButton}>
              See Soil Delivery Options
            </TransparentBtn>
          </Link>
        </div>
      </div>
    </div>
  );
}
