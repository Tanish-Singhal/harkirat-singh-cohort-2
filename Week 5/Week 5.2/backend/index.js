const express = require('express');
const { createTodo, updateTodo } = require('./types');
const { todo } = require('./db');
const app = express();
const cors = require("cors");
const port = 3000

app.use(express.json());
app.use(cors());

// body {
//   title: String
//   description: String
// }
app.post('/todo', async function (req, res) {
  const createPayload = req.body;
  const parsedPayload = createTodo.safeParse(createPayload);
  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "You sent the wrong input",
    })
    return;
  }

  // if the inputs were sucess, then put the payload into the mongodb
  await todo.create({
    title: createPayload.title,
    description: createPayload.description,
    completed: false
  })

  res.json({
    msg: "TODO created"
  })
})

app.get('/todos', async function (req, res) {
  const todos = await todo.find({});
  res.json({
    todos: todos
  })
})

app.put('/completed', async function (req, res) {
  const updatePayload = req.body;
  const parsedPayload = updateTodo.safeParse(updatePayload);
  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "You sent the wrong input",
    })
    return;
  }
  
  await todo.update({
    _id: req.body.id
  }, {
    completed: true
  })

  res.json({
    msg: "TODO marked as completed"
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
}) 