"use client";
import { useState } from "react";
import styles from "./signuplogin.module.css";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { signUpUser } from "../services/service";
import { ToastContainer, toast, Bounce } from "react-toastify";
const SignupLogin = () => {
    const [isLoginScreen, setIsLoginScreen] = useState(false);
    const [error, setError] = useState(null);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
       first_name: "",
       last_name: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(isLoginScreen){
          try {
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
                setIsLoggedIn(true);
            }
        } catch (error) {
            setError(error.message);
            setIsLoginScreen(false);
        }

      }else{
        try {
          const result = await signUpUser(formData.email, formData.password, formData.first_name, formData.last_name);
          if(result.status === 200 && result.message === "User created successfully"){
            toast.success('User created successfully', {
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
            setError(null);
            setIsLoginScreen(true);

            setFormData({
              email: "",
              password: "",
              first_name: "",
              last_name: "",
            });
          } else if(result.status === 500 && result.error.includes('duplicate')){
            toast.error('User email already exists', {
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
            setIsLoginScreen(false);
            
          }
        } catch (error) {
          setError(error.message);
        }
      }
        
    }
    return (
       <>
      
       <div className={`page-content ${styles.authContainer}`}>
       <div className={styles.authBox}>
        <h2>{isLoginScreen ? "Login" : "Sign Up"}</h2>
        <form onSubmit={handleSubmit}>
          {!isLoginScreen && (
            <>
            <input
              type="text"
              name="first_name"
              placeholder="Full Name"
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
            </>
          )}
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
          <button type="submit">{isLoginScreen ? "Login" : "Sign Up"}</button>
        </form>
       
        <p onClick={() => setIsLoginScreen(!isLoginScreen)} className= {styles.toggleText}>
          {!isLoginScreen
            ? "Don't have an account? Sign Up"
            : "Already have an account? Login"}
        </p>
      </div>
      <ToastContainer
      position="top-right"
      autoClose={5000}/>
    </div>
       </>
    )
}

export default SignupLogin;