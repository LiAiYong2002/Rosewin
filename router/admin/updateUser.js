const {User} = require("../../model/user")
module.exports = async(req,res,next) => {
let user = req.body;    
let {id} = req.query;
    // 修改数据库的数据
    await User.updateOne({_id:id},{
        username:user.username,
        email:user.email,
        role:user.role,
        state:user.state
    })
    res.redirect("/admin/userlist")
}

