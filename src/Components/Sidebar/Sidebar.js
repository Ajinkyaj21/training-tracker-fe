import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import AdminIcon from '../../Assets/admin.svg';
import Dashboard from '../../Assets/dashboard-5486.svg';
import learning from '../../Assets/Learning_.png';
// import learningSpace from '../../Assets/learningSpace.png';
import traineesIcon from '../../Assets/trainees.svg';
import TrainingIcon from '../../Assets/training.svg';
import { isloggedInAdmin } from '../../utils/Utils';
import { windowDimensions } from '../../utils/windowElem';
import styles from './Sidebar.module.css';

const SideBar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const toggle = () => setIsOpen(!isOpen);
	const [windowWidth, setWindowWidth] = useState(0);
	const isAdmin = isloggedInAdmin();

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
		name: "Learning Space",
		icon: learning
	},
	isAdmin ? {
		path: "/admin",
		name: "Admin",
		icon: AdminIcon
	} : {}];

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
