const {Title}=require("../../model/title")
const {Detail}=require("../../model/detail")
const {Cart}=require("../../model/cart");
module.exports=async(req,res,next)=>{
  let titles=  await Title.find()
  let user=req.session.user
let {flowerid}=req.query;
if (flowerid==null) {
  flowerid=1
}
let details=await Detail.findOne({flowerId:flowerid})
if (user) {
  let resultCart=await Cart.find({uid:user._id})
  res.render("home/goodsRedrose",{
    titles,
    details,
    user,
    resultCart
})
}else{
  res.render("home/goodsRedrose",{
    titles,
    details,
    user
})
}
   
}