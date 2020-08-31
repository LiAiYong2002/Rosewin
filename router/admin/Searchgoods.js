const {Flower} = require('../../model/flower');
const pagnation = require('mongoose-sex-page')
module.exports = async(req,res,next)=>{
    let userText = req.body.name;
    let user=req.session.user
    let search = true
    // console.log(userText);
    let result = await pagnation(Flower).find({flowerName:{$regex:userText}}).page(1).size(10).display(3).exec()
    // console.log(result);
    res.render("admin/goodslist",{
        result,user,search
    })
}