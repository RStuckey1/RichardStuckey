import React from 'react';
import { Link } from 'react-router-dom';
import jelly from '../assets/me/jelly.gif'
import jelly2 from '../assets/me/jelly2.gif'
import NameWave from '../components/NameWave';
import strobulation from '../assets/me/strobulation.gif'
import { Carousel } from '../components/Carousel';
import { Carousel2 } from '../components/Carousel2';
import { Carousel3 } from '../components/Carousel3';
import './Home.css';


const Home = () => {
  const itemData = [
    {
      img: jelly,
      alt: "Jellyfish Strobulation",
      page: "1"
    },
    {
      img: strobulation,
      alt: "Jellyfish Strobulation",
      page: "2"
    },
    {
      img: jelly2,
      alt: "Jellyfish Strobulation",
      page: "3"
    },
  ];

  return (
    <>
      <div className="home">
        <div className="wave">
        <NameWave />
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <p className="intro">I am glad you found your way here to my Website. Please explore and learn about who I am, where I have been, and where I want to go. To navigate your way around, click any of the following words at the top:</p>

        <ul>
          <li><Link to="/Resume">Resume - How Rick looks on paper</Link></li>
          <li><Link to="/List">Portfolio - Projects and other Fun</Link></li>
          <li><Link to="/Contact">Contact - How to reach me. I would love to hear from you!</Link></li>
          <li><Link to="/">Home - Brings you back here</Link></li>
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
        <div className="flare">
          <div className="strobe">
            <Carousel itemData={itemData} />
            <p className="strobeText">These images show Jellyfish transforming from stationary polyps, to free swimming ephyra.</p>
          </div>
          <div className="strobe1">
            <Carousel2 itemData={itemData} />
            <p className="strobeText">Boundary Waters 2024 Minnesota, USA/Canada Border</p>
          </div>
          <div className="strobe2">
            <Carousel3 itemData={itemData} />
            <p className="strobeText">Some Adventures That Have Amazing Stories (Ask Me About Them)</p>

          </div>
        </div>
      </div>

    </>

  );
}
export default Home;