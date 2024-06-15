import React from 'react';
import './Dashboard.css';
import Post from '../Post/Post';
import MenuPost from '../MenuPost/MenuPost';
import MenuPostMobile from '../MenuPostMobile/MenuPostMobile';

const Dashboard = () => {
    return (
        <div className="Dashboard">
            <div className="menu-post-desktop">
                <MenuPost />
            </div>
            <div className="menu-post-mobile">
                <MenuPostMobile />
            </div>
            <Post />
        </div>
    );
}

export default Dashboard;
