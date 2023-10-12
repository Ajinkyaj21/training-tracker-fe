import React, { useState } from 'react';
import AllocateTraining from '../AllocateTraining/AllocateTraining';
import stylesA from './Admin.module.css'; 
import AddUser from '../AddUser/AddUser';

const Admin = () => {
  const [activeTab, setActiveTab] = useState("allocateTraining");
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div>
      <div className={stylesA.tabNavigation}>
        <button onClick={() => handleTabClick('allocateTraining')} className={stylesA.rightBtn}>
          Allocate Training
        </button>
        <button onClick={() => handleTabClick('addUser')} className={stylesA.leftBtn}>
          Add User
        </button>
      </div>
      <div className={stylesA.tabContent}>
        {activeTab === 'allocateTraining' && (
          <AllocateTraining />
        )}
        {activeTab === 'addUser' && (
          <AddUser />
        )}
      </div>
    </div>
  );
};

export default Admin;
