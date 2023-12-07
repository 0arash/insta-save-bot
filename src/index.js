require("dotenv").config();

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const botRouter = require("./route/bot.router");
const { syncDatabase } = require("./database/sync.db");

PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use("/", botRouter);

syncDatabase();

app.listen(PORT, () => {
  console.clear();
  console.log(`server is running http://localhost:${PORT}`);
});
