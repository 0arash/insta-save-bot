const { DataTypes } = require("sequelize");
const sequelize = require("../database/database");

const User = sequelize.define("user", {
  uid: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,
    unique: true,
  },
  name: {
    type: DataTypes.STRING,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  mobile: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  bio: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  lang: {
    type: DataTypes.STRING,
  },
});

module.exports = User;
