import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import axios from 'axios';
import styles from './Login.module.css';
import Navbar from '../Navbar/Navbar';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://c736-103-167-184-195.ngrok-free.app/user/login', {
        email,
        password,
      });

      console.log('Response Data:', response.data);

      navigate('/');
    } catch (error) {
      console.error('Error posting data:', error);
    }
  };

  return (
    <div>
      <Navbar />
      <form onSubmit={handleSubmit} className={styles.formMain}>
        <div className={styles.formMain}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className={styles.formMain}>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className={styles.formMain}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;