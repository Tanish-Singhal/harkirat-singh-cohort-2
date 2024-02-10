import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  // function onClickHandler() {
  //   setCount(count + 1);
  // }

  return (
    <div>
      {/* <button onClick={onClickHandler}>counter {count}</button> */}

      <CustomButton count={count} setCount={setCount}></CustomButton>
      <CustomButton count={count + 1} setCount={setCount}></CustomButton>
      <CustomButton count={count - 1} setCount={setCount}></CustomButton>
    </div>
  )
}

// components
function CustomButton(props) {

  function onClickHandler() {
    props.setCount(props.count + 1);
  }

  return (
    <div>
      <button onClick={onClickHandler}>Counter {props.count}</button>
    </div>
  )
}

export default App;

// 1 35