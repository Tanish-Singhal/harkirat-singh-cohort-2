import React, { useState } from 'react'

function CreateTodo() {
  // react query 
  const [title, setTitle] = useState("");
  cosnt [description, setDescription] = useState("");

  return (
    <div>
        <input type='text' placeholder='title' style={{padding: 10, margin: 10}} onChange={function(e) {
          const value = e.target.value;
          setDescription(e.target.value);
        }} />

        <br />
        
        <input type="text" placeholder='description' style={{padding: 10, margin: 10}} onChange={function(e) {
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