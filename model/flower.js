const mongoose= require("mongoose");
const flowerSchema=mongoose.Schema({
    flowerName:{
        type:String,
        required:true
    },
    shopImgPath:{
        type:String,
        required:true
    },
    shopPrice:{
        type:Number,
        required:true
    },
    appPrice:{
        type:Number,
        required:true
    },
    shopDate:{
        type:Date,
        default:Date.now
    },
    shopClick:{
        type:Number,
        default:0
    },
    shopType:{
        type:String,
        required:true
    },
    flowerId:{
        type:Number,
        required:true
    }
})

const Flower=mongoose.model("Flower",flowerSchema)

module.exports={Flower}