import D20 from '../assets/D20.png'
import { Link } from 'react-router-dom';
import '../Pages/Portfolio.css';


function CardRDG20() {
   return(
    <Link to="https://github.com/RStuckey1/Dice-Rolling-D20" target="_blank">
        <div className="card2">
            <img className="card-image2" src={D20} alt="profile picture"></img>
            <h2 className='card-title2'>RDG20 App</h2>
            <p className='card-text2'>App for rolling D20</p>
            <p className='card-text3'>HTML, JavaScript, CSS</p>
        </div>
    </Link>
    );

}

    export default CardRDG20;