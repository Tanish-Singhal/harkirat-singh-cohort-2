import React, { useState } from 'react'

function Todo() {
  const [todos, setTodos] = useState([{
    title: "Go to gym",
    description: "Go to gym from 7-9",
    completed: false
  }, {
    title: "Study DSA",
    description: "Study DSA from 9-10",
    completed: true
  }]);

  function addTodo() {
    // [1, 2]
    // [...todos, 3] => [1, 2, 3]
    setTodos([...todos, {
      title: "new TODO",
      description: "desc of new TODO"
    }])
  }

  return (
    <div>
      
      {/* TODO: {todos}   but this can't be worked because it is an array and this approach only works with the string */}
      {/* {JSON.stringify(todos)} */}

      <button onClick={addTodo}>Add a new TODO</button>

      {/* <TODO title={todos[0].title} description={todos[0].description} />
      <TODO title={todos[1].title} description={todos[1].description} /> */}
      {/* TODO: but this approach was not scalable */}

      {todos.map(function(todo) {
        return <TODO title={todo.title} description={todo.description} />
      })}

    </div>
  )
}

// component
function TODO(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <h3>{props.description}</h3>
    </div>
  )
}

export default Todo;