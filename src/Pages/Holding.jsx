import React from 'react';
import controls1 from '../assets/SLholding/controls1.png';
import controls2 from '../assets/SLholding/controls2.png';
import pumps1 from '../assets/SLholding/pumps1.png';
import './Holding.css';

function Holding() {
    return (
        <>
            <div className="flowMeters">
                <h1 className="SL">Sea Lion Holding System</h1>
                <h2 className="SL">Kansas City Zoo and Aquarium</h2>
                <p className="SL">When the Kansas City Zoo and Aquarium decided to upgrade the Sea Lion Exhibit, a new holding system was designed.
                I was tasked with the design and installation of this system. It had to comply with the AZA standards for Sea Lions,
                which is a very high standard. 
                </p>
                <p>The holding was divided into two pools, each with their own filtration. The two pools had gates that could isolate
                    the pools for maintenance/repairs. Both pools were above ground swimming pools with a deck around them and adequate fencing
                    on the outside. Sanitation of the pools was monitored by a constant flow, total chlorine monitor. The unit would sample every 2
                    minutes and adjust the chlorine feed for the given setpoint. For pH control and redundant chlorine monitoring, a pH/ORP monitor was 
                    installed. Acid was controlled this way and would also be a secondary lockout if the chlorine pump failed in a running state.
                </p>
                
                <div className="flowPicBox">
                    <img className="flowPics" src={controls1} alt="SeaLion holding controls"></img>
                    <img className="flowPics" src={controls2} alt="SeaLion holding controls"></img>
                </div>
                <div className="flowPicBox">
                    <img className="flowPics" src={pumps1} alt="pump and sandfilter setup for Sea Lion holding"></img>
                </div>
               
            </div>
        </>
    );
};

export default Holding;