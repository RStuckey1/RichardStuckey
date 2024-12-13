import notfadeaway from '../assets/notfadeaway.jpg'
import { Link } from 'react-router-dom';


function CardCarPal(){
   return(
    <Link to="https://github.com/RStuckey1/Car-Pal-" target="_blank">
        <div className="card2">
            <img className="card-image2" src={notfadeaway} alt="notfadeaway icon"></img>
            <h2 className='card-title2'>Business Wensite</h2>
            <p className='card-text2'>Not Fade Away Repairs</p>
        </div>
    </Link>
    );

}

    export default CardCarPal;