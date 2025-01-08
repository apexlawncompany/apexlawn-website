"use client";
import React, { useState } from "react";
import styles from "./appointment.module.css";
import Image from "next/image";
import { basePath } from "@/next.config";

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    request: "",
    details: "",
  });
  const [errors, setErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  // Validate form fields
  const validateForm = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email is not valid";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d+$/.test(formData.phone)) {
      newErrors.phone = "Phone number must contain only numbers";
    }
    return newErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    setErrors(newErrors);
  
    if (Object.keys(newErrors).length === 0) {
      setFormSubmitted(true);
  
      // Push event to GTM
      if (window.dataLayer) {
        window.dataLayer.push({
          event: "form_submission",
          form_name: "Appointment Form",
          submission_status: "success",
          form_data: {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            request: formData.request,
            details: formData.details,
          },
        });
      }
  
      console.log("Form Submitted Successfully:", formData);
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
                  {/* Name */}
                  <div>
                    <label htmlFor="name">Name *</label> <br />
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      autoComplete="off"
                      size={40}
                    />
                    {errors.name && (
                      <p className={styles.error}>{errors.name}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email">Email *</label> <br />
                    <input
                      type="text"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      autoComplete="off"
                      size={40}
                    />
                    {errors.email && (
                      <p className={styles.error}>{errors.email}</p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone">Phone *</label> <br />
                    <input
                      type="text"
                      id="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      autoComplete="off"
                      size={40}
                    />
                    {errors.phone && (
                      <p className={styles.error}>{errors.phone}</p>
                    )}
                  </div>

                  {/* Day of Service */}
                  <div>
                    <label htmlFor="request">Day Service Requested For</label>{" "}
                    <br />
                    <input
                      type="text"
                      id="request"
                      value={formData.request}
                      onChange={handleChange}
                      autoComplete="off"
                      size={40}
                    />
                  </div>

                  {/* Details */}
                  <div>
                    <label htmlFor="details">Details and Message</label> <br />
                    <textarea
                      id="details"
                      rows={7}
                      cols={35}
                      value={formData.details}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Submit Button */}
                  <button type="submit">Submit</button>
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
                alt="apex lawn"
                src={`${basePath}/header-background.jpg`}
                width={550}
                height={575}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentForm;
