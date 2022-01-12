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
});
con.connect((err)=>{
    if(err){return console.log("error"+err);}
    console.log('Database connected..')
})
app.get('/',(req,res)=>{
    res.render('login')
})
app.post('/welcomelogin',urlencoded,(req,res)=>{
    let username = req.body.username;
    let userpass = req.body.userpass;
    let sql = `select * from emp where username = ? and userpass = ?`;
    con.query(sql,[username,userpass],(err, result)=>{
        if(err){return console.log(err)}
        
        if(result.length> 0){
            res.render('welcomelogin',{data:result[0].username});
        }
        else{
            res.send('<h1>Invalid user<br><a href="/">Home</a></h1>')
        }
    })
})

app.get('/signup',(req,res)=>{
    res.render('signup')
})
app.post('/welcomesign',urlencoded,(req,res)=>{
    //res.render('welcomesign')
    let username = req.body.username;
    let userdept = req.body.userdept;
    let userpass = req.body.userpass;
    let sql =`insert into emp(username, userdept, userpass) values(?,?,?)`
    con.query(sql,[username,userdept,userpass],(err)=>{
        if(err){return console.log('error'+err)}
        res.render('welcomesign')
    })

})
app.get('/admin',(req,res)=>{
    res.render('admin');
})
app.post('/operation',urlencoded,(req,res)=>{
    let username = req.body.username;
    let userpass = req.body.userpass;
    if(username=='admin' && userpass=='admin'){
        res.render('operation')
    }
})

app.get('/delete',(req,res)=>{
    res.render('delete')
})

app.post('/deleteRec',urlencoded,(req,res)=>{
    let id = req.body.id;
    let sql = `delete from emp where id=?`;
    con.query(sql,[id],(err)=>{
        res.send('<h1>Record Deleted</h1><br><a href="/">Home</a>');
        
    })
})
app.get('/update',(req,res)=>{
    res.render('update');
})
app.post('/updaterec',urlencoded,(req,res)=>{
    let username = req.body.username;
    let userdept = req.body.userdept;
    let id = req.body.id;
    let sql = `update emp set username= ? , userdept=? where id = ?`;
    con.query(sql,[username,userdept,id],(err)=>{
        if(err){return console.log("error"+err)}
        res.send('<h1>Record Updated..</h1><br><h2><a href="/">Home</a></h2>');
    })
})

app.get('/find',(req,res)=>{
    
    let sql = `select * from emp`
    con.query(sql,(err,result)=>{
        if(err){return console.log('error'+err)}
        res.render('find',{data:result})
    })
})

app.listen(9999,()=>{
    console.log('server started..')
})