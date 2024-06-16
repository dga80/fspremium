import React, { useState } from 'react';
import './Dashboard.css';
import Post from '../Post/Post';
import MenuPost from '../MenuPost/MenuPost';
import MenuPostMobile from '../MenuPostMobile/MenuPostMobile';

const Dashboard = () => {
    const [isPopular, setIsPopular] = useState(false);

    const showLatest = () => {
        setIsPopular(false);
    };

    const showPopularPosts = () => {
        setIsPopular(true);
    };

    return (
        <div className="Dashboard">
            <div className="menu-post-desktop">
                <MenuPost showLatest={showLatest} showPopular={showPopularPosts} isPopular={isPopular} />
            </div>
            <div className="menu-post-mobile">
                <MenuPostMobile showLatest={showLatest} showPopular={showPopularPosts} isPopular={isPopular} />
            </div>
            <Post showPopular={isPopular} />
        </div>
    );
}

export default Dashboard;
