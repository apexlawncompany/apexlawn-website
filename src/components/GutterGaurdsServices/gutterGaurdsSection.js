import Image from "next/image";
import styles from "../../../app/guttergaurds/guttergaurds.module.css";

export default function gutterGaurdSection({ service }) {
  const { title, content, image } = service;
  return (
    <div className={`${styles.service}`}>
      <div className={styles.serviceText}>
        <h2>{title}</h2>
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
          height={340}
          className={styles.image}
        />
      </div>
    </div>
  );
}