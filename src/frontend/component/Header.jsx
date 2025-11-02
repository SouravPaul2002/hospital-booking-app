import "../css/header.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import {
    FaLocationDot,
    FaHeartPulse,
    FaUser,
    FaBars,
    FaMagnifyingGlass,
    FaLocationCrosshairs,
} from "react-icons/fa6";
import React, { useState } from "react";

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleSearch = (e) => {
        const value = e.target.value.toLowerCase();
        console.log("Searching for:", value);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const [showPopup, setShowPopup] = useState(false);
    const closePopup = () => setShowPopup(false);

    const handleGetLocation = () => {
        setShowPopup(true);
    };

    useEffect(() => {
        if (showPopup) {
            document.body.classList.add("disable-scroll");
        } else {
            document.body.classList.remove("disable-scroll");
        }
    }, [showPopup]);

    return (
        <>
            <div className="header">
                {/* Logo */}
                <Link to="/" className="logo">
                    <FaHeartPulse style={{ fontSize: "2.8rem" }} /> medcare
                </Link>

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
                    <Link to="/" className="navlink" >
                        Home
                    </Link>
                    <a href="#service-section" className="navlink" >
                        Service
                    </a>
                    <a href="#review-section" className="navlink" >
                        Review
                    </a>
                    <a href="#contact-section" className="navlink" >
                        Contact
                    </a>
                </div>
                {/* User Avatar */}
                <div className="user-avatar-container">
                    <Link to="/" id="user-avatar">
                        <FaUser className="account-avatar" />
                    </Link>
                </div>
            </div>
            {showPopup && (
                <div className="location-window" id="loc-win">
                    <div className="card popup">
                        <button className="dismiss-btn" id="dismiss" onClick={closePopup}>
                            &times;
                        </button>

                        <div className="loc-head">
                            <span>Enter an Indian pincode here</span>
                            <div className="loc-option-tab">
                                <input
                                    type="number"
                                    name="pincode"
                                    placeholder="Pincode here"
                                    id="zipcode"
                                />
                                <button className="btn" id="pin-apply">
                                    Apply
                                </button>
                            </div>
                        </div>

                        <div className="loc-head">
                            <span>Allow to access your location</span>
                            <div className="loc-option-tab">
                                <button className="get-location btn" id="det-location">
                                    <FaLocationCrosshairs /> Detect my location
                                </button>
                            </div>
                        </div>

                        <div className="loc-head">
                            <div className="loc-option-tab">
                                <label id="location-txt">Your location will appear here</label>
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </>
    );
}

export default Header;
