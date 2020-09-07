const mongoose= require("mongoose");
const flowerdetailSchema=mongoose.Schema({
    flowerName:{
        type:String,
        required:true
    },
    flowerDetailOne:{
        type:String,
        required:true
    },
    flowerDetailTwo:{
        type:String,
        required:true
    },
    flowerRecommend:{
        type:String,
        required:true
    },
    flowerDetailThree:{
        type:String,
        required:true
    },
    flowerDetailFore:{
        type:String,
        required:true
    },
    flowerId:{
        type:Number,
        default:0
    },
    flowerImg:{
        type:String,
        required:true
    }
})

const flowerdetail=mongoose.model("flowerdetail",flowerdetailSchema)

module.exports={flowerdetail}