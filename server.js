'use strict';
const express = require("express")
const app = express();

function start(port) {
    app.listen(port, () => {
        console.log(`The server is working on ${port}`)
    })
}
app.get("/", (req, res) => {
    res.status(200).send("Hello in Home page..")
})
app.get("/data", (req, res) => {
    res.status(200).json({
        name: "Mujahed Abuarqob",
        studed: "Civil Enginnering",
        live: "Amman-Jordan",
        learning: "JavaScript",
        email: "mujahedyousef97@gmail.com"

    })
})
module.exports = {
    app: app,
    start: start
}