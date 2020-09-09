const {Title}=require("../../model/title")
const {Cart}=require("../../model/cart");
const {User}=require("../../model/user");
module.exports=async(req,res,next)=>{
  let titles=  await Title.find();
  req.app.locals.hua=''

  let user=req.session.user
  let xiaoji=[]
  if (user) {
    let resultCart=await Cart.find({uid:user._id})
    console.log(user);
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