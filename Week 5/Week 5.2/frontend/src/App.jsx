import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CreateTodo from "./components/CreateTodo"
import Todos from "./components/Todos"

function App() {
  const [todos, setTodos] = useState([]);
  
  // you can't hit one backend url (localhost:3000) from another frontend url (localhost:5173) until your backedn server allows that url. That's why we need "CORS" package

  // wrong way of updating hte state using the backend
  // fetch("http://localhost:3000/todos")
  //   .then(async function(res) {
  //     const json = await res.json();
  //     setTodos(json.todos);
  //   })

  // this above approach is not the good approach to send the or retrieve thigns from a backend server in express because, when the request goes out then after 3 sec the request comes back with the data and then it update the setTodos
  // and we know that, when the state updates react, the whole function App() re-renders


  return (
    <div>
      <CreateTodo />
      <Todos todos={todos} />
    </div>
  )
}

export default App

// 1 15