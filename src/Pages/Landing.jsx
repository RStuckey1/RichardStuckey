// import React from 'react';
// import ReactDOM from 'react-dom';
import Header from '../Header';
import Footer from '../Footer';
import './landing.css';


function Landing() {
  return (
    <>
    
    <Header />
    <body>
    <div className="landing-body">
             <h1 className="landing-title">Welcome to my website! I hope you will enjoy my story. The places I have been and what I learned along the way have made me the unique problem solver I am today. Click on the bullet points to see more!</h1>
    <Footer />
    </div>
    </body>
    </>
  );
}

export default Landing;