import React from 'react';
import { useNavigate } from "react-router-dom";
// import Logo from "../../Assets/Logo.jpg";
import style from "./Navbar.module.css";
// import Cookies from "js-cookie";
// import HiddenSideBar from '../Hidden_SideBar/HiddenSideBar';

export default function NavBar() {
	const navigate = useNavigate();
	const logout = () => {
		const confirmLogout = window.confirm("Are you sure you want to log out?");
		if (confirmLogout) {
			localStorage.removeItem('token');
			navigate("/login");
		}
	};

	return (
		<div className={style.main}>
			<div className={style.navBg}>
				{/* <HiddenSideBar></HiddenSideBar> */}
				{/* <img className={style.img} src={Logo} alt="flairminds"/> */}
				<button className={`${style.logout} btn btn-link`} onClick={logout}>Logout</button>
			</div>
		</div>
	);
}
