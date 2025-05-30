"use client";
import styles from "./login.module.css";
import { FaRegUser } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useState, useRef, useEffect } from "react";

const Login = () => {
  const [isLoginClicked, setIsLoginClicked] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const router = useRouter();
  const dropdownRef = useRef(null);

  const handleRegistration = () => {
    setIsLoginClicked(false);
    setIsOpen(false);
    router.push("/signup");
  };

  const handleDummySubmit = (e) => {
    e.preventDefault();
    alert("Login form submitted");
  };

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
    setIsLoginClicked(false);
  };

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
        setIsLoginClicked(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      <div className={styles.pageBackground}>
        <div className={styles.loginBtn} onClick={toggleDropdown}>
          <FaRegUser size={35} color="#ffffff" />
          {/* <span className={styles.loginText}>Login</span> */}
        </div>

        {isOpen && (
          <div className={styles.dropdown} ref={dropdownRef}>
            {!isLoginClicked && (
              <ul className={styles.optionList}>
                <li
                  className={styles.optionItem}
                  onClick={() => setIsLoginClicked(true)}
                >
                  Login
                </li>
                <li className={styles.optionItem} onClick={handleRegistration}>
                  Registration
                </li>
              </ul>
            )}

            {isLoginClicked && (
              <div className={styles.loginContainer}>
                <form className={styles.loginForm} onSubmit={handleDummySubmit}>
                  <input
                    type="email"
                    placeholder="Email"
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                    required
                  />
                  <button type="submit">Login</button>
                </form>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Login;
