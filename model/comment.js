const mongoose=require("mongoose")

const commentSchema=mongoose.Schema({
    cid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Flower"
    },
    uid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    time:{
        type:Date
    },
    content:{
        type:String
    }
})

const Comment=mongoose.model("Comment",commentSchema);
module.exports={
    Comment
}