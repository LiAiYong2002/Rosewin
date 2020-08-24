const {User}=require("../../model/user")
module.exports=async(req,res,next)=>{
    let {email}=req.body;
    let findUser= await User.findOne({email:email});
    if(findUser){
        res.send({message:'邮箱已被注册，请重新填写',isok:false});
    }else{
        res.send({message:'邮箱注册成功',isok:true});
    }
}