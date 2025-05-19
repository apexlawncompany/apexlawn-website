import styles from "./stone.module.css";
import TransparentBtn from "@/src/components/TransparentBtn";
import Image from "next/image";
import { stoneInfo } from "@/src/data/stoneData";

export default function Stone() {

  return (
    <>
      <div className={`page-content`}>
        <div
          id="about"
          className={styles.aboutBg}
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), transparent),url(${stoneInfo.about.image})`,
          }}
        >
          <div className={`page-section`}>
            <div className="center-aligned">
              <div
                style={{
                  display: "flex",
                  gap: "30px",
                  alignItems: "center",
                  padding: "15px 5%",
                }}
              >
                <div>
                  <p style={{ color: "white" }}>
                    {stoneInfo.about.description}
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
            <div className={styles.aboutStone}>
              <h2>{stoneInfo.size.title}</h2>
              <p>{stoneInfo.size.description}</p>

              <h2>{stoneInfo.types.title}</h2>
              <p>{stoneInfo.types.description}</p>

              <h2>{stoneInfo.underlayment.title}</h2>
              <p>{stoneInfo.underlayment.description}</p>
            </div>
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
