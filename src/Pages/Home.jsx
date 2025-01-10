import React from 'react';
import strobe from '../assets/strobulation.gif'
import './Home.css';



function Home() {
  return (
    <>
    <div className="home">
      <p class="quote">Experiment   Fail     Learn    Repeat</p>
      <br></br>
      <br></br>
      <h7>"Twenty years from now you will be more disappointed by the things
      that you didn't do than by the ones you did do,
      so throw off the bowlines, sail away from safe harbor,
      catch the trade winds in your sails. Explore. Dream. Discover."
      ~Mark Twain</h7>
      
    <div className="strobe">
        <img class="strobePic" src={strobe} alt="Jellyfish Strobulation in Captivity"></img>
    </div>
    </div>
    </>
  );
}   
export default Home;