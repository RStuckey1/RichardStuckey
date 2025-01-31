import flow1 from '../assets/flow/flow1.png'
import flow2 from '../assets/flow/flow2.png'
import flowBox from '../assets/flow/flowBox.png'
import './FlowMeter.css'


function FlowMeters() {
    return (
        <>
            <div className="flowMeters">
                <h1> Penguin Flowmeter Upgrade</h1>
                <h2>Kansas City Zoo and Aquarium</h2>
                <p>This 120,000 gallon cold penguin exhibit had 6 sandfilters stacked in 3 groups and flowed 400-600GPM(Gallons Per Minute) or saltwater, each.
                    When the flowmeters were installed they only had local displays and were difficult to read because they were hard
                    to safely access. These flowmeters had to be recorded 2x per day and many other times during cleaning of the filters.
                </p>
                <p>In the Pictures below, each yellow circle shows one of the six filter's flowmeters. To read the top
                    flowmeters, an operator had to climb a ladder and be 12ft from the ground to read the flowmeter. 3 times
                    per week, the filter's are cleaned by backwashing. During filter backwashing, the operator would have to
                    go back and forth between the flowmeter and a throttle valve to adjust/control the flowrtate during this
                    process. That throttle valve is not close to the flowmeter and has to be adjusted to prevent damage to
                    the system.
                </p>
                <div className="flowPicBox">
                    <img className="flowPics" src={flow1} alt="Flowmeter display"></img>
                    <img className="flowPics" src={flow2} alt="Flowmeter display"></img>
                </div>

                <p>
                    For both the safety of the operator and system, I built a remote display box.
                    The flow for all six filters could be viewed/recorded simultaneously. The flowmeters sent signal to transmitters which did two
                    things. First, the transmitter showed the flows of all six filters and was mounted next to the backwash throttle valve.
                    Second, the transmitter box has the ability to send the data to the SCADA system, which could be viewed anywhere on zoo grounds
                    Here is a picture of the remote display box.
                </p>
                <div className="flowPicBox">
                    <img className="flowPics" src={flowBox} alt="Box holding remote displays of flowmeters"></img>
                </div>
                <p>This display box was built with a very low budget(one of the common obstacles for a non-profit organization)
                    However, I was able to build this box with enough money to also build a second box for the warm penguin exhibit that
                    had the same issue(30,000 gallon pool/ 4 filters). Now there is no reason anyone should climb a ladder for regular maintenance in that space.
                </p>
            </div>
        </>
    );
};

export default FlowMeters;