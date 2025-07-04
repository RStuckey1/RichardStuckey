
import Portfolio from '../components/portfolio.jsx'
import './List.css';







export function List() {
    return (
        <>
            <div className="portfolio">
                <h1>Rick's Portfolio</h1>
                <p>Click on the pictures to experience some of my coding projects</p>
            </div>
            <div className="bottom">
                <Portfolio/>
            </div>
        </>
    )};

export default List;