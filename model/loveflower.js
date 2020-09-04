
const mongoose= require("mongoose");
const flowervirgoSchema = mongoose.Schema({
    loveflowerName:{
        type:String,
        required:true
    },
    loveFlowerImg:{
        type:String,
        required:true
    },
    loveFlowerDownPrice:{
        type:Number,
        required:true
    },
    loveFlowerPrice:{
        type:Number,
        required:true
    },
    loveFlowerSalesVolume:{
        type:Number,
        required:true 
    },
    loveFlowerId:{
        type:Number,
        required:true 
    }
})
const loveflower = mongoose.model("loveflower",flowervirgoSchema)


module.exports = {loveflower}