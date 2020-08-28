 const {User}=require("../../model/user");
const session = require("express-session");
module.exports=async(req,res,next)=>{
    let {email,password}=req.body
        let findUser=await User.findOne({email:email});
        if (findUser) {
           if (password==findUser.password) {
               // req.app.locals.user=findUser;
               req.session.userState=findUser;
               if(req.session.userState.state == 1){
                  res.send({message:"当前账号已被禁用",isok:false,pwd:"无法识别",pok:false})
               }else{
                  req.session.user=findUser;
                  res.send({message:"邮箱验证成功",isok:true,pwd:"密码验证成功",pok:true})
               }
           } else {
            res.send({message:"邮箱验证成功",isok:true,pwd:"密码验证失败",pok:false})
           }
        } else {
            res.send({message:"用户不存在，请重新输入",isok:false,pwd:"密码验证失败",pok:false})
        }
    
}