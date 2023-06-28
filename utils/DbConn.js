const { Sequelize } = require("sequelize");
const {simpleConsole, warnConsole, dangerConsole,successConsole,darkConsole} = require("./utils/colorConsoler");


const {} = require("../")
// Create MySQL connection
 const sequelize = new Sequelize(
  process.env.DB_HOST,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  { host: process.env.DB_HOST, dialect: "mysql2" }
);
sequelize.authenticate().then(() => {
   successConsole('Connection has been established successfully.');
 }).catch((error) => {
   dangerConsole('Unable to connect to the database: ', error);
 });
 
 module.exports = sequelize