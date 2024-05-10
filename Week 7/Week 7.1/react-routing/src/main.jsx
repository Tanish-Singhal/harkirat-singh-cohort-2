import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from './Layout.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Landing from './components/Landing.jsx';
import About from './components/About.jsx';
import Dashboard from './components/Dashboard.jsx';

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <Landing />
        },
        {
          path: "/about",
          element: <About />
        },
        {
          path: "/dashboard",
          element: <Dashboard />
        }
      ]
    }
  ]
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
