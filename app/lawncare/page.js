import AeriationSeeding from "@/src/components/Lawncare-services/aeriation";
import styles from "./page.module.css";
import CutPackages from "@/src/components/Lawncare-services/cutPackages";
import FullPackages from "@/src/components/Lawncare-services/fullPackages";
import Hedges from "@/src/components/Lawncare-services/hedges";
import FertilizatinWeeding from "@/src/components/Lawncare-services/fertilization";
import Maintenance from "@/src/components/Lawncare-services/maintenance";

export default function Lawncare() {
  return (
    <div className={`page-content ${styles.services}`}>
      <div className={styles.greenbar}></div>
      <div className="page-section">
        <div className="center-aligned">
          <CutPackages />
          <hr className={styles.divider} />
          <div style={{ height: 12 }}></div>
          <FullPackages />
          <hr className={styles.divider} />
          <div style={{ height: 12 }}></div>
          <Hedges />
          <hr className={styles.divider} />
          <div style={{ height: 12 }}></div>
          <AeriationSeeding />
          <hr className={styles.divider} />
          <FertilizatinWeeding />
          <hr className={styles.divider} />
          <Maintenance />
          <div style={{ height: 12 }}></div>
        </div>
      </div>
    </div>
  );
}
