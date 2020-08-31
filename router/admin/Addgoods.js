const {Flower} = require('../../model/flower');
const formidable = require('formidable')
const path = require('path');
const goodsAdd = require('./goodsAdd');
module.exports=async(req,res,next)=>{
     // 1.创建表单解析对象
     const form = formidable.IncomingForm();
     // 2.设置文件上传路径
     form.uploadDir = path.join(__dirname,'../','../','public','home','img','uploads')
     // 3.是否保留文件扩展名
     form.keepExtensions = true;
     let user=req.session.user
     let findFlower = await Flower.find();
     let flowerLegth = findFlower.length+1;
     form.parse(req,async(err,fields,files)=>{
        //  console.log(fields,files.shopImgPath.name);
         if(fields.flowerName==""||fields.shopPrice==""||fields.appPrice == "" ||files.shopImgPath.name==""){
             let flag=false
             res.render("admin/goodsAdd",{
                 isok:flag,
                 msg:"内容不能为空",
                 user,
                 flowerLegth
             })
         }else{
            await Flower.create({
                flowerName:fields.flowerName,
                shopImgPath:files.shopImgPath.path.split('public')[1],
                shopPrice:fields.shopPrice,
                appPrice:fields.appPrice,
                shopDate:fields.shopDate,
                shopClick:0,
                shopType:fields.shopType,
                flowerId:fields.flowerId,
            })
            res.redirect('/admin/goodslist')
         }
    })
    
}