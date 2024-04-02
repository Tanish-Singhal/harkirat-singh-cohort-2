// now we create our own http server
const express = require('express');
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 3000;      // by this we can start the process to difaxrent Port numbers
// to set different port number just write "$env:PORT = 3005" in terminal

// middlewares
app.use(bodyParser.json());

// create a todo app that lets users store todos on the server
app.get('/', function(req, res) {
  res.send('Hello World!');
  console.log(req.body);
});

app.get("/route-handler", function(req, res) {
    res.json({
        name: "Tanish",
        age: 21
    })
});

app.post("/html", function(req, res) {
    res.send("<b>hi there</b>")
});

app.post("/conversations", function(req, res) {
    console.log(req.headers["authorization"])
    res.send({
        msg: "2 + 2 = 4"
    })
});

app.post("/query-parameters", function(req, res) {
    const message = req.query.message;
    console.log(message);
});

app.listen(port, function() {
    console.log(`Example app listening on port ${port}`);
});


