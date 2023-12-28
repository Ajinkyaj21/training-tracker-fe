import Cookies from "js-cookie";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../Api";
import styles from "./Login.module.css";

const Login = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await login(email, password);
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
      <div className={styles.main_container}>
        <div className={styles.left_form}>
          <div className={styles.qute}>Flair Minds-Training Tracker Platform</div>
        </div>

        <div className={styles.right_from}>
          <div className={styles.logo}>Welcome </div>
          <div className={styles.form}>
            <form onSubmit={handleSubmit} className={styles.form_main1}>
              <div className={styles.form_main}>
                <input
                  className={styles.input}
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)} placeholder="Email"
                  required
                />
              </div>
              <div className={styles.form_main}>
                <input
                  className={styles.input}
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)} placeholder="Password"
                  required
                />
              </div>
              <button className={styles.login_button} type="submit">
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
