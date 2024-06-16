import React from 'react';
import './MenuPostMobile.css';
// import { ReactComponent as FilterMobile } from '../../elements/FilterMobile.svg';

import DropDownMobile from '../DropDownMobile/DropDownMobile';
const MenuPost = ({ showLatest, showPopular, isPopular }) => {
    return (
        <div className='menuPost'>
            <div className='menuButtons1'>
                <div className={`latest ${!isPopular ? 'active' : ''}`} onClick={showLatest}>Latest</div>
                <div className={`popular ${isPopular ? 'active' : ''}`} onClick={showPopular}>Popular</div>
            </div>
            <div className='menuButtons2'>
                <div className='filterMobile'>
                    <DropDownMobile />
                </div>
            </div>
        </div>
    );
}

export default MenuPost;
