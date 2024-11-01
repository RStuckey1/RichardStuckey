import { useState } from "react";
import { Link } from 'react-router-dom';
import linkedin from '../assets/linkedin.jpg';
import github from '../assets/github.jpg';
import '../index.css';

function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    return(
        <>
        <h1>Contact</h1>
    
        <div>
            <form>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)}></input>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                <label htmlFor="message">Message</label>
                <input type="message" id="message" value={message} onChange={(e) => setMessage(e.target.value)}></input>
                <button type="submit">Submit</button>
            </form>
        </div>
        <div>
            <ul classname="contactInfo">
                <li><Link to="https://www.linkedin.com/in/richard-stuckey-9b2910234/" target="_blank">
                <img className="linkedinIcon" src={linkedin} alt="linkedinicon"></img>
                </Link>
                </li>
                <li><Link to="https://www.github.com/RStuckey1" target="_blank">          
            <img className="github" src={github} alt="github"></img>
            </Link>
            </li>
            </ul>
        </div>
        
        </>
    );};



export default Contact;
