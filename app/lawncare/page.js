import styles from "./lawncare.module.css";
import ServicesOptions from "@/src/components/ServicesAndPricings";
import CutPackages from "@/src/components/LawncareServices/cutPackages";
import FullPackages from "@/src/components/LawncareServices/fullPackages";
import Hedges from "@/src/components/LawncareServices/hedges";
import AeriationSeeding from "@/src/components/LawncareServices/aeriation";
import FertilizatinWeeding from "@/src/components/LawncareServices/fertilization";
import Maintenance from "@/src/components/LawncareServices/maintenance";
import TransparentBtn from "@/src/components/TransparentBtn";
import lawncareData from "@/src/data/lawncareData";

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
