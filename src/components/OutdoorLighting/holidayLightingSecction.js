import Image from "next/image";
import styles from "../../../app/outdoorlighting/outdoorlighting.module.css";

export default function HolidayLightingSection({ service }) {
  const { title, content, image } = service;
  return (
    <div className={`${styles.service}`}>
      <div className={styles.serviceText}>
        <h3 style={{ color: "white" }}>{title}</h3>
        <br />
        {content.map((item, index) => (
          <div key={index}>
            {item.heading && (
              <p style={{ color: "white" }} className={styles.heading}>
                <strong>{item.heading}</strong>
              </p>
            )}
            {item.description && (
              <p
                dangerouslySetInnerHTML={{ __html: item.description }}
                className={styles.description} style={{ color: "white" }}
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
          width={350}
          height={250}
          className={styles.image}
        />
      </div>
    </div>
  );
}
