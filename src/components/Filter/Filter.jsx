import React, { useState, useEffect, useRef } from 'react';
import './Filter.css';
import hide from '../../elements/hide.png';
import improve from '../../elements/improve.png';
import backArrow from '../../elements/arrow_back.png';
import circle from '../../elements/radio_button_off.png';

const Filter = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [showSubmenu, setShowSubmenu] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
        setShowSubmenu(false);
    };

    const openSubmenu = (event) => {
        event.preventDefault();
        setShowSubmenu(true);
    };

    const backToMain = (event) => {
        event.preventDefault();
        setShowSubmenu(false);
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setShowDropdown(false);
            setShowSubmenu(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const hideDropdown = () => {
        setShowDropdown(false);
        setShowSubmenu(false);
    };

    return (
        <div className="dropdown" ref={dropdownRef}>
            <button className="dropbtn" onClick={toggleDropdown}>•••</button>
            <div className={`dropdown-content ${showDropdown ? 'show' : ''} ${showSubmenu ? 'show-submenu' : ''}`}>
                <button className="main-link" onClick={() => alert('Hide action')}>
                    <img src={hide} alt="hide icon" />Hide
                </button>
                <button className="subdropbtn" onClick={openSubmenu}>
                    <img src={improve} alt="improve icon" />Improve my feed
                </button>
                <div className="dropdown-subcontent">
                    <button className="back-to-main" onClick={backToMain}>
                        <img src={backArrow} alt="back arrow icon" />Tell us why
                    </button>
                    <button><img src={circle} alt="circle icon" />I'm not interested in this author</button>
                    <button><img src={circle} alt="circle icon" />I'm not interested in this topic</button>
                    <button><img src={circle} alt="circle icon" />I've seen too many posts in this topic</button>
                    <button><img src={circle} alt="circle icon" />The information is incorrect</button>
                    <button><img src={circle} alt="circle icon" />I've seen this post before</button>
                    <button><img src={circle} alt="circle icon" />Other reasons</button>
                    <div className="hideBox">
                        <div className="hideContent" onClick={hideDropdown}>Hide content</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Filter;
