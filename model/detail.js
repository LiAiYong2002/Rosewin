const mongoose= require("mongoose");
const detailSchema=mongoose.Schema({
    flowerId:Number,
    smallImgPath:[String],
    bannerImgPath:{
        type:String,
        required:true
    },
    flowerTitle:{
        type:String,
        required:true
    },
    flowerPrice:{
        type:String,
        required:true
    },
    appPrice:String,
    flowerNum:{
        type:String,
        required:true
    },
    material:{
        type:String
    },
    pack:{
        type:String
    },
    flowerLanguage:{
        type:String,
        default:null
    },
    moreImgPath:[String]
    
})

const Detail=mongoose.model("Detail",detailSchema)

module.exports={Detail}
