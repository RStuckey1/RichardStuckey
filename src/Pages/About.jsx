import RickBees from '../assets/me/RickBees.png'
import Penguin from '../assets/me/penguin.png'
import BW from '../assets/me/BW.png'
import './About.css'

function About() {
  return (
    <>
      <div className="about">
        <h1>About Richard Stuckey</h1>
        <p>My life, so far, is an amazing story. If it were a book, readers would be on the edge of their seat, unable to put it down.</p>
        <p>Being tenacious and curious has been the driving force in my life, with many unique chapters. I have learned to solve unique problems with a multidisciplinary approach
          using technology, sustaionability, creativity, and teamwork. In every chapter, the people I have met have been the greatest resource because every person you meet knows something you don't.
        </p>
        <p>I have always been facinated by the relationship between technology and nature.</p>
      </div>
      <div className="aboutPics">
        <img class="pic" src={RickBees} alt="Rick Bees" ></img>
        <p>Studying Apiculture -University of Kansas (Lawrence, Kansas)</p>
      </div>
      <div className="aboutPics">
        <img className="pic" src={Penguin} alt="Penguin"></img>
        <p>A quick pic with King Penguin "Buddy Love"
          On the way to my office (2019)</p>
      </div>
      <div className="aboutPics">
        <img className="pic" src={BW} alt="Boundary Waters 2024" ></img>
        <p>Boundary waters USA/Canada 2024</p>

      </div>





    </>
  );
}

export default About;