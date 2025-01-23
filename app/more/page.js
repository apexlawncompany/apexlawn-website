"use client";
import styles from "./more.module.css";
import Image from "next/image";
import TransparentBtn from "@/src/components/TransparentBtn";
import { useRouter } from "next/navigation";
import MOREPRODUCTS_DATA from "@/src/data/moreProductsData";

export default function MoreProducts() {
  const router = useRouter();

  const navigateToProduct = (path) => {
    router.push(path); // Use router.push for navigation
  };

  return (
    <>
      <div className="page-content">
        <div className={`page-section ${styles.responivepage}`}>
          <div className={styles.product}>
            {MOREPRODUCTS_DATA.map((product, index) => (
              <div
                key={index}
                style={{ animationDelay: `${index * 0.2}s` }}
                onClick={() => navigateToProduct(product.path)}
              >
                <Image
                  src={product.image}
                  alt={product.text}
                  width={230}
                  height={175}
                  className={styles.productImage}
                />

                <div className={styles.productText}>
                  <strong>{product.text}</strong>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div id="footer" className={styles.footer}>
          <div className="page-section">
            <div className="center-aligned">
              <TransparentBtn>Setup an Appointment</TransparentBtn>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
