import notfadeaway from '../assets/notfadeaway.png'
import { Link } from 'react-router-dom';


function CardNotFadeAway(){
   return(
    <Link to="https://github.com/RStuckey1/NotFadeAway" target="_blank">
        <div className="card2">
            <img className="card-image2" src={notfadeaway} alt="notfadeaway icon"></img>
            <h2 className='card-title2'>Business Website</h2>
            <p className='card-text2'>Not Fade Away Audio Equipment Repairs</p>
        </div>
    </Link>
    );

}

    export default CardNotFadeAway;