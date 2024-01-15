import React, { useState } from 'react';
import AddUser from '../../Components/AddUser/AddUser';
import AllocateTraining from '../../Layouts/AllocateTraining/AllocateTraining';
import style from "./Admin.module.css";

export default function Admin() {
	const [activeTab, setActiveTab] = useState("allocateTraining");
	const handleTabClick = (tabName) => {
		setActiveTab(tabName);
	};

	// Review: The admin page is not at all responsive. I dont see the use of bootstrap helping this.
	return (
		<div className='container'>
			<div className='row'>
				<div className='col mt-3'>
					<div className={style.btnDiv}>
						<button onClick={() => handleTabClick('allocateTraining')} className={style.AtBtn}>Allocate training </button>
						<button onClick={() => handleTabClick('addUser')} className={style.AtBtn} >Add User</button>
					</div>
					<div>
						<div className={style.tabContent}>
							{activeTab === 'allocateTraining' && <AllocateTraining />}
							{activeTab === 'addUser' && <AddUser />}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}