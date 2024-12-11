import D20 from '../assets/D20.jpg'
import { Link } from 'react-router-dom';


function CardRDG20() {
   return(
    <Link to="https://github.com/Riesyn/rngd20" target="_blank">
        <div className="card2">
            <img className="card-image2" src={D20} alt="profile picture"></img>
            <h2 className='card-title2'>RDG20 App</h2>
            <p className='card-text2'>App for rolling D20</p>
        </div>
    </Link>
    );

}

    export default CardRDG20;