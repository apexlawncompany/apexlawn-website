"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import styles from "../../../app/landscape/landscape.module.css";
import TransparentBtn from "../TransparentBtn";
import Link from "next/link";

export default function MulchSection({ service }) {
  const [activeTab, setActiveTab] = useState("mulch");
  const [selectedPattern, setSelectedPattern] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const scrollRef = useRef(null);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setSelectedPattern(null);
    setSelectedSize(null);

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
      if (scrollLeft > width / 2) {
        setActiveTab("stone");
      } else {
        setActiveTab("mulch");
      }
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

      <div className={styles.scrollWrapper}>
        {activeTab === "mulch" && <div className={styles.rightFade} />}
        {/* Horizontal Scroll Content */}
        <div
          className={styles.horizontalScrollContainer}
          ref={scrollRef}
          onScroll={handleScroll}
        >
          {["mulch", "stone"].map((tabKey) => {
            const tabData = service.tabs[tabKey];
            const isStoneTab = tabKey === "stone";

            return (
              <div key={tabKey} className={`${styles.slide}`}>
                <div className={styles.serviceImage}>
                  <Image
                    src={
                      isStoneTab && selectedPattern?.image
                        ? selectedPattern.image
                        : tabData.image
                    }
                    alt={tabData.title}
                    width={330}
                    height={247}
                    className={styles.image}
                    style={isStoneTab && selectedPattern?.image ? { objectFit: "cover" } : {objectFit: "contain"}}
                  />
                  <div className={styles.buttonGroup}>
                    <Link href={tabData.link} style={{ width: "100%" }}>
                      <TransparentBtn className={styles.blackTextButton}>
                        {tabKey === "mulch"
                          ? "See Mulch Options"
                          : "See Stone Options"}
                      </TransparentBtn>
                    </Link>
                  </div>
                </div>

                <div className={styles.serviceText}>
                  <h3>{tabData.title}</h3>

                  {isStoneTab ? (
                    <div>
                      <p className={styles.priceList}>
                        <strong>
                          {selectedPattern?.price ||
                            tabData.details?.[0]?.price}
                        </strong>
                      </p>
                      <p>{tabData.details[0].description}</p>
                    </div>
                  ) : (
                    <>
                      {tabData.details?.map((detail, index) => (
                        <div key={index}>
                          <p className={styles.priceList}>
                            <strong>{detail.price}</strong>
                          </p>
                          <p>{detail.description}</p>
                          <br />
                        </div>
                      ))}
                    </>
                  )}

                  {isStoneTab && tabData.patterns && (
                    <>
                      <div className={styles.selectorRow}>
                        {tabData.patterns.map((pattern, index) => (
                          <button
                            key={index}
                            className={`${styles.patternBtn} ${
                              selectedPattern?.name === pattern.name
                                ? styles.active
                                : ""
                            }`}
                            onClick={() => {
                              setSelectedPattern(pattern);
                              setSelectedSize(null);
                            }}
                          >
                            {pattern.name}
                          </button>
                        ))}
                      </div>

                      {selectedPattern && (
                        <div className={styles.selectorRow}>
                          {selectedPattern.sizes.map((size, index) => (
                            <button
                              key={index}
                              className={`${styles.sizeBtn} ${
                                selectedSize === size ? styles.active : ""
                              }`}
                              onClick={() => setSelectedSize(size)}
                            >
                              {size}
                            </button>
                          ))}
                        </div>
                      )}
                    </>
                  )}
                </div>
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
