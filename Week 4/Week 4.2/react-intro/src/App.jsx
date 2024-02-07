import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  function onClickHandler() {
    setCount(count + 1)
  }

  return (
    <>
      <button onClick={onClickHandler}>
        count is {count}
      </button>

      {/* State And Components */}
      {/* State:
      an object that represents the current state of an app
      It represents the dynamic things in your app (this that changes)
      For example - the value of the Counter

      Components:
      It is a are-usable, dynamic, HTML snippet that changes given the state */}
    </>
  )
}

export default App
