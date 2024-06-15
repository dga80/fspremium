import React from 'react'
import '../../assets/styles.css'
import './NavMenuTopMobile.css'
import logoMobile from '../../elements/FXStreet premium.svg'
import { ReactComponent as ProfileIcon2 } from '../../elements/user-regular.svg'
import { ReactComponent as Burger } from '../../elements/burger.svg'

const NavMenuTopMobile = () => {
    return (
        <div className='NavMenuTopMobile'>
            <div className='logoMobile'>
                <img src={logoMobile} alt="logoMobile" className='logoMobile' />
            </div>
            <div className='rightItems'>
                <div className='profileMobile'>
                    <ProfileIcon2 className="profile-icon-svg2" />
                </div>
                <div className='burger'>
                    <Burger className="burger" />
                </div>
            </div>
        </div>
    )
}

export default NavMenuTopMobile