import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./Navbar.css"

export const Navbar = () => {
    return (
        <nav>
            <ul>
                <li className="c">
                    <NavLink to="/">Home</NavLink>
                </li>
                <li className="c">
                    <NavLink to="/Resume">Resume</NavLink>
                </li>
                <li className="c dropdown">
                    <NavLink to="/List">Portfolio</NavLink>
                    <ul className="dropdown-menu">
                        <li>
                            <Link to="https://rstuckey1.github.io/Dice-Rolling-D20/" target="_blank">Dice Rolling</Link>
                        </li>
                        <li>
                            <Link to="https://booksearchmern-lsoz.onrender.com/" target="_blank">Book Search</Link>
                        </li>
                        <li>
                            <Link to="https://weather-95ia.onrender.com/" target="_blank">Weather Dashboard</Link>
                        </li>
                    </ul>
                </li>
                <li class="c">
                    <NavLink to="/Contact">Contact</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;