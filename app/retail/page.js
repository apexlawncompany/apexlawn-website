import styles from "./retail.module.css";
import ServicesOptions from "@/src/components/ServicesAndPricings";
import TransparentBtn from "@/src/components/TransparentBtn";

export default function More() {
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

        <div className={`page-section ${styles.responivepage}`}>
          <div className="center-aligned">
            <p style={{ color: "red"}}>
              PAGE COMING SOON<br /> CALL/TEXT:
            </p>
            <a style={{  textDecoration:"underline" }} href="tel:9046792513">9</a>
            <a style={{   textDecoration:"underline" }} href="tel:9199394665">199394665</a>
            <p>FOR MORE INFOMATION ON PRODUCTS <br/>
            OR TRY ANOTHER PAGE</p>
          </div>
        </div>
      </div>
      <div id="footer" className={styles.footer}>
        <TransparentBtn>Setup an Appointment</TransparentBtn>
      </div>
    </>
  );
}
