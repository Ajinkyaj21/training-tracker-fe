import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

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
      const response = await axios.post('https://c736-103-167-184-195.ngrok-free.app/user/register', {
        user_name,email, 
        password,is_admin

      });

      console.log('Response Data:', response.data);

      navigate('/');
    } catch (error) {
      console.error('Error posting data:', error);
    }

    // console.log('User Name:', user_name);
    // console.log('Email:', email);
    // console.log('Password:', password);
    // console.log('Is Admin:', isAdmin);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>User Name:</label>
          <input
            type="text"
            value={user_name}
            onChange={(e) => setUserName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Is Admin:</label>
          <input
            type="checkbox"
            checked={is_admin}
            onChange={handleAdminToggle}
          />
        </div>
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default AddUser;
