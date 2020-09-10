const {User}=require("../../model/user")
module.exports=async(req,res,next)=>{
    let user=req.body
    if (user.email.trim()==""||user.username.trim()==""||user.password.trim()=="") {
         // 检查账号密码是否填写
       res.render("home/error",{
        msg:"所有内容必须填写后提交"
       });
    } else {
        // 用户创建成功后向数据库添加该用户信息
        await User.create(user)
        // 注册成功后直接登录
        let find=await User.findOne({email:user.email})
        req.session.user=find
        res.redirect("/home/huazan")
    }
    
}