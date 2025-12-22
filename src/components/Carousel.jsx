
import { useKeenSlider } from "keen-slider/react"
import PastaRick from '../assets/me/PastaRick.png'
import AQme from '../assets/me/AQme.png'
import Generator from '../assets/me/Generator.png'
import RainbowRick from '../assets/me/RainbowRick.png'
import RickAnimate from '../assets/me/RickAnimate.png'
import BMWRick from '../assets/me/BMWRick.png'
import BW from '../assets/me/BW.png'
import BW4 from '../assets/me/BW4.png'
import "keen-slider/keen-slider.min.css"
import "./Carousel.css";

const animation = { duration: 20000, easing: (t) => t }

function Carousel() {
  const [sliderRef] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    drag: true,
      slides: {
      origin: 'center',
      perView: '1',
    },
    created(s) {
      s.moveToIdx(5, true, animation)
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation)
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation)
    },
  })

  return (
    <>
      <div className="navigation-wrapper">
        <div ref={sliderRef} className="keen-slider">
          <div className="keen-slider__slide number-slide7">
            <img src={PastaRick} alt="Eating Pasta"></img>
          </div>
          <div className="keen-slider__slide number-slide8">
            <img src={AQme} alt="Construction of aquarium"></img>
          </div>
          <div className="keen-slider__slide number-slide9">
            <img src={Generator} alt="disel powered pump"></img>
          </div>
          <div className="keen-slider__slide number-slide10">
            <img src={RainbowRick} alt="at the farm"></img>
          </div>
          <div className="keen-slider__slide number-slide11">
            <img src={RickAnimate} alt="AI generated Rick"></img>
          </div>
          <div className="keen-slider__slide number-slide12">
            <img src={BMWRick} alt="Cruising in a Z3M"></img>
          </div>
          <div className="keen-slider__slide number-slide13">
            <img src={BW} alt="Boundary Waters USA/Canada"></img>
          </div>
          <div className="keen-slider__slide number-slide14">
            <img src={BW4} alt="Cruising in a Z3M"></img>
          </div>
          </div>
        </div>
        </>
    )
  }
  
  export default Carousel;