const {Flower} = require('../../model/flower');
const path = require('path')
module.exports=async(req,res,next)=>{
    let {message,id} = req.query;
    if(id){
        let findUser = await Flower.findOne({_id:id})
        let imgpath =  'home'+findUser.shopImgPath
        res.render('admin/goodsAdd',{
            message,
            edituder:findUser,
            link:'/admin/updaategoods',
            btnText:'修改',
            imgpath
        })
    }else{
        res.render('admin/goodsAdd',{
            message,
            link:'/admin/Addgoods',
            btnText:'新增'
        })
    }
}
