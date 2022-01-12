const express = require('express');
const app = express();
const checkout = (req,res,next)=>{
    console.log('current route is '+req.path)
    next();
}
app.use(checkout);

app.get("/", (req,res)=>{
    res.send("hello this is the home page")
})
app.get("/about",(req,res)=>{
    res.send("<h3>hello about page</h3>")
});
app.get("/login", (req,res)=>{
    res.send("<h3>login page</h3>")
});
app.listen(9999);
console.log("server started...")