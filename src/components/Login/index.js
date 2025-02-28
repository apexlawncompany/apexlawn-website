"use client";
import styles from "./login.module.css";
import { FaRegUser } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { getSession, signOut } from "next-auth/react";
import { useEffect, useState } from "react";

const Login = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [session, setSession] = useState(null);
    const router = useRouter();

    useEffect(() => {
      getSession().then((session) => {
        setSession(session);
      });
    }, []);

    return (
       <>
    <div  onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}>
       <div className={styles.loginBtn}> 
        <FaRegUser size={35} color="#ffffff"/>
        <span className={styles.loginText}>
          {session ? `Welcome ${session.user.name}` : "Login"}
        </span>
      </div>
      {isOpen && (
        <div className={styles.dropdown}>
          <ul>
            <li>
                <span>To access account</span>
             <ul>
              {
                session ? (
                  <li>
                    <button className={styles.loginSignupBtn} onClick={() => signOut()}>Logout</button>
                  </li>
                ) : (
                  <li>
                    <button className={styles.loginSignupBtn} onClick={() => router.push("/signuplogin")}>Login / Signup</button>
                  </li>
                )
              }
            </ul>
            </li>
            <li>Catalogs</li>
            <li>Cart</li>
          </ul>
        </div>
      )}
      </div>
       </>
    )
}


export default Login;