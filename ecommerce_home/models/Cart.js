const { timeStamp } = require("console");
const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema({
    userId : {type:String},
    products: [
        {
            productId:{type:String},
            quantity:{type:Number,default:1}
        }
    ],
    
    
},{timeStamp:true})

module.exports = mongoose.model("Cart",CartSchema)