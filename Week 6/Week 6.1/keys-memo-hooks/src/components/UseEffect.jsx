import React, { useState, useEffect } from 'react'

function UseEffect() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      fetch("https://sum-server.100xdevs.com/todos")
        .then(async (res) => {
          const json = await res.json();
          setTodos(json.todos);
        })
        .catch((error) => console.error("Error fetching todos:", error));
    }, 5000);

    // Clean up the interval when the component unmounts or when the dependencies change
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      {todos.map((todo) => (
        <Todo key={todo.id} title={todo.title} description={todo.description} />
      ))}
    </>
  )
}

// component
function Todo({ title, description }) {
  return (
    <>
      <h2>{title}</h2>
      <h5>{description}</h5>
    </>
  );
}

export default UseEffect;