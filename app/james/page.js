"use client";

import styles from "./james.module.css";
import TransparentBtn from "@/src/components/TransparentBtn";
import jamesData from "@/src/data/jamesData";
import Image from "next/image";

export default function James() {
  // Separate the summary from the rest of the sections
  const summarySection = jamesData.find((item) => item.id === "summary");
  const otherSections = jamesData.filter((item) => item.id !== "summary");

  return (
    <div className="page-content">
      <div className={`page-section ${styles.responivepage}`}>
        <div className="center-aligned">
          <div className={`${styles.intro}`}>
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

      <div id="footer" className={styles.footer}>
        <div className="page-section">
          <div className="center-aligned">
            <TransparentBtn>Setup an Appointment</TransparentBtn>
          </div>
        </div>
      </div>
    </div>
  );
}
