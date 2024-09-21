import profilePic from './assets/Profilepic2.jpg'
import './index.css'


function Card(){
    return(
        <div className="card">
            <img className="card-image" src={profilePic} alt="profile picture"></img>
            <h2 className='card-title'>Richard Stuckey</h2>
            <p className='card-text'>Electrical Environmental Consultant</p>
        </div>
    );

}

    export default Card;