import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import './index.css'



function App() {
  return <div className="portfolio-app">
  
    <>
      <Header />
      <Outlet />
       
      <Footer />
    </>
    </div>
  
}

export default App;
