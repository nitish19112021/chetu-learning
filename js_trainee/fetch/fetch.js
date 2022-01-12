const express = require('express');
const app = express();
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    //res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
app.get('/',(req,res)=>{
    res.send('[{ename:"niti",esal:100},{ename:"mohit",esal:200},{ename:"buny", esal:300}]');
})
app.listen(9999);
console.log('server started...')