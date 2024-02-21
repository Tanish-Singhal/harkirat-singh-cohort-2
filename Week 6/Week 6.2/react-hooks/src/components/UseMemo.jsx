import React, { useState, useEffect, useMemo } from 'react'

function UseMemo() {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);
  
  function IncrementOne() {
    setCounterOne(counterOne + 1);
  }
  function IncrementTwo() {
    setCounterTwo(counterTwo + 1);
  }

  const isEven = useMemo(() => {

      for ( let i = 0; i < 200000000; i++) {}
      
      return counterOne % 2 === 0;
  }, [counterOne])

  // function isEven() {

  //   for ( let i = 0; i < 200000000; i++) {}     // an expensive operation
  //   // the slowness of the first button is understandable, becasue of the expensive operation
  //   // but the slowness of the second button was not managble (because second button was not linked to the isEven function)
  //   // This is becasue the isEven function was re-render whenever you click any button. That's why we use useMemo
    
  //   return counterOne % 2 === 0;
  // }

  // This will only slow the IncrementOne button becasue of the expensive for loop operation not the IncrementTwo button.

  return (
    <>
      <button onClick={IncrementOne}>Counter ({counterOne})</button>
      <br />
      <p>{isEven ? "Even" : "Odd"}</p>
      <br />
      <button onClick={IncrementTwo}>Counter ({counterTwo})</button>
    </>
  )
}

export default UseMemo;