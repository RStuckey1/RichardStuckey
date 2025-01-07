import RickBees from '../assets/RickBees.png'
import Penguin from '../assets/penguin.png'
import BW from '../assets/BW.png'
import './About.css'

function About() {
  return (
    <>
    <div className="about">
      <h1>About Richard Stuckey</h1>
      <h2 class="about">Richard "Rick" Stuckey is mechanically inclined, yet uniquely creative and practical with solutions. </h2>
      <h2 class="about">Technology is a conduit for these soluitions to generate efficent and sustainable remedies for any problem. </h2>
      <h2 class="about"></h2>
      <h2 class="about">My life is a gift that I am thankful for and will never waste.</h2>
      <h2 class="about">The forgotten lesson is to have fun, you only have one go at life.</h2>
    </div>
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
    <p>Boundary Waters, USA/Canada 2024</p>
  </div>
  



    

    </>
  );
}

export default About;