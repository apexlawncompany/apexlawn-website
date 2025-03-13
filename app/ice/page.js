import styles from "./deicing.module.css";
import TransparentBtn from "@/src/components/TransparentBtn";
import deicingData from "@/src/data/deicingData";



export async function generateMetadata({ searchParams }) {
  const cities = ["Apex", "Cary", "Morrisville", "Chapel Hill", "Pittsboro", "Moncure", "New Hill", "Sanford", "Spring Lake", "Hope Mills", "Fayetteville", "Raleigh", "Holly springs", "Garner"]
  const citiesString = cities.join(", ");

  return {
     title: `De-Icing & Snow Removal Services in ${citiesString} | Apex Lawn Company`,
      description: `Get the best de-icing and snow removal services in  ${citiesString}. De-icing, and snow removal more at affordable prices. Contact us today!`,
    alternates: {
      canonical: "https://apexlawncompany.com/ice",
    },
    openGraph: {
      title: `De-Icing & Snow Removal Services in ${citiesString} | Apex Lawn Company`,
      description: `Get the best de-icing and snow removal services in ${citiesString}. De-icing, and snow removal more at affordable prices. Contact us today!`,
      url: "https://apexlawncompany.com/ice",
      siteName: "Apex Lawn Company",
      type: "website",
      locale: "en_US",
    },  
    keywords: `de-icing, snow removal, snow removal services, snow removal company, snow removal services in ${citiesString}, snow removal company in ${citiesString}, snow removal services in ${citiesString}, snow removal company in ${citiesString}`,
    robots: {
      index: true,
      follow: true,
      googleBot: "index, follow",
    },
  };
}



export default function Deicing() {
  return (
    <>
      <div className={`page-content`}>
        <div className={`page-section ${styles.responivepage}`}>
          <div className="center-aligned">
            {deicingData.map((service, index) => (
              <div id={service.id} key={service.id}>
                {service.component && <service.component service={service} />}
                {index < deicingData.length - 1 && (
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
