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

    // let filesarr = [];
    // form.on('file', function (filed, file) {
    //     filesarr.push([filed, file]);
    // });//whenever a file is received, this will add the file info to the array


    form.parse(req,async(err,fields,files)=>{   
        // for (let index = 0; index < filesarr.length; index++) {
        //     console.log(filesarr[index]);   
        // }  
        // console.log(files.smallImgPath.path);
    await Detail.updateOne({_id:id},{
        flowerId:fields.flowerId,
        smallImgPath:files.smallImgPath.path.split('home')[1],
        bannerImgPath:files.smallImgPath.path.split('home')[1],
        flowerTitle:fields.flowerTitle,
        flowerPrice:fields.flowerPrice,
        appPrice:fields.appPrice,
        flowerNum:fields.flowerNum,
        material:fields.material,
        pack:fields.pack,
        flowerLanguage:fields.flowerLanguage,
        moreImgPath:files.moreImgPath.path.split('home')[1]
    })
        res.redirect('/admin/goodslist')
    })
}