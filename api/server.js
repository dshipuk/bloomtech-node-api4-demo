const express = require("express");

const server = express();

server.get("/", (req,res) => {
    res.send("<h1>Heroku Deployment</h1>");
})

server.get("/node-env", (req,res) => {
    res.json(process.env.NODE_ENV);
})


module.exports = server;