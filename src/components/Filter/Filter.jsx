import React, { useState } from 'react';
import './Filter.css';

const Filter = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [showSubmenu, setShowSubmenu] = useState(false);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
        setShowSubmenu(false); // Reset submenu when toggling main dropdown
    };

    const openSubmenu = (event) => {
        event.preventDefault();
        setShowSubmenu(true);
    };

    const backToMain = (event) => {
        event.preventDefault();
        setShowSubmenu(false);
    };

    return (
        <div className="dropdown">
            <button className="dropbtn" onClick={toggleDropdown}>•••</button>
            <div className={`dropdown-content ${showDropdown ? 'show' : ''} ${showSubmenu ? 'show-submenu' : ''}`}>
                <button className="main-link" onClick={() => alert('Hide action')}>Hide</button>
                <button className="subdropbtn" onClick={openSubmenu}>Improve my feed</button>
                <div className="dropdown-subcontent">
                    <button className="back-to-main" onClick={backToMain}>Tell us why</button>
                    <button>I'm not interested in this author</button>
                    <button>I'm not interested in this topic</button>
                    <button>I've seen too many posts in this topic</button>
                    <button>The information is incorrect</button>
                    <button>I've seen this post before</button>
                    <button>Other reasons</button>
                </div>
            </div>
        </div>
    );
};

export default Filter;
