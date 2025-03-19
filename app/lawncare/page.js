import styles from "./lawncare.module.css";
import ServicesOptions from "@/src/components/ServicesAndPricings";
import TransparentBtn from "@/src/components/TransparentBtn";
import lawncareData from "@/src/data/lawncareData";
import { cities, lawnCarePrice, lawnCarePremiumService } from "../constant/constant"; 



export async function generateMetadata({ searchParams }) {
  const citiesString = cities.join(", ");

  return {
     title: `Lawncare Services in ${citiesString} | Apex Lawn Company`,
      description: `Get the best lawn care services in ${citiesString}. Mowing, fertilization, weeding, and for small lawn ${lawnCarePrice["small lawn"]}, for medium lawn ${lawnCarePrice["medium lawn"]}, for large lawn ${lawnCarePrice["large lawn"]}, for medium-large lawn ${lawnCarePrice["medium-large lawn"]}, for premium services for small lawn ${lawnCarePremiumService["small lawn"]}, for premium service for medium lawn ${lawnCarePremiumService["medium lawn"]}, for premium service for large lawn ${lawnCarePremiumService["large lawn"]}, for premium service for medium-large lawn ${lawnCarePremiumService["medium-large lawn"]}. Contact us today!`,
    alternates: {
      canonical: "https://apexlawncompany.com/lawncare",
    },
    openGraph: {
      title: `Lawncare Services in ${citiesString} | Apex Lawn Company`,  
      description: `Get the best lawn care services in ${citiesString}. Mowing, fertilization, weeding, and for small lawn ${lawnCarePrice["small lawn"]}, for medium lawn ${lawnCarePrice["medium lawn"]}, for large lawn ${lawnCarePrice["large lawn"]}, for medium-large lawn ${lawnCarePrice["medium-large lawn"]}, for premium services for small lawn ${lawnCarePremiumService["small lawn"]}, for premium service for medium lawn ${lawnCarePremiumService["medium lawn"]}, for premium service for large lawn ${lawnCarePremiumService["large lawn"]}, for premium service for medium-large lawn ${lawnCarePremiumService["medium-large lawn"]}. Contact us today!`,
      url: "https://apexlawncompany.com/lawncare",
      siteName: "Apex Lawn Company",
      type: "website",
      locale: "en_US",
    },
    keywords: `lawn care, lawn maintenance, lawn mowing, lawn fertilization, lawn weeding, lawn aeration, lawn care services, lawn care company, lawn care company in ${citiesString}, lawn care services in ${citiesString}`,
    robots: {
      index: true,
      follow: true,
      googleBot: "index, follow",
    },
  };
}

export default function Lawncare() {

  const options = [
    { text: "Top", path: "top" },
    { text: "Services And Pricings", path: "services-pricing" },
    { text: "Cut Packages", path: "cut-packages" },
    { text: "Full Service Packages", path: "full-packages" },
    { text: "Hedges", path: "hedges" },
    { text: "Aeriation And Seeding", path: "aeriation-seeding" },
    { text: "Fertilization And Weeding", path: "fertilization-weeding" },
    { text: "Total Maintenance", path: "maintenance" },
    { text: "More", path: "footer" },
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
          {lawncareData.map((service, index) => (
              <div id={service.id} key={service.id}>
                {service.component && <service.component service={service} />}
                {/* Conditionally render divider, skip for last component */}
                {index < lawncareData.length - 1 && (
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
