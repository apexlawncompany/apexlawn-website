import Image from "next/image";
import styles from "../../../app/powerwash/powerwash.module.css";

export default function PowerWashSection({ service }) {
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
          width={310}
          height={400}
          className={styles.image}
        />
      </div>
    </div>
  );
}
