import React, { useState, useMemo, useCallback } from 'react'

function UseCallback() {
  const [count, setCount] = useState(0);

  // function rawFunction() {
  //   console.log("hi there");
  // }
  const rawFunction = useCallback(function rawFunction() {
    console.log("hi there");
  }, [])
  
  // this will happen because, in normal approach React was not smart enough to tell you that, function example1 === function example2 is true.
  
  // function example1() {
  //   console.log("hi there");
  // }
  
  // function example2() {
  //   console.log("hi there");
  // }

  return (
    <>
      <ButtonComponent inputfunction={rawFunction} />
      <br />
      <button onClick={() => {
        setCount(count+ 1);
      }}>Click Me ({count})</button>
    </>
  )
}

const ButtonComponent = React.memo((inputfunction) => {
  console.log("child render");

  return (
    <>
      <button>Button clicked</button>
    </>
  )
})

// function App() {
//   return (
//     <>
//       <Parent />
//     </>
//   )
// }

export default UseCallback;