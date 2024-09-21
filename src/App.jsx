import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Card from './Card.jsx'
import Card2 from './Card2.jsx'
import About from './Pages/About.jsx'
import Contact from './Pages/Contact.jsx'
import Landing from './Pages/Landing.jsx'
import Portfolio from './Pages/Portfolio.jsx'
import Resume from './Pages/Resume.jsx'


function App() {

  return(
     <>
        <Router>
          <Routes>
            <Route path='/' element={<Landing/>}/> 
            <Route path='/About' element={<About/>}/>
            <Route path='/Contact' element={<Contact/>}/>
            <Route path='/Card2' element={<Card2/>}/>
            <Route path='/Header' element={<Header/>}/>
            <Route path='/Footer' element={<Footer/>}/>
            <Route path='/Card' element={<Card/>}/>
            <Route path='/Portfolio' element={<Portfolio/>}/>
            <Route path='/Resume' element={<Resume/>}/>
          </Routes>
        </Router>  
    </>
  ); 
}

 
export default App
