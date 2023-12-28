import React, { useState } from 'react';
import AddUser from '../../Components/AddUser/AddUser';
import AllocateTraining from '../../Components/AllocateTraining/AllocateTraining';
import stylesA from './Admin.module.css';

const Admin = () => {
	const [activeTab, setActiveTab] = useState("allocateTraining");
	const handleTabClick = (tabName) => {
		setActiveTab(tabName);
	};

	return (
		<div style={{display: "flex", width: "93.3%", flexDirection: "column", overflow: "auto"}}>
			<div className={ stylesA.tabNavigation}>
				<div onClick={() => handleTabClick('allocateTraining')} className={stylesA.rightBtn}>
          Allocate Training
				</div>
				<div onClick={() => handleTabClick('addUser')} className={stylesA.leftBtn}>
          Add User
				</div>
			</div>
			<div className={stylesA.tabContent}>
				{activeTab === 'allocateTraining' && (
					<AllocateTraining />
				)}
				{activeTab === 'addUser' && (
					<AddUser />
				)}
			</div>
			<hr/>
		</div>
	);
};

export default Admin;
