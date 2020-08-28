const {Flower} = require('../../model/flower')
module.exports=async(req,res,next)=>{
    let {uid} = req.query;
    await Flower.findOneAndDelete({_id:uid})
    res.redirect('/admin/goodslist')
}