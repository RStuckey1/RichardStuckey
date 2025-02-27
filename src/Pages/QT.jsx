import React from 'react';
import sharktank from '../assets/QT/sharktank.png'
import fluke from '../assets/QT/fluke.png'
import fluke1 from '../assets/QT/fluke1.png'
import fluke2 from '../assets/QT/fluke2.png'
import './QT.css'


function QT() {
    return (
        <>
            <div className="flowMeters">
                <h1 className="SL">Monogenean Capsalids</h1>
                <h2 className="SL">Shark Bar - T-REX Cafe' Kansas City, KS</h2>
                <div className="flowPicBox">
                    <img className="flowPics" src={sharktank} alt="SeaLion holding controls"></img>
                </div>
                <p className="SL">Working as the curator for T-REX Cafe', I had to bring in and acclimate hundreds of fish/sharks each year. This was a very large task to take on as one person. In the process, I encoutered many marine diseases that had to be treated. The most interesting of these were Flukes(Monogenean capsalids).</p>

                <div className="flowPicBox">
                    <img className="flowPics" src={fluke} alt="SeaLion holding controls"></img>
                    <img className="flowPics" src={fluke1} alt="SeaLion holding controls"></img>
                </div>
                <p>These pictures I took myself from infected animals. When aquarium systems have an infection of flukes, it normally is the end to that aquarium. However, my persistentance paid off and I was able to cure this system of flukes.</p>
                <div className="flowPicBox">
                    <img className="flowPics" src={fluke2} alt="pump and sandfilter setup for Sea Lion holding"></img>
                </div>

            </div>
        </>
    );
};

export default QT;