import React, { useState } from 'react';
import AddUser from '../../Layouts/AddUser/AddUser';
import AllocateTraining from '../../Layouts/AllocateTraining/AllocateTraining';
import style from "./Admin.module.css";

export default function Admin() {
	const [activeTab, setActiveTab] = useState("allocateTraining");

	const handleTabClick = (tabName) => {
		setActiveTab(tabName);
	};

	return (
		<div className='container'>
			<div className='row'>
				<div className='col mt-3'>
					<div className={style.btnDiv}>
						<button
							onClick={() => handleTabClick('allocateTraining')}
							className={`${style.AtBtn} ${activeTab === 'allocateTraining' ? style.activeTab : ''}`}
							style={{ borderBottom: activeTab === 'allocateTraining' ? '2px solid #001f2b' : 'none' }}
						>
              Allocate Training
						</button>
						<button
							onClick={() => handleTabClick('addUser')}
							className={`${style.AtBtn} ${activeTab === 'addUser' ? style.activeTab : ''}`}
							style={{ borderBottom: activeTab === 'addUser' ? '2px solid #001f2b' : 'none' }}
						>
              Add User
						</button>
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
