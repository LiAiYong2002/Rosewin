const {Title}=require("../../model/title")
const {Cart}=require("../../model/cart");
const {flowerdetail} = require("../../model/flowerdetail")
module.exports=async(req,res,next)=>{
  let {id} = req.query
  let Fowerdetail = await flowerdetail.findOne({flowerId:id})
req.app.locals.hua=''
  let titles=  await Title.find()
  let user=req.session.user
  if (user) {
    let resultCart=await Cart.find({uid:user._id})
    res.render("home/flowerdetai",{
      titles,
      user,
      resultCart,
      Fowerdetail
    })
  }else{
    res.render("home/flowerdetai",{
      titles,
      user,
      Fowerdetail
    })
  }
}