const {Flower} = require('../../model/flower')
const pagnation = require('mongoose-sex-page')
module.exports=async(req,res,next)=>{
    req.app.locals.SelectMen = 'goods'
    let user=req.session.user
    let {currentPagr} = req.query;
    let result = await pagnation(Flower).find().page(currentPagr).size(15).display(5).exec();
    // console.log(result);
    res.render("admin/goodslist",{result,user})
}