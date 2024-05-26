const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/paytm");

// Schema of the user
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    minLength: 3,
    maxLength: 30,
  },
  password: {
    type: String,
    required: true,
    minLength: 6,
  },
  firstName: {
    type: String,
    required: true,
    maxLength: 50,
  },
  lastName: {
    type: String,
    required: true,
    maxLength: 50,
  },
});

// TODO: usually in the payment application, you shouldn't store the account balance in decimal (33.37 => 3333)
// and put the decimal after two digits in the frontend part
// this is because of the precision errors in javascripts and database
const accountSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,   // Reference to User model, to prevent database to show balance to the user who doesn't even have an account in my application
    ref: 'User',
    required: true,
  },
  balance: {
    type: Number,
    required: true,
  }
})

// create a model from the user and account
const User = mongoose.model("User", userSchema);
const Account = mongoose.model("Account", accountSchema)

module.exports = {
  User,
  Account,
};
