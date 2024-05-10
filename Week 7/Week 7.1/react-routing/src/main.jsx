import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from './Layout.jsx';
import Landing from './components/Landing.jsx';
import About from './components/About.jsx';
import Dashboard from './components/Dashboard.jsx';
import User from './components/User.jsx';

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
        },
        {
          path: "user/:userId",
          element: <User />
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
