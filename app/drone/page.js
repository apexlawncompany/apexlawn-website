"use client";
import React, { useState } from "react";
import styles from "./drone.module.css";
import Image from "next/image";
import validLocations from "@/src/data/locations";
import ReCAPTCHA from "react-google-recaptcha";

const DronePage = () => {
  // State management for form inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    address: "",
    day: "",
    details: "",
  });

  const [errors, setErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [captchaVerified, setCaptchaVerified] = useState(false);

  const reCaptchaSiteKey = "6LeIarEqAAAAADgWfRRxNEzrqdSGUCDx1RPEoRJV";

  // Handle input changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  // Validate form fields
  const validateForm = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Full Name is required";
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d+$/.test(formData.phone)) {
      newErrors.phone = "Phone number must contain only numbers";
    }
    if (!formData.location) newErrors.location = "Please select a location";
    return newErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0 && captchaVerified) {
      setFormSubmitted(true);

      // Push event to GTM
      if (window.dataLayer) {
        window.dataLayer.push({
          event: "form_submission",
          form_name: "Drone Flyby Form",
          submission_status: "success",
          form_data: {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            location: formData.location,
            request: formData.day,
            details: formData.details,
          },
        });
      }

      console.log("Form Submitted Successfully:", formData);
    }
  };

  // Handle reCAPTCHA verification
  const handleCaptchaChange = (token) => {
    if (token) {
      setCaptchaVerified(true);
    } else {
      setCaptchaVerified(false);
    }
  };

  return (
    <div className={`page-content ${styles.pageHeight}`}>
      <div className={`page-section ${styles.responivepage}`}>
        <div className="center-aligned">
          <div className={styles.formPage}>
            <div className={styles.formContainer}>
              {!formSubmitted ? (
                <form onSubmit={handleSubmit}>
                  {/* Full Name */}
                  <div>
                    <label htmlFor="name">Full Name *</label> <br />
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      autoComplete="off"
                      size={39}
                    />
                    {errors.name && (
                      <p
                        style={{
                          color: "red",
                          padding: "5px",
                          fontSize: "12px",
                        }}
                      >
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email">Email</label> <br />
                    <input
                      type="text"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      autoComplete="off"
                      size={39}
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone">Phone *</label> <br />
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      autoComplete="off"
                      size={39}
                    />
                    {errors.phone && (
                      <p
                        style={{
                          color: "red",
                          padding: "5px",
                          fontSize: "12px",
                        }}
                      >
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  {/* Location Dropdown */}
                  <div>
                    <label htmlFor="location">Service Location *</label> <br />
                    <select
                      id="location"
                      value={formData.location}
                      onChange={handleChange}
                    >
                      <option value="">Select Location</option>
                      {validLocations.map((location, index) => (
                        <option key={index} value={location}>
                          {location}
                        </option>
                      ))}
                    </select>
                    {errors.location && (
                      <p
                        style={{
                          color: "red",
                          padding: "5px",
                          fontSize: "12px",
                        }}
                      >
                        {errors.location}
                      </p>
                    )}
                  </div>

                  {/* Complete Address */}
                  <div>
                    <label htmlFor="address">Full Address</label> <br />
                    <input
                      type="text"
                      id="address"
                      value={formData.address}
                      onChange={handleChange}
                      autoComplete="off"
                      size={39}
                    />
                  </div>

                  {/* Day of service */}
                  <div>
                    <label htmlFor="day">Day Service Requested For</label>{" "}
                    <br />
                    <input
                      type="text"
                      id="day"
                      value={formData.day}
                      onChange={handleChange}
                      autoComplete="off"
                      size={39}
                    />
                  </div>

                  {/* Details */}
                  <div>
                    <label htmlFor="details">Service Details and Message</label>{" "}
                    <br />
                    <textarea
                      id="details"
                      rows={7}
                      cols={39}
                      value={formData.details}
                      onChange={handleChange}
                    />
                  </div>

                  {/* reCAPTCHA */}
                  <div className={styles.recaptcha}>
                    <ReCAPTCHA
                      sitekey={reCaptchaSiteKey}
                      onChange={handleCaptchaChange}
                    />
                  </div>

                  {/* Submit Button */}
                  <button type="submit" disabled={!captchaVerified}>
                    Submit
                  </button>
                </form>
              ) : (
                <div className={styles.thankYouMessage}>
                  <h2>Thanks for submitting!</h2>
                  <p>We will contact you shortly.</p>
                </div>
              )}
            </div>
            <div className={styles.imageContainer}>
              <Image
                alt="Service Area"
                src={`/assets/drone_area_map.jpg`}
                width={550}
                height={570}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DronePage;
