const jwt = require("jsonwebtoken");

// JWT can do 3 things
// 1. generate
// 2. decode
// 3. verify


const user = {
  name: "tanish",
  accountNumber: 123123123
}

let secretPassword = "Password that not to be shared with anyone"
// token has been generated using this password, hence this token can only be verified using this password only

// jwt 
const token  = jwt.sign(user, secretPassword)
console.log(token);   
// this will generate a very long string which has 3 parts
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoidGFuaXNoIiwiYWNjb3VudE51bWJlciI6MTIzMTIzMTIzLCJpYXQiOjE3MTMxMjU3NDd9.X1DK9WnnRj9G8T1kX3HcYeEf26N09rScCEPRmm1Vx0g

// but this password was decoded by anyone, and the person will decode all the content that was hidden inside this string
// nut the bank can only verify that content inside that jwt token, as it only have that password by which the jwt was generated

const verifyToken = jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoidGFuaXNoIiwiYWNjb3VudE51bWJlciI6MTIzMTIzMTIzLCJpYXQiOjE3MTMxNjk2OTJ9.s0moVlTbO0UNpb39KwSCTbW39MOcLWqE6FuXXBHeUgo", secretPassword);

console.log(verifyToken);


// FIXME: Tying with another jwt token of same content (of different password)

// but if you make another token with the same data 
// const user = {
//   name: "tanish",
//   accountNumber: 123123123
// }

// and then verify it by using the different secret key, then the server will reject it

// const anotherVerifyToken = jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoidGFuaXNoIiwiYWNjb3VudE51bWJlciI6MTIzMTIzMTIzLCJpYXQiOjE3MTMxMjY0MzF9.B_1PMgu3NycRlg_Uqy57a2pXzFL9NqWXfPzVwCp7M2w", secretPassword);
// console.log(anotherVerifyToken);