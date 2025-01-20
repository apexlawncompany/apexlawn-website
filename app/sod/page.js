import styles from "./sod.module.css";
import TransparentBtn from "@/src/components/TransparentBtn";
import Image from "next/image";
import ContactDetails from "../../src/components/ContactDetails";
import { sodInfo } from "@/src/data/sodData";

export default function Sod() {
  return (
    <>
      <div className={`page-content`}>
        {/* About Section */}
        <div
          id="about"
          className={styles.aboutBg}
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), transparent),url(${sodInfo.about.image})`,
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
                  <h1 style={{ color: "white" }}>{sodInfo.about.title}</h1>
                </div>
                <div>
                  <p style={{ color: "white" }}>{sodInfo.about.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Steps Section */}
        <div className={`page-section ${styles.responivepage}`}>
          <div className="center-aligned">
            <TransparentBtn className={styles.blackTextButton}>
              Setup an Appointment
            </TransparentBtn>

            <div className={`${styles.service} ${styles.reverse}`}>
              <div className={styles.serviceText}>
                <h3>{sodInfo.keySteps.title}</h3>
                <ol>
                  {sodInfo.keySteps.points.map((step, index) => (
                    <li key={index}>
                      <strong>{step.label}:</strong>
                      <ul>
                        {step.subPoints.map((subPoint, subIndex) => (
                          <li key={subIndex}>{subPoint}</li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ol>
              </div>

              <div className={styles.serviceImage}>
                {sodInfo.keySteps.images.map((image, index) => (
                  <Image
                    key={index}
                    src={image}
                    alt="Key Steps"
                    width={430}
                    height={280}
                    className={styles.image}
                  />
                ))}
              </div>
            </div>
            <hr className={styles.divider} />

            {/* Benefits Section */}
            <div className={`${styles.service}`}>
              <div className={styles.serviceText}>
                <h3>{sodInfo.benefits.title}</h3>
                <p>
                  <strong>{sodInfo.benefits.description}</strong>
                </p>
                <ul>
                  {sodInfo.benefits.points.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </div>

              <div className={styles.serviceImage}>
                {sodInfo.benefits.images.map((image, index) => (
                  <Image
                    key={index}
                    src={image}
                    alt="Benefits"
                    width={450}
                    height={300}
                    className={styles.image}
                  />
                ))}
              </div>
            </div>
            <hr className={styles.divider} />

            {/* Importance Section */}
            <div className={`${styles.service} ${styles.reverse}`}>
              <div className={styles.serviceText}>
                <p style={{ textAlign: "center" }}>
                  <strong>{sodInfo.importance.description}</strong>
                </p>
              </div>

              <div className={styles.serviceImage}>
                <Image
                  src={sodInfo.importance.image}
                  alt="Sod Importance"
                  width={450}
                  height={250}
                  className={styles.image}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
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
