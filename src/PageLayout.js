import React from 'react'
import Sidebar from './Components/Sidebar/Sidebar'
import {Outlet} from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'

const PageLayout = () => {
  return (
    <div>
      <Navbar/>  
      <Sidebar/>
      <Outlet/>
    </div>
  )
}

export default PageLayout
