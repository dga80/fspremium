import React from 'react';
import './Post.css';

const Post = () => {
    return (
        <div className='Post'>
            <div className='headPost'>
                <div className='feedContainer'>
                    <div className='feedRoute'>
                        <div className='feedIcon'>icon</div>
                        <div className='feed'>Feed</div>
                        <div className='arrow'>--</div>
                        <div className='subfeed'>Subfeed</div>
                    </div>

                    <div className='timeContainer'>
                        <div className='timeIcon'>icon</div>
                        <div className='time'>Sep 06, 07:45</div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Post;
