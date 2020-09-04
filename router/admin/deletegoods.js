const {Flower} = require('../../model/flower')
const {Detail} = require('../../model/detail')
module.exports=async(req,res,next)=>{
    let {uid} = req.query;
    let {fid} = req.query;
    // console.log(uid,fid);
    await Flower.findOneAndDelete({_id:uid})
    await Detail.findOneAndDelete({flowerId:fid})
    res.redirect('/admin/goodslist')
}