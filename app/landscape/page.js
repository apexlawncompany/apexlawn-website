import styles from "./landscape.module.css";
import ServicesOptions from "@/src/components/ServicesAndPricings";
import TransparentBtn from "@/src/components/TransparentBtn";
import landscapingdata from "@/src/data/landScapingData";

export async function generateMetadata({ searchParams }) {

  return {
    title: `Landscape Services in Apex| Apex Lawn Company`,
    description: `Get the best landscape services in Apex. Mulch, sod installation, soil delivery, and more at affordable prices. Contact us today!`,
    alternates: {
      canonical: "https://apexlawncompany.com/landscape",
    },

    openGraph: {
      title: "Landscape Services in Apex| Apex Lawn Company",
      description: `Get the best landscape services in Apex. Mulch, sod installation, soil delivery, and more at affordable prices. Contact us today!`,
      url: "https://apexlawncompany.com/landscape",
      siteName: "Apex Lawn Company",
      type: "website",
      locale: "en_US",
    },
    keywords: "landscape services, landscape design, landscape installation, landscape maintenance, landscape construction, landscape renovation, landscape design services, landscape construction services, landscape renovation services, landscape design companies, landscape construction companies, landscape renovation companies",
    robots: {
      index: true,
      follow: true,
      googleBot: "index, follow",
    },
  };
}

export default function LandScape() {
  const options = [
    { text: "Top", path: "top" },
    { text: "Services And Pricings", path: "services-pricing" },
    { text: "Mulching & Ground Cover ", path: "mulch" },
    { text: "Sodding & Seeding", path: "sodding" },
    { text: "Drainage", path: "drainage" },
    { text: "Soil", path: "soil" },
    { text: "Hardscaping", path: "hardScaping" },
    { text: "Setup An Appointment", path: "footer" },
    { text: "Bottom", path: "footer" },
  ];

  return (
    <>
      <ServicesOptions options={options} />
      <div className={`page-content`}>
        <div id="top" className={styles.heading}>
          <p id="services-pricing">Services & Pricings</p>
        </div>

        <div className={`page-section ${styles.responivepage}`}>
          <div className="center-aligned">
            {landscapingdata.map((service, index) => (
              <div id={service.id} key={service.id}>
                {service.component && <service.component service={service} />}
                {/* Conditionally render divider, skip for last component */}
                {index < landscapingdata.length - 1 && (
                  <hr className={styles.divider} />
                )}
              </div>
            ))}
          </div>
        </div>

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
