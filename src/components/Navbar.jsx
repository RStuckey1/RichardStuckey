import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./Navbar.css"
import { Name } from "./Name";

export const Navbar = () => {
    return ( 
    <nav>
        <ul className="Navbar">
            <li>
                <Name />
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