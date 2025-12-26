
import { useKeenSlider } from "keen-slider/react"
import { Link } from "react-router-dom"
import booksearch from '../assets/projects/booksearchIcon.png'
import carpalapp from '../assets/projects/CarPalIcon.png'
import gastroBook from '../assets/projects/gastroIcon.png'
import getitdone from '../assets/projects/kanban.png'
import D20 from '../assets/projects/D20Icon.png'
import weatherapp from '../assets/projects/weatherIcon.png'
import "keen-slider/keen-slider.min.css"
import "./portfolio.css"

const carousel = (slider) => {
  // Responsive z-axis based on screen width
  const getZValue = () => {
    const width = window.innerWidth;
    if (width <= 480) return 250; // Mobile
    if (width <= 768) return 320; // Tablet
    return 400; // Desktop
  };
  
  let z = getZValue();
  
  function rotate() {
    const deg = 360 * slider.track.details.progress
    slider.container.style.transform = `translateZ(-${z}px) rotateY(${-deg}deg)`
  }
  
  function updateCarousel() {
    z = getZValue();
    const deg = 360 / slider.slides.length
    slider.slides.forEach((element, idx) => {
      element.style.transform = `rotateY(${deg * idx}deg) translateZ(${z}px)`
    })
    rotate()
  }
  
  slider.on("created", updateCarousel)
  slider.on("detailsChanged", rotate)
  
  // Update on window resize
  window.addEventListener('resize', updateCarousel)
}

export default function App() {
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
      selector: ".carousel__cell",
      renderMode: "custom",
      mode: "free-snap",
    },
    [carousel]
  )

  return (
    <div className="wrapper">
      <div className="scene">
        <div className="carousel keen-slider" ref={sliderRef}>
          <div className="carousel__cell number-slide1 ">
            <Link to="https://rstuckey1.github.io/Dice-Rolling-D20/"><img src={D20} alt="Dice Rollin'" style={{maxWidth: '100%', height: 'auto'}} />
            <p>Dice Rollin'</p>
            </Link>
          </div>
          <div className="carousel__cell number-slide2">
            <Link to="https://booksearchmern-lsoz.onrender.com/"><img src={booksearch} alt="Book Search" style={{maxWidth: '100%', height: 'auto'}} />
            <p>Book Search</p>
            </Link>
          </div>
          <div className="carousel__cell number-slide3">
            <Link to="https://weather-95ia.onrender.com/"><img src={weatherapp} alt="Weather Dashboard" style={{maxWidth: '100%', height: 'auto'}}/>
            <p>Weather Dashboard</p>
            </Link>
          </div>
          <div className="carousel__cell number-slide4">
            <Link to="https://github.com/RStuckey1/Get-It-Done"><img src={getitdone} alt="Get It Done" style={{maxWidth: '100%', height: 'auto'}} />
            <p>Get It Done</p>
            </Link>
          </div>
          <div className="carousel__cell number-slide5">
            <Link to="https://car-pal.onrender.com"><img src={carpalapp} alt="Car Pal" style={{maxWidth: '100%', height: 'auto'}} />
            <p>Car Pal</p>
            </Link>
          </div>
          <div className="carousel__cell number-slide6">
            <Link to="https://github.com/RStuckey1/Gastro-Book"><img src={gastroBook} alt="Gastro Book" style={{maxWidth: '100%', height: 'auto'}} />
            <p>Gastro Book</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
