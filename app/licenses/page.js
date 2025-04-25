import styles from "./licenses.module.css";

export default function Licenses() {
  return (
    <div className={`page-content`}>
      <div className={`page-section ${styles.responivepage}`}>
        <div className="center-aligned">
          <div className={styles["license-row"]}>
            <div className={styles.heading}>Licenses & Insurance</div>
            <hr className={styles.separator} />

            <div className={styles.text}>
              <p>
                Request a Certificate of General Liability Insurance (contact:{" "}
                <a href="mailto:client@apexlawncompany.com">
                  client@apexlawncompany.com
                </a>
                )
              </p>
              <p>
                NCDA&CS (contact:{" "}
                <a href="mailto:client@apexlawncompany.com">
                  client@apexlawncompany.com
                </a>
                )
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
