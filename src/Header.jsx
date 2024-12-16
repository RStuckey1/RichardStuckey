import { Link } from "react-router-dom";
import Card from "./ProjectCards/Card";

import './index.css';

function Header() {

    return (


        <div className="headerbox">
            <div className="card1"><Card /></div>


            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/About">About</Link></li>
                    <li><Link to="/Resume">Resume</Link></li>
                    <li><Link to="/Portfolio">Portfolio</Link></li>
                    <li><Link to="/Contact">Contact</Link></li>
                </ul>
            </nav>
        </div>

    );
}

export default Header;