const { Sequelize } = require("sequelize");
const {simpleConsole, warnConsole, dangerConsole,successConsole,darkConsole} = require("./colorConsoler");

// Create MySQL connection
 const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  { host: process.env.DB_HOST, dialect: "mysql" }
);
sequelize.authenticate().then(() => {
   successConsole(`Connection to ${process.env.DB_NAME} Success.`);
 }).catch((error) => {
   dangerConsole(`Unable to connect to the database: ${error}`);
 });
 
 module.exports = sequelize