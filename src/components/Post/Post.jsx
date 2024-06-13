import React from 'react';
import './Post.css';
import logoTitle from '../../elements/Avatar.png'
import searchIcon from '../../elements/File search.png'
import arrow from '../../elements/Arrow icon.png'
import clock from '../../elements/Clock icon.png'
import imagePost from '../../elements/image-webinar.jpg'

const Post = () => {
    return (
        <div className='Post'>
            <div className='headPost'>
                <div className='feedContainer'>
                    <div className='feedRoute'>
                        <div className='feedIcon'>
                            <img src={searchIcon} alt="searchIcon" className='searchIcon' />
                        </div>
                        <div className='feed'>Feed</div>
                        <div className='arrow'>
                            <img src={arrow} alt="arrow" className='arrow' />

                        </div>
                        <div className='subfeed'>Subfeed</div>
                    </div>

                    <div className='timeContainer'>
                        <div className='timeIcon'>
                            <img src={clock} alt="clock" className='clock' />

                        </div>
                        <div className='time'>Sep 06, 07:45</div>
                    </div>
                </div>
            </div>
            <div className='PostTitle'>
                <div className='logoTtile'>
                    <img src={logoTitle} alt="Logo Title" className='logoTitle' />
                </div>
                <div className='AuthTitle'>
                    <div className='Author'>Author | Company</div>
                    <div className='Title'>Lorem ipsum dolor sit amet</div>
                </div>
            </div>
            <div className='NewsBlock'>
                <div className='NewsText'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras turpis tortor, commodo sed diam nec, condimentum faucibus leo. Aliquam vestibulum quam id metus volutpat, vel hendrerit orci blandit. Morbi malesuada maximus facilisis. Etiam nibh ipsum, interdum a tristique vulputate, lobortis eget nunc. Proin porta mollis augue nec molestie. Nullam maximus elit elit. Phasellus ac orci nulla. Integer id aliquet metus, eget sollicitudin dolor.
                </div>
                <div className='NewsImage'>
                    <img src={imagePost} alt="imagePost" className='imagePost' />
                </div>
            </div>

        </div>
    );
}

export default Post;
