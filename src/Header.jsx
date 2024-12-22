import { Link } from "react-router-dom";
import Card from "./ProjectCards/Card";

import './index.css';
import { Navbar } from "./components/Navbar";

function Header() {

    return (


        <div className="headerbox">
            <div className="card1"><Card /></div>

            <Navbar />
            
        </div>

    );
}

export default Header;