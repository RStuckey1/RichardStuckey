import RickBees from '../assets/me/RickBees.png'
import Penguin from '../assets/me/penguin.png'
import BW from '../assets/me/BW.png'
import './About.css'

function About() {
  return (
    <>
    <div className="about">
      <h1>About Richard Stuckey</h1>
      <h2 class="about"></h2>
      <h2 class="about">My life, so far, is an amazing story. If it were a book, readers would be on the edge of their seat, unable to put it down.</h2>
      <h2 class="about">Being tenacious and curious has been the driving force in my life, with many unique chapters. I have learned to solve unique problems with a multidisciplinary approach
      using technology, sustaionability, creativity, and teamwork. In every chapter, the people I have met have been the greatest resource because every person you meet knows something you don't.  
      </h2>
     <p>I have always been facinated with the relationship between technology and nature.</p>
    </div>
  <div className="aboutPics">
    <img class="pic" src={RickBees} alt="Rick Bees"></img>
    <p>Studying Apiculture -University of Kansas (Lawrence, Kansas)</p>
  </div>
  <div className="aboutPics">
    <img className="pic" src={Penguin} alt="Penguin"></img>
    <p>Kansas City Zoo & Aquarium</p>
    <p>A quick pic with King Penguin "Buddy Love"</p>
    <p>On the way to my office (2019)</p>
  </div>

  <div className="aboutPics">
    <img class="pic" src={BW} alt="Black and White"></img> 
  
  </div>



    

    </>
  );
}

export default About;