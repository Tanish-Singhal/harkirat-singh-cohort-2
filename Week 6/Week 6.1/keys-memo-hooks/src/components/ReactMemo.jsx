import React, { useState, memo } from 'react'

function ReactMemo() {
  const [title, setTitle] = useState("Hello Tanish 1")

  function updateTitle() {
    setTitle("Hello " + Math.random());
  }

  return (
    <>
      {/* <HeaderWithButton /> */}
      <button onClick={updateTitle}>Click me to change the title</button>
      <Header title={title} />
      
      <br />
      
      <Header title="My name is raman" />
      <Header title="My name is raman" />
      <Header title="My name is raman" />
      <Header title="My name is raman" />
      {/* What was the problem with ths approach was, the whole dom re-renders, as the first child render by this the parent div re-renders and if the parent re-renders then the all the child divs also re-renders */}

      {/* to fix this, we need to move the state to another component (like we do it below) */}
      {/* FIXME: The most optimal solution was to use "REACT MEMO" */}
    </>
  )
}

// another component
// function HeaderWithButton() {
//   const [title, setTitle] = useState("Hello Tanish1")

//   function upadateTitle() {
//     setTitle("Hello " + Math.random());
//   }

//   return (
//     <div>
//       <button onClick={updateTitle}>Click me</button>
//       <Header title={title} />
//     </div>
//   )
// }



// FIXME: React Memo
// It lets you skip re-rendering a component when its props are unchanged.
const Header = memo(function ({title}) {
  return (
    <div>
      {title}
    </div>
  )
});

export default ReactMemo;
