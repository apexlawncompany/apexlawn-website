"use client";
import React, { useMemo, useRef, useState } from "react";
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
    images: [],
  });
  const [errors, setErrors] = useState({});
  const inputRef = useRef();
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

  const imagePreviews = useMemo(() => {
    return formData.images.map((file) => {
      const type = file.type;
      const url = URL.createObjectURL(file);
      return { file, type, url, id: crypto.randomUUID() };
    });
  }, [formData.images]);

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
                  {errors.name && <p className={styles.error}>{errors.name}</p>}
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
                    style={{ width: "100%" }}
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

                {/* Image Previews with Remove Button */}
                {imagePreviews.length > 0 && (
                  <div className={styles.imageList}>
                    {imagePreviews.map((item, index) => (
                      <div key={index} className={styles.imageItem}>
                        {item.type.startsWith("image/") ? (
                          <img
                            src={item.url}
                            width={100}
                            height={100}
                            style={{ objectFit: "cover", borderRadius: "8px" }}
                          />
                        ) : item.type === "application/pdf" ? (
                          <a
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            📄 PDF File
                          </a>
                        ) : item.type.startsWith("video/") ? (
                          <video width={100} height={100} style={{ objectFit: "cover", borderRadius: "8px" }}>
                            <source src={item.url} type={item.type} />
                            Your browser does not support the video tag.
                          </video>
                        ) : (
                          <p>Unsupported File</p>
                        )}
                        <button
                          className={styles.removeBtn}
                          onClick={() => {
                            // Remove from formData.images too
                            const updatedImages = [...formData.images];
                            updatedImages.splice(index, 1);
                            setFormData((prev) => ({
                              ...prev,
                              images: updatedImages,
                            }));
                          }}
                        >
                          ✕
                        </button>
                      </div>
                    ))}
                  </div>
                )}

                {/* File Upload */}
                <div
                 className={styles.formActions}
                >
                  {/* Submit Button */}
                  <button
                    type="submit"
                    className={styles.submitButton}
                    disabled={!captchaVerified}
                  >
                    Submit
                  </button>

                  {/* Upload Section (Icon + Label) */}
                  <div
                    className={styles.uploadSection}
                    onClick={() => inputRef.current?.click()}
                  >
                    <Image
                      src={`/utils/upload.png`}
                      alt="Upload Icon"
                      className={styles.uploadIcon}
                      width={30}
                      height={30}
                    />
                    <label htmlFor="image" className={styles.uploadLabel}>
                      Upload Images
                    </label>
                    <input
                      type="file"
                      id="image"
                      accept="image/*,application/pdf,video/*"
                      capture="environment"
                      multiple
                      ref={inputRef}
                      style={{ display: "none" }}
                      onChange={(e) => {
                        console.log("-->", e.target.files);
                        const selectedFiles = Array.from(e.target.files || []);

                        const maxFileSizeMB = 10; // for example, 10 MB
                        const validFiles = selectedFiles.filter((file) => {
                          if (file.size > maxFileSizeMB * 1024 * 1024) {
                            alert(
                              `${file.name} is too large. Max allowed is ${maxFileSizeMB}MB`
                            );
                            return false;
                          }
                          return true;
                        });

                        setFormData((prev) => ({
                          ...prev,
                          images: [...prev.images, ...validFiles],
                        }));
                      }}
                    />
                  </div>
                </div>
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
