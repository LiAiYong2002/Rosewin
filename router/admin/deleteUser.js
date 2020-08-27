const {User} = require('../../model/user')
module.exports=async(req,res,next)=>{
    let {uid} = req.query;
    console.log(uid);
    await User.findOneAndDelete({_id:uid})
    res.redirect('/admin/userlist')
}