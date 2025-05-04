"use client";
import styles from "./login.module.css";
import { FaRegUser } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { getSession, signOut } from "next-auth/react";
import { useEffect, useState } from "react";
import { signIn } from "next-auth/react";

import { ToastContainer, toast, Bounce } from "react-toastify";

const Login = () => {
    const[isLoginClicked, setIsLoginClicked] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [session, setSession] = useState(null);
    const [error, setError] = useState(null);
    const router = useRouter();

    const [formData, setFormData] = useState({
      email: "",
      password: "",
  });

    useEffect(() => {
      getSession().then((session) => {
        setSession(session);
      });
    }, []);

    const hadleLoginClick = () => {
      setIsOpen(true);
      setIsLoginClicked(true);
    }

    const handleSubmit = async (e) => {
      e.preventDefault();
      const result = await signIn("credentials", {
        email: formData.email,
        password: formData.password,
        redirect: false,
      });
      if (result.error) {
        toast.error('Invalid email or password', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
          });
          setError(result.error);
      } else {
          window.location.href = "/";
          setError(null);
      }
    }

    const handleRegistration = () => {
      setIsLoginClicked(false);
      setIsOpen(false);
      router.push("/signuplogin");
    }
    return (
       <>
    <div onMouseEnter={() => setIsOpen(true) }
      onMouseLeave={() => setIsOpen(false)} className={styles.pageBackground}>
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
                    {
                      !isLoginClicked && (
                        <>
                        <button className={styles.loginSignupBtn} onClick={hadleLoginClick}>Login</button> <br />
                    <button className={styles.loginSignupBtn} onClick={handleRegistration}>Registration</button>
                        </>
                      )
                    }

              {isLoginClicked && (
                      <div className={styles.loginContainer}>
                        <form className={styles.loginForm} onSubmit={handleSubmit}>
                          <input type="email" placeholder="Email" onChange={(e)=>setFormData({...formData, email: e.target.value})} />
                          <input type="password" placeholder="Password"  onChange={(e)=>setFormData({...formData, password: e.target.value})}/>
                          <button type="submit">Login</button>
                        </form>

                      </div>
                )}
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

      <ToastContainer
      position="top-right"
      autoClose={5000}/>
      </div>
       </>
    )
}


export default Login;