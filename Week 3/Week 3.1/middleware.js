const express = require("express");
const app = express();

let numberOfRequests = 0;
function calculateRequest(req, res, next) {
    numberOfRequests++;
    console.log("number of Request: ", numberOfRequests);
    next();
}
app.use(calculateRequest);

// this help to extracted the body
app.use(express.json());

app.get("/kidney-checkup", function(req, res) {
    const username = req.headers.username;
    const password = req.headers.password;
    const kidneyId = req.query.kidneyId;

    if(username != 'tanish' || password != "pass") {
        res.status(400).json({
            msg: "Sonething up with your inputs"
        })
        return;
    }

    if (kidneyId != 1 && kidneyId != 2) {
        res.status(400).json({
            msg: "Something up with your inputs"
        })
        return;
    }

    // do something with kidneys here
    res.status(200).json({
        msg: "Your kidneys are fine!"
    })  
});

app.post("/health-checkup", function(req, res) {
    let bodyContent = req.body.msg;
    console.log(bodyContent);
    res.json({})
})

app.listen(3000);