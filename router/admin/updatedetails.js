const {Detail} = require('../../model/detail')
const formidable = require('formidable')
const path = require('path');
module.exports=async(req,res,next)=>{
    let user=req.session.user;
    let {id} = req.query;
    // 1.创建表单解析对象
    const form = formidable.IncomingForm();
    // 2.设置文件上传路径
    form.uploadDir = path.join(__dirname,'../','../','public','home','img','uploads')
    // 3.是否保留文件扩展名
    form.keepExtensions = true;

    form.parse(req,async(err,fields,files)=>{
    await Detail.updateOne({_id:id},{
        flowerId:fields.flowerId,
        smallImgPath:files.smallImgPath.path.split('home')[1],
        bannerImgPath:files.smallImgPath.path.split('home')[1],
        moreImgPath:files.moreImgPath.path.split('home')[1],
        flowerTitle:fields.flowerTitle,
        flowerPrice:fields.flowerPrice,
        appPrice:fields.appPrice,
        flowerNum:fields.flowerNum,
        material:fields.material,
        pack:fields.pack,
        flowerLanguage:fields.flowerLanguage
    })
        res.redirect('/admin/goodslist')
    })
}