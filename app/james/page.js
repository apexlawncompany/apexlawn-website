import Image from "next/image";
import Script from "next/script";
import styles from "./james.module.css";
import TransparentBtn from "@/src/components/TransparentBtn";
import jamesData from "@/src/data/jamesData";

export const metadata = {
  title: "James Kakkar - Founder & Owner of Apex Lawn Company | Apex, NC",
  description:
    "Meet James Kakkar, also known as Suvid James Kakkar, owner of Apex Lawn Company in Apex, NC. From overcoming a wrongful arrest to building a premier lawn care business in the Triangle Area, his story is one of resilience, faith, and community impact.",
  keywords: [
    "James Kakkar",
    "Suvid James Kakkar",
    "Suvid Kakkar",
    "Owner of Apex Lawn Company",
    "Apex Lawn Company",
    "lawn care Apex NC",
    "landscaping Apex NC",
    "Triangle Area lawn care",
  ],
  authors: [{ name: "James Kakkar" }],
  openGraph: {
    type: "profile",
    title: "James Kakkar - Apex Lawn Company",
    description:
      "Founder & Owner of Apex Lawn Company in Apex, NC. Read his inspiring story of resilience and success.",
    url: "https://apexlawncompany.com/james",
    siteName: "Apex Lawn Company",
    images: [
      {
        url: "https://apexlawncompany.com/images/james-portrait.jpg",
        width: 800,
        height: 600,
        alt: "Portrait of James Kakkar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "James Kakkar - Apex Lawn Company",
    description:
      "Meet James Kakkar, founder and owner of Apex Lawn Company in Apex, NC — a story of faith, resilience, and growth.",
    images: ["https://apexlawncompany.com/images/james-portrait.jpg"],
  },
};


export default function James() {
  // Separate the summary from the rest of the sections
  const summarySection = jamesData.find((item) => item.id === "summary");
  const otherSections = jamesData.filter((item) => item.id !== "summary");

  return (
    <>
      {/* Schema.org Person Structured Data */}
      <Script
        id="schema-james"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "James Kakkar",
            alternateName: ["Suvid James Kakkar", "Suvid Kakkar"],
            jobTitle: "Founder & Owner",
            worksFor: {
              "@type": "Organization",
              name: "Apex Lawn Company",
              url: "https://apexlawncompany.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Apex",
                addressRegion: "NC",
                postalCode: "27502",
                addressCountry: "US",
              },
            },
            url: "https://apexlawncompany.com/james",
            image: "https://apexlawncompany.com/images/james-portrait.jpg",
            sameAs: [
              "https://www.facebook.com/apexlawncompany",
              "https://www.instagram.com/apexlawncompany",
            ],
          }),
        }}
      />

      {/* Optional FAQ Schema for Enhanced Rich Results */}
      <Script
        id="faq-james"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Who is James Kakkar?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "James Kakkar, also known as Suvid James Kakkar, is the Founder and Owner of Apex Lawn Company in Apex, North Carolina.",
                },
              },
              {
                "@type": "Question",
                name: "What is Apex Lawn Company?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Apex Lawn Company is a leading lawn care and landscaping business serving the Triangle Area, founded and operated by James Kakkar.",
                },
              },
            ],
          }),
        }}
      />

      {/* Page Content */}
      <div className="page-content">
        <div className={`page-section ${styles.responivepage}`}>
          <div className="center-aligned">
            {/* Intro Section */}
            <div className={styles.intro}>
              <div className={styles.jamesImg}>
              {/* Portrait Image */}
                <Image
                  src="/assets/James-Portrait.jpg"
                  alt="Portrait of James Kakkar"
                  width={300}
                  height={400}
                  className={styles.image}
                />
              </div>
              <div className={styles.summaryDiv}>
                <h1 className={styles.heading}>
                James Kakkar - Owner of Apex Lawn Company
                </h1>
              {/* Summary Section */}
                {summarySection && (
                  <div className={styles.summaryText}>
                    {summarySection.content}
                  </div>
                )}
              </div>
            </div>
            {/* Dropdown Sections */}
            {otherSections.map((section, index) => (
              <div key={section.id} id={section.id} className={styles.section}>
                <details>
                  <summary className={styles.detailsSections}>
                    <Image
                      src="/utils/down.png"
                      alt=""
                      width={30}
                      height={30}
                      className={styles.icon}
                    />
                    {section.title}
                  </summary>

                  <div className={styles.detailsContent}>{section.content}</div>
                </details>

                {index < otherSections.length - 1 && (
                  <hr className={styles.divider} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Footer Call to Action */}
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
