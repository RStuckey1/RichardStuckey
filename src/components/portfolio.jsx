
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
  const z = 400
  function rotate() {
    const deg = 360 * slider.track.details.progress
    slider.container.style.transform = `translateZ(-${z}px) rotateY(${-deg}deg)`
  }
  slider.on("created", () => {
    const deg = 360 / slider.slides.length
    slider.slides.forEach((element, idx) => {
      element.style.transform = `rotateY(${deg * idx}deg) translateZ(${z}px)`
    })
    rotate()
  })
  slider.on("detailsChanged", rotate)
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
            <Link to="https://rstuckey1.github.io/Dice-Rolling-D20/"><img src={D20} alt="Dice Rollin'" />Dice Rollin'</Link>
          </div>
          <div className="carousel__cell number-slide2">
            <Link to="https://booksearchmern-lsoz.onrender.com/"><img src={booksearch} alt="Book Search" />Book Search</Link>
          </div>
          <div className="carousel__cell number-slide3">
            <Link to="https://weather-95ia.onrender.com/"><img src={weatherapp} alt="Weather Dashboard" />Weather Dashboard</Link>
          </div>
          <div className="carousel__cell number-slide4">
            <Link to="https://github.com/RStuckey1/Get-It-Done"><img src={getitdone} alt="Get It Done" />Get It Done</Link>
          </div>
          <div className="carousel__cell number-slide5">
            <Link to="https://github.com/RStuckey1/Car-Pal-"><img src={carpalapp} alt="Car Pal" />Car Pal</Link>
          </div>
          <div className="carousel__cell number-slide6">
            <Link to="https://github.com/RStuckey1/Gastro-Book"><img src={gastroBook} alt="Gastro Book" />Gastro Book</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
