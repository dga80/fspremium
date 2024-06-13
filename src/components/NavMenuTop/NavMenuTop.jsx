import React from 'react'
import './NavMenuTop.css'
import { ReactComponent as ProfileIcon } from '../../elements/user-regular.svg'
const NavMenuTop = () => {
  return (
    <nav className="navmenutop">
      <div className="nav-buttons">
        <button className="nav-button">help</button>
        <div className="divider"></div>
        <button className="nav-button">notification</button>
        <div className="divider"></div>
        <button className="nav-button profile-button">
          <ProfileIcon className="profile-icon-svg" />
          <span>Profile</span>
        </button>
      </div>
    </nav>
  );
}

export default NavMenuTop