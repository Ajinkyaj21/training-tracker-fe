import React, { useState } from 'react';
import stylesT from "./Trainees.module.css"
import ActiveTrainee from '../../Components/ActiveTrainee/ActiveTrainee';
import OldTrainee from '../../Components/OldTrainee/OldTrainee';



const Trainees = () => {
  const [activeTab, setActiveTab] = useState("active");
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };
  const [searchQuery, setSearchQuery] = useState(""); 

  return (
    <div className={stylesT.parentTrainee}>
      <div className={stylesT.tabNavigation}>
        <div className={stylesT.buttons}>
        <button onClick={() => handleTabClick('active')} className={stylesT.leftBtn}>
          Active
        </button>
        <button onClick={() => handleTabClick('old')} className={stylesT.rightBtn}>
          Old
        </button>
        </div>
        <input
        type="text"
        placeholder="Search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      </div>
        {activeTab === 'active' && (
          <ActiveTrainee searchQuery={searchQuery} />
        )}
        {activeTab === 'old' && (
          <OldTrainee />
        )}
    </div>
  );
};

export default Trainees;
