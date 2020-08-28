const {User} = require('../../model/user')
module.exports=async(req,res,next)=>{
    let {uid} = req.query;
    await User.findOneAndDelete({_id:uid})
    res.redirect('/admin/userlist')
}