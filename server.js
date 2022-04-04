const express = require("express");
const app = express()
const port = 3000

app.get("/greeting/:name", (req, res) => {
    res.send(req.params.name + "! It's so great to see you!")
});

app.get("/tip/:total/:tipPercentage", (req, res) => {
    res.send(`${(parseInt(req.params.total) /100) * parseInt(req.params.tipPercentage)}`)
});

app.get("/magic/:question", (req, res) => {
    const selections = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]
    const randomIndex = Math.floor(Math.random() * selections.length);
    res.send(`${req.params.question}? <h1>${selections[randomIndex]}</h1>`)
});

app.listen(port, () => {
    console.log("Express is listening on port;", port)
});