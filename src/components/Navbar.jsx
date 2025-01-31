import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./Navbar.css"

export const Navbar = () => {
    return ( 
    <nav>
        <ul>
            <li>
                <NavLink to="/">Home</NavLink>
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