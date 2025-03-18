import styles from "./deicing.module.css";
import TransparentBtn from "@/src/components/TransparentBtn";
import deicingData from "@/src/data/deicingData";
import { cities, deIcePrice } from "../constant/constant";


export async function generateMetadata({ searchParams }) {
  const citiesString = cities.join(", ");
  return {
     title: `De-Icing & Snow Removal Services in ${citiesString} | Apex Lawn Company`,
      description: `Get the best de-icing and snow removal services in  ${citiesString}. Residential Drive & Path small size is  ${deIcePrice["Residential Drive & Path small"]}, Residential Drive & Path large size is ${deIcePrice["Residential Drive & Path large"]}, Commercial & Estate ${deIcePrice["Commercial & Estate"]} and snow removal Residential Drive & Path small size is ${deIcePrice["Snow Removal Residential Drive & Path small"]}, Residential Drive & Path large size is ${deIcePrice["Snow Removal Residential Drive & Path large"]}. Contact us today!`,
    alternates: {
      canonical: "https://apexlawncompany.com/ice",
    },
    openGraph: {
      title: `De-Icing & Snow Removal Services in ${citiesString} | Apex Lawn Company`,
      description: `Get the best de-icing and snow removal services in ${citiesString}. Residential Drive & Path small size is ${deIcePrice["Residential Drive & Path small"]}, Residential Drive & Path large size is ${deIcePrice["Residential Drive & Path large"]}, Commercial & Estate ${deIcePrice["Commercial & Estate"]} and snow removal Residential Drive & Path small size is ${deIcePrice["Snow Removal Residential Drive & Path small"]}, Residential Drive & Path large size is ${deIcePrice["Snow Removal Residential Drive & Path large"]}. Contact us today!`, 
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
