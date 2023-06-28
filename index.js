require('dotenv').config()
const cors = require('cors')
const express = require('express');
const app = express();
var httpServer = require ('http').createServer(app);

const {simpleConsole, warnConsole, dangerConsole,successConsole,darkConsole} = require("./utils/colorConsoler");
// const sequelize = require('./utils/DbConn');

const port = process.env.SERVER_PORT || 3105;

const socketCluserServer = require('socketcluster-server');
let agServer = socketCluserServer.attach(httpServer);

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
require("./routes/routes.js")(app);

app.get('/', (req, res) => {
  simpleConsole("Hello World")
    res.send('Hello World!')
  })
  
app.listen(port, () => {
    darkConsole(`Admin Backend app running on port ${port}`)
  })