import React from 'react'
import './Layout.css'
import NavMenuTop from '../NavMenuTop/NavMenuTop'
import SideMenu from '../SideMenu/SideMenu'
import Dashboard from '../Dashboard/Dashboard'
import AdsSideBar from '../AdsSideBar/AdsSideBar'


const Layout = () => {
    return (
        <div className='Layout'>
            <div className='container'>
                <div className='SideMenu'>
                    <SideMenu />
                </div>
                <div className='NavMenuTop'>
                    <NavMenuTop />
                </div>
                <div className='DashBoard'>
                    <Dashboard />
                </div>
                <div className='AdsSideBar'>
                    <AdsSideBar />
                </div>
            </div>
        </div>
    )
}

export default Layout