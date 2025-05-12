"use client";
import styles from "./contact.module.css";
import { useState } from "react";
import { usePathname } from "next/navigation";
import contactInfo from "@/src/data/contactInfo";

function Contact() {
  const [showDetails, setShowDetails] = useState(false);
  const pathname = usePathname();
  if (pathname !== "/") return null;

  // Google Ads conversion tracking function (for email click)
  const gtag_report_conversion = (url) => {
    const callback = function () {
      if (typeof url !== "undefined") {
        window.location = url;
      }
    };
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "conversion", {
        send_to: "AW-755275043/EleDCNndzuoZEKOqkugC", // <-- Replace with your actual conversion ID
        event_callback: callback,
      });
    } else {
      // Fallback if gtag isn't ready
      window.location = url;
    }
    return false;
  };

  return (
    <div className={styles.contact}>
      {showDetails ? (
        <p onClick={() => setShowDetails(false)}>
          Call or Text: {" "}
          <a
            href={`tel:${contactInfo.phoneNumber}`}
            // Optional: track phone clicks too
            onClick={() =>
              window.gtag?.("event", "conversion", {
                send_to: "AW-755275043", // optional conversion ID for phone
                event_category: "phone_click",
                value: contactInfo.phoneNumber,
              })
            }
          >
            {contactInfo.phoneNumber}
          </a>
          . Email:{" "}
          <a
            href={`mailto:${contactInfo.email}`}
            onClick={(e) => {
              e.preventDefault();
              gtag_report_conversion(`mailto:${contactInfo.email}`);
            }}
          >
            {contactInfo.email}
          </a>
        </p>
      ) : (
        <button onClick={() => setShowDetails(true)}>Contact</button>
      )}
    </div>
  );
}

export default Contact;
