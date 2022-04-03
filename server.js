const express = require("express");
const app = express()
const port = 3000

app.get("/greeting/:name", (req, res) => {
    res.send(req.params.name + "! It's so great to see you!")
});

app.get("/tip/:total/:tipPercentage", (req, res) => {
    res.send(`${(parseInt(req.params.total) /100) * parseInt(req.params.tipPercentage)}`)
});

app.listen(port, () => {
    console.log("Express is listening on port;", port)
});

