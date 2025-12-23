import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Navbar from './components/Navbar'
import BadButton from './components/badbutton';
import Planet from './assets/planet.png'
import './index.css'


function App() {
  return (
    
  
 
  <div className="portfolio-app">
       {/* Floating BadButton */}
      <div className="floating-bad-button">
        <BadButton />
      </div>
    <div className="planet">
          <img src={Planet} alt="planet"></img>
        </div>
    <div className="Navigation">
        <Navbar />
    </div>
    <div className="outlet">
        <Outlet />
    </div>
    <div className="footer">
      <Footer />
    </div>
    
  </div>
  
  );
}

export default App;
