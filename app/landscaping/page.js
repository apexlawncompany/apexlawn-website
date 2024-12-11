import styles from "./landscaping.module.css";
import ServicesOptions from "@/src/components/ServicesAndPricings";
import TransparentBtn from "@/src/components/TransparentBtn";
import MulchSection from "@/src/components/LandScapingServices/mulchSection";
import SoddingSeedingSection from "@/src/components/LandScapingServices/soddingSeedingSection";
import DrainageSection from "@/src/components/LandScapingServices/drainageSection";
import SoilSection from "@/src/components/LandScapingServices/soilSection";
import HardScapingSection from "@/src/components/LandScapingServices/hardScapingSection";

export default function LandScaping() {
  const options = [
    { text: "Top", path: "top" },
    { text: "Services And Pricings", path: "services-pricing" },
    { text: "Mulching & Ground Cover ", path: "mulch" },
    { text: "Sodding & Seeding", path: "sodding" },
    { text: "Drainage", path: "drainage" },
    { text: "Soil", path: "soil" },
    { text: "Hardscaping", path: "hardScaping" },
    { text: "Setup An Appointment", path: "footer" },
    { text: "Bottom", path: "footer" },
  ];

  return (
    <>
      <ServicesOptions options={options} />
      <div className={`page-content`}>
        <div id="top" className={styles.heading}>
          <p id="services-pricing">Services & Pricings</p>
        </div>

        <div className="page-section">
          <div className="center-aligned">
            <div id="mulch">
              <MulchSection />
            </div>
            <hr className={styles.divider} />

            <div id="sodding">
              <SoddingSeedingSection />
            </div>
            <hr className={styles.divider} />

            <div id="drainage">
              <DrainageSection />
            </div>
            <hr className={styles.divider} />

            <div id="soil">
              <SoilSection />
            </div>
            <hr className={styles.divider} />

            <div id="hardScaping">
              <HardScapingSection />
            </div>
            <div style={{ height: 20 }}></div>
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
