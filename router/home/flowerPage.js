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
  
  let {shopType,page,date,click,price}=req.query
  if (shopType==null) {
    shopType="鲜花"
  }
 
  let titles=  await Title.find()

 
  if(price>=1){
    p_num=1
    clname=2
    flowers= await pageation(Flower).find({shopType:shopType}).sort("shopPrice").page(page).size(16).display(2).exec();
    prices=0;
    priceClass=1
  }else{
    flowers= await pageation(Flower).find({shopType:shopType}).sort("-shopPrice").page(page).size(16).display(2).exec();
    prices=1;
    clname=2
  }

if (!req.query.page&&!req.query.date&&!req.query.click&&!req.query.price) {
  flowers= await pageation(Flower).find({shopType:shopType}).page(page).size(16).display(2).exec();
  clname=1
}

  
  if(date){
    count=1
    clname=1
    flowers= await pageation(Flower).find({shopType:shopType}).sort("-shopDate").page(page).size(16).display(2).exec();
  }
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