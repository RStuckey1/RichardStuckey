import RickBees from '../assets/RickBees.jpg'
import Penguin from '../assets/penguin.jpg'
import BW from '../assets/BW.png'
import './About.css'

function About() {
  return (
    <>
    <div className="about">
      <h1>About Rick Stuckey</h1>
      <h2>I have a diverse background with a unique skillset. I am a mechanically inclined, yet creative person. </h2>
      <h2>A musician, mechanic, eagle scout, artist, father, and active community member. </h2>
      <h2>My life is a gift that I am thankful for and will never waste.</h2>
      <h2>The forgotten lesson is to have fun, you only have one go at life.</h2>
    </div>
  <div className="aboutList">
  <div className="aboutPics">
    <img class="pic" src={RickBees} alt="Rick Bees"></img>
    <p>Studying Apiculture(Bees)</p>
  </div>
  <div className="aboutPics">
    <img className="pic" src={Penguin} alt="Penguin"></img>
    <p>My favorite animal</p>
  </div>
  <div class="aboutPics">
    <img class="pic" src={BW} alt="Black and White"></img>
    <p>Black and White</p>
  </div>
  </div>



    

    </>
  );
}

export default About;