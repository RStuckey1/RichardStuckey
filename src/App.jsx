import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import penguin from './assets/penguin.jpg'
import './assets/RickBees.jpg'
import './index.css'
import { Navbar } from './components/Navbar'



function App() {
  return <div className="portfolio-app">

    <>
      <Navbar />
      <div>
        <Outlet />
      </div>
      <img className="rick" src={penguin} alt="Rick and Morty" />
      <Footer />
    </>
  </div>

}

export default App;
