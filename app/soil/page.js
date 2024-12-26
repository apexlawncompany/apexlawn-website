import styles from "./soil.module.css";
import TransparentBtn from "@/src/components/TransparentBtn";
import Image from "next/image";
import { basePath } from "@/next.config";

export default function Soil() {
  return (
    <>
      <div className={`page-content`}>
        <div
          id="about"
          className={styles.aboutBg}
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), transparent),url(${basePath}/assets/sod/Top_Soil_Delivery.jpg)`,
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
                      fontSize: "50px",
                      whiteSpace: "nowrap",
                    }}
                  >
                    About Top Dressing
                  </h1>
                </div>
                <div>
                  <p style={{ color: "white", fontSize: "23px" }}>
                    Soil delivery and spreading are essential processes in
                    gardening, landscaping, and construction projects. These
                    steps are fundamental when preparing planting areas,
                    leveling land, or enhancing soil quality for optimal plant
                    growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`page-section`}>
          <div className="center-aligned">
            <TransparentBtn className={styles.blackTextButton}>
              Setup an Appointment
            </TransparentBtn>
            {/*Section 1 */}
            <div
              className={`${styles.service} ${styles.reverse}`}
            >
              <div className={styles.serviceText}>
                <p>
                  <strong>Why Is Soil Delivery and Spreading Important?</strong>
                </p>
                <br/>
                <ul>
                  <li>
                    <strong>Improves Soil Quality:-</strong> Adding
                    nutrient-rich soil or amendments provides plants with the
                    optimal conditions for growth.
                  </li>
                  <li>
                    <strong>Prepares Land for Planting:-</strong> Proper soil
                    application ensures a stable foundation for lawns, gardens,
                    and landscaping features.
                  </li>
                  <li>
                    <strong>Corrects Grading Issues:-</strong> Spreading soil
                    can help level uneven surfaces or create slopes for proper
                    water drainage.
                  </li>
                  <li>
                    <strong>Enhances Drainage and Aeration:-</strong> New soil
                    can improve the structure and permeability of compacted or
                    poor-quality ground.
                  </li>
                </ul>
              </div>

              <div className={styles.serviceImage}>
                <Image
                  src={`${basePath}/assets/sod/soil_delivery.jpg`}
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
                  <strong>
                    Tips for Effective Soil Delivery and Spreading:
                  </strong>
                </p>
                <br />
                <ul>
                  <li>
                    <strong>Weather Considerations:</strong> Avoid spreading
                    soil on rainy days, as wet soil is harder to work with and
                    may compact.
                  </li>
                  <li>
                    <strong>Work Efficiently:</strong> Spread the soil
                    immediately after delivery to prevent it from drying out or
                    being washed away. ​
                  </li>
                  <li>
                    <strong>Ensure Even Coverage:</strong> Use a leveling tool
                    to achieve a uniform surface, especially for lawns.
                  </li>
                  <li>
                    <strong>Mix Layers:</strong> Blend new soil with the
                    existing soil to prevent drainage issues or layering
                    effects.
                  </li>
                </ul>
              </div>

              <div className={styles.serviceImage}>
                <Image
                  src={`${basePath}/assets/sod/soil_prep.jpg`}
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
                    Soil delivery and spreading are fundamental steps in
                    preparing landscapes for planting, leveling, and aesthetic
                    improvements. By selecting the right soil, planning
                    carefully, and applying it effectively, you can create a
                    thriving garden or lawn that supports healthy plant growth.
                  </strong>
                </p>
                <br />
              </div>

              <div className={styles.serviceImage}>
                <Image
                  src={`${basePath}/assets/sod/sod_footer.jpg`}
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
