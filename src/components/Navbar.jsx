import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css"

export const Navbar = () => {
    return ( 
    <nav>
        <Link to="/" className="title">Home</Link>
        <ul>
            <li>
                <Link to="/About">About</Link>
            </li>
            <li>
                <Link to="/Resume">Resume</Link>
            </li>
            <li>
                <Link to="/Portfolio">Portfolio</Link>
            </li>
            <li>
                <Link to="/Contact">Contact</Link>
            </li>
        </ul>
    </nav>
    );
};

export default Navbar;