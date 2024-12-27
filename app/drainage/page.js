import styles from "./drainage.module.css";
import TransparentBtn from "@/src/components/TransparentBtn";
import Image from "next/image";
import { basePath } from "@/next.config";

export default function Drainage() {
  return (
    <>
      <div className={`page-content`}>
        <div
          id="about"
          className={styles.aboutBg}
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), transparent),url(${basePath}/assets/drainage/drainage_bg.jpg)`,
          }}
        >
          <div className={`page-section`}>
            <div className="center-aligned">
              <div
                style={{
                  display: "flex",
                  gap: "30px",
                  alignItems: "center",
                  padding: "15px",
                }}
              >
                <div>
                  <h1
                    style={{
                      color: "white",
                      whiteSpace: "nowrap",
                    }}
                  >
                    About Drainage
                  </h1>
                </div>
                <div>
                  <p style={{ color: "white"}}>
                    Draining refers to the process of managing and removing
                    excess water from the soil to ensure proper growing
                    conditions for plants.
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
            <div
              className={`${styles.service} ${styles.reverse}`}
            >
              <div className={styles.serviceText}>
                <h3>Surface Drainage</h3>
                <p>
                  <strong>
                    Purpose: Removes water from the surface of the soil.
                  </strong>
                </p>
                <ul>
                  <li>
                    Water is directed away using sloping land, channels, or
                    ditches.
                  </li>
                  <li>
                    Ensures water doesn’t accumulate and cause erosion or
                    puddles.
                    <ul>
                      <li>​Sloping the landscape.</li>
                      <li>Shallow trenches.</li>
                      <li>Installing open drains.</li>
                    </ul>
                  </li>
                </ul>
              </div>

              <div className={styles.serviceImage}>
                <Image
                  src={`${basePath}/assets/drainage/drainage1.jpg`}
                  alt="surface drainage"
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
                <p>
                  <strong>The best drainage system depends on:</strong>
                </p>
                <br />
                <ul>
                  <li>
                    <strong>Soil Type:</strong> Sandy soils drain well, while
                    clay soils often require subsurface drainage.
                  </li>
                  <li>
                    <strong>Terrain:</strong> Sloped areas may need slope or
                    French drains.
                  </li>
                  <li>
                    <strong>Water Volume:</strong> Areas with heavy rainfall
                    might require a combination of systems.
                  </li>
                  <li>
                    <strong>Budget:</strong> Natural drainage and surface
                    drainage are cost-effective, while subsurface systems are
                    more expensive but highly efficient.
                  </li>
                  <li>
                    Proper drainage not only ensures healthy plant growth but
                    also protects your garden and surrounding structures from
                    water damage.
                  </li>
                </ul>
              </div>

              <div className={styles.serviceImage}>
                <Image
                  src={`${basePath}/assets/drainage/drainage2.jpg`}
                  alt="drainage"
                  width={480}
                  height={380}
                  className={styles.image}
                />
              </div>
            </div>
            <hr className={styles.divider} />

            {/*Section 3 */}
            <div className={`${styles.service} ${styles.reverse}`}>
              <div className={styles.serviceText}>
                <p style={{ textAlign: "center" }}>
                  <strong>
                    Drainage is a crucial aspect of gardening and landscaping
                    that ensures optimal soil and plant health by managing
                    excess water. Proper drainage systems prevent waterlogging,
                    reduce soil erosion, and enhance root aeration, which leads
                    to better plant growth and overall garden sustainability.
                  </strong>
                </p>
                <br />
              </div>

              <div className={styles.serviceImage}>
                <Image
                  src={`${basePath}/assets/drainage/drainage3.jpg`}
                  alt="drainage"
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
