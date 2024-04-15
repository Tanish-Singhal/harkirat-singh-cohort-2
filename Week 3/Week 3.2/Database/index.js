const express = require("express");
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

// mongoose.connect('mongodb+srv://admin:Trevor%401887@cluster0.3riopi0.mongodb.net/userappnew');


const User = mongoose.model('Users', {
    username: String,
    email: String,
    password: String
});

app.post("/signup", async function(req, res) {
    let username = req.body.username;
    let email = req.body.email;
    let password = req.body.password;

    const existingUser = await User.findOne({
        username: username
    })
    if (existingUser) {
        return res.status(400).send(("Username already exists"));
    }
    
    // this is how we can put data in the database
    let user = new User({
        username: username,
        email: email,
        password: password
    });

    user.save();
    
    res.json({
        "msg": "User created successfully"
    })
})

app.listen(3000);