"use client";
import { useState } from "react";
import styles from "./contact.module.css";
function Contact() {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <div className={styles.contact}>
      {showDetails ? (
        <p onClick={() => setShowDetails(false)}>
          Call or Text: <a href="tel:9046792513">9</a>
          <a href="tel:9199394665">199394665</a> Email:{" "}
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

export default Contact;
