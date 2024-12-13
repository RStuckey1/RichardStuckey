import gastroBook from '../assets/gastroBook.png'
import { Link } from 'react-router-dom';


function CardGastroBook(){
   return(
    <Link to="https://github.com/RStuckey1/Gastro-Book" target="_blank">
        <div className="card2">
            <img className="card-image2" src={gastroBook} alt="gastro book icon"></img>
            <h2 className='card-title2'>Gastro Book</h2>
            <p className='card-text2'>Social Recpie Book App</p>
        </div>
    </Link>
    );

}

    export default CardGastroBook;