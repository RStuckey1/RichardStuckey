import { Link } from "react-router-dom";
import Card from "./Card";
import './index.css';

function Header() {
 
    return(
        <header className="navheader">
           <div className="card1"><Card /></div>
            <nav>
                <ul>
                    <li><Link to="/About">About</Link></li>                    
                    <li><Link to="/Resume">Resume</Link></li>
                    <li><Link to="/Portfolio">Portfolio</Link></li>
                    <li><Link to="/Contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;