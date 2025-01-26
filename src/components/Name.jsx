import React from "react";
import { Link } from "react-router-dom";
import "./Name.css"

export const Name = () => {
    return (
        <Link to="/">
            <div className="title">
                <h5>Rick Stuckey</h5>
                <h5>Rick Stuckey</h5>
            </div>
        </Link>

    );
};

export default Name;