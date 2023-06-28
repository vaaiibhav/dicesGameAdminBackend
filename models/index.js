const databaseConfig = require("../config/databaseConfig");
const {
  simpleConsole,
  warnConsole,
  dangerConsole,
  successConsole,
  darkConsole,
} = require("../utils/colorConsoler");
const { Sequelize, DataTypes } = require("sequelize");

const sequelizeInstance = new Sequelize(
  databaseConfig.DB,
  databaseConfig.USER,
  databaseConfig.PASSWORD,
  {
    host: databaseConfig.HOST,
    dialect: databaseConfig.dialect,
    operatorsAliases: false,

    pool: {
      max: databaseConfig.pool.max,
      min: databaseConfig.pool.min,
      acquire: databaseConfig.pool.acquire,
      idle: databaseConfig.pool.idle,
    },
  }
);

// Validate and connect to the database
sequelizeInstance
  .authenticate()
  .then(() => {
    successConsole(`Success Connecting to DB: ${databaseConfig.DB}`);
  })
  .catch((error) => {
    dangerConsole(`Error Connecting to DB: ${error}`);
  });

module.exports = sequelizeInstance;
