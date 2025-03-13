import styles from "./outdoorlighting.module.css";
import ServicesOptions from "@/src/components/ServicesAndPricings";
import TransparentBtn from "@/src/components/TransparentBtn";


export async function generateMetadata({ searchParams }) {

  const cities = ["Apex", "Cary", "Morrisville", "Chapel Hill", "Pittsboro", "Moncure", "New Hill", "Sanford", "Spring Lake", "Hope Mills", "Fayetteville", "Raleigh", "Holly springs", "Garner"]
  const citiesString = cities.join(", ");


  return {
     title: `Outdoor Lighting Services in ${citiesString} | Apex Lawn Company`,
      description: `Get the best outdoor lighting services in ${citiesString}. Outdoor lighting, and fence lighting for Christmas and Thanksgiving holidays more at affordable prices. Contact us today!`,
    alternates: {
      canonical: "https://apexlawncompany.com/outdoorlighting",
    },
    openGraph: {
      title: `Outdoor Lighting Services in ${citiesString} | Apex Lawn Company`,
      description: `Get the best outdoor lighting services in ${citiesString}. Outdoor lighting, and fence lighting for Christmas and Thanksgiving holidays more at affordable prices. Contact us today!`,
      url: "https://apexlawncompany.com/outdoorlighting",
      siteName: "Apex Lawn Company",
      type: "website",
      locale: "en_US",
    },
    keywords: `outdoor lighting, outdoor lighting services, outdoor lighting installation, outdoor lighting maintenance, outdoor lighting repair, outdoor lighting replacement, outdoor lighting installation services, outdoor lighting maintenance services, outdoor lighting repair services, outdoor lighting replacement services, outdoor lighting services in ${citiesString}, outdoor lighting installation in ${citiesString}, outdoor lighting maintenance in ${citiesString}, outdoor lighting repair in ${citiesString}, outdoor lighting replacement in ${citiesString}`,
    robots: {
      index: true,
      follow: true,
      googleBot: "index, follow",
    },
  };
}


export default function OutDoorLighting() {
  const options = [
    { text: "Top", path: "top" },
    { text: "Locations", path: "locations" },
    { text: "Sanford", path: "sanford" },
    { text: "Setup An Appointment", path: "footer" },
    { text: "Bottom", path: "footer" },
  ];

  return (
    <>
      <ServicesOptions options={options} />
      <div className={`page-content`} style={{ minHeight: "600px" }}>
        <div id="top" className={styles.heading}>
          <p id="services-pricing">Services & Pricings</p>
        </div>

        <div className={`page-section ${styles.responivepage}`}>
          <div className="center-aligned">
            <p style={{ color: "red"}}>
              PAGE COMING SOON<br /> CALL/TEXT:
            </p>
            <a style={{  textDecoration:"underline" }} href="tel:9046792513">9</a>
            <a style={{   textDecoration:"underline" }} href="tel:9199394665">199394665</a>
            <p>FOR MORE INFOMATION ON PRODUCTS <br/>
            OR TRY ANOTHER PAGE</p>
          </div>
        </div>
      </div>
      <div id="footer" className={styles.footer}>
        <TransparentBtn>Setup an Appointment</TransparentBtn>
      </div>
    </>
  );
}
