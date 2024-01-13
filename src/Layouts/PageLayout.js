import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../Components/Navbar/Navbar';
// import SideBar from '../Components/SideBar/Sidebar';

export const PageLayout = () => {
	return (
		<>
			<NavBar/>
			<div className="container-fluid" >
				<div className="row">
					<div className="col m-0 p-0">
						<Outlet/>
					</div>
				</div>
			</div>
		</>
	);
};