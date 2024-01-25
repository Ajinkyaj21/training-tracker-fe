import React, { useState } from 'react';
// import { Components } from "../../Components";
// import { Input } from '../../Components/Input/Input';
import ActiveTrainee from '../../Layouts/ActiveTrainee/ActiveTrainee';
import OldTrainee from '../../Layouts/OldTrainee/OldTrainee';
import stylesT from "./Trainees.module.css";

const Trainees = () => {
	const [activeTab, setActiveTab] = useState("active");
	const handleTabClick = (tabName) => {
		setActiveTab(tabName);
	};
	const [searchQuery, setSearchQuery] = useState("");
	// const [activeTab, setActiveTab] = useState("allocateTraining");

	// const handleTabClick = (tabName) => {
	// 	setActiveTab(tabName);
	// };

	return (
		<>
			<div className={stylesT.mainContainer}>
				<div className={stylesT.topContainer}>
					<div className={stylesT.buttonContainer}>
						<div className={stylesT.active}>
							<button
								onClick={() => handleTabClick('active')}
								className={`${stylesT.AtBtn} ${activeTab === 'active' ? stylesT.activeTab : ''}`}
								style={{ borderBottom: activeTab === 'active' ? '2px solid #001f2b' : 'none' }}
							>
				Active
							</button>
						</div>
						<button
							onClick={() => handleTabClick('old')}
							className={`${stylesT.AtBtn} ${activeTab === 'old' ? stylesT.activeTab : ''}`}
							style={{ borderBottom: activeTab === 'old' ? '2px solid #001f2b' : 'none' }}
						>
				Old
						</button>

					</div>
				</div>
				<div className={stylesT.serachContainer}>
					<input className={stylesT.input} type="text" placeholder="Search" value={searchQuery}
						onChange={(e) => setSearchQuery(e.target.value)}/>

				</div>
			</div>
			<div className={stylesT.infoContainer}>
				{activeTab === 'active' && <ActiveTrainee searchQuery={searchQuery} />}
				{activeTab === 'old' && <OldTrainee searchQuery={searchQuery}/>}
			</div>

		</>
	);
};

export default Trainees;
