import React, { useState } from 'react'

let counter = 4;

function ReactKeys() {
  const [todos, setTodos] = useState([{
    id: 1,
    title: "go to gym",
    description: "go to fym today"
  }, {
    id: 2,
    title: "eat food",
    description: "eat healthy food"
  }, {
    id: 3,
    title: "go to class",
    description: "go to web dev class"
  }])

  function addTodo() {
    setTodos([...todos, {
      id: counter++,
      title: Math.random(),
      description: Math.random()
    }])
  }

  return (
    <>
      <button onClick={addTodo}>Add a Todo</button>
      {todos.map(function (todo) {
        return <Todo key={todo.id} title={todo.title} description={todo.description} />
      })}
      
      {/* Whenever the React is trying to do some operation on the divs, then it will be difficult for React to understand what element or div has to change */}
      {/* so it is important to add keys in the divs, it will help react to monitor in which div react has to perform the operations */}
    </>
  )
}

// component
function Todo({title, description}) {
  return (
    <>
        <h2>{title}</h2>
        <h5>{description}</h5>
    </>
  )
}

export default ReactKeys;