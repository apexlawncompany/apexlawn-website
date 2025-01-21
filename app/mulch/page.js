import styles from "./mulch.module.css";
import ServicesOptions from "@/src/components/ServicesAndPricings";
import TransparentBtn from "@/src/components/TransparentBtn";
import Image from "next/image";
import { mulchInfo } from "@/src/data/mulchData";

export default function Mulch() {
  const options = [
    { text: "Top", path: "top" },
    { text: "Mulching & Ground Cover", path: "about" },
    { text: "Section 1", path: "section1" },
    { text: "Section 2", path: "section2" },
    { text: "Section 3", path: "section3" },
    { text: "Section 4", path: "section4" },
    { text: "Section 5", path: "section5" },
    { text: "Section 6", path: "section6" },
    { text: "More", path: "footer" },
  ];

  return (
    <>
      <ServicesOptions options={options} />
      <div className={`page-content`}>
        <div id="top" className={styles.heading}>
          <p id="services-pricing">Services & Pricings</p>
        </div>
        <div
          id="about"
          className={styles.aboutBg}
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), transparent),url(${mulchInfo.about.image})`,
          }}
        >
          <div className={`page-section`}>
            <div className="center-aligned">
              <div
                style={{
                  display: "flex",
                  gap: "30px",
                  alignItems: "center",
                  padding: "15px",
                }}
              >
                <div>
                  <h1 style={{ color: "white", whiteSpace: "nowrap" }}>
                    {mulchInfo.about.title}
                  </h1>
                </div>
                <div>
                  <p style={{ color: "white" }}>
                    {mulchInfo.about.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`page-section ${styles.responivepage}`}>
          <div className="center-aligned">
            <TransparentBtn className={styles.blackTextButton}>
              Setup an Appointment
            </TransparentBtn>

            {/* Render additional sections dynamically */}
            <div className={styles.aboutMulch}>
              <h2>{mulchInfo.thickness.title}</h2>
              <p>{mulchInfo.thickness.description}</p>

              <h2>{mulchInfo.types.title}</h2>
              <p>{mulchInfo.types.description}</p>

              <h2>{mulchInfo.dyedVsUndyed.title}</h2>
              <p>{mulchInfo.dyedVsUndyed.description}</p>
            </div>

            {/* Render mulch product sections dynamically */}
            {mulchInfo.products.map((product, index) => (
              <div key={index}>
                <div
                  id={`section${index + 1}`}
                  className={`${styles.service} ${
                    index % 2 === 0 ? styles.reverse : ""
                  }`}
                >
                  <div className={styles.serviceText}>
                    <h3>{product.name}</h3>
                    <p className={styles.priceList}>
                      <strong>{product.price}</strong>
                    </p>
                    <p>{product.description}</p>
                  </div>
                  <div className={styles.serviceImage}>
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={480}
                      height={330}
                      className={styles.image}
                    />
                  </div>
                </div>

                {/* Conditionally render <hr /> after each product except the last one */}
                {index !== mulchInfo.products.length - 1 && (
                  <hr className={styles.divider} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div id="footer" className={styles.footer}>
        <div className="page-section">
          <div className="center-aligned">
            <TransparentBtn>Setup an Appointment</TransparentBtn>
          </div>
        </div>
      </div>
    </>
  );
}
