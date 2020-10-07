const express = require ("express")
const router = express.Router()
const controller = require("../controller/gamesController")
const cors = require("cors")

router.get("/games", cors (), controller.getGames)

module.exports = router