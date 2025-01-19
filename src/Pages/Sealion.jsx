import controls1 from '../assets/SLholding/controls1.png'
import controls2 from '../assets/SLholding/controls2.png'
import pumps1 from '../assets/SLholding/pumps1.png'

import './SeaLion.css'


function SeaLion() {
    return (
        <>
            <div className="flowMeters">
                <h1>Sea Lion Holding System</h1>
                <h2>Kansas City Zoo and Aquarium</h2>
                <p>When the Kansas City Zoo and Aquarium decided to upgrade the Sea Lion Exhibit, a new holding system was designed.
                I was tasked with the design and installation of this system. It had to comply with the AZA standards for Sea Lions,
                which is a very high standard. 
                </p>
                
                <div className="flowPicBox">
                    <img className="flowPics" src={controls1} alt="SeaLion holding controls"></img>
                    <img className="flowPics" src={controls2} alt="SeaLion holding controls"></img>
                </div>

                <p>
                    For both the safety of the operator and system, I built a remote display box.
                    The flow for all six filters could be viewed/recorded simultaneously. The flowmeters sent signal to transmitters which did two
                    things. First, the transmitter showed the flows of all six filters and was mounted next to the backwash throttle valve.
                    Second, the transmitter box has the ability to send the data to the SCADA system, which could be viewed anywhere on zoo grounds
                    Here is a picture of the remote display box.
                </p>
                <div className="flowPicBox">
                    <img className="flowPics" src={pumps1} alt="pump and sandfilter setup for Sea Lion holding"></img>
                </div>
                <p>This display box was built with a very low budget(one of the common obstacles for a non-profit organization)
                    However, I was able to build this box with enough money to also build a second box for the warm penguin exhibit that
                    had the same issue(30,000 gallon pool/ 4 filters). Now there is no reason anyone should climb a ladder for regular maintenance in that space.
                </p>
            </div>
        </>
    );
};

export default SeaLion;