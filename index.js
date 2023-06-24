require('dotenv').config()
const chalk=require("chalk");
const express = require('express')
const app = express();
var httpServer = require ('http').createServer(app);
// Set Consoles
const {log,warn} = console


const sequelize = require('./utils/DbConn')

const port = process.env.SERVER_PORT || 3105;

const socketCluserServer = require('socketcluster-server');
let agServer = socketCluserServer.attach(httpServer);

app.get('/', (req, res) => {
    res.send('Hello World!')
  })
  
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })