import React from 'react';
import strobe from '../assets/me/strobulation.gif'
import BW from '../assets/me/BW.png'
import MGA from '../assets/me/MGA.png'

import './Home.css';



function Home() {
  return (

    <div className="home">
      <p class="intro"><h1>Welcome!</h1> I am glad you found your way here to my Website. Please explore and see who I am, where I
        have been, and where I want to go. To navigate your way around, click any of the following words at the top: <br></br>
        <ul>
          <li>About - Get to know Rick Stuckey</li>
          <li>Resume - How Rick look's on paper</li>
          <li>Portfolio - Projects and other Fun</li>
          <li>Contact - How to reach me. I would love to hear from you!</li>
          <li>Rick Stuckey - Brings you back to here</li>
        </ul>

        <br></br>
        This first space is where I want to show what keeps me going, the inspiration, fascinations, and motivations that push me
        to be the best I can be </p>

      <br></br>
      <br></br>
      <h7>"Twenty years from now you will be more disappointed by the things
        that you didn't do than by the ones you did do,
        so throw off the bowlines, sail away from safe harbor,
        catch the trade winds in your sails. Explore. Dream. Discover."
        ~Mark Twain</h7>
      <br></br>
      <br></br>
      <br></br>

      <div className="strobe">
        <img class="strobePic" src={strobe} alt="Jellyfish Strobulation in Captivity"></img>
        <p class="strobe">Jellyfish during strobulation. The pulsating tree looking polyp is a
          stack of several jellyfish about to break off and grow as individual jellyfish.</p>
        <p class="strobecontent">-pictures taken by Rick Stuckey</p>  
      </div>
      <div className="strobe">
        <img class="strobePic" src={BW} alt="Black and White"></img>
        <p class="strobe">Boundary Waters, USA/Canada 2024</p>
      </div>
      <div className="strobe">
        <img class="strobePic" src={MGA} alt="1956 MGA"></img>
        <p class="strobe">1956 MGA Roadster</p>
      </div>

    </div>


  );
}
export default Home;