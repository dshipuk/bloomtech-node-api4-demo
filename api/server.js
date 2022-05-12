const express = require("express");

const server = express();

server.get("/node-env", (req,res) => {
    res.json(process.env.NODE_ENV);
})


module.exports = server;