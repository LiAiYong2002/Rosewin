const {Flower} = require('../../model/flower');
const path = require('path')
module.exports = async(req,res,next)=>{
    let fields = req.body;
    let {id} = req.query;
    // console.log(fields,id);
        await Flower.updateOne({_id:id},{
            flowerName:fields.flowerName,
            // shopImgPath:fields.shopImgPath.path.split('admin')[1],
            shopPrice:fields.shopPrice,
            appPrice:fields.appPrice,
            // shopDate:fields.shopDate,
            shopClick:fields.shopClick,
            shopType:fields.shopType,
            flowerId:fields.flowerId,
        })
        res.redirect('/admin/goodslist')
}