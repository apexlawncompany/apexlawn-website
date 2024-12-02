"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";

export default function Lawncare() {
  const [showSizes, setShowSizes] = useState(false);
  const onButtonClick = () => {
    setShowSizes(!showSizes);
  };
  return (
    <>
      <div className={styles.lawncare}>
        <div className={styles.lawnbg}>
          <h1>LAWNCARE SERVICES & PRICINGS</h1>
          <div className={styles.scrollDown}>&#x2193;</div>
        </div>
      </div>

      <div className={styles.servicesTokensHeader}>
        <a href="#cutpackages" className={styles.serviceToken}>Cut Packages</a>
        <a href="#fullpackages" className={styles.serviceToken}>Full Service Packages</a>
        <a href="#hedges" className={styles.serviceToken}>Hedges</a>
        <a href="#seeding" className={styles.serviceToken}>Aeration & Seeding</a>
        <a href="#fertilization" className={styles.serviceToken}>Fertilization & Weeding</a>
        <a href="#maintenance" className={styles.serviceToken}>Maintenance & Packages</a>
      </div>
      
      <div className={styles.services}>
        <div className={styles.alignment}>
          {showSizes ? (
            <div style={{ fontSize: "1rem", fontWeight: "bold" }}>
              Use GISACRES Value
              <p>Less Than 0.2 Acres — S</p>
              <p>0.2 to 0.29 Acres — M</p>
              <p>0.3 to 0.39 Acres — ML</p>
              <p>0.4 to 0.49 Acres — L</p>
              <p>Greater Than — C</p>
            </div>
          ) : (
            <div id="cutpackages"  className={styles.service}>
              <div className={styles.serviceText}>
                <h2>Cut Packages</h2>
                <h3>
                  The Cut Package includes service on a biweekly or weekly
                  schedule:
                </h3>
                <p>
                  <strong>Summer:</strong> (Mar-Oct) Mowing, blowing, string-trimming, & edging.
                </p>
                <p>
                  <strong>Winter:</strong> (Nov-Dec) Leaf-removal, & string-trimming (Jan) No
                  service (Feb) Spring Prep​.
                </p>

                <div className={styles.pricingTable}>
                  <table className={styles.table}>
                    <thead>
                      <tr>
                        <th>Sizes</th>
                        <th>S</th>
                        <th>M</th>
                        <th>ML</th>
                        <th>L</th>
                        <th>C(per month)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Standard Price</td>
                        <td>$59</td>
                        <td>$69</td>
                        <td>$85</td>
                        <td>$95</td>
                        <td>$Variable</td>
                      </tr>
                      <tr>
                        <td>Add-On Price</td>
                        <td>$89</td>
                        <td>$109</td>
                        <td>$129</td>
                        <td>$149</td>
                        <td>$Variable</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className={styles.serviceImage}>
                <Image
                  src="/assets/lawn-care-lawn2.webp"
                  alt="Lawn"
                  width={500}
                  height={300}
                  className={styles.image}
                />
              </div>
            </div>
          )}

          <div style={{ marginTop: "10px" }}>
            <button
              onClick={onButtonClick}
              style={{
                backgroundColor: "#83be48",
                color: "white",
                border: "none",
                padding: "10px 20px",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              {showSizes ? "View Pricing" : "View Size Chart"}
            </button>
          </div>

          <div
            style={{ height: "2px", background: "#9a9090", margin: "3rem 0" }}
          ></div>

          <div id="fullpackages" className={styles.service}>
            <div className={styles.serviceText}>
              <h2>Full Service Packages</h2>
              <h3>
                The Full Service package includes applications on a rotational
                basis biweekly:
              </h3>
              <p>
                A cut package add-on is recommended during the summer for weekly
                cutting.
                <br />
                <strong>Summer:</strong> Lawn Mowing, String-trimming, Edging,
                Blowing, Bed Maintenance, Hedge Maintenance, Fertilizer, and
                Weed Killer (beds, lawn, & driveway) <br />
                <strong>Winter:</strong> Pre-Emergent at beginning and end of
                season, Leaf Cleanup, Hedge Maintenance, Soil Balancing, Soil
                Test, Dethatching, Vacuuming, Other (based on grass type)
              </p>
              <br />
              <h3>Premium Service :</h3>
              <p>
                Premium Service is our most advanced package: customized
                specifically for you. Due to the multitude of services provided,
                we can adjust different factors -- such as grass height,
                fertilizer, and herbicide -- to create a positive synergy for
                your yard. It includes:​​​​​​​​​​​​​​
              </p>
              <p>
                <strong>Summer:</strong> March 1 - October 31 (8 mo) (34 w)
                <br />
                Lawn Mowing, String-trimming, Edging, Blowing, Bed Maintenance,
                Hedge Maintenance, Fertilizer, Weed Killer, Lawn Cleanup, Edge
                Defining. <br />
                <strong>Winter</strong> November 1 - February 28 (4 mo) (18 w){" "}
                <br /> Aeration and Dethatching at beginning and end of season,
                Fertilizer, Seeding (depending on grass type), Pre-Emergent
                beginning and end of season, Hedge Maintenance, Pressure Washing
                -- After Aeration 2, Blowing and winter debris cleanup, Soil
                Balancing, Soil Testing.
                <br />
              </p>
              <div className={styles.pricingTable}>
                <table className={styles.table}>
                  <thead>
                    <tr>
                      <th>Sizes</th>
                      <th>S</th>
                      <th>M</th>
                      <th>ML</th>
                      <th>L</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Full Service Price</td>
                      <td>$109</td>
                      <td>$149</td>
                      <td>$169</td>
                      <td>$189</td>
                    </tr>
                    <tr>
                      <td>Premium Service Price</td>
                      <td>$200</td>
                      <td>$225</td>
                      <td>$255</td>
                      <td>$285</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className={styles.serviceImage}>
              <Image
                src="/assets/Full.JPG"
                alt="Lawn"
                width={500}
                height={300}
                className={styles.image}
              />
              <Image
                src="/assets/Weeding.JPG"
                alt="Lawn"
                width={500}
                height={100}
                className={styles.image}
              />
            </div>
          </div>
          <div
            style={{ height: "2px", background: "#9a9090", margin: "3rem 0" }}
          ></div>

          <div id="hedges" className={`${styles.service} ${styles.reverse}`}>
            <div className={styles.serviceText}>
              <h2>Hedges</h2>
              <p>
                Hedges can be rounded or squared. Hedge trimming is priced per
                hedge. Hand-pruning and shaping is also available for an hourly
                fee.​​​
              </p>
              <div className={styles.pricingTable}>
                <table className={styles.table}>
                  <thead>
                    <tr>
                      <th>Sizes</th>
                      <th>S</th>
                      <th>M</th>
                      <th>ML</th>
                      <th>L</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Hedge trimming</td>
                      <td>$3</td>
                      <td>$6</td>
                      <td>$9</td>
                      <td>$12</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className={styles.serviceImage}>
              <Image
                src="/assets/hedge.webp"
                alt="Lawn"
                width={500}
                height={300}
                className={styles.image}
              />
            </div>
          </div>
          <div
            style={{ height: "2px", background: "#9a9090", margin: "3rem 0" }}
          ></div>

          <div id="seeding" className={styles.service}>
            <div className={styles.serviceText}>
              <h2>Aeration & Seeding​</h2>
              <p>
                A core aerator will pull dirt plugs for the ground, allowing
                soil-decompression, nutrient penetration, and moisture to enter
                the ground.
              </p>
              <h3>
                <br />
                Seeding Starting at $2/100 sqft
              </h3>
              <p>
                Nitrogen and phosphate allow for greater, greener, grass-growth
                when applied properly by a professional.​
                <br />
                The lawn is prepared by dethatching and vacuuming. Aeration
                creates plugs in the ground to allow decompression; seed
                fertilizer, and lime are spread over the plugs. This allows
                nutrients to enter directly into the root system.
              </p>
              <div className={styles.pricingTable}>
                <table className={styles.table}>
                  <thead>
                    <tr>
                      <th>Sizes</th>
                      <th>S</th>
                      <th>M</th>
                      <th>ML</th>
                      <th>L</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Aeration</td>
                      <td>$100</td>
                      <td>$125</td>
                      <td>$150</td>
                      <td>$175</td>
                    </tr>
                    <tr>
                      <td>Aeration Packages</td>
                      <td>$380</td>
                      <td>$420</td>
                      <td>$470</td>
                      <td>$520</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className={styles.serviceImage}>
              <Image
                src="/assets/Aeriation.JPG"
                alt="Lawn"
                width={500}
                height={300}
                className={styles.image}
              />
            </div>
          </div>
          <div
            style={{ height: "2px", background: "#9a9090", margin: "3rem 0" }}
          ></div>

          <div id="fertilization" className={`${styles.service} ${styles.reverse}`}>
            <div className={styles.serviceText}>
              <h2>Fertilization & Weeding</h2>
              <p>
                Cleanup your mulch, flower, or any types of beds by getting rid
                of the weeds; and have the growth in the cracks of your
                hard-surfaces sprayed, and dried away. <br />
                Whenever dealing with chemicals over a large surface, such as
                your lawn, trust a professional to apply just the correct amount
                and type of herbicide to control weeds and stay safe.
                Pre-emergent and post-emergent are available <br />
              </p>
              <div className={styles.pricingTable}>
                <table className={styles.table}>
                  <thead>
                    <tr>
                      <th>Sizes</th>
                      <th>Small-Medium</th>
                      <th>MLarge - Large</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Hard-surfaces + Beds</td>
                      <td>$99</td>
                      <td>$119</td>
                    </tr>
                    <tr>
                      <td>Lawn</td>
                      <td>$99</td>
                      <td>$119</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                Apply both sets of spray to prevent weeds from creeping back
                into your grass. This also includes spot spraying the lawn with
                non-selective herbicide for certain weeds.
              </p>
              <div className={styles.pricingTable}>
                <table className={styles.table}>
                  <thead>
                    <tr>
                      <th>Sizes</th>
                      <th>S</th>
                      <th>M</th>
                      <th>ML</th>
                      <th>L</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>ALL</td>
                      <td>$130</td>
                      <td>$145</td>
                      <td>$165</td>
                      <td>$190</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className={styles.serviceImage}>
              <Image
                src="/assets/Fertilization.jpg"
                alt="Lawn"
                width={500}
                height={300}
                className={styles.image}
              />
              <Image
                src="/assets/weed.jpg"
                alt="Lawn"
                width={500}
                height={100}
                className={styles.image}
              />
            </div>
          </div>
          <div
            style={{ height: "2px", background: "#9a9090", margin: "3rem 0" }}
          ></div>

          <div id="maintenance" className={styles.service}>
            <div className={styles.serviceText}>
              <h2>Maintenance & Packages</h2>
              <p>
                <strong>Maintenance: </strong>
                <br />
                Year round maintenance is our solution for those who want to mow
                the lawn themselves. While you worry about getting the perfect
                stripes, we will worry about soil-testing: nitrogen levels, ph
                levels, phosphate levels, and potassium levels, as well as iron
                and zinc absorption for your lawn and apply different
                fertilizers accordingly, as well as tackle tough weeds on your
                lawn, mulch, and driveway. During the fall, and spring,
                depending on your type of grass, we will dethatch, aerate, seed,
                and apply pre-emergent to your lawn.
              </p>
              <p>
                <strong>Services Included:</strong>
                <br />
                Aeration, Fertilization, Dethatching, Pre-Emergent, Lawn
                Vacuuming, Seeding, Soil Testing, Weed Control
              </p>
              <div className={styles.pricingTable}>
                <table className={styles.table}>
                  <thead>
                    <tr>
                      <th>Sizes</th>
                      <th>S</th>
                      <th>M</th>
                      <th>ML</th>
                      <th>L</th>
                      <th>C(per month)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Total maintenance</td>
                      <td>$59</td>
                      <td>$69</td>
                      <td>$84</td>
                      <td>$104</td>
                      <td>$Variable</td>
                    </tr>
                  </tbody>
                </table>
              </div>{" "}
              <br />
              <p>
                <strong>Spring:</strong>
                <br />
                Spring up the new season with a lawn cleanup. Pre-emergent can
                reduce up to 70% of weeds and preparing the lawn early
                encourages even, healthy growth. <br />
                <strong>Services Included:</strong>
                <br />
                cutting, dethatching, vacuuming, fertilizer and pre-emergent.
              </p>
              <div className={styles.pricingTable}>
                <table className={styles.table}>
                  <thead>
                    <tr>
                      <th>Sizes</th>
                      <th>S</th>
                      <th>M</th>
                      <th>ML</th>
                      <th>L</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Spring Prep</td>
                      <td>$195</td>
                      <td>$215</td>
                      <td>$240</td>
                      <td>$275</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <br />
              <p>
                <strong>Cultivation:</strong>
                <br />
                The cultivation great and cost-effective choice for
                lawn-planting and renewal​​​​.
                <br />
                <strong>Services Included:</strong>
                <br />
                power-raking & vacuuming, cultivation (double pass), seeding
                ,fertilization & pre-emergent in three months.
              </p>
              <div className={styles.pricingTable}>
                <table className={styles.table}>
                  <thead>
                    <tr>
                      <th>Sizes</th>
                      <th>S</th>
                      <th>M</th>
                      <th>ML</th>
                      <th>L</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Cultivation Packages</td>
                      <td>$440</td>
                      <td>$550</td>
                      <td>$660</td>
                      <td>$770</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className={styles.serviceImage}>
              <Image
                src="/assets/Maintenance.jpg"
                alt="Lawn"
                width={500}
                height={300}
                className={styles.image}
              />
              <Image
                src="/assets/Maintenance2.JPG"
                alt="Lawn"
                width={500}
                height={300}
                className={styles.image}
              />
            </div>
          </div>
          <div
            style={{ height: "2px", background: "#9a9090", margin: "3rem 0" }}
          ></div>
        </div>
      </div>
    </>
  );
}
