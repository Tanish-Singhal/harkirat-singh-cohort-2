import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CountContext } from './context';
import { useContext } from 'react';

function App() {
  const [count, setCount] = useState(0);

  // wrap anyone that wants to use the teleported value inside a provider
  return (
    <>
    {/* <Count count={count} setCount={setCount} /> */}
    {/* <Button count={count} setCount={setCount} /> */}

    <CountContext.Provider value={count}>
      <Count setCount={setCount} />
    </CountContext.Provider>
    </>
  )
}

function Count({setCount}) {
  console.log("re-render");
  return (
    <>
      <CountRender />
      <Button setCount={setCount} />
    </>
  )
}

function CountRender() {
  const count = useContext(CountContext);

  return (
    <>
      {count}
    </>
  )
}

function Button({setCount}){
  const count = useContext(CountContext);

  return (
    <>
      <button onClick={() => {
        setCount(count + 1);
      }}>Increase</button>

      <button onClick={() => {
        setCount(count - 1);
      }}>Decrease</button>
    </>
  )
}

export default App
