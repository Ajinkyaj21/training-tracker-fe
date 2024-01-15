import React from 'react';
import { useNavigate } from "react-router-dom";
// import Logo from "../../Assets/Logo.jpg";
import LogoutIcon from '../../Assets/logout.png';
import Button from '../Button/CustomButton';
import style from "./Navbar.module.css";
// import Cookies from "js-cookie";
// import HiddenSideBar from '../Hidden_SideBar/HiddenSideBar';

export default function NavBar() {
	const navigate = useNavigate();
	const logout = () => {
		const confirmLogout = window.confirm("Are you sure you want to log out?");
		if (confirmLogout) {
			// Review: Use value from constants file
			localStorage.removeItem('token');
			navigate("/login");
		}
	};

	/* Review: Navbar is not properly responsive at body level.
		This is getting rendered at page level. Please check and correct.*/
	return (
		<div className={style.rootContainer}>
			<div className={style.navContainer}>
				{/* <img className={style.img} src={Logo} alt="flairminds"/> */}
				{/* Review: Logout button is showing only in some views, not in all views */}
				{/* Review: I don't see requirement of bootstrap here */}
				<Button onClick={logout} widthParameter={'60px'}>
					<img src={LogoutIcon} className={style.logoutImg} alt='logout'/>
				</Button>
			</div>
		</div>
	);
}
