import styles from "./mulch.module.css";
import ServicesOptions from "@/src/components/ServicesAndPricings";
import TransparentBtn from "@/src/components/TransparentBtn";
import Image from "next/image";
import { basePath } from "@/next.config";

export default function Mulch() {
  const options = [
    { text: "Top", path: "top" },
    { text: "Mulching & Ground Cover ", path: "about" },
    { text: "Section 1", path: "section1" },
    { text: "Section 2", path: "section2" },
    { text: "Section 3", path: "section3" },
    { text: "Section 4", path: "section4" },
    { text: "Section 5", path: "section5" },
    { text: "Section 6", path: "section6" },
    { text: "More", path: "footer" },
  ];

  return (
    <>
      <ServicesOptions options={options} />
      <div className={`page-content`}>
        <div id="top" className={styles.heading}>
          <p id="services-pricing">Services & Pricings</p>
        </div>
        <div
          id="about"
          className={styles.aboutBg}
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), transparent),url(${basePath}/assets/mulch/mulch_bg.jpeg)`,
          }}
        >
          <div className={`page-section`}>
            <div className="center-aligned">
              <div style={{display: "flex",gap: "30px",alignItems: "center",padding: "15px",}}>
                <div>
                  <h1 style={{ color: "white", whiteSpace: "nowrap" }}>
                    About Mulch
                  </h1>
                </div>
                <div>
                  <p style={{ color: "white" }}>
                    Mulch can be formed from any organic plant clippings,
                    shavings, or cuttings. However, most of the time we are
                    looking for wood mulch.​
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
            <div className={styles.aboutMulch}>
              <h2>Thickness​</h2>
              <p>
                The thickness of the cut defines texture. Larger texture mulches
                will last longer, but provide less moisture retention.
                Conversly, finer shred mulches will provide great moisture
                retention for a short period of time.
              </p>
              <br />

              <h2>Types​</h2>
              <p>
                Generally, wood mulch is made from recyled wood. Cypress chips,
                Cedar mulch, and Pine nuggets come soley from their respective
                trees.
              </p>
              <br />

              <h2>Dyed vs. Undyed​</h2>
              <p>
                Dyed mulches add vibrance and color to a landscape. Most dyed
                mulches use iron-oxide dyes that are biosafe and ecofriendly.
                Recycled wood is a great option for ornamental gardens; however
                it is important to be aware of trace contaminents if used on top
                of fruit trees. Cedar and compost mulch particularly excel in
                vegatable gardens and orchards.
              </p>
              <br />
            </div>
            {/*Section 1 */}
            <div
              id="section1"
              className={`${styles.service} ${styles.reverse}`}
            >
              <div className={styles.serviceText}>
                <h3>Designer</h3>
                <p className={styles.priceList}>
                  <strong>$94/yard delivery & install​</strong>
                  ​​​​
                </p>
                <p>
                  Designer mulches have a stunning appearance and coarse cut for
                  a full year of color.
                </p>
              </div>

              <div className={styles.serviceImage}>
                <Image
                  src={`${basePath}/assets/mulch/walnut_mulch.jpg`}
                  alt="Mulch"
                  width={450}
                  height={350}
                  className={styles.image}
                />
              </div>
            </div>
            <hr className={styles.divider} />

            {/*Section 2 */}
            <div id="section2" className={`${styles.service}`}>
              <div className={styles.serviceText}>
                <h3>Play-mulch</h3>
                <p className={styles.priceList}>
                  <strong>$92/yard delivery & install</strong>
                  ​​​​
                </p>
                <p>
                  Certified playground mulch is undyed, safely sourced and
                  reduces the chance of injury.
                </p>
              </div>

              <div className={styles.serviceImage}>
                <Image
                  src={`${basePath}/assets/mulch/play_mulch.jpg`}
                  alt="Mulch"
                  width={480}
                  height={330}
                  className={styles.image}
                />
              </div>
            </div>
            <hr className={styles.divider} />

            {/*Section 3 */}
            <div
              id="section3"
              className={`${styles.service} ${styles.reverse}`}
            >
              <div className={styles.serviceText}>
                <h3>Natural</h3>
                <p className={styles.priceList}>
                  <strong>Starting at $94/yard delivery & install​</strong>
                  ​​​​
                </p>
                <p>
                  Mini Pine Bark Nuggets and Large Pine Bark Nuggets have
                  superior lifetimes. Pine bark is immune from fading the mulch
                  degrades, more pine bark will be exposed.
                </p>
                <br />
                <p>
                  Cypress chips are a good option for those looking to avoid
                  dyed mulch, but preserve the traditional mulch look and feel.
                  Cypress chips can be raked over mid-season as they fade.
                </p>
                <br />
                <p>
                  Cedar mulch has resins that are natural insecticides. Cedar
                  mulch is a great option for clients with vegetable gardens,
                  fruiting trees, or who otherwise wish to limit their chemical
                  usage. Cedar mulch smells great and has a beautiful
                  redish-hue.
                </p>
                <br />
              </div>

              <div className={styles.serviceImage}>
                <Image
                  src={`${basePath}/assets/mulch/pine_nuget_mulch.jpg`}
                  alt="Mulch"
                  width={450}
                  height={380}
                  className={styles.image}
                />
              </div>
            </div>
            <hr className={styles.divider} />

            {/*Section 4 */}
            <div id="section4" className={`${styles.service}`}>
              <div className={styles.serviceText}>
                <h3>Builder Mulch</h3>
                <p className={styles.priceList}>
                  <strong>$67/yard delivery & install​</strong>
                  ​​​​
                </p>
                <p>
                  Recyled, triple shredded, undyded mulch is economical and
                  looks great for a few months when building or showing a house
                  for rental or sale.
                </p>
              </div>

              <div className={styles.serviceImage}>
                <Image
                  src={`${basePath}/assets/mulch/triple_shred_pine_mulch.png`}
                  alt="Mulch"
                  width={480}
                  height={330}
                  className={styles.image}
                />
              </div>
            </div>
            <hr className={styles.divider} />

            {/*Section 5 */}
            <div
              id="section5"
              className={`${styles.service} ${styles.reverse}`}
            >
              <div className={styles.serviceText}>
                <h3>Triple Shred</h3>
                <p className={styles.priceList}>
                  <strong>Starting at $89/yard delivery & install</strong>
                  ​​​​
                </p>
                <p>
                  Dyed triple shred is great for new gardens and ornamental
                  planting. The triple shred texture improves moisture
                  retention, crucial to the success of newly planted and young
                  plants.
                </p>
                <br />
                <p>
                  Triple shred bark is a natural and economical option for
                  gardens and orchards. When mulch breaks down, it provides
                  natural fertilizer for plants; reducing or eliminating
                  fertilizer requirements for mulched areas.
                </p>
              </div>

              <div className={styles.serviceImage}>
                <Image
                  src={`${basePath}/assets/mulch/triple_shred_bark_mulch.jpg`}
                  alt="Mulch"
                  width={480}
                  height={335}
                  className={styles.image}
                />
              </div>
            </div>
            <hr className={styles.divider} />

            {/*Section 6 */}
            <div id="section6" className={`${styles.service}`}>
              <div className={styles.serviceText}>
                <h3>Pine Straw</h3>
                <p className={styles.priceList}>
                  <strong>$12.50/bale delivery & install​</strong>
                  ​​​​
                </p>
                <p>
                  Pinestraw is a natural and the most cost effective ground
                  cover option for large areas. Pinestraw will increase soil
                  acidity, and it is important to rebalance with lime in areas
                  where plant/grass growth is a factor.
                </p>
                <br />
                <p>
                  We generally reccomend long-leaf pine straw for its color and
                  quality.
                </p>
              </div>

              <div className={styles.serviceImage}>
                <Image
                  src={`${basePath}/assets/mulch/pine_straw.jpg`}
                  alt="Mulch"
                  width={480}
                  height={330}
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
