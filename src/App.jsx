import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Navbar from './components/Navbar'


function App() {
  return (
    
  
 
  <div className="portfolio-app">
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
