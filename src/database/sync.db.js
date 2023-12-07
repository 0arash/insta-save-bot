const sequelize = require("./database");

const syncDatabase = async () => {
  try {
    await sequelize.sync();
    console.log("Database synced.");
  } catch (error) {
    console.log("Error: ", error);
  }
};

module.exports = {syncDatabase};
