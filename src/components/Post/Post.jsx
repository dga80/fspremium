import React from 'react';
import './Post.css';
import '../../assets/styles.css'
import logoTitle from '../../elements/Avatar.png';
import searchIcon from '../../elements/File search.png';
import arrow from '../../elements/Arrow icon.png';
import clock from '../../elements/Clock icon.png';
import imagePost from '../../elements/girasol.jpg';
import heart from '../../elements/HeartIcon.svg';
import bookmark from '../../elements/Bookmark icon.svg';
import filter from '../../elements/filter.svg';

const Post = () => {
    return (
        <div className='Post'>
            <div className='headPost'>
                <div className='feedContainer'>
                    <div className='feedRoute'>
                        <div className='feedIcon'>
                            <img src={searchIcon} alt="" className='searchIcon' />
                        </div>
                        <div className='feed'>Feed</div>
                        <div className='arrow'>
                            <img src={arrow} alt="" className='arrow' />
                        </div>
                        <div className='subfeed'>Subfeed</div>
                    </div>
                    <div className='timeContainer'>
                        <div className='timeIcon'>
                            <img src={clock} alt="" className='clock' />
                        </div>
                        <div className='time'>Sep 06, 07:45</div>
                    </div>
                </div>
            </div>
            <div className='PostTitle'>
                <div className='logoTitle'>
                    <img src={logoTitle} alt="" className='logoTitle' />
                </div>
                <div className='AuthTitle'>
                    <div className='Author'>Author | Company</div>
                    <div className='Title'>Lorem ipsum dolor sit amet</div>
                </div>
            </div>
            <div className='NewsBlock'>
                <div className='NewsText'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras turpis tortor, commodo sed diam nec, condimentum faucibus leo. Aliquam vestibulum quam id metus volutpat, vel hendrerit orci blandit. Morbi malesuada maximus facilisis. Etiam nibh ipsum, interdum a tristique vulputate, lobortis eget nunc. Proin porta mollis augue nec molestie. Nullam maximus elit elit. Phasellus ac orci nulla. Integer id aliquet metus, eget sollicitudin dolor.
                </div>
                <div className='NewsImage'>
                    <img src={imagePost} alt="" className='newsImage' />
                    <div className='overlay'>
                        <div className='block1'>
                            <div className='authBox'>
                                <div className='authPhoto' style={{ backgroundImage: `url(${imagePost})` }}></div>
                            </div>
                            <div className='nameAndCorp'>manuel maldonado | FxStreet</div>
                        </div>
                        <div className='block2'>Lorem Ipsum dolor sit amet</div>
                    </div>
                </div>
            </div>
            <div className='BottomPost'>
                <div className='like'>
                    <div className='likeIcon'>
                        <img src={heart} alt="" className='heart' />
                    </div>
                    <div className='likeText'>Like</div>
                </div>
                <div className='save'>
                    <div className='saveIcon'>
                        <img src={bookmark} alt="" className='bookmark' />
                    </div>
                    <div className='saveText'>Save</div>
                </div>
                <div className='filter'>
                    <img src={filter} alt="" className='filter' />
                </div>
            </div>
        </div>
    );
}

export default Post;
