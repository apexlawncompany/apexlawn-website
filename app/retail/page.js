import styles from "./retail.module.css";
import ServicesOptions from "@/src/components/ServicesAndPricings";
import TransparentBtn from "@/src/components/TransparentBtn";

export default function Retail() {
  const options = [
    { text: "Top", path: "top" },
    { text: "Locations", path: "locations" },
    { text: "Sanford", path: "sanford" },
    { text: "Setup An Appointment", path: "footer" },
    { text: "Bottom", path: "footer" },
  ];

  return (
    <>
      <ServicesOptions options={options} />
      <div className={`page-content`} style={{ minHeight: "600px" }}>
        <div id="top" className={styles.heading}>
          <p id="services-pricing">Services & Pricings</p>
        </div>

        <div className="page-section">
          <div className="center-aligned">
            <p style={{ color: "red", fontSize: "50px" }}>Page Coming Soon !</p>
          </div>
        </div>
      </div>
      <div id="footer" className={styles.footer}>
        <TransparentBtn>Setup an Appointment</TransparentBtn>
      </div>
    </>
  );
}
