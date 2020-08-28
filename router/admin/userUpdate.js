const {User} = require("../../model/user")
module.exports=async(req,res,next)=>{
    let {id} = req.query
    let user=req.session.user
    let findUser = await User.findOne({_id:id})//查找一条数据
    let role = findUser.role;
    res.render("admin/userUpdate",{findUser,user,role})
}