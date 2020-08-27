const {User} = require("../../model/user")
module.exports=async(req,res,next)=>{
    let {id} = req.query
    let findUser = await User.findOne({_id:id})//查找一条数据
    // console.log(findUser);
    
    res.render("admin/userUpdate",{findUser})
}