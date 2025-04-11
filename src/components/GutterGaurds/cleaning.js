import Image from "next/image";
import styles from "../../../app/gutterGaurds/gutterGaurds.module.css";
import TransparentBtn from "../TransparentBtn";

export default function Cleaning({ service }) {
  const { title, content, image } = service;
  return (
    <div className={`${styles.service} ${styles.reverse}`}>
      <div className={styles.serviceText}>
        <h2>{title}</h2>
        <br />
        {content.map((item, index) => (
          <div key={index}>
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
        <div className={styles.buttonGroup}>
          <TransparentBtn className={styles.blackTextButton}>
            Setup an Appointment
          </TransparentBtn>
        </div>
      </div>
    </div>
  );
}
