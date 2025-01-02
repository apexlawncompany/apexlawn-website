"use client";
import styles from "./contact.module.css";
import { useState } from "react";
import { usePathname } from "next/navigation";
function Contact() {
  const [showDetails, setShowDetails] = useState(false);
  const pathname = usePathname();
  if (pathname !== "/") {
    return;
  }
  const trackClick = (eventType, value) => {
    // Push event to the dataLayer
    if (typeof window !== "undefined" && window.dataLayer) {
      window.dataLayer.push({
        event: eventType, // Matches the event name in your GTM tag
        target: value, // Passes additional data (e.g., phone or email)
      });
    }
  };
  return (
    <div className={styles.contact}>
      {showDetails ? (
        <p onClick={() => setShowDetails(false)}>
          Call or Text:
          <a
            href="tel:9199394665"
            onClick={() => trackClick("phone_click", "9199394665")}
          >
            9199394665
          </a>.
           Email:{" "}
          <a
            href="mailto:client@apexlawncompany.com"
            onClick={() =>
              trackClick("email_click", "client@apexlawncompany.com")
            }
          >
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
