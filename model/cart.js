const mongoose= require("mongoose");
const cartSchema=mongoose.Schema({
    cartImgPath:{
        type:String,
        required:true
    },
    cartName:{
        type:String,
        required:true
    },
    onePrice:{
        type:Number,
        required:true
    },
    subtotal:{
        type:Number,
        required:true
    },
    cartId:{
        type:Number,
        required:true
    },
    uid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    cartCount:{
        type:Number
    }
})

const Cart=mongoose.model("Cart",cartSchema)

module.exports={Cart}