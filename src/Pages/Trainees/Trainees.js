import React, { useState } from 'react';
import ActiveTrainee from '../../Components/ActiveTrainee/ActiveTrainee';
import OldTrainee from '../../Components/OldTrainee/OldTrainee';
import stylesT from "./Trainees.module.css";

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
        <input className={stylesT.input}
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
          <OldTrainee searchQuery={searchQuery}/>
        )}
    </div>
  );
};

export default Trainees;
