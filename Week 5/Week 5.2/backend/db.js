// Todo {
//     title: string,
//     desription: string,
//     completed: boolean
// }

const mongoose = require("mongoose");
// mongoose.connect("mongodb+srv://admin:Trevor%401887@cluster0.3riopi0.mongodb.net/basic-todos-app")

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: {
        type: Boolean,
        default: false
    }
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo: todo
}