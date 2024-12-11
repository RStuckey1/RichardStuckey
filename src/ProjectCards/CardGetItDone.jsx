import getitdone from './assets/getitdone.jpg'
import { Link } from 'react-router-dom';


function Card3(){
   return(
    <Link to="https://github.com/RStuckey1/Get-It-Done" target="_blank">
        <div className="card2">
            <img className="card-image2" src={getitdone} alt="get it done"></img>
            <h2 className='card-title2'>Get-It-Done App</h2>
            <p className='card-text2'>Teamwork planning</p>
        </div>
    </Link>
    );

}

    export default Card3;