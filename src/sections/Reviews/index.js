"use client";
import { useEffect } from "react";
import Image from "next/image";
import styles from "./reviews.module.css";

function Reviews() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.animate);
          } else {
            entry.target.classList.remove(styles.animate);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(
      `.${styles.googleReviews}, .${styles.certificate}`
    );
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className={styles.reviewSection}>
      <div className={styles.googleReviews}>
        <div className={styles.starRating}>
          {[1, 2, 3, 4].map((item) => (
            <Image
              key={"star-" + item}
              alt="apex lawn"
              src={`/star.png`}
              width={100}
              height={100}
              style={
                {
                  // Maintain aspect ratio
                }
              }
            />
          ))}
          <p className={styles.plusSymbol}>
            <span className={styles.plusHorizontal}></span>
            <span className={styles.plusVertical}></span>
          </p>
        </div>
        <div className={styles.googleRatingText}>Google Rating</div>
        <div className={styles.googleRatingDesc}>
          Jay X:
          <i>
            &quot;Suvid did a scalping service to my lawn. The price was very
            reasonable. In the end, I offered extra for his hard work. I highly
            recommend his services.&quot;
          </i>
        </div>
      </div>
      <div className={styles.certificate}>
        <p className={styles.reviewText}>
          Apex Lawn has been rated one of the best lawn care services in our
          area by Expertise. Check out the full review and our competitors
          <br />
          <a
            href="https://www.expertise.com/nc/cary/lawn-service"
            target="_blank"
            rel="noopener noreferrer"
          >
            here.
          </a>
        </p>
        <Image
          alt="apex lawn"
          src={`/expert-certificate.svg`}
          width={230}
          height={230}
          style={{
            transform: "scale(1.075)",
          }}
        />
      </div>
    </div>
  );
}

export default Reviews;
