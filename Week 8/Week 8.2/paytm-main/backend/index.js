const express = require("express");
const cors = require("cors");
const mainRouter = require("./routes/index");

const app = express();

app.use(cors());
app.use(express.json());


// that's how we can add some prefix routes in all the URL
app.use("/api/v1/", mainRouter);

// all my routes are look like this
// mainRouter (user)
//  /api/v1/user/
//  /api/v1/user/

app.listen(3000);
