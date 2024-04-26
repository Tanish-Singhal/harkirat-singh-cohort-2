import React, { useState } from 'react'

function CreateTodo() {
  // react query 
  const [title, setTitle] = useState("");
  cosnt [description, setDescription] = useState("");

  return (
    <div>
      <input style={{
        padding: 10, 
        margin: 10
      }} type='text' placeholder='title' onChange={function(e) {
        const value = e.target.value;
        setDescription(e.target.value);
      }} />

      <br />
      
      <input style={{
        padding: 10, 
        margin: 10
      }} type="text" placeholder='description' onChange={function(e) {
        const value = e.target.value;
        setDescription(e.target.value);
      }} />

      <button onClick={function() {
        fetch("http://localhost:3000/todo", {
          method: "POST",
          body: JSON.stringify({
            title: title,
            description: description
          }),
          headers: {
            "Content-type": "application/json"
          }
        })
        .then(async function(res) {
          const json = await res.json();
          alert("Todo Added");
        })
      }}>Add a TODO</button>
    </div>
  )
}

export default CreateTodo;