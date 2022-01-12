const express = require('express');
const app = express();
const bodyparser = require('body-parser');
var urlencoded = bodyparser.urlencoded({extended:false})
app.set('view engine','ejs')
const mysql = require('mysql');
const con = mysql.createConnection({
    host:'localhost',
    user:"root",
    password:'',
    database:'chetu'
});
con.connect((err)=>{
    if(err){return console.log("error"+err)}
    console.log("database connected...");
})



app.get('/',(req,res)=>{
    
    res.render('login')
});

app.get('/signup',(req,res)=>{
    
    res.render('signup');
    
})

app.post('/register',urlencoded,(req,res)=>{
    username = req.body.username;
    userpass = req.body.userpass;
    let sql = `insert into emp(username, userpass) value (?,?)`;
    con.query(sql,[username,userpass],(err)=>{
        if(err){
            return console.log("error"+err)
        }
        console.log("record added...")
    })
    res.send(`Thanks for register.<br>
        <a href='/'>Login</a>
    `)
    
})
app.get('/welcome',(req,res)=>{
    res.render("welcome")
});
app.post('/login',urlencoded,(req,res)=>{
    //res.render('login')
    username = req.body.username;
    userpass = req.body.userpass;
    sql = `select * from emp where username= ? and userpass=?`
    
    //res.render('welcomeLogin',{user:username})
     con.query(sql,[username,userpass],(err,result)=>{
        if(err){return console.log("error"+err)}
            //console.log(result[0].username)
            //if(result[0].username == 'admin')
            if(result.length>0){
                res.render('welcomeLogin',{user:result[0].username})
            }
            else{
            res.send(`<h1> you are not authorised person.<br>
                    <a href='/'>Home</a>
            `)
            }
    }) 
})
app.get('/welcomeLogin',(req,res)=>{
    res.render('welcomeLogin')
})
app.get('/admin',(req,res)=>{
    res.render('admin')
})
app.get('/delete',(req,res)=>{
    res.render('delete')
    id=req.query.eid;
    let sql = `delete from emp where id=?`
    con.query(sql,[id],(err)=>{
        if(err){return console.log(err)}
        console.log("record deleted...");
    })

})

app.get('/update',(req, res)=>{
    res.render('update')
    id = req.query.id;
    username = req.query.username;
    userpass = req.query.userpass;

    sql =`update emp set username = ?, userpass=? where id=?`;
    con.query(sql,[username, userpass, id], (err)=>{
        if(err){return console.log("error"+err)}
        console.log("record updated...");
    })

})

app.get('/show',(req,res)=>{
    res.render('show');
})

app.get('/showAllRecord',(req,res)=>{
    //res.render('showAllRecord');
    sql = `select * from emp`;
    con.query(sql,(err,result)=>{
        if(err){return console.log("error"+err)}
            res.render('showAllRecord', {data:result})
    })
})

app.listen(9999);
console.log("server started...")