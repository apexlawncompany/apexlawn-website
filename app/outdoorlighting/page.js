import styles from "./outdoorlighting.module.css";
import TransparentBtn from "@/src/components/TransparentBtn";
import outdoorLightingData from "@/src/data/outdoorLightingData";

export default function OutdoorLighting() {
  return (
    <>
      <div className={`page-content`}>
        <div
          id="holiday-Light-Bg"
          className={styles.holidayLightBg}
          style={{
            backgroundImage: `linear-gradient(rgba(128, 128, 128, 0.8), transparent), url('/assets/holiday_lighting_bg.JPG')`,
          }}
          
        >
          <div className={styles.overlay} />
          <div className={`page-section ${styles.responivepage}`}>
            <div className="center-aligned">
                {outdoorLightingData.map((service, index) => (
                  <div id={service.id} key={service.id}>
                    {service.component && (
                      <service.component service={service} />
                    )}
                    {index < outdoorLightingData.length - 1 && (
                      <hr className={styles.divider} />
                    )}
                  </div>
                ))}
              </div>
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
