"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import footerStyles from "./footer.module.css";

function Footer() {
  const [view, setView] = useState("default");
  const footerRef = useRef(null);
  const [fade, setFade] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showAddress, setShowAddress] = useState(false);
  const [currentHourText, setCurrentHourText] = useState(0);
  const [hoursTexts, setHoursTexts] = useState([]);

  // Detect screen size
  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 550);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Set hours dynamically based on Eastern Time
  useEffect(() => {
    const now = new Date();
    // Convert to Eastern Time
    const ncTime = new Date(
      now.toLocaleString("en-US", { timeZone: "America/New_York" })
    );
    const day = ncTime.getDay(); // 0 = Sunday, 6 = Saturday

    let todayHours = "";

    if (day === 0) {
      todayHours = "Closed Today";
    } else if (day >= 1 && day <= 5) {
      todayHours = "Open Till 7PM Today";
    } else if (day === 6) {
      todayHours = "Open Till 5PM Today";
    }

    // Add supporting info
    setHoursTexts([
      todayHours,
      "M-F 7am-7pm | Sat 12-5",
      "Next Holiday: Thanksgiving",
    ]);
  }, []);

  // Cycle through texts if mobile
  useEffect(() => {
    if (view === "default" && isMobile && hoursTexts.length > 0) {
      const interval = setInterval(() => {
        setFade(true);
        setTimeout(() => {
          setCurrentHourText((prev) => (prev + 1) % hoursTexts.length);
          setFade(false);
        }, 500);
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [view, isMobile, hoursTexts.length]);

  // Handle click outside any textable footer content
  useEffect(() => {
    function handleClickOutside(e) {
      const clickedInsideFooter = footerRef.current?.contains(e.target);
      const isClickable =
        e.target.closest("a") ||
        e.target.closest("button") ||
        e.target.closest(`.${footerStyles.linkBtn}`);

      // Reset to default if click is inside footer but not on clickable link/button
      if (clickedInsideFooter && !isClickable) {
        setView("default");
      }
    }

    if (view !== "default") {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [view]);

  return (
    <div className={`page-section ${footerStyles.footer}`} ref={footerRef}>
      <div className={`center-aligned ${footerStyles.footerWrap}`}>
        {view === "default" && (
          <>
            <p
              className={`${footerStyles.footerText} ${footerStyles.footerTextMax}`}
            >
              © ® 2025
            </p>

            {isMobile ? (
              <p
                className={`${footerStyles.footerText} text-center ${
                  fade ? footerStyles.fade : ""
                }`}
              >
                {hoursTexts[currentHourText] || ""}
              </p>
            ) : (
              <p className={`${footerStyles.footerText} text-center`}>
                501 W Williams St. P.O. Box 1012, Apex, NC 27502
              </p>
            )}

            <p
              className={`${footerStyles.footerText} ${footerStyles.footerTextMax} text-right`}
            >
              <span
                className={footerStyles.linkBtn}
                onClick={() => setView("about")}
              >
                About
              </span>
            </p>
          </>
        )}

        {view === "about" && (
          <>
            {isMobile ? (
              <p className={footerStyles.footerText}>
                {showAddress ? (
                  "501 W Williams St. P.O. Box 1012, Apex, NC 27502"
                ) : (
                  <span
                    className={footerStyles.linkBtn}
                    onClick={() => setShowAddress(true)}
                  >
                    Address
                  </span>
                )}
              </p>
            ) : (
              <p className={footerStyles.footerText}>
                <span
                  className={footerStyles.linkBtn}
                  onClick={() => setView("hours")}
                >
                  Hours & Location
                </span>
              </p>
            )}

            <p className={`${footerStyles.footerText} text-center`}>
              <Link className={footerStyles.linkBtn} href="/licenses">
                Licenses & Insurance
              </Link>
            </p>

            <p
              className={`${footerStyles.footerText} ${footerStyles.footerTextMax} text-right`}
            >
              <Link className={footerStyles.linkBtn} href="/policy">
                Policy & Legal
              </Link>
            </p>
          </>
        )}

        {view === "hours" && hoursTexts.length > 0 && (
          <>
            <p className={`${footerStyles.footerText}`}>{hoursTexts[0]}</p>
            <p className={`${footerStyles.footerText} text-center`}>
              {hoursTexts[1]}
            </p>
            <p className={`${footerStyles.footerText} text-right`}>
              {hoursTexts[2]}
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default Footer;
