import styles from "./hardscape.module.css";
import TransparentBtn from "@/src/components/TransparentBtn";
import Image from "next/image";
import ContactDetails from "../../src/components/ContactDetails";
import { hardscapeInfo } from "@/src/data/hardscapeData";

export default function HardScape() {
  return (
    <>
      <div className={`page-content`}>
        <div
          id="about"
          className={styles.aboutBg}
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), transparent),url(${hardscapeInfo.about.image})`,
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
                  <h1
                    style={{
                      color: "white",
                    }}
                  >
                    {hardscapeInfo.about.title}
                  </h1>
                </div>
                <div>
                  <p style={{ color: "white" }}>
                    {hardscapeInfo.about.description}
                  </p>
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

            {/* Section 1: Importance of Hardscaping */}
            <div className={`${styles.service} ${styles.reverse}`}>
              <div className={styles.serviceText}>
                <h3>
                  <strong>{hardscapeInfo.importance.title}</strong>
                </h3>
                <br />
                <ul>
                  {hardscapeInfo.importance.points.map((point, index) => (
                    <li key={index}>
                      <strong>{point.label}:</strong> {point.description}
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.serviceImage}>
                <Image
                  src={hardscapeInfo.importance.image}
                  alt="Hard Scaping"
                  width={480}
                  height={380}
                  className={styles.image}
                />
              </div>
            </div>
            <hr className={styles.divider} />

            {/* Section 2: Hardscaping Considerations */}
            <div className={`${styles.service}`}>
              <div className={styles.serviceText}>
                <h3>
                  <strong>{hardscapeInfo.considerations.title}</strong>
                </h3>
                <br />
                <ul>
                  {hardscapeInfo.considerations.points.map((point, index) => (
                    <li key={index}>
                      <strong>{point.label}:</strong> {point.description}
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.serviceImage}>
                <Image
                  src={hardscapeInfo.considerations.image}
                  alt="Hard Scaping"
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
