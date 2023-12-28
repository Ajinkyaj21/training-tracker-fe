import React from 'react';
import {Outlet} from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Sidebar from './Components/Sidebar/Sidebar';

const PageLayout = () => {
  return (
    <>
    <div style={{width: "100%", height: "100%"}}>
    <Navbar/>
    <div style={{width: "100%", height: "93.3%", display: "flex", flexDirection: "row"}}>
      <Sidebar/>
      <Outlet/>
    </div>
    </div>
    </>
  );
};

export default PageLayout;
