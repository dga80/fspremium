import React, { useState, useRef, useEffect } from 'react';
import '../DropDown/DropDown.css';
import FilterMobile from '../../elements/FilterMobile.svg';

const DropDownMobile = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setShowDropdown(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="unique-dropdown" ref={dropdownRef}>
            <button className="unique-dropbtn" onClick={toggleDropdown}>
                <img src={FilterMobile} alt="Dropdown icon" />
            </button>
            <div className={`unique-dropdown-content ${showDropdown ? 'show' : ''}`}>
                <a href="#category1">Category 1</a>
                <a href="#category2">Category 2</a>
            </div>
        </div>
    );
}

export default DropDownMobile;
