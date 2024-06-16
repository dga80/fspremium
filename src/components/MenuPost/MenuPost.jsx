import React from 'react';
import './MenuPost.css';
import downArrow from '../../elements/Icon dropdown.png';

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
                <div className='downArrow'>
                    <img src={downArrow} alt="downArrow" className='downArrow' />
                </div>
            </div>
        </div>
    );
}

export default MenuPost;
