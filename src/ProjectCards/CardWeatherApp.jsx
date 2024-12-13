import weatherapp from '../assets/weatherapp.jpg'
import { Link } from 'react-router-dom';


function CardCarPal(){
   return(
    <Link to="https://github.com/RStuckey1/Car-Pal-" target="_blank">
        <div className="card2">
            <img className="card-image2" src={weatherapp} alt="weather app icon"></img>
            <h2 className='card-title2'>Weather Forecast API </h2>
            <p className='card-text2'>5-Day Weather Tracker</p>
        </div>
    </Link>
    );

}

    export default CardCarPal;