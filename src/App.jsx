import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Navbar from './components/Navbar'
import BadButton from './components/badbutton';


function App() {
  return (
    
  
 
  <div className="portfolio-app">
       {/* Floating BadButton */}
      <div className="floating-bad-button">
        <BadButton />
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
