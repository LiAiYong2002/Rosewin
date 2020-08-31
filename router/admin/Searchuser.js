const {User} = require('../../model/user')
const pagnation = require('mongoose-sex-page')
module.exports = async(req,res,next)=>{
    let userText = req.body.name;
    let user=req.session.user
    let result = await pagnation(User).find({username:{$regex:userText}}).page(1).size(20).display(3).exec()
    // console.log(result,userText);
    res.render("admin/userlist",{
        result,user
    })
}