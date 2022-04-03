const express = require("express");
const app = express()
const port = 3000

app.get("/greeting/:name", (req, res) => {
    res.send(req.params.name + "! It's so great to see you!")
});

app.listen(port, () => {
    console.log("Express is listening on port;", port)
});

// "Greeting express application created."