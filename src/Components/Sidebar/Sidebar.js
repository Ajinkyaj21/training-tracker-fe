import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
// import Logo from '../../Assets/Logo.jpg';
import DashboardIcon from '../../Assets/dashboard.png';
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
		icon: DashboardIcon
	}, {
		path: "/training",
		name: "Training",
		icon: DashboardIcon
	}, {
		path: "/trainees",
		name: "Trainees",
		icon: DashboardIcon
	}, {
		path: "/admin",
		name: "Admin",
		icon: DashboardIcon
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
			<div className={styles.sidebarContainer} style={{width: !isOpen && '60px'}}>
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