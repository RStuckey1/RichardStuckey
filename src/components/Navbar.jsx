import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css"

export const Navbar = () => {
    return (
        <nav>
            <ul>
                <li class="c">
                    <NavLink to="/">Home</NavLink>
                </li>
                <li class="c">
                    <NavLink to="/Resume">Resume</NavLink>
                </li>
                <li class="c">
                    <NavLink to="/List">Portfolio</NavLink>
                </li>
                <li class="c">
                    <NavLink to="/Contact">Contact</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;