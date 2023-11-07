import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import stylesAU from './AddUser.module.css';
import { addUser } from '../../Api';

const AddUser = () => {
  const [user_name, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [is_admin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  const handleAdminToggle = () => {
    setIsAdmin(!is_admin);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await addUser(email, password,user_name);

      console.log('Response Data:', response.data);

      navigate('/');
    } catch (error) {
      console.error('Error posting data:', error);
    }
  };
 
  return (
    <div className={stylesAU.mainContainer}>
      <form className={stylesAU.formContainer} onSubmit={handleSubmit}>
        <div className={stylesAU.baap} >
          <label>User Name:</label>
          <input className={stylesAU.input}
            type="text"
            value={user_name}
            onChange={(e) => setUserName(e.target.value)}
            required
          />
        </div>
        <div className={stylesAU.baap} >
          <label>Email:</label>
          <input className={stylesAU.input}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className={stylesAU.baap}>
          <label>Password:</label>
          <input className={stylesAU.input}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className={stylesAU.baap}>
          <label >Is Admin:</label>
          <input className={stylesAU.input}
            type="checkbox"
            checked={is_admin}
            onChange={handleAdminToggle}
          />
        </div>
        <button className={stylesAU.button} type="submit" >
          Add User
        </button>
      </form>
    </div>
  );
};

export default AddUser;
