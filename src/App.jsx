import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import './index.css'
import { Navbar } from './components/Navbar'
import Scroll from './components/Scroll'



function App() {
  return (
    <>
    <div>
    <Navbar />
    </div>
  <div className="portfolio-app">

    
   
      <div>
        <Outlet />
        
      </div>
      <Scroll />
      <Footer />
      
      </div>
  </>
 
  );
}

export default App;
