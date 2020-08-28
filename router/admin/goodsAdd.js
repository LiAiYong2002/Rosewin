const {Flower} = require('../../model/flower');
const path = require('path')
module.exports=async(req,res,next)=>{
    let {message,id} = req.query;
    let findFlower = await Flower.find();
    let flowerLegth = findFlower.length+1;
    let user=req.session.user
    if(id){
        let findUser = await Flower.findOne({_id:id})
        let imgpath =  findUser.shopImgPath.substr(1);
        res.render('admin/goodsAdd',{
            message,
            edituder:findUser,
            link:'/admin/updaategoods',
            btnText:'修改',
            imgpath,
            user
        })
    }else{
        res.render('admin/goodsAdd',{
            message,
            link:'/admin/Addgoods',
            btnText:'新增',
            flowerLegth,
            user
        })
    }
}
