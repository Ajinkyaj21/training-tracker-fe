import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import styles from "./Login.module.css";
import Navbar from "../../Components/Navbar/Navbar";
import { login } from "../../Api";

const Login = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await login(email, password);
      console.log("Response Data:", response);

      const token = response.token;

      localStorage.setItem("token", token);
      Cookies.set("token", token);

      setIsLoggedIn(true);
      navigate("/");
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  return (
    <div className={styles.main}>
      {/* <Navbar /> */}
      <div className={styles.mainContainer}>
        
        <div className={styles.leftForm}>
          <div className={styles.Qute}>Flair Minds-Training Tracker Platform</div>
        </div>

        <div className={styles.rightFrom}>
          <div className={styles.logo}>Welcome </div>
          <div className={styles.form}>
            <form onSubmit={handleSubmit} className={styles.formMain1}>
              <div className={styles.formMain}>
                <label className={styles.label} htmlFor="email">
                  Email:
                </label>
                <input
                  className={styles.input}
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className={styles.formMain}>
                <label className={styles.label} htmlFor="password">
                  Password:
                </label>
                <input
                  className={styles.input}
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button className={styles.loginButton} type="submit">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
