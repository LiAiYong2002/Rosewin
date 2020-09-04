const mongoose= require("mongoose");
const flowervirgoSchema = mongoose.Schema({
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
    flowerMoney:{
        type:Number,
        required:true
    },
    flowerId:{
        type:Number,
        required:true 
    },
    flowerFlowersalesvolume:{
        type:Number,
        required:true 
    }
})
const Flowervirgo = mongoose.model("Flowervirgo",flowervirgoSchema)


module.exports = {Flowervirgo}
