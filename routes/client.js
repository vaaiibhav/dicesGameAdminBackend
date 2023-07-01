const express = require("express");


const {
    simpleConsole,
    warnConsole,
    dangerConsole,
    successConsole,
    darkConsole,
  } = require("../utils/colorConsoler");
  

const router = express.Router();
router.get('/',(req,res)=>{
    warnConsole(req.method)
    res.send("Client Endpoint");
})
module.exports = router;
