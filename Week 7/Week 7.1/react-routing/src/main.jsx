import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Landing from './components/Landing.jsx';
import About from './components/About.jsx';
import Dashboard from './components/Dashboard.jsx';

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <><Navbar /><Landing /><Footer /></>
    },
    {
      path: "/about",
      element: <><Navbar /><About /><Footer/></>
    },
    {
      path: "/dashboard",
      element: <><Navbar /><Dashboard /><Footer /></>
    }
  ]
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
