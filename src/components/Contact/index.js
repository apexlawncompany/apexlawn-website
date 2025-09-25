"use client";
import styles from "./contact.module.css";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import contactInfo from "@/src/data/contactInfo";
import { getCookie } from "@/src/cookies";
import { sendPhoneClickMail } from "@/src/phoneClickUtils";

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

  const onPhoneClick = (phone) => {
    // Pushing GTM event
    window.gtag?.("event", "conversion", {
      send_to: "AW-755275043",
      event_category: "phone_click",
      value: phone,
      source: getCookie("lead_source") || "website",
    });

    // Sending backend email
    sendPhoneClickMail(phone);
  };

  return (
    <div className={styles.contact}>
      {showDetails ? (
        <p onClick={() => setShowDetails(false)}>
          Call or Text:{" "}
          <a
            href={`tel:${contactInfo.phoneNumber}`}
            onClick={() => onPhoneClick(contactInfo.phoneNumber)}
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
