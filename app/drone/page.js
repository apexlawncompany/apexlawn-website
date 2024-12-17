"use client";
import React, { useState } from "react";
import styles from "./drone.module.css";
import Image from "next/image";
import { basePath } from "@/next.config";
import validLocations from "@/src/data/locations";

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

    if (Object.keys(newErrors).length === 0) {
      setFormSubmitted(true);
      console.log("Form Submitted Successfully:", formData);
    }
  };

  return (
    <div className={styles.droneContainer}>
      {!formSubmitted ? (
        <div className={styles.formContainer}>
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
                size={40}
              />
              {errors.name && (
                <p style={{ color: "red", padding: "5px", fontSize: "12px" }}>
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
                size={40}
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
                size={40}
              />
              {errors.phone && (
                <p style={{ color: "red", padding: "5px", fontSize: "12px" }}>
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
                style={{
                  padding: "5px",
                  margin: "5px",
                  width: "309px",
                  height: "30px",
                }}
              >
                <option value="">Select Location</option>
                {validLocations.map((location, index) => (
                  <option key={index} value={location}>
                    {location}
                  </option>
                ))}
              </select>
              {errors.location && (
                <p style={{ color: "red", padding: "5px", fontSize: "12px" }}>
                  {errors.location}
                </p>
              )}
            </div>

            {/* Complete Address */}
            <div>
              <label htmlFor="name">Full Address</label> <br />
              <input
                type="text"
                id="address"
                value={formData.address}
                onChange={handleChange}
                autoComplete="off"
                size={40}
              />
            </div>

            {/* Day of service */}
            <div>
              <label htmlFor="name">Day Service Requested For</label> <br />
              <input
                type="text"
                id="day"
                value={formData.day}
                onChange={handleChange}
                autoComplete="off"
                size={40}
              />
            </div>

            {/* Details */}
            <div>
              <label htmlFor="details">Service Details and Message </label>{" "}
              <br />
              <textarea
                id="details"
                rows={7}
                cols={40}
                value={formData.details}
                onChange={handleChange}
              />
            </div>

            {/* Submit Button */}
            <button type="submit">Submit</button>
          </form>
        </div>
      ) : (
        <div className={styles.thankYouMessage}>
          <h2>Thanks for submitting!</h2>
          <p>We will contact you shortly.</p>
        </div>
      )}

      {/* Image Section */}
      <div className={styles.imageContainer}>
        <Image
          alt="Service Area"
          src={`${basePath}/assets/drone_area_map.jpg`}
          width={550}
          height={570}
        />
      </div>
    </div>
  );
};

export default DronePage;