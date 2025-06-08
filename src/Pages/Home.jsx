import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import jelly from '../assets/me/jelly.gif'
import jelly2 from '../assets/me/jelly2.gif'
import NameWave from '../components/NameWave';
import strobulation from '../assets/me/strobulation.gif'
import { Carousel } from '../components/Carousel';
import { Carousel2 } from '../components/Carousel2';
import { Carousel3 } from '../components/Carousel3';
import Popover1 from '../components/Popover1';
import Popover2 from '../components/Popover2';
import Popover3 from '../components/Popover3';
import './Home.css';


const popoverTexts = [
  <Popover1 />,
  <Popover2 />,
  <Popover3 />
];

const Home = () => {
  const itemData = [
    { img: jelly, alt: "Jellyfish Strobulation", page: "1" },
    { img: strobulation, alt: "Jellyfish Strobulation", page: "2" },
    { img: jelly2, alt: "Jellyfish Strobulation", page: "3" },
  ];

  const [hovered, setHovered] = useState(null);
  const [canShow, setCanShow] = useState([false, false, false]);
  const popoverRefs = [useRef(null), useRef(null), useRef(null)];
  const [popoverPos, setPopoverPos] = useState({ top: 0, left: 0 });

  useEffect(() => {
    const timers = [
      setTimeout(() => setCanShow(c => [true, c[1], c[2]]), 2000),
      setTimeout(() => setCanShow(c => [c[0], true, c[2]]), 4000),
      setTimeout(() => setCanShow(c => [c[0], c[1], true]), 6000),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  // Update popover position on hover
  useEffect(() => {
    if (hovered !== null && popoverRefs[hovered].current) {
      const rect = popoverRefs[hovered].current.getBoundingClientRect();
      setPopoverPos({
        top: rect.bottom + window.scrollY + 8,
        left: rect.left + window.scrollX + rect.width / 2,
      });
    }
  }, [hovered]);

  return (
    <>
      <div className="header">
        <div className="home">
          <div className="wave">
            <NameWave />
          </div>
        </div>
        <div className="intro">
          <p
            className="intro1"
            ref={popoverRefs[0]}
            onMouseEnter={() => canShow[0] && setHovered(0)}
            onMouseLeave={() => setHovered(null)}
          >
            Work Creatively<br />
          </p>
          <p
            className="intro2"
            ref={popoverRefs[1]}
            onMouseEnter={() => canShow[1] && setHovered(1)}
            onMouseLeave={() => setHovered(null)}
          >
            Inspire Connection<br />
          </p>
          <p
            className="intro3"
            ref={popoverRefs[2]}
            onMouseEnter={() => canShow[2] && setHovered(2)}
            onMouseLeave={() => setHovered(null)}
          >
            Live Tenaciously<br />
          </p>
        </div>
        {hovered !== null && (
          <div
            style={{
              position: 'absolute',
              top: popoverPos.top,
              left: popoverPos.left,
              transform: 'translateX(-50%)',
              background: '#000000',
              color: '#8f18a9',
              padding: '1em',
              border: '1px solid #cb12b5',
              borderRadius: '8px',
              zIndex: 1000,
              minWidth: 220,
              maxWidth: 300,
              fontSize: '0.5em',
              pointerEvents: 'none'
            }}
          >
            {popoverTexts[hovered]}
          </div>
        )}
      </div>
      <div className="links">
        <ul className="b">
          <li><Link to="/Resume">Resume</Link></li>
          <li><Link to="/List">Portfolio</Link></li>
          <li><Link to="/Contact">Contact Rick</Link></li>
        </ul>
      </div>

      <div className="quote">
        <p>"Twenty years from now you will be more disappointed by the things
          that you didn't do than by the ones you did do,
          so throw off the bowlines, sail away from safe harbor,
          catch the trade winds in your sails. Explore. Dream. Discover."
          <br></br><span>~Mark Twain</span></p>
        <br></br>
        <p>"The ones who are crazy enough to think that they can change the world are the ones who do."
          <br></br> <span>~Steve Jobs</span>
        </p>
        <p>"All of our dreams can come true, if we have the courage to pursue them."
          <br></br><span>~Walt Disney</span>
        </p>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <div className="flare">
        <div className="strobe">
          <Carousel itemData={itemData} />
          <p className="strobeText">These images show Jellyfish transforming from polyps, to ephyra.</p>
          <p className="strobeText">This was while I worked at the KansasCity Zoo & Aquarium(2020)</p>
        </div>
        <div className="strobe1">
          <Carousel2 itemData={itemData} />
          <p className="strobeText">Boundary Waters 2024 Minnesota, USA/Canada Border</p>
          <p className="strobeText">This is the most peaceful place I have ever witnessed</p>
        </div>
        <div className="strobe2">
          <Carousel3 itemData={itemData} />
          <p className="strobeText">Some Adventures That Have Amazing Stories (Ask Me About Them)</p>

        </div>
      </div>


    </>

  );
}
export default Home;