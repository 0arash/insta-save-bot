require("dotenv").config()

const express = require("express");
const router = express.Router();
const botController = require("../controller/bot.controller");

router.post(`/bot${process.env.BOT_TOKEN}`, botController.botUpdate);


module.exports = router