import profilePic from '../assets/Profilepic2.jpg'



function Card(){
    return(
        <div className="card">
            <img className="card-image" src={profilePic} alt="profile picture"></img>
            <h2 className='card-title'>Rick Stuckey</h2>
        </div>
    );

}

    export default Card;