const {User} = require('../../model/user')
const pagnation = require('mongoose-sex-page')
module.exports = async(req,res,next)=>{
    let user=req.session.user
    let search = true
    let{name,currentPagr} = req.query;
    let result = await pagnation(User).find({username:{$regex:name}}).page(currentPagr).size(1).display(3).exec()
    res.render("admin/userlist",{
        result,user,search,name
    })
}