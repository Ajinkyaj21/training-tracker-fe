import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import AdminIcon from '../../Assets/admin.svg';
import Dashboard from '../../Assets/dashboard-5486.svg';
import learningSpace from '../../Assets/learningSpace.png';
import traineesIcon from '../../Assets/trainees.svg';
import TrainingIcon from '../../Assets/training.svg';
import { windowDimensions } from '../../utils/windowElem';
import styles from './Sidebar.module.css';

const SideBar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const toggle = () => setIsOpen(!isOpen);
	const [windowWidth, setWindowWidth] = useState(0);

	useEffect(() => {
		setWindowWidth(windowDimensions.width);
	}, []);

	const menuItem = [{
		path: "/",
		name: "Dashboard",
		icon: Dashboard
	}, {
		path: "/training",
		name: "Training",
		icon: TrainingIcon
	}, {
		path: "/trainees",
		name: "Trainees",
		icon: traineesIcon
	}, {
		path: "/learningSpace",
		name: "LearningSpace",
		icon: learningSpace
	}, {
		path: "/admin",
		name: "Admin",
		icon: AdminIcon
	}];

	const Bars = () => {
		return (
			<div>
				<div onClick={toggle}>
					<div className={styles.bars}></div>
					<div className={styles.bars}></div>
					<div className={styles.bars}></div>
				</div>
			</div>
		);
	};

	return (
		<>
			<div className={styles.sidebarContainer} style={{width: !isOpen && '55px'}}>
				{windowWidth > 750 ?
					<div className={styles.topSection}>
						<Bars />
					</div>
					: <></>}
				<div>
					{menuItem.map((items, index) => (
						<NavLink to={items.path} key={index} className= {styles.link} activeclassName={styles.active}>
							<img className={styles.menuIcon} src={items.icon} alt={items.name}/>
							{isOpen ? <div className={styles.link_text}>{items.name}</div> : <></>}
						</NavLink>
					))}
				</div>
			</div>
		</>
	);
};

export default SideBar;

// import React, { useEffect, useState } from 'react';
// import { NavLink } from 'react-router-dom';
// import ReactTooltip from 'react-tooltip';
// import 'react-tooltip/dist/react-tooltip.css';
// import AdminIcon from '../../Assets/admin.svg';
// import DashboardIcon from '../../Assets/dashboard-5486.svg';
// import TraineesIcon from '../../Assets/trainees.svg';
// import TrainingIcon from '../../Assets/training.svg';
// import { windowDimensions } from '../../utils/windowElem';
// import styles from './Sidebar.module.css';

// const SideBar = () => {
// 	const [isOpen, setIsOpen] = useState(false);
// 	const toggle = () => setIsOpen(!isOpen);
// 	const [windowWidth, setWindowWidth] = useState(0);

// 	useEffect(() => {
// 		setWindowWidth(windowDimensions.width);
// 	}, []);

// 	const menuItem = [
// 		{ path: "/", name: "Dashboard", icon: DashboardIcon },
// 		{ path: "/training", name: "Training", icon: TrainingIcon },
// 		{ path: "/trainees", name: "Trainees", icon: TraineesIcon },
// 		{ path: "/admin", name: "Admin", icon: AdminIcon }
// 	];

// 	const Bars = () => {
// 		return (
// 			<div>
// 				<div onClick={toggle}>
// 					<div className={styles.bars}></div>
// 					<div className={styles.bars}></div>
// 					<div className={styles.bars}></div>
// 				</div>
// 			</div>
// 		);
// 	};

// 	return (
// 		<>
// 			<div className={styles.sidebarContainer} style={{ width: !isOpen && '55px' }}>
// 				{windowWidth > 750 ?
// 					<div className={styles.topSection}>
// 						<Bars />
// 					</div>
// 					: <></>}
// 				<div>
// 					{menuItem.map((items, index) => (
// 						<NavLink to={items.path} key={index} className={styles.link} activeclassName={styles.active}>
// 							<img
// 								className={styles.menuIcon}
// 								src={items.icon}
// 								alt={items.name}
// 								data-tip={items.name}
// 								data-for={`tooltip-${index}`}
// 							/>
// 							{isOpen ? <div className={styles.link_text}>{items.name}</div> : <></>}
// 							<ReactTooltip id={`tooltip-${index}`} place="top" effect="solid" />
// 						</NavLink>
// 					))}
// 				</div>
// 			</div>
// 		</>
// 	);
// };

// export default SideBar;
