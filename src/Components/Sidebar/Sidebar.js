import React from 'react';
import { Link } from 'react-router-dom'; 
import styles from './Sidebar.module.css';
// import Dashboard from '../Dashboard/Dashboard';

const Sidebar = () => {
    return (
        <>
        <div className={styles.sidebar}>
          <ul>
            <li><Link to="/" >Dashboard</Link></li>
            <li><Link to="/training">Training</Link></li>
            <li><Link to="/trainees">Trainees</Link></li>
            <li><Link to="/admin">Admin</Link></li>
          </ul>
        </div>
        </>
    );
}; 

export default Sidebar;
 
