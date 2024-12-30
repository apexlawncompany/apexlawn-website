import styles from "./hardscape.module.css";
import TransparentBtn from "@/src/components/TransparentBtn";
import Image from "next/image";
import ContactDetails from "../../src/components/ContactDetails";
import { basePath } from "@/next.config";

export default function HardScape() {
  return (
    <>
      <div className={`page-content`}>
        <div
          id="about"
          className={styles.aboutBg}
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), transparent),url(${basePath}/assets/hardscape/hardscape_bg.jpg)`,
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
                    About Hardscaping
                  </h1>
                </div>
                <div>
                  <p style={{ color: "white" }}>
                    Hardscaping forms the backbone of a well-designed outdoor
                    space, complementing the living elements of landscaping,
                    such as plants and lawns.
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
            {/*Section 1 */}
            <div className={`${styles.service} ${styles.reverse}`}>
              <div className={styles.serviceText}>
                <h3>
                  <strong>Importance of Hardscaping:</strong>
                </h3>
                <br />
                <ul>
                  <li>
                    <strong>Structure and Functionality:</strong> Defines
                    outdoor spaces and creates areas for specific purposes
                    (e.g., dining, recreation, walking paths).
                  </li>
                  <li>
                    Ensures stability in sloped areas with retaining walls and
                    terraces.
                  </li>
                  <li>
                    <strong>Aesthetic Appeal:</strong> Enhances the visual
                    harmony of a landscape by providing balance and contrast to
                    greenery.
                  </li>
                  <li>
                    <strong>Increases Property Value:</strong> Adds to the curb
                    appeal and usability of outdoor spaces, making properties
                    more attractive to potential buyers.
                  </li>
                </ul>
              </div>

              <div className={styles.serviceImage}>
                <Image
                  src={`${basePath}/assets/hardscape/hardscape1.jpg`}
                  alt="Hard Scaping"
                  width={480}
                  height={380}
                  className={styles.image}
                />
              </div>
            </div>
            <hr className={styles.divider} />

            {/*Section 2 */}
            <div className={`${styles.service}`}>
              <div className={styles.serviceText}>
                <h3>
                  <strong>Hardscaping Considerations:</strong>
                </h3>
                <br />
                <ul>
                  <li>
                    <strong>Design Balance:</strong> Harmonize hardscaping with
                    softscaping for a cohesive look.
                  </li>
                  <li>
                    <strong>Material Choice:</strong> Select materials based on
                    durability, climate, and design preferences. ​
                  </li>
                  <li>
                    <strong>Drainage:</strong> Ensure proper drainage systems to
                    avoid water pooling or erosion.
                  </li>
                  <li>
                    <strong>Budget:</strong> Hardscaping projects can be costly,
                    so plan according to priorities and available funds.
                  </li>
                </ul>
              </div>

              <div className={styles.serviceImage}>
                <Image
                  src={`${basePath}/assets/hardscape/hardscape2.jpg`}
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
