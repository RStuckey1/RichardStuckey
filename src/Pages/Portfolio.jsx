
import CardRGD20 from '../ProjectCards/CardRGD20';
import CardGetItDone from '../ProjectCards/CardGetItDone';
import CardCarPal from '../ProjectCards/CardcCarPal';
import CardGastroBook from '../ProjectCards/CardGastroBook';
import CardNotFadeAway from '../ProjectCards/CardNotFadeAway';
import CardBookSearch from '../ProjectCards/CardBookSearch';
import CardWeatherApp from '../ProjectCards/CardWeatherApp';
import './Portfolio.css';
   




function Portfolio() {
    return (
        <>
            <div>
                <h2>Portfolio</h2>
                <p>Here are some of the projects I have worked on:</p>

            </div>
            <div classname="portfolioCards">
                <CardRGD20 />
                <CardGetItDone />
                <CardCarPal />
                <CardGastroBook />
                <CardNotFadeAway />
                <CardBookSearch />
                <CardWeatherApp />
            </div>
        </>
    );
}

export default Portfolio;