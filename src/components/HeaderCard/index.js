import Image from "next/image";
import Link from "next/link";
import styles from "./headercard.module.css";

function HeaderCard({ item }) {
  const { type, text, image, path } = item || {};
  return (
    <Link href={path} className={styles.headerCard}>
      {type === "text" ? (
        <p className={styles.headerName}>{text}</p>
      ) : (
        <Image
          alt="apex lawn"
          src={image}
          width={129}
          height={84}
          style={{
            position: "relative",
            top: "-2px",
            objectFit: "cover",
          }}
        />
      )}
    </Link>
  );
}

export default HeaderCard;
