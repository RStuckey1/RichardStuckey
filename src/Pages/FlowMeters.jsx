import flow1 from '../assets/flow/flow1.png'
import flow2 from '../assets/flow/flow2.png'
import flowBox from '../assets/flow/flowBox.png'


export function FlowMeters() {
    return (
    <>
    <div className="flowMeters">
        <h1> penguin flowmeter Upgrade</h1>
        <p>This 120,000 cold penguin exhibit had 6 sandfilters stacked in 3 groups and flowed ~600GPM each.
            when the flowmeter were installed they only had local displays and required climbing a ladder to read them.
        </p>
    </div>
    <div className="flowPics">
        <img class="flowPic" src={flowBox} alt="Box holding remote displays of flowmeters"></img>

        <img class="flowPic" src={flow1} alt="Flowmeter display"></img>

        <img class="flowPic" src={flow2} alt="Flowmeter display"></img>
</div>
</>
    );
};

export default FlowMeters;