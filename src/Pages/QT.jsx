import sharktank from '../assets/QT/sharktank.png'
import fluke from '../assets/QT/fluke.png'
import fluke1 from '../assets/QT/fluke1.png'
import fluke2 from '../assets/QT/fluke2.png'


import './QT.css'


function QT() {
    return (
        <>
            <div className="flowMeters">
                <h1 className="SL">Monogean Capsalids</h1>
                <h2 className="SL">Shark Bar - T-REX Cafe' Kansas City, KS</h2>
                <div className="flowPicBox">
                <img className="flowPics" src={sharktank} alt="SeaLion holding controls"></img>
                </div>
                <p className="SL">When the Kansas City Zoo and Aquarium decided to upgrade the Sea Lion Exhibit, a new holding system was designed.
                I was tasked with the design and installation of this system. It had to comply with the AZA standards for Sea Lions,
                which is a very high standard. 
                </p>
                <p>The holding was divided into two pools, each with their own filtration. The two pools has gates that could isolate
                    the pools for maintenance/repairs. Both pools were above ground swimming pools with a deck around them and adequate fencing
                    on the outside. Sanitation of the pools were monitored by a constant flow, total chlorine monitor. The unit would sample every 2
                    minutes and adjust the chlorine feed for the given setpoint. For pH control and redundant chlorine monitore, a pH/ORP monitor was 
                    installed. Acid was controled this way and would also be a secondary lockout if the chlorine pump failed in a running state.
                </p>
                
                <div className="flowPicBox">
                    <img className="flowPics" src={fluke} alt="SeaLion holding controls"></img>
                    <img className="flowPics" src={fluke1} alt="SeaLion holding controls"></img>
                </div>
                <div className="flowPicBox">
                    <img className="flowPics" src={fluke2} alt="pump and sandfilter setup for Sea Lion holding"></img>
                </div>
               
            </div>
        </>
    );
};

export default QT;