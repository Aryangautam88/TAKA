import React, { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Scroll effect
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
            {/* Logo */}
            <div className="logo">
                <Link to="/">
                    <img src={logo} alt="TAKA Logo" />
                </Link>
            </div>

            {/* Hamburger */}
            <div
                className={`hamburger ${menuOpen ? "active" : ""}`}
                onClick={() => setMenuOpen(!menuOpen)}
            >
                <span></span>
                <span></span>
            </div>

            {/* Menu */}
            <ul className={`nav-links ${menuOpen ? "show" : ""}`}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
                <li><Link to="/career">Career</Link></li>
            </ul>

            {/* Let’s Talk Button */}
            <div className="cta">
                <button onClick={() => setDropdownOpen(!dropdownOpen)}>
                    LET'S TALK
                </button>

                {dropdownOpen && (
                    <div className="dropdown">
                        <Link to="/signup-influencer">Signup as Influencer</Link>
                        <Link to="/signup-business">Signup as Businessman</Link>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;