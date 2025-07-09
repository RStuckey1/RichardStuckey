
import { useKeenSlider } from "keen-slider/react"
import BW4 from '../assets/me/BW4.png'
import AQme from '../assets/me/AQme.png'
import KC from '../assets/me/MGAme.png'
import Penguin from '../assets/me/TREX.png'
import Bees from '../assets/me/RickBees.png'
import BW from '../assets/me/BW.png'
import "keen-slider/keen-slider.min.css"
import "./Carousel.css";

const animation = { duration: 50000, easing: (t) => t }

function Carousel() {
  const [sliderRef] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    drag: true,
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
            <img src={BW4} alt="boundrywaters"></img>
          </div>
          <div className="keen-slider__slide number-slide8">
            <img src={AQme} alt="boundrywaters"></img>
          </div>
          <div className="keen-slider__slide number-slide9">
            <img src={KC} alt="boundrywaters"></img>
          </div>
          <div className="keen-slider__slide number-slide10">
            <img src={Penguin} alt="boundrywaters"></img>
          </div>
          <div className="keen-slider__slide number-slide11">
            <img src={Bees} alt="boundrywaters"></img>
          </div>
          <div className="keen-slider__slide number-slide12">
            <img src={BW} alt="boundrywaters"></img>
          </div>
        </div>
        </div>
      </>
  )}

      export default Carousel;