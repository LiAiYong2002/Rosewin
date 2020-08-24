const {User}=require("../../model/user");
const session = require("express-session");
module.exports=async(req,res,next)=>{
    let {email,password}=req.body
        let findUser=await User.findOne({email:email});
        if (findUser) {
           if (password==findUser.password) {
            //    req.session.username=findUser.username;
            //    req.app.locals.user=findUser;
            //    req.session.user=JSON.stringify(findUser);
               req.session.user=findUser;
            res.send({message:"邮箱验证成功",isok:true,pwd:"密码验证成功",pok:true})
           } else {
            res.send({message:"邮箱验证成功",isok:true,pwd:"密码验证失败",pok:false})
           }
        } else {
            res.send({message:"用户不存在，请重新输入",isok:false,pwd:"密码验证失败",pok:false})
        }
    
}