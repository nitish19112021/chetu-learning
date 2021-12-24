const express = require("express")
const app = express()
require('dotenv').config()
const mongoose = require("mongoose");
const userRoute = require("./routes/user")
const authRoute = require("./routes/auth")
const prodRoute = require("./routes/product")
app.use(express.json())

mongoose.connect(process.env.connection)
.then(()=>{console.log("db connected successfulley")})
.catch((error)=>{console.log(error)})

app.use("/api/user", userRoute)
app.use("/api/auth", authRoute)
app.use("/api/product", prodRoute)
const PORT = process.env.PORT || 5000


app.listen(PORT,()=>{
    console.log("server started at localhost: "+PORT)
})