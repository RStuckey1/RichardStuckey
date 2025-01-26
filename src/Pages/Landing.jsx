import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';



function Landing() {
    return (

        <div className="landing">
            <Link to='/Resume' target='_self'>
                <div className="landingtext">
                <h5>Rick Stuckey</h5>
                <h5>Rick Stuckey</h5>
                </div>
            </Link>
        </div>


    );
};

export default Landing;