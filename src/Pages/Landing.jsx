import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../Header';
import Footer from '../Footer';
import './landing.css';


function Landing() {
  return (
    <>
    
    <Header />
    <body>
    <div classname="landing-body">
             <h1 classname="landing-title">Welcome to my website! I hope you will find and enjoy the story of who I am, where I have been, and what I learned along the way! Click on the bullet points to see more!</h1>
    <Footer />
    </div>
    </body>
    </>
  );
}

export default Landing;