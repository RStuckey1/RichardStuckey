import React from 'react';
import strobe from '../assets/me/strobulation.gif'
import BW from '../assets/me/BW.png'
import './Home.css';



function Home() {
  return (
    
    <div className="home">
      <p class="intro">Welcome, I am glad you found your way here. There are many things to see here. 
        What you see below are my inspirations, accomplishments, and dreams. Above you 
        can click any of the links to see more about me, my experience, and projects of mine. 
        On my contact page you can send me a messae, which I always enjoy and will respond. 
        Thank you for being here, and I hope you enjoy your visit. </p>
      <p><span>Experiment</span> <span>Fail</span> <span>Learn</span> <span>Repeat</span></p>
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
        <p>Jellyfish during strobulation. The pulsating tree looking polyp is a 
          stack of several jellyfish about to break off and grow as individual jellyfish.</p>

          <div class="strobe">
    <img class="pic" src={BW} alt="Black and White"></img>
    <p>Boundary Waters, USA/Canada 2024</p>
  </div>
        
    </div>
    </div>
    
  );
}   
export default Home;