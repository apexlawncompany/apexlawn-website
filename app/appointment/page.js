"use client";
import React from "react";
import styles from "./appointment.module.css";
import Image from "next/image";
import { basePath } from "@/next.config";

const AppointmentForm = () => {
  return (
    <div className={`page-content ${styles.pageHeight}`}>
      <div className={`page-section ${styles.responivepage}`}>
        <div className="center-aligned">
          <div className={styles.formPage}>
            <div className={styles.formContainer}>
              <form>
                <div>
                  <label htmlFor="name">Name</label> <br />
                  <input type="text" id="name" autoComplete="off" size={40} />
                </div>
                <div>
                  <label htmlFor="email">Email</label> <br />
                  <input type="text" id="email" autoComplete="off" size={40} />
                </div>
                <div>
                  <label htmlFor="phone">Phone</label> <br />
                  <input type="text" id="phone" autoComplete="off" size={40} />
                </div>
                <div>
                  <label htmlFor="request">Day Service Requested For</label>{" "}
                  <br />
                  <input
                    type="text"
                    id="request"
                    autoComplete="off"
                    size={40}
                  />
                </div>
                <div>
                  <label htmlFor="details">Details and Message </label> <br />
                  <textarea rows={7} cols={35} />
                </div>
                <button>Submit</button>
              </form>
            </div>
            <div className={styles.imageContainer}>
              <Image
                alt="apex lawn"
                src={`${basePath}/header-background.jpg`}
                width={550}
                height={575}
                // sizes='1000vw'
                style={{}}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentForm;
