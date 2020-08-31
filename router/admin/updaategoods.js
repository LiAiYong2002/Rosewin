const {Flower} = require('../../model/flower');
const path = require('path')
module.exports = async(req,res,next)=>{
    let fields = req.body;
    let {id} = req.query;
    // console.log(fields,id);
    // console.log(await Flower.find({_id:id}));
    // console.log(fields);
        await Flower.updateOne({_id:id},{
            flowerName:fields.flowerName,
            // shopImgPath:fields.shopImgPath.path.split('admin')[1],
            shopPrice:fields.shopPrice,
            appPrice:fields.appPrice,
            shopDate:fields.shopDate,
            // shopClick:fields.shopClick,
            shopClick:0,
            shopType:fields.shopType,
            flowerId:fields.flowerId,
        })
        res.redirect('/admin/goodslist')
}