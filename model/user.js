const mongoose= require("mongoose");
const userSchema=mongoose.Schema({
    username:{
        type:String,
        required:true,
        minlength:2,
        maxlength:14
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        minlength:6,
        maxlength:16,
        required:true
    },
    role:{
        type:String,
        default:'normal'
    },
    state:{
        type:Number,
        default:0
    }
})

const User=mongoose.model("User",userSchema);





module.exports={User}