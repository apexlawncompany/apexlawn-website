import styles from "./powerwash.module.css";
import TransparentBtn from "@/src/components/TransparentBtn";
import powerWashData from "@/src/data/powerWashData";

export default function PowerWash() {
  return (
    <>
      <div className={`page-content`}>
        <div className={`page-section ${styles.responivepage}`}>
          <div className="center-aligned">
            {powerWashData.map((service, index) => (
              <div id={service.id} key={service.id}>
                {service.component && <service.component service={service} />}
                {index < powerWashData.length - 1 && (
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
