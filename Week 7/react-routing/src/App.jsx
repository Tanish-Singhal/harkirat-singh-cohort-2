import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';

// lazy loading
const Landing =  lazy(() => import('./components/Landing'));
const Dashboard = lazy(() => import('./components/Dashboard'));

function App() {
  return (
    <>
      <BrowserRouter>
        <Appbar />

        <br />

        {/* now our Dasboard and Landing Page becaome an async component. For this we need to wrap our code inside Suspense compoent which react provide */}
        <Routes>
          <Route path="/" element={
            <Suspense fallback={"loading..."}>
              <Landing />
            </Suspense>
            }
          />
          <Route path="/dashboard" element={
            <Suspense fallback={"loading..."}>
              <Dashboard />
            </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

// client-side rendering
// this is used to navigate to differnt pages without doing the hard refresh.
function Appbar() {
  const navigate = useNavigate();

  return (
    <>
      <div> 
        <button onClick={() => {
          // window.location.href = "/"
          navigate("/");
        }}>Landing Page</button>

        <button onClick={() => {
          // window.location.href = "/dasboard"
          navigate("/dashboard");
        }}>Dashboard Page</button>
      </div>
    </>
  )
}

export default App;