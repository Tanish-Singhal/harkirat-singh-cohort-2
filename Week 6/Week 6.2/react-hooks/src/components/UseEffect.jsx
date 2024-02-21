import React, { useState, useEffect } from 'react'
import axios from "axios";

function UseEffect() {
  const [selectedId, setSelectedId] = useState(1);

  return (
    <>
      <button onClick={() => setSelectedId(1)}>1</button>   
      <button onClick={() => setSelectedId(2)}>2</button>
      <button onClick={() => setSelectedId(3)}>3</button>
      <button onClick={() => setSelectedId(4)}>4</button>
      <Todo id={selectedId} />
    </>
  )
}

function Todo({id}) {
  const [todo, setTodo] = useState({});

  useEffect(() => {
    axios.get("https://sum-server.100xdevs.com/todo?id=" + id)
      .then(function(response) {
        setTodo(response.data.todo);
      })
  }, [id])

  return (
    <>
      <h1>{todo.title}</h1>
      <h3>{todo.description}</h3>
    </>
  )
}

export default UseEffect;