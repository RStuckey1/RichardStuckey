import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './Footer.jsx'
import Card from './ProjectCards/Card.jsx'
import About from './Pages/About.jsx'
import Contact from './Pages/Contact.jsx'
import Portfolio from './Pages/Portfolio.jsx'
import Resume from './Pages/Resume.jsx'
import ErrorPage from './Pages/ErrorPage.jsx'
import Home from './Pages/Home.jsx'
import List from './Pages/List.jsx'
import './index.css'


const router = createBrowserRouter([
  {
  path: '/',
  element: <App />,
  errorElement: <ErrorPage />,
  children: [
   
    {
      index: true,
      element: <Home />,
    },
    {
      path: '/Home',
      element: <Home />,
    },
    {
      path: '/About',
      element: <About />,
    },
    {
      path: '/Contact',
      element: <Contact />,
    },
    {
      path: '/Navbar',
      element: <Navbar />,
    },
    {
      path: '/Footer',
      element: <Footer />,
    },
    {
      path: '/Card',
      element: <Card />,
    },
    {
      path: '/Portfolio',
      element: <Portfolio />,
    },
    {
      path: '/List',
      element: <List />,
    },
    {
      path: '/Resume',
      element: <Resume />,
    },
  ]
}
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);