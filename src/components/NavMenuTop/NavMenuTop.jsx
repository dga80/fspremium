import React from 'react'
import './NavMenuTop.css'
const NavMenuTop = () => {
  return (
    <nav className="navmenutop">
      <div className="nav-buttons">
        <button className="nav-button">help</button>
        <div className="divider"></div>
        <button className="nav-button">notification</button>
        <div className="divider"></div>
        <button className="nav-button profile-button">
          Profile
        </button>
      </div>
    </nav>
  );
}

export default NavMenuTop