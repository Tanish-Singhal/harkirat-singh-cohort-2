import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [todo, setTODO] = useState({});
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  return (
    <>
      <h1>TODO App</h1>

      <div>
        <input type="text" placeholder='Enter title' value={title} />
        <textarea placeholder='Enter description' value={description} ></textarea>
        <button onClick={handleAddTodo}>Add TODO</button>
      </div>

      <div>
        <h2>TODO List</h2>

        <ul>

        </ul>
      </div>
    </>
  )
}

export default App
