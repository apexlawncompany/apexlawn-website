import styles from "./gutterGaurds.module.css";
import TransparentBtn from "@/src/components/TransparentBtn";
import gutterGaurdData from "@/src/data/gutterGuardsData";

export default function Guttergaurds() {
  return (
    <>
      <div className={`page-content`}>
        <div className={`page-section ${styles.responivepage}`}>
          <div className="center-aligned">
            {gutterGaurdData.map((service, index) => (
              <div id={service.id} key={service.id}>
                {service.component && <service.component service={service} />}
                {index < gutterGaurdData.length - 1 && (
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
