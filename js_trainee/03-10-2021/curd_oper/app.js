const express = require('express');///////////// inbuit module
const app = express();
const bodyparser = require('body-parser')/////third party module
const urlencoded = bodyparser.urlencoded({extended:false});
const mysql = require('mysql');
const con = mysql.createConnection({
  "host":"localhost",
  "user": "root",
  "password": "",
  "database": "chetu"
})
app.set('view engine','ejs')

con.connect((err)=>{
  if(err){ return console.error('error'+err)}
  console.log('database connected...')
})


app.get('/',(req,res)=>{
  res.render('login');
})

app.get('/signup',(req,res)=>{
  res.render('signup');
})

app.post('/signup',urlencoded,(req,res)=>{
  const ename = req.body.ename;
  const epass = req.body.epass;
  const edept = req.body.edept;

  const sql = `insert into empch(ename,epass,edept) values(?,?,?)`;
  con.query(sql,[ename,epass,edept],(err)=>{
    if(err){return console.error("error"+err)}
    console.log("record inserted..")
  })
  res.render('welcomesign',{name:ename});
})

app.listen(8888,()=>{
  console.log("server is listening");
})