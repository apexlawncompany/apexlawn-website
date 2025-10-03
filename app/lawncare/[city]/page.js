import Image from "next/image";
import { cityBlurbs } from "@/src/data/cityBlurbs";
import styles from "./city.module.css";
import CitySchema from "@/src/components/citySchema";

export async function generateMetadata({ params }) {
  const { city } = params;
  return {
    title: `Lawncare Services in ${city}, NC | Apex Lawn Company`,
    description: `Get expert lawn care in ${city}, NC. Apex Lawn Company provides mowing, irrigation, drainage, snow removal, and landscaping with 5+ years of Triangle experience.`,
    alternates: {
      canonical: "https://apexlawncompany.com/lawncare",
    },
    openGraph: {
      title: `Lawncare Services in ${city}, NC | Apex Lawn Company`,
      description: `Lawn care, irrigation, drainage, snow removal, and landscaping in ${city}, NC.`,
      url: `https://apexlawncompany.com/lawncare/${city}`,
      siteName: "Apex Lawn Company",
      type: "website",
      locale: "en_US",
    },
    robots: { index: true, follow: true },
  };
}

export default function LawncareCity({ params }) {
  const { city } = params;
  const blurbs = cityBlurbs[city] || [];
  const randomBlurb =
    blurbs.length > 0 ? blurbs[Math.floor(Math.random() * blurbs.length)] : "";

  return (
    <div className={`page-content ${styles.main}`}>
      <div className={`page-section ${styles.responivepage}`}>
        <div className="center-aligned">
          <div className={styles.twoColumn}>
            {/* Left Side */}
            <div className={styles.leftCol}>
              <h1>Lawncare Services in {city}, NC</h1>
              <Image
                src="/assets/aeriation.JPG" // replace with your real image path
                alt={`Lawncare in ${city}, NC`}
                width={430}
                height={380}
                className={styles.cityImage}
              />
            </div>

            {/* Right Side */}
            <div className={styles.rightCol}>
              <p>
                <strong>{randomBlurb}</strong>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Inject city-specific schema for SEO */}
      <CitySchema city={city} />
    </div>
  );
}
