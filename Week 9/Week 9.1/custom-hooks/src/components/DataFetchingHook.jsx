import React, { useEffect, useState } from 'react'
import axios from 'axios'

function DataFetchingHook() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get("https://sum-server.100xdevs.com/todos")
      .then(res => {
        setTodos(res.data.todos);
      })
  }, [])

  return (
    <>
      {todos.map(todo => <Track todo={todo} />)}
    </>
  )

  function Track({ todo }) {
    return (
      <>
        {todo.title}
        <br />
        {todo.description}
        <br />
      </>
    )
  }
}

export default DataFetchingHook