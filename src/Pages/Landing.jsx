import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../Header';
import Footer from '../Footer';
import './Landing.css';


function Landing() {
  return (
    <>
    <Header />
    <div classname="landing-body">
             <h1 classname="landing-title">Welcome to the Landing Page</h1>
    <Footer />
    </div>
    </>
  );
}

export default Landing;