import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../Components/Navbar/Navbar';
// eslint-disable-next-line import/no-unresolved
import SideBar from '../Components/Sidebar/Sidebar';

export const PageLayout = () => {
	return (
		<>
			<div>
				<div style={{display: 'flex'}}>
					<SideBar />
					<div style={{width: '100%'}}>
						<NavBar/>
						<Outlet/>
					</div>
				</div>
			</div>
		</>
	);
};