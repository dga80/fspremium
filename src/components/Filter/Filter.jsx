import React, { useState } from 'react';
import './Filter.css';
import hide from '../../elements/hide.png';
import improve from '../../elements/improve.png';
import backArrow from '../../elements/arrow_back.png';
import circle from '../../elements/radio_button_off.png'

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
                <button className="main-link" onClick={() => alert('Hide action')}>
                    <img src={hide} alt="Hide" className="icon" /> Hide
                </button>
                <button className="subdropbtn" onClick={openSubmenu}>
                    <img src={improve} alt="Improve my feed" className="icon" /> Improve my feed
                </button>
                <div className="dropdown-subcontent">
                    <button className="back-to-main" onClick={backToMain}>
                        <img src={backArrow} alt="Tell us why" className="icon" /> Tell us why
                    </button>
                    <button>
                        <img src={circle} alt="Not interested in this author" className="icon" /> I'm not interested in this author
                    </button>
                    <button>
                        <img src={circle} alt="Not interested in this topic" className="icon" /> I'm not interested in this topic
                    </button>
                    <button>
                        <img src={circle} alt="Too many posts in this topic" className="icon" /> I've seen too many posts in this topic
                    </button>
                    <button>
                        <img src={circle} alt="Incorrect information" className="icon" /> The information is incorrect
                    </button>
                    <button>
                        <img src={circle} alt="Seen this post before" className="icon" /> I've seen this post before
                    </button>
                    <button>
                        <img src={circle} alt="Other reasons" className="icon" /> Other reasons
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Filter;
