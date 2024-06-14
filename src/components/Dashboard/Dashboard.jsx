import React from 'react'
import './Dashboard.css'
import Post from '../Post/Post'
import MenuPost from '../MenuPost/MenuPost'

const Dashboard = () => {
    return (
        <div className="Dashboard">
            <MenuPost />
            <Post />
        </div>
    )
}

export default Dashboard;