import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./navbar.css"

export const Navbar = () => {
    return ( 
    <nav>
        <Link to="/" className="title">Rick Stuckey</Link>
        <ul>
            <li>
                <NavLink to="/About">About</NavLink>
            </li>
            <li>
                <NavLink to="/Resume">Resume</NavLink>
            </li>
            <li>
                <NavLink to="/List">Portfolio</NavLink>
            </li>
            <li>
                <NavLink to="/Contact">Contact</NavLink>
            </li>
        </ul>
    </nav>
    );
};

export default Navbar;