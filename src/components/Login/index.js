"use client";
import styles from "./login.module.css";
import { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { useRouter } from "next/navigation";

const Login = () => {

    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();


    return (
       <>
    <div  onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}>
       <div className={styles.loginBtn}> 
        <FaRegUser size={35} color="#ffffff"/>
        <span className={styles.loginText}>Login</span>
      </div>
      {isOpen && (
        <div className={styles.dropdown}>
          <ul>
            <li>
                <span>To access account</span>
                <button className={styles.loginSignupBtn} onClick={() => router.push("/signuplogin")}>Login / Signup</button> 
            </li>
                <li>Cart</li>
            <li>Catalogs</li>
          </ul>
        </div>
      )}
      </div>
       </>
    )
}


export default Login;