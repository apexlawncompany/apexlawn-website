import styles from "./lawncare.module.css";
import ServicesOptions from "@/src/components/ServicesAndPricings";
import TransparentBtn from "@/src/components/TransparentBtn";
import lawncareData from "@/src/data/lawncareData";
import { cityBlurbs } from "@/src/data/cityBlurbs";

export async function generateMetadata() {
  return {
    title: "Lawncare Services in the Triangle | Apex Lawn Company",
    description:
      "Trusted lawn care in Apex, Cary, Morrisville, and beyond. Mowing, irrigation, drainage, and landscaping with over 5 years of experience in the Triangle Area.",
    alternates: { canonical: "https://apexlawncompany.com/lawncare" },
    robots: { index: true, follow: true },
  };
}

export default function Lawncare() {
  const options = [
    {
      text: "Service Packages",
      path: "services-pricing",
      categories: [
        { text: "Cut Packages", path: "cut-packages" },
        { text: "Full Service Packages", path: "full-packages" },
        { text: "Total Maintenance", path: "maintenance" },
      ],
    },
    { text: "Hedges And Cleanup", path: "hedges" },
    { text: "Aeration And Verticutting", path: "aeration-verticutting" },
    { text: "Weed Control And Applications", path: "weedControl-Applications" },
  ];

  return (
    <>
      <ServicesOptions options={options} />

      <div className={`page-content`}>
        <div id="top" className={styles.heading}>
          <p id="services-pricing">Services & Pricing</p>
        </div>

        <div className={`page-section ${styles.responivepage}`}>
          <div className="center-aligned">
            {lawncareData.map((service, index) => (
              <div id={service.id} key={service.id}>
                {service.component && <service.component service={service} />}
                {index < lawncareData.length - 1 && (
                  <hr className={styles.divider} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Optional: Internal links to city pages */}
        {/* <div className="city-links">
          <h2>Serving Cities Across the Triangle</h2>
          <ul>
            {Object.keys(cityBlurbs).map((city) => (
              <li key={city}>
                <a href={`/lawncare/${city}`}>
                  Lawncare Services in {city}, NC
                </a>
              </li>
            ))}
          </ul>
        </div> */}

        <div id="footer" className={styles.footer}>
          <div className="page-section">
            <div className="center-aligned">
              <TransparentBtn>Setup an Appointment</TransparentBtn>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
