import Image from "next/image";
import styles from "../../../app/ice/deicing.module.css";
import TransparentBtn from "../TransparentBtn";

export default function Deicing({ service }) {
  const { title, content, image } = service;
  return (
    <div className={`${styles.service} ${styles.reverse}`}>
      <div className={styles.serviceText}>
        <h2>{title}</h2>
        <br />
        <ul>
          <li>1000 lbs an acre 30F</li>
          <li>2000 lbs an acre 20F</li>
        </ul>
        <br />
        {content.map((item, index) => (
          <div key={index}>
            {item.price && (
              <p className={styles.priceList}>
                <strong>{item.price}</strong>
              </p>
            )}
            {item.description && (
              <p
                dangerouslySetInnerHTML={{ __html: item.description }}
                className={styles.description}
              />
            )}
            <br />
          </div>
        ))}
      </div>

      <div className={styles.serviceImage}>
        <Image
          src={image}
          alt={title}
          width={355}
          height={265}
          className={styles.image}
        />
        <div className={styles.buttonGroup}>
          <TransparentBtn className={styles.blackTextButton}>
            Setup an Appointment
          </TransparentBtn>
        </div>
      </div>
    </div>
  );
}
