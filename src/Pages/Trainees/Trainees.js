import React, { useState } from 'react';
import { Components } from "../../Components";
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

	return (
		// <div className={stylesT.parentTrainee}>
		// 	<div className={stylesT.tabNavigation}>
		// 		<div className={stylesT.buttons}>
		// 			<div className={stylesT.active}><Components.CustomButton
		//  onClick={() => handleTabClick('active')}> Active </Components.CustomButton></div>
		// 			<div className={stylesT.old}>
		// <Components.CustomButton onClick={() => handleTabClick('old')} > Old </Components.CustomButton></div>
		// 		</div>
		// 		<input className={stylesT.input} type="text" placeholder="Search" value={searchQuery}
		// 			onChange={(e) => setSearchQuery(e.target.value)}
		// 		/>
		// 	</div>
		// 	{activeTab === 'active' && <ActiveTrainee searchQuery={searchQuery} />}
		// 	{activeTab === 'old' && <OldTrainee searchQuery={searchQuery}/>}
		// </div>
		<>
			<div className={stylesT.mainContainer}>
				<div className={stylesT.topContainer}>
					<div className={stylesT.buttonContainer}>
						<div className={stylesT.active}>
							<Components.CustomButton onClick={() => handleTabClick('active')}> Active </Components.CustomButton>
						</div>
						<div className={stylesT.old}>
							<Components.CustomButton onClick={() => handleTabClick('old')} > Old </Components.CustomButton>
						</div>
					</div>
					<div className={stylesT.serachContainer}>
						<input className={stylesT.input} type="text" placeholder="Search" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}/>
						{/* <Input type="text" value={searchQuery}
						onChange={(e) => setSearchQuery(e.target.value)}/> */}
					</div>
				</div>
				<div className={stylesT.infoContainer}>

				</div>
				{activeTab === 'active' && <ActiveTrainee searchQuery={searchQuery} />}
				{activeTab === 'old' && <OldTrainee searchQuery={searchQuery}/>}
			</div>
		</>
	);
};

export default Trainees;
