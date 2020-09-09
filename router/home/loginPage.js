const {Title}=require("../../model/title")
const {Cart}=require("../../model/cart");
module.exports=async(req,res,next)=>{
  let titles=  await Title.find()
  let user=req.session.user
  req.app.locals.hua=''
  if (user) {
    let resultCart=await Cart.find({uid:user._id})
    res.render("home/login",{
      titles,
      user,
      resultCart
    })
  }else{
    res.render("home/login",{
      titles,
      user
  })
  }

    
}