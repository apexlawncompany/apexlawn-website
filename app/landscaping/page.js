import styles from "./landscaping.module.css";
import ServicesOptions from "@/src/components/ServicesAndPricings";
import TransparentBtn from "@/src/components/TransparentBtn";
import landscapingdata from "@/src/data/landScapingData";

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

        <div className={`page-section ${styles.responivepage}`}>
          <div className="center-aligned">
            {landscapingdata.map((service, index) => (
              <div id={service.id} key={service.id}>
                {service.component && <service.component service={service} />}
                {/* Conditionally render divider, skip for last component */}
                {index < landscapingdata.length - 1 && (
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
