import booksearch from '../assets/booksearch.png'
import { Link } from 'react-router-dom';


function CardBookSearch(){
   return(
    <Link to="https://github.com/RStuckey1/BookSearchMERN" target="_blank">
        <div className="card2">
            <img className="card-image2" src={booksearch} alt="book search icon"></img>
            <h2 className='card-title2'>Book Search</h2>
            <p className='card-text2'>MERN- Book Search</p>
        </div>
    </Link>
    );

}

    export default CardBookSearch;