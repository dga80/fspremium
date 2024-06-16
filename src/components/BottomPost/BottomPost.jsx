import React, { useState } from 'react';
import './BottomPost.css';
import like1 from '../../elements/Like-passive.png';
import like2 from '../../elements/Like-hover.png';
import like3 from '../../elements/Like-active.png';
import save1 from '../../elements/Save-passive.png';
import save2 from '../../elements/Save-hover.png';
import save3 from '../../elements/Save-active.png';
// import filter from '../../elements/filter.svg';

const BottomPost = () => {
    const [likeActive, setLikeActive] = useState(false);
    const [saveActive, setSaveActive] = useState(false);

    const handleLikeClick = () => {
        setLikeActive(!likeActive);
    };

    const handleSaveClick = () => {
        setSaveActive(!saveActive);
    };

    return (
        <div className='likeSaveFilter'>
            <div className='like' onClick={handleLikeClick}>
                <img
                    src={likeActive ? like3 : like1}
                    alt="like"
                    className='like-img'
                    onMouseOver={(e) => e.currentTarget.src = like2}
                    onMouseOut={(e) => e.currentTarget.src = likeActive ? like3 : like1}
                />
            </div>
            <div className='save' onClick={handleSaveClick}>
                <img
                    src={saveActive ? save3 : save1}
                    alt="save"
                    className='save-img'
                    onMouseOver={(e) => e.currentTarget.src = save2}
                    onMouseOut={(e) => e.currentTarget.src = saveActive ? save3 : save1}
                />
            </div>
            <div className='filter'>
                {/* <img src={filter} alt="filter" className='filter-img' /> */}
            </div>
        </div>
    );
};

export default BottomPost;
