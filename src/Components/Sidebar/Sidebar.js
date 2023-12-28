import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../Assest/Logo.jpg';
import styles from './Sidebar.module.css';

const Sidebar = ({children}) => {

  const menuItems = [
    {
      path: "/",
      name: "Dashboard"
    },
    {
      path: "/training",
      name: "Traning"
    },
    {
      path: "/trainees",
      name: "Trainees"
    },
    {
      path: "/admin",
      name: "Admin"
    }
  ];
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
    return (
        <>
        <div style={{width: isOpen ? "200px" : "50px"}} className={styles.container}>
          <div className={styles.sidebar}>
            <div className={styles.top_section}>
              <img style={{display: isOpen ? "block" : "none"}} className={styles.logo} src={logo} />
              <div style={{marginLeft: isOpen ? "50px" : "0px"}} className={styles.bar}>
                <div onClick={toggle}>=</div>
              </div>
            </div>
            {
              menuItems.map((items, index) => (
                <NavLink to={items.path} key={index} className= {styles.link}
				activeclassName={styles.active}>
                  <div className={styles.icon}>{items.icon}</div>
                  <div style={{display: isOpen ? "block" : "none"}} className={styles.link_text}>{items.name}</div>

                </NavLink>
              )
            )}
            </div>
            <main>{children}</main>
        </div>
        </>
    );
};

export default Sidebar;
