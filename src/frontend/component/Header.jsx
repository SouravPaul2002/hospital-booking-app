import "../css/header.css";
import {
    FaLocationDot,
    FaHeartPulse,
    FaUser,
    FaBars,
    FaMagnifyingGlass,
} from "react-icons/fa6";
import React, { useState } from "react";

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleSearch = (e) => {
        const value = e.target.value.toLowerCase();
        console.log("Searching for:", value);
    };

    const handleGetLocation = () => {
        console.log("Get location clicked");
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <div className="header">
                {/* Logo */}
                <a href="#" className="logo">
                    <FaHeartPulse style={{ fontSize: "2.8rem" }} /> medcare
                </a>

                {/* Search Bar */}
                <div className="search-bar" id="srchbar-above">
                    <button
                        className="get-location btn"
                        id="get-location-btn"
                        onClick={handleGetLocation}
                    >
                        <FaLocationDot style={{ fontSize: "2rem" }} />
                    </button>

                    <input
                        id="searchbar"
                        name="search"
                        type="text"
                        placeholder="Search..."
                        onChange={handleSearch}
                    />

                    <button className="btn">
                        <FaMagnifyingGlass style={{ fontSize: "2rem" }} />
                    </button>
                </div>



                {/* Hamburger Icon */}
                <div id="menu-btn" onClick={toggleMenu}>
                    <FaBars />
                </div>

                {/* Navbar Links (Dropdown for Mobile) */}
                <div className={`navbar ${isMenuOpen ? "active" : ""}`}>
                    <a className="navlink" href="#">
                        Home
                    </a>
                    <a className="navlink" href="#">
                        Services
                    </a>
                    <a className="navlink" href="#">
                        Review
                    </a>
                    <a className="navlink" href="#">
                        Contact
                    </a>
                </div>
                {/* User Avatar */}
                <div className="user-avatar-container">
                    <a href="#" id="user-avatar">
                        <FaUser className="account-avatar" />
                    </a>
                </div>
            </div>
        </>
    );
}

export default Header;
