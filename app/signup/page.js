"use client";
import { useState } from "react";
import styles from "./signup.module.css";
import { useRouter } from "next/navigation";

const SignupLogin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    first_name: "",
    last_name: "",
  });

  const router = useRouter();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDummySubmit = (e) => {
    e.preventDefault();
    alert("Signup form submitted (UI only)");
    setFormData({
      email: "",
      password: "",
      first_name: "",
      last_name: "",
    });
  };

  return (
    <>
      <div className={`page-content ${styles.authContainer}`}>
        <div className={styles.authBox}>
          <h2>Sign Up</h2>
          <form onSubmit={handleDummySubmit}>
            <input
              type="text"
              name="first_name"
              placeholder="First Name"
              value={formData.first_name}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="last_name"
              placeholder="Last Name"
              value={formData.last_name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <button type="submit">Sign Up</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignupLogin;