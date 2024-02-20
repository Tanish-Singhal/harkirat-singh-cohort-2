import React, { useState } from 'react'
import Header from './Header'
import CardWrapper from './CardWrapper'
import TextComponent from './TextComponent'

function ReactMemo() {
  const [title, setTitle] = useState("Hello Tanish 1")

  function updateTitle() {
    setTitle("Hello " + Math.random());
  }

  return (
    <>
      {/* <HeaderWithButton /> */}
      <button onClick={updateTitle}>Click me</button>
      <Header title={title} />
      <Header title="Hello Tanish 2" />
      <Header title="Hello Tanish 3" />
      <Header title="Hello Tanish 4" />
      {/* What was the problem with ths approach was, the whole dom re-renders, as the first child render by this the parent div re-renders and if the parent re-renders then the all the child divs also re-renders */}

      {/* to fix this, we need to move the state to another component (like we do it below) */}
      {/* FIXME: The most optimal solution was to use "REACT MEMO" */}


      <br /><br />

      {/* TODO: Wrapper Component */}
      <CardWrapper>
        <div>hi there 1</div>
        <div>Hello 1</div>
      </CardWrapper>

      <CardWrapper>
        <TextComponent />
      </CardWrapper>
    </>
  )
}

// another component
// function HeaderWithButton() {
//   const [title, setTitle] = useState("Hello Tanish1")

//   function updateTitle() {
//     setTitle("Hello " + Math.random());
//   }

//   return (
//     <div>
//       <button onClick={updateTitle}>Click me</button>
//       <Header title={title} />
//     </div>
//   )
// }



export default ReactMemo;