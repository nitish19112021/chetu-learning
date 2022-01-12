const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const urlencoded = bodyparser.urlencoded({extended:false})
app.set('view engine','ejs');
const mysql = require('mysql');
const con = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'chetu'
})

con.connect((err)=>{
    if(err){return console.log('error'+err)}
    console.log("database conneted..");
})
app.get('/',(req,res)=>{
    res.render('login')
})
app.get('/signup',(req,res)=>{
    res.render('signup')
})
app.get('/admin',(req,res)=>{
    res.render('admin');
})
app.post('/welcomesign',urlencoded,(req,res)=>{
    let username = req.body.username;
    let userdept = req.body.userdept;
    let userpass = req.body.userpass;
    let sql = `insert into emp(username,userdept,userpass) values(?,?,?)`;
    con.query(sql,[username,userdept,userpass],(err)=>{
        if(err){return console.log('error'+err)}
        res.render('welcomesign')
    })
})
app.post('/welcome',urlencoded,(req,res)=>{
    let username = req.body.username;
    let userpass = req.body.userpass;
    let sql = `select * from emp where username = ? and userpass = ?`;
    con.query(sql,[username,userpass],(err,result)=>{
        if(err){return console.log('error'+err)}
        if(result.length>0){
            res.render('welcome',{data:result[0].username})
        }
        else{
            res.send('Not a valid user<br><a href="/">Home</a>');
        }
    })
});
app.get('/welcome',(req,res)=>{
    res.render('welcome')
});
app.post('/find',(req,res)=>{
let sql = `select * from emp`;
con.query(sql,(err,result)=>{
    if(err){return console.log('error'+err)}
    res.render('find',{data:result})
})
    

})
app.listen(9999,()=>{
    console.log('server started...');
});