const express= require("express");
const app = express();

const users =[{
    name: "John",
    kidneys: [{
        healthy: false
    }]
}];

// TODO: we have to display the number of kidneys and conditio of kidneys
app.get("/", function(req, res) {
    const johnKidney = users[0].kidneys;
    const numberOfKidneys = johnKidney.length;
    let numberOfHealthyKidneys = 0;
    for (let i = 0; i < johnKidney.length; i++) {
        if (johnKidney[i].healthy) {
            numberOfHealthyKidneys = numberOfHealthyKidneys + 1;
        }
    }     
    const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
    
    res.json({
        numberOfKidneys,
        numberOfHealthyKidneys,
        numberOfUnhealthyKidneys
    })
});

// TODO: we have to add kidneys
app.use(express.json());

app.post("/", function(req, res) {
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    })

    res.json({
        msg: "DONE"
    })
});

// TODO: we have to update all kidney to healthy
app.put("/", function(req, res) {
    for (let i = 0; i < users[0].kidneys.length; i++) {
        users[0].kidneys[i].healthy = true;
    }

    res.json({});
});

// TODO: we have to remove all the unHealthy kidneys
app.delete("/", function(Req, res) {
    const newKidneys = [];
    for (let i = 0; i < users[0].kidneys.length; i++) {
        if (users[0].kidneys[i].healthy) {
            newKidneys.push({
                healthy: true
            })
        }
    }
    users[0].kidneys = newKidneys;

    res.json({
        msg: "DONE"
    })
})

app.listen(3000);