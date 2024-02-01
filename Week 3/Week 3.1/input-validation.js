// Input validation
// the user will write the input in whatever form, you have to figure out how to figure out something with that output

const express= require("express");
const zod = require("zod");
const app = express();

const schema = zod.array(zod.number());

app.use(express.json());

app.post("/health-checkup", function(req, res) {
    // kidneys = [1, 2]
    const kidneys = req.body.kidneys;

    // const kidneyLength = kidneys.length;
    // res.send("you have " + kidneyLength + " kidneys");

    const response = schema.safeParse(kidneys)
    if (!response.sucess) {
        res.status(411).json({
            msg: "input is invalid"
        })
    }
    else {
        res.send({
            response
        })
    }
});

// global catches
// these help you give the user a better error message
// These are the special type of middlewares that has 4 arguments.
app.use(function(err, req, res, next) {  
    res.json({
        msg: "Sorry something is up with your inputs"
    })
})

// TODO: ZOD
// IT is a nodejs package which provide invidation check so that we don't have to write the logoc of the validate the inputs that user is giving
// we only have to tell it which type of answer we will expect from the user, and hte zod will automatially write the logic for that validation check


app.listen(3000);