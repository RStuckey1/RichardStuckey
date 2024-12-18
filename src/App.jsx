import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import './assets/penguin.jpg'
import './assets/RickBees.jpg'
import './index.css'



function App() {
  return <div className="portfolio-app">

    <>
      <Header />
      <div>
        <Outlet />
      </div>
        <Footer />
    </>
  </div>

}

export default App;
