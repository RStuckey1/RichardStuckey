import carpalapp from './assets/carpalapp.jpg'
import { Link } from 'react-router-dom';


function Card4(){
   return(
    <Link to="https://github.com/RStuckey1/Car-Pal-" target="_blank">
        <div className="card2">
            <img className="card-image2" src={carpalapp} alt="profile picture"></img>
            <h2 className='card-title2'>Car Pal App</h2>
            <p className='card-text2'>vehicle maintenance tracker</p>
        </div>
    </Link>
    );

}

    export default Card4;