import React, { useEffect, useState } from 'react';
import parse from 'html-react-parser';
import '../../assets/styles.css';
import './Post.css';
import logoTitle from '../../elements/Avatar.png';
import searchIcon from '../../elements/File search.png';
import arrow from '../../elements/Arrow icon.png';
import clock from '../../elements/Clock icon.png';
import imagePost from '../../elements/girasol.jpg';
import BottomPost from '../BottomPost/BottomPost';

const Post = ({ showPopular }) => {
    const [data, setData] = useState([]);

    async function fetchData() {
        try {
            const response = await fetch('https://fxsfrontend.fxstreet.workers.dev/');
            const result = await response.json();
            console.log(result); // Log the result here after parsing it
            setData(result);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    const formatDateTime = (dateString) => {
        const options = { month: 'short', day: '2-digit' };
        const date = new Date(dateString);
        const formattedDate = date.toLocaleDateString('en-US', options);
        const formattedTime = date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
        return `${formattedDate}, ${formattedTime}`;
    };

    const filteredPosts = showPopular
        ? data.filter(post => post.isPopular).slice(0, 1)
        : data.filter(post => !post.isPopular).slice(0, 2);

    return (
        <>
            {filteredPosts.map((item) => (
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
                                <div className='time'>{formatDateTime(item.publicationTime)}</div>
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
                        <div className='NewsText'>{parse(item.content)}</div>
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
                        <BottomPost />
                    </div>
                </div>
            ))}
        </>
    );
};

export default Post;
