import React from 'react';
import './MenuPost.css';
import DropDown from '../DropDown/DropDown';
const MenuPost = ({ showLatest, showPopular, isPopular }) => {
    return (
        <div className='menuPost'>
            <div className='menuButtons1'>
                <div className={`latest ${!isPopular ? 'active' : ''}`} onClick={showLatest}>Latest</div>
                <div className={`popular ${isPopular ? 'active' : ''}`} onClick={showPopular}>Popular</div>
            </div>
            <div className='menuButtons2'>
                <div className='show'>Show:</div>
                <div className='all'>All</div>
                <DropDown />
            </div>
        </div>
    );
}

export default MenuPost;
