import weatherapp from '../assets/weatherapp.jpg'
import { Link } from 'react-router-dom';
import '../Pages/Portfolio.css';


function CardWeatherApp() {
    return (
        <Link to="https://github.com/RStuckey1/weather" target="_blank">
            <div className="card2">
                <img className="card-image2" src={weatherapp} alt="weather app icon"></img>
                <h2 className='card-title2'>Weather Forecast API </h2>
                <p className='card-text2'>5-Day Weather Tracker</p>
                <p className='card-text3'>React, Axios, OpenWeatherMap API</p>
            </div>
        </Link>
    );
}

export default CardWeatherApp;