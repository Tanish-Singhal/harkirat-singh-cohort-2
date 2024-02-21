import React, { useState, useEffect } from 'react'
import axios from "axios"

// FIXME: custom hooks
function useTodos() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get("https://sum-server.100xdevs.com/todos")
      .then(function(response) {
        setTodos(response.data.todos);
      })
  }, []);

  return todos;
}

// you cannot define a normal function and this put inside a normal function becasue, we cannot use any hook inside a normal function (either the function need to be a hook or a component)

function CustomHooks() {
  // const [todos, setTodos] = useState({})

    // useEffect(() => {
    //   axios.get("https://sum-server.100xdevs.com/todo?id=3")
    //     .then(function(response) {
    //       setTodos(response.data.todos);
    //     })
    // }, [])
    const todos = useTodos();
  
    return (
      <>
        {todos.map(todo => (
          <div>
            <h1>{todo.title}</h1>
            <h3>{todo.description}</h3>
          </div>
        ))}
      </>
    )
}

export default CustomHooks;