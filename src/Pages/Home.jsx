import React from 'react';
import { Link } from 'react-router-dom';
import strobe from '../assets/me/strobulation.gif'
import BW from '../assets/me/BW.png'
import MGA from '../assets/me/MGA.png'


import './Home.css';



function Home() {

  return (
    <>
      <div className="home">
        <h1>Welcome!</h1>
        <p className="intro">I am glad you found your way here to my Website. Please explore and learn about who I am, where I
          have been, and where I want to go. To navigate your way around, click any of the following words at the top:</p>

        <ul>
          <li><Link to="/About">About - Get to know Rick Stuckey</Link></li>
          <li><Link to="/Resume">Resume - How Rick look's on paper</Link></li>
          <li><Link to="/List">Portfolio - Projects and other Fun</Link></li>
          <li><Link to="/Contact">Contact - How to reach me. I would love to hear from you!</Link></li>
          <li><Link to="/">Rick Stuckey - Brings you back to here</Link></li>
        </ul>

        <br></br>
        <p>Before all of the normal parts of a portfolio website, let me show you what inspires me...</p>

        <br></br>
        <br></br>
        <div className="quote">
          <p>"Twenty years from now you will be more disappointed by the things
            that you didn't do than by the ones you did do,
            so throw off the bowlines, sail away from safe harbor,
            catch the trade winds in your sails. Explore. Dream. Discover."
            <span>~Mark Twain</span></p>
        </div>
        <br></br>
        <br></br>
        <br></br>

        <div className="strobe">
          <img className="strobePic" src={strobe} alt="Jellyfish Strobulation in Captivity"></img>
          <p className="strobe">Jellyfish during strobulation</p>
          <p className="strobecontent">-pictures taken by Rick Stuckey</p>
        </div>
        <div className="strobe">
          <img className="strobePic" src={BW} alt="Black and White"></img>
          <p className="strobe">Boundary Waters, USA/Canada 2024</p>
        </div>
        <div className="strobe">
          <img className="strobePic" src={MGA} alt="1956 MGA"></img>
          <p className="strobe">1956 MGA Roadster</p>
        </div>

      </div>

    </>

  );
}
export default Home;