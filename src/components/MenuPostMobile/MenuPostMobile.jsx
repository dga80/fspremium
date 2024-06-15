import React from 'react'
import './MenuPostMobile.css'
import { ReactComponent as FilterMobile } from '../../elements/FilterMobile.svg'

const MenuPost = () => {
    return (

        <div className='menuPost'>
            <div className='menuButtons1'>
                <div className='latest'>Latest</div>
                <div className='popular'>Popular</div>
            </div>
            <div className='menuButtons2'>
                <div className='filterMobile'>
                    <FilterMobile className='filterMobile-svg' />
                </div>
            </div>
        </div>
    )
}
export default MenuPost;