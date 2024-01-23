import React from 'react';
import { useNavigate } from "react-router-dom";
// import Logo from "../../Assets/Logo.jpg";
import { Components } from '..';
import LogoutIcon from '../../Assets/logout.png';
import style from "./Navbar.module.css";

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

	const logoutBtnStyle = {
		width: '60px',
		boxShadow: 'none'
	};

	/* Review: Navbar is not properly responsive at body level.
		This is getting rendered at page level. Please check and correct.*/
	return (
		<div className={style.rootContainer}>
			{/* <img src={Logo} className={style.logo}></img> */}
			<div className={style.navContainer}>

				{/* <img className={style.img} src={Logo} alt="flairminds"/> */}
				{/* Review: Logout button is showing only in some views, not in all views */}
				{/* Review: I don't see requirement of bootstrap here */}
				<Components.CustomButton onClick={logout} customStyle={logoutBtnStyle} >
					<img src={LogoutIcon} className={style.logoutImg} alt='logout'/>
				</Components.CustomButton>
			</div>
		</div>
	);
}
