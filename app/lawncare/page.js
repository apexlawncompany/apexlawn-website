import styles from "./lawncare.module.css";
import ServicesOptions from "@/src/components/ServicesAndPricings";
import CutPackages from "@/src/components/LawncareServices/cutPackages";
import FullPackages from "@/src/components/LawncareServices/fullPackages";
import Hedges from "@/src/components/LawncareServices/hedges";
import AeriationSeeding from "@/src/components/LawncareServices/aeriation";
import FertilizatinWeeding from "@/src/components/LawncareServices/fertilization";
import Maintenance from "@/src/components/LawncareServices/maintenance";
import TransparentBtn from "@/src/components/TransparentBtn";

export default function Lawncare() {

  const options = [
    { text: "Top", path: "services-pricing" },
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
    <div className={`page-content ${styles.services}`}>
      <ServicesOptions options={options} />

      <div id="services-pricing" className={styles.heading}>
        <p>Services & Pricings</p>
      </div>

      <div className="page-section">
        <div className="center-aligned">
          <div id="cut-packages">
            <CutPackages />
          </div>
          <hr className={styles.divider} />

          <div id="full-packages">
            <FullPackages />
          </div>
          <hr className={styles.divider} />

          <div id="hedges">
            <Hedges />
          </div>
          <hr className={styles.divider} />

          <div id="aeriation-seeding">
            <AeriationSeeding />
          </div>
          <hr className={styles.divider} />

          <div id="fertilization-weeding">
            <FertilizatinWeeding />
          </div>
          <hr className={styles.divider} />

          <div id="maintenance">
            <Maintenance />
          </div>
          <div style={{ height: 15 }}></div>
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
