import { useState } from "react";
import Header from "../Header";
import Footer from "../Footer";

function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    return(
        <>
        <h1>Contact</h1>
        <Header/>
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
        <Footer/>
        </>
    );};



export default Contact;
