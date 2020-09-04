const {Flower} = require('../../model/flower');
const pagnation = require('mongoose-sex-page')
module.exports = async(req,res,next)=>{
    let user=req.session.user
    let search = true
    let{name,currentPagr} = req.query;
    let result = await pagnation(Flower).find({flowerName:{$regex:name}}).page(currentPagr).size(15).display(5).exec()
    res.render("admin/goodslist",{
        result,user,search,name
    })
}