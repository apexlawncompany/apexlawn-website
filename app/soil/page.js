import styles from "./soil.module.css";
import TransparentBtn from "@/src/components/TransparentBtn";
import Image from "next/image";
import ContactDetails from "../../src/components/ContactDetails";
import { soilInfo } from "@/src/data/soilData";

export default function Soil() {
  return (
    <>
      <div className={`page-content`}>
        <div
          id="about"
          className={styles.aboutBg}
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), transparent),url(${soilInfo.about.image})`,
          }}
        >
          <div className={styles.contactDetails}>
            <div className={styles.maxDiv}>
              <ContactDetails />
            </div>
          </div>
          <div className={`page-section`}>
            <div className="center-aligned">
              <div
                style={{
                  display: "flex",
                  gap: "30px",
                  alignItems: "center",
                  padding: "40px 15px 15px",
                }}
              >
                <div>
                  <h1 style={{ color: "white" }}>{soilInfo.about.title}</h1>
                </div>
                <div>
                  <p style={{ color: "white" }}>{soilInfo.about.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`page-section ${styles.responivepage}`}>
          <div className="center-aligned">
            <TransparentBtn className={styles.blackTextButton}>
              Setup an Appointment
            </TransparentBtn>

            {/* Section 1: Surface Soil */}
            <div className={`${styles.service} ${styles.reverse}`}>
              <div className={styles.serviceText}>
                <h3>
                  <strong>{soilInfo.surfaceSoil.title}</strong>
                </h3>
                <br />
                <ul>
                  {soilInfo.surfaceSoil.points.map((point, index) => (
                    <li key={index}>
                      <strong>{point.label}:</strong> {point.description}
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.serviceImage}>
                <Image
                  src={soilInfo.surfaceSoil.image}
                  alt="Surface Soil Delivery"
                  width={480}
                  height={380}
                  className={styles.image}
                />
              </div>
            </div>
            <hr className={styles.divider} />

            {/* Tips for Soil Delivery */}
            <div className={`${styles.service}`}>
              <div className={styles.serviceText}>
                <h3>
                  <strong>{soilInfo.soilTips.title}</strong>
                </h3>
                <br />
                <ul>
                  {soilInfo.soilTips.points.map((point, index) => (
                    <li key={index}>
                      <strong>{point.label}:</strong> {point.description}
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.serviceImage}>
                <Image
                  src={soilInfo.soilTips.image}
                  alt="Soil Tips"
                  width={480}
                  height={380}
                  className={styles.image}
                />
              </div>
            </div>
            <hr className={styles.divider} />

            {/* Importance */}
            <div className={`${styles.service} ${styles.reverse}`}>
              <div className={styles.serviceText}>
                <p style={{ textAlign: "center" }}>
                  <strong>{soilInfo.importance.description}</strong>
                </p>
                <br />
              </div>

              <div className={styles.serviceImage}>
                <Image
                  src={soilInfo.importance.image}
                  alt="Soil Importance"
                  width={480}
                  height={380}
                  className={styles.image}
                />
              </div>
            </div>
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
    </>
  );
}
