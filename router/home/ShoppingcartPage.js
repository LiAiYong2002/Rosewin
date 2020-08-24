const {Title}=require("../../model/title")
const {Cart}=require("../../model/cart");
const {User}=require("../../model/user");
module.exports=async(req,res,next)=>{
  let titles=  await Title.find();
  let user=req.session.user

  if (user) {
    let resultCart=await Cart.find({uid:user._id})
    res.render("home/Shoppingcart",{
      titles,
      user,
      resultCart
    })
  }else{
    res.render("home/error",{
      titles,
      user,
      msg:"请先登录"
    })
  }

 
    
}