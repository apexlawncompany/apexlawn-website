"use client";
import { useState, useRef } from "react";
import styles from "../../../app/landscape/landscape.module.css";
import TransparentBtn from "../TransparentBtn";
import Link from "next/link";
import MulchTab from "./mulchTab";
import StoneTab from "./stoneTab";

export default function MulchSection({ service }) {
  const [activeTab, setActiveTab] = useState("mulch");
  const scrollRef = useRef(null);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    if (scrollRef.current) {
      const index = tab === "stone" ? 1 : 0;
      scrollRef.current.scrollTo({
        left: scrollRef.current.clientWidth * index,
        behavior: "smooth",
      });
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const width = scrollRef.current.clientWidth;
      setActiveTab(scrollLeft > width / 2 ? "stone" : "mulch");
    }
  };

  return (
    <>
      {/* Tabs */}
      <div className={styles.tabHeader}>
        <button
          className={`${styles.tabButton} ${
            activeTab === "mulch" ? styles.activeTab : ""
          }`}
          onClick={() => handleTabClick("mulch")}
        >
          Mulch & Ground Cover
        </button>
        <div className={styles.tabDivider}></div>
        <button
          className={`${styles.tabButton} ${
            activeTab === "stone" ? styles.activeTab : ""
          }`}
          onClick={() => handleTabClick("stone")}
        >
          Stone
        </button>
      </div>

      {/* Scrollable Tab Content */}
      <div className={styles.scrollWrapper}>
        {activeTab === "mulch" && <div className={styles.rightFade} />}
        <div
          className={styles.horizontalScrollContainer}
          ref={scrollRef}
          onScroll={handleScroll}
        >
          {["mulch", "stone"].map((tabKey) => {
            const tabData = service.tabs[tabKey];
            return (
              <div key={tabKey} className={styles.slide}>
                {tabKey === "mulch" ? (
                  <MulchTab tabData={tabData} />
                ) : (
                  <StoneTab tabData={tabData} />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Call to Action Buttons */}
      <div className={styles.buttonGroup}>
        <TransparentBtn className={styles.blackTextButton}>
          Setup an Appointment
        </TransparentBtn>
        <Link href="/drone" style={{ width: "100%" }}>
          <TransparentBtn className={styles.blackTextButton}>
            Schedule a Drone Fly-by
          </TransparentBtn>
        </Link>
      </div>
    </>
  );
}
