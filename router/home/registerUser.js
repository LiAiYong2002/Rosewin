const {User}=require("../../model/user")
module.exports=async(req,res,next)=>{
    let user=req.body
    if (user.email.trim()==""||user.username.trim()==""||user.password.trim()=="") {
         // 检查账号密码是否填写
       res.render("home/error",{
        msg:"所有内容必须填写后提交"
       });
    } else {
        await User.create(user)
        res.redirect("/home/login")
    }
    
}