const {User} = require('../../model/user')
const pagnation = require('mongoose-sex-page');
module.exports=async(req,res,next)=>{
        req.app.locals.SelectMen = 'user'
        let user=req.session.user
        let{currentPage} = req.query;
        let result = await pagnation(User).find().page(currentPage).size(1).display(3).exec()
        res.render("admin/userlist",{
            result,user
        })
}