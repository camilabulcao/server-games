const express = require("express")
const app = express()
const router = require("./route/gamesRoute")

app.use("/", router)

module.exports = app