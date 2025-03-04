import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './Footer.jsx'
import Contact from './Pages/Contact.jsx'
import Resume from './Pages/Resume.jsx'
import ErrorPage from './Pages/ErrorPage.jsx'
import Home from './Pages/Home.jsx'
import List from './Pages/List.jsx'
import FlowMeters from './Pages/FlowMeters.jsx'
import Sealion from './Pages/Sealion.jsx'
import QT from './Pages/QT.jsx'



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
        path: '/List',
        element: <List />,
      },
      {
        path: '/Resume',
        element: <Resume />,
      },
      {
        path: '/FlowMeters',
        element: <FlowMeters />,
      },
      {
        path: '/Sealion',
        element: <Sealion />,
      },
      {
        path: '/QT',
        element: <QT />,
      },
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);