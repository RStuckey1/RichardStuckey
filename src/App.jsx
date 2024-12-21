import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import './assets/penguin.jpg'
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
      <Footer />
    </>
  </div>

}

export default App;
