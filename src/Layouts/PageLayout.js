import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../Components/NavBar/Navbar';
import SideBar from '../Components/SideBar/Sidebar';

export const PageLayout = () => {
	return (
		<>
			<div>
				<NavBar/>
				<div style={{display: 'flex'}}>
					<SideBar />
					<div style={{width: '100%'}}>
						<Outlet/>
					</div>
				</div>
			</div>
		</>
	);
};