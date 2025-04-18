"use client";
import React, { useState } from "react";
import styles from "./appointment.module.css";
import Image from "next/image";
import ReCAPTCHA from "react-google-recaptcha";
import { sendMail } from "@/src/utils";
import { useRouter } from "next/navigation";

const AppointmentForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    request: "",
    details: "",
  });
  const [errors, setErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [captchaVerified, setCaptchaVerified] = useState(false);

  const reCaptchaSiteKey = "6LeIarEqAAAAADgWfRRxNEzrqdSGUCDx1RPEoRJV"; // Replace with your actual site key

  // Handle input changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  // Format Phone Numbers
  const formatPhoneNumber = (value) => {
    const cleaned = value.replace(/\D/g, "").slice(0, 10); // Remove non-numeric and limit to 10 digits
    if (cleaned.length < 4) return cleaned;
    if (cleaned.length < 7)
      return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3)}`;
    return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(
      6
    )}`;
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
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ""))) {
      newErrors.phone = "Phone number must be 10 digits";
    }
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
      sendMail(formData);
      console.log("Form Submitted Successfully:", formData);
      router.push("/thankyou");
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
    <div className={`page-content`}>
      <div className={`page-section ${styles.responivepage}`}>
        <div className="center-aligned">
          <div className={styles.formPage}>
            <div className={styles.formContainer}>
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
                      size={39}
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
                      size={39}
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
                      value={formatPhoneNumber(formData.phone)}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      autoComplete="off"
                      size={39}
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
                      size={39}
                    />
                  </div>

                  {/* Details */}
                  <div>
                    <label htmlFor="details">Details and Message</label> <br />
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
            </div>
            <div className={styles.imageContainer}>
              <Image
                alt="apex lawn"
                src={`/header-background.jpg`}
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
