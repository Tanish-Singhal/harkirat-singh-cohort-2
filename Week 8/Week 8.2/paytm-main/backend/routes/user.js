const express = require("express");
const zod = require("zod");
const { User } = require("../db");
const { Account } = require("../db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");
const { authMiddleware } = require("../middleware");

const router = express.Router();

// Sign-up Route
const signupBody = zod.object({
  username: zod.string().email(),
  password: zod.string().min(8),
  firstName: zod.string(),
  lastName: zod.string(),
});

router.post("/signup", async (req, res) => {
  const { success } = signupBody.safeParse(req.body);

  if (!success) {
    return res.status(411).json({
      message: "Incorrect inputs",
    });
  }

  const existingUser = await User.findOne({
    username: req.body.username,
  });

  if (existingUser) {
    return res.status(411).json({
      message: "Email already taken",
    });
  }

  // hash password using bcrypt
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(req.body.password, salt);

  try {
    const user = await User.create({
      username: req.body.username,
      password: hashPassword,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
    });
  
    // we done this because, we currently don't knwo how to connect our application using banks server
    await Account.create({
      userId: user._id,
      balance: 1 + Math.random() * 10000,
    });  
  
    // generates the token
    const token = jwt.sign({
      userId: user._id,
    }, JWT_SECRET);
  
    res.json({
      message: "User created successfully",
      token: token,
    });

  } catch (error) {
    res.status(500).json({
      message: "Error occured while creating the account",
      error: error.message,
    })
  }
});

// Sign-in Route
const signinBody = zod.object({
  username: zod.string().email(),
  password: zod.string(),
});

router.post("/signin", async (req, res) => {
  const { success } = signinBody.safeParse(req.body);

  if (!success) {
    return res.status(411).json({
      message: "Incorrect inputs",
    });
  }

  // checking the username and the hash password in the database
  try {
    const isUser = await User.findOne({
      username: req.body.username,
    });
    const isPasswordValid = await bcrypt.compare(req.body.password, isUser.password);
  
    if (isUser && isPasswordValid) {
      const token = jwt.sign({
        userId: isUser._id,
      }, JWT_SECRET);
  
      res.json({
        token: token,
      });
      return;
    }
  
    res.status(411).json({
      message: "Error while logging in",
    });

  } catch(error) {
    res.status(500).json({
      message: "Error while logging you",
      error: error.message,
    })
  }
});

// Route for updating the information of the user
const updateBody = zod.object({
  password: zod.string().min(8).optional(),
  firstName: zod.string().optional(),
  lastName: zod.string().optional(),
});

router.put("/", authMiddleware, async (req, res) => {
  const { success, data } = updateBody.safeParse(req.body);

  if (!success) {
    res.status(411).json({
      message: "Error while updating information",
    });
  }

  // hash the updated password
  if (data.password) {
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(data.password, salt);
    data.password = hashPassword; 
  }

  try {
    await User.updateOne(
      { _id: req.userId },
      { $set: data }
    );
  
    res.json({
      message: "Updated successfully",
    });

  } catch (error) {
    res.status(500).json({
      message: "An error occurred while updating the details",
      error: error.message,
    })
  }
});


// TODO: Route to get users from the backend, filterable via firstName/lastName
router.get("/bulk", async (req, res) => {
  const filter = req.query.filter || "";

  try {
    const users = await User.find({
      $or: [{
        firstName: {
          "$regex": filter
        }
      }, {
        lastName: {
          "$regex": filter
        }
      }]
    })
  
    res.json({
      user: users.map(user => ({
        username: user.username,
        firstName: user.firstName,
        lastName: user.lastName,
        _id: user._id
      }))
    })

  } catch(error) {
    res.status(500).json({
      message: "Error occured fetching the user",
      error: error.message,
    })
  }
})

module.exports = router;
