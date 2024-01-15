import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../Components/Navbar/Navbar';
import SideBar from '../Components/Sidebar/Sidebar';

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