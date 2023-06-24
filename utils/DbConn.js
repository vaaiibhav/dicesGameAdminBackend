const { Sequelize } = require("sequelize");

// Create MySQL connection
 const sequelize = new Sequelize(
  process.env.DB_HOST,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  { host: process.env.DB_HOST, dialect: "mysql2" }
);
sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
 }).catch((error) => {
    console.error('Unable to connect to the database: ', error);
 });
 
 module.exports = sequelize