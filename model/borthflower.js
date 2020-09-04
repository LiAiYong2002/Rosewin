const mongoose= require("mongoose");
const borthflowerSchema = mongoose.Schema({
    flowerName:{
        type:String,
        required:true
    },
    flowerImg:{
        type:String,
        required:true
    },
    flowerPrice:{
        type:Number,
        required:true
    },
    flowerId:{
        type:Number,
        required:true
    },
    flowerSay:{
        type:String
    }
})
const Borthflower = mongoose.model("Borthflower",borthflowerSchema)


module.exports = {Borthflower}
