import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import './index.css'
import { Navbar } from './components/Navbar'



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
      <Footer />
      </div>
  </>
 
  );
}

export default App;
