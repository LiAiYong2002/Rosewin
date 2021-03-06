const {Title}=require("../../model/title")
const {Flower}=require("../../model/flower")
const {Cart}=require("../../model/cart");
const pageation= require("mongoose-sex-page");
module.exports=async(req,res,next)=>{
  let flowers;
  let count;
  let clicks;
  let prices=1;
  let priceClass;
  let clname
  let p_num;
  
  // 获取参数
  let {shopType,page,date,click,price}=req.query
  if (shopType==null) {
    shopType="鲜花"
  }
 req.app.locals.hua=shopType
//  查找头部分类
  let titles=  await Title.find()

  // 如果page date click为空时查找商品类型
  if (!page&&!date&&!click) {
    flowers= await pageation(Flower).find({shopType:shopType}).page(page).size(16).display(2).exec();
    clname=1
  }

  // 如果有价格那么通过商品类型和价格大小排序
  if(price>=1){
    p_num=1
    clname=2
    flowers= await pageation(Flower).find({shopType:shopType}).sort("shopPrice").page(page).size(16).display(2).exec();
    prices=0;
    priceClass=1
  }else{
    if (price==undefined||price=="") {
      flowers= await pageation(Flower).find({shopType:shopType}).page(page).size(16).display(2).exec();
    }else{
      p_num=0
      prices=1;
      clname=2
      flowers= await pageation(Flower).find({shopType:shopType}).sort("-shopPrice").page(page).size(16).display(2).exec();
    }
  }

  
  // 如果有时间就通过时间大小来排序
  if(date){
    count=1
    clname=1
    flowers= await pageation(Flower).find({shopType:shopType}).sort("-shopDate").page(page).size(16).display(2).exec();
  }
  // 如果有点击量就根据点击量来排序
  if(click){
    clicks=1;
    clname=1
    flowers= await pageation(Flower).find({shopType:shopType}).sort("-shopClick").page(page).size(16).display(2).exec();
  }

  let user=req.session.user
  if (user) {
    let resultCart=await Cart.find({uid:user._id})
    res.render("home/flower",{
      titles,
      flowers,
      shopType,
      count,
      clicks,
      prices,
      priceClass,
      clname,
      p_num,
      user,
      resultCart
  })
  }else{
    res.render("home/flower",{
      titles,
      flowers,
      shopType,
      count,
      clicks,
      prices,
      priceClass,
      clname,
      p_num,
      user
  })
  }
   
}