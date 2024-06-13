import React from 'react'
import './SideMenu.css'
import logo from '../../elements/FXStreet premium-1.png'

const SideMenu = () => {
    return (
        <div className="sidemenu">
            <img src={logo} alt="Logo" className="logo" />
            <button>Trade Ideas</button>
            <button>Strategies</button>
            <button>Signals</button>
            <button>Events</button>
            <button>Recordings</button>
        </div>);
}

export default SideMenu