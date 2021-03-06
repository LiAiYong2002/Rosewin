const {Title}=require("../../model/title")
const {Cart}=require("../../model/cart");
const {User}=require("../../model/user");
module.exports=async(req,res,next)=>{
  let titles=  await Title.find();
  req.app.locals.hua=''

  let user=req.session.user
  let xiaoji=[]
  if (user) {
    // 根据用户id查找下面的商品
    let resultCart=await Cart.find({uid:user._id})
    // 循环商品数量加载小计
    resultCart.forEach((item,index) => {
      let subtotal=item.subtotal
      let cartCount=item.cartCount
      xiaoji.push(subtotal*cartCount)
    });
    res.render("home/Shoppingcart",{
      titles,
      user,
      resultCart,
      xiaoji
    })
  }else{
    res.render("home/error",{
      titles,
      user,
      msg:"请先登录"
    })
  }

 
    
}