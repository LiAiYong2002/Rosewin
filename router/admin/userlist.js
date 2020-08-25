const {User} = require('../../model/user')
const pagnation = require('mongoose-sex-page');
module.exports=async(req,res,next)=>{
        let{currentPage} = req.query;
        let result = await pagnation(User).find().page(currentPage).size(1).display(2).exec()
        console.log(result);
        
        res.render("admin/userlist",{
            result
        })
}