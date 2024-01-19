const express = require("express");
const app = express();

function calculateSum(n) {
    let ans = 0;
    for (let i = 0; i <= n; i++) {
        ans = ans + i;
    }
    return ans;
}


app.get("/", function(req, res) {
    const n = Number(req.query.n); // Convert n to a number
    const ans = calculateSum(n);
    res.send("Your answer is " + ans);
})

app.listen(3000);
