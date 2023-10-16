import React, { useState } from 'react';
import stylesT from "./Trainees.module.css"
import ActiveTrainee from '../ActiveTrainee/ActiveTrainee';
import OldTrainee from '../OldTrainee/OldTrainee';



const Trainees = () => {
  const [activeTab, setActiveTab] = useState("active");
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div>
      <div className={stylesT.tabNavigation}>
        <button onClick={() => handleTabClick('active')} className={stylesT.rightBtn}>
          Active Trainees
        </button>
        <button onClick={() => handleTabClick('old')} className={stylesT.leftBtn}>
          Old Trainees
        </button>
      </div>
      <div className={stylesT.tabContent}>
        {activeTab === 'active' && (
          <ActiveTrainee />
        )}
        {activeTab === 'old' && (
          <OldTrainee />
        )}
      </div>
    </div>
  );
};

export default Trainees;
