require("dotenv").config();

const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  database: "instasavebot",
  dialect: "mysql",
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  logging: false,
});

module.exports = sequelize