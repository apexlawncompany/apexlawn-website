import Reviews from "@/src/sections/Reviews";
import styles from "./page.module.css";
import Details from "@/src/sections/Details";
import TransparentBtn from "@/src/components/TransparentBtn";
import Portfolio from "@/src/sections/Portfolio";
import StarRating from "@/src/components/StarRating";
import Head from "next/head";

export async function generateMetadata({ searchParams }) {

  return {
    // title: `Best Lawn Services in Apex| Apex Lawn Company`,
    // description: `Get the best lawn services in Apex. Mulch, sod installation, soil delivery, and more at affordable prices. Contact us today!`,
    alternates: {
      canonical: "https://apexlawncompany.com",
    },
  };
}

export default function Home() {
  const businessData = {
    name: "Apex Lawn Company",
    rating: 5,
    reviewCount: 75,
  };
  const structuredData = {
    "@context": "https://apexlawncompany.com/",
    "@type": "LocalBusiness",
    name: businessData.name,
    address: {
      "@type": "PostalAddress",
      streetAddress: " 501 W Williams St Box 1012",
      addressLocality: "Apex",
      addressRegion: "NC",
      postalCode: "27502",
      addressCountry: "US",
    },
    telephone: "+1 919-939-4665",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: businessData.rating,
      reviewCount: businessData.reviewCount,
    },
  };

  return (
    <div
      className={`page-content ${styles.homepage}`}
      style={{ backgroundImage: `url(/home-background.jpg)` }}
    >
    <StarRating rating={businessData.rating} reviewCount={businessData.reviewCount} />

      <div className={styles.greenbar}></div>
      <div className={`page-section ${styles.responivepage}`}>
        <div className="center-aligned">
          {/* <div className={styles.carouselSection}>Carouse section</div> */}
          <Portfolio />
          <Reviews />
          <Details />
          <TransparentBtn>Setup an Appointment</TransparentBtn>
          <div style={{ height: 12 }}></div>
        </div>
      </div>
    </div>
  );
}
