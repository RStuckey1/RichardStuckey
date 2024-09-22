import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../Header';
import Footer from '../Footer';
import './landing.css';


function Landing() {
  return (
    <>
    <body>
    <Header />
    <div classname="landing-body">
             <h1 classname="landing-title">Welcome to the Landing Page</h1>
    <Footer />
    </div>
    </body>
    </>
  );
}

export default Landing;