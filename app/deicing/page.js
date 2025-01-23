import styles from "./deicing.module.css";
import TransparentBtn from "@/src/components/TransparentBtn";
import deicingData from "@/src/data/deicingData";

export default function Deicing() {
  return (
    <>
      <div className={`page-content`}>
        <div className={`page-section ${styles.responivepage}`}>
          <div className="center-aligned">
            {deicingData.map((service, index) => (
              <div id={service.id} key={service.id}>
                {service.component && <service.component service={service} />}
                {index < deicingData.length - 1 && (
                  <hr className={styles.divider} />
                )}
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
