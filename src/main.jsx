import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Card from './ProjectCards/Card.jsx'
import About from './Pages/About.jsx'
import Contact from './Pages/Contact.jsx'
import Portfolio from './Pages/Portfolio.jsx'
import Resume from './Pages/Resume.jsx'
import ErrorPage from './Pages/ErrorPage.jsx'
import CardRGD20 from './ProjectCards/CardRGD20.jsx'
import WeatherApp from './ProjectCards/CardWeatherApp.jsx'
import './index.css'


const router = createBrowserRouter([
  {
  path: '/',
  element: <App/>,
  errorElement: <ErrorPage />,
  children: [
    {
      path: '/About',
      element: <About />,
    },
    {
      path: '/Contact',
      element: <Contact />,
    },
    {
      path: '/CardRGD20',
      element: <CardRGD20 />,
    },
    {
      path: '/Header',
      element: <Header />,
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
      path: '/Resume',
      element: <Resume />,
    },
    {
      path: '/WeatherApp',
      element: <WeatherApp />,
    },
  ]
}
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);