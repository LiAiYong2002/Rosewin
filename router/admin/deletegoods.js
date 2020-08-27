const {Flower} = require('../../model/flower')
module.exports=async(req,res,next)=>{
    let {uid} = req.query;
    console.log(uid);
    await Flower.findOneAndDelete({_id:uid})
    res.redirect('/admin/goodslist')
}