import Image from "next/image";
import styles from "./thankyou.module.css";

export default function ThankYouPage() {
  return (
    <div className={`page-content`}>
      <div className={`page-section ${styles.thankYouPage}`}>
          {/* <div className={``}> */}
            <div className={styles.thankYouMessage}>
              <h2>Thanks for submitting!</h2>
              <p>We will contact you shortly.</p>
            </div>
            <div className={styles.imageContainer}>
              <Image
                alt="apex lawn"
                src={`/header-background.jpg`}
                width={550}
                height={575}
              />
            </div>
          {/* </div> */}
      </div>
    </div>
  );
}
