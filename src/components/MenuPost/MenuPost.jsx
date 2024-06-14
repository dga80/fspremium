import React from 'react'
import './MenuPost.css'
import downArrow from '../../elements/Icon dropdown.png'

const MenuPost = () => {
    return (

        <div className='menuPost'>
            <div className='menuButtons1'>
                <div className='latest'>Latest</div>
                <div className='popular'>Popular</div>
            </div>
            <div className='menuButtons2'>
                <div className='show'>Show:</div>
                <div className='all'>All</div>
                <div className='downArrow'>
                    <img src={downArrow} alt="downArrow" className='downArrow' />
                </div>
            </div>
        </div>
    )
}
export default MenuPost;