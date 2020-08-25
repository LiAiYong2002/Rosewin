const {Flower} = require('../../model/flower')
const pagnation = require('mongoose-sex-page')
module.exports=async(req,res,next)=>{
    let {currentPagr} = req.query;
    let result = await pagnation(Flower).find().page(currentPagr).size(10).display(5).exec();
    console.log(result);
    res.render("admin/goodslist",{result})
}