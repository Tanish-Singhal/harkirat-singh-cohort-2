import React from 'react'
import { useState } from 'react';

function UseState() {
  const [count, setCount] = useState(0)

  function updateCounter() {
    setCount(count + 1);
  }

  {/* this function was re-render anytime the state of the button changes */}
    console.log("hi from the useState file");

  return (
    <>
      <button onClick={updateCounter}>Counter ({count})</button>
    </>
  )
}

export default UseState;