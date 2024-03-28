const express = require('express');
const userRouter = require("./user");

//  This function is used when you want to create a new router object in your program to handle requests. 
const router = express.Router();

router.use("/user", userRouter);
// all my routes are look like this
// mainRouter (signin, signup)
//  /api/v1/user/signin
//  /api/v1/user/singup

module.exports = router;
