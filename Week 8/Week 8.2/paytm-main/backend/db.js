const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/paytm");

// Schema of the user
const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    minLength: 3,
    maxLength: 30
  },
  password: {
      type: String,
      required: true,
      minLength: 6
  },
  firstName: {
      type: String,
      required: true,
      maxLength: 50
  },
  lastName: {
      type: String,
      required: true,
      maxLength: 50
  }
})

// create a model from the user
const User = mongoose.model("User", userSchema);

module.exports= {
  User
}