import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import NameWave from '../components/NameWave';
import Carousel from '../components/Carousel';
import Popover1 from '../components/Popover1';
import Popover2 from '../components/Popover2';
import Popover3 from '../components/Popover3';
import Popover4 from '../components/Popover4'; // <-- Add this import
import './Home.css';

const popoverTexts = [
  <Popover2 />,
  <Popover1 />,
  <Popover3 />,
  <Popover4 /> // <-- Add new popover for NameWave
];

const Home = () => {
  const [hovered, setHovered] = useState(null);
  const [canShow, setCanShow] = useState([false, false, false, true]); // 4th for NameWave, always true
  const popoverRefs = [
    useRef(null), // intro1
    useRef(null), // intro2
    useRef(null), // intro3
    useRef(null)  // NameWave
  ];
  const [popoverPos, setPopoverPos] = useState({ top: 0, left: 0 });

  useEffect(() => {
    const timers = [
      setTimeout(() => setCanShow(c => [true, c[1], c[2], c[3]]), 2000),
      setTimeout(() => setCanShow(c => [c[0], true, c[2], c[3]]), 4000),
      setTimeout(() => setCanShow(c => [c[0], c[1], true, c[3]]), 6000),
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
        {/* NameWave positioned right below NavBar */}
        <div className="home">
          <div
            className="wave"
            ref={popoverRefs[3]}
            onMouseEnter={() => canShow[3] && setHovered(3)}
            onMouseLeave={() => setHovered(null)}
          >
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

          {hovered !== null && (
            <div
              style={{
                position: 'absolute',
                top: popoverPos.top,
                left: popoverPos.left,
                transform: 'translateX(-90%)',
                background: '#000000',
                padding: '10px',
                border: '1px solid #cb12b5',
                borderRadius: '8px',
                zIndex: 800,
                minWidth: 220,
                maxWidth: 500,
                textAlign: 'center',
                fontSize: '0.25em',
                margin: '0',
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

        <div className="strobe">
          <Carousel />

        </div>

      </div>
    </>

  );
}
export default Home;