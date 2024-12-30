"use client";
import { useState } from "react";
import styles from "./contactdetails.module.css";
function ContactDetails() {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div
      className={`${styles.contact} ${showDetails ? styles.fullDetails : ""} `}
    >
      {showDetails ? (
        <p onClick={() => setShowDetails(false)}>
          Call or Text: <a href="tel:9046792513">904-679-2513</a>
          <a href="tel:9199394665">919-939-4665</a> Email:{" "}
          <a href="mailto:client@apexlawncompany.com">
            client@apexlawncompany.com
          </a>
        </p>
      ) : (
        <button onClick={() => setShowDetails(true)}>Contact</button>
      )}
    </div>
  );
}

export default ContactDetails;
