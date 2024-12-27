import styles from "./sod.module.css";
import TransparentBtn from "@/src/components/TransparentBtn";
import Image from "next/image";
import { basePath } from "@/next.config";
import localFont from "next/font/local";

// const AmaticSC = localFont({
//   src: "../fonts/AmaticSC.woff",
//   variable: "--font-amatics-sc",
//   weight: "900",
// });

export default function Sod() {
  return (
    <>
      <div className={`page-content`}>
        <div
          id="about"
          className={styles.aboutBg}
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), transparent),url(${basePath}/assets/sod/sod_bg.jpg)`,
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
                    Sod Install
                  </h1>
                </div>
                <div>
                  <p style={{ color: "white"}}>
                    Sodding refers to the process of installing pre-grown grass
                    and soil, known as sod or turf, onto an area to establish a
                    lawn or cover bare ground quickly.
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
                <h3>Key Steps in Sodding:</h3>
                <ol>
                  <li>
                    <strong>Soil Preparation:</strong>
                    <ul>
                      <li>Clear the area of debris, weeds, and rocks.</li>
                      <li>Loosen and level the soil.</li>
                      <li>
                        Add fertilizers or soil amendments if needed for better
                        growth.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>Laying the Sod:</strong>
                    <ul>
                      <li>
                        Lay the sod pieces tightly together in a staggered,
                        brick-like pattern to avoid gaps.
                      </li>
                      <li>
                        Ensure the sod edges align properly without overlapping.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>Watering:</strong>
                    <ul>
                      <li>
                        Water immediately after installation to help the roots
                        establish.
                      </li>
                      <li>
                        Maintain consistent watering for the first couple of
                        weeks.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>Maintenance:</strong>
                    <ul>
                      <li>
                        Avoid heavy foot traffic for a few weeks to allow the
                        sod to root properly.
                      </li>
                      <li>
                        Mow and fertilize as needed after the sod has taken root
                      </li>
                    </ul>
                  </li>
                </ol>
              </div>

              <div className={styles.serviceImage}>
                <Image
                  src={`${basePath}/assets/sod/soil_prep.jpg`}
                  alt="soil preparation"
                  width={430}
                  height={280}
                  className={styles.image}
                />
                <Image
                  src={`${basePath}/assets/sod/sod_bg.jpg`}
                  alt="soil preparation"
                  width={430}
                  height={280}
                  className={styles.image}
                />
              </div>
            </div>
            <hr className={styles.divider} />

            {/*Section 2 */}
            <div className={`${styles.service}`}>
              <div className={styles.serviceText}>
                <h3>
                  A new lawn is an investment that requires planning and effort
                  but pays off by providing a beautiful and functional outdoor
                  space.
                </h3>
                <br />
                <p>
                  <strong>
                    New lawn is important for several reasons, whether it’s for
                    a residential yard, commercial space, or public area.
                  </strong>
                </p>
                <ol>
                  <ul>
                    <li>
                      Lawns reduce soil erosion by stabilizing the ground.
                    </li>
                    <li>
                      They improve air quality by absorbing carbon dioxide and
                      releasing oxygen.
                    </li>
                    <li>
                      Grass helps filter rainwater, reducing runoff and
                      improving water quality.
                    </li>
                    <li>
                      Lawns act as natural air conditioners, cooling the
                      environment around them and reducing the urban heat island
                      effect.​
                    </li>
                    <li>
                      A lawn provides a soft, safe area for activities, play,
                      and relaxation.
                    </li>
                    <li>
                      Grass lawns offer habitats for insects, birds, and small
                      animals.
                    </li>
                  </ul>
                </ol>
              </div>

              <div className={styles.serviceImage}>
                <Image
                  src={`${basePath}/assets/sod/sod_lawn.jpg`}
                  alt="Sod Lawn"
                  width={450}
                  height={300}
                  className={styles.image}
                />
                <Image
                  src={`${basePath}/assets/sodding.jpg`}
                  alt="Sodding"
                  width={450}
                  height={300}
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
                    sodding is a practical and efficient solution for
                    establishing a beautiful, functional, and environmentally
                    beneficial lawn. It’s especially valuable when time, soil
                    erosion, or an instant aesthetic transformation are key
                    considerations.
                  </strong>
                </p>
                <br />
              </div>

              <div className={styles.serviceImage}>
                <Image
                  src={`${basePath}/assets/sod/sod_footer.jpg`}
                  alt="Sod"
                  width={450}
                  height={250}
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
