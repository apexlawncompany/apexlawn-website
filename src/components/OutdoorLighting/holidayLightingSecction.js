import Image from "next/image";
import styles from "../../../app/outdoorlighting/outdoorlighting.module.css";

export default function HolidayLightingSection({ service }) {
  const { title, content, image } = service;
  return (
    <div className={`${styles.service} ${styles.reverse}`}>
      <div className={styles.serviceText}>
        <h2>{title}</h2>
        <br />
        {content.map((item, index) => (
          <div key={index}>
            {item.heading && (
              <p className={styles.heading}>
                <strong>{item.heading}</strong>
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
          height={400}
          className={styles.image}
        />
      </div>
    </div>
  );
}
