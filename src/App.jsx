import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import { Navbar } from './components/Navbar'
import Scroll from './components/Scroll'

function App() {
  return (
    <>
  <Navbar />
  <div className="portfolio-app">
      <div>
        <Outlet />
      </div>
    <div className="scroll">
      <Scroll />
      </div>
      <div className="footer">
      <Footer />
    </div>
    </div>
  </>
  );
}

export default App;
