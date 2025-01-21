import styles from "./drainage.module.css";
import TransparentBtn from "@/src/components/TransparentBtn";
import Image from "next/image";
import ContactDetails from "../../src/components/ContactDetails";
import { drainageInfo } from "@/src/data/drainageData";

export default function Drainage() {
  return (
    <>
      <div className={`page-content`}>
        <div
          id="about"
          className={styles.aboutBg}
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), transparent),url(${drainageInfo.about.image})`,
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
                    {drainageInfo.about.title}
                  </h1>
                </div>
                <div>
                  <p style={{ color: "white" }}>
                    {drainageInfo.about.description}
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

            {/* Section 1: Surface Drainage */}
            <div className={`${styles.service} ${styles.reverse}`}>
              <div className={styles.serviceText}>
                <h3>
                  <strong>{drainageInfo.surfaceDrainage.title}</strong>
                </h3>
                <br />
                <ul>
                  {drainageInfo.surfaceDrainage.points.map((point, index) => (
                    <li key={index}>
                      <strong>{point.label}:</strong> {point.description}
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.serviceImage}>
                <Image
                  src={drainageInfo.surfaceDrainage.image}
                  alt="Surface Drainage"
                  width={480}
                  height={380}
                  className={styles.image}
                />
              </div>
            </div>
            <hr className={styles.divider} />

            {/* Section 2: Best Drainage System */}
            <div className={`${styles.service}`}>
              <div className={styles.serviceText}>
                <h3>
                  <strong>{drainageInfo.bestDrainage.title}</strong>
                </h3>
                <br />
                <ul>
                  {drainageInfo.bestDrainage.points.map((point, index) => (
                    <li key={index}>
                      <strong>{point.label}:</strong> {point.description}
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.serviceImage}>
                <Image
                  src={drainageInfo.bestDrainage.image}
                  alt="Best Drainage System"
                  width={480}
                  height={380}
                  className={styles.image}
                />
              </div>
            </div>
            <hr className={styles.divider} />

            {/* Section 3: Importance of Drainage */}
            <div className={`${styles.service} ${styles.reverse}`}>
              <div className={styles.serviceText}>
                <p style={{ textAlign: "center" }}>
                  <strong>{drainageInfo.importance.description}</strong>
                </p>
                <br />
              </div>

              <div className={styles.serviceImage}>
                <Image
                  src={drainageInfo.importance.image}
                  alt="Importance of Drainage"
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
