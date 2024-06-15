import React, { useEffect, useState } from 'react';
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

    const [data, setData] = useState([])
    async function fetchData() {
        const response = await fetch('https://run.mocky.io/v3/96314262-67b1-455b-a2b2-ef1711d4634c')
        const result = await response.json();
        setData(result);
    }

    useEffect(() => {
        fetchData()
    }, [])
    return (
        <>
            {data.map((item) => (
                <div className='Post' key={item.id}>
                    <div className='headPost'>
                        <div className='feedContainer'>
                            <div className='feedRoute'>
                                <div className='feedIcon'>
                                    <img src={searchIcon} alt="" className='searchIcon' />
                                </div>
                                <div className='feed'>{item.feed}</div>
                                <div className='arrow'>
                                    <img src={arrow} alt="" className='arrow' />
                                </div>
                                <div className='subfeed'>{item.subFeed}</div>
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
                            <div className='Author'>{item.author.name} | {item.author.companyName}</div>
                            <div className='Title'>{item.title}</div>
                        </div>
                    </div>
                    <div className='NewsBlock'>
                        <div className='NewsText' dangerouslySetInnerHTML={{ __html: item.content }} />
                        <div className='NewsImage'>
                            <img src={imagePost} alt="" className='newsImage' />
                            <div className='overlay'>
                                <div className='block1'>
                                    <div className='authBox'>
                                        <div className='authPhoto' style={{ backgroundImage: `url(${item.author.imageUrl})` }}></div>
                                    </div>
                                    <div className='nameAndCorp'>{item.author.name} | {item.author.companyName}</div>
                                </div>
                                <div className='block2'>{item.title}</div>
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
            ))}
        </>
    );
}

export default Post;
