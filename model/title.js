const mongoose= require("mongoose");
const titleSchema=mongoose.Schema({
    shopType:String
})

const Title=mongoose.model("Title",titleSchema)
module.exports={Title}