const {Flower} = require('../../model/flower');
const formidable = require('formidable')
const path = require('path')
module.exports=async(req,res,next)=>{
     // 1.创建表单解析对象
     const form = formidable.IncomingForm();
     // 2.设置文件上传路径
     form.uploadDir = path.join(__dirname,'../','../','public','home','uploads')
     // 3.是否保留文件扩展名
     form.keepExtensions = true;
     form.parse(req,async(err,fields,files)=>{
        await Flower.create({
            flowerName:fields.flowerName,
            shopImgPath:files.shopImgPath.path.split('public')[1],
            shopPrice:fields.shopPrice,
            appPrice:fields.appPrice,
            shopDate:fields.shopDate,
            shopClick:fields.shopClick,
            shopType:fields.shopType,
            flowerId:fields.flowerId,
        })
        console.log(fields);
        res.redirect('/admin/goodslist')
    })
}